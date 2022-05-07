<template>
  <h3>Result is {{ score }} ms</h3>
   <div class="block1" >{{ rank }}</div>

</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: "Not Defined",
    };
  },
  mounted() {
    if (this.score < 5600) {
      this.rank = "Lutha Timing";
    }
  },
};
</script>

<style>
.block1 {
  width: 400px;
  border-radius: 20px;
  background: rgb(243, 2, 2);
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>