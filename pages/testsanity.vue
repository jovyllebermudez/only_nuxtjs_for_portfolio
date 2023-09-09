<script setup>
import { ref } from 'vue';

const query = `*[_type == "post"]{
  _id,
  title,
  body
}`;

const posts = ref([]);

const fetchDataAsync = async () => {
  try {
    const response =  await useSanityQuery(query);
    console.log("response", response);
    posts.value =  response.data._rawValue;
  } catch (error) {
    console.error(error);
  }
};

// console.log("test", test);
// if (response?.data._rawValue) {
// }

// if (response.error) {
//   console.error(response.error);
// }else{
// }
fetchDataAsync();
</script>

<template>
  <div>
    <h1>Posts:</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post._id" class="mb-10">
        <h2>{{ post.title }}</h2>
        <!-- <div>{{ post.body }}</div> -->
        <SanityContent :blocks="post.body" />
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>