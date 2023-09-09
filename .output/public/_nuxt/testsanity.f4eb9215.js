import{_ as l}from"./sanity-content.ed3e9502.js";import{u as _}from"./composables.0b07844e.js";import{r as i,a as e,F as u,k as y,f as a,o,t as d,h as p}from"./entry.aa7f3442.js";import"./index.9f919d55.js";const m=a("h1",null,"Posts:",-1),h={key:0},f={key:1},S={__name:"testsanity",setup(k){const r=`*[_type == "post"]{
  _id,
  title,
  body
}`,s=i([]);return(async()=>{try{const t=await _(r);console.log("response",t),s.value=t.data._rawValue}catch(t){console.error(t)}})(),(t,g)=>{const c=l;return o(),e("div",null,[m,s.value.length?(o(),e("ul",h,[(o(!0),e(u,null,y(s.value,n=>(o(),e("li",{key:n._id,class:"mb-10"},[a("h2",null,d(n.title),1),p(c,{blocks:n.body},null,8,["blocks"])]))),128))])):(o(),e("div",f,"Loading..."))])}}};export{S as default};
