<template>
  <div>
      <h1>matchlist</h1>
      <ul>
        <li v-for="(match, index) in this.$store.state.matches" :key="index">
          매치 date : {{match.matchData}}/
          상대방 : {{match.opponent}}/
          경기장 : {{match.ground}}/
          리그 : {{match.leagueName}}
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