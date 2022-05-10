<template>
<h1>Jobs Details</h1>
    <p>Paramter Check {{ $route.params.id }} -- Way Two {{ id }}</p>
</template>

<script>
export default {
    props:['id']
    // data(){
    //     return{
    //         id : this.$route.params.id
    //     }
    // }
}
</script>

<style lang="">
    
</style>