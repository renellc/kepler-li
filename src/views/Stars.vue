<template>
  <div>
    <h1>Stars</h1>
  </div>
</template>

<script>
export default {
  name: "Stars",
  mounted() {
    fetch("https://api-keplerli.herokuapp.com/api/stars")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }
};
</script>
