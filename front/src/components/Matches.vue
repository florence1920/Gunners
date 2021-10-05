<template>
<div>
  <ul class="matchesWrap">
    <li class="matchesDate">
      <ul>
        <li><p>October</p></li>
        <li><p>18</p></li>
        <li><p>2021</p></li>
      </ul>
    </li>
    <li class="matchesInfo">
      <ul class="team homeTeam">
        <li><p>Arsenal</p></li>
        <li><img src="../assets/EPL_LOGO/Arsenal.png" alt="" width="50px"></li>
      </ul>
      <ul class="detail">
        <li><p>20 : 00</p></li>
        <li><p>Emirates Stadium</p></li>
      </ul>
      <ul class="team awayTeam">
        <li><img src="../assets/EPL_LOGO/CrystalPalace.png" alt="" width="45px"></li>
        <li><p>Crystal Palace</p></li>
      </ul>
    </li>
    <li class="leagueInfo">
      <p>Premier League logo</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.matchesWrap {overflow: hidden; background: #fff; padding: 25px 0 25px 25px; margin: 20px 0;} 
.matchesWrap > li {float: left;}

.matchesWrap .matchesDate {width: 20%; padding: 0 15px;}
.matchesWrap .matchesDate > ul > li {margin: 10px 0;}
.matchesWrap .matchesDate > ul > li > p {font-weight: 600;}

.matchesWrap .matchesInfo {overflow: hidden; width: 60%; margin: 20px 0 0 0;}
.matchesWrap .matchesInfo > ul {float: left; text-align: center;}
.matchesWrap .matchesInfo .team {overflow: hidden; width: 30%; line-height: 62px;}
.matchesWrap .matchesInfo .team > li {float: left; margin: 0 10px;}
.matchesWrap .matchesInfo .detail {width: 40%;}
.matchesWrap .matchesInfo .detail p {font-weight: 600;}
.matchesWrap .matchesInfo .detail > li {margin: 10px 0 0 0;}

.matchesWrap .leagueInfo {width: 20%; padding: 0 15px;}

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