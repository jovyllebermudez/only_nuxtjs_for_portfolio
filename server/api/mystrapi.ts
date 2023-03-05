import { IncomingMessage, ServerResponse } from 'http';

export default async function (req: IncomingMessage, res: ServerResponse) {
  // const { data } : any = await $fetch('https://jojostrapibackend.herokuapp.com/api/items', { parseResponse: JSON.parse });

  let strapi = {}
  // data.forEach(item => {
  //   strapi[item.attributes.key] = item.attributes.value
  // });
  return {
    strapi
  }
}