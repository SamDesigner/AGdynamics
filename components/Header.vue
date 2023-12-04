<template>
    <div v-if="isOpen" class="h-screen md:hidden fixed w-[90%] custom_index bg-white">
        ldmlgldgmlm
    </div>
    <div class="bg-greenBg px-[16px] lg:px-[64px] h-[177px] flex items-center  w-full" >
      
        <nav :class="{'fixed-navbar' : isFixed }" class=" bg-white h-[115px] w-full mx-auto flex justify-between items-center pr-[31px] rounded-[20px] w-8/10 md:w-full border-[0.5px] border-primaryGreen ">
            <div class="max-w-[1440px] mx-auto w-full flex justify-between items-center ">
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
                        <button class="bg-primaryYellow  text_secondary py-[19.609px] px-[29.4px]">Get Started</button>
                    </NuxtLink>
                </div>
            </div>

            
        </nav>
      
    </div>
   
</template>
<script>
    export default{

        data(){
            return{
                isOpen : false,
                isFixed:false
            }
        },
        mounted(){
            const scrollThreshold = 40;

            window.addEventListener('scroll', this.handleScroll);

            this.isFixed = window.scrollY >= scrollThreshold;
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods:{
            handleScroll(){
                const scrollY = window.scrollY || window.pageYOffset;
                const scrollThreshold = 100;
                this.isFixed = scrollY >= scrollThreshold;
                

                if (scrollY >= scrollThreshold) {
                    this.isFixed = true;
                } else {
                    this.isFixed = false;
                }
            },
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
    .fixed-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index:3000;
        background-color: white;
        border-radius: 0px !important;
        border:none;
        border-bottom:2px solid #04A44C;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width:100%;

    /* Add a smooth transition effect for smooth appearance */
    transition: all 0.3s ease;
    }
    .router-link-exact-active{
        color:#04A44C
    }
    .text_secondary{
        color:#1E1147;
    }
</style>