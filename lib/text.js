class Text {
  constructor(text, color, font, size) {
    this.text = text;
    this.color = color;
    this.font = font;
    this.size = size;
  }

  render() {
    return `<text fill='${this.color}' font-size='${this.size}' font-family='${this.font}' x="50%" y="50%" text-anchor="middle" alignment-baseline="middle">
    ${this.text}</text>`;
  }
}

module.exports = Text;
