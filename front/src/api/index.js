import axios from 'axios';

function checkInfo(userData){
    const url = `http://localhost:3000/register`;
    return axios.post(url, userData);
}

export { checkInfo };

