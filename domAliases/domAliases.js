// get Element
function gE (elementId) {
    return document.getElementById(elementId);
};

// create Textnode
function cT (text) {
    return document.createTextNode(text);
};

// create Element
function cE (typeOfElement) {
    return document.createElement(typeOfElement);
};

// empty Element
function eE (elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
};

// append Child
Element.prototype.aC = function (elem) {
    this.appendChild(elem);
};

// append Textnode
Element.prototype.aT = function (text) {
    this.appendChild(document.createTextNode(text));
};

// set Attribute
Element.prototype.sA = function (key, value) {
    this.setAttribute(key, value);
};

// remove Attribute
Element.prototype.rA = function (att) {
    this.removeAttribute(att);
};
