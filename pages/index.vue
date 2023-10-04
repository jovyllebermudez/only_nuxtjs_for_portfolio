<template>
  <div class="space-y-10 lg:space-y-32 max-w-[1280px] mx-auto">
    <section class="md:h-[80vh] flex_center py-8 ">
      <div class="container mx-auto block md:flex_center">
        <div class="px-10 md:px-0">
          <LazySanityImage
            class="rounded-2xl max-h-[500px] my_hover"
            style="margin: auto 0"
            src="/me_face-500px-height-min.jpg"
            alt="programmer person"
          />
        </div>
        <div class="text-center px-10 py-10 space-y-4 flex items-center flex-col">
          <h1 class="text-4xl font-semibold uppercase my_hover">
            It's me, Jovylle
            <!-- {{response.data.attributes.Title}} -->
          </h1>
          <p class="text-m4 py-3">A Full-Stack Web Developer</p>
          <HelloSvg class="w-[200px] h-[100px] mx-auto" />
          <button
            id="resumebutton" class="hover:line-through my_hover hover:cursor-default rounded-lg border-2 border-m1 my-4 py-1 px-3 text-sm flex items-center space-x-1 mx-auto"
          >
            <span>See CV/Resume</span>
            <i class="bx bxs-right-top-arrow-circle"></i>
          </button>
        </div>
      </div>
    </section>
    <section class="md:h-[60vh] flex_center" id="contact">
      <div class="container my-10">
        <h2
          class="text-3xl sm:text-5xl text-center text-primary-dark font-semibold my-8 my_hover"
        >
          Contact Me / Socials
        </h2>
        <div
          class="flex justify-center space-x-6 my-8 items-center text-4xl text-m1"
        >
          <a aria-label="facebook link" href="https://www.facebook.com/twero">
            <i class="my_hover bx bxl-facebook-circle"></i>
          </a>
          <a aria-label="mail me" href="mailto:jovyllebermudez@gmail.com">
            <i class="my_hover bx bxl-gmail"></i>
          </a>
          <a aria-label="github link" href="https://github.com/jovyllebermudez">
            <i class="my_hover bx bxl-github"></i>
          </a>
          <!-- <a href="">
            <i class='my_hover bx bxl-dev-to'></i>
          </a> -->
          <a aria-label="linkedin link" href="https://www.linkedin.com/in/jovyllebermudez/">
            <i class="my_hover bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>

// const { data } = await $fetch(
//   'https://jojostrapibackend.herokuapp.com/api/items'
// );

// console.log(data);
// console.log('data');

// this one is gubot response
// const { data: mymystrapi } = await useFetch('https://jojostrapibackend.herokuapp.com/api/items',{pick:['data']})
// console.log(mymystrapi)
// console.log("mymystrapi")

let strapi = {};
// data.forEach((item) => {
//   strapi[item.attributes.key] = item.attributes.value;
// });

// const ressmystrapi = await $fetch('/api/mystrapi');
// const ress = await $fetch('/api/hello');
// console.log(ressmystrapi);
// console.log(ress);
// console.log('server apis');

useHead({
  title: 'Jovylle Bermudez',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Genuinely addicted to coding.' }]
});
</script>
<style></style>
