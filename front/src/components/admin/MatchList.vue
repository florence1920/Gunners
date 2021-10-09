<template>
  <div>

    <div class="tableWrap matchList">
      <ul class="thead">
        <li>경기날짜</li>
        <li>상대</li>
        <li>경기장</li>
        <li>리그</li>
      </ul>
      <ul class="trow" v-for="(match, index) in this.$store.state.matches" :key="index">
          <li>{{match.matchData}}</li>
          <li>{{match.opponent}}</li>
          <li>{{match.ground}}</li>
          <li>{{match.leagueName}}</li>
        </ul>
    </div>
      
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('GET_MATCHES');
  }
}
</script>

<style>
  .tableWrap .thead {overflow: hidden;}
  .tableWrap .thead li {float: left;}
  .tableWrap .trow {overflow: hidden;}
  .tableWrap .trow li {float: left;}

  .matchList {margin: 0 auto 50px;}
  .matchList li {text-align: center; padding: 18px 0;}
  .matchList .thead {background: #333;}
  .matchList .thead li {color:#fff;}
  .matchList .thead li:nth-child(1) {width:35%; text-align: left; padding: 18px 40px;}
  .matchList .thead li:nth-child(2) {width:15%;}
  .matchList .thead li:nth-child(3) {width:35%;}
  .matchList .thead li:nth-child(4) {width:15%;}
  .matchList .trow {background: #eee; border-bottom: 1px solid #e1e1e1;}
  .matchList .trow li:nth-child(1) {width:35%; text-align: left; padding: 18px 40px;}
  .matchList .trow li:nth-child(2) {width:15%;}
  .matchList .trow li:nth-child(3) {width:35%;}
  .matchList .trow li:nth-child(4) {width:15%;}
</style>