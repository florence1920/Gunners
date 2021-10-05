import Vue from 'vue'
import Vuex from 'vuex'
import {getWeather} from '@/api/weather.js'
import { getTeams } from '../api/admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather:{
      
    },
    teams:[

    ]
  },
  mutations: {
    SET_WEATHER(state, weather){
      state.weather = weather;
    },
    SET_TEAMLIST(state, teams){
      const team = teams.data.league;
      const ptsArr=[];
      for(let i =0; i < team.length; i++){
        ptsArr.push({teamName:team[i].teamName, 
                     pl:team[i].pl,
                     gd:team[i].gd,
                     pts:team[i].pts,});
      }
    //오름차순 함수 만들기
    // function compare(key){
    //   return (a,b) => (a[key] < b[key] ? 1 : (a[key] > b[key] ? -1 : 0));
    // }
    //ptsArr.sort(compare('pts'));
    function compare(key,key1){
      return (a,b) =>{
        //값이 작은걸 낮은 인덱스로 ! 내림 차순 처리
        if(a[key] > b[key]){
          return -1;
        }
        if(a[key] < b[key]){
          return 1;
        }
        if(a[key] == b[key]){
          if(a[key1] > b[key1]){
            return -1;
          }
          if(a[key1] < b[key1]){
            return 1;
          }else{
            return 0;
          }
        }
      }
    }
    ptsArr.sort(compare('pts','gd'));
    state.teams = ptsArr;
    }
  },
  actions: {
    //날씨 가져오기 
    FETCH_WEATHER(context){
      getWeather()
      .then(response =>{
        console.log(response);
        context.commit('SET_WEATHER',response);
      })
      .catch(error =>{
        console.log(error);
      })
    },
    //리그 순위 가져오기
    async GET_TEAMLIST(context){
        const teams = await getTeams();
        context.commit('SET_TEAMLIST', teams);
    }
  },
  modules: {
  }
})
