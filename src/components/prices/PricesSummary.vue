<script setup>
import { usePricesPageStore } from '@/stores/PricesPageStore.js'
const pricesPageStore = usePricesPageStore()
</script>

<template>
  <section
    :class="pricesPageStore.maximiseSummary ? 'h-[70vh]' : 'h-[110px] lg:h-[70vh]', pricesPageStore.selectedProducts.length > 0 ? 'block' : 'hidden lg:block'"
    class="prices-summary fixed bottom-0 z-30 w-full rounded-lg border-[1px] border-main-blue/25 px-4 py-4 shadow-lg backdrop-blur-lg transition-[height] duration-500 lg:right-[5%] lg:top-44 lg:max-w-[300px] xl:right-[10%] 2xl:right-[20%]"
  >
    <div
      class="prices-summary-header flex justify-between"
      :class="pricesPageStore.maximiseSummary ? ' border-b-2 border-main-blue/50' : ''"
    >
      <div v-if="pricesPageStore.selectedProducts.length > 0"   
      class="prices-summary-header__text">
        <h1 class="mx-auto mb-2 font-yeseva-one text-xl uppercase text-main-blue">
          Products selected: {{ pricesPageStore.selectedProducts.length }}
        </h1>
        <h2 class="mb-2 font-marmelad text-xl text-main-blue">
          Total price: €{{
            pricesPageStore.selectedProducts.reduce((accumulator, product) => {
              return accumulator + product.itemPrice
            }, 0)
          }}
        </h2>
      </div>
      
      <div v-else>
<h1 class="mx-auto mb-2 font-yeseva-one text-xl uppercase text-main-blue">
          No services selected yet
        </h1>
      </div>
      <button
        class="prices-summary-header__button flex items-start lg:hidden"
        @click="pricesPageStore.maximiseSummary = !pricesPageStore.maximiseSummary"
      >
        <i
          class="fas fa-chevron-right flex h-10 w-10 -rotate-90 cursor-pointer items-center justify-center rounded-[50%] bg-hover-blue text-main-white transition duration-[1500ms] md:hover:animate-hoverPulse"
          :class="pricesPageStore.maximiseSummary ? 'rotate-90' : '-rotate-90 animate-pulse'"
        ></i>
      </button>
    </div>
    <ul    
      class="prices-summary-list no-scrollbar z-30 h-[55vh] overflow-y-auto pt-4"
    >
      <li
        v-for="(product, index) in pricesPageStore.selectedProducts"
        class="mb-4 flex justify-between font-marmelad text-xl text-main-blue"
      >
        <div>
          <h2 class="font-bold">{{ product.itemTitle }}</h2>
          <p class="">€{{ product.itemPrice }}</p>
        </div>
        <button @click="pricesPageStore.selectedProducts.splice(index, 1)">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
