<template>
    <div class="wrapAll">
        MainView
        <p>아이디 {{test.data.user[0].id}}</p>
        <p>비번 {{test.data.user[0].password}}</p>
        <p>이름 {{test.data.user[0].name}}</p>
    </div>
</template>

<script>
import {getMember} from '@/api/test.js'
export default {
    created(){
        getMember()
        .then(response =>{
            console.log(response);
            this.test = response;
        })
    },
    data(){
        return {
            test : []
        }
    }
}
</script>

<style>

</style>