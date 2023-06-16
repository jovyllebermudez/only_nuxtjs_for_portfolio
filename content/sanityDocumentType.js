export default {
  async fetchDocument (sanityClient, params, context) {
    console.log("document")
    // const query = `*[_type == "post" && slug.current == $slug][0]`
    // const query = `*[_type == "post" && slug.current == $slug][0]{
    //   title,
    //   content,
    //   body,
    //   "image": image.asset->url
    // }`
    const document = null;
    // const document = await sanityClient.fetch(query, { slug: params.slug })
    console.log("document22")
    // console.log(document)
    return document
  }
}