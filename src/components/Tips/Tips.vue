<template>
<transition name="tips">
	<div class="tips-view" v-show="displayTips">
		<div class="mask" @click="hide(0)"></div>
			<div class="content">
				<h4>{{ title }}</h4>
				<p v-html="content"></p>
				<!-- <slot>{{ content }}</slot> -->
				<input type="button" value="确定" class="btn" @click="hide(1)">
			</div>
	</div>
</transition>
</template>

<script>

export default {
    props: {
        title: { // 标题
            type: String,
            default: '提示'
        },
        content: {
            type: String,
            default: '这是弹框内容'
        }

    },

    data () {
        return {
            resolve: '',
            reject: '',
            promise: '', // 保存promise对象
            displayTips: false
        };
    },

    methods: {
        // 关闭
        hide (type) {
            this.displayTips = false;

            if (type) this.resolve('confirm');
            else this.reject('cancel');

            this.remove();
        },

        // 弹出提示框，并且创建一个promise对象
        show () {
            this.displayTips = true;
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });

            return this.promise;
        },

        // 销毁节点
        remove () {
            setTimeout(() => {
                this.destroy();
            }, 200);
        },

        destroy () {
            this.$destroy();
            document.body.removeChild(this.$el);
        }

    },

    created () {
    }
};
</script>

<style lang="scss" scoped="">
	.panel-view .content, .panel-view .mask {
		transition: all .2s;
	}
	.panel-enter .mask, .panel-leave-to .mask {
		opacity: 0;
	}
	.panel-enter-active, .panel-leave-active {
		transition: all .2s;
	}
	.panel-enter .content, .panel-leave-to .content {
		transform: translate(-50%,-50%) scale(.8);
		opacity: 0;
	}

</style>
