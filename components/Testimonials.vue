<template>
    <div class="bg-white px-[64px] py-[112px]">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-[80px]">
            <div class="flex flex-col gap-[26px]">
                <h3 class="text-primaryGreen text-[16px] font-[400] ">Dont take our word for it</h3>
                <h1 class="text-[36px] font-[500px] leading-[32px] ">Hear what our Clients have to say</h1>
            </div>
            <div>
                <swiper
                    
                    :modules="modules"
                    :slides-per-view="4"
                    :loop="true"
                    :autoplay="{
                        delay: 2000,
                        disableOnInteraction: true,
                    }"
                    :pagination="{ clickable: true }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    
                   
                >
                    <swiper-slide>
                        <div class="flex flex-col gap-[44px] mr-[20px] custom_card h-auto">
                            <div class="h-full flex flex-col gap-[13px]">
                                <div class="h-[68px] w-[68px] rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                                    <img class="rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px]" src="/img/charcoal.jpeg" />
                                </div>
                                <div class="flex flex-col gap-[13px]">
                                    <h3 class="text-dark-1 text-[20px] font-[500] text-[20px]">Terry Dias</h3>
                                    <div class="flex gap-[3px] items-center">
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                    </div>
                                
                                </div>
                                <div>
                                    <p class="text-[14px] font-[400] text-customGray-3 leading-[22px] w-[235px]">"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference."</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <span>
                                    <img src="/svg/google.svg" />
                                </span>
                                <p class="text-[10px] font-[400] text-customGray-6">2 weeks ago</p>
                            </div>

                            
                        </div>
                    </swiper-slide>


                    <swiper-slide>
                        <div class="flex flex-col gap-[44px] mr-[20px] custom_card h-auto">
                            <div class="h-full flex flex-col gap-[13px]">
                                <div class="h-[68px] w-[68px] rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                                    <img class="rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px]" src="/img/charcoal.jpeg" />
                                </div>
                                <div class="flex flex-col gap-[13px]">
                                    <h3 class="text-dark-1 text-[20px] font-[500] text-[20px]">Terry Dias</h3>
                                    <div class="flex gap-[3px] items-center">
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                    </div>
                                
                                </div>
                                <div>
                                    <p class="text-[14px] font-[400] text-customGray-3 leading-[22px] w-[235px]">"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference."</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <span>
                                    <img src="/svg/google.svg" />
                                </span>
                                <p class="text-[10px] font-[400] text-customGray-6">2 weeks ago</p>
                            </div>

                            
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="flex flex-col gap-[44px] mr-[20px] custom_card h-auto">
                            <div class="h-full flex flex-col gap-[13px]">
                                <div class="h-[68px] w-[68px] rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                                    <img class="rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px]" src="/img/charcoal.jpeg" />
                                </div>
                                <div class="flex flex-col gap-[13px]">
                                    <h3 class="text-dark-1 text-[20px] font-[500] text-[20px]">Terry Dias</h3>
                                    <div class="flex gap-[3px] items-center">
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                    </div>
                                
                                </div>
                                <div>
                                    <p class="text-[14px] font-[400] text-customGray-3 leading-[22px] w-[235px]">"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference."</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <span>
                                    <img src="/svg/google.svg" />
                                </span>
                                <p class="text-[10px] font-[400] text-customGray-6">2 weeks ago</p>
                            </div>

                            
                        </div>
                    </swiper-slide>


                    <swiper-slide>
                        <div class="flex flex-col gap-[44px] mr-[20px] custom_card h-auto">
                            <div class="h-full flex flex-col gap-[13px]">
                                <div class="h-[68px] w-[68px] rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                                    <img class="rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px]" src="/img/charcoal.jpeg" />
                                </div>
                                <div class="flex flex-col gap-[13px]">
                                    <h3 class="text-dark-1 text-[20px] font-[500] text-[20px]">Terry Dias</h3>
                                    <div class="flex gap-[3px] items-center">
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                    </div>
                                
                                </div>
                                <div>
                                    <p class="text-[14px] font-[400] text-customGray-3 leading-[22px] w-[235px]">"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference."</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <span>
                                    <img src="/svg/google.svg" />
                                </span>
                                <p class="text-[10px] font-[400] text-customGray-6">2 weeks ago</p>
                            </div>

                            
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="flex flex-col gap-[44px] mr-[20px] custom_card h-auto">
                            <div class="h-full flex flex-col gap-[13px]">
                                <div class="h-[68px] w-[68px] rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px] overflow-hidden">
                                    <img class="rounded-tr-[32px] rounded-tl-[32px] rounded-br-[32px]" src="/img/charcoal.jpeg" />
                                </div>
                                <div class="flex flex-col gap-[13px]">
                                    <h3 class="text-dark-1 text-[20px] font-[500] text-[20px]">Terry Dias</h3>
                                    <div class="flex gap-[3px] items-center">
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                        <img src="/svg/fivestar.svg" />
                                    </div>
                                
                                </div>
                                <div>
                                    <p class="text-[14px] font-[400] text-customGray-3 leading-[22px] w-[235px]">"Brand are a game-changer. I started as a beginner, and now I can confidently play complex pieces. The personalized instruction and supportive community made all the difference."</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-[9px]">
                                <span>
                                    <img src="/svg/google.svg" />
                                </span>
                                <p class="text-[10px] font-[400] text-customGray-6">2 weeks ago</p>
                            </div>

                            
                        </div>
                    </swiper-slide>
                  
                 
                   <SwiperControls
                        class="hidden"
                        :clickPrev="prevClicked"
                        :clickNext="nextClicked"
                        @resetBtnValues="resetBtnValues"
                    />

                    <div class="md:hidden gap-6 flex">
                        <button
                            @click="prevClicked = true"
                            class="flex min-w-max bg-red-300"
                        >
                            Previous
                        </button>


                        <button
                            @click="nextClicked = true"
                            class="flex bg-black"
                        >
                            Next
                        </button>

                    </div>
                
                  
                </swiper>
               
             
            </div>
        </div>
    </div>
</template>
<style scoped>
    /* .swiper-button-prev::after,
    .swiper-button-next::after {
    display: none;
    } */
    .swiper-button-next {
       height: 10vh !important; 
        background-image: url("/svg/gooogle.svg") !important;
        background-repeat: no-repeat;
}
    .custom_card{
        box-shadow: 0px 0px 9.15529px 0px rgba(156, 160, 172, 0.40);
        border-radius: 32px 32px 0px 32px;
        padding:23px
    }
</style>
<script>
   import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    // Import Swiper styles
    export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data(){
        return{
 
        }
    },

    setup() {
       
        const onSwiper = (swiper) => {
            console.log(swiper);
   
        };
        const onSlideChange = () => {
           
        };
        const next = () =>{
            swiper.nextEl
        }
        return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Scrollbar, A11y , Autoplay],
        };

    },
    };
</script>