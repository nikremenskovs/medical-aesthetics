<script setup>
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()
</script>

<template>
  <section
    class="bg-main-white text-main-blue h-[125vh] px-8 flex flex-col justify-center items-center lg:flex-row"
  >
    <div class="mb-12 lg:px-12">
      <h1 class="font-yeseva-one text-6xl mb-4">{{ topLevelStore.notFound.heading }}</h1>
      <h2 class="font-marmelad text-2xl mb-4">{{ topLevelStore.notFound.subheading }}</h2>
      <p class="font-marmelad text-base mb-8">{{ topLevelStore.notFound.text }}</p>
      <CallToActionButton :to="'/'">{{ topLevelStore.notFound.buttonText }}</CallToActionButton>
    </div>

    <img :src="topLevelStore.favicon" class="max-h-[50vh] lg:px-12" />
  </section>
</template>
