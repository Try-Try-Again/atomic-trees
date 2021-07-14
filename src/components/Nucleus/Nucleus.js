class Nucleus {
  /**
   * Creates a new Base
   * @param {HTMLElement} parentElement - parent HTMLElement for Base's elemenet
   * @param {string} tagType - tag type for Base's HTMLElement
   * @param {Object.<string, string>} [attributes] - attributes to assign to base's HTMLElement
   * @param {string} [textContent] - text content for HTMLElement
   */
  constructor(parentElement, tagType, attributes={}, textContent='') {
    this.element = document.createElement(tagType);
    this.element.textContent = textContent;
    for (let key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        this.element.setAttribute(key, attributes[key]);
      }
    }
    parentElement.appendChild(this.element);
  }
}

export default Nucleus;
