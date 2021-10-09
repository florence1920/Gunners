<template>
  <div>      
      <form @submit.prevent="submitMatch">
      <div class="inputrowWrap">
        <div class="inputrow">
          <p>매치 일시</p>
          <input id="matchDate" type="datetime-local" v-model="matchDate">
        </div>
        <div class="inputrow last">
          <p>경기장</p>
          <input id="ground" type="text" v-model="ground">
        </div>
        <div class="inputrow">
          <p>상대팀</p>
          <input id="opponent" type="text" v-model="opponent">
        </div>
        <div class="inputrow last">
          <p>대회 이름</p>
          <input id="leagueName" type="text" v-model="leagueName">
        </div>
        <button type="submit" class="btn">제출</button>
      </div>
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

<style scoped>
  .tit {font-size:26px; font-weight: 600; margin: 50px 0 15px;}
  .inputrowWrap {overflow: hidden;}
  .inputrowWrap .inputrow {float: left; width: 49%; margin: 0 2% 15px 0;}
  .inputrowWrap .inputrow.last {width: 49%; margin: 0 0 15px 0;}
  .inputrowWrap .inputrow p {display: inline-block; width: 100px; color:#666; font-size:13px; font-weight: 600; margin: 0 0 5px;}
  .inputrowWrap .inputrow input {width: 100%; line-height: 45px; text-indent: 15px;}
  .btn {display: block; width: 110px; line-height: 47px; background: #333; border: 0; border-radius: 0; color:#fff; font-size:13px; cursor: pointer; margin: 100px auto 0;}
  .btn:hover {background: #000;}
</style>