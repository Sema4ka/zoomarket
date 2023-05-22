<script setup></script>
<template>
    <div class="tech-buttons">
        <img @click="$router.push('/cart')" src="@/assets/Navigation/cart.svg"><img src="@/assets/Navigation/profile.svg">
    </div>
</template>
<style lang="sass" scoped>
.tech-buttons
    margin-left: 40px
    flex-grow: 2

img 
    margin: 0 15px
    &:hover
        cursor: pointer
</style>