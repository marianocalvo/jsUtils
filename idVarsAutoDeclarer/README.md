# idVarsAutoDeclarer

This utility declares automatically a variable for every element with an `id` attribute within the DOM node you give it as parameter.

The name of the variable will be the value of the `id` attribute.

### How it works

The utility is composed in two parts:

1 - A function `getStringForEvalIds` that takes a DOM node as parameter and returns a String with the sequence of the Javascript variable declarations (to be eval()'ed).

2 - A call to the Javascript eval() function from wichever scope you want the variables to work.

### How to use it

  1 - Include *idVarsAutoDeclarer.js* in your HTML or copy the `getStringForEvalIds` function in your JS script code.

```javascript
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
```

  2 - Call the `eval()` function giving it the result of the function as parameter.

`eval(getStringForEvalIds(node));`


### Example

```html
<html>
  <head>
    <script>
      function getStringForEvalIds(node) {
        //...
      }
    <script>
  </head>
  <body>
    
    <div id="myContainer">
      <h1 id="myHeader">Hello world</h1>
      <button id="butChange">Change!</button>
    </div>
    
    <script>
    
      eval(getStringForEvalIds(document.body));
      
      /* This single line replaces these other:
      *  var myHeader = document.getElementById("myHeader");
      *  var butChange = document.getElementById("butChange");
      *
      *  Now you are able to use the variables without compatibility problems.
      */
      
      butChange.onclick = function(){
        myHeader.innerHTML = "Hi!";
      }
    </script>
  </body>
</html>
```
