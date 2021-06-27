import ComplexNode from "../components/ComplexNode/ComplexNode.js";
import homeTemplate from "../templates/homeTemplate/homeTemplate.js";

/**
 * @type{import('../typedef.js').AtomicNode}
 */
const page = {
	ComponentClass: ComplexNode,
	args: {
		elementType: 'div',
		defaults: {
			id: 'id_page',
		},
		children: [
			{
				atomicNode: homeTemplate,
			},
		],
	},
};

export default page;
