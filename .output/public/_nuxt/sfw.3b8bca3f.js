import{_ as a}from"./AppHeader.3e760a59.js";import e from"./AppBanner.0d6be24a.js";import{I as l,a_ as t,r as s,o as n,x as u,J as o,K as c,a2 as i,_ as r,Z as p,u as v,a0 as b,Y as d,aC as m,X as _,a4 as f,C as y,$ as g,b4 as j,aZ as k}from"./entry.4f221c1e.js";import{_ as C}from"./AppAnimate.vue_vue_type_script_setup_true_lang.09dc1f9c.js";import x from"./TemplateDetail.2db2faac.js";import{u as h}from"./index.c09eb981.js";import{I as A,s as w,t as I}from"./element-plus.20817160.js";import"./shop.b77c0394.js";import"./plus.18186837.js";import"./vuedraggable.389c0f04.js";import"./lodash.ea4d81e6.js";import"./sortablejs.8210fcbe.js";import"./FixMenu.vue_vue_type_style_index_0_scoped_5afae692_lang.192fbee9.js";/* empty css                                                                  */import"./copy-document.525e5e7f.js";const M={class:"template-page page"},T={class:"content"},V={class:"banner-con"},z={class:"control-blur-btns"},Z={key:0,class:"shadow-xl card card-compact bg-base-100"},B={class:"card-body"},D={class:"card-title"},F={class:"justify-end card-actions"},H=["onClick"],J={class:"demo-pagination-block"},K={key:0,class:"btn-group"},S=["onClick"],U={key:0,class:"btn"},X=k(l({__name:"sfw",setup(l){t().vueApp.provide(A,{prefix:Math.floor(1e3*Math.random()),current:0});const k=s(!0),X=s(!1),Y=s(1),$=s(36),q=s(0),E=s(0),G=s(!1),L=s([]),N=s(null),O=n((()=>Array.from({length:q.value},((a,e)=>e)).slice(Y.value>3?Y.value-3:Y.value,Y.value+3))),P=async()=>{if(X.value)return;X.value=!0;const{TemplateApi:a}=h(),e=await a.getTemplates({pageIndex:Y.value,pageSize:$.value});X.value=!1,L.value=null==e?void 0:e.templates,E.value=e.total,q.value=Math.ceil(E.value/$.value)};u((()=>{P()}));const Q=a=>{Y.value=a,P()},R=()=>{Y.value<=1||(Y.value=Y.value-1,P())},W=()=>{Y.value=1,P()},aa=()=>{Y.value=q.value,P()},ea=()=>{Y.value>=q.value||(Y.value=Y.value+1,P())};return(l,t)=>{const s=a,n=e,u=j,h=C,A=w,X=I,$=x;return o(),c("div",M,[i(s),r("div",T,[r("div",V,[i(n,{placeholder:"请输入关键标签"})]),r("div",z,[r("button",{class:p(["btn btn-sm m-r-10",[v(k)?"btn-accent":"btn-secondary"]]),onClick:t[0]||(t[0]=()=>k.value=!0)}," 模糊 ",2),r("button",{class:p(["btn btn-sm",[v(k)?"btn-secondary":"btn-accent"]]),onClick:t[1]||(t[1]=()=>k.value=!1)}," 原图 ",2)]),i(X,{class:"list-con",gutter:20},{default:b((()=>[(o(!0),c(d,null,m(v(L),((a,e)=>(o(),g(A,{key:e,xs:24,sm:12,md:6,lg:4,xl:4},{default:b((()=>[i(h,null,{default:b((()=>[a?(o(),c("div",Z,[r("figure",null,[i(u,{class:p(["image",{"image-blur":!!v(k)}]),src:null==a?void 0:a.minify_preview,loading:"lazy"},null,8,["src","class"])]),r("div",B,[r("h2",D,f(null==a?void 0:a.name),1),r("p",null,f(null==a?void 0:a.author),1),r("div",F,[r("button",{class:"btn btn-primary btn-sm",onClick:e=>(a=>{N.value={...a},G.value=!0})(a)}," 模板详情 ",8,H)])])])):_("",!0)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),r("div",J,[v(q)&&v(q)>0?(o(),c("div",K,[r("button",{class:"btn btn-outline",onClick:W},"首页"),r("button",{class:"btn btn-outline",onClick:R},"上一页"),(o(!0),c(d,null,m(v(O),((a,e)=>(o(),c("button",{key:e,class:p(["btn",{"btn-active":a===v(Y)}]),onClick:e=>Q(a)},f(a),11,S)))),128)),v(Y)<v(q)-3?(o(),c("button",U,"...")):_("",!0),r("button",{class:p(["btn",{"btn-active":v(q)===v(Y)}]),onClick:t[2]||(t[2]=a=>Q(v(q)))},f(v(q)),3),r("button",{class:"btn btn-outline",onClick:ea},"下一页"),r("button",{class:"btn btn-outline",onClick:aa},"尾页")])):_("",!0)])]),i($,{modelValue:v(G),"onUpdate:modelValue":t[3]||(t[3]=a=>y(G)?G.value=a:null),"current-template":v(N)},null,8,["modelValue","current-template"])])}}}),[["__scopeId","data-v-66f78599"]]);export{X as default};