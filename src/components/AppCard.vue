<script>
import { store } from "../store.js"
export default {
  name: "AppCard",
    props: ["details"],
	components: {
	},
	data() {
		return {
			store,
		}
  }
}
</script>

<template>   
<div class="card">
  <div class="cardInner">
    <div class="Front">
      <img v-if="details.poster_path" :src= "store.imgUrl + details.poster_path" alt="LOCANDINA">
      <h1 v-else>Copertina non disponibile</h1>
    </div>
    <div class="Back">
        <h3>{{ details.original_title}}</h3>
        <p>{{ details.original_language }}</p> 
        <p>{{ details.overview }}</p>
        <p>{{ details.popularity }}</p>
        <p>{{ details.release_date }}</p>
        <p>{{ details.title }}</p>  
    </div>
  </div>
</div>
</template>
<style scoped>
.card{
 width: calc((100% / 3) - 3rem);
 height: 600px;
 margin: 1.5rem;
 background-color:transparent;
 color: black;
}
img{
 width: 100%;
 height: 100%;
 object-fit: contain;
}
.cardInner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.card:hover .cardInner {
  transform: rotateY(180deg);
}
.Front, .Back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.Front {
  color: black;
}
.Back {
  background-color: #020303;
  color: white;
  transform: rotateY(180deg);
}
</style>