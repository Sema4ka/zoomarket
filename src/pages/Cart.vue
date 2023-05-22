<template>
    <h1 v-if="cards.length==0">Это корзина, можно добавить сюда товры из главной</h1>
    <CartStaff v-if="cards.length>0" class="cart-staff" :popularCards="cards">
    </CartStaff>

</template>
<script>
import Card from '@/components/Content/PopularStaff/PopularCard.vue';
import CartStaff from '@/components/Content/PopularStaff/PopularStaff.vue';
export default{
    data(){
        return{
            cards:[]
        }
    },
    methods:{
        updateData(){
            if(localStorage['cart'])
                this.cards= JSON.parse(localStorage['cart']);
        },
        del(){
            this.cards= [];
            localStorage.removeItem('cart');
        }
    },
    components:{
        Card,
        CartStaff
    },
    mounted(){
        this.updateData();
    }
}
</script>
<style scoped lang="sass">


.cart-staff
    margin-top:20vh
    width: 60%

</style>