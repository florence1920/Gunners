<template>
  <div>

    <div class="tableWrap teamList">
      <ul class="thead">
        <li>팀명</li>
        <li>경기수</li>
        <li>골득실</li>
        <li>승점</li>
      </ul>
    <ul class="trow" v-for="(player, index) in this.$store.state.players" v-bind:key="index">
        <li>{{player.playerName}}</li>
        <li>{{player.backNumber}}</li>
        <li>{{player.position.kPos}}</li> 
        <li>{{player.position.ePos}}</li>
        <li>{{player.nation}}</li>
    </ul>
    <form action="">
        <ul class="trow" v-for="(player, index) in this.$store.state.players" v-bind:key="index">
            <li><input type="text" v-model="player.playerName"></li>
            <li><input type="number" v-model="player.backNumber"></li>
            <li><input type="text" v-model="player.position.kPos"></li>
            <li><input type="text" v-model="player.position.ePos"></li>
            <li><input type="text" v-model="player.nation"></li>
        </ul>
    </form>
        
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created(){
    
    this.$store.dispatch('GET_PLAYER');
    
  },
  methods:{
    
  }
}
</script>

<style scoped>
  .tableWrap .thead {overflow: hidden;}
  .tableWrap .thead li {float: left;}
  .tableWrap .trow {overflow: hidden;}
  .tableWrap .trow li {float: left;}

  .teamList {margin: 0 auto 50px;}
  .teamList li {text-align: center; padding: 18px 0;}
  .teamList .thead {background: #333;}
  .teamList .thead li {color:#fff;}
  .teamList .thead li:nth-child(1) {width:35%; text-align: left; padding: 18px 40px;}
  .teamList .thead li:nth-child(2) {width:15%;}
  .teamList .thead li:nth-child(3) {width:15%;}
  .teamList .thead li:nth-child(4) {width:15%;}
  .teamList .trow {background: #eee; border-bottom: 1px solid #e1e1e1;}
  .teamList .trow li:nth-child(1) {width:35%; text-align: left; padding: 18px 40px;}
  .teamList .trow li:nth-child(2) {width:15%;}
  .teamList .trow li:nth-child(3) {width:15%;}
  .teamList .trow li:nth-child(4) {width:15%;}
</style>