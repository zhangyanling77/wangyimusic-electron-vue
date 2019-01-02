<template>
    <div id="head-wrap">
        <ul>
            <li class="red" @click="close"><i class="el-icon-circle-close"></i></li>
            <li class="yellow" @click="min"><i class="el-icon-remove"></i></li>
            <li class="green" @click="max"><i class="el-icon-circle-plus"></i></li>
        </ul>
        <img class="logo" src="~@/assets/imgs/logo.jpg" alt="" />
        <el-button-group class="router-btn">
            <el-button size="mini" icon="el-icon-arrow-left" @click="backward"></el-button>
            <el-button size="mini" icon="el-icon-arrow-right" @click="forward"></el-button>
        </el-button-group>
        <div class="search-box">
            <input type="text" @focus="clearVal" @blur="paddingVal" v-model="placeholder">
            <i class="el-icon-search"></i>
        </div>
        <div class="right-span">
            <div class="lf">
                <el-badge :value="63" class="item">
                    <i class="el-icon-message info"></i>
                </el-badge>
                <el-badge is-dot class="item">
                    <i class="el-icon-setting info"></i>
                </el-badge>
            </div>
            <el-popover
                class="my-center"
                placement="bottom-end"
                width="200"
                trigger="click">
                <div> 
                    <div style="margin: 0 0 10px 0;">
                        <img style="width:40px;height:40px;border-radius:50%;border:1px solid #ddd;" :src="userinfo && userinfo.avatarUrl" />
                        <span style="margin-left:10px;color:#333;">{{userinfo && userinfo.nickname}}</span>
                    </div>
                    <ul style="padding:0;list-style:none;margin:0;display:flex;font-size:12px;color:#333;">
                        <li v-for="(item,index) in infolist" :key="index" :style="item.sep?{flex:1,borderLeft:'1px solid #ddd',paddingLeft:'5px' }:{flex:1}">
                            <p style="margin:0;font-weight:bold;">{{item.num}}</p>
                            <p style="margin:0;">{{item.text}}</p>
                        </li>
                    </ul>
                    <ul style="margin:10px 0 0 0;list-style:none;border-top:1px solid #ddd;padding:10px 0 0 0;font-size:13px;color:#333;">
                        <li style="margin-bottom:10px;position:relative;">
                            <i class="iconfont icon-sketch"></i>
                            <span style="margin-left:6px;">会员中心</span>
                            <i class="iconfont icon-xiangxia" style="position:absolute;right:0;top:6px;font-size: 12px;display: inline-block;-webkit-transform: rotate(-90deg)"></i>
                        </li>
                        <li style="margin-bottom:10px;position:relative;">
                            <i class="iconfont icon-setting"></i>
                            <span style="margin-left:6px;">个人信息设置</span>
                            <i class="iconfont icon-xiangxia" style="position:absolute;right:0;top:6px;font-size: 12px;display: inline-block;-webkit-transform: rotate(-90deg)"></i>
                        </li>
                        <li style="margin-bottom:10px;position:relative;">
                            <i class="iconfont icon-shake"></i>
                            <span style="margin-left:6px;">绑定社交账号</span>
                            <i class="iconfont icon-xiangxia" style="position:absolute;right:0;top:6px;font-size: 12px;display: inline-block;-webkit-transform: rotate(-90deg)"></i>
                        </li>
                        <li style="border-top:1px solid #ddd;padding-top:5px;position:relative;">
                            <i class="iconfont icon-poweroff"></i>
                            <span style="margin-left:6px;">退出登录</span>
                            <i class="iconfont icon-xiangxia" style="position:absolute;right:0;top:8px;font-size: 12px;display: inline-block;-webkit-transform: rotate(-90deg)"></i>
                        </li>
                    </ul>
                </div>
                <span class="el-dropdown-link" slot="reference">
                    <img class="head-img" :src="userinfo && userinfo.avatarUrl" alt="" /><i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
            </el-popover>
        </div>
    </div>
</template>

<script>
import storage from '@/utils/storage';

export default {
    data(){
        return {
            placeholder: '搜索音乐，歌手，歌词，用户',
            infolist: [
                { num: 1, text: "动态", sep: false },
                { num: 14, text: "关注", sep: true },
                { num: 0, text: "粉丝", sep: true },
            ],
            userinfo: null
        }
    },
    mounted() {
        this.userinfo = storage.get('profile');
    },
    methods: {
        min(){
            this.$electron.ipcRenderer.send('window-min');
        },
        max(){
            this.$electron.ipcRenderer.send('window-max');
        },
        close(){
            this.$electron.ipcRenderer.send('window-close');
        },
        clearVal(){
            this.placeholder = '';
        },
        paddingVal(){
            this.placeholder = '搜索音乐，歌手，歌词，用户';
        },
        backward() {
            if (this.$route.name !== 'music') {
                this.$router.go(-1)
            }
        },
        forward() {
            this.$router.go(1)
        },
    }
}
</script>

<style lang="scss" scoped>
    #head-wrap{
        position: relative;
        height: 100%;
        padding-top: 22px;
        box-sizing: border-box;
        ul{
            margin: 0;
            padding: 0;
            list-style: none;
            position: absolute;
            top: 2px;
        }
        li{
            display: inline-block;
            font-size: 14px;
        }
        .red{
            color: #ed6c60;
            &:hover{
               color: #8a1f03; 
            }
        }
        .yellow{
            color: #f5bf50;
            &:hover{
                color: goldenrod;  
            }
        }
        .green{
            color: #63c655;
            &:hover{
                color: green;
            }
        }
        .logo{
            width: 160px;
            height: auto;
        }
        .router-btn{
            margin-left: 60px;
            button{
                padding: 6px;
                background-color:#c52c05;
                color: #fff;
                border: 1px solid #8a1f03;
                &:hover{
                    background-color: #b92500;
                }
            }
        }
        .search-box{
            display: inline;
            position: relative;
            >input{
                width: 230px;
                padding: 6px;
                border-radius: 20px;
                border:0;
                outline: none;
                margin-left: 6px;
                padding-left: 30px;
                box-sizing: border-box;
                color: #999;
            }
            >i{
                position: absolute;
                top: 3px;
                left: 15px;
                color: #999;
            }
        }
        .right-span{
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            padding: 0 0 0 20px;
            box-sizing: border-box;
            .lf{
                display: inline-block;
                height: 100%;
                border-right: 1px solid #8a1f03;
            }
            .item{
                margin-top: 20px;
                margin-right: 20px;
                /deep/ .is-dot{
                    display: none;
                }
            }
            /deep/ .el-badge__content{
                background-color: #fff;
                color: #c52c05;
                padding: 0 3px;
                height: 14px;
                line-height: 14px;
            }
            .info{
                font-size: 20px;
                font-weight: bold;
            }
        }
        .my-center{
            display: inline-block;
            vertical-align: middle;
            margin: 20px 0 0 10px;
            color: #fff;
            .head-img{
                width: 22px;
                height: 22px;
                border-radius: 50%;
            }
        }
    }
</style>
