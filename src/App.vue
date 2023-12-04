<script>
import AppHeader from './components/AppHeader.vue'
import Content from './components/Content.vue'
import axios from 'axios';
import { store } from "./store.js"

export default {
	components: {
		AppHeader,
		Content,
	},
	data() {
		return {
			store,
		}
	},
  mounted() {
		this.getFilms();
	},
    methods: {
		getFilms(){
			axios.get(`${this.store.apiCall}${this.store.key}query=${this.store.searchedFilm}`).then(r=>{
				console.log(r.data)
		        this.store.filmCard = r.data
			});
		},
	}
}
</script>

<template>
   <AppHeader/>
   <Content />
</template>

<style scoped>
</style>
