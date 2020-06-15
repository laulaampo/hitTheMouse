<template>
	<div ref="lavContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            style: {
		            width: this.options.width ? `${this.options.width}px` : '100%',
		            height: this.options.height ? `${this.options.height}px` : '100%',
		            overflow: 'hidden',
		            margin: '0 auto'
            },
            anim2: ''
        };
    },
    methods: {
        init () {
            this.anim2 = lottie.loadAnimation({
                container: this.$refs.lavContainer,
                rederer: 'svg',
                loop: this.options.loop || false,
                autoplay: this.options.autoplay || false,
                animationData: this.options.animationData,
                rendererSettings: this.options.rendererSettings,
                name: this.options.name || ''
                // isPaused:true
            });

            this.$emit('init', this.anim2); // 初始化完提供给父组件lottie实例
            this.anim2.onComplete = () => {
                this.$emit('complete', this.anim2); // 动画执行完提供给父组件lottie实例
            };
        }
    },
    mounted () {
        this.anim2 = lottie.loadAnimation({
            container: this.$refs.lavContainer,
            rederer: 'svg',
            loop: this.options.loop || false,
            autoplay: this.options.autoplay || false,
            animationData: this.options.animationData,
            rendererSettings: this.options.rendererSettings,
            name: this.options.name || ''
            // isPaused:true
        });

        this.$emit('init', this.anim2); // 初始化完提供给父组件lottie实例
        this.anim2.onComplete = () => {
            this.$emit('complete', this.anim2); // 动画执行完提供给父组件lottie实例
        };
    }

};
</script>

<style>

</style>