<template>
  <div v-if="gotData">
    <StarDisplay
      v-for="(star, i) in starData"
      v-bind:key="i"
      v-bind:starData="star"
    />
  </div>
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
      gotData: false,
    };
  },
  created() {
    this.getStarData();
  },
  watch: {
    '$route': 'getStarData'
  },
  methods: {
    getStarData: function() {
      fetch("http://localhost:4000/api/stars")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.starData = data;
          this.gotData = true;
        });
    }
  }
};
</script>
