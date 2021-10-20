<template>

    <div class="wrapAll">
        
        <div class="playerWrap">
            <div>1</div>
            <div>2</div>
        </div>

        <div class="seasonWrap">
            <p>2021-2022 프리미어 리그 시즌 통계</p>
            <ul>
                <li>
                    <p class="upper">출장</p>
                    <p class="down">5</p>
                </li>
                <li>
                    <p class="upper">출전시간</p>
                    <p class="down">500</p>
                </li>
                <li>
                    <p class="upper">오프사이드</p>
                    <p class="down">2</p>
                </li>
                <li>
                    <p class="upper">득점</p>
                    <p class="down">2</p>
                </li>
                <li>
                    <p class="upper">도움</p>
                    <p class="down">1</p>
                </li>
                <li>
                    <p class="upper">경고/퇴장</p>
                    <p class="down">2/0</p>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>

</script>

<style>
.wrapAll {overflow: hidden;}

.wrapAll .playerWrap {float: left; width: 50%; background: red;}

.wrapAll .seasonWrap {float: left; width: 600px; background: #ccc;}
.wrapAll .seasonWrap p {font-size: 20px; font-weight: 600;}
.wrapAll .seasonWrap ul {overflow: hidden; margin: 30px 0 0 0;}
.wrapAll .seasonWrap ul li {float: left; width: 30%; background: #fff; border-right: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; padding: 10px 38px;}
.wrapAll .seasonWrap ul li:nth-child(2) {background: #fff; width: 40%;}
.wrapAll .seasonWrap ul li:nth-child(5) {background: #fff; width: 40%;}
.wrapAll .seasonWrap ul li .upper {font-size: 16px;}
.wrapAll .seasonWrap ul li .down {font-size: 30px; font-weight: 600;}

</style>