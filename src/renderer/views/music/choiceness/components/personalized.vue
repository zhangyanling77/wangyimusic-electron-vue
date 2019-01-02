<template>
    <div class="personalized">
        <div class="title">
            <span>热门精选</span>
        </div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in personalized" :key="index">
                <personalized-item :item="item"  />
            </el-col>
        </el-row>
        <div class="title">
            <span>个性化推荐</span><span class="sm-tips">根据你的口味生成，播放和收藏越多，推荐越准</span>
        </div>
        <recommend-item />
        <div class="title">
            <span>新歌速递</span><span class="btn-more"><el-button size="mini">更多></el-button></span>
        </div>
        <newsongs-item :dataLeft="newsongLeft" :dataRight="newsongRight" />
    </div>
</template>

<script>
    import { personalized, newSongs } from "@/api";
    import PersonalizedItem from './personalized-item';
    import NewsongsItem from './newsong-item';
    import RecommendItem from './recommend-item';
import { constants } from 'http2';

    export default {
        components: {
            PersonalizedItem,
            NewsongsItem,
            RecommendItem
        },
        data() {
            return {
                personalized: [],
                newsongLeft: [],
                newsongRight: []
            }
        },
        mounted() {
            this.getPersonalized()
            this.getNewSongs()
        },
        methods: {
            getPersonalized() {
                personalized().then(res => {
                    // console.log(res)
                    let result = res.result;
                    this.personalized = result.filter((item, index) => index<8 );
                })
            },
            formatNum(num) {
                if(num<10){
                    num = `0${num}`
                }
                return num;
            },
            getNewSongs() {
                let type = 0;
                newSongs(type).then(res => {
                    // console.log("new songs",res)
                    let result = res.data;
                    let data = [];
                    for(let i in result){
                        let artists = result[i].artists;
                        let singers = [];
                        for(let j in artists){
                            singers.push(artists[j].name)
                        }
                        data.push({
                            num: this.formatNum(Number(i)+1),
                            name: result[i].name,
                            singer: singers.join(','),
                            exclusive: result[i].exclusive
                        })
                    }
                    this.newsongLeft = data.filter((item,index) => index<20 && index%2===0 );
                    this.newsongRight = data.filter((item,index) => index<20 && index%2!=0 );
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .personalized {
        padding: 0 40px;
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
            .sm-tips{
                font-size: 12px;
                color: #666;
                font-weight: bold;
                border-bottom: 0;
                margin-left: 20px;
            }
            .btn-more{
                font-size: 12px;
                color: #666;
                border-bottom: 0;
                position: absolute;
                right: 0;
            }
            /deep/ .el-button{
                padding: 5px 10px;
            }
        }
        .class-list {
            display: flex;
            padding: 15px 0;
            .class-item:first-child {
                margin-left: 0;
            }
            .class-item {
                flex: 1;
                flex-shrink: 0;
                background-color: white;
                margin-left: 5px;
                text-align: center;
                font-size: 12px;
                color: #555;
                line-height: 30px;
                cursor: pointer;
            }
            .class-item:hover {
                background-color: #eeeeee;

            }
        }
        .personalized-list{
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
