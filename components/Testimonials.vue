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
                testimony:"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
                date: "2 weeks ago",
              },
              {
                name: "Terry Dias",
                testimony:"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
                date: "2 weeks ago",
              },
              {
                name: "Terry Dias",
                testimony:"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference.",
                date: "2 weeks ago",
              },
         
           
    ]);

    const carousel = ref(null);
    const next = () => {
      carousel.value.next();
    };

    const prev = () => {
      carousel.value.prev();
    };
    const breakpoints = {
  // 700px and up
        700: {
          itemsToShow: 2.5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 3.5,
          snapAlign: 'start',
        },
        1440:{
          itemsToShow: 4,
          snapAlign: 'start',
        }
    }
</script>



<template>
  <div class="bg-white px-[16px] lg:px-[64px] py-[112px] flex flex-col gap-[80px]">
    <div class=" flex flex-col gap-[80px]">
      <div class="max-w-[1440px] w-full mx-auto flex flex-col gap-[26px]">
        <h3 class="text-primaryGreen text-[16px] font-[400]">
          Dont take our word for it
        </h3>
        <h1 class="text-[36px] font-[500px] leading-[32px]">
          Hear what our Clients have to say
        </h1>
      </div>
      <div >
        <Carousel 
        ref="carousel"  
        :autoplay="2000"  
        :breakpoints="breakpoints"
        class="max-w-[1440px] mx-auto"
        
       >
       

          <Slide v-for="(testimonial , index) in testimonials" :key="index"  class=" carousel_height py-6"  >
            <div class="carousel__item flex flex-col gap-[44px] shadow-md  custom_card " >
              <div class="h-auto  flex flex-col gap-[13px]">
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
          </Slide>
          <template #addons>
          <Navigation class="invisible" />
          <!-- <div class="absolute left-0">
            <Pagination />
          </div> -->
      
         </template>
        </Carousel>
      
      </div>

    </div>
    <div class="flex justify-end">
         <div class="flex gap-[25px]">
            <button @click="prev"  class="bg-primaryGreen h-[48px] w-[48px] text-white rounded-full flex items-center justify-center "><span><i class="pi pi-chevron-left"></i></span></button>
            <button @click="next" class= "bg-primaryGreen h-[48px] w-[48px] text-white rounded-full flex items-center justify-center "><span><i class="pi pi-chevron-right"></i></span></button>
           
          </div>
      </div>
  </div>
</template>

<style scoped>
.custom_card {
  /* box-shadow: 0px 0px 9.15529px 0px rgba(156, 160, 172, 0.4); */
  border-radius: 32px 32px 0px 32px;
  padding: 23px;

}

.carousel_height{
  height: 100% !important
}
</style>
