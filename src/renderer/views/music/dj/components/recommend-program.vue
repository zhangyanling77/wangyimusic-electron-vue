<template>
    <div class="program-item">
        <div class="cover">
            <img :src="item.coverUrl" />
             <div class="bg hover-bg">
                <i class="iconfont icon-play-circle-fill"></i>
            </div>
        </div>
        <div class="info">
            <p class="title">{{ item.name }}</p>
            <p class="descp">{{ item.reason }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>
    .program-item{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .cover{
            position: relative;
            width: 100px;
            height: 100px;
            background-color: #fff;
            img {
                width: 100%;
            }
            .bg {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0);
                .iconfont {
                    font-size: 40px;
                    color: rgba(0,0,0,0.3);
                    opacity: 1;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    cursor: pointer;
                    transition: color 0.8s linear;
                }

            }
        }
        .info{
            flex: 1;
            color: #333;
            padding-left: 10px;
            .title{
                font-size: 14px;
                overflow: hidden;
            }
            .descp{
                font-size: 12px;
                overflow: hidden;
                color: #666;
            }
        }
    }
    .program-item:first-child {
        margin-left: 0;
    }
    
</style>
