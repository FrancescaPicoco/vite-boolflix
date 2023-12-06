<script>
import AppSearch from './AppSearch.vue'
import AppCard from './AppCard.vue'
import AppCardSeries from './AppCardSeries.vue';
import axios from 'axios';
import { store } from "../store.js"
export default{
    components:{
        AppSearch,
        AppCard,
        AppCardSeries
},
nome :"Content",
    data(){
        return{
            store,
        }
    },
    methods: {
		getFilms(){
			const film = axios.get(`${this.store.apiCall}${this.store.key}query=${this.store.searchedFilm}`).then(r=>{
				console.log(r.data.results , "ecco i risultati della chiamata")
		        this.store.filmCard = r.data.results
                console.log(r.data.results , "ECCO I FILM")

			});
            const series = axios.get(`${this.store.apiCallSerieTv}${this.store.key}query=${this.store.searchedFilm}`).then(r=>{
				console.log(r.data)
		        this.store.seriesCard = r.data.results
                console.log(r.data.results, "ECCO LE SERIE")
			});
		},
    }	
}

</script>

<template>
    <div id="wrapper">
        <div class="searchbar">
           <AppSearch @search="getFilms()" />
        </div>
        <div class="wrappercard">
            <AppCard v-for="film in this.store.filmCard" :details="film"/>
        </div>
        <div class="wrappercard">
            <AppCardSeries v-for="serie in store.seriesCard" :detailsSeries="serie"/>
        </div>            
    </div>

</template>

<style scoped>
#wrapper{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80vw;
    margin-right: auto;
    margin-left: auto;
    padding: 3rem;
    background-color: rgb(45, 13, 76);
} 
.wrappercard{
    display: flex;
    flex-wrap: wrap;
}
.searchbar{
    margin-left: auto;
    margin-right: auto;
}
</style>