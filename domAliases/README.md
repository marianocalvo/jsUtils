<h1>domAliases</h1>

Just some usual DOM functions with a short alias.

<h2>gE</h2>

Use `gE("myElementId");` instead of `document.getElementById("myElementId");`.

```javascript
function gE (elementId) {
    return document.getElementById(elementId);
};
```

<h2>cT</h2>

Use `cT("Hello world!");` instead of `document.createTextNode("Hello world!");`.

```javascript
function cT (text) {
    return document.createTextNode(text);
};
```

<h2>cE</h2>

Use `cE("div");` instead of `document.createElement("div");`.

```javascript
function cE (typeOfElement) {
    return document.createElement(typeOfElement);
};
```

<h2>eE</h2>

Use `eE(myElement);` to remove all the children of `myElement`.

```javascript
function eE (elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
};
```

<h2>aC</h2>

Use `myElement.aC(myNewElement);` instead of `myElement.appendChild(myNewElement);`.

```javascript
Element.prototype.aC = function (elem) {
    this.appendChild(elem);
};
```

<h2>aT</h2>

Use `myElement.aT("Hello world!");` instead of `myElement.appendChild(document.createTextNode("Hello world!"));`.

```javascript
Element.prototype.aT = function (text) {
    this.appendChild(document.createTextNode(text));
};
```

<h2>sA</h2>

Use `myElement.sA("title", "Hello world!");` instead of `myElement.setAttribute("title", "Hello world!");`.

```javascript
Element.prototype.sA = function (key, value) {
    this.setAttribute(key, value);
};
```

<h2>rA</h2>

Use `myElement.rA("title");` instead of `myElement.removeAttribute("title");`.

```javascript
Element.prototype.rA = function (att) {
    this.removeAttribute(att);
};
```
