<template>
  <div class="home">
    <h1>Home</h1>
    <div>
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([
      { id: 1, title: "1st Blog", desc: "Blog comes first now" },
      { id: 2, title: "2nd Blog", desc: "Blog comes Second now" },
    ]);

    return { posts };
  },
};
</script>
