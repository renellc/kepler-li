<template>
  <v-toolbar>
    <v-toolbar-title class="headline text-uppercase">
      <span>Kepler</span>
      <span class="font-weight-light">li</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <template v-if="windowDim.width >= 425">
        <v-btn flat>
          <v-icon>info</v-icon>&nbsp;About
        </v-btn>
        <v-btn flat>
          <v-icon>link</v-icon>&nbsp;Links
        </v-btn>
      </template>
      <template v-else>
        <v-btn icon flat>
          <v-icon>info</v-icon>
        </v-btn>
        <v-btn icon flat>
          <v-icon>link</v-icon>
        </v-btn>
      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "StarsToolbar",
  data() {
    return {
      windowDim: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.windowDim = {
          width: window.innerWidth,
          height: window.innerHeight
        };
      });
    });
  }
};
</script>
