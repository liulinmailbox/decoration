<template>
    <div>
        <div class="header">
            <img class="header_img" src="http://temp.im/360x50/ff5a5f/fff" alt="图片加载失败">
        </div>
        <div class="main">
            <div class="login">
                <h2>登&nbsp;录</h2>
                <el-form id="loginForm" class="jsForm login-form" autoComplete="on">
                    <ul>
                        <li>
                            <!--<span class="login_icon username"></span>-->
                            <!--<input type="text" name="username" id="username" placeholder="请输入你的账号" maxlength="32"-->
                            <!--ng-keypress="($event.which === 13)?login():0"/>-->
                            <!--&lt;!&ndash;value="15328041610_1 18782038801_2 18080425804_1 15528282872_3-->
                            <!--13488998682_1&#45;&#45;test123456 18080409241_2&#45;&#45;bh9527 13032838695_3 15902867370&#45;&#45;18030543130===online"&ndash;&gt;-->

                            <el-form-item prop="username">
                                  <span class="svg-container svg-container_login">
                                  <!--<icon-svg icon-class="user" />-->
                                  </span>
                                <el-input name="username" type="text"  autoComplete="on" placeholder="请输入你的账号" />
                            </el-form-item>
                        </li>
                        <li>
                            <!--<span class="login_icon pwd"></span>-->
                            <!--<input type="password" name="pwd" id="pwd" placeholder="请输入密码" maxlength="32"-->
                            <!--ng-keypress="($event.which === 13)?login():0"/>-->
                            <!--543130gxq--online-->

                            <el-form-item prop="password">
                              <span class="svg-container">
                              <!--<icon-svg icon-class="password" />-->
                              </span>
                                <el-input name="password"  autoComplete="on" placeholder="密码" />
                            </el-form-item>

                        </li>
                        <!--<li>-->
                        <!--<span class="login_icon yzm"></span>-->
                        <!--<input type="text" name="yzm" maxlength="6" id="yzm" ng-keypress="($event.which === 13)?login():0" placeholder="请输入验证码" style="width: 151px;">-->
                        <!--<div class="changeYzm" title="刷新验证码" ng-click="getCode()">-->
                        <!--<div class="codeYzm" id="codeYzm" title="刷新验证码"></div>-->
                        <!--</div>-->
                        <!--</li>-->
                        <li class="no_border">
                            <!--<a id="login" href="javascript:void(0);" ng-click="login()">登录</a>-->
                            <el-button type="primary" style="width:100%;margin-bottom:30px;">登录</el-button>
                        </li>

                        <!--<li class="no_border login_link clearfix">-->
                        <!--<span class="pull-left">还没账户？-->
                        <!--<router-link to="/reg">立即注册</router-link>-->
                        <!--&lt;!&ndash;<a href="javascript:void(0)" ui-sref="log.register"></a>&ndash;&gt;-->
                        <!--</span>-->
                        <!--<span class="pull-right">-->
                        <!--&lt;!&ndash;<a href="javascript:void(0)" ui-sref="log.forget">&ndash;&gt;-->
                        <!--&lt;!&ndash;忘记密码&ndash;&gt;-->
                        <!--&lt;!&ndash;</a>&ndash;&gt;-->
                        <!--<router-link to="/find">忘记密码</router-link>-->
                        <!--</span>-->
                        <!--</li>-->
                    </ul>
                </el-form>
            </div>
        </div>
        <div class="footer">
            ©  Copyright   2015-2018   MadRock   蜀ICP备 15023956号-2
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {}
        },
        components: {}
    }
</script>

<style>
    /***@author leaf @create date 2017-06-09 @info 公共基础样式类***/
    html,body,ul,li,p,div,dl,dt,dd,input,textarea,a,h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
        font-family:"microsoft yahei,sans serif";
    }
    a,a:link,a:hover,a:active,a:visited{
        text-decoration: none;
        outline:none;
        border:0;
    }
    ul li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color:#3FA1FC;
        border:0;
        outline:none;
    }
    img{
        border:0;
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    }

    .header{
        width: 95%;
        height: 100px;
        line-height: 100px;
        padding-left: 5%;
        font-size: 30px;
        color: #707070;
    }
    .header_img{
        display: inline-block;
        width: 360px;
        margin: 25px 0;
        text-align: center;
    }
    .header_title{
        color: black;
    }
    .footer{
        margin-top:50px;
        text-align:center;
        font-size:14px;
        color:#969696;
    }
    .main{
        width:100%;
        height:500px;
        background:url('http://temp.im/1920x500/409EFF/fff') no-repeat center center;
        position:relative;
    }
    .login{
        width:320px;
        height:320px;
        background-color: white;
        position:absolute;
        right:10%;
        top:50%;
        margin-top: -160px;
        padding:30px;
    }
    .login h2{
        font-size:18px;
        color: #464646;
        text-align:center;
        font-weight:bold;
        margin-bottom:20px;
    }
    .login ul li{
        position:relative;
        margin-bottom: 18px;
    }
    .login ul li.no_border{
        border:0;
        padding: 0;
        margin-bottom: 14px;
    }
    .login_link{
    }
    .login ul li input{
        width:90%;
        outline:none;
        padding:7px 10px;
        border-radius: 2px;
        color: #969696;
        text-indent:16px;
        font-size:14px;
        line-height:18px;
        background:none;
        border:1px solid #DCDCDC;
    }
    /*.login ul li input:focus{*/
    /*border-color: #0099ff;*/
    /*}*/
    .login_icon{
        display: inline-block;
        position: absolute;
        width: 30px;
        height: 36px;
        background-position: center;
        background-repeat: no-repeat;
    }
    span.username{
        background-image:url(/static/login/phone.png);
    }
    span.pwd{
        background-image:url(/static/login/pwd.png);
    }
    span.yzm{
        background-image:url(/static/login/yzm.png);
    }
    .changeYzm{
        display:block;
        outline:none;
        width:100px;
        height:36px;
        position:absolute;
        top: 0;
        right: 0;
        background-image: url(/static/login/yzm-bg.png);
        border-radius: 2px;
        cursor: pointer;
        padding: 0;
    }
    .codeYzm{
        letter-spacing: 5px;
        width:100px;
        height:36px;
        line-height:36px;
        color:#333;
        text-align:center;
        font-size:18px;
    }
    a#login{
        display:block;
        height:44px;
        width:100%;
        line-height:44px;
        background: #0099FF;
        color:white;
        font-size:16px;
        text-align:center;
        border-radius:4px;
        cursor: pointer;
    }
    .login ul li
    a#login:hover{
        background:#1f82c3;
        color:#fff;
    }
</style>