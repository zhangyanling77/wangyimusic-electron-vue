<template>
    <el-scrollbar class="toplist-view scroll-page">
        <div class="top-items">
            <div class="top-tabs">
                <div class="title">
                    <span :class="{active: !isGlobal}" @click="toggle('guanfang')">官方榜</span>
                    <span :class="{active: isGlobal}" @click="toggle('global')">全球榜</span>
                </div>
            </div>
            <div class="top-contents" v-if="!isGlobal">
                <official-item />
            </div>
            <div v-else>
                <el-row :gutter="30">
                    <el-col :span="6" v-for="(item,index) in globalTop" :key="index">
                        <global-item :item="item"  />
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-scrollbar>
</template>

<script>
import { globalTopList } from "@/api";
import globalItem from './components/global-item';
import officialItem from './components/official-item';

export default {
    name: 'toplist',
    data() {
      return {
          isGlobal: false,
          officialTop: [],
          globalTop: []
      }
    },
    components: {
        globalItem,
        officialItem
    },
    mounted(){
        this.getGlobalTopList()
    },
    methods: {
        toggle(type){
            if(type == 'global'){
                this.isGlobal = true
            }else{
                this.isGlobal = false
            }
        },
        getGlobalTopList() {
            globalTopList().then(res => {
                // console.log("所有排行榜",res)
                let result = res.list;
                this.officialTop = result.filter((item, index) => (index<4 || index ===7));
                this.globalTop = result.filter((item, index) => (index>3 && index!=7));
            })
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
    .toplist-view {
        flex: 1;
        overflow: hidden;
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .top-items{
        flex: 1;
        padding: 30px;
        .title {
            font-size: 16px;
            font-weight: bold;
            color: #666;
            letter-spacing: 2px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
            position: relative;
            >span{
                display: inline-block;
                padding-bottom: 5px;
                margin-right: 10px;
                cursor: pointer;
            }
            .active{
                border-bottom: 3px solid #ddd;
                font-size: 18px;
                color: #333;
            }
        }
    }
</style>


