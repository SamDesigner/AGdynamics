<script setup lang="ts">
const blogs = ref([
  {
    name: "Making an impact with your investments",
    title:
      "Impact investment is defined as an investment made with the intention to generate positive, measurable social and environmental impact alongside",
    image: "book-mockup-mob-2",
  },
  {
    name: "the perfect investment for your real estate portfolio",
    title:
      "f you’re like most people, when you think of investing in housing, you probably think of buying a house or an apartment and renting it",
    image: "book-mockup-mob-2",
  },
  {
    name: "a crucial contributor to healthcare services",
    title:
      "In the public, corporate, and nonprofit sectors, the term “social value” is frequently used, but what does it actually mean?",
    image: "book-mockup-mob-2",
  },
  {
    name: "Disability in the heart of care.",
    title:
      "Health inequality is still a great challenge in the UK, and the outbreak of the Covid-19 pandemic provided shocking evidence",
    image: "book-mockup-mob-2",
  },
]);
</script>
<template>
  <div
    class="mx-auto w-full px-4 md:px-6 xl:px-0 mt-14 md:mt-16 mb-16 lg:mt-[120px] max-w-[1240px]"
  >
    <h5 class="font-bold text-blue text-[22px] mb-4">Older Posts</h5>
    <div class="flex justify-center mt-6">
      <div
        class="flex flex-col md:flex-row justify-center flex-wrap gap-10 lg:gap-4"
      >
        <div
          v-for="(blog, idx) in blogs"
          :key="idx"
          class="flex flex-col w-full md:w-[298px]"
        >
          <img
            class="w-full"
            :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${blog.image}.png`"
          />
          <div
            class="flex items-center px-6 py-8 border bg-blue-2 text-white border-blue-2"
          >
            <div class="flex flex-col w-full">
              <h3
                class="cut-text text-whiter font-semibold text-xl tracking-[-0.2px] text-ellipsis overflow-hidden block uppercase"
              >
                {{ blog.name }}
              </h3>
              <p
                class="cut-text text-lg leading-[28px] font-medium max-h-14 mt-4 text-ellipsis overflow-hidden block"
              >
                {{ blog.title }}
              </p>
              <div class="mt-10 flex w-full">
                <nuxt-link
                  to="/about"
                  class="bg-transparent text-center text-white rounded p-4 w-full"
                >
                  Read More
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
