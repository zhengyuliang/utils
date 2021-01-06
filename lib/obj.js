/**
 * 判断两个对象是否相等,目前只支持对象值为简单数据类型的判断
 * @param {Object} oneObj  对象
 * @param {Object} twoObj 对象
 */
export const objIsEqual = (oneObj, twoObj) => {
  return JSON.stringify(oneObj) === JSON.stringify(twoObj)
}

/**
 * 对象深度克隆,
 * JSON.stringify深度克隆对象
 * 无法对函数 、RegExp等特殊对象的克隆,
 * 会抛弃对象的constructor,所有的构造函数会指向Object
 * 对象有循环引用,会报错
 * @param {Object}  obj 克隆的对象
 */
export const objDeepClone = obj => {
  return clone(obj)
}

const isType = (obj, type) => {
  if (typeof obj !== 'object') return false;
  // 判断数据类型的经典方法：
  const typeString = Object.prototype.toString.call(obj);
  let flag;
  switch (type) {
    case 'Array':
      flag = typeString === '[object Array]';
      break;
    case 'Date':
      flag = typeString === '[object Date]';
      break;
    case 'RegExp':
      flag = typeString === '[object RegExp]';
      break;
    default:
      flag = false;
  }
  return flag;
};

/**
* deep clone
* @param  {[type]} parent object 需要进行克隆的对象
* @return {[type]}        深克隆后的对象
*/
const clone = parent => {
  // 维护两个储存循环引用的数组
  const parents = []
  const children = []

  const _clone = parent => {
    if (parent === null) return null
    if (typeof parent !== 'object') return parent

    let child, proto

    if (isType(parent, 'Array')) {
      // 对数组做特殊处理
      child = []
    } else if (isType(parent, 'RegExp')) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (isType(parent, 'Date')) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利用Object.create切断原型链
      child = Object.create(proto)
    }

    // 处理循环引用
    const index = parents.indexOf(parent)

    if (index !== -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)

    for (const i in parent) {
      // 递归
      child[i] = _clone(parent[i])
    }

    return child
  }
  return _clone(parent)
}


function checkValue(val, vals) {
    let _val = val;
    if (Number.isNaN(val)) {
        _val = 'NaN'
    }
    return vals.indexOf(_val) !== -1;
}

/**
 * @description 清除对象中值为空的属性
 * @param {Object} obj
 * @param {Array} clearValues 默认值[null, undefined, '']
 * @return {{}}
 */
export const objClearKeys = (obj, clearValues = [null, undefined, '']) => {
    clearValues.forEach((item, index) => {
        clearValues[index] = Number.isNaN(item) ? 'NaN' : item
    });
    let _newPar = {};
    for (let key in obj) {
        if (!checkValue(obj[key], clearValues)) {
            _newPar[key] = obj[key];
        }
    }
    return _newPar;
}

/**
 * @description 设置对象中值为空的属性的默认值
 * @param {Object} obj
 * @param {Array} fillValues 默认值[null, undefined, '']
 * @param {String} val 默认值'--'
 * @return {{}}
 */
export const objFillKeys = (obj, fillValues = [null, undefined, ''], val = '--') => {
    fillValues.forEach((item, index) => {
        fillValues[index] = Number.isNaN(item) ? 'NaN' : item
    });
    let _newPar = {};
    for (let key in obj) {
        _newPar[key] = checkValue(obj[key], fillValues) ? val : obj[key];
    }
    return _newPar;
}