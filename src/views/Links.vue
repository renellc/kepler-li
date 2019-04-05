<template>
  <v-container>
    <v-layout column justify-space-around align-center fill-height>
      <v-flex xs12 text-xs-center tag="h1">Links</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Links"
};
</script>

<style>
@keyframes slowmoveup {
  from {
    transform: translateY(0.5em);
    opacity: 0;
  }
  to {
    transform: translateY(0em);
    opacity: 1;
  }
}

h1 {
  opacity: 0;
  margin-bottom: 0.5em;
  font-size: 350%;
  font-style: normal;
  font-weight: 300;
  animation: slowmoveup 1.5s forwards;
}
</style>
