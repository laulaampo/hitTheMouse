<template>
<div class="award-game">
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
.award-game{
    width: 400px;
    height: 100px;
    position: absolute;
    top: 220px;
    left: 50%;
    margin-left: -200px;
}
</style>