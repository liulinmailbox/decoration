<template>
    <div class="account">

        <div class="header">
            <h3>账号管理</h3>
        </div>

        <div class="operate">
            <el-button type="primary" size="small" @click="dialogVisible = true">修改绑定手机</el-button>
        </div>


        <el-dialog :visible.sync="dialogVisible" title="短信验证">
            <ul class="yzm">
                <li>
                    <label>手机号码：</label>
                    <div>
                        <span>187820388238</span>
                    </div>
                </li>
                <li>
                    <label>短信验证码：</label>
                    <div>
                        <el-input style="width: 100px" size="small" maxlength="4"></el-input>
                        <el-button type="primary" size="small">发送验证码</el-button>
                    </div>
                </li>
            </ul>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">取消</el-button>
          <el-button type="primary" @click="handleYzm" size="small">下一步</el-button>
        </span>
        </el-dialog>


        <el-dialog :visible.sync="dialogVisibleNew" title="短信验证">
            <ul class="yzm">
                <li>
                    <label>手机号码：</label>
                    <div>
                        <el-input style="width: 200px" size="small"></el-input>
                    </div>
                </li>
                <li>
                    <label>短信验证码：</label>
                    <div>
                        <el-input style="width: 100px" size="small" maxlength="4"></el-input>
                        <el-button type="primary" size="small">发送验证码</el-button>
                    </div>

                </li>
            </ul>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleNew = false" size="small">取消</el-button>
          <el-button type="primary" @click="dialogVisibleNew = false" size="small">提交</el-button>
        </span>
        </el-dialog>

    </div>
</template>

<script>
    export default{
        data(){
            return {
                dialogVisible:false,
                dialogVisibleNew:false
            }
        },
        components: {},
        methods:{

            handleYzm(){
                let _this = this;
                this.dialogVisible= false;
                setTimeout(function () {
                    _this.dialogVisibleNew= true;
                },300)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .account{
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

        .yzm{
            list-style-type: none;
            margin: 0;
            padding: 0;
            text-align: center;
            li{
                margin: 10px;
                label{
                    display: inline-block;
                    width: 100px;
                    text-align: right;
                    margin-right: 10px;
                }
                div{
                    display: inline-block;
                    width: 200px;
                    text-align: left;
                }
            }
        }

    }
</style>
