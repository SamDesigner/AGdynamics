<template>
    <div class="bg-faintGreen">
        <div class="h-[10vh] rounded-br-[50%] rounded-bl-[50%] bg-white">

        </div>
        <div class=" px-[16px] lg:px-[64px] py-[112px]">  
            <div class="max-w-[1440px] mx-auto">
                <div class="flex flex-col gap-[72px] ">
                    <div class="flex flex-col lg:flex-row gap-[73px] items-end">
                        <div>
                            <div class="lg:w-[594px] flex flex-col gap-[19px]">
                                <h3 class="sans text-[16px] font-[400] text-primaryGreen">Certified Quality Standards</h3>
                                <div class="flex items-center gap-[40px]">
                                    <div>
                                        <img src="/svg/fda.svg" />
                                    </div>
                                    <div>
                                        <img src="/svg/ancestry-logo.svg" />
                                    </div>
                                    <div>
                                        <img src="/svg/industrious.svg" />
                                    </div>
                                </div>
                                <h1 class="text-[40px] font-[700] text-dark">
                                    Committed to the Highest Quality Assurance.
                                </h1>
                            </div>
                           
                        </div>
                        <div class="lg:w-[618px]">
                            <div class="flex flex-col gap-[31px]">
                                <p class="text-customGray-3 leading-[31px]">
                                 We adhere to strict quality control standards set by regulatory bodies like the FDA and the UK Quality Assurance Company to ensure our products meet the highest quality benchmarks.
                                </p>
                                <Nuxt-link>
                                    <div class="flex gap-[4px]">
                                        <span class="text-primaryGreen font-[500] text-[19px]">Learn more</span>
                                        <img src="/svg/arrow-right.svg" />
                                    </div>
                                </Nuxt-link>
                            </div>

                        </div>

                    </div>
                    <div class="h-[300px] md:h-[670px] w-full overflow-hidden rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] rounded-tr-[2px]">
                        <img class="h-full w-full object_fit rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] rounded-tr-[2px]" src="/img/doctors.jpeg" />
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<style scoped>
    .object_fit{
        object-fit:cover
    }
</style>