/* globals  QUnit */
import ComplexNode from "../ComplexNode/ComplexNode.js";
import SimpleNode from "../SimpleNode/SimpleNode.js";
import ChildNodes from "../ChildNodes/ChildNodes.js";

QUnit.module('ChildNodes');

QUnit.test ('Creates a Child Node with expected Id', assert => {
	'use strict';
	const parentElement = document.createElement("div");
	const children = [
		{
			atomicNode: {
				ComponentClass: SimpleNode,
				args: {
					elementType: 'div',
					defaults: {id: 'id_child_element'},
					textContent: '',
				},
				attributes: {},
			}
		}];

	const childNodes = new ChildNodes(parentElement, children);
	const firstChildId = childNodes.getChildren()[0].nucleus.element.id;
	const expectedId = children[0].atomicNode.args.defaults.id;

	assert.equal(firstChildId, expectedId);
});
