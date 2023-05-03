<template>
    <div class="slide">
        <transition enter-active-class="transition ease-out duration-500"
            leave-active-class="transition ease-out duration-500" enter-from-class="translate-x-full opacity-0"
            leave-to-class="-translate-x-full opacity-0" enter-to-class="translate-x-0 opacity-100"
            leave-from-class="translate-x-0 opacity-100">
            <slot />
        </transition>
    </div>
</template>