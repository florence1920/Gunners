<template>
    <div>
        <div class="footer">
            <ul class="menu">
                <li><a href="TeamView.vue">Team</a></li>
                <li><a href="">History</a></li>
                <li><a href="">Schedule</a></li>
                <li><a href="">Board</a></li>
            </ul>
            <ul class="info">
                <li>
                    <p class="font tit">HideOut</p>
                    <p class="font sub">서울특별시 관악구 신림동 남부순환로 1599-3</p>
                </li>
                <li>
                    <p class="font tit">Participants</p>
                    <p class="font sub">이승헌(Seung-Heon Lee)</p>
                    <p class="font sub">조윤호(Yoon-Ho Cho)</p>
                </li>
            </ul>
            <ul class="socialMedia">
                <li><a href="https://github.com/florence1920/Gunners"><img src="../assets/git.png" alt="" width="22px"></a></li>
                <li>
                    <a href="https://www.facebook.com/Arsenal/"><img src="../assets/facebook.png" alt="" width="9px"></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/arsenal/"><img src="../assets/insta.png" alt="" width="21px"></a>
                </li>
            </ul>
            <p class="copy">COPYRIGHTⒸ2021 GUNNERS ALL RIGHT RESERVED.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {width: 100%; overflow: hidden; background: #000; padding: 40px 250px 25px; position: absolute;bottom: 0;}
.footer .menu {overflow: hidden; }
.footer .menu > li {float: left; margin:0 40px 40px 0;}
.footer .menu > li > a {color: #fff; font-weight: 600;}
.footer .info {vertical-align: top;}
.footer .font {color: #fff; display: inline-block; margin: 20px 0 0 0 ;}
.footer .info .tit {width: 100px; font-size: 16px; font-weight: 600;}
.footer .info .sub {font-size: 15px; font-weight: 300; color: rgba(244, 244, 244, 0.63); margin: 0 0 0 20px;}
.footer .socialMedia {float: right; overflow: hidden;}
.footer .socialMedia li {float: left; margin: 0 20px;}
.footer .copy {clear: both; font-size: 15px; color: rgba(244, 244, 244, 0.63); text-transform: uppercase; letter-spacing: 1px;}
</style>