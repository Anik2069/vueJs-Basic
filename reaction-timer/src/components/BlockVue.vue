<template>
  <div class="block" v-if="showBlock" @click="endTimer">Click Me</div>
</template>
<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer:null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unmounted");
  },
  methods: {
    startTimer() {
        this.timer = setInterval(()=>{this.reactionTime+=10},10)
    },
    endTimer() {
        clearInterval(this.timer);
         this.showBlock = false;
        console.log('endTimer',this.reactionTime);
        this.$emit('end',this.reactionTime)
    },
  },
};
</script>

<style >
.block {
  width: 400px;
  border-radius: 20px;
  background: rgb(30, 170, 119);
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>