<template>
    <div class="dj-item">
        <div class="cover">
            <img :src="item.picUrl" />
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
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .dj-item {
        .cover {
            position: relative;
            img {
                width: 100%;
            }
        }
        .info {
            height: 60px;
            padding: 10px 0;
            overflow: hidden;
            .title {
                font-size: 12px;
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

    .dj-item:first-child {
        margin-left: 0;
    }
</style>
