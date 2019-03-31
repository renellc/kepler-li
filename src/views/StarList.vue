<template>
  <div>
    <h1>StarList</h1>
    <StarDisplay
      v-if="gotData"
      v-bind:starData="starData[0]"
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
