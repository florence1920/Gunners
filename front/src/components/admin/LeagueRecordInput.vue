<template>
  <div>
      <form @submit.prevent="submitLeague">
          <team-list></team-list>
          <div>
              Team <input type="text" v-model="team">
              경기수 <input type="number" v-model="pl">
              골득실 <input type="number" v-model="gd">
              승점 <input type="number" v-model="pts">
          </div>
          <button type="submit">입력</button>
      </form>
  </div>
</template>

<script>
import TeamList from './TeamList.vue'
import { submitLeagueTeam } from '@/api/admin.js'
export default {
  components: { TeamList },
  data : function(){
      return{
          team :'',
          pl: '',
          gd: '',
          pts: '',
      }
  },
  methods:{
      submitLeague (){
          const leagueData = {
              team : this.team,
              pl : this.pl,
              gd : this.gd,
              pts : this.pts
          };
          console.log(leagueData);
          submitLeagueTeam(leagueData);

      }
  },

}
</script>

<style>

</style>