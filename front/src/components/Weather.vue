<template>
    <div>
        서울 날씨 ^^
        {{this.$store.state.weather.data.weather[0].main}}
    </div>
</template>

<script>
export default {
    
    created(){
        this.$store.dispatch('FETCH_WEATHER');
    }
}
</script>

<style>

</style>