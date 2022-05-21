<template>
  <div>
    <router-link :to="{ name: 'DetailsView', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>

    <p>{{ sinppet }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const sinppet = computed(() => {
      return props.post.desc.substring(0, 2) + ".....";
    });

    return { sinppet };
  },
};
</script>