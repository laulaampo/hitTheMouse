<template>
    <div class="header-container">
        <div class="top-btns">
            <img src="../assets/icon-home.png" alt="" class="home">
            <button class="rule" @click="showPanel('rule')">规则</button>
            <div class="candy-wrap" @click="showIframe('store')">
                100亿
                <a></a>
            </div>
            <div class="hf-wrap">10.11</div>
            <div class="jd-wrap">10.11</div>
        </div>
        <div class="bottom-btns">
            <div class="bank-wrap">3000亿</div>
            <div class="link-wrap">
                <img src="../assets/icon-rank.png" alt="" @click="showIframe('rank')">
                <img src="../assets/icon-store.png" alt="" @click="showIframe('store')">
                <img src="../assets/icon-act.png" alt="" @click="showIframe('rank')">
            </div>
        </div>

        <!-- iframe -->
        <iframe
            :src="iframeUrl + view"
            frameborder="0"
            title="iframe"
            class="plugin-iframe"
            v-if="displayIframe"
        ></iframe>
    </div>
</template>

<script>
export default {
    data () {
        return {
            displayIframe: false,
            iframeUrl: 'http://f8.lexun.com/chatroom/hall?view=',
            view: ''
        };
    },

    methods: {
        // 打开iframe
        showIframe (view) {
            if (!view) return;

            this.view = view;
            this.displayIframe = true;
        },

        // 关闭iframe
        hideIframe (e) {
            console.log('message', e);
            switch (e.data) {
            // 关闭iframe
            case 'close.iframe':
                this.displayIframe = false;
                break;
            default: break;
            }
        },

        // 打开父级页面弹窗
        showPanel (panel) {
            if (!panel) return;

            this.$emit('toggleChildPanel', panel, true);
        }
    },

    created () {
        window.addEventListener('message', this.hideIframe, false);
    },

    destroyed () {
        window.removeEventListener('message', this.hideIframe, false);
    }
};
</script>

<style lang="scss" scoped>
.header-container{
    padding: 30px 32px 0 32px;
    padding-top: 30px;
    .top-btns{
        display: flex;
        align-items: center;
        .home{
            width: 48px;
            height: 48px;
            margin-right: 16px;
        }
        .rule{
            width: 88px;
            height: 44px;
            background: rgba(47,157,97,1);
            border: 4px solid rgba(91,205,107,1);
            box-sizing: border-box;
            font-size: 24px;
            color:rgba(255,255,255,1);
            -webkit-text-stroke:0.4000000059604645 rgba(255,255,255,1);
            text-stroke: 0.4000000059604645 rgba(255,255,255,1);
            border-radius: 60px;
        }
        @mixin assetsWrap($w, $h, $ml, $bg){
            width: $w;
            height: $h;
            margin-left: $ml;
            color: #fff;
            font-size: 26px;
            line-height: $h;
            text-indent: 56px;
            background: {
                image: url('../assets/bg-' + $bg + '.png');
                size: 100% 100%;
            };
        }
        .candy-wrap{
            @include assetsWrap(200px, 48px, 24px, 'candy');
            position: relative;
            a{
                width: 36px;
                height: 36px;
                position: absolute;
                right: 5px;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        }
        .hf-wrap{
            @include assetsWrap(140px, 48px, 14px, 'hf');
        }
        .jd-wrap{
            @include assetsWrap(140px, 48px, 14px, 'jd');
        }
    }
    .bottom-btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 26px;
        .link-wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 320px;
            img {
                width: 92px;
            }
        }
    }
}
</style>