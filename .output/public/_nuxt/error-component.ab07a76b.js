import{_ as e}from"./pinia.17670579.js";import{A as s,G as t,N as r,Q as a,R as n,u as o}from"./element-plus.fe53e503.js";import"./lodash.cb875ed5.js";import"./dayjs.3bf4ac2a.js";const i={__name:"nuxt-error-page",props:{error:Object},setup(i){var l;const{error:p}=i;(p.stack||"").split("\n").splice(1).map((e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")}))).map((e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`)).join("\n");const u=Number(p.statusCode||500),c=404===u,m=null!=(l=p.statusMessage)?l:c?"Page Not Found":"Internal Server Error",d=p.message||p.toString(),_=s((()=>e((()=>import("./error-404.4aa6bdff.js")),["./error-404.4aa6bdff.js","./pinia.17670579.js","./element-plus.fe53e503.js","./lodash.cb875ed5.js","./dayjs.3bf4ac2a.js","./element-plus.bce9ecad.css","./entry.d71b1392.js","./store.e5acb8cd.js","./entry.86d9f949.css","./error-404.1474f64e.css"],import.meta.url).then((e=>e.default||e)))),f=s((()=>e((()=>import("./error-500.6c3bfb46.js")),["./error-500.6c3bfb46.js","./pinia.17670579.js","./element-plus.fe53e503.js","./lodash.cb875ed5.js","./dayjs.3bf4ac2a.js","./element-plus.bce9ecad.css","./entry.d71b1392.js","./store.e5acb8cd.js","./entry.86d9f949.css","./error-500.070dde72.css"],import.meta.url).then((e=>e.default||e)))),j=c?_:f;return(e,s)=>(t(),r(o(j),a(n({statusCode:o(u),statusMessage:o(m),description:o(d),stack:o(undefined)})),null,16))}};export{i as default};
