import n from './client-only.f5bddb5b.mjs';
import { _ as fe } from './AppHeader.1a53bb67.mjs';
import o from './AppAnimate.0c3d74c4.mjs';
import I from './LinkList.8bbc8400.mjs';
import a$1 from './AppFooter.42a97e6c.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { d as di } from '../server.mjs';
import './nuxt-img.540f6540.mjs';
import './AppAnimate.b0d9e6d2.mjs';
import './shop.269c075a.mjs';
import 'element-plus/lib';
import 'vue3-clipboard';
import 'element-plus';
import './plus.ff77b18c.mjs';
import 'vuedraggable';
import 'vue-uuid';
import './index.7c6a213b.mjs';
import './link.0f68c07f.mjs';
import 'lodash';
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

const a = {};
const f = a.setup;
a.setup = (o2, t2) => {
  const e2 = useSSRContext();
  return (e2.modules || (e2.modules = /* @__PURE__ */ new Set())).add("pages/mobile/links/index.vue"), f ? f(o2, t2) : void 0;
};
const c = di(a, [["ssrRender", function(n2, d2, a2, f2) {
  const c2 = n, b = fe, v = o, j = I, h = a$1;
  d2(`<div${ssrRenderAttrs(mergeProps({ class: "links-page page bg-base-100" }, f2))}>`), d2(ssrRenderComponent(c2, null, { default: withCtx((o2, t2, e2, r2) => {
    if (!t2)
      return [createVNode(b)];
    t2(ssrRenderComponent(b, null, null, e2, r2));
  }), _: 1 }, a2)), d2(ssrRenderComponent(v, null, { default: withCtx((o2, t2, e2, r2) => {
    if (!t2)
      return [createVNode("div", { class: "content" }, [createVNode(j, { "show-left-menu": true })])];
    t2(`<div class="content"${r2}>`), t2(ssrRenderComponent(j, { "show-left-menu": true }, null, e2, r2)), t2("</div>");
  }), _: 1 }, a2)), d2(ssrRenderComponent(h, null, null, a2)), d2("</div>");
}]]);

export { c as default };