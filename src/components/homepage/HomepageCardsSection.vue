<script setup>
import HomepageCardsSectionCard from '@/components/homepage/HomepageCardsSectionCard.vue'

const props = defineProps({
  treatmentsData: { type: Object, required: true }
})
</script>

<template>
  <section id="homepageCardsSection" class="mb-12">
    <h1
      class="homepageCardsTitle mb-4 text-center font-yeseva-one text-4xl uppercase tracking-wider text-main-blue"
    >
      {{ props.treatmentsData.sectionHeading }}
    </h1>
    <div
      class="homepageCards-container font-marmelad tracking-wider sm:flex sm:flex-wrap sm:justify-center lg:flex-nowrap"
    >
      <HomepageCardsSectionCard
        to="/about"
        v-for="(card, index) in props.treatmentsData.treatmentsCards"
        :key="index"
        :imgSrc="card.cardImage.image[0]"
        :imgAlt="card.cardImage['image-alt']"
        :heading="card.heading"
        :index="index"
      />
    </div>
  </section>
</template>
