<template>
  <h1>{{ title }}</h1>

  <button @click="toggleModal">Open Popup</button>

  <div v-if="showModal">
    <ModalTest header="testing" :text="text" theme="sale" @close="toggleModal"/>
  </div>
</template>

<script>
import ModalTest from "./components/ModalTest.vue";
export default {
  name: "App",
  components: { ModalTest },
  data() {
    return {
      title: "Anik",
      text: "THis is here to lear vue",
      showModal:false,
    };
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
