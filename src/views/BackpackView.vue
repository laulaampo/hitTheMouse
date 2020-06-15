<template>
<div class="backpack-view panel-view">
    <div class="mask" @click="hideView"></div>
    <div class="panel backpack">
        <img src="../assets/panel-close.png" alt="" class="close" @click="hideView">
        <div class="content-wrap">
            <div class="wrapper">
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
            </div>
            <div class="wrapper">
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
            </div>
            <div class="wrapper">
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
                <div class="fruit-wrap">
                    <img src="static/img/food/cheey.png" alt="">
                    <div class="count">1</div>
                </div>
            </div>
            <img src="../assets/btn-backpack.png" alt="" class="button">
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
            this.$emit('toggleChildPanel', 'backpack', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.backpack-view{
    .panel{
        height: 947px;
        background: {
            image: url('../assets/bg-backpack.png')
        };
        .close{
            top: 140px;
        }
        .content-wrap{
            height: 550px;
            margin-top: 270px;
            overflow: auto;
            width: calc(100% - 106px);
            .wrapper{
                width: 510px;
                height: 130px;
                display: flex;
                padding: 12px 26px;
                margin-bottom: 30px;
                margin-top: 10px;
                background: {
                    image: url('../assets/bg-bwrapper.png');
                    size: 100% 100%;
                };
                .fruit-wrap{
                    width: 104px;
                    height: 108px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: {
                        image: url('../assets/bg-backpack-food.png');
                        size: 100% 100%;
                    };
                    img{
                        width: 80px;
                        height: 80px;
                    }
                    .count{
                        width: 44px;
                        height: 32px;
                        border: 2px solid rgba(47,157,97,1);
                        background: linear-gradient(180deg,rgba(91,205,107,1) 0%,rgba(0,180,150,1) 100%);
                        border-radius: 20px;
                        position: absolute;
                        bottom: 0;
                        right: -20px;
                        color: #fff;
                        font-size: 24px;
                        text-align: center;
                    }
                    &:nth-child(2), &:nth-child(4){
                        margin-left: 20px;
                    }
                    &:nth-child(3){
                        margin-left: 50px;
                    }
                }
            }
            .button{
                display: block;
                width: 332px;
                height: 108px;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
            }
        }
    }
}
</style>