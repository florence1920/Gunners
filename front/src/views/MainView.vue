<template>
    <div>
        MainView
    </div>
</template>

<script>
import {getMember} from '@/api/test.js'
export default {
    mounted(){
        getMember()
    }
}
</script>

<style>

</style>