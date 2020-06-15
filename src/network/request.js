// 封装请求器
import axios from 'axios';
import QS from 'qs';

// 创建axios实例
const service = axios.create({
    // baseURL: ipObj.baseip, // request的base_url
    // `withCredentials` 表示跨域请求时是否需要使用凭证
 	// withCredentials: true, // 默认的false
    // timeout: 8000, // 请求超时时间
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
});

// request拦截器
service.interceptors.request.use(config => {
    // 关注业务列表请求需要修改Content-Type
    if (typeof config.data === 'object' && config.data.modifyHeaders) {
        config.headers['Content-Type'] = 'application/json';
        delete config.data.modifyHeaders;
        config.data = JSON.stringify(config.data.tags);
    } else {
        // 参数序列化
        config.data = QS.stringify(config.data);
    }
    return config;
}, error => {
    // console.log("请求失败")
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        // 返回数据后进行操作
        if (response.status === 200) {
            let data = response.data;
            return Promise.resolve(data);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        // 失败请求操作
        return Promise.reject(error);
    }
);

/*
    @params
    url:链接
    method:请求方法
    params:请求参数
    cancel:暴露的撤销请求函数
*/
var request = function (url, method, params = {}, cancel) {
    if (!url || !method) {
        console.error('Parameter error');
        return;
    }
    if (!params) params = {};

    var request;
    if (method.toLocaleLowerCase() === 'get') {
        request = request.get(url, cancel);
    } else {
        request = request.post(url, params, cancel);
    }
    return request;
};

/*
    @params
    url:链接
    cancel:暴露的撤销请求函数
*/
request.get = function (url, params = {}, cancel) {
    if (!url) {
        console.error('Parameter error');
        return;
    }

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (cancel instanceof Function) cancel(source.cancel);

    return service.get(url, {
        cancelToken: typeof cancel === 'object' ? source.token : ''
    });
};

/*
    @params
    url:链接
    params:post参数
    cancel:暴露的撤销请求函数
*/
request.post = function (url, params = {}, cancel) {
    if (!url) {
        console.error('Parameter error');
        return;
    }
    if (!params) params = {};

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (cancel instanceof Function) cancel(source.cancel);

    return service.post(url, params, {
        cancelToken: typeof cancel === 'object' ? source.token : ''
    });
};

/*
    @params
    url:链接
    cancel:暴露的撤销请求函数
*/
request.delete = function (url, params = {}, cancel) {
    if (!url) {
        console.error('Parameter error');
        return;
    }

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (cancel instanceof Function) cancel(source.cancel);

    return service.delete(url, {
        cancelToken: typeof cancel === 'object' ? source.token : ''
    });
};

/*
    @params
    url:链接
    cancel:暴露的撤销请求函数
*/
request.put = function (url, params = {}, cancel) {
    if (!url) {
        console.error('Parameter error');
        return;
    }
    if (!params) params = {};

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (cancel instanceof Function) cancel(source.cancel);

    return service.put(url, params, {
        cancelToken: typeof cancel === 'object' ? source.token : ''
    });
};

export default request;