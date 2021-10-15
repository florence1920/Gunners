import axios from 'axios';

//회원가입
function checkUser(userData){
    const url = `http://localhost:3000/register`;
    return axios.post(url, userData);
}

//로그인
function loginUser(userData){
    const url = `http://localhost:3000/login`;
    return axios.post(url,userData)
}

export { checkUser, loginUser };

