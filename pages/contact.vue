<template>
  <div class="text-blue-2">
    <AppHeader />
    <CareServicesDropdown v-if="dataStore.careServices" />
    <AboutUsDropdown v-if="dataStore.about" />
    <ContactHero />
    <ContactTestimonials />
    <ContactBecause />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore();
</script>

<style scoped>

</style>