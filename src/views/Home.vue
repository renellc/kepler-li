<template>
  <div>
    <h1>Home</h1>
    <v-btn @click="pushPage('/stars')">Stars</v-btn>
  </div>
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
