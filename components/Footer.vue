<template>
    <footer class="px-[16px] bg-white py-[24px]">
        <div class="bg-primaryGreen max-w-[1440px] mx-auto">
            <div class="py-[100px] px-[16px] lg:px-[64px] grid grid-cols-1 lg:grid-cols-5 items-start gap-[40px] lg:gap-[100px]">
                <div class="flex flex-col lg:col-span-2  gap-[30px]">
                    <NuxtLink to="/" class="flex justify-start">
                        <img src="/img/newlogo.png" />
                    </NuxtLink>
                    <p class="leading-[21px] text-[14px] font-[400] text-white ">
                        Welcome to AG Dynamics, a pioneering force in the convergence of technology and the agro and mineral sectors. Established with a vision to redefine the landscape of resource optimization, our journey is shaped by a commitment to innovation, sustainability, and global connectivity.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-[40px] md:flex  md:flex-row justify-between lg:col-span-3 ">

                   
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