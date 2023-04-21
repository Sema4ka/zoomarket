<template>
    <h1>Ты балбес</h1>
    <button @click="updateData">Обнови меня</button>
    <Card class="card" v-for="card in cards" :cardData="card"></Card>
</template>
<script>
import Card from '@/components/Content/PopularStaff/PopularCard.vue';
export default{
    data(){
        return{
            cards:[]
        }
    },
    methods:{
        updateData(){
            this.cards= JSON.parse(localStorage['cart']);
        }
    },
    components:{
        Card
    },
    mounted(){
        this.updateData();
    }
}
</script>
<style scoped lang="sass">
.card
    width: 30%
</style>