<template>
  <div>
    <div class="matchWrap">
      <ul class="matchDate">
        <li><p>2021.Oct.18</p></li>
        <li><p>20:00</p></li>
        <li><p>Emirates Stadium</p></li>
      </ul>
      <ul class="match">
        <li class="team homeTeam">
          <img src="../assets/EPL_LOGO/Arsenal.png" alt="" width="100px">
          <p>Arsenal</p>
        </li>
        <div class="matchDetail">
          <p>Premier League</p>
          <div class="matchTimer"></div>
        </div>
        <li class="team awayTeam">
          <img src="../assets/EPL_LOGO/CrystalPalace.png" alt="" width="100px">
          <p>Crystal Palace</p>
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
  .matchWrap {overflow: hidden; padding: 32px 40px; background: #002d72;}
  .matchWrap ul {float: left;}
  .matchWrap .matchDate {width: 25%;}
  .matchWrap .matchDate li {width: 202.28px; padding: 19px 5px; border-bottom: 1px solid rgba(255,255,255,.2);}
  .matchWrap .matchDate li p {color: #fff; font-size: 18px; font-weight: 600;}

  .matchWrap .match {overflow: hidden; width: 75%;}
  .matchWrap .match .team {float: left; margin: 20px 40px 0; text-align: center;}
  .matchWrap .match .team > p {color: #fff; font-size: 20px; margin-top: 20px;}

  .matchWrap .match .matchDetail {float: left; margin: 30px 0;}
  .matchWrap .match .matchDetail p {color: #fff; text-align: center;}
  .matchWrap .match .matchDetail .matchTimer {width: 304.8px; height: 67px; background: #fff; margin: 30px 20px 20px;}


</style>