<script>

export default{
    data(){
        return{
            isLiked: false,
            isCarted: false,
        }
    },
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
                this.cardData.isCarted = true;
                var data = this.cardData;
                const cart = JSON.parse(localStorage['cart']);
                cart.push(this.cardData);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            else{
                localStorage['cart'] = JSON.stringify([this.cardData]);
            }
            this.$emit("addToCart");
        },
        removeFromCart(){
            if(localStorage['cart']!=undefined){
                this.cardData.isCarted = false;
                var cart = JSON.parse(localStorage['cart']);
                cart = cart.filter((el)=> el.body!=this.cardData.body);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            this.$emit("removeFromCart");
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
    <img class="heart" v-if="!cardData.isLiked" @click="cardData.isLiked=true" src="@/assets/Content/PopularStaff/heart.png"/>
    <img class="heart" v-if="cardData.isLiked" @click="cardData.isLiked=false" src="@/assets/Content/PopularStaff/like.png"/>
    <div class="card-content">
        <img :src="cardData.thumbnailUrl"/>
        <span class="card-text">
            <div class="text-name medium">{{ cardData.title.slice(0,20)}}</div>
            <div class="text-name">{{ cardData.body.slice(0,35)}}</div>
        </span>
        <button v-if="!cardData.isCarted" @click="addToCart">В корзину</button>
        <button v-if="cardData.isCarted" @click="removeFromCart">Из корзины</button>
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
  margin-left: -100px 
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(330deg)
  &:hover
    cursor: pointer
    filter: invert(0.5) sepia(1) saturate(5) hue-rotate(290deg)

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
        width: 150px
        cursor: pointer
</style>