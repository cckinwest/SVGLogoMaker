class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx='150' cy='100' r='90' fill='${this.color}'/>`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="60" y="10" width='180' height='180' fill='${this.color}'/>`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    const x1 = 150 - 60 * Math.sqrt(3);
    const y1 = 10;

    const x2 = 150 + 60 * Math.sqrt(3);
    const y2 = 10;

    const x3 = 150;
    const y3 = 190;

    return `<polygon points='${x1},${y1} ${x2},${y2} ${x3},${y3}' fill='${this.color}'/>`;
  }
}

module.exports = { Circle, Square, Triangle };
