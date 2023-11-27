<template>
    <div class="bg-greenBg">
        <div class='max-w-[1440px] mx-auto pb-[122px] pt-[72px] px-[16px] lg:px-[64px]'>
            <div class="flex justify-center">
                <div class="lg:w-[768px] flex flex-col gap-[48px] justify-center items-center">
                    <div class="border-[1px]  border-customGray-2 flex flex-col items-center md:flex-row justify-center py-[10px] px-[18px] gap-[8px] font-[700] md:w-[471px] rounded-[58px] ">
                        <img class="w-fit" src="/svg/sparkle.svg" />
                        <p class="leading-[24px] text-[14px] text-dark sans text-center">A transparent and technology-driven trading experience</p>
                    </div>
                    <div class="flex flex-col items-center gap-[32px]">
                        <div class="flex flex-col gap-[32px]">
                            <h1 class="text-green-1 text-[32px] md:text-[56px] text-center font-[500] leading-[40px] md:leading-[67px] ">Embrace the Future of Export commodity and supply chain</h1>
                            <p class="text-black font-[400] text-[18px] leading-[27px] text-center">Discover a transparent and technology-driven trading experience for a wide range of commodities.</p>
                        </div>
                        <div class="flex gap-[20px] md:gap-[36px] items-center pt-[16px]">
                            <Nuxtlink>
                                <button class="bg-primaryYellow  py-[19.609px] px-[29.4px] md:w-[210px] rounded-[8px]">Get Started</button>
                            </Nuxtlink>
                            <Nuxtlink>
                                <button class="bg-green-2 text-primaryGreen py-[19.609px] px-[29.4px] rounded-[2px]">Learn More</button>
                            </Nuxtlink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ShowcaseGrid />
</template>
