<template>
    <div class="base">

        <div class="header">
            <h3>企业资质</h3>
        </div>

        <div class="operate">
            <!--<el-button type="primary" size="small" @click="dialogVisible = true">修改绑定手机</el-button>-->
        </div>

        <ul class="item">
            <li>
                <div>
                    <h3>资质证书<el-button type="text">添加</el-button></h3>
                    <span>建议上传装饰行业相关资质证书</span>
                </div>

                <div>
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                </div>
            </li>

            <li>
                <div>
                    <h3>荣誉证书<el-button type="text">添加</el-button></h3>
                    <span>荣誉证书越多，客户越信任企业</span>
                </div>

                <div>
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                </div>
            </li>

            <li>
                <div>
                    <h3>其它<el-button type="text">添加</el-button></h3>
                </div>

                <div>
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                    <img src="/static/login/success.png" alt="">
                </div>
            </li>
        </ul>

        <el-dialog :visible.sync="dialogVisible" title="短信验证">
            <div>
                这里修改手机号码
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                iphone:18782038801,
                dialogVisible:false
            }
        },
        components: {}

    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .base{
        margin: 24px;

        .header{
            position: relative;
            h3{
                margin: 0;
                font-style: normal;
                font-weight: normal;
                border-bottom: 1px solid #dcdcdc;
                padding-bottom: 10px;
            }
        }

        .operate{
            margin: 20px 0;
        }

        .item{
            list-style-type: none;
            padding: 0;
            width: 70%;
            margin: 40px auto;
            li{
                display: block;
                margin: 20px 0;
                border-bottom: 1px solid #dcdcdc;
                padding-bottom: 10px;
            }
            h3{
                margin: 0;
            }
            div{
                margin: 20px 0;
                img{
                    width: 150px;
                    height: 100px;
                }
            }
        }
    }
</style>
