<template>
    <div class="wrapAll">
        <p class="head">LOGIN</p>

        <form  v-on:submit.prevent="submitForm">
        <div class="personal_info">
            <ul class="personal">
                <li>
                    <p>ID</p>
                    <input type="text" name="id" v-model="id">
                </li>
                <li>
                    <p>PASSWORD</p>
                    <input type="text" name="password" v-model="password">
                </li>
            </ul>
            <input type="submit" value="LOGIN" class="btn"/>
        </div>
        </form>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: '',
            password:''
        }
    },
    methods:{
        async submitForm(){
            try {
                const userData = {
                    id : this.id,
                    password : this.password        
                };
                await this.$store.dispatch('LOGIN', userData);   
                
            } catch (error) {
                console.log(error);
            } finally {
                this.initForm();
            }
        },
        initForm(){
            this.id = '';
            this.password= '';
        }
    }

}
</script>

<style scoped>
.personal_info {width: 500px; margin: 0 auto;}
.personal_info .btn {display: block; width: 100%; height: 55px; background: #464646; border: 0; color:#fff; font-size:16px; font-weight: 600; cursor: pointer; transition: .3s; margin: 40px auto 0;}
.personal_info .btn:hover {background: #111;}
.personal li {overflow: hidden; margin: 0 0 5px;}
.personal li p {float: left; width: 25%; line-height: 51px; font-size: 15px; font-weight: 600; color: #464646;}
.personal li input {float: left; width: 75%; border: 0; border-bottom: 1px solid rgba(0,0,0,.2); line-height: 50px; text-indent: 15px; font-size: 15px; transition: .3s;}
.personal li input:hover {border-bottom: 1px solid rgba(0,0,0,1);}
.personal li input:focus {border-bottom: 1px solid rgba(0,0,0,1);}
</style>