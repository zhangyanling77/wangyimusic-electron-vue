<template>
    <div class="wrap">
        <menus />
        <!-- <div class="music-player">
            <img src="~@/assets/imgs/bob.png" alt="">
            <div class="music-info">
                <p>{{spliceStr('我在你方圆几里',5)}}</p>
                <p>{{spliceStr('薛之谦',5)}}</p>
            </div>
            <div class="opt">
                <p><i class="iconfont icon-shoucang"></i></p>
                <p><i class="el-icon-delete"></i></p>
            </div>
        </div> -->
    </div>
</template>

<script>
import menus from './menus';

export default {
    components: {
        menus
    },
    methods: {
        spliceStr(str, num){
            if (!str) {
                return;
            }
            return str.length > num ? str.slice(0, num) + "..." : str;
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrap{
        flex: 1;
        display: flex;
        flex-direction: column;
        .music-player{
            position: relative;
            height: 80px;
            border: 1px solid #ddd;
            >img{
                width: 60px;
                height: 60px;
                border: 1px solid #ddd;
                border-radius: 4px;
                margin: 10px 5px 0 10px;
            }
            .music-info{
                display: inline-block;
                vertical-align: middle;
                >p{
                   margin: 5px 0;
                   font-size: 12px;
                   &:last-of-type{
                       color: #666;
                   }
                }
            }
            .opt{
                position: absolute;
                right: 10px;
                top: 20px;
                >p{
                    margin: 5px 0;
                    font-size: 12px;
                    font-weight: bold;
                    color: #666;
                    cursor: pointer;
                }
            }
        }
    }
</style>
