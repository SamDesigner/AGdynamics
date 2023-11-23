<template>
    <div class="pt-[23px] pb-[112px]  flex gap-[80px]">
        <div class="card overflow-hidden w-[617px] h-[519px] bg-faintGreen h-[542px] pt-[64px] pl-[14px] pr-[11px] rounded-tl-[20px] rounded-bl-[20px] flex flex-col justify-between">
            <div class="">
                    <div class="w-[449px] h-[137px]  mx-auto">
                        <h1 class="text-maroon text-[24px] font-[800] ">Agro Services:</h1>
                        <p class="w-[449px] text-[12px] font-[400] leading-[23px] ">Discover our tech solutions, including warehouse digitization, uplifting farmers for increased productivity and profitability."</p>
                        <Nuxt-link>
                            <div class="flex gap-[4px]">
                                <span class="text-primaryGreen font-[500] text-[19px]">Learn more</span>
                                <img src="/svg/arrow-right.svg" />
                            </div>
                        </Nuxt-link>
                    </div>
            </div>

            <div>
                <img src="/img/semi_circle.png" />
            </div>
        </div>
        <div class="card overflow-hidden w-[617px] h-[519px] bg-faintGreen h-[542px] pt-[64px] pl-[14px] pr-[11px] rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-between">
            <div class="">
                    <div class="w-[449px] h-[137px]  mx-auto">
                        <h1 class="text-maroon text-[24px] font-[800] ">Solid Mineral Services</h1>
                        <p class="w-[449px] text-[12px] font-[400] leading-[23px] ">We are Commited to miners through commodity aggregation and export fulfillment, driving sustainable growth in the mining industry.</p>
                        <Nuxt-link>
                            <div class="flex gap-[4px]">
                                <span class="text-primaryGreen font-[500] text-[19px]">Learn more</span>
                                <img src="/svg/arrow-right.svg" />
                            </div>
                        </Nuxt-link>
                    </div>
            </div>

            <div class="flex items-center justify-center">
                <img src="/img/bulb.png" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card{

        border: 1.064px solid rgba(192, 192, 192, 0.35);

    }
</style>