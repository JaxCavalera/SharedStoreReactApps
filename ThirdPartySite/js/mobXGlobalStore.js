/**
* Instead of using this quick fix window.mobXGlobalStore
* it is recommended that in a production implementation
* all widgets loading on a page be included in an IIFE that has a
* shared object in the outermost closure.
*
* This will prevent the occurrence of nameSpace conflicts in the project.
* Webpack may help in this department using an a config that generates
* multiple Entry bundles :
* https://webpack.github.io/docs/code-splitting.html
**/
window.mobXGlobalStore = {};
