<template>
    <div class="game-container">
        <div class="rat-container" v-for="(rat,index) in ratList" :key="rat.id" @click="play(index)">
            <!-- 老鼠 -->
            <img :src="'static/img/rat/rat-' + rat.awardType + '.png'" :class="rat.state?'rat rat2':'rat'" alt="" v-show="rat.state !== 3">
            <lottie :options="lottieToCry"
            ref="lottieParking" style="margin-top:0px;z-index:1;" :class="rat.state === 3? 'rat2':''" ></lottie>

            <!-- 锤子 -->
            <img src="../assets/hammer.png" alt="" class="hammer" v-if="rat.hammerState">

            <!-- B话 -->
            <img
                :src="'static/img/text/text-' + (rat.textType + '-' + rat.textDirection) + '.png'"
                :class="rat.textDirection"
                class="text left"
                v-if="rat.textType && rat.textDirection"
                alt=""
            >
        </div>
    </div>
</template>

<script>
import * as miss from 'static/miss/data.json'; // 未打中
import * as hit from 'static/hit/data.json'; // 打中
import * as dizziness from 'static/dizziness/data.json'; // 打晕
import * as toCry from 'static/toCry/data.json'; // 打哭
export default {
    data () {
        return {
            /***
                state: 老鼠状态|0死亡、1存活、2击晕、3击哭、4抢夺锤子、5逃走、6挑衅
                text: 老鼠B话
                displayAward： 掉落道具显示状态
                awardType: 道具掉落类型
                awardNum: 道具掉落数量
                hammerState: 锤子状态|0敲击前不展示1敲击中2敲击完
                translateY: 老鼠Y轴位移距离
            */
            ratList: [
                { id: 1, state: '', hammerState: 0, textDirection: 'left', textType: 'fanit', awardType: 'apple', translateY: 0 },
                { id: 2, state: '', hammerState: 0, textDirection: '', textType: 'flee', awardType: 'cheey', translateY: 0 },
                { id: 3, state: '', hammerState: 0, textDirection: '', textType: 'hurt', awardType: 'coffe', translateY: 0 },
                { id: 4, state: '', hammerState: 0, textDirection: '', textType: 'provoke', awardType: 'cola', translateY: 0 },
                { id: 5, state: '', hammerState: 0, textDirection: '', textType: '', awardType: 'corrat', translateY: 0 },
                { id: 6, state: '', hammerState: 0, textDirection: '', textType: '', awardType: 'grape', translateY: 0 },
                { id: 7, state: '', hammerState: 0, textDirection: '', textType: '', awardType: 'juice', translateY: 0 },
                { id: 8, state: '', hammerState: 0, textDirection: '', textType: '', awardType: 'maize', translateY: 0 },
                { id: 9, state: '', hammerState: 0, textDirection: 'right', textType: 'provoke', awardType: 'milk', translateY: 0 }
            ],
            lottieMiss: {
                animationData: miss,
                autoplay: true,
                loop: false
            },
            lottieHit: {
                animationData: hit,
                autoplay: true,
                loop: false
            },
            lottieDizziness: {
                animationData: dizziness,
                autoplay: true,
                loop: true
            },
            lottieToCry: {
                animationData: toCry,
                autoplay: true,
                loop: true
            }
        };
    },
    methods: {
        play (id) {
            console.log(id);
            this.ratList[id].state = 3;
            this.ratList[id].textType = '';
            this.ratList[id].hammerState = 1;
            setTimeout(() => { this.ratList[id].hammerState = ''; }, 300);
        }
    }
};
</script>

<style lang="scss" scoped>
.game-container{
    width: 750px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 3.1rem;
    .rat-container{
        width: 250px;
        height: 5.05rem;
        position: relative;
        @mixin bgSize($x, $y){
            background-position: $x, $y;
        }

        .rat{
            display: block;
            width: 160px;
            height: 192px;
            position: relative;
            z-index: 1;
            transform: translateY(0);
            transition: all .2s;
        }
        .rat2{
            transform: translateY(180px);
            transition: all .8s;
        }

        .rat-cry{
            width: 180px;
            height: 220px;
            margin-left: 30px;
            z-index: 999;
        }

        .text{
            width: 164px;
            height: 112px;
            position: absolute;
            top: -60px;
            z-index: 5;
            &.left{
                right: -60px;
            }
            &.right{
                left: -60px;
            }
        }

        .hammer{
            width: 176px;
            height: 176px;
            position: absolute;
            right: -20px;
            top: -100px;
            z-index: 4;
        }

        &::before{
            content: '';
            display: block;
            width: 250px;
            height: 256px;
            position: absolute;
            bottom: 0;
            z-index: 2;
            background: {
                repeat: no-repeat;
                size: auto 256px;
            };
        }

        &:nth-child(1),&:nth-child(4),&:nth-child(7){
            &::after{
                content: '';
                display: block;
                width: 750px;
                height: 144px;
                position: absolute;
                bottom: 112px;
                z-index: -1;
                background: {
                    image: url('../assets/bg-hole2.png');
                    size: 100% 144px;
                    position: left bottom;
                    repeat: no-repeat;
                };
            }
            &::before{ @include bgSize(0, 0); }
            .rat{
                margin-left: 60px;
            }
        }
        &:nth-child(2),&:nth-child(5),&:nth-child(8) {
            &::before{ @include bgSize(-250px, 0); }
            .rat{
                margin: auto;
            }
        }
        &:nth-child(3),&:nth-child(6),&:nth-child(9) {
            &::before{ @include bgSize(-500px, 0); }
            .rat{
                margin-left: 30px;
            }
        }

        &:nth-child(1), &:nth-child(2), &:nth-child(3){
            &::before{
                background: { image: url('../assets/bg-hole-cover-1.png'); };
            }
            z-index: 1;
        }
        &:nth-child(4), &:nth-child(5), &:nth-child(6){
            &::before{
                background: { image: url('../assets/bg-hole-cover-2.png'); };
            }
            z-index: 2;
            // margin-top: -1.65rem;
            margin-top: -2rem;

        }
        &:nth-child(7), &:nth-child(8), &:nth-child(9){
            &::before{
                background: { image: url('../assets/bg-hole-cover-3.png'); };
            }
            z-index: 3;
            // margin-top: -1.65rem;
            margin-top: -2rem;
        }

    }
}
</style>