import { createElementVNode, openBlock, createElementBlock } from 'vue';

const n = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, o = [createElementVNode("path", { fill: "currentColor", d: "M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z" }, null, -1)];
const l = { name: "ep-check", render: function(t2, l2) {
  return openBlock(), createElementBlock("svg", n, o);
} };

export { l };
