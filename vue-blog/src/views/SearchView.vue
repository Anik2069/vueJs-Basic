<template>
  <div class="search">
    <h1>Search Panel</h1>
    <input @type="text" v-model="search" placeholder="Type Name for filter" />
    <br />
    <p>Search Term -- {{ search }}</p>
    <div v-for="name in searchName" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const search = ref("");
    const names = ref(["Anik", "Rasel", "Atik", "Dipu", "Arman", "Showrov"]);
    const searchName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { search, names, searchName };
  },
};
</script>

<style>
</style>