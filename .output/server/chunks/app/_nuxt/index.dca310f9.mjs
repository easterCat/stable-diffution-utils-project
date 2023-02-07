import n from './client-only.f5bddb5b.mjs';
import { defineComponent, shallowRef, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import U from './imageAnalysis.99eac8b7.mjs';
import { a as a$1 } from './utils.da672ed3.mjs';
import { d as di } from '../server.mjs';
import './Icon.221105b5.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ofetch';
import 'ohash';
import 'h3';
import 'hookable';
import 'unctx';
import 'ufo';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import 'store';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import './AreaTitle.512d3722.mjs';
import './index.7c6a213b.mjs';
import 'vue-uuid';
import 'element-plus';
import './shop.269c075a.mjs';
import 'element-plus/lib';
import 'vue3-clipboard';
import './upload-filled.195f95e8.mjs';

const d = defineComponent({ __name: "index", __ssrInlineRender: true, setup(e2) {
  var p2;
  shallowRef(U);
  ref(0);
  const n2 = ref(a$1);
  return ref(null == (p2 = n2.value[0]) ? void 0 : p2.childs), ref(false), ref(""), (e3, t2, i2, p3) => {
    const u2 = n;
    t2(`<div${ssrRenderAttrs(mergeProps({ class: "utils-page page" }, p3))} data-v-0869a419>`), t2(ssrRenderComponent(u2, null, null, i2)), t2(ssrRenderComponent(u2, null, null, i2)), t2(ssrRenderComponent(u2, null, null, i2)), t2("</div>");
  };
} }), a = d.setup;
d.setup = (o2, e2) => {
  const t2 = useSSRContext();
  return (t2.modules || (t2.modules = /* @__PURE__ */ new Set())).add("pages/pc/utils/index.vue"), a ? a(o2, e2) : void 0;
};
const c = di(d, [["__scopeId", "data-v-0869a419"]]);

export { c as default };