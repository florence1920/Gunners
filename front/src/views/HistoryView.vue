<template>
    <div class="wrapAll">
        <Introduce></Introduce>
        <Achievement></Achievement>
        <Honor></Honor>
    </div>
</template>
<script>
import Introduce from '@/components/Introduce.vue';
import Achievement from '@/components/Achievement.vue';
import Honor from '@/components/Honor.vue';
export default {
    components:{
        Introduce,
        Achievement,
        Honor
    }

}
</script>

<style>

</style>