<template>
    <div>
       <h3>{{ post.title }}</h3> 
       <p>{{ sinppet }}</p>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['post'],
    setup(props){
        const sinppet = computed(()=>{
            return props.post.desc.substring(0,2)+'.....'
        })

        return {  sinppet }
    }
}
</script>