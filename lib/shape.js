class Circle {
  constructor(size, color) {
    this.radius = size / 2;
    this.color = color;
    this.height = size;
    this.width = size;
  }

  render() {
    return `<circle cx='${this.radius}' cy='${this.radius}' r='${this.radius}' fill='${this.color}'/>`;
  }
}

class Square {
  constructor(size, color) {
    this.side = size;
    this.color = color;
    this.height = size;
    this.width = size;
  }

  render() {
    return `<rect x="0" y="0" width='${this.side}' height='${this.side}' fill='${this.color}'/>`;
  }
}

class Triangle {
  constructor(size, color) {
    this.side = size;
    this.color = color;
    this.width = size;
    this.height = (size * Math.sqrt(3)) / 2;
  }

  render() {
    const x1 = 0;
    const y1 = 0;

    const x2 = this.width;
    const y2 = 0;

    const x3 = this.width * 0.5;
    const y3 = this.height;

    return `<polygon points='${x1},${y1} ${x2},${y2} ${x3},${y3}' fill='${this.color}'/>`;
  }
}

module.exports = { Circle, Square, Triangle };
