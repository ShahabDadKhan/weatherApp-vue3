<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input type="text"
      v-model="searchQuery"
      placeholder="search for the city or state"
      class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0#004E71]"
      >
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const mapBoxkey = "pk.eyJ1Ijoic2hhaGFiLWNyNyIsImEiOiJjbHBqazY3MGgwMHI4MmtqeHZtY3VvZmd0In0.MgRNEi8DQx_7O4Oj40U0XQ"
const searchQuery = ref('')
const queryTimeout = ref(null)
const mapboxSearchResult = ref(null)

const getSearchResults = () => {
  clearTimeout(queryTimeout)

  queryTimeout.value = setTimeout(async()=>{
    if(searchQuery.value != '') {
      const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token${mapBoxkey}`)
    }
  }, 300)
}
</script>

<style lang="scss" scoped>

</style>