<template>
  <div class="about">
    <h1>Using Refs</h1>
    <p>{{ data.name }} -- {{ data.age }}</p>
    <button @click="updateAge">Update Refs Age</button>
    <h1>Using Reactive</h1>
    <p>{{ data1.name }} -- {{ data1.age }}</p>
     <button @click="updateAge2">Update Reactive Age</button>
  </div>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const data = ref({ name: "Ref", age: 40 });
    const data1 = reactive({ name: "Ref2", age: 40 });
    const updateAge = ()=>{
      data.value.age++;
    }
    const updateAge2 = ()=>{
      data1.age++;
    }
    return { data, data1, updateAge, updateAge2 };
  },
};
</script>
