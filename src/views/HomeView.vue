<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="search for the city or state"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0#004E71]"
      />
      <ul
        v-if="mapboxSearchResult"
        class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
      >
        <p v-if="searchError">
          Sorry man! something went wrong. Please try again.
        </p>
        <p v-if="!searchError && mapboxSearchResult.length === 0">
          Sorry man! There isn't any place you are looking for. Search something
          else.
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResult"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
    <div class="flex flex-col gap-4">
      <Suspense>
        <cityList />
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import cityList from "../components/cityList.vue";

const router = useRouter();
const mapBoxkey =
  "pk.eyJ1Ijoic2hhaGFiLWNyNyIsImEiOiJjbHBqazY3MGgwMHI4MmtqeHZtY3VvZmd0In0.MgRNEi8DQx_7O4Oj40U0XQ";
const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResult = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);

  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapBoxkey}&types=place`
        );
        mapboxSearchResult.value = result.data.features;
        console.log("Cristofer", mapboxSearchResult.value.length);
      } catch {
        searchError.value = true;
      }
      return;
    }
    mapboxSearchResult.value = null;
  }, 300);
};

const previewCity = (payload) => {
  // this.router.push()
  const [city, state, country] = payload.place_name.split(",");
  const [lng, lat] = payload.geometry.coordinates;
  router.push({
    name: "cityView",
    params: { state: state, city: city },
    query: {
      lat: lat,
      lng: lng,
      preview: true,
    },
  });
};
</script>

<style lang="scss" scoped></style>
