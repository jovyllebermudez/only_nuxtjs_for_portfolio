<template>
  <div>
    <!-- <h1>{{ data.title }}</h1> -->
    <div v-html="htmlcontentyes"></div>
  </div>
</template>
<script>
import { toHTML } from "@portabletext/to-html"
import htm from 'htm'
import vhtml from 'vhtml'

export default {
  data() {
    return {
      htmlcontentyes: ""
    }
  },
  mounted() {
    this.test()
  },
  methods: {
     async test (){
      const query = groq`*[_type == "portfolioProject" && slug.current == "test-slug"][0]{
            title,
            body
          }`
      const { data } = await useSanityQuery(query)
      const html = htm.bind(vhtml)
      let  htmlcontent = toHTML(data._rawValue.body, {
        components: {
          types: {
            image: ({ value }) => html`<img src="${value.imageUrl}" />`,
            callToAction: ({ value, isInline }) =>
              isInline
                ? html`<a href="${value.url}">${value.text}</a>`
                : html`<div class="callToAction">${value.text}</div>`,
          },
        },
      })
      console.log("htmlcontent")
      console.log(htmlcontent)
      this.htmlcontentyes = htmlcontent
    },
  },
}
</script>
