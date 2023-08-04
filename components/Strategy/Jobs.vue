<script setup lang="ts">
const strategy = ref([
  "Company formation",
  "Project development",
  "Identifying Business challenges",
  "Financial planning",
  "Driving commercial strategy",
  "Identifying operational challenges",
  "Enabling Sales & Marketing tools & processes",
]);
const growth = ref(['Digitization', 'Strategic change', 'Marketing strategy', 'Market analysis', 'Organizational change'])
const merger = ref(['Buser-side advisory', 'Target search & selection', 'Valuation of assets - FDD, CDD', 'Transaction execution', 'Integration']);
const activity = ref('strategy');
const maStrategy = ref(['Strategic vision']);
const search = ref(['Identification & screening', 'Target profile', 'Target analysis']);
const transaction = ref(['Risks assessment', 'CDD', 'FDD', 'Assessed valuation', 'Deal closure']);
const integration = ref(['Change management', 'Risks management', 'Regulatory compliances', 'Stakeholder management']);
const synergy = ref(['Performance evaluation', 'Integration success', 'Shareholder value']);
const decisions = ref(['Funding sources', 'Pitch decks', 'Alternatives', 'Loans and insurances']);
</script>
<template>
  <div
    class="mb-[48px] px-4 md:px-6 xl:px-0 mt-[160px] lg:mt-[350px] mx-auto w-full max-w-[1240px]"
  >
    <div
      class="flex flex-col px-6 md:px-10 lg:px-24 py-10 md:py-16 mb-14 md:mb-16 lg:mb-[64px] bg-grey-2"
    >
      <div class="flex flex-col lg:flex-row justify-between lg:items-center">
        <div
          class="w-full flex flex-col max-w-[375px] md:max-w-full lg:max-w-[542px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[48px] lg:leading-[54px] tracking-[-1.5px] lg:text-[32px] text-[28px] w-full capitalize"
          >
            STRATEGIC PLANNING
          </h2>
          <p class="leading-[28px] text-lg mt-4">
            We help organizations develop and implement strategic plans that
            align with their vision and goals.
          </p>
          <p class="leading-[28px] text-lg mt-8">
            We also help organizations identify and address business challenges,
            and develop sales and marketing tools and processes.
          </p>
        </div>
        <div
          class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col gap-6 lg:w-auto lg:mt-0 lg:ml-4 w-full lg:max-w-[492px]"
        >
          <h6 class="text-xl font-semibold">We help you with...</h6>
          <div class="flex flex-wrap gap-4">
            <button
              v-for="(name, index) in strategy"
              :key="index"
              class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
            >
              {{ name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col py-10 mb-14 md:mb-16 lg:mb-[120px]"
    >
      <div class="flex flex-col lg:flex-row justify-between items-center">
        
        <div
          class="w-full flex flex-col items-center gap-14 md:items-start text-center"
        >
          <h2
            class="font-semibold leading-[48px] lg:leading-[54px] tracking-[-1.5px] lg:text-[32px] text-[28px] w-full capitalize"
          >
            STRATEGY EVALUATION
          </h2>
          <div class="flex flex-wrap flex-col md:items-start gap-10 xl:gap-0 md:flex-row">
            <div class="flex flex-col items-center md:items-start text-left gap-[14px] px-4">
              <img class="w-14" src="/img/01.png" alt="01 image">
              <h6 class="font-semibold tracking-[0.2px]">Current Strategy</h6>
              <ul class="list-disc list-inside flex flex-col gap-2">
                <li>Vision & goals</li>
                <li>Product</li>
                <li>Price</li>
                <li>Process</li>
              </ul>
            </div>
            <img class="hidden xl:block mt-20" src="/svg/path1.svg" alt="path">
            <div class="flex flex-col items-center md:items-start text-left gap-[14px] px-4">
              <img class="w-14" src="/img/02.png" alt="02 image">
              <h6 class="font-semibold tracking-[0.2px]">Which markets</h6>
              <ul class="list-disc list-inside flex flex-col gap-2">
                <li>Target region</li>
                <li>Target Audience</li>
              </ul>
            </div>
            <img class="hidden xl:block mt-20" src="/svg/path4.svg" alt="path">
            <div class="flex flex-col items-center md:items-start text-left gap-[14px] px-4">
              <img class="w-14" src="/img/03.png" alt="03 image">
              <h6 class="font-semibold tracking-[0.2px]">Value analysis</h6>
              <ul class="list-disc list-inside flex flex-col gap-2">
                <li>How value is created</li>
                <li>How to maximize the value</li>
                <li>How to minimize the risk</li>
              </ul>
            </div>
            <img class="hidden xl:block mt-20" src="/svg/path3.svg" alt="path">
            <div class="flex flex-col items-center md:items-start text-left gap-[14px] px-4">
              <img class="w-14" src="/img/03.png" alt="03 image">
              <h6 class="font-semibold tracking-[0.2px]">Organizational Design</h6>
              <ul class="list-disc list-inside flex flex-col gap-2">
                <li>Best structure</li>
                <li>Change management</li>
              </ul>
            </div>
            <img class="hidden xl:block mt-20" src="/svg/path4.svg" alt="path">
            <div class="flex flex-col items-center md:items-start text-left gap-[14px] px-4">
              <img class="w-14" src="/img/03.png" alt="03 image">
              <h6 class="font-semibold tracking-[0.2px]">BU strategy</h6>
              <ul class="list-disc list-inside flex flex-col gap-2">
                <li>Product</li>
                <li>Price</li>
                <li>Process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="growth" />
    </div>
    <div
      class="flex flex-col px-6 md:px-10 lg:px-24 py-10 md:py-16 mb-14 md:mb-16 lg:mb-[64px] bg-grey-2"
    >
      <div class="flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
        <div
          class="w-full flex flex-col max-w-[375px] md:max-w-full lg:max-w-[542px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[38px] lg:leading-[48px] tracking-[-1.5px] lg:text-[32px] text-[28px] w-full capitalize"
          >
            GROWTH AND <br>TRANSFORMATION
          </h2>
          <p class="leading-[28px] text-lg mt-4">
            We help organizations grow and transform their businesses.
          </p>
          <p class="leading-[28px] text-lg mt-8">
            We provide services such as strategic change, market analysis, marketing strategy, digitalization, and organizational change.
          </p>
        </div>
        <div
          class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col gap-6 lg:w-auto lg:mt-0 lg:ml-4 w-full lg:max-w-[492px]"
        >
          <h6 class="text-xl font-semibold">We help you with...</h6>
          <div class="flex flex-wrap gap-4">
            <button
              v-for="(name, index) in growth"
              :key="index"
              class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
            >
              {{ name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col px-6 md:px-10 lg:px-24 py-10 md:py-16 mb-14 md:mb-80 lg:mb-[64px] bg-whiter"
    >
      <div class="flex flex-col lg:flex-row gap-10 justify-between items-center relative">
        <div
          class="w-full flex flex-col items-center lg:items-start max-w-[330px] lg:max-w-[371px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[38px] lg:leading-[48px] tracking-[-1.5px] text-center lg:text-left lg:text-[32px] text-[28px] w-full capitalize"
          >
            IMPROVE PRODUCTIVITY & DIRECT REVENUE IMPACT
          </h2>
          <p class="leading-[28px] text-center lg:text-left lg:text-lg mt-4">
            In the social care sector, we help you optimize productivity, enhance revenue impact
          </p>
          <!-- <img class="hidden xl:block absolute -top-10 left-48 w-[642px]" src="/svg/path5.svg" alt="path icon">
          <img class="hidden xl:block absolute bottom-28 left-80 translate-x-10" src="/svg/path6.svg" alt="path icon">
          <img class="hidden xl:block absolute bottom-8 left-80 translate-x-10" src="/svg/path7.svg" alt="path icon">
          <img class="hidden xl:block absolute -bottom-10 left-80 translate-x-10" src="/svg/path8.svg" alt="path icon">
          <img class="hidden xl:block absolute bottom-16 left-80 translate-x-10" src="/svg/path9.svg" alt="path icon"> -->
        </div>
        <img class="hidden lg:block absolute right-0 h-[372px]" src="/img/info-desk.png" alt="desktop info">
        <img class="hidden lg:hidden md:block absolute top-[226px] left-20 h-[340px]" src="/img/info-tab.png" alt="desktop info">
        <div class="flex flex-col gap-6 items-center md:hidden">
          <button
            class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px] xl:absolute xl:-top-14 xl:right-20"
          >
          Reduce costs
          </button>
          <button
            class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px] xl:absolute xl:top-5 xl:right-80 xl:translate-x-7"
          >
          Marketing & Barnding push
          </button>
          <button
            class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px] xl:absolute xl:top-26 xl:right-20 xl:translate-x-7"
          >
          Standardization of processes
          </button>
          <button
            class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px] xl:absolute xl:top-32 xl:translate-y-4 xl:right-[445px] xl:translate-x-7"
          >
          Capacity utilization
          </button>
          <button
            class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px] xl:absolute xl:top-60 xl:translate-y-2 xl:right-[255px] xl:translate-x-7"
          >
          Revenue generation
          </button>
        </div>
      </div>
      <div id="mergers" />
    </div>
    <div
      class="flex flex-col px-6 md:px-10 lg:px-24 py-10 md:py-16 mb-14 md:mb-16 lg:mb-[64px] bg-grey-2"
    >
      <div class="flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
        <div
          class="w-full flex flex-col max-w-[375px] md:max-w-full lg:max-w-[542px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[38px] lg:leading-[48px] tracking-[-1.5px] lg:text-[32px] text-[28px] w-full capitalize"
          >
            MERGERS & ACQUISITIONS
          </h2>
          <p class="leading-[28px] text-lg mt-4">
            We provide buyer-side advisory services for mergers and acquisitions.
          </p>
          <p class="leading-[28px] text-lg mt-8">
            We help organizations identify and select targets, assess valuations, and execute transactions.
          </p>
        </div>
        <div
          class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col gap-6 lg:w-auto lg:mt-0 lg:ml-4 w-full lg:max-w-[492px]"
        >
          <h6 class="text-xl font-semibold">We help you with...</h6>
          <div class="flex flex-wrap gap-4">
            <button
              v-for="(name, index) in merger"
              :key="index"
              class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
            >
              {{ name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col px-6 md:px-10 lg:px-24 py-10 md:py-16 mb-14 md:mb-16 lg:mb-[64px] bg-grey-2 overflow-hidden"
    >
      <div class="flex flex-col gap-10 justify-between text-center items-center">
        <div
          class="w-full flex flex-col max-w-[375px] md:max-w-full lg:max-w-[542px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[38px] lg:leading-[48px] tracking-[-1.5px] lg:text-[32px] text-[28px] w-full capitalize"
          >
            APPROACH FOR YOUR M&A ACTIVITY
          </h2>
        </div>
        <div class="flex overflow-x-auto relative w-full self-start lg:self-center">
          <button @click="activity = 'strategy'" class="px-4 py-2 min-w-max" :class="activity === 'strategy' ? 'font-semibold border-b-2 border-blue-4' : ''">M&A strategy</button>
          <button @click="activity = 'search'" class="px-4 py-2 min-w-max" :class="activity === 'search' ? 'font-semibold border-b-2 border-blue-4' : ''">Search & Selection</button>
          <button @click="activity = 'execute'" class="px-4 py-2 min-w-max" :class="activity === 'execute' ? 'font-semibold border-b-2 border-blue-4' : ''">Execute Transaction</button>
          <button @click="activity = 'integration'" class="px-4 py-2 min-w-max" :class="activity === 'integration' ? 'font-semibold border-b-2 border-blue-4' : ''">Integration</button>
          <button @click="activity = 'synergy'" class="px-4 py-2 min-w-max" :class="activity === 'synergy' ? 'font-semibold border-b-2 border-blue-4' : ''">Synergy Realization</button>
        </div>
        <div v-if="activity === 'strategy'" class="flex flex-col items-center gap-10">
          <div
            class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col items-start gap-6 lg:mt-0 lg:ml-4 w-full lg:w-[612px]"
          >
            <h6 class="text-xl font-semibold">We help you with...</h6>
            <div class="flex self-center justify-center flex-wrap gap-4">
              <button
                v-for="(name, index) in maStrategy"
                :key="index"
                class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
              >
                {{ name }}
              </button>
            </div>
          </div>
          <p class="text-blue-4 text-lg font-semibold tracking-[0.2px]">PRE-MERGER STAGE</p>
        </div>
        <div v-else-if="activity === 'search'" class="flex flex-col items-center gap-10">
          <div
            class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col items-start gap-6 lg:mt-0 lg:ml-4 w-full lg:w-[612px]"
          >
            <h6 class="text-xl font-semibold">We help you with...</h6>
            <div class="flex self-center justify-center flex-wrap gap-4">
              <button
                v-for="(name, index) in search"
                :key="index"
                class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
              >
                {{ name }}
              </button>
            </div>
          </div>
          <p class="text-blue-4 text-lg font-semibold tracking-[0.2px]">PRE-MERGER STAGE</p>
        </div>
        <div v-else-if="activity === 'execute'" class="flex flex-col items-center gap-10">
          <div
            class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col items-start gap-6 lg:mt-0 lg:ml-4 w-full lg:w-[612px]"
          >
            <h6 class="text-xl font-semibold">We help you with...</h6>
            <div class="flex self-center justify-center flex-wrap gap-4">
              <button
                v-for="(name, index) in transaction"
                :key="index"
                class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
              >
                {{ name }}
              </button>
            </div>
          </div>
          <p class="text-orange-10 text-lg font-semibold tracking-[0.2px]">PRE-MERGER STAGE</p>
        </div>
        <div v-else-if="activity === 'integration'" class="flex flex-col items-center gap-10">
          <div
            class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col items-start gap-6 lg:mt-0 lg:ml-4 w-full lg:w-[612px]"
          >
            <h6 class="text-xl font-semibold">We help you with...</h6>
            <div class="flex self-center justify-center flex-wrap gap-4">
              <button
                v-for="(name, index) in integration"
                :key="index"
                class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
              >
                {{ name }}
              </button>
            </div>
          </div>
          <p class="text-green-10 text-lg font-semibold tracking-[0.2px]">PRE-MERGER STAGE</p>
        </div>
        <div v-else-if="activity === 'synergy'" class="flex flex-col items-center gap-10">
          <div
            class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col items-start gap-6 lg:mt-0 lg:ml-4 w-full lg:w-[612px]"
          >
            <h6 class="text-xl font-semibold">We help you with...</h6>
            <div class="flex self-center justify-center flex-wrap gap-4">
              <button
                v-for="(name, index) in synergy"
                :key="index"
                class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
              >
                {{ name }}
              </button>
            </div>
          </div>
          <p class="text-red-10 text-lg font-semibold tracking-[0.2px]">PRE-MERGER STAGE</p>
        </div>
      </div>
      <div id="funding" />
    </div>
    <div
      class="flex flex-col px-6 md:px-10 lg:px-24 py-10 md:py-16 mb-14 md:mb-16 lg:mb-[64px] bg-grey-2"
    >
      <div class="flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
        <div
          class="w-full flex flex-col max-w-[375px] md:max-w-full lg:max-w-[516px] mt-10 lg:mt-0"
        >
          <h2
            class="font-semibold leading-[38px] lg:leading-[48px] tracking-[-1.5px] lg:text-[32px] text-[28px] w-full capitalize"
          >
            INVESTMENT & FUNDING DECISIONS
          </h2>
          <p class="leading-[28px] text-lg mt-4">
            We help organizations identify and secure funding sources for their businesses.
          </p>
          <p class="leading-[28px] text-lg mt-8">
            We also help organizations develop pitch decks and secure loans and insurance.
          </p>
        </div>
        <div
          class="border border-blue-2 mt-10 px-6 py-8 bg-whiter flex flex-col gap-6 lg:w-auto lg:mt-0 lg:ml-4 w-full lg:max-w-[492px]"
        >
          <h6 class="text-xl font-semibold">We help you with...</h6>
          <div class="flex flex-wrap gap-4">
            <button
              v-for="(name, index) in decisions"
              :key="index"
              class="bg-grey-2 rounded px-4 py-3 text-left tracking-[0.2px] leading-[28px]"
            >
              {{ name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
