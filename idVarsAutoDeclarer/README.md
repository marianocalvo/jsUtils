# idVarsAutoDeclarer

This function declares automatically a variable for every element with an `id` attribute within the DOM node that you give it as `node` parameter. The variable is declared into the object that you set as `scope` parameter.

The name of the variable will be the value of the `id` attribute.

In summary:

You will have to write

```javascript
idVarsAutoDeclarer();
```

instead of

```javascript
var myElement1 = document.getElementById("myElement1");
var myElement2 = document.getElementById("myElement2");
var myElement3 = document.getElementById("myElement3");
...
```

### Parameters

**node** (optional)

*Default value: document.body*

Starting DOM node where the DOM nodes with id attribute are searched.

If you use the default value, the function will look for nodes with id into all your `<body>` element.

**scope** (optional)

*Default value: window*

Object where the variables will be declared as properties.

If you use the default value, the function will add the variables as properties of the window object. It means that the will be declared as global variables in your script.


### Example

```html
<html>
  <head>
    <script>
      function idVarsAutoDeclarer(node, scope) {
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
    
      idVarsAutoDeclarer();
      
      /* This single line replaces these other:
      *
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
