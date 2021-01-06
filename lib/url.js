/**
 * 获取 url 后面通过?传参的参数
 * @param {String} name
 */
export function getQueryString(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const url = window.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const r = search.match(reg)
  if (r != null) return unescape(r[2])
  return null
}

/**
 * 设置url参数
 * @param {String} url 地址
 * @param { Object } obj 参数对像
 * @return { String } 返回参数
 */
export const setUrlParam = (url, obj) => {
    let _rs = [];
    for (let p in obj) {
        if (obj[p] !== null && obj[p] !== '' && obj[p] !== undefined) {
            _rs.push(p + '=' + obj[p])
        }
    }
    return url + '?' + _rs.join('&');
}

/**
 * 获取url参数
 * @param {String} url 地址 默认当前浏览器地址
 * @return { Object } 返回参数
 */
export const getUrlParam = (url = window.location.href) => {
    let _param = url.substring(url.indexOf('?') + 1).split('&'),
        _rs = {}, pos;
    for (let i = 0, _len = _param.length; i < _len; i++) {
        pos = _param[i].split('=');
        if (pos.length === 2) {
            _rs[pos[0]] = pos[1];
        }
    }
    return _rs;
}