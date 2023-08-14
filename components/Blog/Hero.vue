<script setup lang="ts">
const posts = ref([
  {
    title: "£500 million fund to make patients top priority",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "workforce development fund: adult social care",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
  {
    title: "supported living: the economical benefits",
    date: "April 23, 2023",
    author: "Mrs Obi",
  },
]);
</script>
<template>
  <div
    class="bg-blue pt-20 md:py-28 px-4 md:px-6 xl:px-0 w-full md:pt-[120px]"
  >
    <div
      class="w-full max-w-[1240px] flex justify-between pt-32 md:pt-20 mx-auto h-full"
    >
      <div class="flex flex-col w-full h-full">
        <div class="flex justify-center w-full">
          <div class="text-center w-full">
            <p class="text-yellow text-lg font-bold uppercase">
              learn from industry experts
            </p>
            <h1
              class="text-whiter font-black leading-[42px] md:leading-[54px] mb-10 lg:leading-[78px] tracking-[-1.5px] text-[32px] md:text-[48px] lg:text-[64px]"
            >
              Gain Insights From <span class="text-yellow">Professionals</span>
            </h1>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-10">
          <nuxt-link to="/blog/id" class="w-full max-w-[612px]">
            <img src="/img/book-mockup-1.png" alt="book mockup" />
            <div class="bg-white px-6 py-12">
              <div class="flex flex-col md:flex-row md:items-center gap-6">
                <div class="flex md:justify-center max-w-fit relative">
                  <img
                    class="absolute -right-2 -top-2"
                    src="/svg/logo-splash.svg"
                    alt="splash logo"
                  />
                  <nuxt-link
                    to="/services"
                    class="bg-blue-4 text-whiter uppercase rounded py-2 px-4"
                  >
                    Trending
                  </nuxt-link>
                </div>
                <div class="flex gap-6 items-center">
                  <p class="text-blue">April 23, 2023</p>
                  <div class="w-2 h-9 bg-blue-4" />
                  <p class="text-blue">By Mrs Obi</p>
                </div>
              </div>
              <h2 class="font-bold text-2xl max-w-[483px] mt-6">
                SUPPORTED LIVING: MORE THAN PROVIDING A HOUSE AND A SERVICE
              </h2>
            </div>
          </nuxt-link>
          <div class="flex flex-col gap-6">
            <div
              v-for="(post, index) in posts"
              :key="index"
              class="flex items-center"
            >
              <img
                class="w-[164px] hidden md:block"
                src="/img/book-mockup-mob.png"
                alt="small book mockup"
              />
              <img
                class="w-[164px] md:hidden "
                src="/img/book-mockup-mob-2.png"
                alt="small book mockup"
              />
              <div class="flex flex-col gap-y-2 px-6 max-w-[424px]">
                <h3 class="cut-text text-whiter text-lg font-bold uppercase max-h-14 text-ellipsis overflow-hidden block">
                  {{ post.title }}
                </h3>
                <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <p class=" text-whiter">{{ post.date }}</p>
                  <div class="w-7/12 md:w-1 h-1 md:h-7 bg-blue-4" />
                  <p class=" text-whiter">By {{ post.author }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
