const cssColorKeywords = require("css-color-keywords");

class Helper {
  constructor() {
    this.colorList = Object.keys(cssColorKeywords);
  }

  isColor(strColor) {
    if (this.colorList.includes(strColor.toString().toLowerCase())) {
      return true;
    } else {
      const regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
      if (regex.test(strColor)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

module.exports = Helper;
