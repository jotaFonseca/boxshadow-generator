export const $ = (selector) => document.querySelector(selector);

export function bindInput(refs, boxShadow) {
  refs.forEach(({ input, type }) => {
    input.addEventListener("input", (e) => {
      const value = input.type === "checkbox" ? input.checked : input.value;
      boxShadow.updateValue(type, value);
    });
  });
}