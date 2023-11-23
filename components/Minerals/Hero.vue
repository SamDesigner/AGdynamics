<template>
    <div class="bg-white px-[64px] py-[82px]">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-[72px]">
            <div class="flex gap-[72px]">
                <div class="flex-1">
                    <h1 class="text-[56px] font-[800] ">Agro Commodity & Aggregation:</h1>

                </div>
                <div class="flex-1">
                    <p class="text-[16px] font-[400] leading-[31px] text-customGray-3">
                        At AG Dynamics, we play a pivotal role in transforming the landscape of the agro and mineral sectors. Through cutting-edge technology and innovative solutions, we aim to optimize the state's resources, connecting farmers, miners, and investors to a world of new opportunities.
                    </p>
                    <div class="flex gap-[36px] items-center pt-[16px]">
                            <Nuxtlink>
                                <button class="bg-primaryYellow  py-[19.609px] px-[29.4px] w-[210px] rounded-[8px]">Get Started</button>
                            </Nuxtlink>
                            <Nuxtlink>
                                <button class="bg-green-2 text-primaryGreen py-[19.609px] px-[29.4px] rounded-[2px]">Learn More</button>
                            </Nuxtlink>

                    </div>
                </div>
            </div>
            <div class="h-[670px] overflow-hidden w-full">
                <img class="h-full w-full object_fit rounded-tr-[50px] rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px]" src="/img/charcoal.jpeg" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .object_fit{
        object-fit: cover;
    }
</style>