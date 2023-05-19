<script setup>
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()
</script>

<template>
  <section
    class="flex h-[125vh] flex-col items-center justify-center bg-main-white px-8 text-main-blue lg:flex-row"
  >
    <div class="mb-12 lg:px-12">
      <h1 class="mb-4 font-yeseva-one text-6xl">{{ topLevelStore.notFound.heading }}</h1>
      <h2 class="mb-4 font-marmelad text-2xl">{{ topLevelStore.notFound.subheading }}</h2>
      <p class="mb-8 font-marmelad text-base">{{ topLevelStore.notFound.text }}</p>
      <CallToActionButton :to="'/'">{{ topLevelStore.notFound.buttonText }}</CallToActionButton>
    </div>

    <img :src="topLevelStore.favicon" class="max-h-[50vh] lg:px-12" />
  </section>
</template>
