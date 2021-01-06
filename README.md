## 使用

0.0.3版本更新了使用方式，可以分开调用

```
npm i -S @synthesisdots/utils  
import { arrJudge } from '@synthesisdots/utils'  
console.log(arrJudge(['1','2']))
```


## arr.js 12
备注:目前数组相关工具类只支持一维数组  

|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|arrJudge|判断是否是数组|Boolean 值|arr|0.0.3|
|arrRemoveRepeat|移除数组中重复的项|arr|Array，处理的数组值|0.0.3|
|arrOrderAscend|数组排序|arr|Array，处理的数组值|0.0.3|
|arrMax|数组中最大值|arr|Array，处理的数组值|0.0.3|
|arrSum|数组求和|arr|Array，处理的数组值|0.0.3|
|arrObjSum|数组对象求和|arr|Array，处理的数组值|0.0.3|
|arrConcat|数组合并|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|0.0.3|
|arrIncludeValue|数组中是否包含某值|arr： 数组； value： 判断的值|Array，处理的数组值|0.0.3|
|arrAndSet|数组并集|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|0.0.3|
|arrIntersection|数组交集|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|0.0.3|
|arrDifference|数组差集|arrOne：数组一；arrTwo：数组二|Array，处理的数组值|0.0.3|
|arrTwoToArrObj|数组合并成对象数组|arrOne：数组一；arrTwo：数组二；oneKey：属性一(选传)；twoKey：属性一(选传)|Array，处理的数组值|0.0.3|

## check.js 10
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|checkNum|判断是否是数字|data： 判断的值|Boolean 值| 0.0.3|
|checkLetter|判断是否是数字|data|Boolean 值|0.0.3|
|checkLowercaseLetter|判断是否全部是小写字母|Boolean 值|data|0.0.3|
|checkCapitalLetter|判断是否是大写字母|data|Boolean 值|0.0.3|
|checkNumOrLetter|判断是否是字母或数字|data|Boolean 值|0.0.3|
|checkChinese|判断是否是中文|data|Boolean 值|0.0.3|
|checkChineseNumberLettter|判断是否是中文，数字或字母|Boolean 值|data|0.0.3|
|checkEmail| 判断是否是邮箱|Boolean 值| data|0.0.3|
|checkTelphone|判断是否是手机号|Boolean 值|data|0.0.3|
|checkUrl| 判断是正确的网址| data|Boolean 值|0.0.3|

## client.js 4
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|checkBrowser|判断浏览器|-|trident：IE；presto：opera；webKit：苹果、谷歌内核；gecko：火狐；|0.0.3|
|checkIosAndroidIpad|判断客户端类型|-|ios：ios；android：android；iPad：iPad；|0.0.3|
|checkWeixinQqUc|判断微信,qq 或uc|-|weixin：微信； qq：qq；uc：uc；|0.0.3|
|checkIsIphoneX|判断是否是 iPhoneX 序列|-| Boolean|0.0.3|

## file.js 1
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|fileFormatSize|格式化文件单位| size|String： 处理后的文件数字和单位| 0.0.3|

## obj.js 2
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|objIsEqual|判断两个对象是否相等| oneObj：对象一；twoObj：对象二；| Boolean| 0.0.3|
|objDeepClone|对象深度拷贝| obj：克隆的对象；|  obj：克隆后的对象；| 0.0.3|

## storage.js 11
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|localStorageSet|localStorage 存贮| key：存贮属性；value：存贮属性值；| -| 0.0.3|
|localStorageGet|localStorage 获取| key：获取属性；|存贮属性值| 0.0.3|
|localStorageRemove|localStorage 删除| key：删除属性；| -| 0.0.3|
|localStorageSetExpire|localStorage 存贮一段时间| key：存贮属性；value：存贮属性值；expire：有效期,单位毫秒；| -| 0.0.3|
|sessionStorageSet|sessionStorageSet 存贮| key：存贮属性；value：存贮属性值；| -| 0.0.3|
|sessionStorageGet|sessionStorage 获取| key：获取属性；| 存贮属性值| 0.0.3|
|sessionStorageRemove|sessionStorage 删除| key：删除属性；| -| 0.0.3|
|sessionStorageSetExpire|sessionStorage 存贮一段时间| key：存贮属性；value：存贮属性值；expire：有效期,单位毫秒；| -| 0.0.3|
|cookieSet|cookieSet 存贮一段时间| key：存贮属性；value：存贮属性值；expire：有效期,单位天；| -| 0.0.3|
|cookieGet|cookie 获取| key：获取属性；| 存贮的属性值| 0.0.3|
|cookieRemove|cookie 删除| key：删除属性；| -| 0.0.3|

## str.js 7
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|strTrimLeftOrRight|去除字符左右空格| str：处理字符；|处理后的字符| 0.0.3|
|strInclude|字符是否包含| str：处理字符；value：需要判断的值；| Boolean| 0.0.3|
|strBeginWith| 字符是否以某一字符开头| str：处理字符；value：需要判断的值；|Boolean| 0.0.3|
|strReplace|字符替换成另一字符| str：处理字符；valueOne：需要替换的值；valueTwo：替换后的值；|处理后的字符| 0.0.3|
|strToCapital| 字符全部转化成大写| str：处理字符；|处理后的字符| 0.0.3|
|strToLowercase| 字符全部转化成小写| str：处理字符；|处理后的字符| 0.0.3|
|strToCapitalLetter| 字符转化成以大写开头| str：处理字符；|处理后的字符| 0.0.3|
|strTrim| 去掉字符串空格| str：处理字符；type：1-所有空格  2-前后空格  3-前空格 4-后空格；|处理后的字符| 0.0.3|
|strChangeCase| 字母大小写切换| str：处理字符；type：1:首字母大写  2：首页母小写 3：大小写转换 4：全部大写 5：全部小写|处理后的字符| 0.0.3|

## thrDeb.js 2
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|throttle|节流|func：处理函数；delay：延时；|执行函数| 0.0.3|
|debounce|防抖|func：处理函数；delay：延时；|执行函数| 0.0.3|

## time.js 9
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|getYear|获取当前年份|-|年份值| 0.0.3|
|getMonth|获取当前月份|-|月份值| 0.0.3|
|getDay|获取当前日|-|日值| 0.0.3|
|getWhatDay|获取当前星期几|-|星期几| 0.0.3|
|getMonthNum|获取当前月份天数|-|月份天数值| 0.0.3|
|getYyMmDdHhMmSs|获取当前时间|-|当前时间：yyyy-mm-dd,hh:mm:ss| 0.0.3|
|timesToYyMmDd|时间戳转化为年月日|times：时间戳；ymd：格式类型,值可为yyyy-mm-dd,yyyy/mm/dd；hms：时分秒,值可为；hh,hh:mm,hh:mm:ss|处理后的年月日| 0.0.3|
|YyMmDdToTimes|年月日转化成时间戳|yyyy/mm/dd 或yyyy-mm-dd 或yyyy-mm-dd hh:mm 或yyyy-mm-dd hh:mm:ss|时间戳| 0.0.3|
|compareTimeOneLessTwo|比较时间一小于二|timeOne：时间一；timeTwo：时间二；| Boolean| 0.0.3|

## url.js 1
|方法名|作用|参数|返回值|版本|
|--|--|--|--|--|
|getQueryString|获取路由传参| name:传参属性|属性值| 0.0.3|

## fn.js 1

| 方法名        | 作用         | 参数                   | 返回值 | 版本  |
| ------------- | ------------ | ---------------------- | ------ | ----- |
| isDataFnTypes | 判断数据类型 | val:传参属性 type:类型 | 属性值 | 0.0.3 |

> 此公共处理方式，会不断更新，每次更新版本