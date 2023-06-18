const Logo = require("./lib/logo.js");
const Query = require("./lib/query.js");
const { Circle, Square, Triangle } = require("./lib/shape.js");
const Text = require("./lib/text.js");

const fs = require("fs");

async function renderText() {
  const { text, textColor, textFont } = await new Query().makeTextQuery();

  return new Text(text, textColor, textFont);
}

async function renderShape() {
  const { shape, shapeColor } = await new Query().makeShapeQuery();

  if (shape === "Circle") {
    return new Circle(shapeColor);
  } else if (shape === "Square") {
    return new Square(shapeColor);
  } else if (shape === "Triangle") {
    return new Triangle(shapeColor);
  }
}

async function renderLogo() {
  const textObj = await renderText();
  const shapeObj = await renderShape();

  return new Logo(textObj, shapeObj);
}

async function main() {
  const logoSVG = await renderLogo();

  fs.writeFile("logo.svg", logoSVG.render(), (err) => {
    err
      ? console.error(err)
      : console.log("The logo.svg is created successfully!");
  });
}

main();
