<template>
  <v-container grid-list-md>
    <v-layout v-resize="onWindowResize" column>
      <v-flex
        v-for="star in starData"
        :key="star.starid"
        :xs4="windowWidth >= 768"
        :xs6="windowWidth < 768"
        :xs12="windowWidth < 320"
      >
        <v-hover>
          <StarDisplay
            :starData="star"
            :class="`elevation-${hover ? 8 : 2}`"
            slot-scope="{ hover }"
          />
        </v-hover>
      </v-flex>
      <v-flex text-xs-center xs4>
        <v-btn color="primary" @click="getStarData">Load Next</v-btn>
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
      starData: [],
      gotData: false,
      windowWidth: window.innerWidth,
      dataOffset: 0
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
      fetch("http://localhost:4000/api/stars?offset=" + this.dataOffset, {
        cache: "force-cache"
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.starData.push(...data);
          this.gotData = true;
          this.dataOffset += data.length;
        });
    },
    onWindowResize: function() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>
