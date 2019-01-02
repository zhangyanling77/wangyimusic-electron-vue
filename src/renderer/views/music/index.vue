<template>
    <div class="music-index">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="推荐" name="choiceness"></el-tab-pane>
            <el-tab-pane label="排行榜" name="toplist"></el-tab-pane>
            <el-tab-pane label="歌单" name="playlist"></el-tab-pane>
            <el-tab-pane label="主播电台" name="dj"></el-tab-pane>
            <el-tab-pane label="最新音乐" name="newlist"></el-tab-pane>
        </el-tabs>
        <div class="music-body">
            <transition name="el-fade-in-linear">
                <choiceness v-if="activeName==='choiceness'" />
                <toplist v-if="activeName==='toplist'" />
                <playlist v-if="activeName==='playlist'" />
                <dj v-if="activeName==='dj'" />
                <newlist v-if="activeName==='newlist'" />
            </transition>
        </div>
    </div>
</template>

<script>
import choiceness from './choiceness';
import toplist from './toplist';
import playlist from './playlist';
import dj from './dj';
import newlist from './newlist';

export default {
    name: 'music',
    data() {
        return {
            activeName: 'newlist'
        }
    },
    components: {
        choiceness,
        toplist,
        playlist,
        dj,
        newlist
    },
    methods: {
        handleClick(){}
    }
}
</script>

<style lang="scss" scoped>
    .music-index {
        display: flex;
        overflow: hidden;
        flex: 1;
        flex-direction: column;
        /deep/ .el-tabs {
            height: 40px;
            background: #fafafa;
            .el-tabs__header {
                padding: 0;
                margin: 0;
            }
            .el-tabs__nav-scroll {
                display: flex;
                justify-content: center;
                padding: 0;
            }
            .el-tabs__nav-wrap::after {
                display: none;
            }
            .el-tabs__item {
                font-size: 14px;
            }
        }
        .music-body {
            border-top: 1px solid #ddd;
            background: #f0f0f0;
            flex: 1;
            overflow: hidden;
            display: flex;
        }
    }
</style>
