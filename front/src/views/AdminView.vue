<template>
    <div class="wrapAll">
      <div class="w1100">
        <p class="head">관리자 메뉴</p>
        <ul class="adminMain">
          <li><router-link to="/admin/league">리그 순위<br/>관리</router-link></li>
          <li><router-link to="/admin/matches">경기 일정<br/>관리</router-link></li>
          <li><router-link to="/admin/team">팀 기록<br/>관리</router-link></li>
          <li><router-link to="">메뉴4<br/>준비중</router-link></li>
          <li><router-link to="">메뉴5<br/>준비중</router-link></li>
          <li><router-link to="">메뉴6<br/>준비중</router-link></li>
          <li><router-link to="">메뉴7<br/>준비중</router-link></li>
          <li><router-link to="">메뉴8<br/>준비중</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .adminMain {overflow: hidden;}
  .adminMain li {float: left; width: 15%; height: 150px; background: #555; border-radius: 10px; margin: 0 2% 2% 0; position: relative;}
  .adminMain li:nth-child(6n) {margin: 0 0 2%;}
  .adminMain li:hover {background: #000;}
  .adminMain li a {width: 100%; height: 100%; text-align: center; color:#fff; font-size:20px; font-weight: 600; padding: 48px 0 0; position: absolute;top: 0;left: 0;}
</style>