<template>
  <h1>Anik Home</h1>
  <button @click="start" :disabled="isPlaying">Play Now</button>
  <BlockVue v-if="isPlaying" :delay="delay" @end="endGame" />
  <ResultVue :score="score" v-if="showResult" />
</template>

<script>
import BlockVue from "./components/BlockVue.vue";
import ResultVue from "./components/ResultVue.vue";
export default {
  name: "App",
  components: { BlockVue,ResultVue },
  data() {
    return {
      isPlaying: false,
      showResult: false,
      delay: null,
      score: null,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
       this.showResult = false;
    },
    endGame(reactionTime) {
      this.isPlaying = false;
      this.score += reactionTime;
      this.showResult = true;
    },
  },
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
