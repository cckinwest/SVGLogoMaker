const inquirer = require("inquirer");
const helper = require("./helper.js");

class Query {
  constructor() {
    this.textQuery = [
      {
        type: "input",
        name: "text",
        message: "Enter the text in the logo (up to 3 characters)",
      },
    ];

    this.textSizeQuery = [
      {
        type: "list",
        name: "textSize",
        message: "Choose the size of the text",
        choices: [16, 20, 24, 28, 32, 36, 44, 48, 52, 56, 60],
      },
    ];

    this.textFontQuery = [
      {
        type: "list",
        name: "textFont",
        message: "Choose the font of the text",
        choices: ["Times", "Arial", "Verdana"],
      },
    ];

    this.textColorQuery = [
      {
        type: "input",
        name: "textColor",
        message:
          "Enter the color keyword of the text (OR a hexadecimal number)",
      },
    ];

    this.shapeQuery = [
      {
        type: "list",
        name: "shape",
        message: "Choose the shape of the logo",
        choices: ["Circle", "Square", "Triangle"],
      },
    ];

    this.shapeSizeQuery = [
      {
        type: "list",
        name: "shapeSize",
        message: "Choose the size of the shape",
        choices: [150, 200, 250, 300, 350, 400],
      },
    ];

    this.shapeColorQuery = [
      {
        type: "input",
        name: "shapeColor",
        message:
          "Enter the color keyword of the shape (OR a hexadecimal number)",
      },
    ];
  }

  async makeTextQuery() {
    const { text } = await inquirer.prompt(this.textQuery);

    if (text.length === 0 || text.length > 3) {
      console.log("The text should not have more than 3 characters.");
      return this.makeTextQuery();
    }

    const { textColor } = await inquirer.prompt(this.textColorQuery);
    const isColor = new helper().isColor(textColor);

    if (!isColor) {
      console.log("Not a valid color. Please check the spelling.");
      return this.makeTextQuery();
    }

    const { textSize } = await inquirer.prompt(this.textSizeQuery);

    const { textFont } = await inquirer.prompt(this.textFontQuery);

    return { text, textColor, textFont, textSize };
  }

  async makeShapeQuery() {
    const { shape } = await inquirer.prompt(this.shapeQuery);

    const { shapeColor } = await inquirer.prompt(this.shapeColorQuery);
    const isColor = new helper().isColor(shapeColor);

    if (!isColor) {
      console.log("Not a valid color. Please check the spelling.");
      return this.makeShapeQuery();
    }

    const { shapeSize } = await inquirer.prompt(this.shapeSizeQuery);

    return { shape, shapeSize, shapeColor };
  }
}

module.exports = Query;
