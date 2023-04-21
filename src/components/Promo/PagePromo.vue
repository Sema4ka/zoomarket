<script setup>
</script>
<template>
    <div class="promo">
        <div class='promo-content'>
            <span class="text">
                <div class="header bold">Получите скидку 10%</div>
                <div class="desc">По промокоду с ващей почты</div>
            </span>
            <form @submit.prevent class="form">
                <dev class="header bold">Промокод на скидку 10%</dev>
                <input type="text" placeholder="Введите почту"/>
                <button type="submit">Получить скидку</button>
            </form>
        </div>
    </div>
</template>
<style scoped lang="sass">
@import '@/consts.sass'
.promo-content
    transform: translate(0,0)    
.promo
    width: 100%
    min-height:930px
    background-image: url("@/assets/Promo/cat2.png")
    background-repeat: no-repeat
    background-size: cover

.cat
    transform: translate(27%, -40%)
    z-index: 0

.form
    position: relative
    z-index: 1
    display: flex
    margin: auto
    margin-top: 5%
    flex-direction: column
    justify-content: center
    align-items: center
    background-image: url("@/assets/Promo/form_background.png")
    width: 480px
    height: 480px
    background-repeat: no-repeat
    row-gap: 8%
    .header
        text-shadow: 3px 0 0 #F69733
        font-size: 24px

    input
        border-radius: 35px
        border: 1px solid #656571
        width: 80%
        height: 13%
        font-size: 20px
        padding-left: 10px 

    button
        width: 80%
        height: 11%
        background-color: #F58816
        border-radius: 35px
        font-size: 30px
        font-weight: 600
        color: white
        border: 0
        &:hover
            background-color: #F57700
            cursor: pointer

.text
    display: inline-flex
    flex-direction: column
    color: white
    font-size: 30px
    row-gap: 40px
    transform: translate(20%,80%)  

    .header
        font-size:64px
            

            
</style>