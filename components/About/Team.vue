<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);

const services = ref([
  {
    name: "Chinye Okonkwo",
    title: "CEO",
    image: "ceo",
  },
  {
    name: "Edwina Nwaogu",
    title: "SENIOR MANAGEMENT CONSULTANT EXPERTISE",
    image: "smce",
  },
  {
    name: "Edwina Nwaogu",
    title: "SENIOR MANAGEMENT CONSULTANT EXPERTISE",
    image: "picture-place",
  },
  {
    name: "Edwina Nwaogu",
    title: "SENIOR MANAGEMENT CONSULTANT EXPERTISE",
    image: "picture-place",
  },
  {
    name: "Edwina Nwaogu",
    title: "SENIOR MANAGEMENT CONSULTANT EXPERTISE",
    image: "picture-place",
  },
  {
    name: "Edwina Nwaogu",
    title: "SENIOR MANAGEMENT CONSULTANT EXPERTISE",
    image: "picture-place",
  },
]);

const getSlidesPerView = computed(() => {
  if (window.innerWidth <= 768) {
    return 1;
  } else if (window.innerWidth <= 1190) {
    return 2;
  } else {
    return 3;
  }
});

const getSpaceBetween = computed(() => {
  if (window.innerWidth >= 768) {
    return 30;
  } else {
    return undefined;
  }
});

const resetBtnValues = () => {
  prevClicked.value = false;
  nextClicked.value = false;
};
</script>
<template>
  <div id="team" class="py-14 lg:py-[120px] w-full">
    <div class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]">
      <div class="flex lg:items-center justify-center w-full mb-10">
        <div class="text-center">
          <h2
            class="font-bold leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] capitalize"
          >
            meet our amazing team
          </h2>
          <p class="mt-2 md:text-lg w-full max-w-[523px]">
            We provide you experienced consultants to help you and your company
            become more successful in the future.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col md:flex-row justify-center flex-wrap gap-3">
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex flex-col w-full md:w-[298px]"
          >
            <img class="w-full" :src="`/img/${service.image}.png`" />
            <div class="flex items-center px-4 py-8 border h-[158px] text-center border-blue-2" :class="idx === 0 ? 'bg-blue-2 text-white' : ''">
              <div class="flex flex-col w-full">
                <h3 class="font-semibold text-2xl">
                  {{ service.name }}
                </h3>
                <p class="text-sm font-medium mt-2 px-4">
                  {{ service.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="location" />
      </div>
      <div class="mt-24 flex flex-col items center text-center">
        <div class="flex justify-center w-[320px] mx-auto">
          <img src="/img/location.png" alt="placeholder">
        </div>
        <h3 class="font-semibold mt-10 leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] capitalize">Our Location</h3>
        <p class="text-lg mt-2 ">London, United Kingdon</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
