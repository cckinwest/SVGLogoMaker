const cssColorKeywords = require("css-color-keywords"); //import a list of css color

//Helper is a class containing all helper functions.
class Helper {
  constructor() {}

  isColor(strColor) {
    //if the color keyword is in the list or is a hexadecimal number, true.
    const colorList = Object.keys(cssColorKeywords);
    return colorList.includes(strColor.toString().toLowerCase());
  }

  isHexa(strColor) {
    const regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    const regex2 = new RegExp(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    return regex.test(strColor) || regex2.test(strColor);
  }

  colorStatus(strColor) {
    const valid = this.isColor(strColor) || this.isHexa(strColor);
    var color = strColor;

    if (this.isHexa(strColor) && strColor[0] !== "#") {
      color = `#${color}`;
    }

    return {
      valid: valid,
      color: color,
    };
  }
}

module.exports = Helper;
