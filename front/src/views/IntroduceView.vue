<template>
    <div class="wrapAll">
        <p class="tit">아스날 역사</p>
        <div class="introduceWrap">
            <div class="history_left">
                <p>18</p>
                <p>19</p>
                <p>20</p>
            </div>
            <ul class="history_right">
                <li>
                    <p class="year">1886</p>
                    <div class="img img_foundation"></div>
                    <p class="history_sub">
                        아스날은 1886년에 다이얼 스퀘어(Dial Square)라는 이름으로 창단된 게 그 시초이다.<br> 
                        이 축구 클럽은 런던 남동부에 있는 울위치의 왕립 무기고(Royal Arsenal, 로열 아스날)에서 일하던<br>
                        노동자들이 모여 만든 것으로, 1891년에 프로 구단으로 독립하였다.
                    </p>
                </li>
                <li>
                    <p class="year">1925</p>
                    <div class="img img_winFirstTitle"></div>
                    <p class="history_sub">
                        1925년, 아스날의 감독으로 임명된 허버트 채프먼은 아스날의 첫 번째 성공시대를 가져다 준 감독이다. <br>
                        채프먼은 이미 허더스필드 타운을 이끌고 1923-24, 1924 -25 두 시즌 연속으로 리그 우승을 제패한 바 있을 정도<br>
                        로 명장이었다. <br>
                        그의 혁신적인 전술과 훈련을 바탕으로 이적시장에서 데려온 알렉스 제임스와 클리프 바스틴 등과 <br>
                        함께 1930년대 잉글랜드 축구를 지배하였다. 채프먼의 지도 아래 아스날은 1930년, 첫 FA컵 우승과 <br>
                        1930-31, 1931-32시즌 리그 연속 우승을 차지하였다.
                    </p>
                </li>
                <li>
                    <p class="year">1966</p>
                    <div class="img img_graham"></div>
                    <p class="history_sub">
                        1986년, 조지 그레이엄이 감독으로 부임하면서 제3의 중흥기를 맞게 된다.<br>
                        그레이엄 감독 첫 시즌인 1986-87시즌에 아스날은 처음으로 리그 컵 우승을 차지한다.<br>
                        1988-89시즌에는 막판 극적인 골로 리버풀을 제치고 18년 만에 리그 우승을 차지하게 된다.<br>
                        1990-91시즌, 그레이엄의 아스날은 단 1패만 기록하고 다시 리그 우승을 차지한다.<br>
                        1992-93시즌에는 FA컵과 리그 컵을 우승하여 컵 더블을 기록하였고,<br>
                        이듬해에는 아스날이 UEFA 컵 위너스 컵 우승을 차지해 두 번째 유럽 대회 우승을 기록하였다.<br>
                    </p>
                </li>
                <li>
                    <p class="year">1996</p>
                    <div class="img img_wenger"></div>
                    <p class="history_sub">
                        1996년, 훗날 아스날의 황금기를 이끌 구세주가 나타나게 되는데 그는 바로 프랑스의 아르센 벵거였다.<br> 
                        그는 아스날의 첫 번째 비영어권 감독이었다.<br> 
                        벵거 감독은 팀에 새로운 훈련 통치 및 몇몇 외국 용병 선수들과 잉글랜드의 재능있는 선수들을 잘 조합시킨<br>
                        새로운 전술을 가져다 주었다.<br>
                    </p>
                </li>
                <li>
                    <p class="year">2003</p>
                    <div class="img img_unBeaten"></div>
                    <p class="history_sub">
                        2002-03시즌에는 9번째 FA컵 우승을 차지하였고 이듬해인<br> 
                        2003-04시즌에는 프리미어 리그 사상 첫 무패 우승을 기록하였는데<br>
                        이는 그동안 잉글랜드 1부리그 역사상 딱 한 번밖에 없었고<br>
                        1889년 프레스턴 노스 엔드 FC이후 115년 만에 1부리그에서 나온 역대급 기록이었다.<br>
                        이때의 무패 우승을 가리켜 "더 인빈서블"(The Invincible)이라 부르기도 한다.<br>
                        이때 49경기 리그 연속 무패 행진도 기록하였는데 이는 영국 축구에서 기록으로 남아 있다.<br>
                    </p>
                </li>
                <li>
                    <p class="year">2018</p>
                    <div class="img img_gbWenger"></div>
                    <p class="history_sub">
                        THANK YOU GOOD BYE WENGER 
                    </p>
                </li>
                <li>
                    <p class="year">2018</p>
                    <div class="img img_arteta"></div>
                    <p class="history_sub">
                        THANK YOU GOOD BYE WENGER 
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    created () {
    window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
        const st = document.scrollingElement.scrollTop
        console.log(st)
        
        }
    }
}

</script>

<style scoped>
.wrapAll {}

.wrapAll .introduceWrap {position: relative; box-sizing: border-box; padding-left: 300px; margin-top: 80px; padding-bottom: 240px;}
.wrapAll .introduceWrap .history_left {position: absolute; top: 9px; margin-top: 0px; margin-left: -345px;}
.wrapAll .introduceWrap .history_left p {font-size: 200px; top: 190px; width: 326px; text-align: right;}

.wrapAll .introduceWrap .history_right {} 
.wrapAll .introduceWrap .history_right > li {position: relative; padding-top: 10px;}
.wrapAll .introduceWrap .history_right > li > .year {font-size: 200px;}
.wrapAll .introduceWrap .history_right .img {width: 1045px; height: 588px; margin: 20px 0;}
.wrapAll .introduceWrap .history_right > li p.history_sub {font-size: 20px;}

.wrapAll .introduceWrap .history_right .img_foundation {background: url(../assets/History/Foundation.jpg)no-repeat; }
.wrapAll .introduceWrap .history_right .img_winFirstTitle {background: url(../assets/History/WinFirstTitle.jpg)no-repeat;}
.wrapAll .introduceWrap .history_right .img_graham {background: url(../assets/History/Graham.jpg)no-repeat;}
.wrapAll .introduceWrap .history_right .img_wenger {background: url(../assets/History/Wenger.jpg)no-repeat;}
.wrapAll .introduceWrap .history_right .img_unBeaten {background: url(../assets/History/unBeaten.jpg)no-repeat;}
.wrapAll .introduceWrap .history_right .img_gbWenger {background: url(../assets/History/GbWenger.jpg)no-repeat;}
.wrapAll .introduceWrap .history_right .img_arteta {background: url(../assets/History/arteta.png)no-repeat;}

</style>