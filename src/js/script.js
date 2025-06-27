import { BoxShadowGenerator } from "./boxShadowGenerator.js";

// Elements Selection
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");

const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");

const inset = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const rulesArea = document.querySelector("#rules-area");
const copyInstructions = document.querySelector("#copy-instructions");

// Initialization
const boxShadow = new BoxShadowGenerator(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  color,
  colorRef,
  opacity,
  opacityRef,
  inset,
  previewBox,
  rule,
  webkitRule,
  mozRule
);

boxShadow.initialize();

// Events
horizontal.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("vertical", value);
});

blur.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("blur", value);
});

spread.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("spread", value);
});

color.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("color", value);
});

opacity.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("opacity", value);
});

inset.addEventListener("input", (e) => {
  const value = e.target.checked;

  boxShadow.updateValue("inset", value);
});

rulesArea.addEventListener('click', () => {
  const rules = rulesArea.innerText.replace(/^\s*\n/gm, '');

  navigator.clipboard.writeText(rules).then(() => {
    copyInstructions.innerText = "Regra copiada com sucesso!";

    setTimeout(() => {
      copyInstructions.innerText = 'Clique no quadro acima para copiar as regras!'
    }, 3000);
  })
})
