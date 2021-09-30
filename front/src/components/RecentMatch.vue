<template>
  <div>
    <p>Next Match</p>
    <div class="contBox">
      <ul class="home">
        홈팀
        <li><img src="" alt="">홈팀 로고</li>        
        <li>홈팀 이름</li>
      </ul>
      <ul class="matchInfo">
        경기정보
        <li>타이머</li>
        <ul>
          <li>경기시간</li>
          <li>이모티콘</li>
        </ul>
      </ul>
      <ul class="away">
        어웨이팀
        <li><img src="" alt="">어웨이팀 로고</li>        
        <li>어웨이팀 이름</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  div {background: #eee;}
  div > p {font-size: 18px;}
  .contBox {overflow: hidden; background: #fff; text-align: center;}
  .contBox > ul {float: left;}
  .contBox .home {width: 33.33%;}
  .contBox .matchInfo {width: 33.34%;}
  .contBox .away {width: 33.33%;}
</style>