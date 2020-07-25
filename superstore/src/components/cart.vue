<template>
  <ul class="list-group">
    <li class="list-group-item">Item- Price</li>
    <hr>

    <li v-for="(cart,index) in items" :key="index" class="list-group-item"><span>{{ cart.title }}</span>- <span>{{ cart.price }}</span> <span><button class="btn-block btn btn-danger " @click="remove(index)">Delete</button></span></li>
    <hr>
    <li class="list-group-item">Total-{{totalprice}}</li>
  </ul>
</template>
<script>
    export default {


        computed: {
            items(){
              return this.$store.getters.getCart
            },


            totalprice(){
                var total=0;
                this.items.forEach(item =>{
                    total+=parseFloat(item.price)
                })
                return total;
            }
        },
        methods:{
            remove(index){
                this.$store.commit('removeitem',index)
            }
        }

    }
</script>
<style>

</style>
