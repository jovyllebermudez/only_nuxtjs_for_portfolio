// export default req => `Hello world (${req.url.substr(1)}) (Generated at ${new Date().toGMTString()})`
// import * as url from "url";

export default async (req, res) => {

  type Item = {
    key: String,
    value: String
  }
  type StrapiCollection = { data: Array<{ attributes: Item }> }
  const { data }: StrapiCollection = await $fetch('http://localhost:1337/api/items');

  const myObj = data.find(obj => obj.attributes.key === 'name');
  console.log(myObj.attributes.value);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(myObj.attributes));
  res.end();
}