import ComplexNode from "../ComplexNode/ComplexNode.js";
import SimpleNode from "../SimpleNode/SimpleNode.js";

class ChildNodes {
	/**
	 * @param {HTMLElement} parentElement
	 * @param {import('../../typedef.js').Child[]} children
	 */
	constructor(parentElement, children) {
		this.childNodes = children
			.map(
				/** @param {import('../../typedef.js').Child} child */
				child => {
					/** @type {import('../../typedef.js').Overrides} child */
					const overrides = child.overrides ? child.overrides : {};
					return	new child.atomicNode.ComponentClass(
						parentElement,
						child.atomicNode.args,
						overrides
					);
				}
			);
		this.getChildren = () => this.childNodes;
	}
}

export default ChildNodes;
