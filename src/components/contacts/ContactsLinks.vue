<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'
import { gsap } from 'gsap'

const topLevelStore = useTopLevelStore()
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? `tel:${topLevelStore.navbar.contactNumber}`
    : undefined

const contactLinksLoad = () => {
  const contactsLinksLoadTimeline = gsap.timeline()
  contactsLinksLoadTimeline.fromTo(
    '#contactsLinks',
    { y: '25%', opacity: 0 },
    { y: '-48px', opacity: 1, duration: 0.5, delay: 0.5 }
  )
}

onMounted(() => {
  contactLinksLoad()
})
onUnmounted(() => {
  gsap.killTweensOf('#contactsLinks')
})
</script>

<template>
  <section
    id="contactsLinks"
    class="contacts-content__links--container -translate-y-12 rounded-lg border-[1px] border-main-blue/25 px-4 py-10 shadow-lg backdrop-blur-lg md:px-6 md:py-12"
  >
    <div
      class="contacts-content__links flex flex-col flex-wrap items-center justify-center space-y-8 sm:flex-row sm:space-y-0"
    >
      <a
        href="https://www.facebook.com/"
        target="_blank"
        class="group flex w-auto flex-col items-center text-main-blue transition duration-[1000ms] ease-out sm:p-8 md:hover:text-hover-blue"
      >
        <i
          class="fa-brands fa-square-facebook mb-2 text-4xl transition duration-[1000ms] ease-out md:group-hover:scale-110"
        ></i>
        <div class="w-48 overflow-hidden">
          <div
            class="flex w-96 justify-center text-center font-marmelad uppercase transition duration-[1000ms] ease-out md:group-hover:-translate-x-1/2"
          >
            <p class="w-1/2 whitespace-nowrap">Facebook</p>
            <p class="w-1/2 whitespace-nowrap">AK Beauty Room</p>
          </div>
        </div>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        class="group flex w-auto flex-col items-center text-main-blue transition duration-[1000ms] ease-out sm:p-8 md:hover:text-hover-blue"
      >
        <i
          class="fa-brands fa-instagram mb-2 text-4xl transition duration-[1000ms] ease-out md:group-hover:scale-110"
        ></i>
        <div class="w-48 overflow-hidden">
          <div
            class="flex w-96 justify-center text-center font-marmelad uppercase transition duration-[1000ms] ease-out md:group-hover:-translate-x-1/2"
          >
            <p class="w-1/2 whitespace-nowrap">instagram</p>
            <p class="w-1/2 whitespace-nowrap">@AKBeautyRoom</p>
          </div>
        </div>
      </a>
      <a
        :href="`https://wa.me/${topLevelStore.navbar.contactNumber}`"
        target="_blank"
        class="group flex w-auto flex-col items-center text-main-blue transition duration-[1000ms] ease-out sm:p-8 md:hover:text-hover-blue"
      >
        <i
          class="fa-brands fa-whatsapp mb-2 text-4xl transition duration-[1000ms] ease-out md:group-hover:scale-110"
        ></i>
        <div class="w-48 overflow-hidden">
          <div
            class="flex w-96 justify-center text-center font-marmelad uppercase transition duration-[1000ms] ease-out md:group-hover:-translate-x-1/2"
          >
            <p class="w-1/2 whitespace-nowrap">WhatsApp</p>
            <p class="w-1/2 whitespace-nowrap">{{ topLevelStore.navbar.contactNumber }}</p>
          </div>
        </div>
      </a>
      <a
        href="https://goo.gl/maps/JB8gddaaQ6dLzakP9"
        target="_blank"
        class="group flex w-auto flex-col items-center text-main-blue transition duration-[1000ms] ease-out sm:p-8 md:hover:text-hover-blue"
      >
        <i
          class="fa-solid fa-location-dot mb-2 text-4xl transition duration-[1000ms] ease-out md:group-hover:scale-110"
        ></i>
        <div class="w-48 overflow-hidden">
          <div
            class="flex w-96 justify-center text-center font-marmelad uppercase transition duration-[1000ms] ease-out md:group-hover:-translate-x-1/2"
          >
            <p class="w-1/2 whitespace-nowrap">Google Maps</p>
            <p class="w-1/2 whitespace-nowrap">Maskavas 243, Riga</p>
          </div>
        </div>
      </a>
      <a
        :href="isMobile()"
        target="_blank"
        class="group flex w-auto flex-col items-center text-main-blue transition duration-[1000ms] ease-out sm:p-8 md:hover:text-hover-blue"
      >
        <i
          class="fa-solid fa-phone-volume mb-2 text-4xl transition duration-[1000ms] ease-out md:group-hover:scale-110"
        ></i>
        <div class="w-48 overflow-hidden">
          <div
            class="flex w-96 justify-center text-center font-marmelad uppercase transition duration-[1000ms] ease-out md:group-hover:-translate-x-1/2"
          >
            <p class="w-1/2 whitespace-nowrap">{{ topLevelStore.navbar.contactNumber }}</p>
            <p class="w-1/2 whitespace-nowrap">{{ topLevelStore.navbar.contactNumber }}</p>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
