<template>
  <div>
      <form @submit.prevent="editPlayer">
      <div class="inputrowWrap">
        <div class="inputrow">
          <p>선수 이름</p>
          <input type="text" v-model="playerName">
        </div>
        <div class="inputrow last">
          <p>등번호</p>
          <input type="text" v-model="backNumber">
        </div>
        <div class="inputrow">
          <p>국적</p>
          <select name="nation" v-model="nation">
              <option value='한국'>한국</option>
              <option value='영국'>영국</option>
              <option value='스코틀랜드'>스코틀랜드</option>
              <option value='룩셈부르크'>룩셈부르크</option>
          </select>
        </div>
        <div class="inputrow last">
          <p>그외</p>
          <input type="text">
        </div>
        <button type="submit" class="btn">수정</button>
      </div>
      </form>
  </div>
</template>

<script>
import {getPlayerByName, editPlayerByName} from '@/api/admin.js'
export default {
    data() {
        return {
            playerName : '',
            backNumber : '',
            nation:''
        }
    },
    methods:{
        setPlayer(data){
            this.playerName = data.playerName;
            this.backNumber = data.backNumber;
            this.nation = data.nation;
        },
        async editPlayer(){
            try {
                const player = this.$route.params.player;
                const response = await editPlayerByName(player, {
                    playerName : this.playerName,
                    backNumber : this.backNumber,
                    nation : this.nation
                });
                console.log(response);
                this.$router.push('/admin/player');
            } catch (error) {
                console.log(error);
            }
        }
    },
    async created(){
        try {
            console.log('here')
            const player = this.$route.params.player;
            const response = await getPlayerByName(player);
            console.log(response);
            this.setPlayer(response.data.player);
        } catch (error) {
            console.log(error);
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
  .inputrowWrap .inputrow select {width: 100%; height: 45px; text-indent: 15px;}
  .btn {display: block; width: 110px; line-height: 47px; background: #333; border: 0; border-radius: 0; color:#fff; font-size:13px; cursor: pointer; margin: 100px auto 0;}
  .btn:hover {background: #000;}
</style>