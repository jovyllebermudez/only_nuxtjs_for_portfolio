<template>
  <div class="space-y-10 lg:space-y-32">
    <section class="md:h-[80vh] flex_center py-8 ">
      <div class="container mx-auto block sm:flex_center">
        <div class="px-10">
          <img
            class="rounded-2xl max-h-[500px] my_hover"
            src="/me_face.jpg"
            alt="programmer person"
          >
        </div>
        <div class="text-center px-10 py-10 space-y-4">
          <h1 class="text-4xl font-semibold uppercase my_hover">
            It's me, Jovylle
            <!-- {{response.data.attributes.Title}} -->
            <!-- <i class="bx bx-hot"></i>
            <i class="bx bxs-hot"></i>
            <i class="bx bxl-facebook-square"></i> -->
          </h1>
          <p class="text-m4 py-3">
            A Full-Stack Web Developer
          </p>
          <HelloSvg class="w-[200px] h-[100px] mx-auto" />
          <a
            class=""
            href="#"
          >
            <button class="hover:line-through my_hover hover:cursor-default rounded-lg border-2 border-m1 my-4 py-1 px-3 text-base">
              See my CV / Resume
              <i class='bx bxs-right-top-arrow-circle'></i>
            </button>
          </a>
        </div>
      </div>
    </section>
    <section
      class="md:min-h-[60vh] flex_center"
      id="about"
    >
      <div class="container text-center ">
        <h2 class="text-3xl sm:text-5xl text-center font-semibold my-8 my_hover">
          About me
        </h2>
        <div>
          <Coding class="h-[200px] mx-auto" />
        </div>
        <p class="my_hover">
          I, Jovylle, can help you to build or maintain your system on either Front End or Back End. Through the years of working in this actively changing field, I have experienced a good quantity of challenges that equips me with the skills to be one of your best assets.
        </p>
      </div>
    </section>
    <section id="projects">
      <div class="container text-center">
        <h2 class="text-3xl sm:text-5xl text-center font-semibold my-8 my_hover">
          Projects
        </h2>
        <div>
          <PointingTo class="h-[200px] mx-auto" />
        </div>
        <p class="text-center text-lg my-6 my_hover">
          Works, Challenges,
          Click here to see complete list
        </p>
        <div class="my-4 my_hover">
          <a href="https://alimyon.dev/">
            <button class="text-primary-light px-4 py-2 rounded-lg bg-m4">
              See Projects
            </button>
          </a>
        </div>
        <!-- <p>Search projects by title or by text from description</p> -->
        <!-- <div class="flex flex-wrap justify-center">
          <ProjectCard class="my_hover" />
          <ProjectCard class="my_hover" />
          <ProjectCard class="my_hover" />
        </div> -->
        <!-- <a href="https://alimyon.dev/">
          <button class="my-8 my_hover rounded-lg bg-m4 text-primary-light py-4 px-8">
            See All
          </button>
        </a> -->
      </div>
    </section>
    <section
      class="md:h-[60vh] flex_center"
      id="contact"
    >
      <div class="container my-10">
        <h2 class="text-3xl sm:text-5xl text-center text-primary-dark font-semibold my-8 my_hover">
          Contact Me / Socials
        </h2>
        <div class="flex justify-center space-x-6 my-8 items-center text-4xl text-m1">
          <a href="https://www.facebook.com/twero">
            <i class='my_hover bx bxl-facebook-circle'></i>
          </a>
          <a href="mailto:jovyllebermudez@gmail.com">
            <i class='my_hover bx bxl-gmail'></i>
          </a>
          <a href="https://github.com/jovyllebermudez">
            <i class='my_hover bx bxl-github'></i>
          </a>
          <!-- <a href="">
            <i class='my_hover bx bxl-dev-to'></i>
          </a> -->
          <a href="https://www.linkedin.com/in/jovyllebermudez/">
            <i class='my_hover bx bxl-linkedin'></i>
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
<style>
</style>
