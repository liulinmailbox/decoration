<template>
    <div class="base">

        <div class="header">
            <h3>认证资料</h3>
        </div>

        <div class="operate">
            <!--<el-button type="primary" size="small" @click="dialogVisible = true">修改绑定手机</el-button>-->
        </div>

        <ul class="item">
            <li>
                <span class="name">公司营业执照 :</span>
                <span></span>
                <el-button type="text" size="small">查看</el-button>
            </li>
            <li>
                <span class="name">公司名称:</span>
                <span>成都鑫佰利装饰有限公司</span>
            </li>
            <li>
                <span class="name">社会统一信用代码:</span>
                <span>91510108749708182H</span>
            </li>
            <li>
                <span class="name">法人代表姓名:</span>
                <span>柘波</span>
            </li>
            <li>
                <span class="name">身份证号码:</span>
                <span>51012345678901234</span>
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
                .name{
                    display: inline-block;
                    text-align: left;
                    width: 120px;
                    margin-right: 20px;
                }
            }
        }
    }
</style>
