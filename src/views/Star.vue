<template>
  <v-container>
    <div v-if="!loaded" class="progress-circle">
    <v-progress-circular v-if="!loaded" indeterminate color="primary"></v-progress-circular>
    </div>
    <v-layout v-else column>
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
      chartdata: {
        labels: [...Array(3194).keys()],
        datasets: [
          {
            labelt: "Light Intensity",
            data: null,
            pointRadius: 0
          }
        ]
      },
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
          console.log(data);
          this.starData = data;
          this.chartdata.datasets[0].data = this.starData.fluxpoints;
          this.chartoptions.scales.yAxes[0].ticks.min = this.starData.min - 50;
          this.chartoptions.scales.yAxes[0].ticks.max = this.starData.max + 50;

          let sum = 0;
          for (let i = 0; i < this.starData.fluxpoints.length; i++) {
            sum += this.starData.fluxpoints[i];
          }
          this.starData.mean = (sum / this.starData.fluxpoints.length).toFixed(3);
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
