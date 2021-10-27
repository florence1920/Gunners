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
function getMatches(){
    const url = 'http://localhost:3000/admin/matches'
    return axios.get(url);
}

//선수 스탯 입력
function submitPlayer(playerStats){
    const url = 'http://localhost:3000/admin/player'
    return axios.post(url, playerStats);
}

//선수 스탯 가져오기 
function getPlayer(){
    const url = 'http://localhost:3000/admin/player'
    return axios.get(url);
}

//선수 스탯(이름) 가져오기
function getPlayerByName(player){
    const url = `http://localhost:3000/admin/player/edit/${player}`
    return axios.get(url);
}

//선수 스탯 수정
function editPlayerByName(player, data){
    const url = `http://localhost:3000/admin/player/edit/${player}`
    console.log(data);
    return axios.put(url, data);
}

export {submitLeagueTeam, getTeams, submitMatches, getMatches, submitPlayer, getPlayer, getPlayerByName, editPlayerByName};