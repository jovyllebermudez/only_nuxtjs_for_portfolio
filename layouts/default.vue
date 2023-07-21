<template>
  <div class="bg-ternary-light text-lg">
    <section>
      <div class="sm:container sm:mx-auto">
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
              href="/#about"
            >
              About me
            </a>
            <a
              class="flex_center px-7 my_hover1 inline-flex "
              href="/projects"
            >
              Projects
            </a>
            <a
              class="flex_center px-7 my_hover1 inline-flex "
              href="/#contact"
            >
              Contact
            </a>
            <a
              class="flex_center px-7 my_hover1 inline-flex "
              href="/uses"
            >
              Uses
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
            Copyright © 2022 || jov ||
          </div>
          <div class="my_hover">
            This site is made up of messy Nuxtjs3 codes
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

