<template>
  <div>
    <section class="md:h-[80vh] flex_center py-8">
      <div class="container mx-auto block sm:flex_center">
        <div class="px-10">
          <img
            class="rounded-2xl max-h-[500px]"
            src="/me_face.jpg"
            alt="programmer person"
          >
        </div>
        <div class="text-center px-10 py-10">
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
          <a href="https://docs.google.com/document/d/1gQ7Un-xRGeJH87S0NIZSp0b_RMlVLGAGrLkT9FOwKhk/edit?usp=sharing">
            <button class="rounded-lg border-2 border-m1 my-4 py-1 px-3 text-base">
              See my CV / Resume
              <i class='bx bxs-right-top-arrow-circle'></i>
            </button>
          </a>
        </div>
      </div>
    </section>
    <section
      class="md:h-[60vh] flex_center"
      id="about"
    >
      <div class="container text-center ">
        <h2 class="text-3xl sm:text-5xl text-center font-semibold my-8">
          About me
        </h2>
        <p class="">
          I am Jovylle, can help you in building or maintaining your website on either Front End or Back End.
          Through the years of working in this amazing field, I have faced enough challenges to learn the technical solutions to help your team.
        </p>
      </div>
    </section>
    <section id="projects">
      <div class="container text-center">
        <h2 class="text-3xl sm:text-5xl text-center font-semibold my-8">
          Projects
        </h2>
        <p class="text-center text-lg my-8">
          Works, Challenges,
          Click here to see complete list
          <a href="https://jojoblog.netlify.app">
            <button class="text-primary-light px-4 py-2 rounded-lg bg-m4">
              see all
            </button>
          </a>
        </p>
        <!-- <p>Search projects by title or by text from description</p> -->
        <div class="flex flex-wrap justify-center">
          <!-- container -->
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <a href="https://jojoblog.netlify.app">
          <button class="my-8 rounded-lg bg-m4 text-primary-light py-4 px-8">
            See All
          </button>
        </a>
      </div>
    </section>
    <section
      class="md:h-[60vh] flex_center"
      id="contact"
    >
      <div class="container my-10">
        <h2 class="text-3xl sm:text-5xl text-center text-primary-dark font-semibold my-8">
          Contact Me
        </h2>
        <div class="flex justify-center space-x-6 my-8 items-center text-4xl text-m1">
          <a href="https://www.facebook.com/twero">
            <i class='bx bxl-facebook-circle'></i>
          </a>
          <a href="https://github.com/jovyllebermudez">
            <i class='bx bxl-github'></i>
          </a>
          <!-- <a href="">
            <i class='bx bxl-dev-to'></i>
          </a> -->
          <a href="https://www.linkedin.com/in/jovyllebermudez/">
            <i class='bx bxl-linkedin'></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { data } = await $fetch(
  'https://jojostrapibackend.herokuapp.com/api/items'
);

console.log(data);
console.log('data');

// this one is gubot response
// const { data: mymystrapi } = await useFetch('https://jojostrapibackend.herokuapp.com/api/items',{pick:['data']})
// console.log(mymystrapi)
// console.log("mymystrapi")

let strapi = {};
data.forEach((item) => {
  strapi[item.attributes.key] = item.attributes.value;
});

const ressmystrapi = await $fetch('/api/mystrapi');
const ress = await $fetch('/api/hello');
console.log(ressmystrapi);
console.log(ress);
console.log('server apis');
</script>
<style>
</style>
