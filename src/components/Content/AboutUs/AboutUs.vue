<script setup></script>
<template>
    <div class="company-info">
        <img src='../../../assets/Content/AboutUs/cat.png'/>
        <div class="text">
            <div class="text-header">О компании</div>
            <div class="light right">
                Наш коллектив - это команда специалистов, которые разбираются во всех тонкостях своего дела.
                Мы всегда в курсе актуальных новинок в сфере зооиндустрии. Среди нас профессиональные заводчики,
                владельцы ведущих питомников страны. Мы готовы подобрать для вас лучшие корма и витаминные комплексы.</div>
        </div>

        <div class="text">
            <div class="text-header">Наш товар</div>
            <div class="light">Ищете качественные зоотовары по доступным ценам? В интернет-магазине PUZOO.RU широкий ассортимент кормов, 
            витаминных  добавок, игрушек для вашего питомц от лучших российских и зарубежных производителей.  </div>
        </div>
        <img id="dog" src='../../../assets/Content/AboutUs/dog.png'/>

    </div>
</template>
<style scoped lang="sass">
@import '../../../consts.sass'
.company-info
    display: grid
    grid-template-columns: 1fr 1fr
    margin: 20% auto

    .text
        font-size: 30px
        width: 80%
    
    .right
        text-align: right

    .text-header
        color: #C2A88D
        text-align: center
        margin: 8% 0
    
    #dog
        margin-top: 5% 
</style>