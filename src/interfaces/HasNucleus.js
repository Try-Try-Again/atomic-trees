import Nucleus from '../components/Nucleus/Nucleus.js';

/**
 * @interface
 */
class HasNucleus {
	constructor(){
		this.nucleus = new Nucleus(document.createElement("div"), 'div');
	}
}

export default HasNucleus;
