<template>
  <div>This a page for a single star</div>
</template>

<script>
import Router from '../router.js';

export default {
  name: "Star",
  mounted() {
    this.fetchStar();
  },
  methods: {
    fetchStar: function() {
      fetch(`http://localhost:4000/api/stars/${this.$route.params.starId}`)
        .then(res => {
          if (res.status === 404) {
            Router.push('/error');
          } else {
            return res.json();
          }
        })
        .then(data => {
          console.log(data);
        })
        .catch(fetchErr => {
          console.log(fetchErr);
        });
    }
  }
};
</script>

<style>
</style>
