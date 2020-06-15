<template>
    <div class="operate-container">
        <div class="left-wrapper">
            <img src="../assets/icon-log.png" @click="showPanel('log')" alt="">
            <img src="../assets/icon-backpack.png" @click="showPanel('backpack')" alt="">
        </div>
        <div class="right-wrapper">
            <img src="../assets/icon-auto.png" alt="" class="auto">
            <div class="hit">
                <img src="../assets/icon-hitnum.png" alt="">
                <span>9</span>
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
        // 打开父级弹窗
        showPanel (panel) {
            if (!panel) return;
            this.$emit('toggleChildPanel', panel, true);
        }
    }
};
</script>

<style lang="scss" scoped>
.operate-container{
    width: calc(100% - 100px);
    position: absolute;
    bottom: 26px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 50px;
    .left-wrapper{
        display: flex;
        img{
            width: 100px;
            height: 100px;
            &:first-child{
                margin-right: 34px;
            }
        }
    }
    .right-wrapper{
        display: flex;
        align-items: flex-end;
        .auto{
            width: 140px;
            margin-right: 60px;
        }
        .hit{
            width: 176px;
            height: 176px;
            position: relative;
            img { width: 100%; }
            span {
                position: absolute;
                top: 48%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #FF5B16;
                font-size: 54px;
            }
        }
    }
}
</style>