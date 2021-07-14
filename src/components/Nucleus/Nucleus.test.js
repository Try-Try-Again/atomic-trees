/*globals QUnit */

import Nucleus from "./Nucleus.js";
let nucleus, tagType, attributes, parentElement, textContent;

QUnit.module("Nucleus", {
  before: function() {
    "use strict";
    tagType = "P";
    attributes = {
        id: "id_element"
    };
    textContent = "Hello World!";
    parentElement = document.createElement("div");
    parentElement.id = "id_parent";
  },
});

QUnit.test('parentElement becomes parent of new nucleus', assert => {
  "use strict";
  nucleus = new Nucleus(parentElement, tagType, attributes, textContent);
  assert.equal(nucleus.element.parentNode, parentElement);
});

QUnit.test('passes id argument to element', assert => {
  "use strict";
  nucleus = new Nucleus(parentElement, tagType, attributes, textContent);
  assert.equal(nucleus.element.id, attributes.id);
});

QUnit.test('creates an element with a given tagType', assert => {
  "use strict";
  nucleus = new Nucleus(parentElement, tagType, attributes, textContent);
  assert.equal(nucleus.element.tagName, tagType);
});

QUnit.test('passes text content into nucleus element', assert => {
  "use strict";
  nucleus = new Nucleus(parentElement, tagType, attributes, textContent);
  assert.equal(nucleus.element.textContent, textContent);
});
