<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheScrollToTopButton from '@/components/TheScrollToTopButton.vue'
import GetInTouchButton from '@/components/getInTouch/GetInTouchButton.vue'
import GetInTouchModal from '@/components/getInTouch/GetInTouchModal.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce } from 'lodash'
import { useRoute, useRouter } from "vue-router";
import { RouterView } from 'vue-router'
import { useTopLevelStore } from "@/stores/TopLevelStore.js";
import { useFavicon } from '@vueuse/core'

const topLevelStore = useTopLevelStore();
const route = useRoute();
const router = useRouter();

const showNavbar = ref(true)
const showGetInTouchButton = ref(false)
const showScrollToTopButton = ref(false)
const showGetInTouchModal = ref(false)

const lastScrollPosition = ref(0)

const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

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
      break;
  }

  lastScrollPosition.value = currentScrollPosition


  switch (true) {
    case currentScrollPosition < 500:
      showScrollToTopButton.value = false
      break;
    case currentScrollPosition > 500:
      showScrollToTopButton.value = true
      break;
  }
}, 180)

onMounted(async () => {
  let topLevelData = null;
  try {
    topLevelData = await topLevelStore.getTopLevelData(route.query.preview);
    useFavicon(topLevelData.faviconUrl, { rel: 'icon' })
  } catch {
    router.push("/dummy");
  }
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
      <GetInTouchButton v-show="showGetInTouchButton" @click="showGetInTouchModal = !showGetInTouchModal" />
    </transition>


    <transition enter-active-class="transition ease-out duration-500 transform"
      leave-active-class="transition ease-out duration-1000 transform" enter-from-class="opacity-0"
      leave-to-class="opacity-0" enter-to-class="opacity-1">
      <GetInTouchModal v-if="showGetInTouchModal" @click.self="showGetInTouchModal = false"
        @closeGetInTouchModal="showGetInTouchModal = false" />
    </transition>

    <Suspense>

      <transition enter-active-class="transition ease-out duration-500 transform"
        leave-active-class="transition ease-out duration-500 transform" enter-from-class="-translate-y-full"
        leave-to-class="-translate-y-full" enter-to-class="translate-y-0">
        <TheNavbar v-show="showNavbar" />
      </transition>
    </Suspense>

    <Suspense>
      <RouterView />
    </Suspense>


    <TheFooter />

    <transition enter-active-class="transition ease-out duration-500 transform"
      leave-active-class="transition ease-out duration-1000 transform" enter-from-class="opacity-0"
      leave-to-class="opacity-0" enter-to-class="opacity-1">
      <TheScrollToTopButton v-show="showScrollToTopButton" @click="toTop" />
    </transition>

  </div>
</template>

