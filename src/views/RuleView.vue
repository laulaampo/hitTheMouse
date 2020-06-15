<template>
<div class="rule-view panel-view">
    <div class="mask" @click="hideView"></div>
    <div class="panel rule">
        <img src="../assets/title-rule.png" alt="" class="title">
        <img src="../assets/panel-close.png" alt="" class="close" @click="hideView">
        <div class="content-wrap">
            <p class="rule-text">
                1、每次游戏需要花费1亿乐币，同时获得9个套圈，砸中地鼠可获得奖励。<br>
                2、游戏过程中可获得地鼠身上掉落的水果，在兑换界面可按指定水果组合，兑换相应乐币。<br>
                3、当天打地鼠结果达到-800亿，则无法继续游戏，游戏只是娱乐，要适度哦~<br>
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        hideView () {
            this.$emit('toggleChildPanel', 'rule', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.rule-text{
    padding-top: 20px;
    color: #333;
    line-height: 56px;
    font-size: 28px;
}
</style>