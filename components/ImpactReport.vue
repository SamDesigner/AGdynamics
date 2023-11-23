<template>
    <div class="bg-primaryGreen">
        <div class="max-w-[1440px] mx-auto p-[64px] flex flex-col gap-[80px]">
            <div class="pt-[40px] flex flex-col gap-[40px]">
                <div class="text-white flex flex-col justify-center items-center gap-[15px]">
                    <h1 class="text-[48px] font-[700] ">Global impact report</h1>
                    <p class="w-[646px] text-center">We empower farmers and miners with warehouse digitization, commodity aggregation, and export fulfillment services, enhancing yields and expanding market access</p>
                </div>
                <div class="flex justify-between">
                    <div class="bg-white w-[227px] rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-[10px] flex flex-col justify-center items-center p-[24px]">
                        <h1 class="text-green-3 text-[48px] font-[700] text-green-3 ">+200</h1>
                        <p class="text-[18px] text-dark font-[400]">Jobs created</p>
                    </div>
                    <div class="bg-white card_bg w-[258px] flex flex-col justify-center items-center text-white">
                        <h1 class=" text-[48px] font-[700] ">334565</h1>
                        <p class="text-[18px] text-dark font-[400] text-white">Hectares cultivated</p>
                    </div>
                    <div class="bg-white card_bg w-[258px] flex flex-col justify-center items-center text-white">
                        <h1 class=" text-[48px] font-[700] ">+400</h1>
                        <p class="text-[18px] text-dark font-[400] text-white">Wear house available</p>
                    </div>
                </div>
            </div>

            <div class="h-[577px]">
                <img class="object_fit" src="/img/map.png" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card_bg{
        border-radius: 40px 10px 40px 40px;
        background: linear-gradient(220deg, rgba(192, 252, 212, 0.19) 15.01%, rgba(155, 248, 186, 0.11) 34.33%);
    }
    .object_fit{
        object-fit: cover;
    }
</style>