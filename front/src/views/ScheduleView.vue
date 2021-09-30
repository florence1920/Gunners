<template>
    <div>
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
    }
}
</script>
    
<style scoped>
    div {overflow: hidden;}
    .matchWrap {float: left; width: 70%;}
    .recordWrap {float: left; width: 30%;}
</style>