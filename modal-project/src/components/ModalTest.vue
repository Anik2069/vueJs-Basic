<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme ==='sale' }">
      <h1>{{ header }}</h1>
      <p>Modal Content will be here</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["header","theme"],
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
};
</script>



<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: wheat;
}
.backdrop {
  top: 0px;
  position: fixed;
  /* background: black; */
  width: 100%;
}
.sale p{
  color: royalblue;
}
</style>