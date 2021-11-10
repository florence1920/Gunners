<template>
<div>
    club View
    잘 나오니?
</div>
</template>

<script>
import {  getCul } from '@/api/edu.js';
export default {
    created(){
        console.log('created');
        getCul()
        .then( response =>{
            console.log('here');
            console.log(response);
            console.log(response.data.response.body.items.item[0].title);
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
</script>

<style>

</style>