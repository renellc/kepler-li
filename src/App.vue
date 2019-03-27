<template>
  <v-app>
    <v-content>
      <Stars/>
    </v-content>
  </v-app>
</template>

<script>
import Stars from "./views/Stars";
export default {
  name: "App",
  components: {
    Stars
  },
  data() {
    return {
      //
    };
  }
};
</script>