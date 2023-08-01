<script setup lang="ts"></script>
<template>
  <div
    class="mx-auto text-lg leading-relaxed lg:leading-9 w-full max-w-[1240px] px-4 md:px-6 xl:px-0 my-[100px] lg:my-[200px]"
  >
    <nuxt-link to="/blog" class="flex items-center gap-2 mb-4">
      <button
        class="ml-3 flex min-w-max rounded-full p-2 items-center justify-center bg-grey-2 self-start"
      >
        <Icon
          name="ic:baseline-arrow-back-ios"
          size="24px"
          color="#001D40"
          class="flex items-center pl-1 justify-center"
        />
      </button>
      <p class="leading-tight font-medium">Back</p>
    </nuxt-link>
    <div class="flex flex-col text-center justify-center items-center mb-10">
      <h1
        class="font-bold leading-snug text-2xl md:text-3xl lg:text-[56px] lg:leading-[64px] text-black max-w-[984px]"
      >
        Supported living: More than providing a house and a service
      </h1>
      <div class="text-blue flex items-center justify-center mt-8 gap-6">
        <div class="flex md:justify-center max-w-fit relative">
          <img
            class="absolute -right-2 -top-2"
            src="/svg/logo-splash.svg"
            alt="splash logo"
          />
          <nuxt-link
            to="/services"
            class="bg-blue-4 text-white uppercase rounded px-2"
          >
            Trending
          </nuxt-link>
        </div>
        <span> April 23, 2023</span>
        <p class="h-6 w-1 bg-blue-4"></p>
        <span>By Mrs Obi </span>
      </div>
    </div>
    <img class="" src="/img/vid-placeholder.png" alt="people working" />
    <div
      class="flex flex-col lg:flex-row-reverse justify-between items-center my-[64px] lg:my-[120px] mx-auto w-full max-w-[1240px]"
    >
      <div
        class="w-full flex flex-col items-center lg:items-start text-center lg:px-4 xl:px-0 lg:text-left mg:text-left max-w-[542px] md:pr-4"
      >
        <h2
          class="font-bold leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[28px] md:text-[32px] w-full max-w-[520px] lg:max-w-[436px]"
        >
          Building Lasting Relationships
        </h2>
        <p class="leading-[28px] text-lg mt-4">
          At OC Management Consultants, we believe in the power of trust,
          transparency, and lasting relationships. Our commitment to your
          success goes beyond transactions; it's about forging strong, long-term
          partnerships.
        </p>
      </div>
      <div class="mt-10 lg:mt-0">
        <img
          src="/img/picture-placeholder.png"
          alt="picture of people sitting having meeting"
        />
      </div>
    </div>
    <p
      class="mt-6 mb-10 px-4 md:px-0 max-w-[612px] mx-auto flex items-center justify-center text-center"
    >
      At OC Management Consultants, we believe in the power of trust,
      transparency, and lasting relationships. Our commitment to your success
      goes beyond transactions; it's about forging strong, long-term
      partnerships.
    </p>
    <img class="" src="/img/vid-placeholder.png" alt="people working" />
    <div
      class="flex flex-col lg:flex-row justify-between items-center my-[64px] lg:my-[120px] mx-auto w-full max-w-[1240px]"
    >
      <div
        class="w-full flex flex-col items-center lg:items-start text-center lg:px-4 xl:px-0 lg:text-left mg:text-left max-w-[542px] md:pr-4"
      >
        <h2
          class="font-bold leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[28px] md:text-[32px] w-full max-w-[520px] lg:max-w-[436px]"
        >
          Building Lasting Relationships
        </h2>
        <p class="leading-[28px] text-lg mt-4">
          At OC Management Consultants, we believe in the power of trust,
          transparency, and lasting relationships. Our commitment to your
          success goes beyond transactions; it's about forging strong, long-term
          partnerships.
        </p>
      </div>
      <div class="mt-10 lg:mt-0">
        <img
          src="/img/picture-placeholder.png"
          alt="picture of people sitting having meeting"
        />
      </div>
    </div>
    <div class="flex w-full justify-end">

      <div class="flex border border-blue-2 p-10 rounded-full justify-center md:justify-end w-auto max-w-fit gap-10">
        <a href="#" target="_blank"><Icon name="mdi:linkedin" size="24px" color="#001D40" /></a>
        <a href="#" target="_blank"><Icon name="ri:instagram-fill" size="24px" color="#001D40" /></a>
        <a href="#" target="_blank"><Icon name="mdi:twitter-box" size="24px" color="#001D40" /></a>
        <a href="#" target="_blank"><Icon name="ic:round-facebook" size="24px" color="#001D40" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
