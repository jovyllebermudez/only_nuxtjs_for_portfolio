<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="text-center py-16">
          <h1 class="text-9xl">
            This is me
            <!-- {{response.data.attributes.Title}} -->
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto">
        <div class="text-center py-14">
          <div class="text-4xl my-6 font-bold">
            Hey there. I'm Jovylle Bermudez
          </div>
          <div class="text-xl my-8">
            Hey there. I'm Jovylle Bermudez
          </div>
          <div class="text-xl my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, omnis! Atque consequatur aliquid excepturi illo quia, possimus explicabo animi eos error nihil nisi accusantium repudiandae obcaecati magnam rerum? Quam, dicta.
          </div>
          <div class="text-xl my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, omnis! Atque consequatur aliquid excepturi illo quia, possimus explicabo animi eos error nihil nisi accusantium repudiandae obcaecati magnam rerum? Quam, dicta.
          </div>
          <div>
            <!-- {{name}} -->
          </div>
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

// import type { Item } from "~/types";
// import type { Strapi4Response } from "@nuxtjs/strapi";

// const { find } = useStrapi4();

// const res = await find<Strapi4Response<Item>>("items", {
//   filters: {
//     key: {
//       $eq: "name",
//     },
//   },
// });
// const name = res.data[0].attributes.value
// console.log(name);
// </script>
// <script lang="ts">
// export default {
//   layout: "default",
// };
</script> 
<style>
</style>