import Vue from 'vue'
import Vuex from 'vuex'
import {getWeather} from '@/api/weather.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather:{
      
    }
  },
  mutations: {
    SET_WEATHER(state, weather){
      state.weather = weather;
    }
  },
  actions: {
    FETCH_WEATHER(context){
      getWeather()
      .then(response =>{
        console.log(response);
        context.commit('SET_WEATHER',response);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  },
  modules: {
  }
})
