<template>
    <div class="bg-greenBg">
        <div class='max-w-[1440px] mx-auto pb-[122px] pt-[72px] px-[16px] lg:px-[64px]'>
            <div class="flex justify-center">
                <div class="lg:w-[768px] flex flex-col gap-[48px] justify-center items-center">
                    <div 
                    data-aos="fade-down" data-aos-duration="3000"
                    data-aos-easing="ease-out-cubic"
                    class="border-[1px]  border-customGray-2 flex flex-col items-center md:flex-row justify-center py-[10px] px-[18px] gap-[8px] font-[700] md:w-[471px] rounded-[58px] ">
                        <img class="w-fit" src="/svg/sparkle.svg" />
                        <p class="leading-[24px] text-[14px] text-dark sans text-center">A transparent and technology-driven trading experience</p>
                    </div>
                    <div 
                    
                    class="flex flex-col items-center gap-[32px]">
                        <div 
                        data-aos="fade-down" data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300"
                        class="flex flex-col gap-[32px]">
                            <h1 class="text-green-1 text-[32px] md:text-[56px] text-center showcase_header leading-[40px] md:leading-[67px] ">Embrace the Future of Export commodity and supply chain</h1>
                            <p class="text-black font-[400] text-[18px] leading-[27px] text-center">Discover a transparent and technology-driven trading experience for a wide range of commodities.</p>
                        </div>
                        <div 
                       
                        class="flex gap-[20px] md:gap-[36px] items-center pt-[16px]">
                            <Nuxtlink>
                                <button class="bg-primaryYellow  text-dark py-[19.609px] px-[29.4px] md:w-[210px] rounded-[8px]">Get Started</button>
                            </Nuxtlink>
                            <Nuxtlink>
                                <button class="lighter_green text-primaryGreen md:w-[190px] py-[19.609px] px-[29.4px] rounded-[2px]">Learn More</button>
                            </Nuxtlink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ShowcaseGrid />
</template>
<style  scoped>
    .lighter_green{
        background-color: #DBF0E6;
    }
    .showcase_header{
        font-weight: 700;
    }
</style>