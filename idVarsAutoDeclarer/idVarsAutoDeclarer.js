/**
 @params Object configuration
    configuration.node is the inital node to explore
    configuration.scope is the scope to save the news variables
    configuration.attribute is the attribute which read the name
 */
function idVarsAutoDeclarer(configuration) {
    configuration = configuration || {node: document.body, scope: window, attribute: 'id'};
    var _node = configuration.node || document.body;
    var _scope = configuration.scope || window;
    var _attribute = configuration.attribute || 'id';

    var getAllIdsOfNode = function (node) {
        if (node.hasAttribute(_attribute)){
            var id = node.getAttribute(_attribute);
            _scope[id] = node;//document.getElementById(id);
        }
        node = node.firstElementChild;
        while (node) {
            getAllIdsOfNode(node);
            node = node.nextElementSibling;
        }
    };

    getAllIdsOfNode(_node);
}

// Call idVarsAutoDeclarer() to declare all the HTML elements with id attribute in your <body>
// as JavaScript global variables in your script.

// Optional param "node" (default: document.body)
// Sets the DOM node where the elements with id attribute are searched.

// Optional param "scope" (default: window)
// Sets the object where the elements with id attribute are added as properties.
// Note: in JavaScript, when you declare a global variable, it's added as a property of the window object.
