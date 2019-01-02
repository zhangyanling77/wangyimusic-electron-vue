<template>
    <div class="global-item" @click="itemClick">
        <div class="cover">
            <img :src="item.coverImgUrl" />
            <div class="bg hover-bg">
                <i class="iconfont icon-play-circle-fill" @click="playClick" onClick="event.cancelBubble = true"></i>
            </div>
            <div class="play-count">
                <i class="iconfont icon-customerservice"></i>
                <span>{{item.subscribedCount|changeCount}}</span>
            </div>
        </div>
        <div class="info">
            <div class="title hover-color">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        methods: {
            itemClick() {
                // this.$router.push({ name: 'playlist-detail', query: { id: this.item.id } })
            },
            playClick(){
                // this.$store.dispatch('playPlaylist',this.item.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .global-item {
        .cover {
            position: relative;
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
                    color: white;
                    opacity: 0;
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    cursor: pointer;
                    transition: color 0.8s linear
                }

            }
            .bg:hover {
                background: rgba(0, 0, 0, 0.3);
                .iconfont {
                    transition: color 0.3s linear;
                    opacity: 1;
                    color: white;
                }
                .iconfont:hover {
                    color: #ab3419;
                }
            }
            .play-count {
                position: absolute;
                right: 0;
                top: 0;
                color: white;
                font-size: 13px;
                background-image: -webkit-linear-gradient(left, transparent, #999)
            }
        }
        .info {
            height: 60px;
            padding: 10px 0;
            overflow: hidden;
            .title {
                font-size: 13px;
                color: #333;
                line-height: 20px;
                height: 40px;
                overflow: hidden;
                cursor: pointer;
            }
            .title:hover {
                color: #ab3419;
            }
        }
    }

    .personalized-item:first-child {
        margin-left: 0;
    }
</style>
