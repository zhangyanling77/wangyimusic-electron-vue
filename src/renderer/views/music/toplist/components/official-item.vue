<template>
    <div >
        <el-row :gutter="20" >
            <el-col :span="8">
                <div class="top-item">
                    <img src="~@/assets/imgs/bs.jpg" />
                    <ul class="play-list">
                        <li v-for="i in 8" :key="i">
                            <span>{{i}}</span><span>-</span><span>大眠</span><span>王心凌</span>
                        </li>
                    </ul>
                    <div class="item-foot">
                        <span>查看全部></span>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="top-item">
                    <img src="~@/assets/imgs/xg.jpg" />
                    <ul class="play-list">
                        <li v-for="i in 8" :key="i">
                            <span>{{i}}</span><span>-</span><span>大眠</span><span>王心凌</span>
                        </li>
                    </ul>
                    <div class="item-foot">
                        <span>查看全部></span>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="top-item">
                    <img src="~@/assets/imgs/yc.jpg" />
                    <ul class="play-list">
                        <li v-for="i in 8" :key="i">
                            <span>{{i}}</span><span>-</span><span>大眠</span><span>王心凌</span>
                        </li>
                    </ul>
                    <div class="item-foot">
                        <span>查看全部></span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="top-item">
                    <img src="~@/assets/imgs/rg.jpg" />
                    <ul class="play-list">
                        <li v-for="i in 8" :key="i">
                            <span>{{i}}</span><span>-</span><span>大眠</span><span>王心凌</span>
                        </li>
                    </ul>
                    <div class="item-foot">
                        <span>查看全部></span>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="top-item">
                    <img src="~@/assets/imgs/dy.jpg" />
                    <ul class="play-list">
                        <li v-for="i in 8" :key="i">
                            <span>{{i}}</span><span>-</span><span>大眠</span><span>王心凌</span>
                        </li>
                    </ul>
                    <div class="item-foot">
                        <span>查看全部></span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [
                "~@/assets/imgs/bs.jpg",
                "~@/assets/imgs/xg.jpg",
                "~@/assets/imgs/yc.jpg",
                "~@/assets/imgs/rg.jpg",
                "~@/assets/imgs/dy.jpg"
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-row{
        margin-top:20px;
    }
    .top-item{
        border: 1px solid #ddd;
        >img{
            width: 100%;
            display: block;
        }
        .play-list{
            background-color: #fafafa;
            margin: 0;
            padding: 0;
            list-style: none;
            >li{
                padding: 8px 12px;
                font-size: 12px;
                &:nth-child(odd){
                   background-color: #eee; 
                }
                >span{
                    display: inline-block;
                    &:first-child{
                        width: 10%;
                        text-align: left;
                        font-weight: bold;
                    }
                    &:nth-child(2){
                        width: 10%;
                    }
                    &:nth-child(3){
                        width: 50%;
                    }
                    &:nth-child(4){
                        width: 30%;
                        text-align: right;
                    }
                }
            }
        }
        .item-foot{
            background-color: #fff;
            height: 32px;
            line-height: 32px;
            font-size: 12px;
            color: #666;
            text-align: right;
            >span{
                margin-right: 10px;
                cursor: pointer;
            }
        }
    }
</style>

