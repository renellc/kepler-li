<template>
  <div>
    <v-toolbar>
      <!-- Only show the hamburger menu if we are on smaller screen devices. -->
      <v-toolbar-side-icon 
        v-if="windowDim.width < 768" 
        @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
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

      <!-- Only show these if we are on larger screen devices. -->
      <div v-if="windowDim.width >= 768">
        <v-toolbar-items>
          <v-btn flat @click="pushPage('/about')">
            <v-icon>info</v-icon>&nbsp;About
          </v-btn>
          <v-btn flat @click="pushPage('/links')">
            <v-icon>link</v-icon>&nbsp;Links
          </v-btn>
        </v-toolbar-items>
      </div>
    </v-toolbar>

    <!-- This is the items found in the hamburger menu (only shown on smaller screen devices). -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-title>KeplerLI</v-list-tile-title>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in navList" :key="item.title" @click="pushPage(item.path)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
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
      navList: [
        { title: "Stars", icon: "star", path: "/stars" },
        { title: "About", icon: "info", path: "/about" },
        { title: "Links", icon: "link", path: "/links" }
      ],
      hovering: false,
      drawer: null
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
    /**
     * Changes the cursor style when hovering over the toolbar title.
     */
    mouseOver: function() {
      this.hovering = true;
      document.getElementById("title").style.cursor = this.hovering
        ? "pointer"
        : "default";
    }
  }
};
</script>
