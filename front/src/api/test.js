import axios from 'axios';

function getMember(){
    const url = 'http://localhost:3000/'    
    return axios.get(url)
}

export {getMember}