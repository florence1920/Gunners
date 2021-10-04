<template>
  <div>
     <ul>
        <li v-for="team in this.$store.state.teams" v-bind:key="team.teamName">
          팀 {{team.teamName}} 경기수 {{team.pl}} 골득실 {{team.gd}} 승점 {{team.pts}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created(){
    this.$store.dispatch('GET_TEAMLIST');
    
  },
  methods:{
    
  }
}
</script>

<style>

</style>