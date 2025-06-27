import { BoxShadowGenerator } from "./boxShadowGenerator.js";
import { $, bindInput } from "./domUtils.js";

const refs = {
  horizontal: {
    input: $("#horizontal"),
    ref: $("#horizontal-value"),
    type: "horizontal",
  },
  vertical: {
    input: $("#vertical"),
    ref: $("#vertical-value"),
    type: "vertical",
  },
  blur: { input: $("#blur"), ref: $("#blur-value"), type: "blur" },
  spread: { input: $("#spread"), ref: $("#spread-value"), type: "spread" },
  color: { input: $("#color"), ref: $("#color-value"), type: "color" },
  opacity: { input: $("#opacity"), ref: $("#opacity-value"), type: "opacity" },
  inset: { input: $("#inset"), ref: null, type: "inset" },
};

const previewBox = $("#box");
const rules = [$("#rule span"), $("#webkit-rule span"), $("#moz-rule span")];
const rulesArea = $("#rules-area");
const copyInstructions = $("#copy-instructions");

const boxShadow = new BoxShadowGenerator(refs, previewBox, rules);
boxShadow.initialize();

bindInput(Object.values(refs), boxShadow);

rulesArea.addEventListener("click", () => {
  navigator.clipboard
    .writeText(rulesArea.innerText.replace(/^\s*\n/gm, ""))
    .then(() => {
      copyInstructions.innerText = "Regra copiada com sucesso!";
      setTimeout(() => {
        copyInstructions.innerText =
          "Clique no quadro acima para copiar as regras!";
      }, 3000);
    });
});
