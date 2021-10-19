<template>
    <div class="wrapAll">
        <p class="tit">트로피</p>
        <ul class="trophiesWrap">
            <li>
                <div class="imgWrap">
                    <img src="../assets/League/TrophyPl.png">
                </div>
                <div class="txt">
                    <p class="count">13</p>
                    <p class="leagueName">프리미어 리그</p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/League/TrophyFa.png" alt="">
                </div>
                <div class="txt">
                    <p class="count">14</p>
                    <p class="leagueName">FA 컵</p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/League/TrophyEfl.png" alt="">
                </div>
                <div class="txt">
                    <p class="count">2</p>
                    <p class="leagueName">EFL 컵</p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/League/TrophyCS.png" alt="" class="cShield">
                </div>
                <div class="txt">
                    <p class="count">16</p>
                    <p class="leagueName">커뮤니티 실드</p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/League/winnersCup.png" alt="" >
                </div>
                <div class="txt">
                    <p class="count">1</p>
                    <p class="leagueName">위너스 컵</p>
                </div>
            </li>
        </ul>
        <ul class="historyWrap">
            <p class="tit">역대 우승 연혁</p>
            <li>
                <div class="imgWrap">
                    <img src="../assets/History/unBeaten_cere.jpg" alt="">
                </div>
                <div class="history">
                    <p class="title">프리미어 리그 우승</p>
                    <p class="season">
                        1930-31, 1932-33, 1933-34, 1934-35, 1937-38, 1947-48 1952-53<br> 
                        1970-71, 1988-89, 1990-91,1997-98, 2001-02, 2003-04
                    </p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/History/fa_cere.jpg" alt="">
                </div>
                <div class="history">
                    <p class="title">FA컵 우승</p>
                    <p class="season">
                        1929-30, 1935-36, 1949-50, 1970-71, 1978-79, 1992-93, 1997-98<br>
                        2001-02, 2002-03, 2004-05, 2013-14, 2014-15, 2016-17, 2019-20
                    </p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/History/Crling_cere.jpg" alt="">
                </div>
                <div class="history">
                    <p class="title">EFL컵 우승</p>
                    <p class="season">
                        1986-87, 1992-93
                    </p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/History/community_cere.jpg" alt="">
                </div>
                <div class="history">
                    <p class="title">커뮤니티 실드 우승</p>
                    <p class="season">
                        1930, 1931, 1933, 1934, 1938, 1948, 1953, 1991<br>
                        1998, 1999, 2002, 2004, 2014, 2015, 2017, 2020
                    </p>
                </div>
            </li>
            <li>
                <div class="imgWrap">
                    <img src="../assets/History/WinFirstTitle.jpg" alt="">
                </div>
                <div class="history">
                    <p class="title">UEFA 위너스 컵 우승</p>
                    <p class="season">
                        1993-94
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style scoped>
.wrapAll {}
.wrapAll .trophiesWrap {overflow: hidden;}
.wrapAll .trophiesWrap > li {float: left; overflow: hidden; padding: 0 30px;}
.wrapAll .trophiesWrap > li .txt {float: left;}
.wrapAll .trophiesWrap > li .txt p {text-align: center; font-weight: 600;}
.wrapAll .trophiesWrap > li .txt .count {font-size: 78px;}
.wrapAll .trophiesWrap > li .txt .leagueName {font-size: 24px;}

.wrapAll .historyWrap {margin: 100px 0 0 0;}
.wrapAll .historyWrap li {overflow: hidden; padding: 0 30px; margin: 0 50px 50px 0;}
.wrapAll .historyWrap li .imgWrap {}
.wrapAll .historyWrap li .history {float: left; margin: 0 0 0 50px;}
.wrapAll .historyWrap li .history .title {font-size: 28px; font-weight: 600; margin: 0 0 30px 0;}
.wrapAll .historyWrap li .history .season {font-size: 22px; font-weight: 600;}


/* image */
.wrapAll .trophiesWrap .imgWrap {float: left; width: 120px; height: 130px;}
.wrapAll .trophiesWrap .imgWrap img {width: 100%; height: 100%; padding: 5px;}
.wrapAll .trophiesWrap .imgWrap .cShield {padding: 15px;}

.wrapAll .historyWrap .imgWrap {float: left;width: 900px; height: 527.96px;}
.wrapAll .historyWrap .imgWrap img {width: 100%; height: 100%;}
</style>