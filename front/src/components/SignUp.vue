 <template>
    <div class="contWrap">
        <div class="top">
            <p class="tit">Join Us</p>
            <p class="sub">회원가입</p>
        </div>
        <form  v-on:submit.prevent="send">
            <div class="personal_info">
                <p>기본정보</p>
                <ul class="personal">
                    <li>
                        <span>아이디</span>
                        <input type="text" name="id" placeholder="영문 소문자/숫자 4-20자" v-model="id">
                    </li>
                    <li>
                        <span>비밀번호</span>
                        <input type="text" name="password" placeholder="영문/숫자/특수문자 조합 8-16자" v-model="password">
                    </li>
                    <li>
                        <span>이름</span>
                        <input type="text" name="name" v-model="name">
                    </li>
                </ul>
            </div>
            <ul class="btnWrap">
                <li><button type="button" class="previewBtn">이전단계</button></li>
                <li><button type="submit" class="nextBtn">가입하기</button></li>
            </ul>
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
.contWrap {width: 1400px;  background: #fff; padding-top: 50px; padding-bottom: 100px; margin: 0 auto;}
.top {text-align: center;}
.top .tit {font-size: 16px; color: #000;}
.top .sub {font-size: 70px; color: #000;}

.personal_info p {font-size: 18px; font-weight: normal; color: #222222; padding: 0 0 10px 0;}
.personal {border-top: 2px solid #000; margin: 10px 0;}
.personal li {margin: 20px;}
.personal span {display: inline-block; width: 100px; font-size: 17px; font-weight: normal; color: #464646; margin: 0 50px;}
.personal input {width: 465px; height: 50px; font-size: 16px; line-height: 50px; padding: 0 15px; border: solid 1px #e3e3e3; margin-right: 5px;}

.btnWrap {border-top: 1px solid #e3e3e3; text-align: center; margin-top: 100px;}
.btnWrap li {display: inline-block; margin: 35px 0 0 5px;}
.btnWrap li .previewBtn {width: 271px; height: 67px; color: #000; font-size: 15px; font-weight: 600; background: #fff; border: solid 2px #000000;}
.btnWrap li .nextBtn {width: 271px; height: 67px; color: #fff; font-size: 15px; font-weight: 600; background: #000; border: solid 2px #000000;}
    
</style>