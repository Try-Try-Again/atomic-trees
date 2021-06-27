import ComplexNode from "./components/ComplexNode/ComplexNode.js";
import SimpleNode from "./components/SimpleNode/SimpleNode.js";

/**
 * @typedef {Object<string, string>} Attributes
 *
 * @typedef {Object} Overrides
 * @property {Attributes} [attributes]
 * @property {string} [textContent]
 *
 * @typedef {Object} Child
 * @property {AtomicNode} atomicNode
 * @property {Overrides} [overrides]
 *
 * @typedef {Object} AtomicNodeArgs
 * @property {string} elementType
 * @property {Attributes} [defaults]
 * @property {Child[]} [children]
 * @property {string} [textContent]
 *
 * @typedef {Object} AtomicNode
 * @property {typeof SimpleNode | typeof ComplexNode} ComponentClass
 * @property {AtomicNodeArgs} args
 */
