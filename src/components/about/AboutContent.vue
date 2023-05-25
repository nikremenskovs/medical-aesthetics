<template>
  <div id="aboutContent" class="about-content--container z-10 h-auto w-full bg-main-white/75">
    <section class="about-content__section1 flex h-auto flex-col items-center justify-start">
      <div class="flex flex-col items-center">
        <CallToActionButton to="#about-content__section2" class="mt-8">BEGIN</CallToActionButton>
        <span class="mx-auto mb-4 mt-8 block h-[1px] w-screen bg-main-blue/25"></span>
      </div>
    </section>
    <section
      id="about-content__section2"
      class="about-content__section2 flex h-screen flex-col items-center justify-start px-8 pt-12 text-center"
    >
      <h1 class="mb-2 font-yeseva-one text-4xl uppercase">who am i</h1>
      <span class="mx-auto mb-4 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="font-marmelad text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, unde quaerat? Minima
        debitis omnis eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
        unde quaerat? Minima debitis omnis eligendi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Autem, unde quaerat? Minima debitis omnis eligendi. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Autem, unde quaerat? Minima debitis omnis eligendi.
      </p>
      <CallToActionButton to="#about-content__section3" class="mt-8">next</CallToActionButton>
    </section>
    <section
      id="about-content__section3"
      class="about-content__section2 flex h-screen flex-col items-center justify-start px-8 pt-12 text-center"
    >
      <h1 class="mb-2 font-yeseva-one text-4xl uppercase">my qualifications</h1>
      <span class="mx-auto mb-4 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="font-marmelad text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, unde quaerat? Minima
        debitis omnis eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
        unde quaerat? Minima debitis omnis eligendi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Autem, unde quaerat? Minima debitis omnis eligendi. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Autem, unde quaerat? Minima debitis omnis eligendi.
      </p>
      <CallToActionButton to="#about-content__section2" class="mt-8">next</CallToActionButton>
    </section>
  </div>
</template>
