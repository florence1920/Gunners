import Vue from 'vue'
import Vuex from 'vuex'
import {getWeather} from '@/api/weather.js'
import { getMatches, getTeams, getPlayer } from '../api/admin'
import { loginUser } from '@/api/index.js'
import { getAuthFromCookie,
          getUserFromCookie,
          saveAuthToCookie,
          saveUserToCookie,
          //deleteCookie
} from '@/utils/cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather:{
      
    },
    teams:[

    ],
    matches:[
      
    ],
    players:[

    ],
    token: getAuthFromCookie || '',
    id : getUserFromCookie || '',
  },
  getters: {
    isLogin(state) {
      return state.id !== '';
    },
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
    },
    SET_MATCHES(state,matches){
      for(let i =0; i < matches.data.match.length; i++){
        const nowDate = new Date();
        const matchDate = new Date(matches.data.match[i].matchData);
        //시간차 계산
        const dDate =  matchDate.getTime() - nowDate.getTime();
        const dDay = Math.floor(dDate/1000/60/60/24);
        const dTime = Math.floor(dDate/1000/60/60) - (dDay * 24);
        const dMinute = Math.floor(dDate/1000/60) - (dDay * 24 * 60) - (dTime * 60);
        console.log(dDay, dTime, dMinute);
        matches.data.match[i].time = [matchDate, dDay,dTime,dMinute];
        //console.log(matches.data.match[i]);
      }
  
      state.matches = matches.data.match;
    },
    SET_PLAYER(state,players){
      state.players = players.data.player;
    },
    SET_TOKEN(state,token){
      state.token = token;
    },
    SET_USERNAME(state,id){
      state.id = id;
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
    },
    //매치 일정 가져오기
    async GET_MATCHES(context){
      const matches = await getMatches();
      context.commit('SET_MATCHES', matches);
    },
    //선수 스탯 가져오기
    async GET_PLAYER(context){
      const player = await getPlayer();
      context.commit('SET_PLAYER', player);
    },
    //Login
    async LOGIN(context, userData){
      const response = await loginUser(userData);
      console.log(response);
      context.commit('SET_TOKEN',response.data.token);
      context.commit('SET_USERNAME',response.data.user.id);
      //cookie 저장
      saveAuthToCookie(response.data.token);
      saveUserToCookie(response.data.user.id);
      return response;
    }
  },
  modules: {
  }
})
