<template>
  <v-layout row wrap @click="expand = !expand">
    <v-flex xs2>{{ starData.starid }}</v-flex>
    <v-flex xs10>Simplified graph goes here</v-flex>
    <v-flex shrink>
      <v-expand-transition>
        <div v-show="expand">
          Stats go here
        </div>
      </v-expand-transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'StarDisplay',
  props: {
    starData: {
      starid: Number,
      haspossibleexoplanets: Boolean,
      min: Number,
      max: Number,
      std: Number,
      simplified: Array
    },
  },
  data() {
    return {
      expand: false
    };
  },
  computed: {
    range: function() {
      return this.starData.max - this.starData.min;
    },
  },
}
</script>

