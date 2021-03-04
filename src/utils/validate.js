/**
 * 过滤特殊字符串-方法1
 */
function stripscript1(str) { 
    var pattern=/[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
    return str.replace(pattern,"");
}

/**
 * 过滤特殊字符串-方法2
 */
