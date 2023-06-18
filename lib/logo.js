class Logo {
  constructor(textObj, shapeObj) {
    this.textObj = textObj;
    this.shapeObj = shapeObj;
  }

  render() {
    const textHTML = this.textObj.render();
    const shapeHTML = this.shapeObj.render();

    return `<svg width='300' height='200' version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width='300' height='200' fill='#F9F5F6'/>              
            ${shapeHTML}
            ${textHTML}              
        </svg>`;
  }
}

module.exports = Logo;
