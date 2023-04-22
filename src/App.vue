<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash'

const showNavbar = ref(true)
const lastScrollPosition = ref(0)

const updateScroll = debounce(() => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - lastScrollPosition.value) < 100) return

  switch (true) {
    case currentScrollPosition > lastScrollPosition.value + 100:
      showNavbar.value = false;
      break;
    case currentScrollPosition < lastScrollPosition.value - 100:
      showNavbar.value = true;
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
  <transition enter-active-class="transition ease-out duration-500 transform"
    leave-active-class="transition ease-out duration-500 transform" enter-from-class="-translate-y-full"
    leave-to-class="-translate-y-full" enter-to-class="translate-y-0">
    <TheNavbar v-show="showNavbar" />
  </transition>
  <RouterView />
</template>

