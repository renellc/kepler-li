<template>
  <v-container>
    <v-layout column justify-space-around align-center fill-height>
      <v-flex xs12 text-xs-center tag="h1">Page Not Found</v-flex>
      <v-flex xs6 text-xs-center wrap tag="p">
        The page requested could not be accessed at this time.
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
h1 {
  opacity: 0;
  margin-bottom: 0.5em;
  font-size: 350%;
  font-style: normal;
  font-weight: 300;
  animation: slowmoveup 1.5s forwards;
}
p {
  opacity: 0;
  line-height: 2em;
  transition-delay: 0.5s;
  animation: slowmoveup 1.5s forwards;
}

p:nth-child(2) {
  animation-delay: 0.5s;
}
</style>
