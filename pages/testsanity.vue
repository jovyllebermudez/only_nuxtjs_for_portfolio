<template>
  <div></div>
</template>

<script setup lang="ts">
const query = groq`{ "posts": *[_type == "article"] }`
const sanity = useSanity()
// By default it returns a `Promise<unknown>`,
// but you can customise the type of the return.
const { data } = await useAsyncData('posts', () => sanity.fetch<{ posts: any[] }>(query))
console.log("data")
console.log(data)
</script>