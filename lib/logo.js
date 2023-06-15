class Logo {
  constructor(textObj, shapeObj) {
    this.textObj = textObj;
    this.shapeObj = shapeObj;
  }

  render() {
    const width = this.shapeObj.width;
    const height = this.shapeObj.height;
    const textHTML = this.textObj.render();
    const shapeHTML = this.shapeObj.render();

    return `<svg width='${width}' height='${height}' version="1.1" xmlns="http://www.w3.org/2000/svg">              
            ${shapeHTML}
            ${textHTML}              
        </svg>`;
  }
}

module.exports = Logo;
