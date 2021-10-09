<template>
    <div class="wrapAll">
        <div class="introWrap">
            <div class="intro_left">
                <ul class="intro_current">
                    <li><a href="">현재 상황</a></li>
                    <p class="year">20</p>
                    <li><a href="">벵거 시대</a></li>
                    <li><a href="">두번째 전성기</a></li>
                    <li><a href="">세번째 전성기</a></li>
                    <li><a href="">창립</a></li>
                </ul>
                <p class="year">19</p>
                <p class="year">18</p>
            </div>
            <ul class="intro_right">
                <li>
                    <p class="year">21</p>
                    <div class="img year21"></div>
                    <ul>
                        <li><p>10</p></li>
                        <li><p>리그 10위로 안착</p></li>
                    </ul>
                    <ul>
                        <li><p>9</p></li>
                        <li><p>리그 19위로 추락</p></li>
                    </ul>
                </li>
                <li>
                    <p class="year">19</p>
                    <div class="img arteta"></div>
                    <ul>
                        <li><p>10</p></li>
                        <li><p>리그 10위로 안착</p></li>
                    </ul>
                    <ul>
                        <li><p>9</p></li>
                        <li><p>리그 19위로 추락</p></li>
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
.wrapAll {}
.wrapAll .introWrap {overflow: hidden; width: 1300px; margin: 0 auto;}
.wrapAll .introWrap .year {font-size: 200px; font-weight: 600; color: #000; line-height: 300px;}

.wrapAll .introWrap .intro_left {float: left; width: 20%;}
.wrapAll .introWrap .intro_left .intro_current {}
.wrapAll .introWrap .intro_left .intro_current p {text-align: right;}
.wrapAll .introWrap .intro_left .intro_current > li > a {font-size: 28px; font-weight: 600; color: #ccc;}

.wrapAll .introWrap .intro_right {float: left; width: 80%;}
.wrapAll .introWrap .intro_right > li {position: relative;}
.wrapAll .introWrap .intro_right > li p.year {top: 35px; left: 0px; position: relative; z-index: 2;}
.wrapAll .introWrap .intro_right > li p {}
.wrapAll .introWrap .intro_right > li > ul {overflow: hidden; box-sizing: border-box;}
.wrapAll .introWrap .intro_right > li > ul > li {float: left; margin: 0 50px;}
.wrapAll .introWrap .intro_right > li > ul > li > p {font-size: 18px; font-weight: 600; color: #000; line-height: 34px;}

/* intro_right img */
.wrapAll .introWrap .intro_right > li .img {width: 900px; height: 527.96px; position: relative; margin: -100px 0 0 0;}
.wrapAll .introWrap .intro_right > li .year21 {background: url(../assets/History/arteta.png)no-repeat; }
.wrapAll .introWrap .intro_right > li .arteta {background: url(../assets/History/arteta.png)no-repeat; }

</style>