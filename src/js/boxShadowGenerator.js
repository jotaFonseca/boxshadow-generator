export class BoxShadowGenerator {
  constructor(refs, previewBox, rules) {
    this.refs = refs;
    this.previewBox = previewBox;
    this.rules = rules;
    this.inset = refs.inset.input.checked;
  }

  initialize() {
    Object.values(this.refs).forEach(({ input, ref }) => {
      if (ref) ref.value = input.value;
    });
    this.applyRule();
    this.showRule();
  }

  applyRule() {
    const { horizontal, vertical, blur, spread, color, opacity, inset } = this.refs;
    const rgb = this.hexToRgb(color.ref.value);
    const shadow = `${inset.input.checked ? "inset " : ""}${horizontal.ref.value}px ${vertical.ref.value}px ${blur.ref.value}px ${spread.ref.value}px rgba(${rgb}, ${opacity.ref.value})`;
    this.previewBox.style.boxShadow = shadow;
    this.currentRule = shadow;
  }

  showRule() {
    this.rules.forEach((el) => (el.innerText = this.currentRule));
  }

  updateValue(type, value) {
    const refObj = this.refs[type];
    if (refObj) {
      if (refObj.ref) refObj.ref.value = value;
      if (type === "inset") refObj.input.checked = value;
    }
    this.applyRule();
    this.showRule();
  }

  hexToRgb(hex) {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
    return `${r}, ${g}, ${b}`;
  }
}