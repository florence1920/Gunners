<template>
  <div>      
      <form @submit.prevent="submitPlayer">
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
          <p>포지션</p>
          <select name="position" v-model="kPos" v-on:change="posSelect">
              <option value='공격수'>공격수</option>
              <option value='미드필더'>미드필더</option>
              <option value='수비수'>수비수</option>
              <option value='골키퍼'>골키퍼</option>
          </select>
        </div>
        <div class="inputrow last">
          <p>국적</p>
          <select name="nation" v-model="nation">
              <option value='한국'>한국</option>
              <option value='영국'>영국</option>
              <option value='스코틀랜드'>스코틀랜드</option>
              <option value='룩셈부르크'>룩셈부르크</option>
          </select>
        </div>
        <button type="submit" class="btn">저장</button>
      </div>
      </form>
  </div>
</template>

<script>
import {submitPlayer} from '@/api/admin.js'
export default {
    data() {
        return {
            playerName : '',
            backNumber : '',
            ePos : '',
            kPos : '',
            nation : '',
        }
    },
    methods:{
        submitPlayer(){
          submitPlayer({
                playerName : this.playerName,
                backNumber : this.backNumber,
                position : {
                    kPos : this.kPos,
                    ePos : this.ePos
                },
                nation : this.nation
            });
            
        },
        posSelect(){
            if(this.kPos === '공격수'){
                this.ePos = 'str'
            }else if (this.kPos === '미드필더'){
                 this.ePos = 'mid'
            }else if (this.kPos === '수비수'){
                 this.ePos = 'def'
            }else{
                 this.ePos = 'keep'
            }
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