<template>
    <div class="w-full h-auto bg-hover-blue border-t-[1px] border-main-blue px-4 py-8 text-main-white">
        <div class="mb-4">
            <h1 class="font-yeseva-one text-2xl uppercase mb-4 tracking-wide md:text-center md:mb-12">Ka mus atrast</h1>
            <div class="mb-4 md:flex md:space-x-6">
                <div class="mb-8 pr-6 md:border-r-2 md:border-main-white/50">
                    <h2 class="font-marmelad text-xl mb-2 tracking-wider capitalize">Ar sabiedrisko transportu</h2>
                    <p class="font-marmelad ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor maxime
                        dolores
                        atque,
                        sint eum assumenda
                        delectus quo asperiores, corporis voluptate aperiam ipsam libero amet explicabo. Sunt qui culpa
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
                    <p class="font-marmelad">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe
                        iure,
                        facilis
                        ratione dignissimos
                        fuga consequuntur consequatur pariatur minus odit natus itaque molestias ipsam accusantium. Quisquam
                        maiores
                        odit molestiae distinctio?</p>
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
                <a href="" class="md:hover:text-main-white transition duration-[1000ms] ease-out">
                    <i class="fa-brands fa-whatsapp"><span
                            class="hidden font-marmelad font-bold text-sm ml-1 align-middle sm:inline-block">+371
                            123456788</span></i>
                </a>
            </div>
            <p>© 2023 All rights reserved</p>
        </div>
    </div>
</template>