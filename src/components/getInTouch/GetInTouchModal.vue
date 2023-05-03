<script setup>
const emit = defineEmits(['closeGetInTouchModal'])
const handleCloseGetInTouchModal = (event) => {
    emit('closeGetInTouchModal', event)
}
</script>

<template>
    <div class="overlay h-screen w-full fixed top-0 left-0 z-30 flex justify-center items-center bg-main-white/75">
        <div
            class="w-10/12 h-auto py-8 px-6 relative flex items-center bg-main-blue text-main-white rounded-3xl sm:h-5/6 sm:py-0">
            <button @click="handleCloseGetInTouchModal">
                <i class="fa-solid fa-xmark absolute top-4 right-4  text-2xl leading-none" />
            </button>
            <div class="w-full mx-auto text-center sm:h-5/6 sm:overflow-y-auto sm:w-3/4 sm:flex sm:flex-wrap">
                <div class="sazinasimies mb-6 sm:w-1/2">
                    <h2 class="font-yeseva-one tracking-wide capitalize text-2xl mb-3">Sazinasimies!</h2>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2">izvēlēties jebkuru no šīm
                        platformām, mēs
                        atbildam
                        1-2
                        darba dienu
                        laikā:</p>
                    <div class="text-2xl space-y-2 flex flex-col w-auto">
                        <a href="https://www.facebook.com/" target="_blank"
                            class="md:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-square-facebook"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle sm:inline-block">AK
                                    Beaty
                                    Room</span></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank"
                            class="md:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-instagram"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle sm:inline-block">@AKBeautyRoom</span></i>
                        </a>
                        <a href="" class="md:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-whatsapp"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle sm:inline-block">+371
                                    123456788</span></i>
                        </a>
                        <a href="" class="md:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-solid fa-location-dot"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle sm:inline-block">Maskavas
                                    243, Riga</span></i>
                        </a>
                    </div>
                </div>
                <div class="opening-hours mb-6 sm:w-1/2">
                    <h2 class="font-yeseva-one tracking-wide capitalize text-2xl mb-3">darba laiks</h2>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2">Pirmdiena - Sestdiena: 10:00 - 20:00 </p>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2">Svetdiena - pec vienosanas </p>
                </div>
                <button
                    class="h-auto w-auto px-4 py-2 bg-main-bule text-main-white border-2 border-main-white rounded-full font-yeseva-one uppercase text-sm font-bold tracking-wider md:text-lg md:tracking-widest md:hover:bg-main-white md:hover:text-main-blue sm:w-full">
                    kā mūs atrast
                </button>
            </div>
        </div>
    </div>
</template>