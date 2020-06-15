import Vue from 'vue';
import App from './components/App';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import mercy from './core/mercy';
import Tips from './components/Tips/Tips';

mercy.init();
Vue.use(Tips);
Vue.config.productionTip = false;

Vue.component('lottie', function (resolve) {
    require(['./components/Lottie'], resolve);
});
let vmData = {
};

let vmMethods = {
};

let vmComponents = {
    App
};

mercy.vm = new Vue({
    router,
    store,
    data: vmData,
    methods: vmMethods,
    components: vmComponents
}).$mount('#app');