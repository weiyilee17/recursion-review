// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var arrayOfArrays = [];
  var arrayOfObjectsKeys = [];
  var arrayOfObjectsValues = [];
  var totalArray = [];
  
  if (obj === null || typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (Array.isArray(obj)) {
    if (!obj.length) {
      return '[]';
    } else {
      obj.forEach(function(element) {
        arrayOfArrays.push(stringifyJSON(element));
      });
      
      return `[${arrayOfArrays}]`;
    }
  } else if (typeof obj === 'object') {
    
    if (!Object.keys(obj).length) {
      return '{}';
    } else {
      
      arrayOfObjectsKeys = Object.keys(obj);
      
      for (var key in obj) {
        arrayOfObjectsValues.push(obj[key]);
      }
      
      for (var i = 0; i < arrayOfObjectsValues.length; i++) {
        
        
        if (arrayOfObjectsValues[i] === null || typeof arrayOfObjectsValues[i] === 'boolean' || typeof arrayOfObjectsValues[i] === 'number') {
          totalArray.push(`"${arrayOfObjectsKeys[i]}"` + ':' + arrayOfObjectsValues[i]);
        } else if (typeof arrayOfObjectsValues[i] === 'string') {
          totalArray.push(`"${arrayOfObjectsKeys[i]}"` + ':' + `"${arrayOfObjectsValues[i]}"`);
        } else if (Array.isArray(arrayOfObjectsValues[i])) {
          totalArray.push(`"${arrayOfObjectsKeys[i]}"` + ':' + stringifyJSON(arrayOfObjectsValues[i]));
        } else if (typeof arrayOfObjectsValues[i] === 'function' || typeof arrayOfObjectsValues[i] === undefined) {
          return '{}';
        } else if (typeof arrayOfObjectsValues[i] === 'object') {
          totalArray.push(`"${arrayOfObjectsKeys[i]}"` + ':' + stringifyJSON(arrayOfObjectsValues[i]));
        }
        
      }
      
      return `{${totalArray}}`;
    }
  } 

};

