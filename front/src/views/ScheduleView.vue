<template>
    <div class="wrapAll">
        <div class="schedule_left">
            <recent-match></recent-match>
            <matches></matches>
        </div>
        <league-record></league-record>
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
            $('.recordWrap').css({ position: 'absolute', top: '0', right: '0' })
        }
        }
    }
}
</script>
    
<style scoped>
.wrapAll .schedule_left {width: 70%;}
</style>