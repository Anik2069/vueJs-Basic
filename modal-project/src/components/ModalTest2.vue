<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme ==='sale' }">
      <slot></slot>
      <div class="actions">
         <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["theme"],
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