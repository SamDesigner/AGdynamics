<script setup lang="ts"></script>
<template>
  <div
    class="bg-blue h-screen pt-20 md:py-28 px-4 md:px-6 xl:px-0 w-full md:pt-[120px]"
  >
    <div
      class="w-full max-w-[1240px] flex justify-between pt-32 md:pt-20 mx-auto h-full"
    >
      <div class="flex flex-col justify-between w-full h-full">
        <div class="flex justify-between w-full">
          <img class="hidden lg:block w-[146px]" src="/img/hero-left.png" alt="hero left image">
          <div class="text-white text-center w-full max-w-[768px]">
            <h1 class="font-black leading-[42px] md:leading-[54px] lg:leading-[78px] tracking-[-1.5px] text-[32px] md:text-[48px] lg:text-[64px]">
              Business Consultancy That Keeps You <span class="text-yellow">Smiling</span>
            </h1>
            <p class="font-medium text-white tracking-[0.2px] mx-4 mt-6 lg:text-lg">
              Empower your organization's growth and elevate your impact.
            </p>
          </div>
          <img class="hidden lg:block w-[146px]" src="/img/hero-right.png" alt="hero right image">
        </div>
        <div class="-mb-20 md:-mb-40 relative">
          <img class="absolute right-8 xl:-right-8 -top-8" src="/img/play-icon.png" alt="play icon">
          <img src="/img/vid-placeholder.png" alt="placeholder for video">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-hero-bg {
  background-position: center;
  @media screen and (max-width: 768px) {
    background-position: center left -350px;
  }
}
</style>
