<template>
    <div>
        <Top></Top>
        <Side></Side>
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Top from './Top.vue'
    import Side from './Side.vue'

    export default{
        data () {
            return { }
        },
        components: {
            Top,
            Side
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .content{
        position: absolute;
        left: 200px;
        right: 0;
        top: 60px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .1s ease
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

</style>
