<template>
  <div v-if="job">
    <h1>Jobs Details</h1>
    <p>{{ job.title }}</p>
    <p>Paramter Check {{ $route.params.id }} -- Way Two {{ id }}</p>
  </div>
  <div v-else>
      <p>Loading .....</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log("Error Message"));
  },
};
</script>

<style lang="">
</style>