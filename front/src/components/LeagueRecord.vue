<template>
    <div>
        <div class="contWrap">
            <div class="leagueName">
                <p>Premier League</p>
            </div>
            <ul class="leagueInfo">
                <li>
                    <p>Rank</p>
                    <p>Team</p>
                    <p>Pl.</p>
                    <p>Gd.</p>
                    <p>Pts.</p>
                </li>
                <li>
                    <p>1</p>
                    <p>LiverPool</p>
                    <p>6</p>
                    <p>10</p>
                    <p>18</p>
                </li>
                <li>
                    <p>2</p>
                    <p>ManCity</p>
                    <p>6</p>
                    <p>10</p>
                    <p>18</p>
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
div {background: #aaa;}
.contWrap {padding: 20px 30px;}
.contWrap .leagueInfo {margin-top: 30px;}
.contWrap .leagueInfo  > li {overflow: hidden; margin-bottom: 10px;}
.contWrap .leagueInfo  > li > p {float: left; font-size: 16px; margin: 0 50px 0 0;}

/* .leagueName {font-size: 18px; font-weight: 600;}
.contWrap .leagueInfo {overflow: hidden; margin: 30px 0;} 
.contWrap .leagueInfo > li {float: left; margin: 20px 20px;}
.contWrap .leagueInfo > li > p {font-size: 16px; font-weight: 600; color: #000;}
.contWrap .leagueInfo > li > ul > li {margin: 10px 0;}
.contWrap .leagueInfo > li > ul > li > p {font-size: 15px; font-weight: 400;} */

</style>