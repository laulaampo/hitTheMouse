<template>
<div class="hall-page">
    <!-- 游戏顶部 -->
    <GameHeader @toggleChildPanel="toggleChildPanel" />

    <!-- 游戏主体 -->
    <GameMain />

    <!-- 游戏操作 -->
    <GameOperate @toggleChildPanel="toggleChildPanel" />

    <!-- 获奖弹窗 -->
    <transition name="panel">
        <AwardGame />
    </transition>
    <!-- 兑换 -->
    <transition name="slide-up">
        <ExchangeView @toggleChildPanel="toggleChildPanel" v-if="displayExchange" />
    </transition>

    <!-- 游戏规则 -->
    <transition name="panel">
        <RuleView @toggleChildPanel="toggleChildPanel" v-if="displayRule" />
    </transition>

    <!-- 购买 -->
    <transition name="panel">
        <BuyView @toggleChildPanel="toggleChildPanel" v-if="displayBuy" />
    </transition>

    <!-- 兑换结果弹窗 -->
    <transition name="panel">
        <ExchangeResult @toggleChildPanel="toggleChildPanel" v-if="displayExchangeResult" />
    </transition>

    <!-- log -->
    <transition name="panel">
        <LogView @toggleChildPanel="toggleChildPanel" v-if="displayLog" />
    </transition>

    <!-- 食物篮子 -->
    <transition name="panel">
        <BackpackView @toggleChildPanel="toggleChildPanel" v-if="displayPackage" />
    </transition>

</div>
</template>

<script>
// import conn from './../network/connector';
// import util from './../core/util';

import GameHeader from './../components/GameHeader';
import GameMain from './../components/GameMain';
import GameOperate from './../components/GameOperate';
import ExchangeView from './../views/ExchangeView';
import RuleView from './../views/RuleView';
import BuyView from './../views/BuyView';
import ExchangeResult from './../views/ExchangeResultView';
import LogView from './../views/LogView';
import BackpackView from './../views/BackpackView';
import AwardGame from './../views/AwardGame';

export default {
    components: {
        'GameHeader': GameHeader,
        'GameMain': GameMain,
        'GameOperate': GameOperate,
        // 子组件
        'ExchangeView': ExchangeView,
        'RuleView': RuleView,
        'BuyView': BuyView,
        'ExchangeResult': ExchangeResult,
        'LogView': LogView,
        'BackpackView': BackpackView,
        'AwardGame': AwardGame
    },

    data () {
        return {
            displayExchange: false,
            displayExchangeResult: false,
            displayRule: false,
            displayBuy: false,
            displayLog: false,
            displayPackage: false
        };
    },

    methods: {
        // 子组件显示状态
        toggleChildPanel (type, data) {
            console.log('event', type, data);
            /* eslint-disable */ 
            switch (type) {
                // 规则弹窗
                case 'rule':
                    this.displayRule = data;
                    break;
                // 兑换弹窗
                case 'exchange':
                    this.displayExchange = data;
                    break;
                // 兑换弹窗返回
                case 'exchange.result':
                    this.displayExchange = data;
                    break;
                // 购买弹窗
                case 'buy':
                    this.displayBuy = data;
                    break;
                // 游戏记录弹窗
                case 'log':
                    this.displayLog = data;
                    break;
                // 背包
                case 'backpack':
                    this.displayPackage = data;
                    break;
                default: break;
            }
            /* eslint-disable */ 
        }
    },

    created () {

    },

    destroyed () {

    }

};
</script>

<style lang="scss" scoped="">
.hall-page{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background: {
        image: url('./../assets/bg-main.png');
        size: 100%;
    };
}

@media screen and (min-width: 799px) {
    .hall-page{
        height: 100%;
        position: relative;
        background: {
            image: url('./../assets/bg-main.png');
        };
    }
}
</style>