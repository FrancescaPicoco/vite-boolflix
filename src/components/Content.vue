<script>
import AppSearch from './AppSearch.vue'
import axios from 'axios';
import { store } from "../store.js"
export default{
    components:{
        AppSearch
},
nome :"Content",
    data(){
        return{
            store,
        }
    },
    methods: {
		getFilms(){
			axios.get(`${this.store.apiCall}${this.store.key}query=${this.store.searchedFilm}`).then(r=>{
				console.log(r.data , "ecco i risultati della chiamata")
		        this.store.filmCard = r.data
                console.log(this.store.filmCard,"ecco le cards dei film cercati")
			});
		}
    }	
}

</script>

<template>
    <div id="wrapper">
        <AppSearch @search="getFilms()"/>
        
    </div>

</template>

<style scoped>
#wrapper{
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    margin-right: auto;
    margin-left: auto;
    padding: 3rem;
    background-color: rgb(45, 13, 76);
} 
</style>