import axios from 'axios';

//리그 순위 입력
function submitLeagueTeam(leagueData){
    const url = 'http://localhost:3000/admin/league'
    axios.post(url, leagueData);
}

//리그 순위 가져오기
function getTeams(){
    const url = 'http://localhost:3000/admin/league'
    return axios.get(url);
}

//경기 일정 입력
function submitMatches(matchData){
    const url = 'http://localhost:3000/admin/matches'
    axios.post(url, matchData);
}

//경기 일정 

export {submitLeagueTeam, getTeams, submitMatches};