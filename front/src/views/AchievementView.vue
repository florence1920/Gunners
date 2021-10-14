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
        </ul>
        <ul class="historyWrap"></ul>
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

/* image */
.wrapAll .trophiesWrap .imgWrap {float: left; width: 120px; height: 130px;}
.wrapAll .trophiesWrap .imgWrap img {width: 100%; height: 100%;}
</style>