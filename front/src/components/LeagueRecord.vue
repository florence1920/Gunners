<template>
    <div>
        <div class="contWrap">
            <div class="leagueName">
                <p>Premier League</p>
            </div>
            <ul class="leagueInfo">
                <li>
                    <!-- 순위 -->
                    <p>Rank</p>
                    <ul>
                        <li><p>1</p></li>
                        <li><p>2</p></li>
                        <li><p>3</p></li>
                        <li><p>4</p></li>
                        <li><p>5</p></li>
                    </ul>
                </li>
                <li>
                    <!-- 팀 이름 -->
                    <p>Team</p>
                    <ul class="team">
                        <li><p><span><img src="../assets/epl_logo_small/LiverPool.png" alt="" width="22px"></span>LiverPool</p></li>
                        <li><p><span><img src="../assets/epl_logo_small/ManCity.png" alt="" width="22px"></span>Manchester City</p></li>
                        <li><p><span><img src="../assets/epl_logo_small/Chelsea.png" alt="" width="22px"></span>Chelsea</p></li>
                        <li><p><span><img src="../assets/epl_logo_small/ManU.png" alt="" width="22px"></span>Manchester United</p></li>
                        <li><p><span><img src="../assets/epl_logo_small/Everton.png" alt="" width="22px"></span>Everton</p></li>
                    </ul>
                    </li>
                <li>
                    <!-- 경기수 -->
                    <p>Pl.</p>
                    <ul>
                        <li><p>6</p></li>
                        <li><p>6</p></li>
                        <li><p>6</p></li>
                        <li><p>6</p></li>
                        <li><p>6</p></li>
                    </ul>
                </li>
                <li>
                    <!-- 골득실 -->
                    <p>Gd.</p>
                    <ul>
                        <li><p>11</p></li>
                        <li><p>11</p></li>
                        <li><p>10</p></li>
                        <li><p>8</p></li>
                        <li><p>5</p></li>
                    </ul>
                </li>
                <li>
                    <!-- 승점 -->
                    <p>Pts.</p>
                    <ul>
                        <li><p>14</p></li>
                        <li><p>13</p></li>
                        <li><p>13</p></li>
                        <li><p>13</p></li>
                        <li><p>13</p></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {background: #ddd;}
.contWrap {padding: 20px 30px;}
.leagueName {font-size: 18px; font-weight: 600;}
.contWrap .leagueInfo {overflow: hidden; margin: 20px 0;} 
.contWrap .leagueInfo > li {float: left; margin: 10px 20px;}
.contWrap .leagueInfo > li > p {font-size: 16px; font-weight: 600; color: #000;}
.contWrap .leagueInfo > li > ul > li {margin: 10px 0;}
.contWrap .leagueInfo > li > ul > li > p {font-size: 15px;}

</style>