<script setup>

</script>   


<template>
    <button
    :style="styleObject">
        <slot></slot>
    </button>
</template>


<style scoped lang="sass">
@import '../../consts.sass'

button
    border:0
    border-radius:35px
    background-color:#74ACD9
    color:#fff
    font-size: 32px
</style>