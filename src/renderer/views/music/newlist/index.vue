<template>
    <el-scrollbar class="newlist-view scroll-page">
        <div class="btns">
            <el-button-group>
                <el-button type="info" size="mini">新歌速递</el-button>
                <el-button size="mini">新碟上架</el-button>
            </el-button-group>
        </div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="全部" name="all"></el-tab-pane>
            <el-tab-pane label="华语" name="chinese"></el-tab-pane>
            <el-tab-pane label="欧美" name="euramerican"></el-tab-pane>
            <el-tab-pane label="韩国" name="korean"></el-tab-pane>
            <el-tab-pane label="日本" name="japan"></el-tab-pane>
        </el-tabs>
        <transition name="el-fade-in-linear">
            <new-all v-if="activeName==='all'" />
        </transition>
    </el-scrollbar>
</template>

<script>
import { newSongs } from "@/api";
import newAll from './components/new-all';

export default {
    name: 'newlist',
    data() {
        return {
            activeName: "all"
        }
    },
    components: {
        newAll
    },
    methods: {
        getAll() {
            
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
    .newlist-view {
        flex: 1;
        overflow: hidden;
        max-width: 1000px;
        margin: 0 auto;
    }
    .btns{
        padding: 20px 0;
        text-align: center;
        /deep/ .el-button{
            padding: 6px 25px;
        }
    }
</style>


