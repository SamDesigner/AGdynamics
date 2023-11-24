<template>
    <div class="bg-greenBg px-[16px] lg:px-[64px] h-[177px] flex items-center w-full">
        <nav class="bg-white h-[115px] flex justify-between items-center pr-[31px] rounded-[20px] w-full border-[0.5px] border-primaryGreen ">
            <div>
                <img src="/svg/logo.svg" />
            </div>
            <div class="flex gap-[32px] text-[16px]">
                <NuxtLink to="/about">About Us</NuxtLink>
                <NuxtLink to="/services">
                    Services
                    <span><i class="pi pi-angle-down"></i></span>
                </NuxtLink>
                <NuxtLink >Contact Us</NuxtLink>
            </div>
            <div class="flex gap-[44px]">
                <NuxtLink>
                    <button class="bg-customGray py-[19.609px] px-[29.4px]">Learn More</button>
                </NuxtLink>
                <NuxtLink>
                    <button class="bg-primaryYellow  py-[19.609px] px-[29.4px]">Get Started</button>
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>