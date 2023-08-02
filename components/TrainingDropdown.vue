<template>
  <div
    v-click-outside="clickedOutside"
    class="bg-whiter fixed right-0 left-0 top-24 md:top-32 font-medium z-10 overflow-y-auto overflow-x-hidden"
  >
    <div
      class="flex flex-col h-[60vh] md:h-auto md:min-h-[278px] justify-between items-start w-full max-w-[1240px] rounded-xl mx-auto relative overflow-x-hidden overflow-y-auto"
    >
      <h5
        class="text-xl px-7 py-6 w-full fixed bg-whiter font-medium border-b border-b-grey-8"
      >
        Training and Events
      </h5>
      <div class="flex flex-col sm:flex-row justify-between mt-20 w-full">
        <div class="flex flex-col w-full">
          <div
            class="flex flex-col sm:flex-row justify-between flex-wrap gap-4 my-4"
            @click="clickedOutside"
          >
            <template v-for="(item, index) in about" :key="index">
              <nuxt-link :to="item.to" class="flex p-3 gap-4 w-[360px]">
                <img
                  class="w-[184px]"
                  :src="`/img/${item.img}.png`"
                  :alt="`${item.title} icon`"
                />
                <div class="flex justify-between flex-col">
                  <div class="">
                    <h6 class="font-medium">{{ item.title }}</h6>
                    <p class="text-grey-8">{{ item.body }}</p>
                    
                                      </div>
                  <nuxt-link to="/training" class="text-sm mb-3"
                    >{{ item.toText }}
                    <Icon name="mdi:arrow-right" size="20px" class="ml-1"
                  /></nuxt-link>
                </div>
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "@/stores/data";
const dataStore = useDataStore();
const about = ref([
  {
    title: "E-learning",
    body: "Body",
    img: "book-mockup-dropdown",
    toText: "Start Learning",
    to: "/training",
  },
  {
    title: "Webinars",
    body: "Body",
    img: "book-mockup-dropdown",
    toText: "Grab a popcorn",
    to: "/training",
  },
  {
    title: "Customer Events",
    body: "Body",
    img: "book-mockup-dropdown",
    toText: "Make it personal",
    to: "/training",
  },
]);

const open = ref(false);
const close = (e: HTMLInputElement) => {
  if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
    open.value = false;
  }
};

const clickedOutside = () => {
  dataStore.training = false;
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: $blue-2;
}
.navbar {
  &-links {
    display: flex;
    // align-items: center;
    list-style-type: none;

    &__item {
      margin: 0;
      a:not([data-type="button"]) {
        color: $primary;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
          color: $primary;
        }
        @media screen and (min-width: 768px) {
          padding-left: 15px;
          padding-right: 15px;
        }
        &.drop {
          color: $primary;
          padding: 0;
        }
      }

      // button:not([data-type=button]) {
      //   color: $black;
      //   font-weight: 700;
      //   border-radius: 8px;
      //   min-height: 50px;
      //   min-width: 170px;
      // }
    }

    &__city {
      width: 300px;
    }
    &__about {
      width: 260px;
    }

    @media screen and (max-width: 1023px) {
      transform: translateX(500px);
      // pointer-events: none;
      position: fixed;
      transition: transform 0.2s ease-out;
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      padding-left: 30px !important;
      padding-right: 30px;
      top: 0;
      bottom: 0;
      right: 0;
      width: 500px;
      max-width: 100vw;
      background-color: $blue-2;
      z-index: 100;
      &__toggle {
        display: none;
      }
      &--navopen {
        transform: translateX(0);
        pointer-events: all;

        .navbar-links__toggle {
          display: block;
          position: fixed;
          top: 50px;
          right: 20px;
          background: none;
          border: none;
        }

        .navbar-links__item {
          text-align: left;
          margin: 20px 0;
          width: 100%;

          .btn {
            width: 100%;
          }
        }
      }
    }
  }

  &__toggle {
    background: none;
    border: none;

    div {
      background-color: $black;
      height: 3px;
      border-radius: 2px;
      margin: 4px;
      &:nth-child(2) {
        width: 20px;
      }

      &:nth-child(3) {
        width: 15px;
      }

      &:last-child {
        width: 9px;
      }
    }
  }
  &-scroll {
    box-shadow: 1px 2px 18px rgba(255, 255, 255, 0.1);
    background-color: $grey-2 !important;
    // background-color: transparent !important;
  }
}
</style>
