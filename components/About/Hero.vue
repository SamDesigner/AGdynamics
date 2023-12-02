<template>
    <div class="md:max-w-[1440px] mx-auto custom_bg h-[727px]">
        <div class=" mx-auto flex items-center h-full md:px-[64px]">
            <div class="w-full md:w-[798px] h-[458px] border-l-[10px] border-white ">
                <div 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                class="w-full rounded-tr-[50px] rounded-br-[50px] h-full custom_gradient  flex flex-col items-center justify-center">
                    <div class="w-full md:w-[616px] flex flex-col gap-[20px]">
                 
                            <h1 class="custom text-[30px] md:text-[38px] font-[700] leading-[40px] md:leading-[52px] text-primaryGreen ">Empowering Agriculture Through Aggregation</h1>
                     
                        <p class="sans text-[18px] font-[400] leading-[30px] about_paragraph">Discover how we revolutionize agriculture with our Agro-Commodity Aggregation services, providing efficiency and transparency in the trading of essential commodities.</p>
                        <NuxtLink>
                            <button @click="startAnimation" class="bg-primaryYellow text-dark  py-[19.609px] px-[29.4px] w-[210px] rounded-[8px]">Get Started</button>
                        </NuxtLink>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

        export default{
            mounted(){
                gsap.from('.custom' , {
                    y: -150,
                    duration: 5
                })
            }

        }
</script>


<style scoped>
    .custom_bg{
        background: url('/img/farmland.png');
        background-position: center;
        background-size: cover;
    }
    .custom_gradient{
/*         
        border-ri: rgba(255, 255, 255, 0.40); */

        background: rgba(232, 253, 240, 0.90);
    }
    .about_paragraph{
        color: #475467;
    }
 
</style>