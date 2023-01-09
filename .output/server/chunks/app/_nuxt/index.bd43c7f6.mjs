import a from './AppFooter.1678a3f1.mjs';
import { A, c } from './index.7c6a213b.mjs';
import { M, d as di } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
import 'vue-uuid';
import 'element-plus';

const u = defineComponent({ __name: "index", __ssrInlineRender: true, setup(e2) {
  A(), M(), c();
  const o2 = ref("login"), c2 = ref("admin"), u2 = ref("123456"), m2 = ref("admin@qq.com"), b2 = ref("\u8D85\u7EA7\u7BA1\u7406\u5458");
  return (t2, d2, l2, e3) => {
    const s2 = a;
    d2(`<div${ssrRenderAttrs(mergeProps({ class: "login-page page bg-base-100" }, e3))} data-v-a9d88124><div class="content" data-v-a9d88124><div class="outer-con" data-v-a9d88124><div class="inner-con" data-v-a9d88124>`), "login" === unref(o2) ? d2(`<div class="login-con" data-v-a9d88124><div class="w-full form-control" data-v-a9d88124><div class="item-1" data-v-a9d88124><label class="label" data-v-a9d88124><span class="label-text" data-v-a9d88124>\u7528\u6237\u540D</span></label><input${ssrRenderAttr("value", unref(c2))} type="text" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" class="w-full input input-bordered" data-v-a9d88124></div><div class="item-2" data-v-a9d88124><label class="label" data-v-a9d88124><span class="label-text" data-v-a9d88124>\u5BC6\u7801</span></label><input${ssrRenderAttr("value", unref(u2))} type="text" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" class="w-full input input-bordered" data-v-a9d88124></div></div><div class="item-5" data-v-a9d88124><button class="btn btn-accent btn-block" data-v-a9d88124>\u767B\u5F55</button></div><a class="link link-accent" data-v-a9d88124> \u6CA1\u6709\u8D26\u53F7,\u53BB\u6CE8\u518C </a></div>`) : d2("<!---->"), "register" === unref(o2) ? d2(`<div class="register-con" data-v-a9d88124><div class="w-full form-control" data-v-a9d88124><div class="item-1" data-v-a9d88124><label class="label" data-v-a9d88124><span class="label-text" data-v-a9d88124>\u7528\u6237\u540D (\u5FC5\u586B)</span></label><input${ssrRenderAttr("value", unref(c2))} type="text" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" class="w-full input input-bordered" data-v-a9d88124></div><div class="item-2" data-v-a9d88124><label class="label" data-v-a9d88124><span class="label-text" data-v-a9d88124>\u5BC6\u7801 (\u5FC5\u586B)</span></label><input${ssrRenderAttr("value", unref(u2))} type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" class="w-full input input-bordered" data-v-a9d88124></div><div class="item-3" data-v-a9d88124><label class="label" data-v-a9d88124><span class="label-text" data-v-a9d88124>\u6635\u79F0</span></label><input${ssrRenderAttr("value", unref(b2))} type="text" placeholder="\u8BF7\u8F93\u5165\u6635\u79F0,\u975E\u5FC5\u586B" class="w-full input input-bordered" data-v-a9d88124></div><div class="item-4" data-v-a9d88124><label class="label" data-v-a9d88124><span class="label-text" data-v-a9d88124>\u90AE\u7BB1</span></label><input${ssrRenderAttr("value", unref(m2))} type="text" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1,\u975E\u5FC5\u586B" class="w-full input input-bordered" data-v-a9d88124></div></div><div class="item-5" data-v-a9d88124><button class="btn btn-accent btn-block" data-v-a9d88124>\u6CE8\u518C</button></div><a class="link link-accent" data-v-a9d88124> \u5DF2\u6709\u8D26\u53F7,\u53BB\u767B\u5F55 </a></div>`) : d2("<!---->"), d2("</div></div></div>"), d2(ssrRenderComponent(s2, null, null, l2)), d2("</div>");
  };
} }), m = u.setup;
u.setup = (a2, t2) => {
  const d2 = useSSRContext();
  return (d2.modules || (d2.modules = /* @__PURE__ */ new Set())).add("pages/pc/login/index.vue"), m ? m(a2, t2) : void 0;
};
const b = di(u, [["__scopeId", "data-v-a9d88124"]]);

export { b as default };
