<template>
    <el-scrollbar class="menu-view scroll-page">
        <div class="menu-group">
            <div class="menu-title">推荐</div>
            <div class="menu-item active" @click="goMusic"><div class="left"><i class="iconfont icon-yinle"></i>发现音乐</div></div>
            <div class="menu-item" @click="goFM"><div class="left"><i class="iconfont icon-diantai"></i>私人FM</div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-desktop"></i>MV</div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-team"></i>朋友</div></div>
        </div>
        <div class="menu-group">
            <div class="menu-title"><div class="left">我的音乐</div><div class="right"><i class="iconfont icon-xiangxia arow"></i></div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-yinle"></i>iTunes音乐</div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-download"></i>下载的音乐</div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-user"></i>我的歌手</div></div>
        </div>

        <div class="menu-group">
            <div class="menu-title"><div class="left">创建的歌单</div><div class="right"><i class="iconfont icon-jia-copy"></i></div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-heart"></i>我喜欢的音乐</div></div>
        </div>

        <div class="menu-group">
            <div class="menu-title"><div class="left">收藏的歌单</div><div class="right"><i class="iconfont icon-xiangxia"></i></div></div>
            <div class="menu-item"><div class="left"><i class="iconfont icon-yinyue"></i>东西</div></div>
        </div>
    </el-scrollbar>
</template>

<script>
    export default {
        name: 'menus',
        methods: {
            goMusic() {
                this.$router.push('/music')
            },
            goFM() {
                this.$router.push('/fm')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .scroll-page {
        overflow: hidden;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
    .menu-view{
        flex: 1;
        overflow: hidden;
        border-right: 1px solid #ddd;
        .menu-group{
            margin-bottom: 16px;
            padding:0 10px 0 0;
            .menu-title{
                margin-bottom: 6px;
                font-size: 12px;
                padding-left: 10px;
                display: flex;
                align-items: center;
                color: #666;
                .left{
                    flex:1;
                }
                .right{
                    width: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    .iconfont{
                        font-size: 14px;
                        color: #888;
                        margin-left: 10px;
                    }
                    .arow{
                        transform: rotate(-90deg);
                    }
                }
            }
            .menu-item{
                padding: 5px 10px;
                font-size: 13px;
                border-radius: 2px;
                margin-bottom: 3px;
                cursor: pointer;
                .left{
                    .iconfont{
                        margin-right: 10px;
                    }
                }
            }
            .menu-item:hover{
                background:#E6E7E7;
            }

            .menu-item.active{
                background-color: #ddd;
                border-left: 3px solid #c52c05;
            }
        }

    }
</style>
