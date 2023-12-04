<script>
import { store } from "../store.js";
export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
<div class="searchContainer">
    <input type="text" placeholder="search" v-model="store.searchedFilm"  @keyup.enter="$emit('search')">
    <button @click="search">search</button>
</div>
</template>

<style></style>