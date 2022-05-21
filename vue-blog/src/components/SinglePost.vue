<template>
    <div>
       <h3>{{ post.title }}</h3> 
       <p>{{ post.desc }}</p>
    </div>
</template>

<script>
export default {
    props:['post']
}
</script>