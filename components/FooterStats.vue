<template>
    <div class="custom_bg h-[421px]">
        <div class="max-w-[1440px] mx-auto h-full">
            <div class="flex flex-col justify-center items-center h-full gap-[40px]">
                <div class="text-white flex items-center flex-col justify-center  w-[647px] gap-[15px]">
                    <h1 class="text-[48px] font-[700] ">Global impact report</h1>
                    <p class="text-[14px] sans text-center leading-[24px] ">We empower farmers and miners with warehouse digitization, commodity aggregation, and export fulfillment services, enhancing yields and expanding market access</p>

                </div>
                <div class="flex text-white gap-[165px] w-[1051px]">
                    <div class="glass_card flex flex-col justify-center items-center gap-[24px] w-[227px]">
                        <h1 class="text-[48px] font-[700] ">+200</h1>
                        <p class="text-[18px] font-[400] ">Jobs created</p>
                    </div>
                    <div class="glass_card flex flex-col justify-center items-center gap-[24px]">
                        <h1 class="text-[48px] font-[700] ">334565</h1>
                        <p class="text-[18px] font-[400] ">Hectares cultivated</p>
                    </div>
                    <div class="glass_card flex flex-col justify-center items-center gap-[24px]">
                        <h1 class="text-[48px] font-[700] ">+400</h1>
                        <p class="text-[18px] font-[400] ">Wear house available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .custom_bg{
        background:  linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(78, 179, 88, 0.20) 0%, rgba(78, 179, 88, 0.20) 100%), linear-gradient(0deg, rgba(78, 80, 179, 0.20) 0%, rgba(78, 80, 179, 0.20) 100%), url('/img/footerstats.jpeg');
        background-position: center;
        background-size: cover;
    }
    .glass_card{
        width: 227px;
        padding: 24px;
        border-radius: 40px 0px 40px 40px;
        background: linear-gradient(220deg, rgba(192, 252, 212, 0.19) 15.01%, rgba(155, 248, 186, 0.11) 34.33%);
    }
</style>