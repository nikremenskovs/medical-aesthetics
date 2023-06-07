<script setup>
import PricesBannerSection from '@/components/prices/PricesBannerSection.vue'
</script>

<template>
  <PricesBannerSection />

  <div class="prices-products--container h-auto w-full px-4 pt-80">
    <section class="prices-products-section">
      <h1 class="prices-products-section__heading">Section Name:</h1>
      <ul class="prices-products-section__list">
        <li class="prices-products-section__list-item flex">
          <input type="checkbox" name="" id="" />
          <div class="flex flex-col">
            <div class="flex justify-between">
              <div>
                <h2>Treament name</h2>
                <p>1hr</p>
              </div>
              <p>£150</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus expedita officiis
              porro quam veritatis iure excepturi necessitatibus ipsam at quidem!
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>

  <!-- <div
    class="sticky bottom-0 h-12 w-full rounded-lg border-[1px] border-main-blue/25 py-4 shadow-lg backdrop-blur-lg"
  >
    <h1 class="mx-auto font-yeseva-one text-xl uppercase text-main-blue">Price summary</h1>
  </div> -->
</template>
