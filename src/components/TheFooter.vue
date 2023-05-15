<script setup>
import { useTopLevelStore } from "@/stores/TopLevelStore.js";

const topLevelStore = useTopLevelStore();

const isMobile = () => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? `tel:${topLevelStore.navbar.contactNumber}` : undefined;
</script>

<template>
    <div class="w-full h-auto bg-hover-blue border-t-[1px] border-main-blue px-4 py-8 text-main-white">
        <div class="mb-4">
            <h1 class="font-yeseva-one text-2xl uppercase mb-4 tracking-wide md:text-center md:mb-12">
                {{ topLevelStore.footer.mainHeading }}</h1>
            <div class="mb-4 md:flex md:space-x-6">
                <div class="mb-8 pr-6 md:border-r-2 md:border-main-white/50"
                    v-for="(section, index) in topLevelStore.footer.sections" :key="index">
                    <h2 class="font-marmelad text-xl mb-2 tracking-wider capitalize">{{ section.heading }}</h2>
                    <p class="font-marmelad ">{{ section.text }}</p>
                </div>
            </div>
        </div>
        <div
            class="text-main-blue flex flex-col items-center justify-center border-t-[1px] border-main-white/50 mt-12 md:flex-row md:justify-between">
            <router-link class="flex items-center mb-2 pt-4" :to="{ name: 'home' }">
                <img src="@/assets/images/logoCrop.png" class="mr-2 h-8 lg:h-10 xl:h-12" alt="">
                <p class="font-yeseva-one text-xs uppercase">AK Beauty Room</p>
            </router-link>
            <div class="mb-2 space-x-6 text-xl">
                <a href="https://www.facebook.com/" target="_blank"
                    class="md:hover:text-main-white transition duration-[1000ms] ease-out">
                    <i class="fa-brands fa-facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank"
                    class="md:hover:text-main-white transition duration-[1000ms] ease-out">
                    <i class="fa-brands fa-instagram" />
                </a>
                <a :href="isMobile()" class="md:hover:text-main-white transition duration-[1000ms] ease-out">
                    <i class="fa-solid fa-phone-volume"><span
                            class="hidden font-marmelad font-bold text-sm ml-1 align-middle sm:inline-block">{{
                                topLevelStore.navbar.contactNumber }}</span></i>
                </a>
            </div>
            <p>© 2023 All rights reserved</p>
        </div>
    </div>
</template>