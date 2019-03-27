<template>
  <v-content>
    <StarsToolbar/>
    <Stars/>
  </v-content>
</template>

<script>
import Stars from '@/components/Stars';
import StarsToolbar from '@/components/StarsToolbar';

export default {
  name: 'stars',
  components: {
    Stars,
    StarsToolbar
  }
}
</script>
