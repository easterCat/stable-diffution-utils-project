import{I as e,a8 as l,b2 as t,r as a,x as o,B as n,J as i,K as s,a2 as c,_ as u,Y as m,aC as r,u as p,a0 as d,X as v,$ as _,Z as b,a4 as f,b4 as g,aZ as y}from"./entry.adfdc47f.js";import{_ as k,a as h}from"./AppHeader.677576ba.js";import E from"./AppBanner.aa03dbc6.js";import j from"./AreaTitle.9f629e8a.js";import x from"./TemplateDetail.fd351362.js";import{u as A,a as C}from"./shop.40f97fe8.js";import{u as N}from"./index.ccea3028.js";import{_ as I}from"./document-copy.e262fe2d.js";import{_ as T}from"./shopping-trolley.aef2a4d8.js";import{l as V,m as z}from"./element-plus.c3621afb.js";import{l as L}from"./lodash.ea4d81e6.js";import"./AppAnimate.vue_vue_type_script_setup_true_lang.62dd34bf.js";import"./plus.fc9ff199.js";import"./vuedraggable.d019885d.js";import"./sortablejs.8210fcbe.js";import"./FixMenu.vue_vue_type_style_index_0_scoped_5afae692_lang.0d334ce1.js";/* empty css                                                                  */import"./copy-document.ce16bf7c.js";const D={class:"chitu-tags-page page"},w={class:"content"},O={class:"type-list"},P={key:0,class:"tag-list"},R=["data-index"],S={key:0,class:"image-con"},H={class:"text-con"},U={key:0,class:"en"},Z={key:1,class:"en"},B={class:"button-con"},q=["onClick"],F=["onClick"],J={key:1,class:"tag-list"},K=["data-index"],M={key:0,class:"image-con"},X={class:"text-con"},Y={key:0,class:"en"},$={key:1,class:"en"},G={class:"button-con"},Q=["onClick"],W=["onClick"],ee={key:2,class:"tag-list"},le=["data-index"],te={key:0,class:"image-con"},ae={class:"text-con"},oe={key:0,class:"en"},ne={key:1,class:"en"},ie={class:"button-con"},se=["onClick"],ce=["onClick"],ue=y(e({__name:"chitu",setup(e){const{copy:y}=A(),{addShop:ue}=C(),{TemplateApi:me}=N(),re=l([{name:"参考图",file:t((()=>import("./NovelAI_cankaotu.339f5bb2.js")),[],import.meta.url)},{name:"人物",file:t((()=>import("./NovelAI_huageren.afd84e06.js")),[],import.meta.url)},{name:"物体",file:t((()=>import("./NovelAI_huagewuti.7cbf7439.js")),[],import.meta.url)},{name:"构图",file:t((()=>import("./NovelAI_goutu.80a9b3d6.js")),[],import.meta.url)},{name:"画风",file:t((()=>import("./NovelAI_huafeng.72a3e915.js")),[],import.meta.url)},{name:"正面词组",file:t((()=>import("./NovelAI_zhengmiantag.3f260789.js")),[],import.meta.url)},{name:"负面词组",file:t((()=>import("./NovelAI_fumiantag.2f48f896.js")),[],import.meta.url)}]),pe=a([]),de=a(0),ve=a(!0),_e=a(""),be=a({}),fe=a(!1),ge=a(1),ye=a(50),ke=a(window.document.body);let he=[],Ee=0;const je=async()=>{const e=await me.getTemplatesChitu({pageIndex:ge.value,pageSize:ye.value});pe.value=[...pe.value,...(null==e?void 0:e.templates)?e.templates:[]]},xe=e=>{de.value?(be.value={author:e.author,n_prompt:e.n_prompt,preview:e.file1,model:e.model,prompt:e.prompt,prompt_zh:e.prompt_zh,name:e.name,desc:e.desc},fe.value=!0):(be.value={author:e.author,n_prompt:e.detagEN,preview:e.file1,model:e.model,prompt:e.promptEN,prompt_zh:e.promptZH,name:e.title,desc:e.parameter},fe.value=!0)},Ae=e=>{_e.value=e},Ce=()=>{pe.value=pe.value.concat(he.slice(50*Ee,50*(Ee+1)))},Ne=L.exports.throttle((()=>{const e=ke.value.scrollTop;ke.value.scrollHeight-(e+(document.documentElement.clientHeight||document.body.clientHeight))<=100&&(console.log("触底"),de.value?(Ee++,Ce()):(ge.value++,je()))}),1500);return o((async()=>{je(),ke.value=document.querySelector(".chitu-tags-page"),ke.value.addEventListener("scroll",Ne)})),n((()=>{ke.value.removeEventListener("scroll",Ne)})),(e,l)=>{const t=k,a=E,o=j,n=h,A=V,C=g,N=z,L=T,me=I,_e=x;return i(),s("div",D,[c(t),u("div",w,[c(a,{placeholder:"搜索标签",onSearchChange:Ae}),c(o,{title:"标签类别"}),u("div",O,[(i(!0),s(m,null,r(p(re),((e,l)=>(i(),_(n,{key:l,index:l+"","button-style":1,"button-size":"larger",class:b([l===de.value?"btn-accent":"btn-secondary"]),"button-text":null==e?void 0:e.name,onSubmit:e=>(async e=>{Ee=0,ge.value=1,de.value?(de.value=e,pe.value=[],he=(await re[e].file).default,Ce()):je()})(l)},null,8,["index","class","button-text","onSubmit"])))),128))]),c(o,{title:"标签列表"},{titleSide:d((()=>[c(A,{modelValue:ve.value,"onUpdate:modelValue":l[0]||(l[0]=e=>ve.value=e),size:"large","inline-prompt":"","inactive-text":"隐藏Image","active-text":"开启Image",class:"title-side"},null,8,["modelValue"])])),_:1}),p(Ee)?(i(),s("div",P,[(i(!0),s(m,null,r(pe.value,((e,l)=>{var t;return i(),s("div",{class:"tag-item-img ll-media bg-base-100","data-index":l,key:l},[ve.value&&5!==de.value&&6!==de.value?(i(),s("div",S,[c(C,{src:null!=(t=null==e?void 0:e.fileUrl)?t:"",loading:"lazy",onClick:l=>xe(e)},null,8,["src","onClick"])])):v("",!0),u("div",H,[c(N,{class:"box-item",effect:"dark",content:null==e?void 0:e.promptEN,placement:"top"},{default:d((()=>[(null==e?void 0:e.title)?(i(),s("p",U,f((null==e?void 0:e.title.length)>24?(null==e?void 0:e.title.slice(0,24))+"...":null==e?void 0:e.title),1)):(i(),s("p",Z,f((null==e?void 0:e.promptEN.length)>24?(null==e?void 0:e.promptEN.slice(0,24))+"...":null==e?void 0:e.promptEN),1))])),_:2},1032,["content"])]),u("div",B,[u("button",{class:"btn btn-sm btn-circle btn-accent m-r-10",onClick:l=>p(ue)(null==e?void 0:e.promptEN)},[c(L)],8,q),u("button",{class:"btn btn-sm btn-circle btn-secondary",onClick:l=>p(y)(null==e?void 0:e.promptEN)},[c(me)],8,F)])],8,R)})),128))])):v("",!0),de.value?(i(),s("div",J,[(i(!0),s(m,null,r(pe.value,((e,l)=>(i(),s("div",{class:"tag-item-img ll-media bg-base-100","data-index":l,key:l},[ve.value&&5!==de.value&&6!==de.value?(i(),s("div",M,[(null==e?void 0:e.fileUrl)?(i(),_(C,{key:0,src:null==e?void 0:e.fileUrl,loading:"lazy",onClick:l=>xe(e)},null,8,["src","onClick"])):v("",!0)])):v("",!0),u("div",X,[c(N,{class:"box-item",effect:"dark",content:null==e?void 0:e.promptEN,placement:"top"},{default:d((()=>[(null==e?void 0:e.title)?(i(),s("p",Y,f((null==e?void 0:e.title.length)>24?(null==e?void 0:e.title.slice(0,24))+"...":null==e?void 0:e.title),1)):(i(),s("p",$,f((null==e?void 0:e.promptEN.length)>24?(null==e?void 0:e.promptEN.slice(0,24))+"...":null==e?void 0:e.promptEN),1))])),_:2},1032,["content"])]),u("div",G,[u("button",{class:"btn btn-sm btn-circle btn-accent m-r-10",onClick:l=>p(ue)(null==e?void 0:e.promptEN)},[c(L)],8,Q),u("button",{class:"btn btn-sm btn-circle btn-secondary",onClick:l=>p(y)(null==e?void 0:e.promptEN)},[c(me)],8,W)])],8,K)))),128))])):(i(),s("div",ee,[(i(!0),s(m,null,r(pe.value,((e,l)=>(i(),s("div",{class:"tag-item-img ll-media bg-base-100","data-index":l,key:l},[ve.value&&5!==de.value&&6!==de.value?(i(),s("div",te,[(null==e?void 0:e.file1)?(i(),_(C,{key:0,src:null==e?void 0:e.file1,onClick:l=>xe(e)},null,8,["src","onClick"])):v("",!0)])):v("",!0),u("div",ae,[c(N,{class:"box-item",effect:"dark",content:null==e?void 0:e.prompt,placement:"top"},{default:d((()=>[(null==e?void 0:e.title)?(i(),s("p",oe,f((null==e?void 0:e.title.length)>24?(null==e?void 0:e.title.slice(0,24))+"...":null==e?void 0:e.title),1)):(i(),s("p",ne,f((null==e?void 0:e.prompt.length)>24?(null==e?void 0:e.prompt.slice(0,24))+"...":null==e?void 0:e.prompt),1))])),_:2},1032,["content"])]),u("div",ie,[u("button",{class:"btn btn-sm btn-circle btn-accent m-r-10",onClick:l=>p(ue)(null==e?void 0:e.prompt)},[c(L)],8,se),u("button",{class:"btn btn-sm btn-circle btn-secondary",onClick:l=>p(y)(null==e?void 0:e.prompt)},[c(me)],8,ce)])],8,le)))),128))]))]),c(_e,{modelValue:fe.value,"onUpdate:modelValue":l[1]||(l[1]=e=>fe.value=e),"current-template":be.value},null,8,["modelValue","current-template"])])}}}),[["__scopeId","data-v-ff6932a9"]]);export{ue as default};