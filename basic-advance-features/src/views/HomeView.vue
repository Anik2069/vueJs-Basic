<template>
  <div class="home"></div>
  <h1 ref="p">Name is {{ name }} and age is {{ age }}</h1>
  <button @click="handleClick">Click me</button>
  <h1 ref="">Name is {{ name2 }} and age is {{ age2 }}</h1>
  <input type="text" v-model="name2" >
  <button @click="handleClickV2">Click me 2</button>
  <button @click="age2++">Update Age</button>  
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
      //console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "Hi, Mr";
    };

    const name2 = ref("Mr. X 2");
    const age2 = ref(60);

    const handleClickV2 = () => {
      name2.value = "Md Anik Islam";
      age2.value = "21";
    };
    return { name, name2, age, age2, handleClick, p, handleClickV2 };
  },
  data() {
    score: 5;
  },
  created() {},
  mounted() {},
};
</script>
