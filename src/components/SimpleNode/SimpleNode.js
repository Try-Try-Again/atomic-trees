import Nucleus from "../Nucleus/Nucleus.js";
import HasNucleus from "../../interfaces/HasNucleus.js";
import HasChildNodes from "../../interfaces/HasChildNodes.js";

/**
 * @implements {HasNucleus}
 */
class SimpleNode {
  /**
   * Creates a new ButtonAtom
   * @param {HTMLElement} parentElement
   * @param {import('../../typedef.js').AtomicNodeArgs} args
   * @param {import('../../typedef.js').Overrides} [overrides]
   */
  constructor(parentElement, args, overrides={}) {
    const textContent = overrides.textContent || args.textContent;
    this.nucleus = new Nucleus(
      parentElement,
      args.elementType,
      {...args.defaults, ...overrides.attributes},
      textContent,
    );
  }
}

export default SimpleNode;
