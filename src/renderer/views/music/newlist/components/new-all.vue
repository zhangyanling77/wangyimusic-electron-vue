<template>
    <div style="position:relative;">
        <el-table
            :data="data"
            stripe
            style="width: 100%;">
            <el-table-column
            prop="num"
            label=""
            width="40px">
            </el-table-column>
            <el-table-column
            prop="name"
            label="">
            </el-table-column>
            <el-table-column
            prop="singer"
            label="">
            </el-table-column>
            <el-table-column
            prop="alumb"
            label="">
            </el-table-column>
            <el-table-column
            prop="time"
            label=""
            width="60px">
            </el-table-column>
        </el-table>
        <i class="iconfont icon-play-circle-fill bofang"></i><span class="bofang-text">播放全部</span>
        <el-tag class="shoucang">收藏全部</el-tag>
    </div>
</template>


<script>
export default {
    data() {
        return {
            data: [{
                num: 1,
                name: 'ahhah',
                singer: 'sshshh',
                alumb: '但是看到困难',
                time: '03:32'
            },{
                num:2,
                name: 'sdjsndkf',
                singer: 'sdnjnfknkmkmkml',
                alumb: '的肌肤就能跨过门槛吗',
                time: '04:01'
            }]
        }
    },
    methods: {
        formatString(str, num) {
            if (!str) return;
            return str.length > num ? str.slice(0, num) + "..." : str;
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-table{
        font-size: 12px;
        margin-bottom: 20px;
        /deep/ th {
            padding: 10px 0;
            background-color: #ddd;
        }
        /deep/ td {
            padding: 4px 0;
        }
    }
    .bofang{
        position: absolute;
        top: 6px;
        left: 10px;
        color: #ab3419;
        font-size: 18px;
        cursor: pointer;
    }
    .bofang-text{
        position: absolute;
        top: 8px;
        left: 40px;
        font-size: 12px;
        color: #333;
    }
    .el-tag{
        padding: 0 5px;
        line-height: 24px;
        height: 24px;
    }
    .shoucang{
        position: absolute;
        right: 10px;
        top: 6px;
        cursor: pointer;
    }
</style>
