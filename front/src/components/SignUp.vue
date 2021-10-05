<template>
    <div class="wrapAll">
        <p class="head">SIGNUP</p>

        <form  v-on:submit.prevent="send" action="">
        <div class="personal_info">
            <ul class="personal">
                <li>
                    <p>ID</p>
                    <input type="text" name="id" placeholder="영문 소문자/숫자 4-20자" v-model="id">
                </li>
                <li>
                    <p>PASSWORD</p>
                    <input type="text" name="password" placeholder="영문/숫자/특수문자 조합 8-16자" v-model="password">
                </li>
                <li>
                    <p>NAME</p>
                    <input type="text" name="name" v-model="name">
                </li>
            </ul>
            <input type="submit" value="SIGNUP" class="btn"/>
        </div>
        </form>
        
    </div>
</template>

<script>
import { checkInfo } from '@/api/index.js';
export default {
    data : function(){
        return{
            id : '',
            password : '',
            name : ''
        }
    },
    methods:{
        send(){
            const userData = {
                id : this.id,
                password : this.password,
                name : this.name
            };
            checkInfo(userData);
            console.log('send');
        }
    }
}
</script>

<style scoped>
.personal_info {width: 500px; margin: 0 auto;}
.personal_info .btn {display: block; width: 100%; height: 55px; background: #464646; border: 0; color:#fff; font-size:16px; font-weight: 600; cursor: pointer; transition: .3s; margin: 40px auto 0;}
.personal_info .btn:hover {background: #111;}
.personal li {overflow: hidden; margin: 0 0 5px;}
.personal li p {float: left; width: 25%; line-height: 51px; font-size: 15px; font-weight: 600; color: #464646;}
.personal li input {float: left; width: 75%; border: 0; border-bottom: 1px solid rgba(0,0,0,.2); line-height: 50px; text-indent: 15px; font-size: 15px; transition: .3s;}
.personal li input:hover {border-bottom: 1px solid rgba(0,0,0,1);}
.personal li input:focus {border-bottom: 1px solid rgba(0,0,0,1);}
</style>