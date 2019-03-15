<template>
    <div class="base">

        <div class="header">
            <h3>基本资料</h3>
        </div>

        <div class="operate">
            <!--<el-button type="primary" size="small" @click="dialogVisible = true">修改绑定手机</el-button>-->
        </div>

        <ul class="item">
            <li>
                <span class="name">公司联系电话:</span>
                <span>{{iphone}}</span>
                <el-button type="text" size="small">修改</el-button>
            </li>
            <li>
                <span class="name">公司地址:</span>
                <span>成都高新区天府新谷1栋1单元1号</span>
                <el-button type="text" size="small">修改</el-button>
            </li>
            <li>
                <span class="name">服务项目:</span>
                <span>改造，翻新，装修，豪科技装修   </span>
                <el-button type="text" size="small">修改</el-button>
            </li>
            <li>
                <span class="name">服务范围:</span>
                <span>  全成都   </span>
                <el-button type="text" size="small">修改</el-button>
            </li>
            <li>
                <span class="name">公司简介:</span>
        <span>计、专业施工于一体的大型装饰装修公司，从2010年至今已连续4年荣获“国家装饰设计及施工优秀企业”称号。公
          司现有两个总面积达6000多平方米的材料展厅，并从四川各地吸纳了家装优秀设计师200余人、专业工程管理
          人员100余人、专业施工人员近千人，是一家拥有先进设计理念和高效施工团队，专业务实、顾客至上的装饰公司。
          公司贯彻“透明、合理”的“清单式”报价宗旨，把您的每一分钱都用在刀刃上，让您快乐装修、省钱到底。“环保”是
          我们又一大装饰理念。我们的主材都是经过公司专业材料人员长时间认真筛选，以保证材料的安全性，尽力诠释“绿色装修”新概念。</span>
                <el-button type="text" size="small">修改</el-button>
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
