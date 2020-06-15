import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 存储状态的对象
const state = {
    isLogin: false, // 是否登录
    platform: { // 平台登录信息
        key: '',
        token: ''
    },
    chatList: [
        {userid: 47897418, nick: 'fucksky'}
    ]
};

// 改变状态的方法集
const mutations = {
    // 如果开启了 ESLint，参数名称不可以为 state 且此处不可以使用箭头函数而是使用 changeDevice(){} 形式
    changeIsLogin: (state, data) => {
        state.isLogin = data;
    },
    changePlatform: (state, data) => {
        state.platform = data;
    }
};

// getter
const getters = {
    // 通过userid去查找用户
    getUserInfoById: (state) => (id) => {
        return state.chatList.find(chat => chat.userid === id);
    }
};

/**
 * 使用方法：
 *   1. 获取状态：
 *      在任意 .vue 文件中，使用 this.$store.state.device 即可获取 device 的 value
 *      若要在 .js 中使用 vuex，需 import 引入 store.js
 *   2. 改变状态：
 *      使用 this.$store.commit('changeDevice','phone') 即可改变 device 的 value 为 'phone'
 * */

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions: {}
});