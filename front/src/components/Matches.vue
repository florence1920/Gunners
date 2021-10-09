<template>
<div>
  <p class="tit">일정</p>
  <ul class="matchesWrap">
    <li class="matchesDate">
      <ul class="detail">
        <li class="date">
          <p>18</p>
        </li>
        <div class="month">10월</div>
        <div class="day">월요일</div>
        <div class="year">2021년</div>
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
    <div class="leagueInfo"><img src="../assets/League/EPL.png" alt="" width="45px"></div>
  </ul>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.matchesWrap {overflow: hidden; background: #fff; border: 1px solid rgba(0, 0, 0, .1); padding: 25px 0 25px 25px; margin: 0 0 40px;} 
.matchesWrap > li {float: left;}
.matchesWrap > div {float: left;}

.matchesWrap .matchesDate {width: 20%; padding: 0 15px;}
.matchesWrap .matchesDate > ul > li {margin: 10px 0;}
.matchesWrap .matchesDate .detail {overflow: hidden; margin: 20px 0 0 0;}
.matchesWrap .matchesDate .detail > li {float: left;}
.matchesWrap .matchesDate .detail > div {margin: 5px 0;}
.matchesWrap .matchesDate .detail > div.year {font-size: 13px;}
.matchesWrap .matchesDate .detail > div.day {font-size: 16px; font-weight: 600;}
.matchesWrap .matchesDate .detail > div.month {font-size: 13px;}
.matchesWrap .matchesDate .detail .date { width: 50px; height: 50px; border: 1px solid #e5e5e5; border-radius: 4px; margin-right: 18px; }
.matchesWrap .matchesDate .detail .date p {font-weight: 600; text-align: center; font-size: 20px; color: #111; line-height: 48px;}

.matchesWrap .matchesInfo {overflow: hidden; width: 60%; margin: 20px 0 0 0;}
.matchesWrap .matchesInfo > ul {float: left; text-align: center;}
.matchesWrap .matchesInfo .team {overflow: hidden; width: 30%; line-height: 62px;}
.matchesWrap .matchesInfo .team > li {float: left; margin: 0 10px;}
.matchesWrap .matchesInfo .team > li p {color: #8e8e8e;}
.matchesWrap .matchesInfo .detail {width: 40%;}
.matchesWrap .matchesInfo .detail p {font-weight: 600;}
.matchesWrap .matchesInfo .detail > li {margin: 10px 0 0 0;}

.matchesWrap .leagueInfo {width: 20%; text-align: center; padding: 15px 15px;}

</style>