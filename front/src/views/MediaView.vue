<template>
    <div class="wrapAll">
        <div class="mediaWrap">
            <ul class="left">
                <li>
                    <!-- <div class="cover"></div> -->
                    <LazyYoutube
                        ref="youtubeLazyVideo"
                        :src="youtubeLink1"
                        max-width="720px"
                        aspect-ratio="16:9"
                        thumbnail-quality="standard"
                    />
                </li>
                <li>
                    <LazyYoutube
                        ref="youtubeLazyVideo"
                        :src="youtubeLink2"
                        max-width="720px"
                        aspect-ratio="16:9"
                        thumbnail-quality="standard"
                    />                    
                </li>
            </ul>
            <ul class="right">
                <li>
                    <div class="cover"></div>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </div>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";
export default {
    name: 'App',
    components: {
            LazyYoutube
        },
    data () {
        return {
        youtubeLink1:'https://www.youtube.com/watch?v=_U2clCVhKd8',
        youtubeLink2:'https://www.youtube.com/watch?v=tosLBcAX1vk'
        }
    },
    methods: {
        handleClick(event, ref) {
        this.$refs[ref][event]()
        },
        handleSearch(e, platform) {
        if(platform === 'youtube')
            this.youtubeLink = e.target.value;
        else
            this.vimeoLink = e.target.value;
        }
    }

}
</script>

<style scoped>
    .mediaWrap {overflow: hidden;}
    .mediaWrap .left,.right {float: left;}

    .mediaWrap .left {width: 50%;}
    .mediaWrap .left li {height: calc((100vh - 100px) / 1.5); background: #ccc; position: relative;}
    .mediaWrap .left li .cover {width: 100%; height: 100%; background: rgba(0,0,0,.3); position: absolute;top: 0;left: 0;}

    .mediaWrap .right {overflow: hidden; width: 50%;}
    .mediaWrap .right li {float: left; width: 50%; height: calc((100vh - 100px) / 2.25); background: red; position: relative;}
    .mediaWrap .right li .cover {width: 100%; height: 100%; background: rgba(0,0,0,.3); position: absolute;top: 0;left: 0;}
</style>