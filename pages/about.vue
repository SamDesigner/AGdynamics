<template>
  <AppHeaderLight />
  <div class="text-blue-2">
    <CareServicesDropdown v-if="dataStore.careServices" />
    <AboutUsDropdown v-if="dataStore.about" />
    <TrainingDropdown v-if="dataStore.training" />
    <AboutHero />
    <AboutBecause />
    <AboutMission />
    <AboutEnroll />
    <AboutTeam />
    <AboutQandA />
    <HomeEnroll />
  </div>
  <!-- <div class="absolute bg-black/75 w-screen h-screen"></div> -->
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/data'
const dataStore = useDataStore();
</script>

<style scoped>

</style>