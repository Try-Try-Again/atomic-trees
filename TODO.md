####TODO
####MAKE SURE TO REFACTOR TESTS IMMEDIATELY AFTER REFACTORING CODE

- set up snowpack to deploy minified modules w css modules
- set up automated qunit testing
- set up documentaion generation policy

- serve development server with snowpack and rsync
  - client tasks
    - run unit tests and continue only if passing
    - snowpack everything into deploy
  - deploy tasks
    - rsync everything to server
    - (optional) reset nginx
    - run fts

- ComplexNode still does not override textContent
- implement redux like event handler/store
- defaults could be refactored to share shape of overrides

- create procecess for consuming nodes recursively
	- component class
	- div type
	- attributes
	- routes

- next step
	- when login is pressed, go to pt list (router)
	- pt list should show name, and password (smoke test)
	- factor out all parent/attribute tests into a helper funtion
	- create Children component and refactor all parent elements

- after/during next refactor
	- make an interface for all possible div types and enforce it with jsdoc
	- right now login template only needs atoms, but we might add '?' buttons or something
		like that. Might need to make those atoms 'molecules'
	- make a fake router for tests so test does not get redirected
	- children class should instantiate array of class/attribute objects
	- make a test-fresh command for testing on new vm before merging feature
	- run FT in headless mode?
	- wrap all class attributes in closures and access with setters/getters
	- set up ctags and start using it
	- move index.js into head of html, but use contentLoaded listener to start load the page
	- do we want child elements in children to be hardcoded?

ideas:
- Element.replaceChildren() will delete nodes and replace in one go!
- you still need to purge all event listeners before you replaceChildren()
- implement a redux system for undo/redo and single source-of-truth
- router: routes nested path down components until there is nothing left to query
- tabSelector: decides what child organism to display (parent should hold information for each
	element in memory for each tab (1 api call per router call)
- At each node, pass 2 args: upstream and downstream sub paths.
- Upstream is everything consumed by nodes ancestors.
- Downstream starts with current nodes sub path. the rest of the node needs to be passed
- down to nodes children as child's downstream. childs upstream should contain current
- node's subpath concatinated to current upstream
- find out if elements need to be cleaned up

things we can't unit test without mocks:
history api
fetch api
