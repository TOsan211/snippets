/**
* Checks if value is not null nor undefined
*
* @params {any}
* @returns {boolean}
*
*/
import isNull from "./isNull.js";
import isUndefined from "./isUndefined.js";

function isValue(value){
  return !isNull(value) && !isUndefined(value);
}
export default isValue
