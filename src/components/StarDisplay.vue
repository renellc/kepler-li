<template>
  <v-layout row wrap @click="showStats">
    <v-flex text-xs-center xs2>{{ starData.starid }}</v-flex>
    <v-flex xs10 ref="graph" fluid fill-height>
      <trend
        v-if="hasGraphEl"
        :data="starData.simplifiedfluxpoints"
        :gradient="['#23074d', '#cc5333']"
        :width="graphWidth"
        :height="graphHeight"
        :min="starData.min"
        :max="starData.max"
        auto-draw
        smooth
      ></trend>
    </v-flex>
    <v-flex shrink xs10 offset-xs2>
      <v-expand-transition>
        <div v-show="expand">Stats go here</div>
      </v-expand-transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "StarDisplay",
  props: {
    starData: {
      starid: Number,
      haspossibleexoplanets: Boolean,
      min: Number,
      max: Number,
      std: Number,
      range: Number,
      simplifiedfluxpoints: Array
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.windowWidth = window.innerWidth;
      this.updateGraphDim();
    });
  },
  data() {
    return {
      graphWidth: 0,
      graphHeight: 0,
      expand: false,
      windowWidth: 0,
    };
  },
  computed: {
    hasGraphEl: function() {
      return this.$refs.graph !== null;
    }
  },
  methods: {
    updateGraphDim: function() {
      if (this.windowWidth !== window.innerWidth) {
        this.graphWidth = this.$refs.graph.clientWidth;
        this.graphHeight = this.$refs.graph.clientHeight;
        this.windowWidth = window.innerWidth;
      }
    },
    showStats: function() {
      this.expand = !this.expand;
    }
  }
};
</script>

