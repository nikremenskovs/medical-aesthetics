<script setup>
import { usePricesPageStore } from '@/stores/PricesPageStore.js'
const pricesPageStore = usePricesPageStore()
</script>

<template>
  <div class="prices-products--container h-auto w-full px-4 pt-80">
    <section
      v-for="(section, sectionIndex) in pricesPageStore.products.pricesProductsSections"
      :key="sectionIndex"
      :class="`prices-products-section${sectionIndex}`"
      class="mb-12 w-full text-main-blue"
    >
      <h1
        :class="`prices-products-section${sectionIndex}__heading`"
        class="mb-4 font-marmelad text-2xl uppercase"
      >
        {{ section.pricesProductsSectionTitle }}
      </h1>
      <ul :class="`prices-products-section${sectionIndex}__list`" class="w-full">
        <li
          v-for="(item, itemIndex) in section.sectionItems"
          :key="itemIndex"
          :class="`prices-products-section${sectionIndex}__list-item${itemIndex}`"
          class="group mt-8 flex w-full justify-around border-b-2 border-main-blue/25 lg:hover:border-main-blue/75"
        >
          <input
            type="checkbox"
            name="checkbox"
            :id="`section${sectionIndex}__input${itemIndex}`"
            class="peer h-8 w-8 appearance-none rounded-full border-2 border-main-blue/25 checked:bg-main-blue focus:outline-none lg:cursor-pointer lg:group-hover:border-main-blue/75"
          />

          <label
            :for="`section${sectionIndex}__input${itemIndex}`"
            class="flex w-4/5 flex-col peer-checked:font-bold lg:cursor-pointer"
          >
            <div class="mb-4 flex justify-between">
              <div class="w-4/5">
                <h2 class="font-marmelad text-xl font-bold">
                  {{ item.itemTitle }}
                </h2>
                <p class="font-marmelad">{{ item.itemDuration }}</p>
              </div>
              <p class="font-marmelad text-xl">{{ item.itemPrice }}</p>
            </div>
            <p class="mb-8 font-marmelad">{{ item.itemDescription }}</p>
          </label>
        </li>
      </ul>
    </section>
  </div>
</template>
