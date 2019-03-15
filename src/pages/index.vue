<template>
    <div class="index">
        <div class="title">代办事项</div>
        <div class="wrap">
            <router-link v-for='item in wrap' :to='item.path' :key='item.path'>
                <div class="wrap_item" :style="{ backgroundColor: item.color }">
                    <img :src="item.img">
                    <!--<span>{{item.text}}<i v-if="item.text=='待审项目'" style="font-style: normal">({{authCount}})</i></span>-->
                </div>
            </router-link>
        </div>
        <!--<div class="height_20"></div>-->
        <!--<div class="module">模块总览</div>-->
        <!--<div class="wrap">-->
        <!--<router-link v-for='item in module' :to='item.path' :key='item.path'>-->
        <!--<div class="wrap_item" :style="{ backgroundColor: item.color }">-->
        <!--<img :src="item.img">-->
        <!--<span>{{item.text}}</span>-->
        <!--</div>-->
        <!--</router-link>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default{
        data () {
            return { }
        },
        components: { }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .index{
        text-align: left;
    }
    .title,.module{
        font-size: 18px;
        margin: 0;
    }
    .title{
        margin: 20px;
        margin-bottom: 20px;
    }
    .module{
        margin: 20px;
    }
    .wrap{
        margin: 20px;
        .wrap_item{
            width: 400px;
            height: 150px;
            display: inline-block;
            margin-bottom: 20px;
            margin-right: 20px;
            cursor: pointer;
            text-align: center;
            position: relative;
            font-size: 20px;
            &:hover{
                box-shadow: 2px 2px 20px rgba(64, 158, 255, 1);
                color: #fff;
                -webkit-transition: all .2s linear;
                transition: all .2s linear;
            }
            img{
                display: block;
                margin: 40px auto;
                margin-bottom: 5px;
            }
            span{
                color: white;
                font-size: 16px;
            }
        }
    }

    .height_20{
        background: #F2F2F2;
        height: 10px;
    }
</style>