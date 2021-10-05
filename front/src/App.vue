<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
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

body::-webkit-scrollbar {width: 5px;}
body::-webkit-scrollbar-thumb {background-color: #2f3542;}
body::-webkit-scrollbar-track {background-color: grey;}

.wrapAll {width: 100%; min-height: calc(100vh - 354px); padding: 40px; position: relative;}    
.tit {font-size: 22px; font-weight: 600; color: #000; border-radius: 3px; margin: 0 0 20px;}
</style>
