<template>
    <div class="schedule">
        <div class="matchWrap">
            <recent-match></recent-match>
            <matches></matches>
        </div>
        <div class="recordWrap">
            <league-record></league-record>
        </div>
    </div>
</template>

<script>
import LeagueRecord from '@/components/LeagueRecord.vue';
import Matches from '@/components/Matches.vue';
import RecentMatch from '@/components/RecentMatch.vue';
import $ from 'jquery';

export default {
    components:{
        LeagueRecord,
        RecentMatch,
        Matches
    },
    created () {
    window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
        const st = document.scrollingElement.scrollTop
        console.log(st)
        if (st >= 300) {
            $('.recordWrap').css({ position: 'fixed', top: '15px', right: '0' })
        } else if (st < 300) {
            $('.recordWrap').css({ position: 'absolute', top: '209px', right: '0' })
        }
        }
    }
}
</script>
    
<style scoped>
    .schedule {height: 2000px;}
    div {overflow: hidden;}
    .matchWrap {float: left; width: 70%; padding: 0 10px;}
    .recordWrap {float: left; width: 30%;}
    
</style>