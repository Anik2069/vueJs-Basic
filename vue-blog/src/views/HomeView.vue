<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-if="showpost" :posts="posts" />
      <button @click="showpost = !showpost">Toggle Post</button>
      <button @click="posts.pop()">Delete a Post</button>
    </div>
    <div v-else>Loading ...</div>
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
    const posts = ref([]);

    const error = ref(null);
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("No Data available");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    load();
    // { id: 1, title: "1st Blog", desc: "Blog comes first now" },
    // { id: 2, title: "2nd Blog", desc: "Blog comes Second now" },
    const showpost = ref(true);
    return { posts, showpost, error };
  },
};
</script>
