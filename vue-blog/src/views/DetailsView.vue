<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
      <h1>{{ post.title }}</h1>
  </div>
</template>
<script>
import getPost from "../composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>