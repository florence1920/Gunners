import axios from 'axios';

function getEdu(){
    return axios.get('http://apis.data.go.kr/6430000/cyberLanCourseService/getCyberLanCourse?serviceKey=N1Boimqw71nVaE5QDo%2F%2FooL%2BfgtmpfZE8elUvJX5zPHx%2Bb7dzKKixvJJ4lDn2TodqPwYNH3AzE4RSiabt6%2F9kQ%3D%3D&currentPage=1&perPage=10')
}

function getCul(){
    return axios.get('http://api.kcisa.kr/openapi/service/rest/meta2020/getMCHBspecial?serviceKey=c9de61c3-ffbd-4a84-a73e-37e0be6f5dd9')
}

export {getEdu,getCul}

