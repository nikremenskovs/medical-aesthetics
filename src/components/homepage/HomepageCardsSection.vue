<template>
    <section id="homepageCardsSection">
        <h1 class="text-4xl text-center text-[#1D3557] mb-4">Signature Treatments</h1>
        <div class="homepageCards-container sm:flex sm:flex-wrap sm:justify-center lg:flex-nowrap">
            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-[#F1FAEE]">
                    <img src="@/assets/images/cardFace6.png" alt="asdasdasd">
                    <div class="absolute bg-[#1D3557]/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-[#F1FAEE] font-bold text-2xl">Fillers</p>
                    </div>
                </div>
            </router-link>

            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-[#F1FAEE]">
                    <img src="@/assets/images/cardFace1.png" alt="asdasdasd">
                    <div class="absolute bg-[#1D3557]/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-[#F1FAEE] font-bold text-2xl">Skin Care</p>
                    </div>
                </div>
            </router-link>

            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-[#F1FAEE]">
                    <img src="@/assets/images/cardFace2.png" alt="asdasdasd">
                    <div class="absolute bg-[#1D3557]/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-[#F1FAEE] font-bold text-2xl sm:text-2xl">Injectables</p>
                    </div>
                </div>
            </router-link>

            <router-link to="/about" class="sm:w-1/3 m-8">
                <div class="relative bg-[#F1FAEE]">
                    <img src="@/assets/images/cardFace5.png" alt="asdasdasd">
                    <div class="absolute bg-[#1D3557]/75 left-0 bottom-0 h-1/5 w-full flex justify-center items-center">
                        <p class="text-[#F1FAEE] font-bold text-2xl sm:text-2xl">Facials</p>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>