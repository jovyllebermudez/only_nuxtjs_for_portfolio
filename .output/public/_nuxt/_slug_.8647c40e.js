import d from"./sanity-image.b09ce51c.js";import{_ as u}from"./sanity-content.ed3e9502.js";import{i as _,r as p,a,f as t,t as l,j as n,c as g,h,o}from"./entry.aa7f3442.js";import{u as x}from"./composables.0b07844e.js";import"./index.9f919d55.js";const f={class:"container mx-auto"},y={key:0},b={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},v={class:"flex"},k={key:0,class:"flex items-center mr-10"},w=t("i",{class:"bx bxs-purchase-tag"},null,-1),A={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},B={key:1,class:"flex items-center"},I=t("i",{class:"bx bxs-time"},null,-1),S={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},T={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},V={class:"mb-10 sm:mb-0"},j={class:"block sm:flex gap-0 sm:gap-10 mt-14"},D={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},N={class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},G={__name:"[slug]",setup(C){const r=_().params.slug;console.log("slug",r);const i=`*[_type == "portfolioProject" && slug.current == $slug][0]{
  _id,
  title,
  subTitle,
  slug,
  mainImage,
  body,
  description,
  techTag,
  publishedAt
}`,e=p({});return(async()=>{try{const s=await x(i,{slug:r});console.log("response",s),e.value=s.data._rawValue}catch(s){console.error(s)}})(),(s,E)=>{const c=d,m=u;return o(),a("div",f,[(o(),a("div",y,[t("div",null,[t("p",b,l(e.value.title),1),t("div",v,[e.value.subTitle?(o(),a("div",k,[w,t("span",A,l(e.value.subTitle),1)])):n("",!0),e.value.publishedAt?(o(),a("div",B,[I,t("span",S,l(e.value.publishedAt.split("-")[0]),1)])):n("",!0)])]),t("div",T,[t("div",V,[e.value.mainImage?(o(),g(c,{key:0,"asset-id":e.value.mainImage.asset._ref,alt:"project image",class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",auto:"format"},null,8,["asset-id"])):n("",!0)])]),t("div",j,[t("div",D,[t("p",N,[h(m,{blocks:e.value.body},null,8,["blocks"])])])])]))])}}};export{G as default};
