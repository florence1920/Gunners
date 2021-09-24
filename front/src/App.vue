<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="routerWrap">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default ({
  components : {
    NavBar,
    Footer
  }
})
</script>


<style>
/* reset */
*, a, div, p, ul, li, section, body {list-style: none; text-decoration: none; margin: 0; padding: 0; box-sizing: border-box;}
.routerWrap {margin-top: 104px;}

</style>
