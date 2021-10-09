<template>
  <div>
      <h1>matchlist</h1>
      <ul>
        <li v-for="(match, index) in this.$store.state.matches" :key="index">
          매치 date : {{match.time[0]}}/
          상대방 : {{match.opponent}}/
          경기장 : {{match.ground}}/
          리그 : {{match.leagueName}}
          남은시간 : {{match.time}}
        </li>
      </ul>
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

</style>