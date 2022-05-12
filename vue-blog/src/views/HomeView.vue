<template>
  <div class="home"></div>
  <h1 ref="{p}">Name is {{ name }} and age is {{ age }}</h1>
  <button @click="handleClick">Click me</button>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
export default {
  name: "HomeView",
  //compostie API
  setup() {
    let name = "Mr. X";
    let age = 50;

    const p = ref(null);

    const handleClick = () => {
      console.log(p);
    };
    return { name, age, handleClick };
  },
  data() {},
  created() {},
  mounted() {},
};
</script>
