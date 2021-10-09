<template>
  <div>
      <div class="tableWrap matchList">
            <p class="head">경기 일정 관리</p>
            <ul class="thead">
                <li>일시</li>
                <li>상대팀</li>
                <li>경기장</li>
                <li>리그</li>
            </ul>
            <ul class="trow" v-for="(match, index) in this.$store.state.matches" :key="index">
                <li>{{match.time[0]}} // {{match.time}}</li>
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
  .matchList .thead li:nth-child(1) {width:30%; text-align: left; padding: 18px 40px;}
  .matchList .thead li:nth-child(2) {width:20%;}
  .matchList .thead li:nth-child(3) {width:40%;}
  .matchList .thead li:nth-child(4) {width:10%;}
  .matchList .trow {background: #eee; border-bottom: 1px solid #e1e1e1;}
  .matchList .trow li:nth-child(1) {width:30%; text-align: left; padding: 18px 40px;}
  .matchList .trow li:nth-child(2) {width:20%;}
  .matchList .trow li:nth-child(3) {width:40%;}
  .matchList .trow li:nth-child(4) {width:10%;}
</style>