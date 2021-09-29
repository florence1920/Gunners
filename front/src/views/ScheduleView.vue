<template>
    <div>
        <recent-match></recent-match>
        <matches></matches>
        <league-record></league-record>
    </div>
</template>

<script>
import LeagueRecord from '../components/LeagueRecord.vue';
import Matches from '../components/Matches.vue';
import RecentMatch from '../components/RecentMatch.vue';
export default {
    components:{
        LeagueRecord,
        RecentMatch,
        Matches
    }
}
</script>

<style>

</style>