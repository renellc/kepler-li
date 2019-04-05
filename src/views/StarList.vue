<template>
  <v-container grid-list-md>
    <v-layout v-resize="onWindowResize" column>
      <!-- The filter options menu -->
      <v-flex text-xs-right xs4>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">
              Sort 
              <v-icon>filter_list</v-icon>
            </v-btn>
          </template>

          <v-list>
            <!-- Each option within the filter options menu. Each option is binded to a click event
            that changes the sorting of the stars associated with the option.-->
            <v-list-tile
              v-for="(sortOption, i) in sortOptions"
              :key="i"
              @click="changeSortBy(sortOption.option)"
            >
              <v-list-tile-title>{{ sortOption.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>

      <!-- Loads in the StarDisplay components populated with star data. -->
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

      <!-- The button that loads the next 10 stars. -->
      <v-flex text-xs-center xs4>
        <v-btn color="primary" @click="getStarData" ref="loadStars">Load Next</v-btn>
      </v-flex>

      <v-fab-transition>
        <v-btn
          v-show="showFab"
          color="pink"
          class="back-to-top-fab"
          @click="scrollToTop"
          dark
          fixed
          bottom
          right
          fab
        >
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-fab-transition>
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
      /**
       * The array that will hold the stars' data in. Each object has the following schema:
       * {
       *   haspossibleexoplanets: boolean,
       *   max: float,
       *   min: float,
       *   simplified: Array<float>,
       *   starid: int,
       *   std: float
       * }
       */
      starData: [],
      sortOptions: [
        { title: "Default", option: "starid" },
        { title: "Range", option: "range" },
        { title: "Std. Deviation", option: "std" },
        { title: "Possible Planets", option: "haspossibleexoplanets" }
      ],
      gotData: false,
      windowWidth: window.innerWidth,
      dataOffset: 0,
      showFab: false,
      sortBy: "starid"
    };
  },
  created() {
    this.getStarData();
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", () => {
        this.showFab = this.updateShowFab();
      });
    });
  },
  methods: {
    getStarData: function() {
      fetch(
        "https://api-keplerli.herokuapp.com/api/stars?sort=" +
          this.sortBy +
          "&offset=" +
          this.dataOffset,
        {
          cache: "force-cache"
        }
      )
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
    },
    changeSortBy: function(sortBy) {
      this.sortBy = sortBy;
      this.dataOffset = 0;
      this.gotData = false;
      this.starData = [];
    },
    updateShowFab: function() {
      return window.innerHeight + window.pageYOffset > window.innerHeight * 1.5;
    },
    scrollToTop: function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior:
          window.innerHeight + window.pageYOffset < window.innerHeight * 3
            ? "smooth"
            : "auto"
      });
    }
  }
};
</script>

<style scoped>
.back-to-top-fab {
  margin-right: 1em;
  margin-bottom: 0.5em;
}
</style>
