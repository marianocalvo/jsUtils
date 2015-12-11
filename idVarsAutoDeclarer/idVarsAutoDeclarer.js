function getStringForEvalIds(node, scope) {
    var _scope = scope || window;
    var aIds = [];
    var getAllIdsOfNode = function (node) {
        if (node.hasAttribute("id"))
            aIds.push(node.getAttribute("id"));
        node = node.firstElementChild;
        while (node) {
            getAllIdsOfNode(node);
            node = node.nextElementSibling;
        }
    };
    getAllIdsOfNode(node);
    var stringForEval = "";
    for (var i in aIds) {
      _scope[aIds[i]] = document.getElementById(aIds[i]);
      //stringForEval += 'var ' + aIds[i] + ' = document.getElementById("' + aIds[i] + '");';
    }

    return stringForEval;
}

// Call eval(getStringForEvalIds(node)); from wichever scope you want the variables to work
//
// Call getStringForEvalIds(node) or if you dont want to use the global(window) scope, pass an object to add the variable there:
// getStringForEvalIds(exampleElement, myObject);   myObject.exampleElement;
