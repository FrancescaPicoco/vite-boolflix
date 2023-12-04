<script>
import AppSearch from './AppSearch.vue'
import axios from 'axios';
import { store } from "../store.js"

export default{
    components:{
        AppSearch
},
    nome :"Header",
    data(){
        return{
            store,
            links : [],
            logo : "BOOLFLIX" 
        }
    },
    methods: {
		getFilms(){
			axios.get(`${this.store.apiCall}${this.store.key}query=${this.store.searchedFilm}`).then(r=>{
				console.log(r.data , "ecco i risultati della chiamata")
		        this.store.filmCard = r.data
			});
		}
    }	
}
</script>

<template>
    <header>
        <div id="header-cont">
            <section>
               <h1>{{ this.logo }}</h1>
               <div class="navbar-cont">
                <AppSearch @search="getFilms()"/>
                  <!-- <Navbar v-for="link in links" href="link.address" :menulinks="link"/> -->
               </div>          
            </section>
        </div>   
    </header>    
</template>

<style scoped>
header{
    background-color: rgb(18, 20, 22);
    height: 20vh;
}
#header-cont{
    width: 80vw;
    margin-right: auto;
    margin-left: auto;
}
h1{
    font-weight: bolder;
    color: red;
    margin-bottom: 0.5rem;
}
.navbar-cont{
    display: flex;
}
section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
}
img{
    width: 60px;
    height: 60px;
}
</style>