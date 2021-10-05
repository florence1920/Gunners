<template>
    <div class="nav">
        <router-link to='/'>
        <div class="logo"></div>
        </router-link>
        <ul class="memberCont">
            <li><router-link to='/logIn'>
                <img src="../assets/logIn.png" alt="" width="29px">
            </router-link></li>
            <li><router-link to='/register'>
                <img src="../assets/signUp.png" alt="" width="27px">
            </router-link></li>
        </ul>
        <ul class="menu">
            <!-- <li v-on:mouseover="doMouseOver" v-on:mouseleave="doMouseLeave">
                <router-link to='/team' >Team</router-link>
                <ul v-show="showBox" class="depth">
                    <li><router-link to=''>Squad</router-link></li>
                    <li><router-link to=''>Stat</router-link></li>
                </ul> 
            </li> -->
            <li v-on:mouseover="doMouseOver(0)" v-on:mouseleave="doMouseLeave(0)">
                <a class="block">Squad</a>
                <ul v-show="showBox[0].show" class="depth">
                    <li><router-link to='/formation'>Formation</router-link></li>
                    <li><router-link to='/player'>Player</router-link></li>
                </ul> 
            </li>
            <li v-on:mouseover="doMouseOver(1)" v-on:mouseleave="doMouseLeave(1)">
                <a class="block">History</a>
                <ul v-show="showBox[1].show" class="depth">
                    <li><router-link to='/introduce'>Introduce</router-link></li>
                    <li><router-link to='/achievement'>Achievement</router-link></li>
                    <li><router-link to='/honor'>Honor of Fame</router-link></li>
                </ul>
            </li>
            <li><router-link to='/schedule'>Schedule</router-link></li>
            <li><router-link to='/board'>Board</router-link></li>
            <li><router-link to='/admin'>Admin</router-link></li>
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
    .nav {width: 100%; height: 100px; background: #fff; border-bottom: 1px solid #dadada; padding: 12.5px 40px 0;}
    .nav .logo {float: left; width: 75px; height: 75px; background: url(../assets/arsenal_logo.png)no-repeat center; background-size: 100% auto;}
    .nav .menu {float: right; padding: 27px 0 0;}
    .nav .menu > li {float: left; text-align: center; padding: 0 0 20px; margin: 0 30px 0 0; position: relative; z-index: 999;}
    .nav .menu > li a {color:#000; font-weight: 600;}
    .nav .menu > li a.block {cursor: default;}
    .nav .menu > li .depth {min-width: 180px; background: #fff; border: 1px solid #dadada; padding: 18px 20px 20px; position: absolute;top: 35px;left: 50%; transform: translateX(-50%);}
    .nav .menu > li .depth > li {margin: 0 0 10px;}
    .nav .menu > li .depth > li:last-child {margin: 0;}
    .nav .memberCont {float: right; overflow: hidden; margin: 22.75px 0 0;}
    .nav .memberCont > li {float: left; margin: 0 0 0 20px;}

</style>