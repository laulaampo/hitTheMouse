/**
 * 业务服务器
 * 用于解析服务器推送过来的消息，分发出业务指令。
 */
import request from './request';
import QS from 'qs';
import conn from './connector';
import main from './service_main';
import util from '../core/util';

const Config = require('../core/config');

let Interface = Object.assign({}, main),
    service = {};

/**
 * 发送http请求
 * @type 指令
 * @data 请求参数
 * @cancel 取消回调
 * */
service.send = function (type, data, cancel) {
    const config = Interface[type];

    if (!config) {
        console.error(`${type} is undefined`);
        return;
    }

    let { methods, url, emit } = config;

    // 添加接口地址、lxt参数、随机数
    url = Config.requestRul[Config.Debug === 0 ? 0 : 1] + url + '?lxt=' + util.getLxt() + '&_r=' + util.rnd(100000, 999999);
    url += (data ? `&${QS.stringify(data)}` : '');

    request[methods](url, data, cancel)
        .then((res) => {
            for (let i in emit) {
                conn.emit(emit[i], res);
            }
        }).catch((e) => {
            for (let i in emit) {
                conn.emit(emit[i], {
                    code: 500,
                    error: e,
                    msg: '响应失败'
                });
            }
            console.error(e);
        });
};

// module.exports = service;
export default service;
