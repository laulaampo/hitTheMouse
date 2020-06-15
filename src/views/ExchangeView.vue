<template>
    <div class="exchange-view">
        <div class="mask"></div>
        <div class="bank-wrap">1块钱</div>
        <div class="container">
            <div class="scroll-view">
                <div class="fruit-container">
                    <div class="title">
                        <h5>兑换两种食物<span>（奖池0.05%）</span></h5>
                        <img src="../assets/btn-exchange-active.png" alt="" class="btn">
                    </div>
                    <div class="wrapper">
                        <div class="group">
                            <img src="static/img/food/corrat.png" alt="">
                            <img src="static/img/food/potato.png" alt="">
                        </div>
                        <div class="group disabled">
                            <img src="static/img/food/corrat.png" alt="">
                            <img src="static/img/food/potato.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.exchange-view{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
    .bank-wrap{
        position: absolute;
        top: 36px;
        left: 26px;
    }
    .container{
        width: 100%;
        height: 1260px;
        position: absolute;
        bottom: 0;
        background: {
            image: url('../assets/bg-exchange.png');
            size: 100% 100%;
        };
        .scroll-view{
            width: calc(100% - 140px);
            margin: auto;
            margin-top: 254px;
            height: calc(100% - 254px);
            overflow-y: scroll;
            .fruit-container{
                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                    h5{
                        color: #645B57;
                        font-size: 28px;
                        text-indent: 22px;
                        position: relative;
                        &::after{
                            content: '';
                            width: 8px;
                            height: 32px;
                            background: rgba(91,205,107,1);
                            border-radius: 60px;
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            margin: auto;
                        }
                        span{ color: #2F9D61; }
                    }
                    .btn{
                        width: 162px;
                        height: 54px;
                    }
                }
                .wrapper{
                    padding: 14px 40px 0 40px;
                    background:rgba(255,224,187,1);
                    border: 2px solid rgba(255,185,104,1);
                    border-radius: 32px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-bottom: 34px;
                    .group{
                        padding: 6px 20px 6px 0;
                        background:#FCC384;
                        border-radius: 38px;
                        margin-bottom: 20px;
                        box-sizing: border-box;
                        border: 1px solid #FFB968;/*no*/
                        // box-shadow: 0px 4px 0px rgba(252,195,132,1);
                        img { width: 40px;margin-left: 20px; }
                        &.disabled{
                            -webkit-filter: grayscale(100%);
                            -moz-filter: grayscale(100%);
                            -ms-filter: grayscale(100%);
                            -o-filter: grayscale(100%);
                            filter: grayscale(100%);
                            filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
                        }
                    }
                }
            }
        }
    }
}
</style>

<script>
export default {

};
</script>