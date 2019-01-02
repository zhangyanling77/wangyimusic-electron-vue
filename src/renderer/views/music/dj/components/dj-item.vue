<template>
    <div class="dj-item">
        <div class="cover">
            <img :src="item.picUrl"/>
            <div class="play-count">
                <i class="el-icon-star-on"></i>
                <span>{{item.subCount|changeCount}}</span>
            </div>
        </div>
        <div class="info">
            <div class="title hover-color line-2">{{item.name}}</div>
            <div class="nickname">{{item.dj.nickname}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .dj-item {
        .cover {
            cursor: pointer;
            position: relative;
            img {
                width: 100%;
            }
            .play-count {
                position: absolute;
                right: 0;
                top: 0;
                color: white;
                font-size: 13px;
                background-image: -webkit-linear-gradient(left, transparent, #999);
            }
        }
        .info {
            padding: 10px 0;
            overflow: hidden;
            height: 60px;
            overflow: hidden;
            .title {
                font-size: 13px;
                color: #333;
                line-height: 20px;
                overflow: hidden;
                cursor: pointer;
            }
            .title:hover {
                color: #ab3419;
            }
            .nickname {
                font-size: 12px;
                color: #666;
                line-height: 20px;
                height: 20px;
                margin-top: 5px;
            }
        }
    }

    .dj-item:first-child {
        margin-left: 0;
    }
</style>
