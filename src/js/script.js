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

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

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
  previewBox,
  rule,
  webkitRule,
  mozRule
);

boxShadow.initialize();

// Events
horizontal.addEventListener('input', (e) => {
  const value = e.target.value;

  boxShadow.updateValue('horizontal', value);
})

vertical.addEventListener('input', (e) => {
  const value = e.target.value;

  boxShadow.updateValue('vertical', value);
})

blur.addEventListener('input', (e) => {
  const value = e.target.value;

  boxShadow.updateValue('blur', value);
})

spread.addEventListener('input', (e) => {
  const value = e.target.value;

  boxShadow.updateValue('spread', value);
})

