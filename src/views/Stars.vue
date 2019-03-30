<template>
  <div>
    <h1>Stars</h1>
    <StarDisplay
      v-if="gotData"
      v-bind:starData="starData[0]"
    />
  </div>
</template>

<script>
import StarDisplay from "../components/StarDisplay";

export default {
  name: "Stars",
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
      fetch("https://api-keplerli.herokuapp.com/api/stars")
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
