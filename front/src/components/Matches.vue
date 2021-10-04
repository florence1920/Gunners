<template>
<ul class="matchesWrap">
  <li class="matchesDate">
    <ul>
      <li><p>Month</p></li>
      <li><p>Date</p></li>
      <li><p>Year</p></li>
    </ul>
  </li>
  <li class="matchesInfo">
    <ul class="team homeTeam">
      <li><p>homeTeam</p></li>
      <li><img src="" alt=""></li>
    </ul>
    <ul class="information"></ul>
    <ul class="team awayTeam">
      <li><img src="" alt=""></li>
      <li><p>awayTeam</p></li>
    </ul>
  </li>
  <li class="leagueInfo">
    <p>Premier League</p>
  </li>
</ul>
</template>

<script>
export default {

}
</script>

<style scoped>
.matchesWrap {overflow: hidden; background: #fff; padding: 25px 0 25px 25px; margin: 20px 0;} 
.matchesWrap > li {float: left;}
.matchesWrap .matchesDate {width: 20%;}
.matchesWrap .matchesDate > ul > li {margin: 10px 0;}
.matchesWrap .matchesInfo {width: 60%;}
.matchesWrap .leagueInfo {overflow: hidden; width: 20%;}
.matchesWrap .leagueInfo .team {float: left;}

/* .matchesWrap > ul {float: left;}
.matchesDate {width: 20%;}
.matchesDate > li {margin: 10px 0;}
.matchesInfo {width: 70%;}
.matchesInfo > li {overflow: hidden;}
.matchesInfo > li > ul {float: left;}
.matchesInfo  > li .team {overflow: hidden; width: 33.33%;}
.matchesInfo  > li .team > li {float: left; margin: 0 20px;} 

.matchesInfo > li .information {width: 33.34%;}
.leagueType {width: 10%;}   */
</style>