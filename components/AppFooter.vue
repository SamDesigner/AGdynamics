<template>
  <footer class="bg-blue min-h-[451px] pt-12 flex flex-col justify-between px-4 md:px-6 xl:px-0">
    <div class="flex flex-col-reverse text-center items-center lg:flex-row justify-between w-full max-w-[1240px] mx-auto">
      <div class="mt-20 mb-12 lg:mb-0 lg:mt-0 flex flex-col items-center">
        <nuxt-link to="/">
          <img class="w-[85px] md:w-[154px]" src="/svg/logo-footer.svg" />
        </nuxt-link>
        <p class="text-white text-lg w-full max-w-[310px] mt-4 font-normal">At O C Management Consultant, we transform challenges into opportunities and we guide you to achieve operational excellence.</p>
        <div class="lg:hidden flex border border-white p-10 rounded-full lg:flex-col justify-center md:justify-start gap-10 mt-6">
          <a href="#" target="_blank"><Icon name="mdi:linkedin" size="24px" color="#FFFFFF" /></a>
          <a href="#" target="_blank"><Icon name="ri:instagram-fill" size="24px" color="#FFFFFF" /></a>
          <a href="#" target="_blank"><Icon name="mdi:twitter-box" size="24px" color="#FFFFFF" /></a>
          <a href="#" target="_blank"><Icon name="ic:round-facebook" size="24px" color="#FFFFFF" /></a>
        </div>
      </div>
      <div class="flex flex-col md:flex-row flex-wrap items-center md:items-start gap-y-10 gap-x-[100px]">
        <div class="flex flex-col mt-10 text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Quick Links</h6>
          <nuxt-link class="mb-4" to="/">Strategy Consulting</nuxt-link>
          <nuxt-link class="mb-4" to="/about">Care Services</nuxt-link>
          <nuxt-link class="mb-4" to="/services">About Us</nuxt-link>
        </div>
        <div class="flex flex-col mt-10 text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Resources</h6>
          <nuxt-link class="mb-4" to="/ebooks">eBooks</nuxt-link>
          <nuxt-link class="mb-4" to="/ebooks">Videos</nuxt-link>
          <nuxt-link class="mb-4" to="/services">Training</nuxt-link>
          <nuxt-link class="mb-4" to="/blog">News</nuxt-link>
        </div>
        <!-- <div class="flex flex-col mt-10 text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Social Media</h6>
          <a href="#" target="_blank" class="mb-4">LinkedIn</a>
          <a href="#" target="_blank" class="mb-4">Facebook</a>
          <a href="#" target="_blank" class="mb-4">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div> -->
        <div class="flex flex-col mt-10 text-grey-2">
          <h6 class="text-xl font-semibold uppercase text-white mb-4">Contact Us</h6>
          <p class="mb-4">03337722724</p>
          <!-- <p class="mb-4 break-words">hello@ocmanagementconsultants.co.uk</p> -->
          <!-- <p class="mb-4">Company's Address</p> -->
        </div>
        <div class="hidden lg:flex border border-white p-10 rounded-full md:flex-col justify-center md:justify-start gap-10">
          <a href="#" target="_blank"><Icon name="mdi:linkedin" size="24px" color="#FFFFFF" /></a>
          <a href="#" target="_blank"><Icon name="ri:instagram-fill" size="24px" color="#FFFFFF" /></a>
          <a href="#" target="_blank"><Icon name="mdi:twitter-box" size="24px" color="#FFFFFF" /></a>
          <a href="#" target="_blank"><Icon name="ic:round-facebook" size="24px" color="#FFFFFF" /></a>
        </div>
      </div>
    </div>
    <div class="border-t border-grey-3 py-6">
      <p class="text-center leading-snug text-grey-2">© {{ new Date().getFullYear() }} OC Management Consultants. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>