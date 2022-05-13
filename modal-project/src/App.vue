<template>
  <h1>{{ title }}</h1>

  <button @click="toggleModal">Open Popup</button>
  <button @click="toggleModal2">Slot Popup</button>

  <teleport to=".modals" v-if="showModal">
    <ModalTest
      header="testing"
      :text="text"
      theme="sale"
      @close="toggleModal"
    />
  </teleport>
  <div v-if="showModal2">
    <ModalTest2 theme="sale" @close="toggleModal2">
      <h1>Anik Testing slot</h1>
      <template v-slot:links>
        <a href="#">Singup</a>
      </template>
    </ModalTest2>
  </div>
</template>

<script>
import ModalTest from "./components/ModalTest.vue";
import ModalTest2 from "./components/ModalTest2.vue";
export default {
  name: "App",
  components: { ModalTest, ModalTest2 },
  data() {
    return {
      title: "Anik",
      text: "THis is here to lear vue",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
