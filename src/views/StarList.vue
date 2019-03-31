<template>
  <v-container grid-list-md>
    <v-layout v-resize="onWindowResize" row wrap>
      <v-flex
        v-for="(star, i) in starData"
        :key="i"
        :xs4="windowWidth >= 768"
        :xs6="windowWidth < 768"
        :xs12="windowWidth < 320"
      >
        <v-hover>
          <StarDisplay
            :starData="star"
            :class="`elevation-${hover ? 12 : 5}`"
            slot-scope="{ hover }"
          />
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
      gotData: false,
      windowWidth: window.innerWidth
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
    },
    onWindowResize: function() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>
