import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const about = ref(false);
  const careServices = ref(false);
  const training = ref(false);

  return { about, careServices, training }
})