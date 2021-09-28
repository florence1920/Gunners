<template>
    <div>
        <div class="loginContWrap">
            <p>Log In</p>
            <div class="logIn_input_Box">
                <input type="text" name="id" placeholder="아이디">
                <input type="text" name="password" placeholder="비밀번호">
            </div>
            <ul class="loginBox">
                <li><input type="checkbox"><span>아이디 저장</span></li>
                <li><a href="">회원가입</a></li>
                <li><a href="">아이디 찾기</a></li>
                <li><a href="">비밀번호 찾기</a></li>
            </ul>
            <ul class="btnWrap">
                <button type="submit" class="loginBtn">로그인</button>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loginContWrap {width: 50%; background: #fff; margin: 0 auto; text-align: center; padding: 20px 0;}
.loginContWrap > p {font-size: 60px; font-weight: 300; text-align: center; margin-bottom: 30px;}
.logIn_input_Box input {width: 543px; height: 50px; font-size: 16px; color: #000; border: 0; border-bottom: 1px solid #dadada; padding: 0 10px; margin-bottom: 15px;}
.loginContWrap .loginBox {text-align: center; position: relative;}
.loginContWrap .loginBox {overflow: hidden; margin: 0 0 0 100px;}
.loginContWrap .loginBox > li {float: left; margin: 0 10px;}
.loginContWrap .loginBox > li:first-child {margin: 0 110px;}
.loginContWrap .btnWrap {text-align: center; margin-top: 100px;}
.loginContWrap .btnWrap .loginBtn {width: 271px;height: 67px; font-size: 16px; color: #fff; border: solid 2px #1f1f1f; background: #1f1f1f;}
</style>