/**
* Checks if value is prototype
*
* @params {any}
* @returns {boolean}
*
*/
import isObject from './isObject.js';

function isPrototype(value){
  if(!isObject(value)) return false;
  try{
    if(!value.constructor) return false;
    return value.constructor.prototype === value;
  } catch (error) {
    return false;
  }
}
export default isPrototype
