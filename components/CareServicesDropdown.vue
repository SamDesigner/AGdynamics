<template>
  <div
    v-click-outside="clickedOutside"
    class="bg-whiter fixed right-0 left-0 font-medium z-10 overflow-y-auto overflow-x-hidden"
    :class="dataStore.scrolled ? 'md:top-[88px]' : 'md:top-[153px]'"
  >
    <div
      class="flex flex-col h-[60vh] md:h-auto md:min-h-[450px] items-start w-full max-w-[1240px] rounded-xl mx-auto relative overflow-x-hidden overflow-y-auto"
    >
      <h5
        class="text-xl px-7 py-6 w-full fixed bg-whiter font-medium border-b border-b-grey-8"
      >
        Strategy and Management Consulting
      </h5>
      <div class="flex flex-col sm:flex-row justify-between mt-20 w-full">
        <div class="flex flex-col w-[588px]" @click="clickedOutside">
          <nuxt-link to="/strategy">
            <h6 class="font-medium text-grey-8 px-6 leading-[26px] py-4">
              Strategy Consulting
            </h6>
          </nuxt-link>
          <div class="flex flex-col sm:flex-row flex-wrap gap-4">
            <template v-for="(item, index) in consulting" :key="index">
              <nuxt-link
                :to="item.to"
                class="flex items-center p-3 gap-4 w-[286px]"
              >
                <img
                  class="w-12 h-12"
                  :src="`/img/${item.img}.png`"
                  alt="business icon"
                />
                <div class="flex flex-col">
                  <h6 class="font-medium">{{ item.title }}</h6>
                </div>
              </nuxt-link>
            </template>
          </div>
        </div>
        <div class="flex flex-col w-[588px]" @click="clickedOutside">
          <nuxt-link to="/services">
            <h6 class="font-medium text-grey-8 px-6 leading-[26px] py-4">
              Services
            </h6>
          </nuxt-link>
          <div class="flex flex-col sm:flex-row flex-wrap gap-4">
            <template v-for="(item, index) in services" :key="index">
              <nuxt-link
                :to="item.to"
                class="flex items-center p-3 gap-4 w-[286px]"
              >
                <img
                  class="w-12 h-12"
                  :src="`/img/${item.img}.png`"
                  alt="business icon"
                />
                <div class="flex flex-col">
                  <h6 class="font-medium">{{ item.title }}</h6>
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
const consulting = ref([
  {
    title: "Strategic Planning",
    img: "business",
    to: "/strategy#",
  },
  {
    title: "Mergers & Acquisitions Advisory",
    img: "merger",
    to: "/strategy#mergers",
  },
  {
    title: "Growth & Transformation",
    img: "growth",
    to: "/strategy#growth",
  },
  {
    title: "Investment and Funding Advisory",
    img: "funding",
    to: "/strategy#funding",
  },
]);

const services = ref([
  {
    title: "License Acquisitions",
    img: "licenses",
    to: "/services#licenses",
  },
  {
    title: "Process Improvement",
    img: "qassurance",
    to: "/services#qa",
  },
  {
    title: "Tendering",
    img: "tender",
    to: "/services#tender",
  },
  {
    title: "Training & Events",
    img: "training",
    to: "/services#training",
  },
  {
    title: "Growth & Diversification",
    img: "grant",
    to: "/services#grant",
  },
]);

const open = ref(false);
const close = (e: HTMLInputElement) => {
  if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
    open.value = false;
  }
};

const clickedOutside = () => {
  dataStore.careServices = false;
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
