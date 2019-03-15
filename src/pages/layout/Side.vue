<template>
    <el-menu mode="vertical" theme="black" unique-opened :default-active="$route.path" :collapse="isCollapse" :router="true">
        <div class='side menu-wrapper'>
            <div v-for="item in routes">
                <router-link v-if="!item.hidden&&item.noDropdown&&item.children.length>0" :to="item.path+'/'+item.children[0].path">
                    <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
                        <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
                        <span style="margin-left: 10px">{{item.children[0].name}}</span>
                    </el-menu-item>
                </router-link>

                <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden">
                    <template slot="title">
                        <div class="menu-title-dropdown">
                            <icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
                            <span style="margin-left: 10px">{{item.name}}</span>
                        </div>
                    </template>
                    <template v-for="child in item.children" v-if='!child.hidden'>
                        <sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>

                        <router-link v-else :to="item.path+'/'+child.path">
                            <el-menu-item :index="item.path+'/'+child.path" class="menu-title-dropdown">
                                <icon-svg v-if='child.icon' :icon-class="child.icon"></icon-svg>
                                <span>{{child.name}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-submenu>
            </div>
        </div>
    </el-menu>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Side',
        data () {
            return{
                routes: [{
                    path: '',
                    redirect: '/index',
                    name: '首页',
                    noDropdown: true,
                    icon:'bug',
                    children: [{ path: 'index', name:"首页" }]
                },
                {
                    path: '/seller',
                    redirect: '/seller/account',
                    noDropdown: false,
                    name:'商家资料',
                    icon:'star',
                    children: [
                        { path: 'base', name:"基础资料" },
                        { path: 'qualification', name:"企业资质" },
                        { path: 'auth',  name:"认证资料" }
                    ]
                }]
            }
        },
        computed:{
            isCollapse() {
                return false
            }
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .router-link-active{
        position: relative;
    }
    .router-link-active:after{
        content: '';
        position: absolute;
        width: 0;
        top:0;
        left: 0;
        height: 80%;

        border: 4px solid #007AFF;
    }
    .el-menu-item.is-active{
        color: #007AFF;
    }

    .side{
        position: fixed;
        top: 60px;
        width: 200px;
        height: 100%;
        z-index: 400;
        border-right: 1px solid #DCDCDC;
    }
    .side a{
        display: block;
        font-size: 16px;
        text-decoration: none;
        /*color: red;*/
    }

    .submenu-title-noDropdown,.menu-title-dropdown{
        /*color: #2E8B57;*/
        color: #707070;
    }

</style>
