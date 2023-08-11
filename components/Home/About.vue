<script setup lang="ts"></script>
<template>
  <div
    class="flex flex-col lg:flex-row-reverse justify-between items-center my-[64px] lg:gap-[64px] px-4 md:px-6 xl:px-0 lg:mt-[180px] mx-auto w-full max-w-[1240px]"
  >
    <div
      class="w-full flex flex-col items-center lg:items-start text-center lg:px-4 xl:px-0 lg:text-left mg:text-left max-w-[436px] md:pr-4"
    >
      <h2
        class="font-bold leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[32px] lg:text-[48px] w-full max-w-[520px] lg:max-w-[436px]"
      >
        Driving<br class="hidden lg:block"> Success Through
        <span class="text-blue-4">Data Driven Insights</span>
      </h2>
      <p class="leading-[28px] text-lg mt-4">
        We ensure organizational success through benchmarking practices and the analysis of proven or evidence based practices. Our expertise in regulations and standards aids in navigating complex environments, securing funding, winning tenders, and meeting all regulatory requirements. Empower your organization's growth with our dedicated support.
      </p>
      <div class="flex mt-10">
        <nuxt-link to="/about" class="bg-blue-4 blue-btn text-white rounded py-4 px-8">
          Learn More
          <Icon class="hovered ml-4" name="mdi:arrow-right" size="18px" />
        </nuxt-link>
      </div>
    </div>
    <div class="mt-32 lg:mt-0 relative w-full max-w-[741px]">
      <img
        src="/img/driving-desk.png"
        alt="picture of people sitting having meeting"
      />
    </div>
  </div>
</template>

<style scoped></style>
