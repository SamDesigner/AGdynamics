<template>
    <footer class="px-[24px] bg-white py-[40px]">
        <div class="dark_bg max-w-[1440px] mx-auto rounded-[20px]">
            <div class="pt-[100px] pb-[200px] px-[120px] lg:px-[64px] flex justify-between  items-start gap-[40px] lg:gap-[100px]">
                <div class="w-[399px] flex flex-col gap-[48px]">
                    <div class="flex flex-col   gap-[30px]">
                        <NuxtLink to="/" class="flex justify-start">
                            <img src="/svg/footer_icon.svg" />
                        </NuxtLink>
                        <p class="leading-[21px] text-[14px] font-[400] text-white ">
                            Welcome to AG Dynamics, a pioneering force in the convergence of technology and the agro and mineral sectors. Established with a vision to redefine the landscape of resource optimization, our journey is shaped by a commitment to innovation, sustainability, and global connectivity.
                        </p>
                    </div>
                    <p class="text-[14px] font-[400] leading-[21px] text-white">© 2023 AGDynamics All rights reserved.</p>
                </div>


                <div class=" md:flex  md:flex-row gap-[100px] ">

                   
                    <ul class="flex flex-col gap-[20px] text-white whitespace-nowrap">
                        <li>
                            <Nuxt-link to="#">
                                Company
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="/about">
                                About Us 
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                                Services
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                                Join Us
                            </Nuxt-link>
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-[20px] text-white whitespace-nowrap">
                        <li>
                            <Nuxt-link to="#">
                                Contact
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                                Help Center
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                                FAQ
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                                Contact
                            </Nuxt-link>
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-[20px] text-white whitespace-nowrap">
                        <li>
                            <Nuxt-link to="#">
                                Legal
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                               Terms of Use
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                                Privacy Policy
                            </Nuxt-link>
                        </li>
                        <li>
                            <Nuxt-link to="#">
                                Join Us
                            </Nuxt-link>
                        </li>
                    </ul>
                </div>    
            </div>
        </div>
    </footer>

</template>


<style scoped>
    .dark_bg{
        background-color: #1C734A;
    }
</style>