<template>
    <div class="custom_bg h-[727px]">
        <div class="max-[1309px]  mx-auto flex items-center h-full px-[64px]">
            <div class="w-[798px] h-[458px] border-l-[10px] border-white ">
                <div class=" rounded-tr-[50px] rounded-br-[50px] h-full custom_gradient flex flex-col items-center justify-center">
                    <div class="w-[616px] flex flex-col gap-[20px]">
                        <h1 class="text-[38px] font-[700] leading-[52px] text-primaryGreen ">Empowering Agriculture Through Aggregation</h1>
                        <p class="sans text-[18px] font-[400] leading-[30px]">Discover how we revolutionize agriculture with our Agro-Commodity Aggregation services, providing efficiency and transparency in the trading of essential commodities.</p>
                        <Nuxtlink>
                            <button class="bg-primaryYellow  py-[19.609px] px-[29.4px] w-[210px] rounded-[8px]">Get Started</button>
                        </Nuxtlink>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .custom_bg{
        background: url('/img/farmland.png');
        background-position: center;
        background-size: cover;
    }
    .custom_gradient{
/*         
        border-ri: rgba(255, 255, 255, 0.40); */

        background: rgba(232, 253, 240, 0.90);
    }
</style>