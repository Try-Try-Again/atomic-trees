import Nucleus from '../Nucleus/Nucleus.js';
import ChildNodes from '../ChildNodes/ChildNodes.js';
import HasNucleus from "../../interfaces/HasNucleus.js";
import HasChildNodes from "../../interfaces/HasChildNodes.js";

/**
 * @implements {HasNucleus}
 * @implements {HasChildNodes}
 */
class ComplexNode {
  /**
   * @param {HTMLElement} parentElement
   * @param {import('../../typedef.js').AtomicNodeArgs} args
   * @param {import('../../typedef.js').Overrides} overrides
   */
  constructor(parentElement, args, overrides={}) {
    this.nucleus = new Nucleus(
      parentElement,
      args.elementType,
      {...args.defaults, ...overrides.attributes},
      args.textContent
    );
    if (args.children !== undefined) {
      this.childNodes = new ChildNodes(this.nucleus.element, args.children);
    } else {
      this.childNodes = new ChildNodes(this.nucleus.element, []);
    }
  }
}

export default ComplexNode;
