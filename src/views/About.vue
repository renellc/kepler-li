<template>
  <v-container>
    <v-layout column justify-center>
      <v-flex xs12 text-xs-center>
        <h1><u>About</u></h1>
      </v-flex>

      <v-flex xs6 text-xs-center>
        <p wrap>
          KeplerLI is a small web application that allows you to view a given star's fluctuating
          light intensity over a certain period of time. These fluctuations are particularly
          interesting as they can tell us whether or not a star might have one or more exoplanets
          orbiting around it. As celestial bodies pass in front of the star, we notice that the
          light intensity received decreases. Recurring fluctuations in the received measured
          light intensity might indicate that one or more exoplanets might be orbiting the star.
          Though this is not conclusive evidence that a star has planets orbiting it, it can
          reveal certain characteristics that match those of already discovered exoplanets, helping
          us refine the way we search for exoplanets.
        </p>
      </v-flex>

      <v-flex x6 text-xs-center>
        <p wrap>
          The data found in this dataset were derived from the observations made by the Kepler
          Space Telescope and neatly organized by user WΔ on Kaggle. This web application only
          displays a small portion of the full dataset that was organized by WΔ. The link to the
          Kaggle page containing the full dataset can be found in the links page.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>
