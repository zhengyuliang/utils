/*
* @Author: zhengyuliang
* @Date:   2020-11-17 16:34:54
* @Last Modified by:   zhengyuliang
* @Last Modified time: 2021-01-06 15:32:23
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

/**
 * 随机返回一个范围的数字
 * @param {number} n1
 * @param {number}
 * @return {number}
 */
export const randomNumber = (n1, n2) => {
    switch (arguments.length) {
        case 2:
            return Math.round(n1 + Math.random() * (n2 - n1));
        case 1:
            return Math.round(Math.random() * n1);
        default:
            return Math.round(Math.random() * 100000000);
    }
}

/**
 * 随机产生颜色
 * @param {number} sum
 * @return {string}
 */
export const randomColor = (sum) => {
    if (sum) {
        return '#' + Math.random().toString(16).substring(2).substr(0, 6);
    }
    else {
        return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    }
}