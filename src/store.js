import { reactive } from 'vue'

export const store = reactive({
    apiCall : "https://api.themoviedb.org/3/search/movie?api_key=",
    key : "5ef8b5d9705ad518c726541bad4bd40b&",
    searchedFilm: encodeURI(""),
    filmCard: "" ,
});