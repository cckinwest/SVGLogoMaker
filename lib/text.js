class Text {
  constructor(text, color, font) {
    this.text = text;
    this.color = color;
    this.font = font;
  }

  render() {
    return `<text fill='${this.color}' font-size='48' font-family='${this.font}' x="50%" y="50%" text-anchor="middle" alignment-baseline="middle">
    ${this.text}</text>`;
  }
}

module.exports = Text;
