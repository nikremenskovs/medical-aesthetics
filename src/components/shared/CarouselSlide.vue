<template>
  <transition
    enter-active-class="transition ease-out duration-1000"
    leave-active-class="transition ease-out duration-1000"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
  >
    <slot />
  </transition>
</template>
