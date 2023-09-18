<script setup lang="ts">
const blogs = ref([
  {
    name: "Best Practices For Providing Domicillary Care",
    image: "book-practice",
    link: "https://www.amazon.com/PRACTICES-PROVIDING-DOMICILIARY-SUPPORTED-SCHEMES-ebook/dp/B0CG4X4KS1",
  },
  {
    name: "bridging the gap",
    image: "book-mockup",
  },
  {
    name: "social care business management explained",
    image: "book-social",
  },
  {
    name: "mastering tupe transfers in social care services",
    image: "book-tupe",
  },
  {
    name: "the ultimate guide to tender writing",
    image: "book-tender",
  },
]);
</script>
<template>
  <div
    class="mx-auto w-full px-4 md:px-6 xl:px-0 mt-14 md:mt-16 mb-16 max-w-[1240px]"
  >
    <div class="flex justify-start mt-6">
      <div
        class="flex flex-col md:flex-row justify-start items-stretch flex-wrap gap-10 lg:gap-2"
      >
        <div
          v-for="(blog, idx) in blogs"
          :key="idx"
          class="flex flex-col w-full md:w-[408px]"
        >
          <img
            class="w-full"
            :src="`https://s3.eu-west-2.amazonaws.com/ocmc-img.com/${blog.image}.png`"
          />
          <div
            class="flex items-start h-full px-6 py-8 border bg-blue-2 text-white border-blue-2"
          >
            <div class="flex flex-col justify-between h-full w-full">
              <h3
                class="cut-text text-whiter font-semibold text-xl tracking-[-0.2px] text-ellipsis overflow-hidden block uppercase"
              >
                {{ blog.name }}
              </h3>
              <!-- <p
                class="cut-text text-lg leading-[28px] font-medium max-h-14 mt-4 text-ellipsis overflow-hidden block"
              >
                {{ blog.title }}
              </p> -->
              <div class="mt-10 flex self-end w-full">
                <template v-if="blog.link">
                  <a
                    :href="blog.link"
                    target="_blank"
                    class="bg-blue-4/30 text-center text-white rounded p-4 w-full"
                  >
                    Get Now!!
                  </a>
                </template>
                <template v-else>
                  <nuxt-link
                    to="/"
                    class="bg-blue-4/30 text-center text-white rounded p-4 w-full"
                  >
                    Coming Soon!
                  </nuxt-link>
                </template>
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
