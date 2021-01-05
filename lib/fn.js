/*
* @Author: zhengyuliang
* @Date:   2020-11-17 16:34:54
* @Last Modified by:   zhengyuliang
* @Last Modified time: 2020-11-25 09:05:03
*/
// 常用的javascript函数

/*
 * 判断数据类型 isDataFnTypes
 * val 参数
 * type 类型
 * 使用方式：
 * console.log(isDataFnTypes("young")); // "string"
 * console.log(isDataFnTypes(20190214)); // "number"
 * console.log(isDataFnTypes(true)); // "boolean"
 * console.log(isDataFnTypes([], "array")); // true
 * console.log(isDataFnTypes({}, "array")); // false
 *
 * 可判断类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap
 * 
 */
export const isDataFnTypes = (val, type) => {
	const dataType = Object.prototype.toString.call(val).replace(/\[object (\w+)\]/, "$1").toLowerCase();
  	return type ? dataType === type : dataType;
}
