<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="(star, i) in starData" :key="i" xs6>
        <v-hover>
          <StarDisplay :starData="star" :class="`elevation-${hover ? 12 : 5}`" slot-scope="{ hover }"/>
        </v-hover>
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
