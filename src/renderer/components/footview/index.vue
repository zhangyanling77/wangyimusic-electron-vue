<template>
    <div class="foot-wrap">
        <player-view/>
    </div>
</template>

<script>
    import PlayerView from './player';

    export default {
        components:{
            PlayerView
        }
    }
</script>

<style lang="scss" scoped>
.foot-wrap{
    position: relative;
    z-index: 200;
}
</style>

