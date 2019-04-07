<template>
  <v-container>
    <v-layout column justify-space-around align-center fill-height>
      <v-flex xs12 text-xs-center tag="h1">Links</v-flex>
      <v-flex v-for="link in links" :key="link.title" xs12 text-xs-center wrap tag="p">
        {{ link.title }}: <a :href="link.link">{{ link.link }}</a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Links",
  data() {
    return {
      links: [
        { title: 'Dataset', link: 'https://www.kaggle.com/keplersmachines/kepler-labelled-time-series-data' },
        { title: 'My GitHub', link: 'https://github.com/renellc' }
      ]
    }
  }
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

p {
  opacity: 0;
  line-height: 2em;
  transition-delay: 0.5s;
  animation: slowmoveup 1.5s forwards;
}

p:nth-child(2) {
  animation-delay: 0.5s;
}

p:nth-child(3) {
  animation-delay: 0.85s;
}
</style>
