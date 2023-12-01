<template>
  <div>
    <Suspense>
      <AsyncCity />
      <template #fallback>
        <P>....Loading</P>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCity from "../components/asyncCity.vue";
</script>
