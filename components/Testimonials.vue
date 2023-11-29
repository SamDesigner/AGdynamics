<script setup lang="ts">
import { ref } from "vue";
const prevClicked = ref(false);
const nextClicked = ref(false);

const testimonials = ref([
  {
    name: "Terry Dias",
    testimony:
      "Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
    date: "2 weeks ago",
  },
  {
    name: "Terry Dias",
    testimony:
      "Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
    date: "2 weeks ago",
  },
  {
    name: "Terry Dias",
    testimony:
      "Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
    date: "2 weeks ago",
  },
  {
    name: "Terry Dias",
    testimony:
      "Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
    date: "2 weeks ago",
  },
  {
    name: "Terry Dias",
    testimony:
      "Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
    date: "2 weeks ago",
  },
  {
    name: "Terry Dias",
    testimony:
      "Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
    date: "2 weeks ago",
  },
  {
    name: "Terry Dias",
    testimony:
      "Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
    date: "2 weeks ago",
  },
]);

const getSlidesPerView = computed(() => {
  if (window.innerWidth <= 768) {
    return 1;
  } else if (window.innerWidth <= 1190) {
    return 3;
  } else {
    return 3;
  }
});
const getSpaceBetween = computed(() => {
  if (window.innerWidth >= 768) {
    return 20;
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
  <div class="bg-white px-[64px] py-[112px]">
    <div class="max-w-[1440px] mx-auto flex flex-col gap-[80px]">
      <div class="flex flex-col gap-[26px]">
        <h3 class="text-primaryGreen text-[16px] font-[400]">
          Dont take our word for it
        </h3>
        <h1 class="text-[36px] font-[500px] leading-[32px]">
          Hear what our Clients have to say
        </h1>
      </div>
      <div>
        <Swiper
          :modules="[SwiperFreeMode]"
          :loop="true"
          :effect="'freemode'"
          :height="400"
          :slides-per-view="getSlidesPerView"
          :space-between="getSpaceBetween"
        >
          <SwiperSlide
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="flex flex-col gap-[44px] custom_card h-auto">
              <div class="h-full flex flex-col gap-[13px]">
                <div
                  class="h-[68px] w-[68px] rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden"
                >
                  <img
                    class="rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px]"
                    src="/img/charcoal.jpeg"
                  />
                </div>
                <div class="flex flex-col gap-[13px]">
                  <h3 class="text-dark-1 text-[20px] font-[500] text-[20px]">
                    {{ testimonial.name }}
                  </h3>
                  <div class="flex gap-[3px] items-center">
                    <img src="/svg/fivestar.svg" />
                    <img src="/svg/fivestar.svg" />
                    <img src="/svg/fivestar.svg" />
                    <img src="/svg/fivestar.svg" />
                    <img src="/svg/fivestar.svg" />
                  </div>
                </div>
                <div>
                  <p
                    class="text-[14px] font-[400] text-customGray-3 leading-[22px] w-[235px]"
                  >
                    {{ testimonial.testimony }}
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-[9px]">
                <span>
                  <img src="/svg/google.svg" />
                </span>
                <p class="text-[10px] font-[400] text-customGray-6">
                  {{ testimonial.date }}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperControls
            :clickPrev="prevClicked"
            :clickNext="nextClicked"
            @resetBtnValues="resetBtnValues"
          />
        </Swiper>

        <div>
          <button @click="prevClicked = true" class="bg-red-300 text-white p-2">
            Prev Please
          </button>
          <button @click="nextClicked = true" class="bg-black text-white p-2">
            Next Please
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom_card {
  box-shadow: 0px 0px 9.15529px 0px rgba(156, 160, 172, 0.4);
  border-radius: 32px 32px 0px 32px;
  padding: 23px;
}
</style>
