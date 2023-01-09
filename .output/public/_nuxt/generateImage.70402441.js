import e from"./Icon.fa57f76f.js";import l from"./AreaTitle.dc73a93c.js";import{u as a}from"./index.131f7cc9.js";import{u as s}from"./pinia.17670579.js";import{u as t,a as n}from"./shop.d3010ead.js";import{_ as u}from"./document-copy.d0e58c3c.js";import{_ as o}from"./delete.c5b0c1fb.js";import{_ as r}from"./opportunity.67839f21.js";import{e as i,a as m,f as p,a4 as d,G as c,H as v,Z as g,_ as b,J as f,W as h,u as _,N as y,L as w,$ as x,a0 as k,a1 as j,i as V,I as C,a5 as M,a6 as S}from"./element-plus.fe53e503.js";import{d as U}from"./dayjs.3bf4ac2a.js";import{_ as $}from"./entry.d71b1392.js";import"./lodash.cb875ed5.js";import"./store.e5acb8cd.js";/* empty css                                                                  */import"./uuid.d56aad75.js";import"./vue3-clipboard-es.62b9b053.js";const z=e=>(M("data-v-e13a2c02"),e=e(),S(),e),E={class:"tranfer-con"},I={class:"button-con"},N=["value"],A=z((()=>g("div",{class:"flex justify-between w-full text-xs"},[g("span",null,"1张"),g("span",null,"2张"),g("span",null,"3张"),g("span",null,"4张"),g("span",null,"5张"),g("span",null,"6张"),g("span",null,"7张"),g("span",null,"8张"),g("span",null,"9张")],-1))),J={key:0,class:"g-image m-t-20"},O=["src"],R={class:"title-side"},P={key:1,class:"history-con"},Y={style:{"font-weight":"bold","margin-bottom":"4px"}},q={class:"history-button"},G=["onClick"],H=["onClick"],D=["onClick"],T={key:2,class:"tags-con"},Z=[z((()=>g("p",{class:"no-data"},"暂无记录",-1)))],L=$(i({__name:"generateImage",setup(i){const{NovalApi:M}=a(),{$store:S}=s(),{copy:$}=t(),{shop:z}=n(),L="prompt_history",W=m(""),B=m(""),F=m(""),K=m(1),Q=m([]),X=m(0),ee=m([]),le=m(!1),ae=m([{label:"图片大小 512*768",value:"512*768"},{label:"图片大小 768*512",value:"768*512"},{label:"图片大小 512*512",value:"512*512"},{label:"图片大小 768*768",value:"768*768"},{label:"图片大小 768*1024",value:"768*1024"},{label:"图片大小 1024*768",value:"1024*768"}]),se=m("512*768"),te=m([{label:"k_euler_ancestral",value:"k_euler_ancestral"},{label:"k_euler",value:"k_euler"},{label:"k_lms",value:"k_lms"},{label:"plms",value:"plms"},{label:"ddim",value:"ddim"}]),ne=m("k_euler_ancestral"),ue=m("lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry");p((()=>{be(),oe(),B.value=sessionStorage.getItem("post_url")||""}));const oe=()=>{W.value=z.value,W.value&&ge(W.value)},re=()=>{fe(),Q.value=[]},ie=()=>{W.value="",ee.value=[]},me=e=>{K.value=e.target.value||1},pe=e=>{e&&(F.value=e,B.value=e)},de=()=>{B.value&&B.value.includes("www.naifuai.site")?ce():ve()},ce=async()=>{if(le.value)return;le.value=!0;const e=se.value.split("*"),l=e[0],a=e[1];try{if(1===K.value){const e=Math.floor(Math.random()*Math.pow(2,32)),s=await M.rrythGenerate({n_samples:K.value,sampler:ne.value,postUrl:B.value,init_images:"",prompt:W.value,seed:e,negative_prompt:ue.value,cfg_scale:12,width:l,height:a,denoising_strength:.6,steps:28});le.value=!1;const t=s.data.images;ee.value=null==t?void 0:t.map((e=>`data:image/png;base64,${e}`))}else{const e=await Promise.all(Array.from({length:K.value}).map((e=>{const s=Math.floor(Math.random()*Math.pow(2,32));return M.rrythGenerate({n_samples:K.value,sampler:ne.value,postUrl:B.value,init_images:"",prompt:W.value,seed:s,negative_prompt:ue.value,cfg_scale:12,width:l,height:a,denoising_strength:.6,steps:28})})));le.value=!1;const s=e.map((e=>e.data.images[0]));ee.value=null==s?void 0:s.map((e=>`data:image/png;base64,${e}`))}ge(W.value),sessionStorage.setItem("post_url",B.value)}catch(s){le.value=!1}},ve=async()=>{if(le.value)return;le.value=!0;const e=se.value.split("*"),l=e[0],a=e[1],s=Math.floor(Math.random()*Math.pow(2,32));B.value.includes("/generate-stream")||(B.value=`${B.value}/generate-stream`);try{const e=await M.generate({height:a,n_samples:K.value,prompt:W.value,sampler:ne.value,scale:12,seed:s,steps:28,uc:ue.value,ucPreset:0,width:l,postUrl:B.value});le.value=!1;const t=new RegExp("(?<=data:)[A-Za-z0-9\\/+=]+","g"),n=`${e}`.match(t);ee.value=null==n?void 0:n.map((e=>`data:image/png;base64,${e}`)),ge(W.value),sessionStorage.setItem("post_url",B.value)}catch(t){le.value=!1}},ge=e=>{var l;let a=[];if(!e)return d.ElMessage({showClose:!0,message:"请输入prompt",type:"warning"});S.get(L)&&(a=null!=(l=JSON.parse(S.get(L)))?l:[]);if(!a.find((l=>l.prompt===e))){if(a&&a.length&&a.length>100)return d.ElMessage({showClose:!0,message:"数据超过100条",type:"warning"});a.includes(e)||a.unshift({prompt:e,time:U().format("YYYY年MM月DD日 HH时mm分ss秒")}),Q.value=[...a],X.value=Q.value.length,S.set(L,JSON.stringify(Q.value))}},be=()=>{S.get(L)&&(Q.value=JSON.parse(S.get(L)),X.value=Q.value.length)},fe=()=>{S.set(L,"")};return(a,s)=>{var t;const n=e,i=d.ElOption,m=d.ElSelect,p=d.ElCol,M=d.ElInput,U=d.ElRow,z=l,ce=r,ve=o,ge=u;return c(),v("div",E,[g("div",I,[g("button",{class:"btn btn-secondary btn-sm m-r-10",onClick:ie},[b(" 清空 "),f(n,{class:"m-l-6",name:"ant-design:delete-filled"})]),g("button",{class:"btn btn-sm btn-accent m-r-10",onClick:oe},[b(" 购物车导入 "),f(n,{class:"m-l-6",name:"clarity:shopping-cart-solid-badged"})]),g("button",{class:"btn btn-primary btn-sm m-r-10",onClick:de},[b(h(_(le)?"图片生成中":"生成")+" ",1),_(le)?(c(),y(n,{key:0,class:"m-l-6",name:"line-md:loading-twotone-loop"})):(c(),y(n,{key:1,class:"m-l-6",name:"entypo:brush"}))])]),f(U,{gutter:20},{default:w((()=>[f(p,{xs:24,sm:24,md:12,lg:8,xl:8},{default:w((()=>[f(m,{modelValue:_(se),"onUpdate:modelValue":s[0]||(s[0]=e=>V(se)?se.value=e:null),placeholder:"图片大小",size:"large",class:"w-full"},{default:w((()=>[(c(!0),v(x,null,k(_(ae),(e=>(c(),y(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(p,{xs:24,sm:24,md:12,lg:8,xl:8},{default:w((()=>[f(m,{modelValue:_(ne),"onUpdate:modelValue":s[1]||(s[1]=e=>V(ne)?ne.value=e:null),placeholder:"采样器",size:"large",class:"w-full"},{default:w((()=>[(c(!0),v(x,null,k(_(te),(e=>(c(),y(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(p,{xs:24,sm:24,md:24,lg:24,xl:24},{default:w((()=>[f(M,{modelValue:_(B),"onUpdate:modelValue":s[3]||(s[3]=e=>V(B)?B.value=e:null),placeholder:"请输入url,例如: https://cube-joan-released-philips.trycloudflare.com/generate-stream",clearable:"",size:"large"},{prepend:w((()=>[f(m,{modelValue:_(F),"onUpdate:modelValue":s[2]||(s[2]=e=>V(F)?F.value=e:null),placeholder:"选择接口",style:{width:"115px"},size:"large",onChange:pe},{default:w((()=>[f(i,{label:"Colab",value:"https://cube-joan-released-philips.trycloudflare.com/generate-stream"}),f(i,{label:"freeApi",value:"https://www.naifuai.site/api/draw/ai"})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),f(p,{xs:24,sm:24,md:12,lg:12,xl:12},{default:w((()=>[f(M,{modelValue:_(W),"onUpdate:modelValue":s[4]||(s[4]=e=>V(W)?W.value=e:null),type:"textarea",placeholder:"请输入正面Prompt",rows:8,clearable:"",autosize:{minRows:8,maxRows:8},"show-word-limit":"",maxlength:"3000"},null,8,["modelValue"])])),_:1}),f(p,{xs:24,sm:24,md:12,lg:12,xl:12},{default:w((()=>[f(M,{modelValue:_(ue),"onUpdate:modelValue":s[5]||(s[5]=e=>V(ue)?ue.value=e:null),type:"textarea",placeholder:"请输入负面Prompt",rows:8,clearable:"",autosize:{minRows:8,maxRows:8},"show-word-limit":"",maxlength:"3000"},null,8,["modelValue"])])),_:1}),f(p,{xs:24,sm:24,md:24,lg:24,xl:24},{default:w((()=>[g("input",{type:"range",min:"1",max:"9",value:_(K),class:"range range-xs",step:"1",onChange:me},null,40,N),A])),_:1})])),_:1}),_(ee)?(c(),v("div",J,[g("ul",null,[(c(!0),v(x,null,k(_(ee),((e,l)=>(c(),v("li",{key:l},[g("img",{src:e,alt:""},null,8,O)])))),128))])])):j("",!0),f(z,{title:"历史记录"},{titleSide:w((()=>[g("span",R,"总数:"+h(_(X))+"条",1)])),_:1}),_(Q)&&(null==(t=_(Q))?void 0:t.length)?(c(),v("div",P,[g("div",{class:"button-con"},[g("button",{class:"btn btn-accent btn-sm",onClick:re},"清空历史")]),(c(!0),v(x,null,k(_(Q),((e,l)=>(c(),v("div",{key:l,class:"history-item"},[g("p",Y,[0===l?(c(),y(ce,{key:0,style:{color:"#67c23a","font-size":"12px"}})):j("",!0),g("span",null,h(null==e?void 0:e.time),1)]),g("p",null,h(null==e?void 0:e.prompt),1),g("div",q,[g("button",{class:"btn btn-sm btn-secondary m-r-10",onClick:e=>(e=>{var l;const a=null!=(l=JSON.parse(S.get(L)))?l:[];a.splice(e,1),Q.value=[...a],X.value=Q.value.length,S.set(L,JSON.stringify(Q.value))})(l)},[b(" 删除 "),C(a.$slots,"icon",{},(()=>[f(ve,{class:"m-l-6"})]),!0)],8,G),g("button",{class:"btn btn-sm btn-accent m-r-10",onClick:l=>_($)(null==e?void 0:e.prompt)},[b(" 复制 "),C(a.$slots,"icon",{},(()=>[f(ge,{class:"m-l-6"})]),!0)],8,H),g("button",{class:"btn btn-sm btn-primary",onClick:l=>{return a=null==e?void 0:e.prompt,void(W.value=a);var a}},[b(" 选择 "),f(n,{class:"m-l-6",name:"icon-park-solid:full-selection"})],8,D)])])))),128))])):(c(),v("div",T,Z))])}}}),[["__scopeId","data-v-e13a2c02"]]);export{L as default};
