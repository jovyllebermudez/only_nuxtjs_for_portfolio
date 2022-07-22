<template>
  <div class="bg-ternary-light text-lg">
    <section>
      <div class="container mx-auto">
        <div class="py-12 flex items-center justify-between">
          <div class="font-bold flex_center text-3xl my_hover px-2">
            <NuxtLink
              class=""
              to="/"
            >
              W
              <i class='bx bxs-dog'></i>
              W
            </NuxtLink>
          </div>
          <div class=" font-bold hidden md:flex">
            <a
              class="flex_center px-7 my_hover1 inline-flex "
              href="#about"
            >
              About me
            </a>
            <a
              class="flex_center px-7 my_hover1 inline-flex "
              href="#projects"
            >
              Projects
            </a>
            <a
              class="flex_center px-7 my_hover1 inline-flex "
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div class="block md:hidden">
            <button class="px-3 ">
              <i class='bx bx-menu'></i>
            </button>
          </div>
          <div class=" text-base text-primary-light">
            <a
              href="mailto:jovyllebermudez@gmail.com"
              class=""
            >
              <button class=" scale-90 rounded-lg p-3 my_hover  bg-m4 px-4  ">
                Email
                <i class='bx bxs-party'></i>
                Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <slot />
    <section>
      <div class="container mx-auto">
        <div class="pt-14 pb-10 flex-col sm:flex-row flex text-center justify-between">
          <div class="my_hover">
            <i class='bx bxs-copyright' ></i>
            2022
            Jovylle Bermudez Web Developer
          </div>
          <div class="my_hover">
            Developed by Me, Myself and I. Using NuxtJS3
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

