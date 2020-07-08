<template>
  <div id="app">
    <router-link :to="{path:'/'}">Home </router-link>
    <router-link :to="{path:'/test'}">Test </router-link>

    <router-view></router-view>
    <!--
    <navbar @search="search2"></navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <inventory @newitem="addcartitem" :items="items"></inventory>

        </div>
        <div class="col-sm-3">
          <cart_team @remove="removeitem" :items="carts"></cart_team>
        </div>

      </div>
    </div>-->
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
            Cart_team, Inventory
        },
        data() {
            return {
                items: [],
                carts: []
            }
        }
        ,
        mounted() {
            console.log(data)
            this.items = data
        }, methods: {
            addcartitem(item) {
                this.carts.push(item)
            },
            removeitem(index) {
                this.carts.splice(index, 1)
            },
            search2(keyword) {
                this.items = data.filter(item => {
                    return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
                });
            },
        }
    }
</script>

<style>
  .container {
    padding-top: 5px;
  }
</style>
