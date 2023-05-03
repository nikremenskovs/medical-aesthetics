<script setup>
const emit = defineEmits(['closeGetInTouchModal'])
const handleCloseGetInTouchModal = (event) => {
    emit('closeGetInTouchModal', event)
}
</script>

<template>
    <div class="overlay h-screen w-full fixed top-0 left-0 z-30 flex justify-center items-center bg-main-white/75">
        <div class="w-10/12 sm:h-5/6 py-8 px-6 relative flex items-center bg-main-blue text-main-white rounded-3xl xl:py-0">
            <button @click="handleCloseGetInTouchModal">
                <i class="fa-solid fa-xmark absolute top-4 right-4  text-2xl leading-none" />
            </button>
            <div class="w-full mx-auto text-center sm:h-5/6 overflow-y-auto xl:h-auto xl:w-3/4 xl:flex xl:flex-wrap">
                <div class="sazinasimies mb-6 xl:w-1/2">
                    <h2 class="font-yeseva-one tracking-wide capitalize text-2xl mb-3">Sazinasimies!</h2>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2">izvēlēties jebkuru no šīm
                        platformām, mēs
                        atbildam
                        1-2
                        darba dienu
                        laikā:</p>
                    <div class="text-2xl space-y-2 flex flex-col w-auto">
                        <a href="https://www.facebook.com/" target="_blank"
                            class="xl:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-square-facebook"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">AK
                                    Beauty
                                    Room</span></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank"
                            class="xl:hover:text-hover-blue  transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-instagram"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">@AKBeautyRoom</span></i>
                        </a>
                        <a href="" class="xl:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-brands fa-whatsapp"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">+371
                                    123456788</span></i>
                        </a>
                        <a href="" class="xl:hover:text-hover-blue transition duration-[1000ms] ease-out">
                            <i class="fa-solid fa-location-dot"><span
                                    class="font-marmelad font-bold text-sm tracking-wider ml-2 align-middle xl:inline-block">Maskavas
                                    243, Riga</span></i>
                        </a>
                    </div>
                </div>
                <div class="opening-hours mb-6 xl:w-1/2">
                    <h2 class="font-yeseva-one tracking-wide capitalize text-2xl mb-3">darba laiks</h2>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2">Pirmdiena - Sestdiena: 10:00 - 20:00 </p>
                    <p class="font-marmelad tracking-wide text-base px-4 mb-2">Svetdiena - pec vienosanas </p>
                </div>
                <button
                    class="h-auto w-auto px-4 py-2 bg-main-bule text-main-white border-2 border-main-white rounded-full font-yeseva-one uppercase text-sm font-bold tracking-wider md:text-lg md:tracking-widest md:hover:bg-main-white md:hover:text-main-blue xl:hidden">
                    kā mūs atrast
                </button>
                <div class="mb-4 hidden xl:block">
                    <h1 class="font-yeseva-one text-2xl uppercase mb-4 tracking-wide md:text-center md:my-12">Ka mus atrast
                    </h1>
                    <div class="mb-4 md:flex md:space-x-6">
                        <div class="mb-8 pr-6 md:border-r-2 md:border-main-white/50">
                            <h2 class="font-marmelad text-xl mb-2 tracking-wider capitalize">Ar sabiedrisko transportu</h2>
                            <p class="font-marmelad ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor maxime
                                dolores
                                atque,
                                sint eum assumenda
                                delectus quo asperiores, corporis voluptate aperiam ipsam libero amet explicabo. Sunt qui
                                culpa
                                consectetur
                                eos?</p>
                        </div>
                        <div class="mb-8 pr-6 md:border-r-2 md:border-main-white/50">
                            <h2 class="font-marmelad text-xl mb-2 tracking-wider capitalize">Ar masinu</h2>
                            <p class="font-marmelad">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit iste
                                adipisci a
                                non,
                                sint, cum vero modi
                                reprehenderit mollitia corrupti in obcaecati harum. Neque omnis perferendis necessitatibus
                                voluptatum
                                facilis sunt?</p>
                        </div>
                        <div class="mb-8 pr-6">
                            <h2 class="font-marmelad text-xl mb-2 tracking-wider capitalize">informacija parkingam</h2>
                            <p class="font-marmelad">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                                saepe
                                iure,
                                facilis
                                ratione dignissimos
                                fuga consequuntur consequatur pariatur minus odit natus itaque molestias ipsam accusantium.
                                Quisquam
                                maiores
                                odit molestiae distinctio?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>