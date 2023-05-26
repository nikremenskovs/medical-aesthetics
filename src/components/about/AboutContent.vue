<template>
  <div
    id="aboutContent"
    class="about-content--container z-10 mx-auto h-auto w-full max-w-sm bg-main-white/75 lg:max-w-2xl"
  >
    <section
      id="about-content__section2"
      class="about-content__section2 flex h-auto min-h-screen flex-col items-center justify-center border-b-[1px] border-main-blue/25 px-8 py-12 text-center text-main-blue"
    >
      <img src="../../assets/images/about1.jpg" alt="" class="mb-8 max-h-96 rounded-lg" />
      <h1 class="mb-6 font-yeseva-one text-4xl uppercase">who am i</h1>
      <span class="mx-auto mb-6 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="mb-6 font-marmelad text-lg">
        Aliquam ante ac id. Adipiscing interdum lorem praesent fusce pellentesque arcu feugiat.
        Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum lorem blandit vis ac commodo
        aliquet integer vulputate phasellus lorem ipsum dolor lorem magna consequat sed etiam
        adipiscing interdum.
      </p>
      <CallToActionButton to="#about-content__section3" class="animate-pulse"
        >next</CallToActionButton
      >
    </section>
    <section
      id="about-content__section2"
      class="about-content__section2 flex h-auto min-h-screen flex-col items-center justify-center border-b-[1px] border-main-blue/25 px-8 py-12 text-center text-main-blue"
    >
      <img src="../../assets/images/about2.jpg" alt="" class="mb-8 max-h-96 rounded-lg" />
      <h1 class="mb-6 font-yeseva-one text-4xl uppercase">my diplomas</h1>
      <span class="mx-auto mb-6 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="mb-6 font-marmelad text-lg">
        I am an individual that treats their trade as an ever-changing journey that provides an
        opportunity to master existing skills and obtain new knowledge
      </p>
      <ul class="mb-6 flex w-full flex-col">
        <li
          v-for="n in 6"
          class="flex h-24 w-full items-center justify-center border-b-[1px] border-main-blue/25 font-marmelad uppercase"
        >
          <i class="fa-solid fa-check mr-4 text-2xl"></i>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
      <CallToActionButton to="#about-content__section3" class="animate-pulse"
        >next</CallToActionButton
      >
    </section>
    <section
      id="about-content__section2"
      class="about-content__section2 flex h-auto min-h-screen flex-col items-center justify-center border-b-[1px] border-main-blue/25 px-8 py-12 text-center text-main-blue"
    >
      <img src="../../assets/images/about3.jpg" alt="" class="mb-8 max-h-96 rounded-lg" />
      <h1 class="mb-6 font-yeseva-one text-4xl uppercase">one more thing</h1>
      <span class="mx-auto mb-6 block h-1 w-1/4 bg-main-blue/25"></span>
      <p class="mb-6 font-marmelad text-lg">
        It is very important to find the right cosmetologists but it is equally important to find
        the right service. Whether you prefer to do your own research or consult with a specialists
        - please do take your time and use all sources available to yourself to make the right
        choice
      </p>
    </section>
  </div>
</template>
