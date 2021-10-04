<template>
  <div>
    <p>Next Match</p>
    <div class="contBox">
      <ul class="home">
        <!-- 홈팀 -->
        <li><img src="../assets/EPL_LOGO/Brighton.png" alt="" width="100px"></li>        
        <li class="team"><p>Brighton</p></li>
      </ul>
      <ul class="matchInfo">
        <!-- 경기정보 -->
        <li>
          
        </li>
        <ul>
          <li><p>American Express Community Stadium</p></li>
          <li>
            <img src="" alt="">날씨 이모티콘
          </li>
        </ul>
      </ul>
      <ul class="away">
        <!-- 어웨이팀 -->
        <li><img src="../assets/EPL_LOGO/Arsenal.png" alt="" width="100px"></li>        
        <li class="team">Arsenal</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {background: #4E4949;}
  div > p {font-size: 18px; color: #fff;}
  .team {font-weight: 600; margin: 20px 0 0 0;}
  .contBox {overflow: hidden; color: #fff; background: #4E4949; text-align: center;}
  .contBox > ul {float: left; padding: 30px 40px;}
  .contBox .home {width: 33.33%;}
  .contBox .matchInfo {width: 33.34%;}
  .contBox .matchInfo > li {margin: 20px 0 40px 0;}
  .contBox .matchInfo > ul {overflow: hidden; text-align: center;}
  .contBox .matchInfo > ul > li {margin: 10px 0;}
  .contBox .away {width: 33.33%;}
</style>