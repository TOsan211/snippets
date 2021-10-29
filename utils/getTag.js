const toString = Object.prototype.toString

/**
* Get `toStringTag` of `value`
* 
* @param {any}
* @returns {string}
*/

function getTag(value){
  if(value == null){
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}
export default getTag
