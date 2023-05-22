<script>
import Button from "../Universal/UniversalButton.vue" 
export default{
  components:{
    Button
  }
}
</script>
<template>
<div class="header">
    <div class="header-content">
        <div class="main-text">Интернет магазин товаров для животных</div>
        <div class="sub-text-upper">От ведущих производителей</div>
        <div class="sub-text-lower">Скидка на товары для ухода - 50% до конца декабря - успейте заказать выгодно!</div>
        <Button>Успей заказать выгодно!</Button>
    </div>
    <img src="@/assets/Header/cat.png" style="overflow:auto;"/>
</div>
</template>
<style scoped lang="sass">
@import '@/consts.sass'
.header
  height: 670px 
  width: 100%
  background-color: black
  color: #fff
  background: linear-gradient(to top right, #EF800B, 20%, #F9B56D)
  display: flex
  align-items: center

  .header-content
    display: flex
    flex-direction: column
    min-width: 35%
    max-width: 600px
    padding-left: 20%

    .main-text
      font-size: 65px
      font-weight: bold
      letter-spacing: -0.07em

    .sub-text-upper
      margin-top: 5% 
      font-size: 34px
      font-weight: 600
    
    .sub-text-lower
      margin-top:5% 
      font-size: 26px
  button
    margin-top: 5%
    padding: 10px 0
    width: 75%

    &:hover
      background-color: #5298d1
   
  img
    transform: translate(-20%)
    height: 100%
</style>