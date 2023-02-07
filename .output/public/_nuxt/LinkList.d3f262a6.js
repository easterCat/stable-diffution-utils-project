import e from"./client-only.36cb5329.js";import{u as l}from"./pinia.17670579.js";import{a,u as t}from"./index.131f7cc9.js";import{e as s,ad as n,a as o,U as i,f as d,aa as u,G as r,H as c,J as p,L as _,a2 as v,Z as m,$ as f,a0 as y,Y as b,u as h,_ as k,W as g,a1 as j,i as x,x as V,a4 as w,a5 as L,a6 as E}from"./element-plus.fe53e503.js";import{_ as C}from"./delete.c5b0c1fb.js";import{n as I,_ as M,a as A}from"./none.b7ec71a6.js";import"./AppHeader.vue_vue_type_style_index_0_scoped_e57bc06e_lang.5cf572d0.js";import{_ as U}from"./entry.0f1f4d34.js";import"./lodash.cb875ed5.js";import"./dayjs.3bf4ac2a.js";import"./uuid.d56aad75.js";/* empty css                                                              *//* empty css                                                                  */import"./AppHeader.vue_vue_type_style_index_0_scoped_2a3485e7_lang.1dee27ff.js";import"./vue3-clipboard-es.62b9b053.js";import"./vuedraggable.03145536.js";import"./sortablejs.91a11583.js";/* empty css                                                                       *//* empty css                                                                  *//* empty css                                                                  */import"./Icon.b50eae24.js";import"./store.e5acb8cd.js";import"./LinkList.vue_vue_type_style_index_0_scoped_ca6c464e_lang.c2f4371d.js";/* empty css                                                                */const F=e=>(L("data-v-c005d689"),e=e(),E(),e),S={class:"link-con"},B={key:0,class:"link-left bg-base-100"},H={class:"link-right"},$=F((()=>m("div",{class:"right-linear"},null,-1))),D={class:"part-list"},R=["data-title","data-index"],T={class:""},G={class:"row"},J=["href"],W=["src"],Y={key:0,class:"hot-link"},Z={class:"opeartion"},q={key:0,class:"icon"},z={key:1,class:"icon"},K=F((()=>m("div",{style:{float:"right"}},"(hot,prompt,online,other)",-1))),N={class:"dialog-footer"},O=U(s({__name:"LinkList",props:{filter:String,showLeftMenu:Boolean},emits:["editEvent","deleteEvent"],async setup(s){let L,E;l().vueApp.provide(n,{prefix:Math.floor(1e3*Math.random()),current:0});const U=a(),F=o(!1),{LinkApi:O}=t(),{links:P}=([L,E]=i((()=>O.getLinks())),L=await L,E(),L),Q=o([{name:"",href:""}]),X=o([]),ee=o(0);Q.value=P,X.value=[...new Set(P.map((e=>e.link_type)))];const le=o(!1),ae=o(!1),te=o(""),se=o(),ne=o(""),oe=o(""),ie=o(""),de=o(!1),ue=o(""),re=o(null),ce=async()=>{const{links:e}=await O.getLinks();Q.value=e},pe=()=>{ae.value=!0,te.value="add"},_e=()=>{ae.value=!1,te.value="",V((()=>{var e;null==(e=se.value)||e.resetFields()}))},ve=()=>{"add"===te.value&&me(),"edit"===te.value&&fe()},me=async()=>{if(200===(await O.addLink({name:ne.value,href:oe.value,type:ie.value,hot:de.value,icon:ue.value})).code)return _e(),V((()=>{ce()})),w.ElMessage({showClose:!0,message:"新建成功",type:"success"})},fe=async()=>{if(200===(await O.updateLink({name:ne.value,href:oe.value,type:ie.value,hot:de.value,id:re.value,icon:ue.value})).code)return _e(),V((()=>{ce()})),w.ElMessage({showClose:!0,message:"更新成功",type:"success"})};return d((()=>{"1"==`${U.roleId}`&&(le.value=!0,F.value=!0)})),(l,a)=>{const t=e,n=M,o=w.ElIcon,i=A,d=C,L=w.ElInput,E=w.ElFormItem,U=w.ElSwitch,P=w.ElForm,me=w.ElButton,fe=w.ElDialog,ye=u("scroll-to"),be=u("animate-css");return r(),c("div",S,[p(t,null,{default:_((()=>[s.showLeftMenu?v((r(),c("div",B,[m("ul",null,[(r(!0),c(f,null,y(h(X),((e,l)=>v((r(),c("li",{key:l,class:b({active:h(ee)===l})},[k(g(e),1)],2)),[[ye,{target:`.part:nth-child(${l+1}) > h2`,container:".link-right",behavior:"smooth",cb:e=>(e=>{ee.value=e})(e||0===e?e:l)}]]))),128)),h(le)?(r(),c("button",{key:0,class:"btn-primary btn-block btn",onClick:pe}," 新增链接 ")):j("",!0)])])),[[be,{direction:"modifySlideInLeft"}]]):j("",!0)])),_:1}),p(t,null,{default:_((()=>[v((r(),c("div",H,[$,m("div",D,[(r(!0),c(f,null,y(h(X),((e,l)=>{return r(),c("div",{key:e,id:"media",class:"part","data-title":e,"data-index":l},[m("h2",T,[m("strong",null,g(e),1)]),m("div",G,[(r(!0),c(f,null,y((a=e,a?[...Q.value.filter((e=>e.link_type===a))]:[]),((e,l)=>{var a;return r(),c("div",{key:l,class:"item bg-base-100"},[m("a",{href:null==e?void 0:e.href,target:"_blank"},[m("h3",null,[m("img",{src:null!=(a=null==e?void 0:e.icon)?a:h(I)},null,8,W),m("span",null,g(e.name),1),(null==e?void 0:e.hot)?(r(),c("i",Y,[p(o,{color:"red"},{default:_((()=>[p(n)])),_:1})])):j("",!0)]),m("p",null,g((null==e?void 0:e.desc)?null==e?void 0:e.desc:"暂无描述"),1)],8,J),m("div",Z,[h(F)?(r(),c("span",q,[p(i,{onClick:l=>{return a=e,ne.value=a.name,oe.value=a.href,ie.value=a.link||a.link_type,de.value=a.hot,ue.value=a.icon,re.value=a.id,ae.value=!0,void(te.value="edit");var a}},null,8,["onClick"])])):j("",!0),h(F)?(r(),c("span",z,[p(d,{onClick:l=>(async e=>{if(200===(await O.deleteLink({id:e})).code)return V((()=>{ce()})),w.ElMessage({showClose:!0,message:"删除成功",type:"success"})})(null==e?void 0:e.id)},null,8,["onClick"])])):j("",!0)])])})),128))])],8,R);var a})),128))])])),[[be,{direction:"modifySlideInRight"}]])])),_:1}),p(fe,{modelValue:h(ae),"onUpdate:modelValue":a[5]||(a[5]=e=>x(ae)?ae.value=e:null),title:"add"===h(te)?"新增":"编辑",width:"600px","destroy-on-close":"","before-close":_e},{footer:_((()=>[m("span",N,[p(me,{onClick:_e},{default:_((()=>[k("取消")])),_:1}),p(me,{type:"primary",onClick:ve},{default:_((()=>[k("确定")])),_:1})])])),default:_((()=>[m("div",null,[p(P,{ref_key:"ruleFormRef",ref:se,"label-width":"110px"},{default:_((()=>[p(E,{label:"链接名称"},{default:_((()=>[p(L,{modelValue:h(ne),"onUpdate:modelValue":a[0]||(a[0]=e=>x(ne)?ne.value=e:null)},null,8,["modelValue"])])),_:1}),p(E,{label:"链接"},{default:_((()=>[p(L,{modelValue:h(oe),"onUpdate:modelValue":a[1]||(a[1]=e=>x(oe)?oe.value=e:null)},null,8,["modelValue"])])),_:1}),p(E,{label:"Icon"},{default:_((()=>[p(L,{modelValue:h(ue),"onUpdate:modelValue":a[2]||(a[2]=e=>x(ue)?ue.value=e:null)},null,8,["modelValue"])])),_:1}),p(E,{label:"类别"},{default:_((()=>[p(L,{modelValue:h(ie),"onUpdate:modelValue":a[3]||(a[3]=e=>x(ie)?ie.value=e:null)},null,8,["modelValue"])])),_:1}),K,p(E,{label:"热门"},{default:_((()=>[p(U,{modelValue:h(de),"onUpdate:modelValue":a[4]||(a[4]=e=>x(de)?de.value=e:null)},null,8,["modelValue"])])),_:1})])),_:1},512)])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-c005d689"]]);export{O as default};