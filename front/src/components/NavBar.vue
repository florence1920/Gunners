<template>
    <div class="nav">
        <div class="logoWrap">
            <a class="logo">
                <router-link to='/'>
                    <img src="../assets/arsenal_logo.png" alt="" width="100px">
                </router-link>
            </a>
        </div>
        <ul class="menu">
            <!-- <li v-on:mouseover="doMouseOver" v-on:mouseleave="doMouseLeave">
                <router-link to='/team' >Team</router-link>
                <ul v-show="showBox" class="depth">
                    <li><a href="">Squad</a></li>
                    <li><a href="">Stat</a></li>
                </ul> 
            </li> -->
            <li v-on:mouseover="doMouseOver" v-on:mouseleave="doMouseLeave">
                <router-link to='/team'>Team</router-link>
                <ul v-show="showBox" class="depth">
                    <li><a href="">Squad</a></li>
                    <li><a href="">Stat</a></li>
                </ul> 
            </li>
            <li v-on:mouseover="doMouseOver" v-on:mouseleave="doMouseLeave">
                <router-link to='/history'>History</router-link>
                <ul v-show="showBox" class="depth">
                    <li><a href="">Introduce</a></li>
                    <li><a href="">Achievement</a></li>
                    <li><a href="">Honor of Fame</a></li>
                </ul>
            </li>
            <li><router-link to='/schedule'>Schedule</router-link></li>
            <li><router-link to='/board'>Board</router-link></li>
        </ul>
        <ul class="memberCont">
            <li><router-link to='/logIn'>Login</router-link></li>
            <li><router-link to='/register'>SignUp</router-link></li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data : function(){
        return{
            showBox : false,
            message : 'hi',
        }
    },
    methods: {
        doMouseOver: function() {
            this.showBox = true;
        },
        doMouseLeave : function(){
            this.showBox = false;
        }
    }

}
</script>

<style scoped>
    .nav {background: #000; position: relative; margin: 0 auto;}
    a {color: #fff; font-size: 17px; font-weight: 600;}
    .logoWrap {position: relative;top:0;left: 100px; display: inline-block;}
    .menu {position: absolute;top: 70px;left: 40%;}
    .menu > li {float: left; margin: 0 40px; position: relative;}
    .menu > li > a {float:left;}
    .depth {width:220px; padding: 20px 20px; font-size:15px; background: #000; position: absolute; top:30px;left: 50%; transform: translateX(-50%);}
    .depth > li {text-align: center; }
    .memberCont {position: absolute;top: 70px;right: 10%; overflow: hidden;}
    .memberCont > li {float: left; margin: 0 20px;}

</style>