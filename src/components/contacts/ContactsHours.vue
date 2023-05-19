<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const topLevelStore = useTopLevelStore()

const hoursSectionLoad = () => {
  const hoursSectionLoadTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: `#contactsHours`,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })
  hoursSectionLoadTimeline.fromTo(
    `#contactsHours`,
    { y: 50, opacity: 0 },
    { opacity: 1, y: 0, duration: 1 }
  )
}

onMounted(() => {
  hoursSectionLoad()
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <section
    id="contactsHours"
    class="contact-content__hours mb-6 flex flex-col items-center text-main-blue"
  >
    <h2 class="mb-3 font-yeseva-one text-2xl capitalize tracking-wide">
      {{ topLevelStore.modal.sectionTwo.heading }}
    </h2>
    <p
      v-for="(field, index) in topLevelStore.modal.sectionTwo.textFields"
      :key="index"
      class="mb-2 text-center font-marmelad text-base tracking-wide"
    >
      {{ field.field }}
    </p>
  </section>
</template>
