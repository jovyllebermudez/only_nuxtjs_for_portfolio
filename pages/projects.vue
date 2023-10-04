<script setup>
import { ref } from 'vue';
const query = `*[_type == "portfolioProject"] | order(publishedAt desc){
  _id,
  title,
  subTitle,
  slug,
  mainImage,
  body,
  publishedAt
} `;
const posts = ref([]);
const fetchDataAsync = async () => {
  try {
    const response =  await useSanityQuery(query);
    posts.value =  response.data._rawValue;
  } catch (error) {
    console.error(error);
  }
};
fetchDataAsync();
</script>
<template>
  <div>

    <div class="container mx-auto">
      <!-- Projects grid -->
      <section class="pt-10 sm:pt-14">
        <!-- Projects grid title -->
        <div class="text-center">
          <p
            class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
          >
            Projects
          </p>
        </div>

        <!-- Filter and search projects -->
        <div class="mt-10 sm:mt-10">
          <h3
            class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
          >
          </h3>
        </div>
        <!-- Projects grid -->
        <div v-if="posts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          <NuxtLink  
            v-for="post in posts" :key="post._id" 
            :to="'/project/'+post.slug.current"
            class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
            aria-label="Single Project"
          >
            <div class="rounded-t-xl overflow-hidden">
              <SanityImage
                v-if="post.mainImage"
                :asset-id="post.mainImage.asset._ref"
                alt="project.title"
                class=" border-none max-h-48 mx-auto"
                auto="format"
              />
              <img
                v-else
                src="https://raw.githubusercontent.com/jovyllebermudez/static/d37ee2dee7175a22031457d711dae74922faf3be/placeholder.png"
                alt="project.title"
                class="rounded-t-xl border-none"
              />
            </div>
            <div class="text-center px-4 py-6">
              <p
                class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
              >
                {{ post.title }}
              </p>
              <span
                class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
                >{{ post.subTitle }}</span
              >
            </div>
          </NuxtLink>
        </div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10" >
          <div
            class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          >
            <div>
              <img
                src="https://nuxtjs-tailwindcss-portfolio.netlify.app/images/web-project-2.jpg"
                alt="project.title"
                class="rounded-t-xl border-none"
              />
            </div>
            <div class="text-center px-4 py-6">
              <p
                class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
              >
                Loading
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
