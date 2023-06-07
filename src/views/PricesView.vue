<script setup>
import PricesBannerSection from '@/components/prices/PricesBannerSection.vue'
</script>

<template>
  <PricesBannerSection />

  <div class="prices-products--container h-auto w-full px-4 pt-80">
    <section v-for="n in 4" class="prices-products-section mb-12 w-full text-main-blue">
      <h1 class="prices-products-section__heading mb-4 font-marmelad text-2xl uppercase">
        Section Name: {{ n }}
      </h1>
      <ul class="prices-products-section__list w-full">
        <li
          v-for="k in 5"
          class="prices-products-section__list-item mt-8 flex w-full border-b-2 border-main-blue/25"
        >
          <div class="flex grow items-start justify-center">
            <input type="checkbox" name="" id="" class="h-8 w-8 rounded-full" />
          </div>
          <div class="flex w-4/5 flex-col">
            <div class="mb-4 flex justify-between">
              <div class="w-4/5">
                <h2 class="font-marmelad text-xl font-bold">
                  super juicy lip treatment {{ n }} {{ k }}
                </h2>
                <p class="font-marmelad">1hr</p>
              </div>
              <p class="font-marmelad text-xl">£150</p>
            </div>
            <p class="mb-8 font-marmelad">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus expedita officiis
              porro quam veritatis iure excepturi necessitatibus ipsam at quidem!Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Ducimus expedita officiis porro quam veritatis
              iure excepturi necessitatibus ipsam at quidem!
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>

  <div
    class="sticky bottom-0 h-12 w-full rounded-lg border-[1px] border-main-blue/25 py-4 shadow-lg backdrop-blur-lg"
  >
    <h1 class="mx-auto font-yeseva-one text-xl uppercase text-main-blue">Price summary</h1>
  </div>
</template>
