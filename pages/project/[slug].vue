<script setup>
import { ref } from 'vue';

const route = useRoute();
const slug = route.params.slug;
console.log('slug', slug);
const query = `*[_type == "portfolioProject" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  body
}`;
const posts = ref({});
const fetchDataAsync = async () => {
  try {
    const response =  await useSanityQuery(query, { slug });
    console.log("response", response);
    posts.value =  response.data._rawValue;
  } catch (error) {
    console.error(error);
  }
};
fetchDataAsync();
// console.log("posts", posts);
</script>


<template>

  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="true">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="
            font-general-medium
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-14
            sm:mt-20
            mb-7
          "
        >
          {{posts.title}}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >
          {{posts.title}}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                font-general-medium
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
              >TAG</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
        >
          <img
            :src="'https://nuxtjs-tailwindcss-portfolio.netlify.app/images/web-project-2.jpg'"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p
              class="
                font-general-medium
                text-2xl text-secondary-dark
                dark:text-secondary-light
                mb-2
              "
            >
              CLIENT
            </p>
            <ul class="leading-loose">
              <li
                class="
                  font-general-regular
                  text-ternary-dark
                  dark:text-ternary-light
                "
              >
                <span>TITLE: </span>
                <a
                  href="#"
                  aria-label="Project website and phone"
                  >DETAILS</a
                >
              </li>
            </ul>
          </div>

          <!-- Single project objectives -->
          <div class="mb-7">
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              Objss Title
            </p>
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              Obs detaila
            </p>
          </div>

          <!-- Single project technologies -->
          <div class="mb-7">
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              tech title
            </p>
            <p
              class="
                font-general-regular
                text-primary-dark
                dark:text-ternary-light
              "
            >
              techsss
            </p>
          </div>

          <!-- Single project social sharing -->
          <div>
            <p
              class="
                font-general-medium
                text-2xl text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              Social Titlw
            </p>
            <div class="flex items-center gap-3 mt-5">
              <a
                target="__blank"
                aria-label="Share Project"
                class="
                  bg-ternary-light
                  dark:bg-ternary-dark
                  text-gray-400
                  hover:text-primary-dark
                  dark:hover:text-primary-light
                  p-2
                  rounded-lg
                  shadow-sm
                  duration-500
                "
                ><i
                  class="w-4 lg:w-5 h-4 lg:h-5"
                ></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="
              font-general-medium
              text-primary-dark
              dark:text-primary-light
              text-2xl
              font-bold
              mb-7
            "
          >
            details title
          </p>
          <p
           
            class="
              font-general-regular
              mb-5
              text-lg text-ternary-dark
              dark:text-ternary-light
            "
          >
           project details
          </p>
        </div>
      </div>

      <!-- Project related projects -->
      <!-- <ProjectRelatedProjects /> -->
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>