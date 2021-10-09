<template>
    <div>
        <p class="head">팀순위 관리</p>

        <p class="tit">입력</p>
        <form @submit.prevent="submitLeague"> 
        <div class="inputrowWrap">
            <div class="inputrow">
                <p>팀명</p>
                <input type="text" v-model="teamName">
            </div>
            <div class="inputrow last">
                <p>경기수</p>
                <input type="number" v-model="pl">
            </div>
            <div class="inputrow">
                <p>골득실</p>
                <input type="number" v-model="gd">
            </div>
            <div class="inputrow last">
                <p>승점</p>
                <input type="number" v-model="pts">
            </div>
            <button type="submit" class="btn">저장</button>
        </div>
        </form>

        <p class="tit">팀순위 현황</p>
        <team-list></team-list>

    </div>
</template>

<script>
import TeamList from './TeamList.vue'
import { submitLeagueTeam } from '@/api/admin.js'
export default {
    components: { TeamList },
    data : function(){
        return{
            teamName :'',
            pl: 0,
            gd: 0,
            pts: 0,
        }
    },
    methods:{
        submitLeague (){
            const leagueData = {
                teamName : this.teamName,
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