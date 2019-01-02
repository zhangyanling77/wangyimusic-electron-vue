<template>
    <el-scrollbar class="dj-view scroll-page">
        <div class="carousel">
            <el-carousel :interval="5000" arrow="always" height="200px" :autoplay="false">
                <el-carousel-item>
                    <img src="~@/assets/imgs/icons1.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                    <img src="~@/assets/imgs/icons2.jpg" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content-list">
            <div class="title">
                <span>推荐节目</span>
            </div>
            <el-row :gutter="20">
                <el-col :span="12" v-for="(item,index) in recommendprogram" :key="index">
                    <recommend-program :item="item" />
                </el-col>
            </el-row>
            <div class="title">
                <span>推荐电台</span>
            </div>
            <el-row :gutter="15">
                <el-col :span="4" v-for="(item,index) in recommenddj" :key="index">
                    <recommend-dj :item="item"  />
                </el-col>
            </el-row>
            <div class="title">
                <span>热门电台</span>
            </div>
            <el-row :gutter="15">
                <el-col :span="20" v-for="(item,index) in djlist" :key="index">
                    <dj-item :item="item" />
                </el-col>
            </el-row>
        </div>
    </el-scrollbar>
</template>

<script>
import { getRecommendDj, getRecommendProgram, djlist } from '@/api';
import recommendDj from './components/recommend-dj';
import recommendProgram from './components/recommend-program';
import djItem from './components/dj-item';

export default {
    name: 'dj',
    data() {
        return {
            catid:0,
            recommenddj: [],
            recommendprogram: [],
            djlist: []
        }
    },
    components: {
        recommendDj,
        recommendProgram,
        djItem
    },
    mounted() {
        this.getRecommendDjList()
        this.getRecommendProgramList()
        this.getDjList(this.catid)
    },
    methods: {
        getRecommendDjList() {
            getRecommendDj().then(res => {
                // console.log(res)
                this.recommenddj = res.result;
            })
        },
        getRecommendProgramList() {
            getRecommendProgram().then(res => {
                // console.log(res)
                this.recommendprogram = res.programs;
            })
        },
        getDjList(catid) {
            djlist(catid).then(res => {
                // console.log(res)
                this.djlist = res.djRadios
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
    .dj-view {
        flex: 1;
        overflow: hidden;
        max-width: 1000px;
        margin: 0 auto;
    }
    .carousel{
        padding: 0 40px;
        /deep/ .el-carousel__button{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #ab3419;
        }
    }
    .el-carousel__item img {
        width: 100%;
    }
    
    .el-carousel__item{
        background-color: #fafafa;
    }
    .content-list{
        padding: 20px 40px;
        .title {
            font-size: 20px;
            font-weight: bold;
            color: #444;
            letter-spacing: 2px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
            position: relative;
            >span{
                display: inline-block;
                padding-bottom: 5px;
                border-bottom: 3px solid #ddd;
            }
        }
    }
    
</style>


