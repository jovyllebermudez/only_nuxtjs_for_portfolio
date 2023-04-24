<template>
  <div>
    <h1>
      title: {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const query = groq`{ "posts": *[_type == "post"] }`
const sanity = useSanity()
// By default it returns a `Promise<unknown>`,
// but you can customise the type of the return.
const { data } = await useAsyncData('posts', () => sanity.fetch<{ posts: any[] }>(query))
console.log("data")
console.log(data.value?.posts[0].title)
const title = computed(() => data.value?.posts[0].title)
</script>