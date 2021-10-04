import axios from 'axios';

function submitLeagueTeam(leagueData){
    const url = 'http://localhost:3000/admin/league'
    axios.post(url, leagueData);
}

export {submitLeagueTeam};