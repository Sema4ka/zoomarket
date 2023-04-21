<template>
    <div class="main-grid">
        <div class="card" v-for="i in 20">{{i}}</div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="sass">
.main-grid 
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: 40px
    row-gap: 20px
    margin: 10vh 10vw

.card
    border: 1px solid #FF8300
    box-shadow: 0 0 3px #FF8300
    border-radius: 20px
    height: 250px
</style>