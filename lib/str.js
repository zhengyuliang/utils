/**
 * 去掉字符左右空格
 * @param {String} str 字符
 */
export const strTrimLeftOrRight = str => {
  return str.replace(/(^\s*)|(\s*$)/g, "")
}

/**
 * 判断字符是否包含某值
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strInclude = (str, value) => {
  return str.includes(value)
}

/**
 * 判断字符是否以某个字符开头
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const strBeginWith = (str, value) => {
  return str.indexOf(value) === 0
}

/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export const strReplace = (str, valueOne, valueTwo) => {
  return str.replace(new RegExp(valueOne,'g'), valueTwo)
}

/**
 * 将字母全部转化成大写
 * @param {String} str 字符
 */
export const strToCapital = (str) => {
  return str.toUpperCase()
}

/**
 * 将字母全部转化成小写
 * @param {String} str 字符
 */
export const strToLowercase = (str) => {
  return str.toLowerCase()
}

/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const strToCapitalLetter = (str) => {
  const strOne = str.toLowerCase()
  return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}

/**
 * 去掉字符串空格
 * @param {String} str 字符
 * @param {Number} type 1-所有空格  2-前后空格  3-前空格 4-后空格
 */
export const strTrim = (str,type) => {
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
}

/**
 * 字母大小写切换
 * @param {String} str 字符
 * @param {Number} type 1:首字母大写  2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
 */
export const strChangeCase = (str,type) =>
{
    function ToggleCase(str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else{
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

/**
 * 字符串循环复制
 * @param {String} str 字符
 * @param {Number} count 次数
 */
export const strRepeatCount = (str, count = 1) => {
    let text = '';
    for (let i = 0; i < count; i++) {
        text += str;
    }
    return text;
}

/**
 * 过滤字符串的表情
 * @param {String} str 字符
 * @param {String} replaceStr 表情
 */
export const strFilterEmjoy = (str, replaceStr = '') => {
    return str.replace(/[^\u4e00-\u9fa5|\u0000-\u00ff|\u3002|\uFF1F|\uFF01|\uff0c|\u3001|\uff1b|\uff1a|\u3008-\u300f|\u2018|\u2019|\u201c|\u201d|\uff08|\uff09|\u2014|\u2026|\u2013|\uff0e]/ig, replaceStr)
}