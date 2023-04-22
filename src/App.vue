<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import GetInTouchButton from '@/components/getInTouch/GetInTouchButton.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash'

const showNavbar = ref(true)
const showGetInTouchButton = ref(false)
const lastScrollPosition = ref(0)

const updateScroll = debounce(() => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - lastScrollPosition.value) < 100) return

  switch (true) {
    case currentScrollPosition > lastScrollPosition.value + 100:
      showNavbar.value = false;
      showGetInTouchButton.value = true
      break;
    case currentScrollPosition < lastScrollPosition.value - 100:
      showNavbar.value = true;
      showGetInTouchButton.value = false
  }

  lastScrollPosition.value = currentScrollPosition
}, 180)


onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<template>
  <div class="bg-main-white">
    <transition enter-active-class="transition ease-out duration-500 transform"
      leave-active-class="transition ease-out duration-1000 transform" enter-from-class="translate-x-full"
      leave-to-class="translate-x-full" enter-to-class="translate-x-0">
      <GetInTouchButton v-show="showGetInTouchButton" />
    </transition>
    <transition enter-active-class="transition ease-out duration-500 transform"
      leave-active-class="transition ease-out duration-500 transform" enter-from-class="-translate-y-full"
      leave-to-class="-translate-y-full" enter-to-class="translate-y-0">
      <TheNavbar v-show="showNavbar" />
    </transition>
    <RouterView />
    <TheFooter />
  </div>
</template>

