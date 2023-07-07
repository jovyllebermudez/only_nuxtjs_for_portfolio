<template>
  <div>
    <!-- <h1>{{ data.title }}</h1> -->
    <!-- <div v-html="test"></div>
    {{ test }} -->
  </div>
</template>

<script setup>
const query = groq`*[_type == "post"][0]`
const { data, refresh } = useSanityQuery(query, { slug: 'test-post-hoho1' })
console.log("dataxxx")
console.log(data._rawValue.title)
</script>
