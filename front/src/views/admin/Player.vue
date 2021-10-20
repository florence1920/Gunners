<template>
    <div class="wrapAll">

    <div class="w1100">
      <p class="head">팀 경기 관리</p>

      <p class="tit">입력</p>
      <player-stat-input></player-stat-input>

      <p class="tit">결과물</p>
      <player-stat-lists></player-stat-lists>
    </div>

  </div>  
</template>

<script>
import PlayerStatInput from '../../components/admin/PlayerStatInput.vue'
import PlayerStatLists from '../../components/admin/PlayerStatLists.vue'
export default {
  components: { PlayerStatInput, PlayerStatLists },

}
</script>

<style scoped>
.tit {font-size:26px; font-weight: 600; margin: 60px 0 15px;}
</style>