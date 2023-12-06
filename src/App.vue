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
}
</script>

<template>
   <AppHeader/>
   <Content />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
<style scoped>
</style>
