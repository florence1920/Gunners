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
            <li v-on:mouseover="doMouseOver(0)" v-on:mouseleave="doMouseLeave(0)">
                <router-link to='/team'>Team</router-link>
                <ul v-show="showBox[0].show" class="depth">
                    <li><a href="">Squad</a></li>
                    <li><a href="">Stat</a></li>
                </ul> 
            </li>
            <li v-on:mouseover="doMouseOver(1)" v-on:mouseleave="doMouseLeave(1)">
                <router-link to='/history'>History</router-link>
                <ul v-show="showBox[1].show" class="depth">
                    <li><a href="">Introduce</a></li>
                    <li><a href="">Achievement</a></li>
                    <li><a href="">Honor of Fame</a></li>
                </ul>
            </li>
            <li><router-link to='/schedule'>Schedule</router-link></li>
            <li><router-link to='/board'>Board</router-link></li>
        </ul>
        <ul class="memberCont">
            <li><router-link to='/logIn'>
                <img src="../assets/logIn.png" alt="" width="29px">
            </router-link></li>
            <li><router-link to='/register'>
                <img src="../assets/signUp.png" alt="" width="27px">
            </router-link></li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data : function(){
        return{
            showBox : [
                {show : false}, { show : false}  
            ],
        }
    
    },
    methods: {
        doMouseOver: function(index) {
            console.log(index);
            this.showBox[index].show = true;
        },
        doMouseLeave : function(index){
            console.log(index);
            this.showBox[index].show = false;
        }
    }

}
</script>

<style scoped>
    .nav {background: #fff; border-bottom: 1px solid #dadada; position: relative; margin: 0 auto;}
    a {color: #000; font-size: 17px; font-weight: 600;}
    .logoWrap {position: relative;top:0;left: 100px; display: inline-block;}
    .menu {position: absolute;top: 70px;left: 40%;}
    .menu > li {float: left; margin: 0 30px; position: relative;}
    .menu > li > a {float:left;}
    .depth {width:220px; padding: 20px 20px; font-size:15px; background: #fff; position: absolute; top:30px;left: 50%; transform: translateX(-50%);}
    .depth > li {text-align: center; }
    .memberCont {position: absolute;top: 70px;right: 20%; overflow: hidden;}
    .memberCont > li {float: left; margin: 0 20px;}

</style>