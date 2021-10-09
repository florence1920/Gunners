<template>
    <div class="wrapAll">
        <p class="tit">트로피</p>
        <ul class="trophiesWrap">
            <li>
                <div class="trophy">
                    <img src="../assets/League/TrophyPl.png" alt="" width="150px">
                </div>
                <ul class="txt">
                    <li><p class="num">13</p></li>
                    <li><p class="leagueName">프리미어 리그</p></li>
                </ul>
            </li>
            <li>
                <div class="trophy">
                    <img src="../assets/League/TrophyFa.png" alt="" width="150px">
                </div>
                <ul class="txt">
                    <li><p class="num">14</p></li>
                    <li><p class="leagueName">FA 컵</p></li>
                </ul>
            </li>
            <li>
                <div class="trophy">
                    <img src="../assets/League/TrophyEfl.png" alt="" width="150px">
                </div>
                <ul class="txt">
                    <li><p class="num">2</p></li>
                    <li><p class="leagueName">EFL 컵</p></li>
                </ul>
            </li>
            <li>
                <div class="trophy">
                    <img src="../assets/League/TrophyFa.png" alt="" width="150px">
                </div>
                <ul class="txt">
                    <li><p class="num">16</p></li>
                    <li><p class="leagueName">FA 커뮤니티 실드</p></li>
                </ul>
            </li>
        </ul>
        <div class="historyWrap">
            <p class="tit">연혁</p>
            <ul class="history">
                <li>
                    <div class="winEpl">
                        <img src="../assets/History/unBeaten_cere.jpg" alt="" width="700px">
                    </div>
                    <ul class="txt">
                        <li>
                            <p class="title">프리미어 리그 우승</p>
                        </li>
                        <li>
                            <p class="sub"></p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.wrapAll {}
.wrapAll .trophiesWrap {overflow: hidden; margin: 30px 0;}
.wrapAll .trophiesWrap > li {float: left; overflow: hidden; margin: 0 30px;}
.wrapAll .trophiesWrap > li .trophy {float: left;}
.wrapAll .trophiesWrap > li .txt {float: left; color: #000; text-align: center; margin: 10px 0;}
.wrapAll .trophiesWrap > li .txt .num {font-size: 78px; font-weight: 600;}
.wrapAll .trophiesWrap > li .txt .leagueName {font-size: 24px; font-weight: 500;}

.wrapAll .historyWrap .history {}
.wrapAll .historyWrap .history > li {overflow: hidden;}
.wrapAll .historyWrap .history > li .winEpl {float: left;}
.wrapAll .historyWrap .history > li .txt {float: left;}
.wrapAll .historyWrap .history > li .txt .title {font-size: 28px;}

</style>