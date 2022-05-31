// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, newCase) {
  // your code here

  // input string
  // check basecase for target name
  // recurse
  // output array

  var baseCase = document.body;
  var currentCase = newCase || baseCase;
  var elements = []; // ouput array

  // check basecase
  if ( _.contains(currentCase.classList, className) ) {

    elements.push(currentCase);

  }

  var nodeList = currentCase.childNodes;

  //recursion
  _.each(nodeList, function(item) {

    if ( getElementsByClassName(className, item) ) {

      var recursed = getElementsByClassName(className, item);

      _.each(recursed, function(element) {

        if ( element ) {

          elements.push(element);

        }

      });

    }

  });

  return elements;

};
