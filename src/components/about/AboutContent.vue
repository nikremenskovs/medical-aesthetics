<script setup>
import { useAboutPageStore } from '@/stores/AboutPageStore.js'
const aboutPageStore = useAboutPageStore()
</script>

<template>
  <div
    id="aboutContent"
    class="about-content--container z-10 mx-auto h-auto w-full max-w-sm bg-main-white/75 lg:max-w-2xl"
  >
    <section
      id="about-content__section1"
      class="about-content__section2 flex h-auto min-h-screen flex-col items-center justify-center border-b-[1px] border-main-blue/25 px-8 py-12 text-center text-main-blue"
    >
      <img
        :src="aboutPageStore.sectionOne.aboutSectionOneImage.image"
        :alt="aboutPageStore.sectionOne.aboutSectionOneImage['image-alt']"
        class="mb-8 max-h-96 rounded-lg"
      />
      <h1 class="mb-6 font-yeseva-one text-4xl uppercase">
        {{ aboutPageStore.sectionOne.aboutSectionOneTitle }}
      </h1>
      <span class="mx-auto mb-6 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="mb-6 font-marmelad text-lg">
        {{ aboutPageStore.sectionOne.aboutSectionOneText }}
      </p>
      <router-link to="/about#about-content__section2">
        <i
          class="fas fa-chevron-right flex h-10 w-10 rotate-90 cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"
        ></i>
      </router-link>
    </section>
    <section
      id="about-content__section2"
      class="about-content__section2 flex h-auto min-h-screen flex-col items-center justify-center border-b-[1px] border-main-blue/25 px-8 py-12 text-center text-main-blue"
    >
      <img
        :src="aboutPageStore.sectionTwo.aboutSectionTwoImage.image"
        :alt="aboutPageStore.sectionTwo.aboutSectionTwoImage['image-alt']"
        class="mb-8 max-h-96 rounded-lg"
      />
      <h1 class="mb-6 font-yeseva-one text-4xl uppercase">
        {{ aboutPageStore.sectionTwo.aboutSectionTwoTitle }}
      </h1>
      <span class="mx-auto mb-6 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="mb-6 font-marmelad text-lg">
        {{ aboutPageStore.sectionTwo.aboutSectionTwoText }}
      </p>
      <ul class="mb-6 flex w-full flex-col">
        <li
          v-for="(item, index) in aboutPageStore.sectionTwo.aboutSectionTwoListItems"
          :key="index"
          class="flex h-24 w-full items-center justify-center border-b-[1px] border-main-blue/25 font-marmelad uppercase"
        >
          <i class="fa-solid fa-check mr-4 text-2xl"></i>
          <p>{{ item.aboutSectionTwoListItem }}</p>
        </li>
      </ul>
      <router-link to="/about#about-content__section3">
        <i
          class="fas fa-chevron-right flex h-10 w-10 rotate-90 cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white md:hover:animate-hoverPulse"
        ></i>
      </router-link>
    </section>
    <section
      id="about-content__section3"
      class="about-content__section2 flex h-auto min-h-screen flex-col items-center justify-center border-b-[1px] border-main-blue/25 px-8 py-12 text-center text-main-blue"
    >
      <img
        :src="aboutPageStore.sectionThree.aboutSectionThreeImage.image"
        :alt="aboutPageStore.sectionThree.aboutSectionThreeImage['image-alt']"
        class="mb-8 max-h-96 rounded-lg"
      />
      <h1 class="mb-6 font-yeseva-one text-4xl uppercase">
        {{ aboutPageStore.sectionThree.aboutSectionThreeTitle }}
      </h1>
      <span class="mx-auto mb-6 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="mb-6 font-marmelad text-lg">
        {{ aboutPageStore.sectionThree.aboutSectionThreeText }}
      </p>
    </section>
  </div>
</template>
