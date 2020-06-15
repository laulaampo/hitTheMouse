import Vue from 'vue';
import config from '../core/config';
import Router from 'vue-router';

Vue.use(Router);

let routes = [];
let webDir = '/';

webDir = config.webDir[config.Debug];

// 首页
routes.push({
    path: webDir + 'hall/:lxt?',
    name: 'HallPage',
    component: resolve => require(['@/pages/HallPage'], resolve)
});
// 启动页
routes.push({
    path: webDir + '*',
    redirect: {
        name: 'HallPage'
    }
});

export default new Router({ mode: 'history', routes: routes });
