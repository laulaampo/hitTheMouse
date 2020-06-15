<template>
<div class="log-view panel-view">
    <div class="mask" @click="hideView"></div>
    <div class="panel log">
        <img src="../assets/panel-close.png" alt="" class="close" @click="hideView">
        <div class="content-wrap">
            <div class="l-title">
                <span>时间</span>
                <span>奖励</span>
            </div>
            <div class="scroll-wrap">
                <div class="wrapper">
                    <div class="time">06-03 15:00</div>
                    <div class="result">
                        100亿
                    </div>
                </div>
                <div class="wrapper">
                    <div class="time">06-03 15:00</div>
                    <div class="result">
                        <img src="static/img/food/cheey.png" alt="">
                    </div>
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
        };
    },
    methods: {
        // 关闭弹窗
        hideView () {
            this.$emit('toggleChildPanel', 'log', false);
        }
    }
};
</script>

<style lang="scss" scoped>
.log-view{
    .panel{
        height: 947px;
        background: {
            image: url('../assets/bg-log.png');
        };
        .close{
            top: 140px;
        }
        .content-wrap{
            height: 550px;
            margin-top: 270px;
            overflow: auto;
            .l-title{
                height: 60px;
                background: rgba(253,236,209,1);
                border-radius: 6px;
                display: flex;
                align-items: center;
                color: #C26549;
                font-size: 28px;
                span{
                    width: 50%;
                    text-align: center;
                    display: block;
                }
            }
            .scroll-wrap{
                height: calc(100% - 70px);
                margin-top: 10px;
                overflow-y: scroll;
                .wrapper{
                    height: 88px;
                    border-bottom: 1px solid #FFE8CE;/*no*/
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .time{
                        width: 50%;
                        color: #666666;
                        font-size: 28px;
                        text-align: center;
                    }
                    .result{
                        width: 50%;
                        color: #FF5B16;
                        font-size: 30px;
                        text-align: center;
                        img{
                            width: 60px;
                            height: 60px;
                        }
                    }
                }
            }
        }
    }
}
</style>