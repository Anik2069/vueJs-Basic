<template>
<h1>Jobs Details</h1>
    <p>Paramter Check {{ $route.params.id }}</p>
</template>

<script>
export default {
    data(){
        return{
            jobs : 
            [
                {id:1,title:'Software Enginer',vacancy:50},
                {id:2,title:'Software QA',vacancy:50}
            ],
        }
    }
}
</script>

<style lang="">
    
</style>