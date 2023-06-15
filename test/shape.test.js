const { Circle, Square, Triangle } = require("../lib/shape.js");

test("Circle created should have correct attributes", () => {
  expect(new Circle(4, "black").radius).toBe(2);
  expect(new Circle(4, "black").color).toBe("black");
  expect(new Circle(4, "black").height).toBe(4);
  expect(new Circle(4, "black").width).toBe(4);
});

test("Square created should have correct attributes", () => {
  expect(new Square(5, "purple").side).toBe(5);
  expect(new Square(5, "purple").color).toBe("purple");
  expect(new Square(5, "purple").height).toBe(5);
  expect(new Square(5, "purple").width).toBe(5);
});

test("Triangle created should have correct attributes", () => {
  expect(new Triangle(6, "green").side).toBe(6);
  expect(new Triangle(6, "green").color).toBe("green");
  expect(new Triangle(6, "green").height).toBe(3 * Math.sqrt(3));
  expect(new Triangle(6, "green").width).toBe(6);
});

test("Rendering valid html code", () => {
  expect(new Circle(10, "blue").render()).toBe(
    `<circle cx='5' cy='5' r='5' fill='blue'/>`
  );
  expect(new Square(20, "red").render()).toBe(
    `<rect x="0" y="0" width='20' height='20' fill='red'/>`
  );
  expect(new Triangle(30, "yellow").render()).toBe(
    `<polygon points='0,0 30,0 15,${15 * Math.sqrt(3)}' fill='yellow'/>`
  );
});
