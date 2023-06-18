const { Circle, Square, Triangle } = require("../lib/shape.js");

test("Rendering valid html code", () => {
  expect(new Circle("blue").render()).toBe(
    `<circle cx='150' cy='100' r='90' fill='blue'/>`
  );
  expect(new Square("red").render()).toBe(
    `<rect x="60" y="10" width='180' height='180' fill='red'/>`
  );
  expect(new Triangle("yellow").render()).toBe(
    `<polygon points='${150 - 60 * Math.sqrt(3)},10 ${
      150 + 60 * Math.sqrt(3)
    },10 150,190' fill='yellow'/>`
  );
});
