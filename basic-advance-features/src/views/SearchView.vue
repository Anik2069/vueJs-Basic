<template>
  <div class="search">
    <h1>Search Panel</h1>
    <input @type="text" v-model="search" placeholder="Type Name for filter" />
    <br />
    <p>Search Term -- {{ search }}</p>
    <div v-for="name in searchName" :key="name">
      {{ name }}
    </div>
    <button @click="handltWatch"> Stop Wattching </button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
export default {
  setup() {
    const search = ref("");
    const names = ref(["Anik", "Rasel", "Atik", "Dipu", "Arman", "Showrov"]);
    //WatCh Checking
    const stopWatch = watch(search, () => {
      console.log("Watch Run");
    });
    //WatCh Effect Checking
    const stopWatchEffect = watchEffect(() => {
      console.log("Watch Effect Run", search.value);
    });

    const searchName = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    const handltWatch = () => {
      stopWatch();
      stopWatchEffect();
    };
    return { handltWatch , stopWatch, stopWatchEffect, search, names, searchName };
  },
};
</script>

<style>
</style>