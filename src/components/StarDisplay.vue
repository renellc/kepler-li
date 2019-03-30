<template>
  <div>
    This is star {{ starData.starId }}.<br/>
    Has exoplanets?: {{ starData.hasPossibleExoplanets }}<br/>
    My range: {{ range }}<br/>
    Standard deviation: {{ starData.stdDev }}<br/>
    Points: {{ starData.simplifiedPoints }}
  </div>
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
  mounted() {
    console.log(this.$props);
  },
  computed: {
    range: function() {
      return this.starData.max - this.starData.min;
    },
  },
}
</script>

