<template>
<div class="buy-view panel-view">
    <div class="mask" @click="hideView"></div>
    <div class="panel buy">
        <img src="../assets/title-buy.png" alt="" class="title">
        <img src="../assets/panel-close.png" alt="" class="close" @click="hideView">
        <div class="content-wrap">
            <p class="cost">本次打地鼠需要<span>1000万</span>糖果</p>
            <div class="btn-wrap">
                <img src="../assets/btn-buy.png" alt="" class="btn">
                <div class="tip" @click="toggleCheck">
                    <img src="../assets/buy-check.png" alt=""  v-if="isCheck">
                    <span v-else></span>
                    <i>今日不再提示</i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            isCheck: false
        };
    },
    methods: {
        // 关闭弹窗
        hideView () {
            this.$emit('toggleChildPanel', 'buy', false);
        },

        // 取消选择
        toggleCheck () {
            this.isCheck = !this.isCheck;
        }
    }
};
</script>

<style lang="scss" scoped>
.buy-view .panel .content-wrap{
    height: auto;
}
.cost{
    font-size: 32px;
    color: #333;
    text-align: center;
    padding: 120px 0;
    span{
        color: #FF5B16;
    }
}
.btn-wrap{
    .btn{
        width: 332px;
        height: 108px;
        display: block;
        margin: auto;
    }
    .tip{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        color: #A19590;
        font-size: 24px;
        span{
            display: block;
            width: 32px;
            height: 32px;
            background: rgba(255,255,255,1);
            border: 2px solid rgba(203,196,194,1);
            border-radius: 50%;
            box-sizing: border-box;
        }
        img{
            width: 32px;
            height: 32px;
        }
        i{
            margin-left: 16px;
        }
    }
}
</style>