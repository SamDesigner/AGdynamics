<template>
    <div class="max-w-[1440px] mx-auto md:pb-[112px] flex flex-col gap-[100px] ">
        <div class="  flex  flex-col gap-[80px]   lg:px-[64px] ">
            <div class="flex justify-center">
                <div 
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="1000"
                class="w-[724px] flex flex-col gap-[25px]">
                    <h3 class="text-primaryGreen text-center">What we do</h3>
                    <div class="flex flex-col gap-[24px]">
                        <h1 class="text-secondary text-[36px] md:text-[40px] font-[500] leading-[48px] text-center ">Trade Commodities with Ease and Transparency</h1>
                        <p class="text-[16px] leading-[24px] font-[400] text-customGray-3 text-center">Our platform makes trading commodities simple and transparent. From creating an account to executing trades, we provide a seamless experience.</p>
                    </div>
                  
                </div>
            </div>
            <div class="w-full lg:h-[477px] bg-faintYellow flex flex-col  gap-[25px] p-[16px] lg:flex-row justify-between rounded-tl-[83px] rounded-bl-[83px] rounded-br-[20px] lg:items-center">
                <div class="flex-1 flex px-[16px]  flex-col lg:items-center ">
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
                <div class="flex-1 w-full   flex lg:justify-end  lg:items-end">
                    <div class="w-full lg:w-[514px] h-[300px] md:h-[450px]">
                        <img class="w-full h-full" src="/img/factory.png" />
                    </div>
                </div>
            </div>
           
        </div>

         <SubCommodities />
    </div>

</template>