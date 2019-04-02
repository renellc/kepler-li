<template>
  <v-container fill-height text-xs-center align-content-center>
    <v-layout row align-content-center wrap>
      <v-flex xs12 wrap>
        <h1>KeplerLI</h1>
        <p>
          Observe the fluctuating light intensity for hundreds of stars in the effort to find
          exoplanets outside of our solar system.
        </p>
        <v-btn color="primary" class="home-button" @click="pushPage('/stars')">Begin</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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

<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slowmoveup {
  from {
    transform: translateY(0.5em);
  }
  to {
    transform: translateY(0em);
  }
}

h1 {
  position: relative;
  font-size: 350%;
  font-weight: 300;
  margin-bottom: 0.5em;
  animation: fadein 1.5s forwards, slowmoveup 1.5s forwards;
}
p {
  position: relative;
  opacity: 0;
  line-height: 2em;
  margin-bottom: 1.5em;
  animation: fadein 1.5s forwards, slowmoveup 1.5s forwards;
  animation-delay: 0.5s;
}

.home-button {
  position: relative;
  opacity: 0;
  animation: fadein 1.5s forwards;
  animation-delay: 1.05s;
}
</style>

