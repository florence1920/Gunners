<template>
    <ul>
        <router-link to='/'>Main</router-link>
        <router-link to='/team'>Team</router-link>
        <router-link to='/history'>history</router-link>
        <router-link to='/schedule'>schedule</router-link>
        <router-link to='/board'>board</router-link>
        <router-link to='/register'>회원가입</router-link>
        <div v-show="showBox" class="box"></div>
        <button v-on:mouseover="doMouseOver" v-on:mouseleave="doMouseLeave">Click Me</button>
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
    a {padding: 0 10px 0 0; color:rgb(223, 30, 30);}
    .box {width: 100px; height: 100px; background: rgb(110, 110, 110);}
    button {position: absolute; top: 0;right: 0;}
</style>