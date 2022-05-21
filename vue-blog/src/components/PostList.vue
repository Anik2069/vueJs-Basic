<template>
  <div v-for="post in posts" :key="post.id">
    <h1>{{ post.title }}</h1>
    <p>{{ post.desc }}</p>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>