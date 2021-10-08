<template>
  <div>
      <h1>Match Input</h1>
      <form @submit.prevent="submitMatch">
          <div>
            <label for="matchDate">매치 일시</label>
            <input id="matchDate" type="datetime-local" v-model="matchDate">
          </div>
          <div>
            <label for="ground">경기장</label>
            <input id="ground" type="text" v-model="ground">
          </div>
          <div>
            <label for="opponent">상대팀</label>
            <input id="opponent" type="text" v-model="opponent">
          </div>
          <div>
            <label for="leagueName">대회 이름</label>
            <input id="leagueName" type="text" v-model="leagueName">
          </div>
        <button type="submit">제출</button>
      </form>
  </div>
</template>

<script>
import {submitMatches} from '@/api/admin.js'
export default {
    data() {
        return {
            matchDate: '',
            ground: '',
            opponent: '',
            leagueName: '',
        }
    },
    methods:{
        submitMatch(){
          submitMatches({
                matchData : this.matchDate,
                ground : this.ground,
                opponent : this.opponent,
                leagueName : this.leagueName
            });
            
        }
    },

    
}
</script>

<style>

</style>