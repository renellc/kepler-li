<template>
  <v-container>
    <v-layout column>
      <v-flex xs12>
        <line-chart
          v-if="loaded"
          :chartdata="chartdata"
          :options="chartoptions"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Router from '../router.js';
import LineChart from '../components/LightChart';

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
        datasets: [{
          labelt: 'Light Intensity',
          data: null,
          pointRadius: 0
        }]
      },
      chartoptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: true,
            ticks: {
              min: 0,
              max: 0
            }
          }]
        }
      }
    }
  },
  mounted() {
    this.fetchStar();
  },
  methods: {
    fetchStar: function() {
      fetch(`https://api-keplerli.herokuapp.com/api/stars/${this.$route.params.starId}`)
        .then(res => {
          if (res.status === 404) {
            Router.push('/error');
          } else {
            return res.json();
          }
        })
        .then(data => {
          console.log(data);
          this.starData = data;
          this.chartdata.datasets[0].data = this.starData.fluxpoints;
          this.chartoptions.scales.yAxes[0].ticks.min = this.starData.min;
          this.chartoptions.scales.yAxes[0].ticks.max = this.starData.max + 100;
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
