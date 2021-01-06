/**
 * 获取年份
 */
export const getYear = () => {
  return new Date().getFullYear()
}

/**
 * 获取当前月份
 * @param {Boolean} fillFlag 布尔值,是否补 0,默认为 true
 */
export const getMonth = (fillFlag=true) => {
  const mon = new Date().getMonth() + 1
  const monRe = mon
  if (fillFlag) mon < 10 ? `0${mon}` : mon
  return monRe
}

/**
 * 获取日
 * @param {Boolean} fillFlag 布尔值,是否补 0
 */
export const getDay = (fillFlag=true) => {
  const day = new Date().getDate()
  const dayRe = day
  if (fillFlag) day < 10 ? `0${day}` : day
  return dayRe
}

/**
 * 获取星期几
 */
export const getWhatDay = () => {
  return new Date().getDay() ? new Date().getDay() : 7
}

/**
 * 获取当前月天数
 * @param {String} year 年份
 * @param {String} month 月份
 */
export const getMonthNum = (year, month) => {
  var d = new Date(year, month, 0)
  return d.getDate()
}

/**
 * 获取当前时间 yyyy-mm-dd,hh:mm:ss
 */
export const getYyMmDdHhMmSs = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minu = date.getMinutes()
  const second = date.getSeconds()
  const arr = [month, day, hours, minu, second]
  arr.forEach(item => {
    item < 10 ? '0' + item : item
  })
  return (
    year +
    '-' +
    arr[0] +
    '-' +
    arr[1] +
    ' ' +
    arr[2] +
    ':' +
    arr[3] +
    ':' +
    arr[4]
  )
}

function getzf(time){
  return +time<10?`0${time}`:time
}

/**
 * 时间戳转化为年月日
 * @param times 时间戳
 * @param ymd 格式类型(yyyy-mm-dd,yyyy/mm/dd)
 * @param hms 可选,格式类型(hh,hh:mm,hh:mm:ss)
 * @returns {年月日}
 */
export const timesToYyMmDd = (times, ymd,  hms) => {
  const oDate = new Date(times)
  const oYear = oDate.getFullYear()
  const oMonth = oDate.getMonth() + 1
  const oDay = oDate.getDate()
  const oHour = oDate.getHours()
  const oMin = oDate.getMinutes()
  const oSec = oDate.getSeconds()
  let oTime // 最后拼接时间
  // 年月日格式
  switch (ymd) {
    case 'yyyy-mm-dd':
      oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
      break
    case 'yyyy/mm/dd':
      oTime = oYear + '/' + getzf(oMonth) + '/' + getzf(oDay)
      break
  }
  // 时分秒格式
  switch (hms) {
    case 'hh':
      oTime = ' '+oTime + getzf(oHour)
      break
    case 'hh:mm':
      oTime = oTime + getzf(oHour) + ':' + getzf(oMin)
      break
    case 'hh:mm:ss':
      oTime = oTime + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSec)
      break
  }
  return oTime
}

/**
 * 将年月日转化成时间戳
 * @param {String} time yyyy/mm/dd 或yyyy-mm-dd 或yyyy-mm-dd hh:mm 或yyyy-mm-dd hh:mm:ss
 */
export const YyMmDdToTimes = (time) => {
  return new Date(time.replace(/-/g, '/')).getTime()
}

/**
 * 比较时间 1 小于时间 2
 * @param {String} timeOne  时间 1
 * @param {String} timeTwo  时间 2
 */
export const compareTimeOneLessTwo = (timeOne, timeTwo) => {
  // 判断 timeOne 和 timeTwo 是否
  return new Date(timeOne.replace(/-/g, '/')).getTime()<new Date(timeTwo.replace(/-/g, '/')).getTime()
}

/**
 * 到某一个时间的倒计时
 * @param {String} endTime  时间点
 * @return {{d: number, h: number, m: number, s: number}}
 */
export const getEndTime = (endTime) => {
  let t = +new Date(endTime) - +new Date(); //时间差的毫秒数
  let d = 0,
      h = 0,
      m = 0,
      s = 0;
  if (t >= 0) {
      d = Math.floor(t / 1000 / 3600 / 24);
      h = Math.floor(t / 1000 / 60 / 60 % 24);
      m = Math.floor(t / 1000 / 60 % 60);
      s = Math.floor(t / 1000 % 60);
  }
  return {d, h, m, s}
}

/**
 * 时间格式化
 * @param {String} date  时间点
 * @param {String} fmt  默认时间格式 yyyy-MM-dd hh:mm:ss
 * @return {*}
 */
export const formatDate = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  let _date = new Date(date), _fmt = fmt;
  let o = {
      "M+": _date.getMonth() + 1,
      "d+": _date.getDate(),
      "h+": _date.getHours(),
      "m+": _date.getMinutes(),
      "s+": _date.getSeconds()                 
  };
  if (/(y+)/.test(_fmt)) {
      _fmt = _fmt.replace(RegExp.$1, (_date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
      if (new RegExp("(" + k + ")").test(_fmt)) {
          _fmt = _fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
      }
  }
  return _fmt
}