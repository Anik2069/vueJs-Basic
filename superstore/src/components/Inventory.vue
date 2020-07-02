<template>
  <div class="row">
    <div v-for="(item, index) in items" :key="index" class="card" style="width: 18rem;">
      <img class="card-img-top"
           :src="item.photo"
           alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.price}}</p>
        <a @click="addtocart(item)" class="btn btn-primary">+Add to Cart</a>
      </div>
    </div>

  </div>
</template>
<script>
    export default {
        props:['items'],
        methods: {
            addtocart(item){
                this.$emit('newitem',item)
            }
    }
    }

</script>
<style>

</style>
