<template>
    <div v-if="isOpen" class="h-screen md:hidden fixed w-[90%] custom_index bg-white">
        ldmlgldgmlm
    </div>
    <div class="bg-greenBg relative px-[16px] lg:px-[64px] h-[177px] flex items-center w-full">
      
        <nav class="fixed md:sticky bg-white h-[115px] max-w-[1440px] mx-auto flex justify-between items-center pr-[31px] rounded-[20px] w-8/10 md:w-full border-[0.5px] border-primaryGreen ">
            <NuxtLink to='/'>
                <img src="/svg/logo.svg" />
            </NuxtLink>
            <div class="hidden text-dark-2 md:flex gap-[32px] text-[16px]">
                <NuxtLink to="/about">About Us</NuxtLink>
                <NuxtLink to="#" class="flex items-center gap-[2px]">
                    Services
                    <span><i class="pi pi-angle-down"></i></span>
                </NuxtLink>
                <NuxtLink to="#">Contact Us</NuxtLink>
            </div>
            <div @click="changeIsOpen" class="md:hidden  text-primaryGreen">
                <span><i class="pi pi-bars text-[20px]"></i></span>
            
            </div>
            <div class="flex gap-[44px] hidden lg:flex">
                <NuxtLink>
                    <button class="bg-customGray learn_more text-dark py-[19.609px] px-[29.4px]">Learn More</button>
                </NuxtLink>
                <NuxtLink>
                    <button class="bg-primaryYellow  text-dark py-[19.609px] px-[29.4px]">Get Started</button>
                </NuxtLink>
            </div>
            
        </nav>
      
    </div>
   
</template>
<script>
    export default{

        data(){
            return{
                isOpen : false
            }
        },
        methods:{
            changeIsOpen(){
                this.isOpen = true
            }
        }
    }
</script>
<style scoped>
    .custom_index{
        z-index:1000
    }
    .learn_more{
        border: 1px solid #CAC8C8;
    }
</style>