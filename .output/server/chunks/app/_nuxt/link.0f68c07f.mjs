import { createElementVNode, openBlock, createElementBlock } from 'vue';

const n = { viewBox: "0 0 1024 1024", width: "1.2em", height: "1.2em" }, r = [createElementVNode("path", { fill: "currentColor", d: "M715.648 625.152L670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896c-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248l90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656c87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496l-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496l45.248 45.248l-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896c62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496l45.248 45.248zm0-362.048l45.248 45.248L398.848 670.4L353.6 625.152L625.152 353.6z" }, null, -1)];
const t = { name: "ep-link", render: function(c2, t2) {
  return openBlock(), createElementBlock("svg", n, r);
} };

export { t };
