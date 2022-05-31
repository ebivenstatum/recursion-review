// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var parseJSON = function(json) {

  //console.log(json);
  // your code goes here

  // input string
  // output data according to parse

  var numbers = '0123456789'
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';


  if ( json === undefined ) {

    return '';

  } else if ( json[0] === "[" && json[json.length - 1] === ']' ) {

    return parseArray(json);

  } else if ( (json[0] === "[" && json[json.length - 1] !== "]") || (json[0] !== "[" && json[json.length - 1] === "]") ) {

    return undefined;

  } else if ( (json[0] === "{" && json[json.length - 1] !== "}") || (json[0] !== "{" && json[json.length - 1] === "}") ) {

    return undefined;

  } else if ( json[0] === "{" && json[json.length - 1] === '}' ) {

    return parseObj(json);

  } else if ( json.slice(4) === 'null' ) {

    return null;

  } else if ( json.slice(4) === 'true' || json.slice(4) === 'false' ) {

    return parseBoolean(json);

  } else if ( letters.includes(json[0]) ) {

    return json;

  } else if ( numbers.includes[json[0]] ) {

    return parseNumber(json);

  } else {
    return parseString(json);
  }

};

var parseObj = function(obj) {

  if ( obj.length === 2 ) {
    return {};
  }

  var output = {};

  // slice off brackets
  obj = obj.slice(1, obj.length - 2);

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

  _.each(keys, function(key) {
    var newKey = parseJSON(key);
    console.log(key);
    console.log(newKey);
    //console.log(values[_.indexOf(keys, key)]);
    var newValue = parseJSON(values[_.indexOf(keys, key)]);
    //console.log(insides[key]);
    output[newKey] = newValue;
  });

  //console.log(output);

  return output;

}

var parseArray = function(arr) {

  if ( arr.length === 2) {
    return [];
  }

  var output = [];

  arr = arr.slice(1, arr.length - 2);

  var insides = arr.split(',');

  _.each( insides, function(item) {
    output.push(parseJSON(item));
  })

  return output;

}

var parseNumber = function(num) {

  if ( num.includes('.') ) {
    return parseFloat(num);
  } else {
    return parseInt(num);
  }
}

var parseBoolean = function(bool) {

  if ( bool === 'true' ) {
    return true;
  } else {
    return false;
  }

}

var parseString = function(str) {

  var newString = str.toString();
  var strSplit = newString.split('"');
  var output = '';

  _.each(strSplit, function(item) {
    if (item !== '"' || item !== ' ') {
      output += item;
    }
  });

  return output;
}



