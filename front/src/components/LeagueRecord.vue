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
            <li>
                <p class="rank">1</p>
                <p class="team">Chelsea</p>
                <p>7</p>
                <p>12</p>
                <p>16</p>
            </li>
            <li>
                <p class="rank">2</p>
                <p class="team">LiverPool</p>
                <p>7</p>
                <p>11</p>
                <p>15</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.listWrap .tit {font-size: 22px; font-weight: 600; color: #000; margin: 0 20px 30px 30px;}

.listWrap .leagueTable {width: 375px; background: #fff; margin: 0 10px;}
.listWrap .leagueTable .head {overflow: hidden;  border-bottom: 1px solid #000; margin: 0 15px 28px;}
.listWrap .leagueTable .head li {float: left; width: 15%; padding: 19px 0;}
.listWrap .leagueTable .head .clubName {width: 40%;}
.listWrap .leagueTable .head .clubName p {text-align: left;}
.listWrap .leagueTable .head li p {font-size: 16px; font-weight: 600; text-align: center;}

.listWrap .leagueTable .list li {overflow: hidden; margin: 0 15px 15px;}
.listWrap .leagueTable .list li p {float: left; width: 15%; font-size: 16px; font-weight: 600; text-align: center;}
.listWrap .leagueTable .list .team {width: 40%; text-align: left;}

</style>