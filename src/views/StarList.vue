<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(star, i) in starData" v-bind:key="i" xs6>
        <StarDisplay v-bind:starData="star"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StarDisplay from "../components/StarDisplay";

export default {
  name: "StarList",
  components: {
    StarDisplay
  },
  data() {
    return {
      starData: null,
      gotData: false
    };
  },
  created() {
    this.getStarData();
  },
  watch: {
    $route: "getStarData"
  },
  methods: {
    getStarData: function() {
      fetch("http://localhost:4000/api/stars")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.starData = data;
          this.gotData = true;
        });
    }
  }
};
</script>
