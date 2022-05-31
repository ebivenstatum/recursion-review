// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // input something
  // check typeof something
  // if array or object use recursion to go through it
  // if not just stringify
  // output string

  var output = '';

  if ( obj === undefined || typeof obj === 'function' ) {

    return output;

  } else if ( obj === null ) {

    output += 'null';

  } else if ( typeof obj === 'string' ) {

    output +=  '"' + obj + '"';

  } else if ( typeof obj === 'number' || typeof obj === 'boolean' ) {

    output += obj.toString();

  } else if ( Array.isArray(obj) ) {

    if ( obj.length === 0 ) {
      output += '[]';
    }

    _.each(obj, function(element) {

      if ( _.indexOf(obj, element) === 0 && _.indexOf(obj, element) === obj.length - 1 ) {
        output += '[' + stringifyJSON(element) + ']';
      } else if ( _.indexOf(obj, element) === 0 ) {
        output += '[' + stringifyJSON(element) + ',';
      } else if ( _.indexOf(obj, element) === obj.length - 1 ) {
        output += stringifyJSON(element) + ']';
      } else {
        output += stringifyJSON(element) + ',';
      }

    });

  } else if ( typeof obj === 'object' ) {

    if ( _.isEmpty(obj) ) {
      output += '{}';
    }

    var keys = Object.keys(obj);

    _.each(obj, function(value, key) {

      if ( !(key === undefined || value === undefined || typeof key === 'function' || typeof value === 'function') ) {
        if ( key === keys[0] && key === keys[keys.length - 1] ) {

          output += '{' + stringifyJSON(key) + ':' + stringifyJSON(value) + '}';
        } else if ( key === keys[0] ) {
          output += '{' + stringifyJSON(key) + ':' + stringifyJSON(value) + ',';
        } else if ( key === keys[keys.length - 1] ) {
          output += stringifyJSON(key) + ':' + stringifyJSON(value) + '}';
        } else {
          output += stringifyJSON(key) + ':' + stringifyJSON(value) + ',';
        }
      }
    });

    if ( output.length === 0 ) {
      output += '{}';
    }

  }


  console.log(output);

  return output;
};
