<template>
<h1>Jobs List</h1>
    <div v-for="job in jobs" :key="job.id">
        Job Title: {{ job.title }} <small>vacancy: {{ job.vacancy }}</small><br>
    </div>
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