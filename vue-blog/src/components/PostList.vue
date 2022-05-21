<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log("Mounted"));
    onUnmounted(() => console.log("onUnmounted"));
    onUpdated(() => console.log("onUpdated"));
  },
  mounted(){
      console.log("mount using options api")
  }
};
</script>