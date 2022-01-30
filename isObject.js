/**
* Checks if value is object
*
* @params {any}
* @returns {boolean}
*
*/
import isValue from './isValue.js';

var possibleTypes = {"object" : true, "function" : true, 'undefined': true /* document.all*/};

function isObject(value){
  if(!isValue(value)) return false;
  return hasOwnProperty.call(possibleTypes, typeof value);
}
export default isObject
