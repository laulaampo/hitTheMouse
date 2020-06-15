import config from './config';
var util = {};

util.isPcSystem = function () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod'
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};

util.isWxSystem = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
        return true;
    } else {
        return false;
    }
};

util.isLxClient = function () {
    var userAgentInfo = navigator.userAgent;
    var agents = ['lxer_android', 'lxer_ios'];
    var flag = false;
    for (var v = 0; v < agents.length; v++) {
        if (userAgentInfo.indexOf(agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
};

util.toStone = function (num, fixed) {
    if (typeof fixed !== 'number') { fixed = 2; }
    var str = num;
    if (Math.abs(num) >= 100000000) {
        if (num % 100000000 * Math.pow(10, fixed) <= 0) { fixed = 0; }
        if (fixed === 0) { str = Math.floor((num / 100000000)) + '亿'; } else { str = (num / 100000000).toFixed(fixed) + '亿'; }
    } else if (Math.abs(num) >= 10000) {
        if (num % 10000 * Math.pow(10, fixed) <= 0) { fixed = 0; }
        if (fixed === 0) { str = Math.floor((num / 10000)) + '万'; } else { str = (num / 10000).toFixed(fixed) + '万'; }
    }
    return str;
};

util.toTime = function (time) {
    var dt = Date.now() - time;
    if (dt >= 24 * 60 * 60 * 1000) { return Math.floor(dt / (24 * 60 * 60 * 1000)) + '天前'; } else if (dt >= 60 * 60 * 1000) { return Math.floor(dt / (60 * 60 * 1000)) + '小时前'; } else if (dt >= 60 * 1000) { return Math.floor(dt / (60 * 1000)) + '分钟前'; } else if (dt >= 0) { return '刚才'; } else { return ''; }
};

util.timeToNow = function (time) {
    var dt = new Date().getTime() - time;
    if (dt >= 24 * 60 * 60 * 1000) { return Math.floor(dt / (24 * 60 * 60 * 1000)) + '天前'; } else if (dt >= 60 * 60 * 1000) { return Math.floor(dt / (60 * 60 * 1000)) + '小时前'; } else if (dt >= 60 * 1000) { return Math.floor(dt / (60 * 1000)) + '分钟前'; } else if (dt >= 0) { return '刚刚'; }
};
util.timeToNow2 = function (time) {
    var dt = new Date().getTime() - time;
    if (dt >= 60 * 1000 * 10) { return this.fmtDate2(parseInt(time)); } else if (dt >= 60 * 1000) { return Math.floor(dt / (60 * 1000)) + '分钟前'; } else if (dt >= 0) { return '刚刚'; }
};
util.timeToNow3 = function (time) {
    var dt = new Date().getTime() - time;
    if (dt >= 365 * 24 * 60 * 60 * 1000) { return this.fmtDate5(parseInt(time)); } else if (dt >= 24 * 60 * 60 * 1000) { return this.fmtDate(parseInt(time)); } else if (dt >= 60 * 60 * 1000) { return this.fmtDate2(parseInt(time)); } else if (dt >= 60 * 1000) { return Math.floor(dt / (60 * 1000)) + '分钟前'; } else if (dt >= 0) { return '刚刚'; }
};

util.toTime2 = function (useTime, sysTime) {
    useTime = parseInt(useTime);
    if (typeof sysTime === 'undefined') {
        sysTime = Date.now();
    } else {
        sysTime = parseInt(sysTime);
    }

    let diff = util.diffDay(useTime, sysTime);

    // 显示日期
    if (diff < 0 && diff >= -5) {
        return this.fmtDate4(useTime, diff);
    } else if (diff < 0) {
        return this.fmtDate(useTime);
    } else {
        return this.fmtDate2(useTime);
    }
};

util.toTime3 = function (time) {
    let arr = this.formatTime(time);

    if (arr[0] > 0) {
        return this.format('{1}天{2}小时{3}分{4}秒', arr[0], arr[1], arr[2], arr[3]);
    } else if (arr[1] > 0) {
        return this.format('{1}小时{2}分{3}秒', arr[1], arr[2], arr[3]);
    } else if (arr[2] > 0) {
        return this.format('{1}分{2}秒', arr[2], arr[3]);
    } else {
        return this.format('{1}秒', arr[3]);
    }
};

util.toTime4 = function (useTime, sysTime) {
    useTime = parseInt(useTime);
    if (typeof sysTime === 'undefined') {
        sysTime = Date.now();
    } else {
        sysTime = parseInt(sysTime);
    }

    let dateTime = 24 * 60 * 60 * 1000;
    let diffTime = sysTime - useTime;
    let useDay = new Date(useTime).getDate();
    let sysDay = new Date(sysTime).getDate();

    // 显示日期
    if (diffTime > dateTime || useDay !== sysDay) {
        return this.fmtDate(useTime);
    } else {
        return this.fmtDate3(useTime);
    }
};

util.fmtDate = function (obj) {
    let date = new Date(obj);
    let y = 1900 + date.getYear();
    let M = this.zeroize(date.getMonth() + 1);
    let d = this.zeroize(date.getDate());
    let h = this.zeroize(date.getHours());
    let m = this.zeroize(date.getMinutes());
    return this.format('{2}-{3} {4}:{5}', y, M, d, h, m);
};

util.fmtDate2 = function (obj) {
    let date = new Date(obj);
    let h = this.zeroize(date.getHours());
    let m = this.zeroize(date.getMinutes());
    return this.format('{1}:{2}', h, m);
};

util.fmtDate3 = function (obj) {
    let date = new Date(obj);
    let h = this.zeroize(date.getHours());
    let m = this.zeroize(date.getMinutes());
    let s = this.zeroize(date.getSeconds());
    return this.format('{1}:{2}:{3}', h, m, s);
};

util.fmtDate4 = function (obj, diff) {
    let date = new Date(obj);
    let h = this.zeroize(date.getHours());
    let m = this.zeroize(date.getMinutes());

    if (diff === -1) {
        return this.format('昨天 {1}:{2}', h, m);
    } else {
        let days = ['日', '一', '二', '三', '四', '五', '六'];
        let day = days[date.getDay()];
        return this.format('星期{1} {2}:{3}', day, h, m);
    }
};

util.fmtDate5 = function (obj, diff) {
    let date = new Date(Number(obj));
    let y = 1900 + date.getYear();
    let M = this.zeroize(date.getMonth() + 1);
    let d = this.zeroize(date.getDate());
    let h = this.zeroize(date.getHours());
    let m = this.zeroize(date.getMinutes());
    return this.format('{1}-{2}-{3} {4}:{5}', y, M, d, h, m);
};

util.diffDay = function (useTime, sysTime) {
    useTime = parseInt(useTime);
    if (typeof sysTime === 'undefined') {
        sysTime = Date.now();
    } else {
        sysTime = parseInt(sysTime);
    }

    let d1 = new Date(useTime);
    let t1 = d1 - (d1.getHours() * 60 * 60 * 1000) - (d1.getMinutes() * 60 * 1000) - (d1.getSeconds() * 1000) - d1.getMilliseconds();

    let d2 = new Date(sysTime);
    let t2 = d2 - (d2.getHours() * 60 * 60 * 1000) - (d2.getMinutes() * 60 * 1000) - (d2.getSeconds() * 1000) - d2.getMilliseconds();

    return (t1 - t2) / 24 / 60 / 60 / 1000;
};

util.zeroize = function (val, num) {
    if (typeof num === 'undefined') {
        num = 2;
    }
    let str = '';
    for (let i = 0; i < num; i++) {
        str += '0';
    }
    str += val;
    return str.substring(str.length - num);
};

util.clone = function (obj) {
    var str, newobj = obj.constructor === Array ? [] : {};

    try {
        if (typeof obj !== 'object') {
            return;
        } else if (window.JSON) {
            str = JSON['stringify'](obj); // 系列化对象
            newobj = JSON['parse'](str); // 还原
        } else {
            for (var i in obj) {
                newobj[i] = typeof obj[i] === 'object'
                    ? util.clone(obj[i]) : obj[i];
            }
        }

        return newobj;
    } catch (error) {
        console.log('系统异常');
    }
};

// 返回由毫秒数，格式化得到的形如[天,小时,分钟,秒,毫秒]的数组
util.formatTime = function (ms) {
    var a = [0, 0, 0, 0, 0];
    a[4] = ms % 1000;
    a[3] = parseInt(ms / 1000);
    if (a[3] >= 60) {
        a[2] = parseInt(a[3] / 60);
        a[3] = a[3] % 60;
        if (a[2] >= 60) {
            a[1] = parseInt(a[2] / 60);
            a[2] = a[2] % 60;
            if (a[1] >= 24) {
                a[0] = parseInt(a[1] / 24);
                a[1] = a[1] % 24;
            }
        }
    }
    return a;
};

util.stringFormat = function (str) {
    var args = [].slice.call(arguments);
    var result = str;
    for (var i = 1; i < args.length; i++) {
        if (args[i] !== undefined) {
            var reg = new RegExp('({)' + (i - 1) + '(})', 'g');
            result = result.replace(reg, args[i]);
        }
    }
    return result;
};

util.format = function () {
    var str = arguments[0];

    for (var i = 0; i < arguments.length; i++) {
        str = str.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i]);
    }
    return str;
};

util.trim = function (text) {
    if (typeof (text) === 'string') {
        return text.replace(/^\s*|\s*$/g, '');
    } else {
        return text;
    }
};

// 控制平台打印日志
util.log = function () {
    if (config.Debug === 0) {
        return;
    }
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    console.log.apply(console, args);
};

// 控制平台打印警告
util.warn = function () {
    if (config.Debug === 0) {
        return;
    }
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    console.warn.apply(console, args);
};

util.getListByKey = function (list, key, val) {
    for (let i = 0; i < list.length; i++) {
        if (list[i][key] === val) {
            return list[i];
        }
    }
    return null;
};

util.rnd = function (min, max) {
    if (typeof max === 'undefined') {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min)) + min;
};

util.rnd2 = function (min, max, fixed) {
    if (typeof max === 'undefined') {
        max = min;
        min = 0;
        fixed = 2;
    }

    if (typeof fixed !== 'number') fixed = 2;

    return Number((Math.random() * (max - min) + min).toFixed(fixed));
};

// 获取url
util.getPageRawUrl = function () {
    try {
        return 'http://' + location.host + location.pathname + location.search;
    } catch (error) {
        return '';
    }
};

/**
 * 获得地址参数列表
 * @param name
 * @returns {null}
 */
util.getQueryString = function (name, defval) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r, idx = location.search.indexOf('/');
    if (idx === -1) {
        r = location.search.substr(1).match(reg);
    } else {
        r = location.search.substring(1, idx).match(reg);
    }
    if (r != null) { return unescape(r[2]); }
    if (typeof defval !== 'undefined') {
        return defval;
    } else {
        return null;
    }
};

/**
 * 添加地址参数
 * @param url
 * @param name
 * @param value
 * @returns {*}
 */
util.addUrlPara = function (url, name, value) {
    if (/\?/g.test(url)) {
        if (/name=[-\w]{4,25}/g.test(url)) {
            url = url.replace(/name=[-\w]{4,25}/g, name + '=' + encodeURIComponent(value));
        } else {
            url += '&' + name + '=' + encodeURIComponent(value);
        }
    } else {
        url += '?' + name + '=' + encodeURIComponent(value);
    }
    return url;
};

/**
 * 获得cookie
 * @param key
 * @returns {null}
 */
util.getCookie = function (key) {
    var arr, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) { return unescape(arr[2]); } else { return null; }
};

/**
 * 设置cookie
 * @param key,value,days
 */
util.setCookie = function (key, value, days) {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = key + '=' + escape(value) + ';expires=' + exp.toGMTString();
};

/**
 * 删除cookie
 * @param key,value,days
 */
util.delCookie = function (key) {
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var delValue = util.getCookie(key);
    if (delValue) {
        document.cookie = key + '=' + delValue + ';expires=' + date.toGMTString();
    }
};

/**
 * 获取lxt串号
 */
util.getLxt = function () {
    var result = this.getQueryString('lxt');
    if (!result) {
        var cookie = this.getCookie('lexun.com');
        var regex = new RegExp('(lxt)=([^&]*)');
        if (regex.test(cookie)) {
            result = decodeURIComponent(regex.exec(cookie)[2]);
        }
    }
    return result ? result.toString() : '';
};

util.JSONParse = function (jsondata) {
    try {
        return JSON.parse(jsondata);
    } catch (error) {
        return null;
    }
};

// 添加 - 本地存储
util.setLocal = function (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
};
// 获取 - 本地存储
util.getLocal = function (key) {
    return util.JSONParse(window.localStorage.getItem(key));
};
// 删除 - 本地存储
util.delLocal = function (key) {
    window.localStorage.removeItem(key);
};

// 设置localstrong
util.setStorage = function (key, value) {
    var localObj = this.getStorage(key, 1000 * 60 * 10);
    localObj.push(JSON.parse(value));
    // 去除重复元素
    localObj = localObj.reverse();
    for (var i = 0; i < localObj.length - 1; i++) {
        for (var j = i + 1; j < localObj.length; j++) {
            if (localObj[i].userid === localObj[j].userid) {
                localObj.splice(j, 1);
                j--;
            }
        }
    }
    localObj = localObj.reverse();
    // 设置元素
    localStorage.setItem(key, JSON.stringify({
        data: localObj
    }));
};

// 获得localstrong
util.getStorage = function (key, exp) {
    var jsonlocal = localStorage.getItem(key);
    var localObj = JSON.parse(jsonlocal);
    if (localObj == null) {
        return [];
    }
    var date = new Date();
    var validdate = [];
    for (var i = 0; i < localObj.data.length; i++) {
        if (date.getTime() - localObj.data[i].time < exp) {
            validdate.push(localObj.data[i]);
        }
    }
    return validdate;
};

// 节流
util.throttle = function (fun, delay) {
    let last, deferTimer;
    return function (args) {
        let that = this;
        let _args = arguments;
        let now = +new Date();
        if (last && now < last + delay) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fun.apply(that, _args);
            }, delay);
        } else {
            last = now;
            fun.apply(that, _args);
        }
    };
};

// 防抖
util.debounce = function (fun, delay) {
    return function (args) {
        let that = this;
        clearTimeout(fun.id);
        fun.id = setTimeout(function () {
            fun.call(that, args);
        }, delay);
    };
};

export default util;
