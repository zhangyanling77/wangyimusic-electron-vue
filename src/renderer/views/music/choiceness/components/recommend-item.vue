<template>
    <div class="recommend">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple" style="padding-bottom:15px;">
                    <img src="~@/assets/imgs/bob.png" />
                    <div class="descrip">
                        <p>每日歌曲推荐</p>
                        <p>根据你的口味生成，每天更新！</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light" style="padding-bottom:15px;">
                    <img src="~@/assets/imgs/logo.png" />
                    <div class="descrip">
                        <p>你的青春里有没有属于你的一首歌？</p>
                        <p>根据你喜欢的单曲《那些你很冒险的梦》推荐</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple"  style="border-bottom:0;padding-top:15px;">
                    <img src="~@/assets/imgs/icon.png" />
                    <div class="descrip">
                        <p>华语百首|回忆伤人无声，唱不尽世间遗憾</p>
                        <p>根据你喜欢的单曲《如果我们变成回忆》推荐</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light" style="border-bottom:0;padding-top:15px;">
                    <img src="~@/assets/imgs/frank.png" />
                    <div class="descrip">
                        <p>失恋必听歌单|因为你突然听懂了很多歌</p>
                        <p>根据你喜欢的单曲《我爱的人》推荐</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .recommend{
    margin-bottom: 20px;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    border: 1px solid #ddd;
    border-radius: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    >img{
        width: 100px;
        height: 100px;
        border: 1px solid #ddd;
        background-color: #fff;
        vertical-align: middle;
    }
    .descrip{
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        flex: 1;
        overflow: hidden;
        >p{
            margin: 0;
            overflow: hidden;
            &:first-child{
                font-size: 16px;
                margin-bottom: 10px;
            }
            &:last-child{
                font-size: 12px;
                color: #666;
            }
        }
    }
  }
  .bg-purple {
    border-left: 0;
    border-top: 0;
    border-right: 0;
    padding-right: 15px;
  }
   .bg-purple-light {
    border-right: 0;
    border-top: 0;
    padding-left: 15px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
