<template>
  <v-content>
    <h1>Home</h1>
    <v-btn @click="pushPage('/stars')">Stars</v-btn>
  </v-content>
</template>

<script>
import Router from "../router.js";

export default {
  name: "Home",
  methods: {
    pushPage: function(page) {
      Router.push(page);
    }
  }
};
</script>
