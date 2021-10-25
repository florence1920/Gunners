<template>
  <div>
      edit Page.
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params.player);
    }
}
</script>

<style>

</style>