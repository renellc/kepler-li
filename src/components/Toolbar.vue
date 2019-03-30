<template>
  <v-toolbar>
    <v-toolbar-title 
      id="title" 
      class="headline text-uppercase" 
      @mouseover="mouseOver()" 
      @click="pushPage('/')"
    >
      <span>Kepler</span>
      <span class="font-weight-light">li</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <template v-if="windowDim.width >= 425">
        <v-btn flat @click="pushPage('/about')">
          <v-icon>info</v-icon>&nbsp;About
        </v-btn>
        <v-btn flat>
          <v-icon>link</v-icon>&nbsp;Links
        </v-btn>
      </template>

      <template v-else>
        <v-btn icon flat @click="pushPage('/about')">
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
import Router from "../router.js";

export default {
  name: "Toolbar",
  data() {
    return {
      windowDim: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      hovering: false
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
  },
  methods: {
    pushPage: function(path) {
      Router.push(path);
    },
    mouseOver: function() {
      this.hovering = true;
      document.getElementById('title').style.cursor = this.hovering ? "pointer" : "default";
    }
  }
};
</script>
