import axios from 'axios';

function submitLeagueTeam(leagueData){
    const url = 'http://localhost:3000/admin/league'
    axios.post(url, leagueData);
}

function getTeams(){
    const url = 'http://localhost:3000/admin/league'
    return axios.get(url);
}

export {submitLeagueTeam, getTeams};