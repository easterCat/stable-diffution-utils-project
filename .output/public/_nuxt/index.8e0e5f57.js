import e from"./AppHeader.e00bc2a3.js";import a from"./client-only.36cb5329.js";import t from"./AppBanner.dbbafb79.js";import l from"./ImageFlur.100d1bb9.js";import s from"./index.68421006.js";import o from"./TemplateDetail.219994eb.js";import{u as p,a as i}from"./index.131f7cc9.js";import{u as n}from"./pinia.17670579.js";import{l as d}from"./lodash.cb875ed5.js";import{e as r,a as u,f as _,G as m,H as c,J as v,L as f,aa as j,a2 as g,Z as b,u as y}from"./element-plus.fe53e503.js";import{_ as x}from"./entry.d71b1392.js";import"./AppHeader.vue_vue_type_style_index_0_scoped_2a3485e7_lang.5db35127.js";import"./ShopLayer.94388788.js";import"./AnimationButton.b724bb94.js";import"./dayjs.3bf4ac2a.js";import"./store.e5acb8cd.js";import"./AppAnimate.vue_vue_type_script_setup_true_lang.c1c03cdc.js";import"./shop.d3010ead.js";import"./vue3-clipboard-es.62b9b053.js";import"./plus.c0ce5731.js";import"./close-bold.ada4cf83.js";import"./vuedraggable.03145536.js";import"./sortablejs.91a11583.js";import"./uuid.d56aad75.js";import"./AppHeader.vue_vue_type_style_index_0_scoped_e57bc06e_lang.35e4e247.js";/* empty css                                                              *//* empty css                                                                  *//* empty css                                                                       *//* empty css                                                                  *//* empty css                                                                  */import"./Icon.fa57f76f.js";import"./LinkList.vue_vue_type_style_index_0_scoped_ca6c464e_lang.c2f4371d.js";/* empty css                                                                */import"./04.e372062b.js";import"./sYw7uX71Xe.38399cea.js";import"./copy-document.12769081.js";const h={class:"home-page page"},I={class:"content"},A={class:"banner-con"},T=x(r({__name:"index",setup(r){let x=null;const{TemplateApi:T}=p(),{$store:S}=n(),w=u(!1),F=u(null),B=u(!1),L=u(1),z=u(50),H=u(""),M=u(""),V=u([]),k=u("high"),C=e=>{k.value=e},D=e=>{F.value={...e},w.value=!0},G=d.debounce((async e=>{if(e===M.value)return;V.value=[],M.value=e,B.value=!0;const a=await T.getTemplates({pageIndex:L.value,pageSize:z.value,searchTag:M.value});B.value=!1,V.value=(null==a?void 0:a.templates)&&0!==(null==a?void 0:a.templates.length)?null==a?void 0:a.templates:[]}),1200),U=async e=>{const a=await T.likeTemplateById({templateId:e,userId:null==x?void 0:x.userId});200===a.code&&x.addFavoriteById(a.data)},X=async e=>{if(B.value)return;B.value=!0;const a=await T.getTemplates({pageIndex:e.pageIndex,pageSize:e.pageSize,searchTag:M.value});B.value=!1;const t=(null==a?void 0:a.templates)?null==a?void 0:a.templates:[];V.value=V.value.concat([...t])};return _((()=>{x=i(),H.value=S.get("ip"),(async()=>{T.setIp();const e=Math.ceil(100*Math.random()),a=await T.getTemplates({pageIndex:e||1,pageSize:50});V.value=(null==a?void 0:a.templates)?null==a?void 0:a.templates:[]})()})),(p,i)=>{const n=e,d=a,r=t,u=l,_=s,T=o,S=j("animate-css");return m(),c("div",h,[v(d,null,{default:f((()=>[v(n)])),_:1}),v(d,null,{default:f((()=>[g((m(),c("div",I,[b("div",A,[v(r,{placeholder:"请输入关键标签",onSearchChange:y(G)},null,8,["onSearchChange"])]),v(u,{onGetImageFlur:C}),v(_,{datas:V.value,flur:k.value,loading:B.value,"search-text":M.value,"favorite-ids":y(x).favoriteIds,onLoad:X,onPreview:D,onFavorite:U},null,8,["datas","flur","loading","search-text","favorite-ids"])])),[[S,{direction:"modifySlideInUp",delay:0}]])])),_:1}),v(T,{modelValue:w.value,"onUpdate:modelValue":i[0]||(i[0]=e=>w.value=e),"current-template":F.value},null,8,["modelValue","current-template"])])}}}),[["__scopeId","data-v-a54c3503"]]);export{T as default};
