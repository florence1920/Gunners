<template>
<div class="listWrap">
    <p class="tit">Premier League</p>
    <div class="leagueTable">
        <ul class="head">
            <li><p>Rank</p></li>
            <li class="clubName"><p>Team</p></li>
            <li><p>Pl.</p></li>
            <li><p>Gd.</p></li>
            <li><p>Pts.</p></li>
        </ul>
        <div class="divide"></div>
        <ul class="list">
            <li v-for="(team, index) in this.$store.state.teams" v-bind:key="team.teamName">
                <p class="rank">{{index+1}}</p>
                <p class="team">{{team.teamName}}</p>
                <p>{{team.pl}}</p>
                <p>{{team.gd}}</p>
                <p>{{team.pts}}</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>

import $ from 'jquery';


export default {
    created () {
    window.addEventListener('scroll', this.handleScroll),
    this.$store.dispatch('GET_TEAMLIST');
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
        const st = document.scrollingElement.scrollTop
        console.log(st)
        if (st >= 140) {
            $('.listWrap').css({ position: 'fixed', top: '15px', right: '40px' })
        } else if (st < 140) {
            $('.listWrap').css({ position: 'absolute', top: '40px', right: '40px' })
        }
        }
    }
}
</script>

<style scoped>
.listWrap  {width: calc(30% - 60px); position: absolute;top: 40px;right: 40px;}

.listWrap .leagueTable {background: #fff; border: 1px solid rgba(0, 0, 0, .1);}
.listWrap .leagueTable .head {overflow: hidden; border-bottom: 1px solid #000; margin: 0 15px 28px;}
.listWrap .leagueTable .head li {float: left; width: 15%; padding: 19px 0;}
.listWrap .leagueTable .head .clubName {width: 40%;}
.listWrap .leagueTable .head .clubName p {text-align: left;}
.listWrap .leagueTable .head li p {font-size: 16px; font-weight: 600; text-align: center;}

.listWrap .leagueTable .list li {overflow: hidden; margin: 0 15px 15px;}
.listWrap .leagueTable .list li p {float: left; width: 15%; font-size: 16px; font-weight: 600; text-align: center;}
.listWrap .leagueTable .list .team {width: 40%; text-align: left;}

</style>