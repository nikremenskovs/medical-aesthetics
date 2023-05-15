<script setup>
import SelectLanguageDropdown from '@/components/shared/SelectLanguageDropdown.vue'
import { ref } from 'vue'
import { useTopLevelStore } from "@/stores/TopLevelStore.js";

const topLevelStore = useTopLevelStore();

const mobileNav = ref(null)

const isMobile = () => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? `tel:${topLevelStore.navbar.contactNumber}` : undefined;
</script>

<template>
    <nav class="fixed w-full z-50"
        :class="mobileNav ? 'h-screen bg-gradient-to-b from-main-white/75 to-transparent' : 'bg-main-white/75 border-b-[1px] border-main-blue'">
        <div class="flex flex-wrap p-4 justify-between md:justify-center">
            <router-link :to="{ name: 'home' }"
                class="md:order-2 md:w-1/12 md:mx-4 lg:w-2/12 lg:m-0 md:hover:scale-110 transition duration-[1000ms] ease-out"
                @click="mobileNav = false">
                <img class="h-16 mx-auto lg:h-20 xl:h-24" :src="topLevelStore.navbar.navbarLogo.image[0]"
                    :alt="topLevelStore.navbar.navbarLogo['image-alt']">
            </router-link>
            <div
                class="flex justify-end my-auto space-x-4 text-2xl text-main-blue sm:space-x-8 md:justify-start md:order-3 md:w-5/12 md:space-x-10 lg:text-2xl">
                <SelectLanguageDropdown />
                <a href="https://www.facebook.com/" target="_blank"
                    class="md:hover:text-hover-blue md:hover:scale-125 transition duration-[1000ms] ease-out">
                    <i class="fa-brands fa-facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank"
                    class="md:hover:text-hover-blue md:hover:scale-125 transition duration-[1000ms] ease-out">
                    <i class="fa-brands fa-instagram" />
                </a>
                <a :href="isMobile()" target="_blank"
                    class="md:hover:text-hover-blue md:hover:scale-110 transition duration-[1000ms] ease-out">
                    <i class="fa-solid fa-phone-volume"><span
                            class="hidden font-marmelad font-bold text-sm ml-1 align-middle lg:inline-block">{{
                                topLevelStore.navbar.contactNumber }}</span></i>
                </a>
                <button @click="mobileNav = !mobileNav">
                    <i class="fas fa-bars transition duration-[1000ms] ease-out md:hidden"
                        :class="mobileNav ? 'transform rotate-180' : ''" />
                </button>
            </div>
            <div class="w-full items-center md:flex md:order-1 md:justify-end md:w-5/12">
                <ul class="flex-col mt-4 font-marmelad font-bold rounded-lg text-center uppercase text-main-blue whitespace-nowrap md:text-xs md:flex md:p-0 md:flex-row md:space-x-2 md:mt-0 lg:space-x-6 xl:text-base"
                    :class="mobileNav ? 'flex' : 'hidden'">
                    <li class="py-2 md:p-0" v-for="(title, index) in topLevelStore.navbar.navTitles" :key="index">
                        <router-link
                            class="border-b-2 border-transparent md:hover:text-hover-blue md:hover:border-hover-blue transition duration-[1000ms] ease-out"
                            :to="title.buttonRoute" @click="mobileNav = false"
                            :exact-active-class="'text-hover-blue border-b-hover-blue'">
                            {{ title.buttonText }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
