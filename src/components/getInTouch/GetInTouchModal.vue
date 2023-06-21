<script setup>
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? `tel:${topLevelStore.navbar.contactNumber}`
    : undefined

const emit = defineEmits(['closeGetInTouchModal'])
const handleCloseGetInTouchModal = (event) => {
  emit('closeGetInTouchModal', event)
}
</script>

<template>
  <div
    class="get-in-touch-modal__overlay fixed left-0 top-0 z-40 flex h-screen w-full items-center justify-center bg-main-white/75"
  >
    <div
      class="get-in-touch-modal relative flex h-auto w-10/12 items-center rounded-3xl bg-main-blue px-6 py-8 text-main-white sm:h-5/6 xl:py-0"
    >
      <button @click="handleCloseGetInTouchModal">
        <i
          class="get-in-touch-modal__close-button fa-solid fa-xmark absolute right-4 top-4 text-2xl leading-none"
        />
      </button>
      <div
        class="get-in-touch-modal--container mx-auto flex h-full w-full flex-col justify-center overflow-y-auto py-12 text-center xl:h-auto xl:w-3/4 xl:flex-row xl:flex-wrap"
      >
        <div class="section-one mb-6 xl:w-1/2">
          <h2 class="section-one__heading mb-3 font-yeseva-one text-2xl capitalize tracking-wide">
            {{ topLevelStore.modal.sectionOne.heading }}
          </h2>
          <p class="section-one__text mb-2 px-4 font-marmelad text-base tracking-wide">
            {{ topLevelStore.modal.sectionOne.text }}
          </p>
          <div class="section-one__links flex w-auto flex-col items-center space-y-2 text-2xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="transition duration-[1000ms] ease-out md:hover:text-hover-blue"
            >
              <i class="fa-brands fa-square-facebook"
                ><span
                  class="ml-2 align-middle font-marmelad text-sm font-bold tracking-wider xl:inline-block"
                  >AK Beauty Room</span
                ></i
              >
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="transition duration-[1000ms] ease-out md:hover:text-hover-blue"
            >
              <i class="fa-brands fa-instagram"
                ><span
                  class="ml-2 align-middle font-marmelad text-sm font-bold tracking-wider xl:inline-block"
                  >@AKBeautyRoom</span
                ></i
              >
            </a>
            <a
              :href="`https://wa.me/${topLevelStore.navbar.contactNumber}`"
              target="_blank"
              class="transition duration-[1000ms] ease-out md:hover:text-hover-blue"
            >
              <i class="fa-brands fa-whatsapp"
                ><span
                  class="ml-2 align-middle font-marmelad text-sm font-bold tracking-wider xl:inline-block"
                  >WhatsApp</span
                ></i
              >
            </a>
            <a
              href="https://goo.gl/maps/JB8gddaaQ6dLzakP9"
              target="_blank"
              class="transition duration-[1000ms] ease-out md:hover:text-hover-blue"
            >
              <i class="fa-solid fa-location-dot"
                ><span
                  class="ml-2 align-middle font-marmelad text-sm font-bold tracking-wider xl:inline-block"
                  >Maskavas 243, Riga</span
                ></i
              >
            </a>
            <a
              :href="isMobile()"
              class="transition duration-[1000ms] ease-out xl:hover:text-hover-blue"
            >
              <i class="fa-solid fa-phone-volume"
                ><span
                  class="ml-2 align-middle font-marmelad text-sm font-bold tracking-wider xl:inline-block"
                  >{{ topLevelStore.navbar.contactNumber }}</span
                ></i
              >
            </a>
          </div>
        </div>
        <div class="section-two mb-6 xl:w-1/2">
          <h2 class="section-two__heading mb-3 font-yeseva-one text-2xl capitalize tracking-wide">
            {{ topLevelStore.modal.sectionTwo.heading }}
          </h2>
          <p
            v-for="(field, index) in topLevelStore.modal.sectionTwo.textFields"
            :key="index"
            class="mb-2 px-4 font-marmelad text-base tracking-wide"
            :class="`section-two__text${index}`"
          >
            {{ field.field }}
          </p>
        </div>
        <router-link
          :to="topLevelStore.modal.button.buttonRoute"
          @click="handleCloseGetInTouchModal"
          class="get-in-touch-modal__button bg-main-bule mx-auto h-auto rounded-full border-2 border-main-white px-4 py-2 font-yeseva-one text-sm font-bold uppercase tracking-wider text-main-white md:text-lg md:tracking-widest md:hover:bg-main-white md:hover:text-main-blue xl:mx-auto xl:mt-20"
        >
          {{ topLevelStore.modal.button.buttonText }}
        </router-link>
      </div>
    </div>
  </div>
</template>
