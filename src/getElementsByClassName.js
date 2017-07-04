// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here

  var elements = [];

  getElementsByClassNameInner(document.body, className, elements);
   console.log(elements);

  return elements;
};

function getElementsByClassNameInner(currentNode, className, array) {

  if(currentNode.classList.contains(className)) {
    array.push(currentNode);
  }

  if(currentNode.hasChildNodes()) {
    for(var i = 0; i < currentNode.childElementCount; i++) {
       getElementsByClassNameInner(currentNode.children[i], className, array);
    }
  }

  

}