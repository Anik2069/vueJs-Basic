<template>
  <h1>Jobs List</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      Job Title: {{ job.title }}</router-link
    >
    <small>vacancy: {{ job.vacancy }}</small
    ><br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      // jobs :
      // [
      //     {id:1,title:'Software Enginer',vacancy:50},
      //     {id:2,title:'Software QA',vacancy:50},
      //     {id:3,title:'Software UI/UX',vacancy:50}
      // ],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log("Error Message"));
  },
};
</script>

<style lang="">
</style>