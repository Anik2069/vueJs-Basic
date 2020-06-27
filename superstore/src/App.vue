<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
        <inventory :items="items"></inventory>

        </div>
        <div class="col-sm-3">
          <cart_team></cart_team>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

    import Navbar from './components/Nav'
    import Cart_team from './components/cart'
    import Inventory from './components/Inventory'
    import data from './data.js'
    export default {
        components: {
            Navbar,
            Cart_team,Inventory
        },
        data(){
          return{
              items:[],
          }
        }
        ,
        mounted() {
            console.log(data)
            this.items =  data
        }
    }
</script>

<style>
  .container {
    padding-top: 5px;
  }
</style>
