<template>
  <v-content>
    <Toolbar/>
    <Stars/>
  </v-content>
</template>

<script>
import Stars from '@/components/Stars';
import Toolbar from '@/components/Toolbar';

export default {
  name: 'stars',
  components: {
    Stars,
    Toolbar
  }
}
</script>
