<template>
    <div class="wrapAll">
        <div class="intro_left">
            <ul class="intro_current">
                <li>현재 상황</li>                
                <li>벵거 시대</li>
                <li>두번째 전성기</li>
                <li>세번째 전성기</li>
                <li>창립</li>
            </ul>
            <p class="year">20</p>
        </div>
        <ul class="intro_right">
            <!-- 2000년대 -->
            <li>
                <p class="year">21</p>
                <p>10<span>리그 10위 안착</span></p>
                <p>10<span>리그 20위 추락 (사상 첫 강등순위)</span></p>
            </li>
            <li>
                <p class="year">19</p>
                <div class="imgWrap"><img src="../assets/History/arteta.png" alt=""></div>
                <p>12<span>미켈 아르테타 감독 부임</span></p>
                <p>11<span>우나이 에메리 감독 사임</span></p>
            </li>
            <li>
                <p class="year">18</p>
                <div class="imgWrap"><img src="../assets/History/GbWenger.jpg" alt=""></div>
                <p>06<span>우나이 에메리 감독 부임</span></p>
                <p>05<span>아르센 벵거 감독직 사임</span></p>
            </li>
            <li>
                <p class="year">06</p>
                <div class="imgWrap"><img src="../assets/History/emiratesSt.jpg" alt=""></div>
                <p>07<span>에미레이트 스타디움 개장</span></p>
                <p>06<span>챔피언스 리그 첫 준우승(역대 최고 성적)</span></p>
                <p>05<span>10번째 FA컵 우승</span></p>
            </li>
            <li>
                <p class="year">04</p>
                <div class="imgWrap"><img src="../assets/History/unBeaten.jpg" alt=""></div>
                <p>11<span>49경기 리그 연속 무패 행진 기록</span></p>
                <p>06<span>프리미어 리그 무패 우승 달성(리그 첫 무패우승)</span></p>
                <p>05<span>FA컵 우승</span></p>
            </li>
            <li>
                <p class="year">03</p>
                <p>05<span>FA컵 우승</span></p>
            </li>
            <li>
                <p class="year">02</p>
                <p>06<span>프리미어 리그 우승</span></p>
                <p>05<span>FA컵 우승</span></p>
            </li>
            <!-- 1900년대 -->
            <li>
                <p class="year">99</p>
                <div class="imgWrap"><img src="../assets/History/henry.png" alt=""></div>
                <p>06<span>티에리 앙리 영입</span></p>
            </li>
            <li>
                <p class="year">97</p>
                <p>06<span>프리미어 리그 우승</span></p>
                <p>05<span>FA컵 우승</span></p>
            </li>
            <li>
                <p class="year">96</p>
                <div class="imgWrap"><img src="../assets/History/Wenger.jpg" alt=""></div>
                <p>06<span>아르센 벵거 감독 부임</span></p>
            </li>
            <li>
                <p class="year">93</p>
                <div class="imgWrap"><img src="../assets/History/GrahamGen.jpg" alt=""></div>
                <p>08<span>UEFA 위너스컵 우승</span></p>
                <p>06<span>프리미어 리그 우승</span></p>
                <p>05<span>EFL컵 우승</span></p>
            </li>
            <li>
                <p class="year">91</p>
                <p>06<span>프리미어 리그 우승 (구단 최초 시즌 1패 달성)</span></p>
            </li>
            <li>
                <p class="year">89</p>
                <p>06<span>프리미어 리그 우승</span></p>
            </li>
            <li>
                <p class="year">87</p>
                <p>06<span>구단 최초 EFL컵 우승</span></p>
            </li>
            <li>
                <p class="year">86</p>
                <div class="imgWrap"><img src="../assets/History/GeorgeGraham.jpg" alt=""></div>
                <p>06<span>조지 그레이엄 감독 부임</span></p>
            </li>
            <li>
                <p class="year">31</p>
                <div class="imgWrap"><img src="../assets/History/WinFirstTitle.jpg" alt=""></div>
                <p>01<span>구단 최초 프리미어 리그 우승</span></p>
            </li>
            <li>
                <p class="year">26</p>
                <p>01<span>리그 2위 달성 및 FA컵 우승</span></p>
            </li>
            <!-- 1800년대 -->
            <li>
                <p class="year">93</p>
                <p>06<span>울위치 아스날로 명칭변경 풋볼 리그(Football League)에 가입</span></p>
            </li>
            <li>
                <p class="year">91</p>
                <p>06<span>프로구단 독립</span></p>
            </li>
            <li>
                <p class="year">86</p>
                <div class="imgWrap"><img src="../assets/History/Foundation.jpg" alt=""></div>
                <p>03<span>다이알 스퀘어(Dial Square)라는 이름으로 창단</span></p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
}

</script>

<style scoped>
.wrapAll p.year {font-size: 240px; font-weight: 600; color: #000; z-index: 2;}

.wrapAll .intro_left {width: 30%; text-align: right; position: fixed;top: 101px;left: 0;}
.wrapAll .intro_left .intro_current {}
.wrapAll .intro_left .intro_current > li {font-size: 28px; font-weight: 600; color: #ccc; text-align: left; margin: 0 0 0 320px;}

.wrapAll .intro_right {float: right; width: 70%; margin: 170px 0 0 0;}
.wrapAll .intro_right {}
.wrapAll .intro_right .year {font-size: 240px; font-weight: 600; color: #000; position: relative;top: 0;right: 40px; z-index: 2;}
.wrapAll .intro_right p {font-size: 18px; font-weight: 600; margin: 15px 0 15px 45px;}
.wrapAll .intro_right p span {margin: 0 40px;}


/* history Image */
.imgWrap {width: 900px; height: 527.96px; margin: -160px 0 0 0;}
.imgWrap img {width: 100%; height: 100%;}
</style>