<template>
    <div class="py-[112px] ">
        <div class=" flex  flex-col gap-[80px] ">
            <div class="flex justify-center">
                <div class="w-[724px]">
                    <h3 class="text-primaryGreen text-center">What we do</h3>
                    <div class="flex flex-col gap-[24px]">
                        <h1 class="text-secondary text-[40px] font-[700] leading-[48px] text-center ">Trade Commodities with Ease and Transparency</h1>
                        <p class="text-[16px] leading-[24px] font-[400] text-customGray-3 text-center">Our platform makes trading commodities simple and transparent. From creating an account to executing trades, we provide a seamless experience.</p>
                    </div>
                  
                </div>
            </div>
            <div class="w-full bg-faintYellow h-[477px] flex flex-col lg:flex-row justify-between rounded-tl-[83px] rounded-bl-[83px] rounded-br-[20px] lg:items-center">
                <div class="flex-1 flex  flex-col lg:items-center">
                    <div class=" lg:w-[495px] flex gap-[20px] flex-col">
                        <div class="flex flex-col gap-[20px]">
                            <h1 class="text-maroon text-[24px] font-[700] ">Warehouse Network Development:</h1>
                            <p class="text-customGray-4 leading-[25px] text-[15px] ">Working collaboratively with the government to develop a network of warehouses</p>
                        </div>
                        <Nuxt-link>
                            <div class="flex gap-[4px]">
                                <span class="text-primaryGreen font-[500] text-[19px]">Learn more</span>
                                <img src="/svg/arrow-right.svg" />
                            </div>
                        </Nuxt-link>
                    </div>

                    
                </div>
                <div class="flex-1 w-full flex lg:justify-end lg:items-end">
                    <div class="w-full lg:w-[514px] h-[439px] ">
                        <img src="/img/factory.png" />
                    </div>
                </div>
            </div>
            <SubCommodities />
        </div>


    </div>
    <div class="bg-black h-">

    </div>
</template>