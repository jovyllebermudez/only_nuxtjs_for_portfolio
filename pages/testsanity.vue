<template>
  <div>
    <h1>TESTINOG</h1>
    <!-- <h1>{{ data.title }}</h1> -->
  </div>
</template>

<script setup>
// const query = groq`*[_type == "portfolioProject" && slug.current == "test-slug"][0]{
//             title,
//             body
//           }`
//       const { data } = await useSanityQuery(query)
//       console.log("data")
//       console.log(data._rawValue.body)
</script>
<script>
// import { toHTML } from "@portabletext/to-html"
// import htm from 'htm'
// import vhtml from 'vhtml'

// export default {
//   computed: {
//      test() {
//       const query = groq`*[_type == "post" && slug.current == "test-post-hoho1"][0]{
//             title,
//             body
//           }`
//       const { data } =  useSanityQuery(query)
//       console.log("data")
//       console.log(data._rawValue.body)
//       const html = htm.bind(vhtml)
//       const htmlcontent =  toHTML(data._rawValue.body, {
//         components: {
//           types: {
//             image: ({ value }) => html`<img src="${value.imageUrl}" />`,
//             callToAction: ({ value, isInline }) =>
//               isInline
//                 ? html`<a href="${value.url}">${value.text}</a>`
//                 : html`<div class="callToAction">${value.text}</div>`,
//           },
//         },
//       })
//       console.log("htmlcontent")
//       console.log(htmlcontent)
//       return htmlcontent
//     },
//   },
// }
</script>
