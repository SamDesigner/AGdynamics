<script setup lang="ts">
const resource = ref("Books");
const services = ref([
  {
    name: "Best Practices For Providing Domicilary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
  {
    name: "Best Practices For Providing Domicilary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
  {
    name: "Best Practices For Providing Domicilary Care",
    title:
      "The world as we know it is never static. From media to tech, and so much more, our world is constantly undergoing change. The health sector, in particular, has gradually evolved from traditional, ethically grey methods of care and treatment to more modern, personalised and evidence-based practices.",
    image: "book-mockup",
  },
]);
</script>
<template>
  <div
    class="flex flex-col items-center mx-auto px-4 md:px-6 xl:px-0 w-full max-w-[1240px]"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-center justify-between w-full"
    >
      <div class="">
        <h2
          class="font-bold leading-[48px] w-[200px] md:w-auto lg:leading-[54px] tracking-[-1.5px] text-[32px] lg:text-[48px]"
        >
          Level Up with <span class="text-blue-4">Our Resources</span>
        </h2>
      </div>
      <div class="flex mt-8 lg:mt-0 overflow-x-auto">
        <button
          @click="resource = 'Books'"
          class="px-10 py-4"
          :class="
            resource === 'Books' ? 'bg-blue-4 text-white  font-semibold' : ''
          "
        >
          Books
        </button>
        <button
          @click="resource = 'Videos'"
          class="px-10 py-4"
          :class="
            resource === 'Videos' ? 'bg-blue-4 text-white  font-semibold' : ''
          "
        >
          Videos
        </button>
        <button
          @click="resource = 'Blog'"
          class="px-10 py-4"
          :class="
            resource === 'Blog' ? 'bg-blue-4 text-white  font-semibold' : ''
          "
        >
          Blog
        </button>
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-center mt-10">
        <div
          class="flex flex-col lg:flex-row justify-center flex-wrap gap-10 lg:gap-2"
        >
          <div
            v-for="(service, idx) in services"
            :key="idx"
            class="flex flex-col w-full lg:w-[408px]"
          >
            <img class="w-full" :src="`/img/${service.image}.png`" />
            <div
              class="flex items-center px-6 py-8 border bg-blue-2 text-white border-blue-2"
            >
              <div class="flex flex-col w-full">
                <h3 class="font-semibold text-[22px] tracking-[-0.2px] uppercase">
                  {{ service.name }}
                </h3>
                <p
                  class="cut-text text-lg leading-[28px] font-medium max-h-14 mt-4 text-ellipsis overflow-hidden block"
                >
                  {{ service.title }}
                </p>
                <div class="mt-10 flex w-full">
                  <nuxt-link
                    to="/about"
                    class="bg-blue-4 text-center text-white rounded p-4 w-full"
                  >
                    Learn More
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-10 justify-center">
        <nuxt-link to="/ebooks" class="text-blue-4 rounded py-4 px-8">
          See More
          <Icon class="ml-4" name="mdi:arrow-right" size="18px" color="#0073FF" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cut-text {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
</style>
