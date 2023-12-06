import { reactive } from 'vue'

export const store = reactive({
    apiCall : "https://api.themoviedb.org/3/search/movie?api_key=",
    key : "5ef8b5d9705ad518c726541bad4bd40b&",
    searchedFilm: encodeURI(""),
    filmCard: "" ,
    seriesCard: "",
    flagObj: {
        cn:"img/cn.png" , 
        de:"img/de.png" , 
        fi:"img/fi.png" , 
        fr:"img/fr.png" ,
        gb:"img/gb.png" , 
        it:"img/it.png" , 
        jp:"img/jp.png" ,
        no:"img/no.png"
    },
    flagsArray : ['cn','de','fi','fr','gb','it','jp','no'],
    apiCallSerieTv: "https://api.themoviedb.org/3/search/tv?api_key=",
    imgUrl: "https://image.tmdb.org/t/p/w342",

    });