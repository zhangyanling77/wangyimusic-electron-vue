<template>
    <div style="position:relative;">
        <el-row>
            <el-col :span="12">
                <el-table
                :data="dataLeft"
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
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <span>{{ scope.row.name }}</span>
                            <span slot="reference">{{ formatString(scope.row.name,10) }}</span>
                        </el-popover>
                        <img v-if="scope.row.exclusive" src="~@/assets/imgs/sq.png" style="vertical-align:middle;width:18px;"/>
                        <img v-else src="~@/assets/imgs/mv.png" style="vertical-align:middle;width:18px;"/>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="singer"
                    label=""
                    width="140px">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <span>{{ scope.row.singer }}</span>
                            <span slot="reference">{{ formatString(scope.row.singer,8) }}</span>
                        </el-popover>
                    </template>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="12">
                <el-table
                :data="dataRight"
                stripe
                style="width: 100%;border-left:1px solid #ddd;">
                    <el-table-column
                    prop="num"
                    label=""
                    width="40px">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <span>{{ scope.row.name }}</span>
                            <span slot="reference">{{ formatString(scope.row.name,10) }}</span>
                        </el-popover>
                        <img v-if="scope.row.exclusive" src="~@/assets/imgs/sq.png" style="vertical-align:middle;width:18px;"/>
                        <img v-else src="~@/assets/imgs/mv.png" style="vertical-align:middle;width:18px;"/>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="singer"
                    label=""
                    width="140px">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <span>{{ scope.row.singer }}</span>
                            <span slot="reference">{{ formatString(scope.row.singer,8) }}</span>
                        </el-popover>
                    </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <i class="iconfont icon-play-circle-fill bofang"></i><span class="bofang-text">播放全部</span>
    </div>
</template>

<script>

export default {
    props: {
        dataLeft: Array,
        dataRight: Array
    },
    data() {
      return {}
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
            padding: 8px 0;
            background-color: #ddd;
        }
        /deep/ td {
            padding: 2px 0;
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
    
</style>


