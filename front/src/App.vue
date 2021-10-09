<template>
  <div id="app">
    <NavBar></NavBar>
    <transition name="fade">
    <router-view></router-view>
    </transition>
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
*, a, div, p, ul, li, section, body, input {list-style: none; text-decoration: none; margin: 0; padding: 0; box-sizing: border-box;}
input:focus {outline: none;}
textarea:focus {outline: none;}

body::-webkit-scrollbar {width: 5px;}
body::-webkit-scrollbar-thumb {background-color: #2f3542;}
body::-webkit-scrollbar-track {background-color: grey;}

  .fade-enter {
    opacity: 0;
  }
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave-active,.fade-leave-to {
  display: none;
}

/* basic layout */
.wrapAll {width: 100%; min-height: calc(100vh - 354px); position: relative;}
.w1200 {width: 1200px; padding: 0; margin: 0 auto;}
.w1100 {width: 1100px; padding: 0; margin: 0 auto;}
.tit {font-size: 22px; font-weight: 600; color: #000; border-radius: 3px; margin: 0 0 20px;}
.head {text-align: center; font-size:55px; font-weight: 600; margin: 40px 0 40px;}
</style>
