<template>
  <div class="row">
    <div v-for="(item, index) in items" :key="index" class="card" style="width: 18rem;">
      <router-link :to ="{path:'/itemsdetails/' + item.id}">
        <img class="card-img-top"
             :src="item.photo"
             alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
        </div>
      </router-link>
        <p class="card-text">{{item.price}}</p>
        <a @click="addtocart(item)" class="btn btn-primary">+Add to Cart</a>

    </div>

  </div>
</template>
<script>

    import axios from 'axios'

    export default {
        data() {
            return {

            }
        }
        ,
        computed:{
          items(){
              return this.$store.getters.getInventory
          }
        },
        mounted() {
            this.fetchdata();
        },
        methods: {
            addtocart(item) {
                this.$store.commit('addtocart', item)
            },
            fetchdata() {
                var self = this;
                axios.get('http://localhost:3000/items').then(response => {

                    self.$store.commit('setInventorty',response.data)
                })
            }
        }
    }

</script>
<style>

</style>
