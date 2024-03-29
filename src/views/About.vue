<template>
  <v-container>
    <v-layout column justify-space-around align-center fill-height>
      <v-flex xs12 text-xs-center tag="h1">About</v-flex>
      <v-flex xs6 text-xs-center wrap tag="p">
        KeplerLI is a small web application that allows you to view a given star's fluctuating
        light intensity over a certain period of time. These fluctuations are particularly
        interesting as they can tell us whether or not a star might have one or more exoplanets
        orbiting around it. As celestial bodies pass in front of the star, we notice that the
        light intensity received decreases. Recurring fluctuations in the received measured
        light intensity might indicate that one or more exoplanets might be orbiting the star.
        Though this is not conclusive evidence that a star has planets orbiting it, it can
        reveal certain characteristics that match those of already discovered exoplanets, helping
        us refine the way we search for exoplanets. Note that the dataset used on this site only
        uses the test dataset which contains the data for 500 stars.
      </v-flex>
      <v-flex xs6 text-xs-center wrap tag="p">
        The data found in this dataset were derived from the observations made by the Kepler
        Space Telescope and neatly organized by user WΔ on Kaggle. This web application only
        displays a small portion of the full dataset (that contains data for 5000+ stars) that was
        organized by WΔ. The link to the Kaggle page containing the full dataset can be found in
        the links page.
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
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

