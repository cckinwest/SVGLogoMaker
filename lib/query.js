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

    this.textFontQuery = [
      {
        type: "list",
        name: "textFont",
        message: "Choose the font",
        choices: ["Times", "Arial", "Verdana"],
      },
    ];

    this.textColorQuery = [
      {
        type: "input",
        name: "textColor",
        message:
          "Enter the color keyword (OR a 3-digit/6-digit hexadecimal number)",
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

    this.shapeColorQuery = [
      {
        type: "input",
        name: "shapeColor",
        message:
          "Enter the color keyword (OR a 3-digit/6-digit hexadecimal number)",
      },
    ];
  }

  async makeTextQuery() {
    const { text } = await inquirer.prompt(this.textQuery);

    if (text.length > 3) {
      console.log("The text should not have more than 3 characters.");
      return this.makeTextQuery();
    }

    var { textColor } = await inquirer.prompt(this.textColorQuery);
    const { valid, color } = new helper().colorStatus(textColor);

    if (!valid) {
      console.log("Not a valid color. Please enter again.");
      return this.makeTextQuery();
    }

    textColor = color;

    const { textFont } = await inquirer.prompt(this.textFontQuery);

    return { text, textColor, textFont };
  }

  async makeShapeQuery() {
    const { shape } = await inquirer.prompt(this.shapeQuery);

    var { shapeColor } = await inquirer.prompt(this.shapeColorQuery);
    const { valid, color } = new helper().colorStatus(shapeColor);

    if (!valid) {
      console.log("Not a valid color. Please enter again.");
      return this.makeColorQuery();
    }

    shapeColor = color;

    return { shape, shapeColor };
  }
}

module.exports = Query;
