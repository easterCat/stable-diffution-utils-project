import { createElementVNode, openBlock, createElementBlock } from 'vue';

const t = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, n = [createElementVNode("path", { fill: "currentColor", d: "M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z" }, null, -1)];
const c = { name: "ep-upload-filled", render: function(r2, c2) {
  return openBlock(), createElementBlock("svg", t, n);
} };

export { c };
