// get Element
function gE (elem) {
    return document.getElementById(elem);
};

// create Textnode
function cT (text) {
    return document.createTextNode(text);
};

// create Element
function cE (elem) {
    return document.createElement(elem);
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
