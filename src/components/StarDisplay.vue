<template>
  <v-layout row wrap @click="expand = !expand">
    <v-flex text-xs-center xs2>{{ starData.starid }}</v-flex>
    <v-flex xs10 ref="graph">graph</v-flex>
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
  data() {
    return {
      expand: false
    };
  },
};
</script>

