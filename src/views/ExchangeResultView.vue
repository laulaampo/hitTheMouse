<template>
<div class="eresult-view panel-view">
    <div class="light"></div>
    <div class="mask" @click="hideView"></div>
    <div class="panel eresult">
        <img src="../assets/title-exchange.png" alt="" class="title">
        <img src="../assets/panel-close.png" alt="" class="close" @click="hideView">
        <div class="content-wrap">
            <p class="text">恭喜您获得<span>1000万</span>糖果</p>
            <div class="btn-wrap">
                <img src="../assets/btn-exchange.png" alt="" class="btn">
                <img src="../assets/btn-play.png" alt="" class="btn">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    methods: {
        // 关闭弹窗
        hideView () {
            this.$emit('toggleChildPanel', 'exchange.result', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.eresult-view .panel .content-wrap{
    height: auto;
}
.btn-wrap{
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .btn{
        width: 240px;
        height: 86px;
    }
}
.text{
    color: #333;
    font-size: 32px;
    text-align: center;
    padding: 120px 0;
    span{
        color: #FF5B16;
    }
}
.light{
    width: 750px;
    height: 375px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: {
        image: url('../assets/icon-light.png');
        size: 100% auto;
    };
}
</style>