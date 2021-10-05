<template>
  <div class="wrapAll">
    <MatchList></MatchList>
    <MatchRecordInput></MatchRecordInput>
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

<style>

</style>