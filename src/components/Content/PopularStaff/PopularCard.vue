<script>
import { stringifyQuery } from 'vue-router';

export default{
    props:{
        cardData:{
            type: Object,
            required: true
        },
    },
    methods:{
        getRandomInt(min,max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        addToCart(){
            if(localStorage['cart']!=undefined){
                const cart = JSON.parse(localStorage['cart']);
                cart.push(this.cardData);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            else{
                localStorage['cart'] = JSON.stringify([this.cardData]);
            }
        }
    },
    computed:{
        price(){
            return this.cardData.id*4+"руб";
        }
    }
}
</script>
<template>
<div class="popular-card">
    <img class="heart" src="@/assets/Content/PopularStaff/heart.svg"/>
    <div class="card-content">
        <img :src="cardData.thumbnailUrl"/>
        <span class="card-text">
            <div class="text-name medium">{{ cardData.title.slice(0,20)}}</div>
            <div class="text-name">{{ cardData.body.slice(0,35)}}</div>
        </span>
        <button @click="addToCart">В корзину</button>
        <div class="price bold">{{price}}</div>
    </div>
</div>
</template>
<style scoped lang="sass">
@import "../../../consts.sass"

.heart
  width: 35px
  height: 35px
  float: right
  margin: 10px 10px

img
  display: inline-block
  width: 100%

.popular-card
    border: 1px solid #FF8300
    box-shadow: 0 0 3px #FF8300
    border-radius: 20px
    min-width: 45%
.card-content
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 3fr 1fr
    padding: 20px 10px
    row-gap:20px
    column-gap:20px
    margin:10% 0 0 10% 
    height: 80%

    .card-text
        display: flex
        flex-direction: column
        row-gap: 10px


    .price
        text-align: center

    button
        border:0
        background-color:$button-color
        font-family: $montserrat-font
        color: white
        font-size:20px
        border-radius:20px
        height: 80%
        cursor: pointer
</style>