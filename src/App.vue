<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <transition name="router-fade" mode="out-in">
        <router-view/>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";

export default {
  name: "App",
  components: {
    Toolbar
  }
};
</script>

<style>
@keyframes fadein {
  from {
    transform: translateY(1em);
    opacity: 0;
  }
  to {
    transform: translateY(0em);
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    transform: translateY(0em);
    opacity: 1;
  }
  to {
    transform: translateY(-1em);
    opacity: 0;
  }
}

.router-fade-enter-active {
  animation: fadein 0.5s ease-out;
}

.router-fade-leave-active {
  animation: fadeout 0.5s ease-out;
}
</style>
