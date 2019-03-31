<template>
  <div>
    This is star {{ starData.starid }}.<br/>
    Has exoplanets?: {{ starData.haspossibleexoplanets }}<br/>
    My range: {{ range }}<br/>
    Standard deviation: {{ starData.std }}<br/>
    Points: {{ starData.simplified }}
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
  computed: {
    range: function() {
      return this.starData.max - this.starData.min;
    },
  },
}
</script>

