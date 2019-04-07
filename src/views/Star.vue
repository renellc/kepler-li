<template>
  <v-container>
    <!-- Show the animated loading spinner if data hasn't loaded yet. -->
    <div v-if="!loaded" class="progress-circle">
      <v-progress-circular v-if="!loaded" indeterminate color="primary"></v-progress-circular>
    </div>

    <!-- Fades in the chart for the star's light intensity, with it's statistics below. -->
    <v-fade-transition>
      <v-layout v-show="loaded" column hide-on-leave="true">
        <v-flex xs12>
          <line-chart :chartdata="chartdata" :options="chartoptions"/>
        </v-flex>

        <v-flex xs12 text-xs-center>
          <v-layout row wrap text-xs-center>
            <v-flex xs4>
              Range:
              <br>
              {{ starData.range }}
            </v-flex>
            <v-flex xs4>
              Lowest Light Intensity:
              <br>
              {{ starData.min }}
            </v-flex>
            <v-flex xs4>
              Highest Light Intensity:
              <br>
              {{ starData.max }}
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- Creates a small space between the two rows -->
        <v-flex xs12 text-xs-center style="marginTop: 3em;">
          <v-layout row wrap text-xs-center>
            <v-flex xs4>
              Standard Deviation:
              <br>
              {{ starData.stddeviation }}
            </v-flex>
            <v-flex xs4>
              Has Possible Exoplanets?:
              <br>
              {{ starData.haspossibleexoplanets }}
            </v-flex>
            <v-flex xs4>
              Mean:
              <br>
              {{ starData.mean }}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-fade-transition>
  </v-container>
</template>

<script>
import Router from "../router.js";
import LineChart from "../components/LightChart";

export default {
  name: "Star",
  components: {
    LineChart
  },
  data() {
    return {
      loaded: false,
      starData: null,
      /**
       * The chart data object that is needed for the Line chart component for vue-chartjs.
       */
      chartdata: {
        labels: [...Array(3194).keys()], // Creates an array of numbers from 0 to 3194.
        datasets: [
          {
            labelt: "Light Intensity",
            data: null,
            pointRadius: 0
          }
        ]
      },
      /**
       * The styling options for the chart.
       */
      chartoptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: true,
              // The following sets the minimum and maximum points that will be shown on the chart.
              ticks: {
                min: 0,
                max: 0
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.fetchStar();
  },
  methods: {
    /**
     * Gets the data for an individual star.
     */
    fetchStar: function() {
      fetch(
        `https://api-keplerli.herokuapp.com/api/stars/${
          this.$route.params.starId
        }`
      )
        .then(res => {
          if (res.status === 404) {
            Router.push("/error");
          } else {
            return res.json();
          }
        })
        .then(data => {
          this.starData = data;
          this.chartdata.datasets[0].data = this.starData.fluxpoints;
          this.chartoptions.scales.yAxes[0].ticks.min = this.starData.min - 50;
          this.chartoptions.scales.yAxes[0].ticks.max = this.starData.max + 50;

          let sum = 0;
          for (let i = 0; i < this.starData.fluxpoints.length; i++) {
            sum += this.starData.fluxpoints[i];
          }
          this.starData.mean = (sum / this.starData.fluxpoints.length).toFixed(
            3
          );
          this.loaded = true;
        })
        .catch(fetchErr => {
          console.log(fetchErr);
        });
    }
  }
};
</script>

<style>
</style>
