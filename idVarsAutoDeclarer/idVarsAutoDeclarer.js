function getStringForEvalIds(node) {
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
        stringForEval += 'var ' + aIds[i] + ' = document.getElementById("' + aIds[i] + '");';
    }
    return stringForEval;
}

// Call eval(getStringForEvalIds(node)); from wichever scope you want the variables to work
