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
        const recordWrap = document.querySelector('.recordWrap');
        if (st >= 500) {
            //$('.cateBox').css({ position: 'fixed', top: '15px', right: 'calc((100% - 1160px) / 2)' })
            recordWrap.style.display = 'none';
        } else if (st < 500) {
            //$('.cateBox').css({ position: 'absolute', top: '0', right: '0' })
            recordWrap.style.display = 'block';
        }
        }
    }
}
</script>
    
<style scoped>
    .schedule {height: 2000px;}
    div {overflow: hidden;}
    .matchWrap {float: left; width: 70%;}
    .recordWrap {float: left; width: 30%;}
</style>