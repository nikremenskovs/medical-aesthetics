<template>
  <div class="prices-products--container h-auto w-full px-4 pt-80">
    <section
      v-for="n in 4"
      class="mb-12 w-full text-main-blue"
      :class="`prices-products-section${n}`"
    >
      <h1
        class="mb-4 font-marmelad text-2xl uppercase"
        :class="`prices-products-section${n}__heading`"
      >
        Section Name: {{ n }}
      </h1>
      <ul class="prices-products-section__list w-full">
        <li
          v-for="k in 5"
          class="prices-products-section__list-item group mt-8 flex w-full justify-around border-b-2 border-main-blue/25 lg:hover:border-main-blue/75"
        >
          <input
            type="checkbox"
            name="checkbox"
            :id="`checkbox${k}${n}`"
            class="peer h-8 w-8 appearance-none rounded-full border-2 border-main-blue/25 checked:bg-main-blue focus:outline-none lg:cursor-pointer lg:group-hover:border-main-blue/75"
          />

          <label
            :for="`checkbox${k}${n}`"
            class="flex w-4/5 flex-col peer-checked:font-bold lg:cursor-pointer"
          >
            <div class="mb-4 flex justify-between">
              <div class="w-4/5">
                <h2 class="font-marmelad text-xl font-bold">super lip treatment {{ n }} {{ k }}</h2>
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
          </label>
        </li>
      </ul>
    </section>
  </div>
</template>
