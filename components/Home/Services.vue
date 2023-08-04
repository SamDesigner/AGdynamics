<script setup lang="ts">
</script>
<template>
  <div class="flex flex-col mt-[160px] lg:mt-[350px] mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]">
    <div class="flex flex-col text-center lg:text-left lg:flex-row items-center lg:items-start justify-between w-full">
      <h2 class="font-bold px-8 lg:px-0 leading-[36px] md:leading-[48px] lg:leading-[54px] tracking-[-1.5px] text-2xl md:text-[32px] lg:text-[48px] w-full">We Guide Businesses To Achieve Excellence Through:</h2>
      <!-- <p class="mt-3 lg:mt-0 md:text-lg w-full max-w-[523px]">We understand that navigating complex regulations can be a daunting task, but we are here to help. Our team of experienced consultants has a proven track record of success in helping organizations win tenders, secure funding, and comply with regulations.</p> -->
    </div>
    <div
      class="child text-white mt-12 flex gap-5 md:gap-[13px] overflow-x-auto overflow-y-hidden w-full relative"
    >
      <div class="min-w-[318px] md:min-w-[300px] h-[360px] relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 "
        >
          <h4 class="font-semibold text-lg uppercase">License Applications</h4>
          <p class="text-neutral-2 text-lg mt-4">
            We provide licensing assistance to organizations to ensure compliance with regulations.
          </p>
        </div>
        <img
          class=""
          src="/img/license.png"
          alt="domicillary care"
        />
      </div>
      <div class="min-w-[300px] md:min-w-[300px] h-[360px] relative">
        <div
          class="card absolute flex flex-col justify-end w-full h-full top-0 left-0 p-6 "
        >
          <h4 class="font-bold text-lg uppercase">growth and diversification</h4>
          <p class="text-neutral-2 text-lg mt-4">
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
          <h4 class="font-bold text-lg uppercase">tendering</h4>
          <p class="text-neutral-2 text-lg mt-4">
            We help organizations respond to bids, develop winning applications, and procure goods and services.
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
          <h4 class="font-bold text-lg uppercase">process improvement</h4>
          <p class="text-neutral-2 text-lg mt-4">
            We provide QA assistance to organizations to ensure that products meet the highest standards.
          </p>
        </div>
        <img
          class=""
          src="/img/qa.png"
          alt="domicillary care"
        />
      </div>
    </div>
    <div class="flex mt-10 justify-center">
      <nuxt-link to="/services" class="bg-blue-4 blue-btn text-white rounded py-4 px-8">
        Learn More
        <Icon class="hovered ml-4" name="mdi:arrow-right" size="18px"/>
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