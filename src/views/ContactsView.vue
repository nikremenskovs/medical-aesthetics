<script setup>
import { useTopLevelStore } from "@/stores/TopLevelStore.js";

const topLevelStore = useTopLevelStore();

const isMobile = () => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? `tel:${topLevelStore.navbar.contactNumber}` : undefined;
</script>

<template>
    <section class="contact">
        <div
            class="contact-banner--container w-full flex justify-center h-[30vh] sm:h-[40vh] md:h-[50vh] space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20">
            <img src="@/assets/images/contactsBannerLeftNoBG.png" class="w-1/2 h-full object-cover object-right">
            <img src="@/assets/images/contactsBannerRightNoBG.png" class="w-1/2 h-full object-cover object-left">
        </div>
        <div class="contact-content--container bg-main-white px-4 mb-12 md:px-24">
            <div
                class="border-[1px] border-main-blue/25 rounded-lg shadow-lg py-10 -translate-y-12 backdrop-blur-lg md:py-12 px-4 md:px-6">
                <div class="flex flex-col justify-center items-center space-y-8 mb-12 sm:flex-row sm:space-y-0 flex-wrap">
                    <a href="https://www.facebook.com/" target="_blank"
                        class="w-auto flex flex-col items-center text-main-blue rounded-xl group sm:p-8 md:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                        <i
                            class="fa-brands fa-square-facebook text-4xl mb-2 md:group-hover:scale-110 transition duration-[1000ms] ease-out"></i>
                        <div class="w-48 overflow-hidden">
                            <div
                                class="w-96 flex justify-center text-center font-marmelad uppercase md:group-hover:-translate-x-1/2 transition duration-[1000ms] ease-out">
                                <p class="w-1/2 whitespace-nowrap">Facebook</p>
                                <p class="w-1/2 whitespace-nowrap">AK Beauty Room</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank"
                        class="w-auto flex flex-col items-center text-main-blue group sm:p-8 md:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                        <i
                            class="fa-brands fa-instagram text-4xl mb-2 md:group-hover:scale-110 transition duration-[1000ms] ease-out"></i>
                        <div class="w-48 overflow-hidden">
                            <div
                                class="w-96 flex justify-center text-center font-marmelad uppercase md:group-hover:-translate-x-1/2 transition duration-[1000ms] ease-out">
                                <p class="w-1/2 whitespace-nowrap">instagram</p>
                                <p class="w-1/2 whitespace-nowrap">@AKBeautyRoom</p>
                            </div>
                        </div>
                    </a>
                    <a :href="`https://wa.me/${topLevelStore.navbar.contactNumber}`" target="_blank"
                        class="w-auto flex flex-col items-center text-main-blue group sm:p-8 md:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                        <i
                            class="fa-brands fa-whatsapp text-4xl mb-2 md:group-hover:scale-110 transition duration-[1000ms] ease-out"></i>
                        <div class="w-48 overflow-hidden">
                            <div
                                class="w-96 flex justify-center text-center font-marmelad uppercase md:group-hover:-translate-x-1/2 transition duration-[1000ms] ease-out">
                                <p class="w-1/2 whitespace-nowrap">WhatsApp</p>
                                <p class="w-1/2 whitespace-nowrap">{{ topLevelStore.navbar.contactNumber }}</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://goo.gl/maps/JB8gddaaQ6dLzakP9" target="_blank"
                        class="w-auto flex flex-col items-center text-main-blue group sm:p-8 md:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                        <i
                            class="fa-solid fa-location-dot text-4xl mb-2 md:group-hover:scale-110 transition duration-[1000ms] ease-out"></i>
                        <div class="w-48 overflow-hidden">
                            <div
                                class="w-96 flex justify-center text-center font-marmelad uppercase md:group-hover:-translate-x-1/2 transition duration-[1000ms] ease-out">
                                <p class="w-1/2 whitespace-nowrap">Google Maps</p>
                                <p class="w-1/2 whitespace-nowrap">Maskavas 243, Riga</p>
                            </div>
                        </div>
                    </a>
                    <a :href="isMobile()" target="_blank"
                        class="w-auto flex flex-col items-center text-main-blue group sm:p-8 md:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                        <i
                            class="fa-solid fa-phone-volume text-4xl mb-2 md:group-hover:scale-110 transition duration-[1000ms] ease-out"></i>
                        <div class="w-48 overflow-hidden">
                            <div
                                class="w-96 flex justify-center text-center font-marmelad uppercase md:group-hover:-translate-x-1/2 transition duration-[1000ms] ease-out">
                                <p class="w-1/2 whitespace-nowrap">{{ topLevelStore.navbar.contactNumber }}</p>
                                <p class="w-1/2 whitespace-nowrap">{{ topLevelStore.navbar.contactNumber }}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="max-w-[700px] h-96 border-2 mx-auto">
                </div>
            </div>
        </div>

    </section>
</template>