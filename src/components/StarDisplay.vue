<template>
  <v-layout row wrap @click="expand = !expand">
    <v-flex text-xs-center xs2>{{ starData.starid }}</v-flex>
    <v-flex xs10 ref="graph">
      <trend
        v-if="hasGraphEl"
        :data="starData.simplified"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        :width="graphEl.clientWidth"
        :height="graphEl.clientHeight"
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
      simplified: Array
    }
  },
  mounted() {
    this.graphEl = this.$refs.graph;
  },
  data() {
    return {
      graphEl: null,
      expand: false
    };
  },
  computed: {
    hasGraphEl: function() {
      return this.graphEl !== null
    }
  }
};
</script>

