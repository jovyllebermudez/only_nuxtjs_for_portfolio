<template>
  <div>
    <section class="md:h-[100vh] flex_center">
      <div class="container mx-auto ">
        <div class="text-center py-10">
          <h1 class="text-4xl font-semibold uppercase">
            It's me, Jovylle
            <!-- {{response.data.attributes.Title}} -->
            <!-- <i class="bx bx-hot"></i>
            <i class="bx bxs-hot"></i>
            <i class="bx bxl-facebook-square"></i> -->
          </h1>
          <p class="text-m4 py-3">
            A Full-Stack Web Developer
          </p>
          <button class="rounded-lg border-2 border-m1 my-4 py-1 px-3 text-base">
            See my CV
            <i class='bx bxs-download'></i>
          </button>
        </div>
        <!-- <div>
          <img class="rounded-xl" src="/hero_img.jpeg" alt="programmer person">
        </div> -->
      </div>
    </section>
    <section>
      <div class="container text-center">
        <h2 class="text-3xl sm:text-5xl text-center font-semibold my-8">
          Projects
        </h2>
        <p class="text-center text-lg my-8">See beautiful projects, that shows in your dreams</p>
        <!-- <p>Search projects by title or by text from description</p> -->
        <div class="flex flex-wrap justify-center">
          <!-- container -->
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <button class="my-8 rounded-lg bg-m4 text-primary-light py-4 px-8">
          More Projects
        </button>
      </div>
    </section>
    <section>
      <div class="container my-10">
        <h2 class="text-3xl sm:text-5xl text-center text-primary-dark font-semibold my-8">
          Contact Me
        </h2>
        <div class="flex justify-center space-x-6 my-8 items-center text-4xl text-m1">
          <i class='bx bxl-facebook-circle'></i>
          <i class='bx bxl-github'></i>
          <i class='bx bxl-dev-to'></i>
          <i class='bx bxl-google'></i>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
//     SAMPLE GET THROUGH API
// const {data}: {data:any} = await useFetch("/api/hello")
// const { data } = await useAsyncData("asd", () =>
//   $fetch("http://localhost:1337/api/items")
// );
// console.log(data);
// console.log("data");

import type { Item } from "~/types";
import type { Strapi4Response } from "@nuxtjs/strapi";

const { find } = useStrapi4();

const res = await find<Strapi4Response<Item>>("items", {
  filters: {
    key: {
      $eq: "name",
    },
  },
});
const name = res.data[0].attributes.value;
console.log(name);
</script>
<script lang="ts">
export default {
  layout: "default",
};
</script> 
<style>
</style>