<template>
    <ul>
        <router-link to='/' class="logo">
            <img src="../assets/arsenal_logo.png" alt="" width="100px">
        </router-link>
        <li><router-link to='/team'>Team</router-link>
            <ul class="depth">
                <li><a href="">Squad</a></li>
                <li><a href="">Stats</a></li>
            </ul>
        </li>
        <li><router-link to='/history'>History</router-link>
            <ul class="depth">
                <li><a href="">Introduce</a></li>
                <li><a href="">Achievement</a></li>
                <li><a href="">Honor of Fame</a></li>
            </ul>
        </li>
        <li><router-link to='/schedule'>Schedule</router-link></li>
        <li><router-link to='/board'>Board</router-link></li>
        <li><router-link to='/logIn'>Login</router-link></li>
        <li><router-link to='/register'>SignUp</router-link></li>
        <div v-show="showBox" class="depth">
            <router-link to='/squad'>squad</router-link>
            <router-link to='/stats'>stats</router-link>
        </div>
        <!-- <button v-on:mouseover="doMouseOver" v-on:mouseleave="doMouseLeave">Click Me</button> -->
    </ul>
</template>

<script>
export default {
    data : function(){
        return{
            showBox : false,
            message : 'hi'
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
    ul {overflow: hidden; width: 100%; background: #aaa; position: fixed;top: 0;left: 0; z-index: 999;}
    .logo {float: left; margin: 0 50px;}
    ul > li {float: left; margin: 50px 0 0 100px;}
    .depth {display: none;}
    
</style>