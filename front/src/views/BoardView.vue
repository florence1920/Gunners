<template>
    <div class="wrapAll w1200">
        <div class="tableWrap boardList">
            <p class="head">BOARD</p>
            <ul class="thead">
                <li>번호</li>
                <li>제목</li>
                <li>조회수</li>
                <li>등록일</li>
            </ul>
            <ul class="trow">
                <li>4</li>
                <li>야이쉐끼덜아</li>
                <li>484,165</li>
                <li>2021-10-09</li>
            </ul>
            <ul class="trow">
                <li>3</li>
                <li>야이쉐끼덜아</li>
                <li>484,165</li>
                <li>2021-10-09</li>
            </ul>
            <ul class="trow">
                <li>2</li>
                <li>야이쉐끼덜아</li>
                <li>484,165</li>
                <li>2021-10-09</li>
            </ul>
            <ul class="trow">
                <li>1</li>
                <li>야이쉐끼덜아</li>
                <li>484,165</li>
                <li>2021-10-09</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .tableWrap .thead {overflow: hidden;}
    .tableWrap .thead li {float: left;}
    .tableWrap .trow {overflow: hidden;}
    .tableWrap .trow li {float: left;}

    .boardList {margin: 0 auto 50px;}
    .boardList li {text-align: center; padding: 18px 0;}
    .boardList .thead {background: #f1f1f1; border-top: 2px solid #7f7f7f; border-bottom: 1px solid #e3e3e3;}
    .boardList .thead li {color:#5c5c5c; font-weight: 600;}
    .boardList .thead li:nth-child(1) {width:8%;}
    .boardList .thead li:nth-child(2) {width:62%;}
    .boardList .thead li:nth-child(3) {width:15%;}
    .boardList .thead li:nth-child(4) {width:15%;}
    .boardList .trow {background: #fff; border-bottom: 1px solid #eaeaea;}
    .boardList .trow li:nth-child(1) {width:8%;}
    .boardList .trow li:nth-child(2) {width:62%;}
    .boardList .trow li:nth-child(3) {width:15%;}
    .boardList .trow li:nth-child(4) {width:15%;}
</style>