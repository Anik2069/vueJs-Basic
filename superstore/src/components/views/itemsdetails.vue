<template>
  <div class="row"  v-if="item">
    <div class="col-md-6">
      <img :src="item.photo" alt="photo">
    </div>
    <div class="col-md-6">
      <h1>{{item.title}}</h1>
      <p>{{item.description}}</p>
      <p>{{item.price}}</p>
      <button @click="addtocart(item)" class="btn btn-primary">Add to Cart</button>
    </div>

  </div>
  <h3 v-else>Loading</h3>

</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                item:null
            }
        },
        mounted() {
            this.fetchitem();
        },
        methods:{
            fetchitem(){
                var self = this;
                axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response => {
                    self.item = response.data;
                })
            },
            addtocart(item) {
                this.$store.commit('addtocart', item)
            },
        }

    }
</script>

<style scoped>

</style>
