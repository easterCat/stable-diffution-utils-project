import a from"./AreaTitle.dc73a93c.js";import{h as e}from"./pinia.17670579.js";import{u as l}from"./index.131f7cc9.js";import{u as t,a as s}from"./shop.d3010ead.js";import{e as o,a as i,U as r,w as u,f as d,G as n,H as p,J as c,L as v,Z as m,a4 as b,$ as g,a0 as _,N as f,W as h,u as y,I as j,_ as w,a5 as k,a6 as z}from"./element-plus.fe53e503.js";import{_ as T}from"./document-copy.d0e58c3c.js";import{_ as C}from"./shopping-trolley.ded7af5a.js";import{d as E,_ as x}from"./entry.d71b1392.js";/* empty css                                                                  */import"./lodash.cb875ed5.js";import"./dayjs.3bf4ac2a.js";import"./store.e5acb8cd.js";import"./uuid.d56aad75.js";import"./vue3-clipboard-es.62b9b053.js";const S={class:"eh-con"},U=(a=>(k("data-v-88d54171"),a=a(),z(),a))((()=>m("span",{class:"eh-title-side-tip"},"(分类不好用,用搜索)",-1))),$={class:"flex justify-between m-b-10"},G={class:"m-r-12"},O={class:"demo-pagination-block"},A=x(o({__name:"gelbooru",props:{searchText:{type:String,default:""}},async setup(o){let k,z;const x=o,A=e().public.GELBOORU_TOKEN,{GelbooruApi:B}=l(),{copy:I}=t(),{addShop:L}=s(),N=i([]),V=i([]),W=i([]),F=i(1100),H=i(1),J=i(100),K=i(0),P=([k,z]=r((()=>B.getList())),k=await k,z(),k);N.value=P.data,u((()=>x.searchText),(a=>{D(a)})),u(F,(async a=>{var e;if(a){const l=await B.getTagsById({token:A,page:1,limit:100,category_id:a});V.value=l.data,K.value=null==(e=null==l?void 0:l.data)?void 0:e.length,q()}}));const R=a=>{J.value=a,H.value=1,q()},Z=a=>{H.value=a,q()},q=()=>{W.value=V.value.slice((H.value-1)*J.value,H.value*J.value)},D=E((async a=>{F.value=null;const e=await B.searchTags({token:"b8d9e7d1fa1dcc3e5116760c093be229",keyword:a,page:2,limit:100});V.value=e.data,100==e.data.length?K.value=e.data.length+1:K.value=e.data.length,q()}),1500);return d((()=>{q()})),(e,l)=>{const t=a,s=b.ElOption,o=b.ElSelect,i=C,r=b.ElButton,u=T,d=b.ElTableColumn,k=b.ElTable,z=b.ElPagination;return n(),p("div",S,[c(t,{title:"Gelbooru标签列表"},{titleSide:v((()=>[U])),_:1}),m("div",$,[c(o,{modelValue:F.value,"onUpdate:modelValue":l[0]||(l[0]=a=>F.value=a),placeholder:"类别",size:"large"},{default:v((()=>[(n(!0),p(g,null,_(N.value,(a=>(n(),f(s,{key:a.value,label:`${null==a?void 0:a.name}-${null==a?void 0:a.level}`,value:null==a?void 0:a.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),c(k,{class:"m-b-10",data:W.value,border:"",stripe:"",size:"large",style:{width:"100%"}},{default:v((()=>[c(d,{prop:"name",label:"原始标签",width:"320"},{default:v((a=>{var l;return[m("span",G,h((null==(l=a.row)?void 0:l.name)||""),1),c(r,{size:"small",circle:"",onClick:e=>{var l;return y(L)((null==(l=a.row)?void 0:l.name)||"")}},{default:v((()=>[j(e.$slots,"icon",{},(()=>[c(i)]),!0)])),_:2},1032,["onClick"]),c(r,{size:"small",circle:"",onClick:e=>{var l;return y(I)((null==(l=a.row)?void 0:l.name)||"")}},{default:v((()=>[j(e.$slots,"icon",{},(()=>[c(u)]),!0)])),_:2},1032,["onClick"])]})),_:3}),c(d,{prop:"t_name",label:"名称",width:"250"}),c(d,{prop:"t_name",label:"NSFW",width:"100"},{default:v((a=>[w(h(a.row.is_nsfw?"是":"否"),1)])),_:1}),c(d,{prop:"desc",label:"描述"}),c(d,{prop:"remarks",label:"详细"})])),_:3},8,["data"]),m("div",O,[c(z,{"current-page":H.value,"onUpdate:current-page":l[1]||(l[1]=a=>H.value=a),"page-size":J.value,"onUpdate:page-size":l[2]||(l[2]=a=>J.value=a),"page-sizes":[10,20,50,100],background:!0,layout:"total, sizes, prev, pager, next, jumper",total:K.value,onSizeChange:R,onCurrentChange:Z},null,8,["current-page","page-size","total"])])])}}}),[["__scopeId","data-v-88d54171"]]);export{A as default};
