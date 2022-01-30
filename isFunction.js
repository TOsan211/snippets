/*
* Checks if value is classified as `Function` Object
* @params {any}
* @returns {boolean}
*/
import isPrototype from './isPrototype.js';

function isFunction(value){
  if(typeof value !== 'function') return false;
  
  if(!hasOwnProperty.call(value, 'length')) return false;
  try{
    if(typeof value.length !== 'number')   return false;
    if(typeof value.call   !== 'function') return false;
    if(typeof value.apply  !== 'function') return false;
  } catch( error ) {
    return false;
  }
  return !isPrototype(value);
}

export default isFunction
