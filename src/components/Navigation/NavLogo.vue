<script setup>
</script>
<template>
    <div class="logo" @click="$router.push('/')">
        <img src="../../assets/Navigation/Logo.png"/>
        <div class="logo-text">PuZoo <img src="../../assets/Navigation/smile.svg"/></div>
    </div>
</template>
<style lang="sass" scoped>
.logo
    display: flex
    align-items: center
    flex-grow: 1
    &:hover
      cursor: pointer

    img
      padding: 10px
      padding-right: 30px

    .logo-text
      font-weight: bold
      font-size: 2.5em
      color: white

      img 
        position: relative
        top: 20px
        right: 60px
</style>