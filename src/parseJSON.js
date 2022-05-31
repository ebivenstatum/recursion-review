// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var parseObj = function(obj) {

  var output = {};

  // slice of brackets
  obj = obj.slice(1, obj.length - 1);

  var insides = obj.split(':');
  var keys = [];
  var values = [];

  for ( var i = 0; i < insides.length; i++ ) {
    if ( i % 2 === 0 ) {
      keys.push(insides[i]);
    } else {
      values.push(insides[i]);
    }
  }

}

var parseArray = function(arr) {

}

var parseNumber = function(num) {}

var parseBoolean = function(bool) {}



var parseJSON = function(json) {
  // your code goes here

  // input string
  // output data according to parse

  if ( json[0] === "[" && json[json.length - 1] === ']' ) {
    return parseArray(json);
  } else if ( json[0] === "{" && json[json.length - 1] === '}' ) {
    return parseObj(json);
  }


};
