import m from"./sanity-image.b09ce51c.js";import{_}from"./nuxt-link.fe76062c.js";import{u as g}from"./composables.0b07844e.js";import{r as u,a as r,f as t,F as x,k as p,o as e,c as n,w as h,t as l}from"./entry.aa7f3442.js";import"./index.9f919d55.js";const y={class:"container mx-auto"},b={class:"pt-10 sm:pt-14"},f=t("div",{class:"text-center"},[t("p",{class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"}," Projects ")],-1),k=t("div",{class:"mt-10 sm:mt-10"},[t("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"})],-1),v={key:0,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"},j={class:"rounded-t-xl overflow-hidden"},w={key:1,src:"https://raw.githubusercontent.com/jovyllebermudez/static/d37ee2dee7175a22031457d711dae74922faf3be/placeholder.png",alt:"project.title",class:"rounded-t-xl border-none"},A={class:"text-center px-4 py-6"},B={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},I={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"},S={key:1,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"},D=t("div",{class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"},[t("div",null,[t("img",{src:"https://nuxtjs-tailwindcss-portfolio.netlify.app/images/web-project-2.jpg",alt:"project.title",class:"rounded-t-xl border-none"})]),t("div",{class:"text-center px-4 py-6"},[t("p",{class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"}," Loading ")])],-1),L=[D],E={__name:"projects",setup(P){const d=`*[_type == "portfolioProject"] | order(publishedAt desc){
  _id,
  title,
  subTitle,
  slug,
  mainImage,
  body,
  publishedAt
} `,a=u([]);return(async()=>{try{const o=await g(d);a.value=o.data._rawValue}catch(o){console.error(o)}})(),(o,N)=>{const c=m,i=_;return e(),r("div",null,[t("div",y,[t("section",b,[f,k,a.value.length?(e(),r("div",v,[(e(!0),r(x,null,p(a.value,s=>(e(),n(i,{key:s._id,to:"/project/"+s.slug.current,class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:h(()=>[t("div",j,[s.mainImage?(e(),n(c,{key:0,"asset-id":s.mainImage.asset._ref,alt:"project.title",class:"border-none max-h-48 mx-auto",auto:"format"},null,8,["asset-id"])):(e(),r("img",w))]),t("div",A,[t("p",B,l(s.title),1),t("span",I,l(s.subTitle),1)])]),_:2},1032,["to"]))),128))])):(e(),r("div",S,L))])])])}}};export{E as default};
