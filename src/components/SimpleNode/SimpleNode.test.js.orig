/* globals QUnit */

import SimpleNode from "./SimpleNode.js";
import Nucleus from "../Nucleus/Nucleus.js";

QUnit.module('SimpleNode');

QUnit.test('has a Nucleus component', assert => {
	"use strict";
	const tree = {
		NodeClass: SimpleNode,
		args: {
			elementType: 'div',
			defaults: {id: 'id_simple_element'},
		}
	};
	const parentElement = document.createElement("div");
	const simpleElement = new tree.NodeClass(parentElement, tree.args);
	assert.true(simpleElement.nucleus instanceof Nucleus);
});

QUnit.test('Nucleuss parent is SimpleNodes parent', assert => {
	'use strict';
	const parentElement = document.createElement("div");
	const tree = {
		NodeClass: SimpleNode,
		args: {
			elementType: 'div',
			defaults: {id: 'id_simple_element'},
		}
	};
	const simpleElement = new SimpleNode(parentElement, tree.args);

	assert.equal(simpleElement.nucleus.element.parentNode, parentElement);
});

QUnit.test('passes attribute argument to nucleus', assert => {
	'use strict';
	const parentElement = document.createElement("div");
	const tree = {
		NodeClass: SimpleNode,
		args: {
			elementType: 'div',
			defaults: {id: 'id_simple_element'},
		}
	};
	const simpleElement = new SimpleNode(parentElement, tree.args);

	assert.equal(simpleElement.nucleus.element.id, tree.args.defaults.id);
});

QUnit.test('Passes Text Content to Element', assert => {
	'use strict';
	const parentElement = document.createElement("div");
	const tree = {
		NodeClass: SimpleNode,
		args: {
			elementType: 'div',
			defaults: {id: 'id_simple_element'},
			textContent: 'Hello World!',
		}
	};
	parentElement.id = "app";
	const simpleElement = new SimpleNode(parentElement, tree.args);

	assert.equal(simpleElement.nucleus.element.textContent, tree.args.textContent);
});

QUnit.test('overrides default attributes with args', assert => {
	'use strict';
	const parentElement = document.createElement("div");
	const tree = {
		NodeClass: SimpleNode,
		args: {
			elementType: 'div',
			defaults: {id: 'id_simple_element'},
			textContent: 'Hello World!',
		}
	};
	const overrides = {attributes: {id: 'overrides default with attribute'}};
	parentElement.id = "app";
	const simpleElement = new SimpleNode(parentElement, tree.args, overrides);

	assert.equal(simpleElement.nucleus.element.id, overrides.attributes.id);
});

QUnit.test('overrides default textContent with args', assert => {
	'use strict';
	const parentElement = document.createElement("div");
	const tree = {
		NodeClass: SimpleNode,
		args: {
			elementType: 'div',
			defaults: {id: 'id_simple_element'},
			textContent: 'Hello World!',
		}
	};
	const overrides = {textContent: 'overidden text'};
	parentElement.id = "app";
	const simpleElement = new SimpleNode(parentElement, tree.args, overrides);

	assert.equal(simpleElement.nucleus.element.textContent, overrides.textContent);
});
