import ChildNodes from '../components/ChildNodes/ChildNodes.js';
import SimpleNode from '../components/SimpleNode/SimpleNode.js';

/**
 * @interface
 */
class HasNucleus {
  constructor(){
   /** @type {import('../typedef.js').Child[]} children*/
    const children = [];
    const parentElement = document.createElement("div");

    this.childNodes = new ChildNodes(parentElement, children);
  }
}

export default HasNucleus;
