<template>
    <div class="schedule">
        <div class="matchWrap">
            <p class="tit">Next Match</p>
            <recent-match></recent-match>
            <p class="tit">Fixture</p>
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
    .schedule .tit {font-size: 22px; font-weight: 600; color: #000; border-radius: 3px; margin: 30px 0;}
    div {overflow: hidden;}
    .matchWrap {float: left; width: 70%;}
    .recordWrap {float: left; width: 30%;}
    
</style>