<template>
    <form @submit.prevent>
        <div class="header">Форма заявки</div>
        <div class="request">
            <div class="wraper">
                <img src="@/assets/RequestForm/cat.png">
            </div>
            <div class="text">
                <div class="question">Понравился магазин?<br/>Есть предложения?</div>
                <div class="call">Мы позвоним!</div>
            </div>
            <input type="text" placeholder="Ваше имя">
            <input type="text" placeholder="Номер телефона">
            <UniversalButton class="btn">Оставь заявку</UniversalButton>
        </div>
    </form>
</template>
<script>
import UniversalButton from '../Universal/UniversalButton.vue';

export default{
    components:{
        UniversalButton
    }
}
</script>
<style lang="sass" scoped>
form
    background: url("@/assets/RequestForm/backgound.png")
    background-size: cover
    width: 100%
    min-height: 1600px
    color: #F58816
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

input
    border-radius: 35px
    border: 1px solid #F58816
    width: 60%
    height: 70px
    margin-top: 5%
    padding-left: 20px 
    font-size: 24px
    &::placeholder
        color: #804405
.btn
    font-size: 24px
    background: #FF8300
    color: white 
    margin-top: 5% 
    width: 40%

    &:hover
        background-color: #FF7100
        cursor: pointer

.header
    font-size: 64px
    font-weight: 600

.text
    font-weight: 600
    text-align: center
    color: #F9B56D

    .question
        font-size: 48px
        margin-top: -1em
    .call
        font-size: 64px
        margin-top: 0.5em


.wraper
    background: linear-gradient(white, #FFDEBA)
    display: flex
    justify-content: center
    transform: translate(0, -28%)


    img
        transform: translate(0, 28%)

.request
    min-width: 700px
    min-height: 1000px
    max-width: 20%
    max-height: 80%
    box-shadow: 0 4px 6px #E0770A
    border-radius: 35px
    background: #fff
    overflow: hidden
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>