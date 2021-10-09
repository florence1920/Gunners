<template>
  <div class="wrapAll">

    <div class="w1100">
      <p class="head">경기 일정 관리</p>

      <p class="tit">입력</p>
      <MatchRecordInput></MatchRecordInput>

      <p class="tit">경기 일정 현황</p>
      <MatchList></MatchList>
    </div>

  </div>  
</template>

<script>
import MatchList from '@/components/admin/MatchList.vue';
import MatchRecordInput from '@/components/admin/MatchRecordInput.vue';
export default {
  components: {
    MatchList,
    MatchRecordInput
  },
}
</script>

<style scoped>
  .tit {font-size:26px; font-weight: 600; margin: 60px 0 15px;}
</style>