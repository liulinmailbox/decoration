<template>
    <div class="top">
        <span class="title">装修后台</i>管理系统</span>
        <div class="portrait">
            <el-dropdown trigger="hover" @command="handleCommand">
                <div class="el-dropdown-link">
                    <span>15528282872_3</span>
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">&nbsp;&nbsp;&nbsp;<i class="el-icon-time"></i>&nbsp;&nbsp;用户详情&nbsp;&nbsp;&nbsp;</el-dropdown-item>
                    <el-dropdown-item command="b">&nbsp;&nbsp;&nbsp;<i class="el-icon-setting"></i>&nbsp;&nbsp;退出登录&nbsp;&nbsp;&nbsp;</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    // import comm from '../../utils/common'
    // import router from '../../router'

    export default{
        name: 'Top',
        data () {
            return { }
        },
        created () {
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .top{
        position: fixed;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: left;
        border-bottom: 1px solid #DCDCDC;
        color: #999999;
        background-color: white;
        z-index: 300;
        .title{
            font-size: 18px;
            padding-left: 30px;
            i{
                font-style: normal;
                color: #007AFF;
            }
        }
        .portrait{
            position: absolute;
            right: 70px;
            top: 0;
            cursor: pointer;
            /*img{*/
            /*border-radius: 100%;*/
            /*width: 40px;*/
            /*height: 30px;*/
            /*margin: 10px;*/
            /*vertical-align: middle;*/
            /*}*/
            /*span{*/
            /*display: inline-block;*/
            /*height: 50px;*/
            /*font-size: 16px;*/
            /*cursor: pointer;*/
            /*padding: 0 5px;*/
            /*}*/
        }
    }
</style>
