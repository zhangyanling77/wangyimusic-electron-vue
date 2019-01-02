<template>
    <div id="wrapper">
        <el-container>
            <!-- 头部 -->
            <el-header class="head-view" style="padding: 0 8px;">
                <header-view></header-view>
            </el-header>
            <!-- 主体部分 -->
            <el-container class="main-body">
                <el-aside class="left-aside" style="width: 200px;">
                    <!-- 左侧菜单 -->
                    <left-view></left-view>
                </el-aside>
                <!-- 内容 -->
                <el-main class="right-aside">
                    <router-view></router-view>
                </el-main>
            </el-container>
            <!-- 底部  -->
            <el-footer class="foot-view" style="height:66px;">
                <foot-view></foot-view>
            </el-footer>
        </el-container>
    </div>
</template>


<script>
import HeaderView from '../components/headview/index';
import LeftView from '../components/leftview/index';
import FootView from '../components/footview/index';
import { login } from '@/api';

export default {
    name: 'wrapper',
    data(){
        return {}
    },
    components: { HeaderView, LeftView, FootView },
    mounted() {
        this.getUserInfo()
    },
    methods: {
        getUserInfo() {
            let email = "18783226594@163.com", password = "zyl1010"; // 我自己的网易账号
            login(email, password).then(res => {
                // console.log(res)
                this.$store.dispatch('SET_LOGIN', res)
            })
        }
    }
}
</script>


<style lang="scss" scoped>
    #wrapper{
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: #efefef;
    }
    .head-view {
        background-color: #b82500;
        color: #fff;
        -webkit-app-region: drag;
    }
    .main-body{
        position: absolute;
        top: 60px;
        bottom: 66px;
        width: 100%;
        .left-aside{
            display: flex;
            flex-direction: column;
            background: linear-gradient(to bottom, #efefef, #efefef);
        }
        .right-aside{
            overflow-y: auto;
            padding: 0;
        }
    }
    .foot-view{
        border-top: 1px solid #ddd;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: linear-gradient(to bottom, #efefef, #efefef);
    }
</style>
