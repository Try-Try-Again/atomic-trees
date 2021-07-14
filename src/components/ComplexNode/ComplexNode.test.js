/* globals QUnit */
import ComplexNode from './ComplexNode.js';
import SimpleNode from '../SimpleNode/SimpleNode.js';
import Nucleus from '../Nucleus/Nucleus.js';
import ChildNodes from '../ChildNodes/ChildNodes.js';

QUnit.module('ComplexNode Implements Nucleus');

QUnit.test('has a Nucleus component', assert => {
  "use strict";
  const tree = {
    ComponentClass: ComplexNode,
    args: {
      elementType: 'div',
      defaults: {id: 'id_simple_element'},
      children: [],
    }
  };
  const parentElement = document.createElement("div");
  const complexNode = new tree.ComponentClass(parentElement, tree.args);
  assert.true(complexNode .nucleus instanceof Nucleus);
});

QUnit.test('Nucleuss parent is ComplexNodes parent', assert => {
  'use strict';
  const parentElement = document.createElement("div");
  const tree = {
    ComponentClass: ComplexNode,
    args: {
      elementType: 'div',
      defaults: {id: 'id_simple_element'},
      children: [],
    }
  };
  const simpleNode = new ComplexNode(parentElement, tree.args);

  assert.equal(simpleNode.nucleus.element.parentNode, parentElement);
});

QUnit.test('passes attribute argument to nucleus', assert => {
  'use strict';
  const parentElement = document.createElement("div");
  const tree = {
    ComponentClass: ComplexNode,
    args: {
      elementType: 'div',
      defaults: {id: 'id_simple_element'},
      children: [],
    }
  };
  const simpleNode = new ComplexNode(parentElement, tree.args);

  assert.equal(simpleNode.nucleus.element.id, tree.args.defaults.id);
});

QUnit.test('Passes Text Content to Element', assert => {
  'use strict';
  const parentElement = document.createElement("div");
  const tree = {
    ComponentClass: ComplexNode,
    args: {
      elementType: 'div',
      defaults: {id: 'id_simple_element'},
      textContent: 'Hello World!',
      children: [],
    }
  };
  parentElement.id = "app";
  const simpleNode = new ComplexNode(parentElement, tree.args);

  assert.equal(simpleNode.nucleus.element.textContent, tree.args.textContent);
});

QUnit.module('ComplexNode Implements ChildNodes');

QUnit.test('childNodes is instance of ChildNodes', assert => {
  'use strict';
  const parentElement = document.createElement("div");
  /**
   * @typedef {Object} Args
   * @property {string} elementType
   * @property {Object<string, string>} defaults
   * @property {AtomicNode[]} children
   * @property {string} textContent
   *
   * @typedef {Object} AtomicNode
   * @property {typeof SimpleNode | typeof ComplexNode} ComponentClass
   * @property {Args} args
   */
  const tree = {
    ComponentClass: ComplexNode,
    args: {
      elementType: 'div',
      defaults: {id: 'id_simple_element'},
      textContent: 'Hello World!',
      children: [
        {
          atomicNode: {
            ComponentClass: SimpleNode,
            args: {
              elementType: 'div',
              defaults: {id: 'id_child_element'},
              textContent: '',
            },
          },
          properties: {}
        }

      ],
    }
  };
  const complexNode = new tree.ComponentClass(parentElement, tree.args);

  assert.true(complexNode.childNodes instanceof ChildNodes);
});

QUnit.test('', assert => {
  'use strict';
  const parentElement = document.createElement("div");
  const tree = {
    ComponentClass: ComplexNode,
    args: {
      elementType: 'div',
      defaults: {id: 'id_simple_element'},
      textContent: 'Hello World!',
      children: [
        {
          atomicNode: {
            ComponentClass: SimpleNode,
            args: {
              elementType: 'div',
              defaults: {id: 'id_child_element'},
              textContent: '',
            },
          },
          properties: {},
        }
      ],
    }
  };
  const complexNode = new tree.ComponentClass(parentElement, tree.args);
  const firstChildId = complexNode.childNodes.getChildren()[0].nucleus.element.id;
  const expectedId = tree.args.children[0].atomicNode.args.defaults.id;

  assert.equal(firstChildId, expectedId);
});
