<script setup lang="ts">
const opened = ref("first");
</script>
<template>
  <div
    class="bg-grey-2 flex flex-col items-center mb-[60px] mx-auto lg:mb-[120px] py-16"
  >
    <div
      class="flex items-center flex-col justify-between px-4 md:px-10 lg:px-24 w-full max-w-[1240px]"
    >
      <h2
        class="font-semibold text-center leading-[48px] lg:leading-[54px] px-6 md:px-0 tracking-[-1.5px] text-[32px] lg:text-[48px] w-full capitalize"
      >
        we <span class="text-blue-4">got you</span> covered
      </h2>
      <div class="mt-10 w-full flex items-center flex-col">
        <div
          class="flex bg-whiter border border-blue-2 flex-col w-full lg:w-[823px] px-6 py-8"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">What is OC Management Consultant</h3>
            <Icon
              v-if="opened === 'first'"
              class="cursor-pointer"
              @click="opened = ''"
              name="mdi:arrow-down"
              color="#001D40" size="24px"
            />
            <Icon
              v-else
              @click="opened = 'first'"
              class="cursor-pointer"
              name="mdi:arrow-right"
              color="#001D40" size="24px"
            />
          </div>
          <p v-if="opened === 'first'" class="mt-3 text-lg leading-relaxed">
            At O C Management Consultants, we excel in navigating complex
            regulations, securing funding, and winning tenders with a proven
            track record of success across industries. Our tailored solutions,
            built on trust and transparency, ensure regulatory compliance.
            Unlock your organization's potential with our e-books and guides.
            Contact us today for customized excellence-driven solutions.
          </p>
        </div>
        <div
          class="flex bg-whiter border border-blue-2 flex-col w-full lg:w-[823px] px-6 py-8 my-6"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">How do I get Training With OCMC?</h3>
            <Icon
              v-if="opened === 'second'"
              class="cursor-pointer"
              @click="opened = ''"
              name="mdi:arrow-down"
              color="#001D40" size="24px"
            />
            <Icon
              v-else
              @click="opened = 'second'"
              class="cursor-pointer"
              name="mdi:arrow-right"
              color="#001D40" size="24px"
            />
          </div>
          <p v-if="opened === 'second'" class="mt-3 text-lg leading-relaxed">
            At O C Management Consultants, we excel in navigating complex
            regulations, securing funding, and winning tenders with a proven
            track record of success across industries. Our tailored solutions,
            built on trust and transparency, ensure regulatory compliance.
            Unlock your organization's potential with our e-books and guides.
            Contact us today for customized excellence-driven solutions.
          </p>
        </div>
        <div
          class="flex bg-whiter border border-blue-2 flex-col w-full lg:w-[823px] px-6 py-8"
        >
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-xl">What Can I Gain From OCMC?</h3>
            <Icon
              v-if="opened === 'third'"
              class="cursor-pointer"
              @click="opened = ''"
              name="mdi:arrow-down"
              color="#001D40" size="24px"
            />
            <Icon
              v-else
              @click="opened = 'third'"
              class="cursor-pointer"
              name="mdi:arrow-right"
              color="#001D40" size="24px"
            />
          </div>
          <p v-if="opened === 'third'" class="mt-3 text-lg leading-relaxed">
            At O C Management Consultants, we excel in navigating complex
            regulations, securing funding, and winning tenders with a proven
            track record of success across industries. Our tailored solutions,
            built on trust and transparency, ensure regulatory compliance.
            Unlock your organization's potential with our e-books and guides.
            Contact us today for customized excellence-driven solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
