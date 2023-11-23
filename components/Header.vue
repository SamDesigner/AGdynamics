<template>
    <div class="bg-greenBg px-[16px] lg:px-[64px] h-[177px] flex items-center w-full">
        <nav class="bg-white h-[115px] flex justify-between items-center pr-[31px] rounded-[20px] w-full border-[0.5px] border-primaryGreen ">
            <div>
                <img src="/svg/logo.svg" />
            </div>
            <div class="flex gap-[32px] text-[16px]">
                <Nuxtlink to="/about">About Us</Nuxtlink>
                <Nuxtlink>
                    Services
                    <span><i class="pi pi-angle-down"></i></span>
                </Nuxtlink>
                <Nuxtlink >Contact Us</Nuxtlink>
            </div>
            <div class="flex gap-[44px]">
                <Nuxtlink>
                    <button class="bg-customGray py-[19.609px] px-[29.4px]">Learn More</button>
                </Nuxtlink>
                <Nuxtlink>
                    <button class="bg-primaryYellow  py-[19.609px] px-[29.4px]">Get Started</button>
                </Nuxtlink>
            </div>
        </nav>
    </div>
</template>