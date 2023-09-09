<template>
  <div class="bg-ternary-light text-lg overflow-hidden">
    <section class="max-w-[1280px] mx-auto">
      <div class="container sm:mx-auto">
        <div
          class="py-6 md:py-12 flex items-center justify-between flex-col sm:flex-row"
        >
          <div
            class="font-bold flex text-3xl my_hover px-2 justify-between w-full sm:w-auto"
          >
            <div class="opacity-0 sm:hidden">
              <button class="px-3 ">
                <i class="bx bx-menu my-1"></i>
              </button>
            </div>
            <NuxtLink class="text-center" to="/"> Home </NuxtLink>
            <div class="block sm:hidden text-right">
              <button @click="isMenuOpen = !isMenuOpen" class="px-3 ">
                <i v-if="isMenuOpen" class="bx bx-x my-1"></i>
                <i v-if="!isMenuOpen" class="bx bx-menu my-1"></i>
              </button>
            </div>
          </div>
          <div
            :class="['font-bold sm:flex my-5 sm:my-0 divide-y sm:justify-center divide-gray-200 sm:divide-y-0 w-[100vw] shadow-lg sm:shadow-none',isMenuOpen?'block':'hidden']"
          >
            <a
              class="flex_center md:px-7 px-4 my_hover1 inline-flex whitespace-nowrap py-3 sm:py-0"
              href="/#about"
            >
              About me
            </a>
            <NuxtLink
              class="flex_center md:px-7 px-4 my_hover1 inline-flex py-3 sm:py-0"
              to="/projects"
            >
              Projects
            </NuxtLink>
            <!-- <a
              class="flex_center md:px-7 px-4 my_hover1 inline-flex "
              href="/#contact"
            >
              Contact
            </a> -->
            <NuxtLink
              class="flex_center md:px-7 px-4 my_hover1 inline-flex py-3 sm:py-0"
              to="/uses"
            >
              Uses
            </NuxtLink>
          </div>
          <div class="hidden sm:block text-base text-primary-light">
            <!-- <a
              href="mailto:jovyllebermudez@gmail.com"
              class=""
            > -->
            <NuxtLink class="" to="/#contact">
              <button class=" scale-90 rounded-lg p-3 my_hover  bg-m4 px-4  ">
                Contacts
              </button>
              <!-- W
              <i class='bx bxs-dog'></i>
              W -->
            </NuxtLink>
            <!-- </a> -->
          </div>
        </div>
      </div>
    </section>
    <slot />
    <section class="max-w-[1280px] mx-auto">
      <div class="container mx-auto">
        <div
          class="pt-14 pb-10 flex-col sm:flex-row flex text-center justify-between"
        >
          <div class="my_hover">Copyright © 2022 | Jovylle</div>
          <div class="my_hover">Nuxtjs3 Vuejs3</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isMenuOpen: false
    }
  },
}
</script>
