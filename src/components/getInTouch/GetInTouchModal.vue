<script setup>
import { useTopLevelStore } from "@/stores/TopLevelStore.js";

const topLevelStore = useTopLevelStore();

const isMobile = () => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? `tel:${topLevelStore.navbar.contactNumber}` : undefined;


const emit = defineEmits(['closeGetInTouchModal'])
const handleCloseGetInTouchModal = (event) => {
    emit('closeGetInTouchModal', event)
}
</script>

<template>
    <div class="overlay h-screen w-full fixed top-0 left-0 z-30 flex justify-center items-center bg-main-white/75">
        <div
            class="w-10/12 h-auto py-8 px-6 relative flex items-center bg-main-blue text-main-white rounded-3xl sm:h-5/6 xl:py-0">
            <button @click="handleCloseGetInTouchModal">
                <i class="fa-solid fa-xmark absolute top-4 right-4  text-2xl leading-none" />
            </button>
            <div
                class="w-full h-full mx-auto py-12 text-center overflow-y-auto flex flex-col justify-center xl:h-auto xl:w-3/4 xl:flex-row xl:flex-wrap">
                <div class="sazinasimies mb-6 xl:w-1/2">
                    <h2 class="font-yeseva-one tracking-wide capitalize text-2xl mb-3">
                        {{ topLevelStore.modal.sectionOne.heading }}</h2>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2">{{ topLevelStore.modal.sectionOne.text }}</p>
                    <div class="w-auto text-2xl space-y-2 flex flex-col items-center">
                        <a href="https://www.facebook.com/" target="_blank"
                            class="md:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-square-facebook"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">AK
                                    Beauty
                                    Room</span></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank"
                            class="md:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-instagram"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">@AKBeautyRoom</span></i>
                        </a>
                        <a :href="`https://wa.me/${topLevelStore.navbar.contactNumber}`" target="_blank"
                            class="md:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-whatsapp"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">WhatsApp</span></i>
                        </a>
                        <a href="https://goo.gl/maps/JB8gddaaQ6dLzakP9" target="_blank"
                            class="md:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-solid fa-location-dot"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">Maskavas
                                    243, Riga</span></i>
                        </a>
                        <a :href="isMobile()" class="xl:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-solid fa-phone-volume"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">{{
                                        topLevelStore.navbar.contactNumber }}</span></i>
                        </a>
                    </div>
                </div>
                <div class="opening-hours mb-6 xl:w-1/2">
                    <h2 class="font-yeseva-one tracking-wide capitalize text-2xl mb-3">
                        {{ topLevelStore.modal.sectionTwo.heading }}</h2>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2"
                        v-for="(field, index) in topLevelStore.modal.sectionTwo.textFields" :key="index">
                        {{ field.field }} </p>

                </div>
                <router-link :to="topLevelStore.modal.button.buttonRoute"
                    class="h-auto mx-auto px-4 py-2 bg-main-bule text-main-white border-2 border-main-white rounded-full font-yeseva-one uppercase text-sm font-bold tracking-wider xl:mx-auto xl:mt-20 md:text-lg md:tracking-widest md:hover:bg-main-white md:hover:text-main-blue">
                    {{ topLevelStore.modal.button.buttonText }}
                </router-link>
            </div>
        </div>
    </div>
</template>