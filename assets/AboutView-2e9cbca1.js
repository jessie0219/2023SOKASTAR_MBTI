import{_ as c,o as r,c as n,a,b as l,w as m,v as p,t as d,d as y}from"./index-0de18056.js";const _={data(){return{personalityType:"",familyName:"",imageURL:""}},methods:{checkFamily(){const t={INTJ:"分析",INTP:"分析",ENTJ:"分析",ENTP:"分析",INFJ:"外交",INFP:"外交",ENFJ:"外交",ENFP:"外交",ISTJ:"守護",ISFJ:"守護",ESTJ:"守護",ESFJ:"守護",ISTP:"探險",ISFP:"探險",ESTP:"探險",ESFP:"探險"},e=this.personalityType.trim().toLowerCase().toUpperCase();this.familyName=t[e]||"...",this.imageURL=this.getImageURL(e)},getImageURL(t){return`../src/assets/MBTI/${t.trim().toLowerCase().toUpperCase()}.png`}},computed:{showImage(){return this.personalityType.trim()!==""}}},u={class:"text-center"},T={class:"mt-2"},I={key:0,class:"mt-2"},g=["src"];function N(t,e,h,F,s,o){return r(),n("div",u,[a("div",null,[l("你的16型人格是："),m(a("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>s.personalityType=i),onInput:e[1]||(e[1]=(...i)=>o.checkFamily&&o.checkFamily(...i))},null,544),[[p,s.personalityType]])]),a("div",T,"恭喜你!!你是"+d(s.familyName)+"家族",1),o.showImage?(r(),n("div",I,[a("img",{src:s.imageURL,alt:"16型人格",class:"image"},null,8,g)])):y("",!0)])}const f=c(_,[["render",N],["__scopeId","data-v-e7ce9dcb"]]);export{f as default};