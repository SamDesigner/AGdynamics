<script setup lang="ts">
</script>
<template>
  <div class="flex flex-col mt-[160px] lg:mt-[350px] mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]">
    <div class="flex flex-col text-center lg:text-left lg:flex-row items-center lg:items-start justify-between w-full">
      <h2 class="font-bold px-8 lg:px-0 leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] w-full">We Guide Businesses To <span class="text-blue-4">Achieve Success</span></h2>
      <!-- <p class="mt-3 lg:mt-0 md:text-lg w-full max-w-[523px]">We understand that navigating complex regulations can be a daunting task, but we are here to help. Our team of experienced consultants has a proven track record of success in helping organizations win tenders, secure funding, and comply with regulations.</p> -->
    </div>
    <div
      class="child mt-12 flex gap-5 md:gap-[13px] overflow-x-auto overflow-y-hidden w-full relative"
    >
      <div class="bg-blue-5 text-whiter min-w-[327px] flex flex-col justify-between px-8 pt-6 pb-10 rounded md:min-w-[397px] h-[432px] relative">
        <img class="w-[80px]" src="/svg/competence.svg" alt="competence icon">
        <div
          class="flex flex-col"
        >
          <h4 class="font-semibold text-lg uppercase mb-2">Growth and diversification</h4>
          <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
          <ul class="list-disc text-lg list-inside">
            <li>
              Market Demand Forcasting
            </li>
            <li>
              Diversification of services
            </li>
            <li>
              Market entry strategy
            </li>
            <li>Enabling investment opportunities</li>
          </ul>
        </div>
      </div>
      <div class="bg-grey-2 min-w-[327px] flex flex-col justify-between px-8 pt-6 pb-10 rounded md:min-w-[397px] h-[432px] relative">
        <img class="w-[80px]" src="/svg/documentation.svg" alt="documentation icon">
        <div
          class="flex flex-col"
        >
          <h4 class="font-semibold text-lg uppercase mb-2">License Acquisition</h4>
          <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
          <ul class="list-disc text-lg list-inside">
            <li>
              CQC, RQIA, CIW, Ofsted
            </li>
            <li>
              Application Support
            </li>
            <li>
              Manager interview preparation
            </li>
            <li>Document preparation</li>
          </ul>
        </div>
      </div>
      <div class="bg-grey-2 min-w-[327px] flex flex-col justify-between px-8 pt-6 pb-10 rounded md:min-w-[397px] h-[432px] relative">
        <img class="w-[80px]" src="/svg/trust.svg" alt="trust icon">
        <div
          class="flex flex-col"
        >
          <h4 class="font-semibold text-lg uppercase mb-2">Process Improvement</h4>
          <!-- <p class="text-lg my-2">
            We provide:
          </p> -->
          <ul class="list-disc text-lg list-inside">
            <li>
              Quality audits
            </li>
            <li>
              Rating improvement service
            </li>
            <li>
              Mock inspections
            </li>
            <li>Action plan development</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex mt-10 justify-center">
      <nuxt-link to="/services" class="bg-blue-4 blue-btn text-white rounded py-4 px-8">
        More Services
        <Icon class="hovered ml-4" name="mdi:arrow-right" size="18px"/>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.child {
  scrollbar-width: none;
  -webkit-scrollbar {
    width: 50px;
    display: none;
  }
  -ms-overflow-style: none;
}
</style>