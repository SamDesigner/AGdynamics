<script setup lang="ts">
</script>
<template>
  <div class="flex flex-col mt-[160px] lg:mt-[260px] mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]">
    <div class="flex flex-col text-center lg:text-left lg:flex-row items-center lg:items-start justify-between w-full">
      <h2 class="font-bold px-8 lg:px-0 leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] w-full max-w-[507px]">We Guide Businesses To <span class="text-blue-4">Achieve Excellence</span></h2>
      <p class="mt-3 lg:mt-0 md:text-lg w-full max-w-[523px]">We understand that navigating complex regulations can be a daunting task, but we are here to help. Our team of experienced consultants has a proven track record of success in helping organizations win tenders, secure funding, and comply with regulations.</p>
    </div>
    <div
      class="child text-white mt-12 flex gap-5 md:gap-[13px] overflow-x-scroll overflow-y-hidden w-full relative"
    >
      <div class="min-w-[300px] md:min-w-[300px] h-[360px] relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 "
        >
          <h4 class="font-bold text-2xl">Grants</h4>
          <p class="text-neutral-2 text-lg mt-2">
            We help organizations secure funding, develop winning proposals, and comply with regulations.
          </p>
        </div>
        <img
          class=""
          src="/img/grants.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[318px] md:min-w-[300px] h-[360px] relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 "
        >
          <h4 class="font-bold text-2xl">Dependable Healthcare</h4>
          <p class="text-neutral-2 text-lg mt-2">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class=""
          src="/img/bids.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[318px] md:min-w-[300px] h-[360px] relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 "
        >
          <h4 class="font-bold text-2xl">Live-in Care</h4>
          <p class="text-neutral-2 text-lg mt-2">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class=""
          src="/img/qa.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[318px] md:min-w-[300px] h-[360px] relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 "
        >
          <h4 class="font-bold text-2xl">Respite Care</h4>
          <p class="text-neutral-2 text-lg mt-2">
            Domiciliary care is a type of healthcare that is provided in the
            home.
          </p>
        </div>
        <img
          class=""
          src="/img/license.png"
          alt="domicillary care"
        />
      </div>
    </div>
    <div class="flex mt-10 justify-center">
      <nuxt-link to="/services" class="bg-blue-4 text-white rounded py-4 px-8">
        Learn More
        <Icon class="ml-4" name="mdi:arrow-right" size="18px"/>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: linear-gradient(180deg, rgba(11, 18, 27, 0.00) 0%, rgba(11, 18, 27, 0.88) 86.98%);
}
.child {
  scrollbar-width: none;
  -webkit-scrollbar {
    width: 50px;
    display: none;
  }
  -ms-overflow-style: none;
}
</style>