<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
   <SiteNavigation />
   <HomeView></HomeView>
   <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HomeView from './components/homeView.vue';
import SiteNavigation from './components/siteNavigation.vue';

</script>

<style lang="scss" scoped>

</style>