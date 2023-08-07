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
    name: "Mrs Obi",
    title: "CQC Regulation 13: Good Governance",
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
  <div class="py-14 lg:py-[120px] w-full">
    <div class="flex flex-col mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]">
      <div class="flex lg:items-center justify-center w-full mb-10">
        <div class="text-center">
          <h2
            class="font-bold leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] capitalize"
          >
            meet our amazing team
          </h2>
          <p class="mt-2 md:text-lg w-full max-w-[523px]">
            We are here to enable you succeed
          </p>
        </div>
        <!-- <div class="hidden md:flex">
          <button @click="prevClicked = true" class="flex min-w-max gap-2 items-center self-start mt-2">
            <Icon name="ic:baseline-arrow-back-ios" size="24px" color="#03989E" />
          </button>
          <button @click="nextClicked = true" class="flex min-w-max gap-2 items-center self-start mt-2">
            <Icon
              name="ic:baseline-arrow-forward-ios"
              size="24px"
              color="#03989E"
            />
          </button>
        </div> -->
      </div>
      <!-- <Swiper
        :modules="[SwiperFreeMode]"
        :height="400"
        :loop="true"
        :effect="'freemode'"
        :slides-per-view="getSlidesPerView"
        :space-between="getSpaceBetween"
      >
        <SwiperSlide
          :style="'font-size: 16px'"
        > -->
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row justify-center flex-wrap gap-3">
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex flex-col w-full md:w-[298px]"
          >
            <img class="w-full" :src="`/img/${service.image}.png`" />
            <div class="flex border-blue-2 items-center px-4 py-8 border h-[158px] text-center" :class="idx === 0 ? 'bg-blue-2 text-white' : ''">
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
      </div>
      <div class="flex mt-10 justify-center">
        <nuxt-link to="/about#team" class="text-blue-4 blue-btn rounded py-4 px-8">
          See More
          <Icon class="ml-2 hovered" name="mdi:arrow-right" size="18px" color="#0073FF"/>
        </nuxt-link>
      </div>
      <!-- </SwiperSlide>
        <SwiperControls class="md:hidden" :clickPrev="prevClicked" :clickNext="nextClicked" @resetBtnValues="resetBtnValues" />
      </Swiper> -->
      <!-- <div
        class="flex justify-center md:justify-start flex-wrap gap-[22px] mt-11"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="border-2 border-light-green flex flex-col justify-between rounded-lg px-6 py-11 w-[380px] h-[399px]"
        >
          <p class="text-center text-grey-4/80 mb-6">{{ service.desc }}</p>
          <div class="flex items-center gap-3">
            <img class="w-[100px]" :src="`/img/${service.image}.jpg`" />
            <div class="flex flex-col">
              <p class="text-xl font-semibold text-primary">{{ service.name }}</p>
              <p class="text-sm font-medium text-black/80 uppercase">
                {{ service.title }}
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
