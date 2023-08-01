<script setup lang="ts">
const blogs = ref([
  {
    name: "Best Practices For Providing Domicillary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
  {
    name: "Best Practices For Providing Domicillary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
  {
    name: "Best Practices For Providing Domicillary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
  {
    name: "Best Practices For Providing Domicillary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
  {
    name: "Best Practices For Providing Domicillary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
  {
    name: "Best Practices For Providing Domicillary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
]);
</script>
<template>
  <div class="mx-auto w-full px-4 md:px-6 xl:px-0 mt-14 md:mt-16 mb-16 max-w-[1240px]">
    <div class="flex justify-center mt-6">
      <div
        class="flex flex-col md:flex-row justify-center flex-wrap gap-10 lg:gap-2"
      >
        <div
          v-for="(blog, idx) in blogs"
          :key="idx"
          class="flex flex-col w-full md:w-[408px]"
        >
          <img class="w-full" :src="`/img/${blog.image}.png`" />
          <div
            class="flex items-center px-6 py-8 border bg-blue-2 text-white border-blue-2"
          >
            <div class="flex flex-col w-full">
              <h3 class="cut-text font-semibold text-xl tracking-[-0.2px] text-ellipsis overflow-hidden block  uppercase">
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
                  class="bg-blue-4 text-center text-white rounded p-4 w-full"
                >
                  Get Book
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
