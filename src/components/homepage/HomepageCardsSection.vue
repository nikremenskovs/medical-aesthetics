<template>
    <section id="homepageCardsSection">
        <h1 class="text-4xl text-center text-main-blue mb-4">Signature Treatments</h1>
        <div class="homepageCards-container sm:flex sm:flex-wrap sm:justify-center lg:flex-nowrap">
            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-main-white">
                    <img src="@/assets/images/cardFace6.png" alt="asdasdasd">
                    <div class="absolute bg-main-blue/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-main-white font-bold text-2xl">Fillers</p>
                    </div>
                </div>
            </router-link>

            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-main-white">
                    <img src="@/assets/images/cardFace1.png" alt="asdasdasd">
                    <div class="absolute bg-main-blue/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-main-white font-bold text-2xl">Skin Care</p>
                    </div>
                </div>
            </router-link>

            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-main-white">
                    <img src="@/assets/images/cardFace2.png" alt="asdasdasd">
                    <div class="absolute bg-main-blue/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-main-white font-bold text-2xl sm:text-2xl">Injectables</p>
                    </div>
                </div>
            </router-link>

            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-main-white">
                    <img src="@/assets/images/cardFace5.png" alt="asdasdasd">
                    <div class="absolute bg-main-blue/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-main-white font-bold text-2xl sm:text-2xl">Facials</p>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>