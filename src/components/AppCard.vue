<script>
export default{
    props: ["details"]    
}
</script>

<template>   
    <div class="card">
        <div>IMMAGINE</div>
        <h3>{{ details.original_title}}</h3>
        <p>{{ details.original_language }}</p> 
        <p>{{ details.overview }}</p>
        <p>{{ details.popularity }}</p>
        <p>{{ details.release_date }}</p>
        <p>{{ details.title }}</p>      
    </div>  
</template>

<style scoped>
   .card{
    width: calc((100% / 5) - 3rem);
    margin: 1.5rem;
    background-color: slategray;
    color: black;
   }
   img{
    width: 100%;
    height: 100%;
   }
</style>