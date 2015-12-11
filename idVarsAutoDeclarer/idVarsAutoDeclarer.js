function idVarsAutoDeclarer(node, scope) {
    
    var _node = node || document.body;
    var _scope = scope || window;
    
    var getAllIdsOfNode = function (node) {
        if (node.hasAttribute("id")){
            var id = node.getAttribute("id");
            _scope[id] = document.getElementById(id);
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
