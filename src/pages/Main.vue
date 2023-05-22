<script>
import Header from '@/components/Header/PageHeader.vue';
import Content from '@/components/Content/PageContent.vue';
import PopularStaff from '@/components/Content/PopularStaff/PopularStaff.vue';
import AboutUs from '@/components/Content/AboutUs/AboutUs.vue';
import Promo from '@/components/Promo/PagePromo.vue';
import RequestForm from '@/components/RequestForm/RequestForm.vue';
import axios from 'axios';


export default{
    components:{
         Header, Content, PopularStaff, AboutUs, Promo, RequestForm
    },
    mounted(){
        this.fetchCards();
    },
    
    data(){
      return{
        popularCards:[]
      }
    },
    methods:{
      async fetchCards(){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const picResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
            this.popularCards = response.data;
            var pics = picResponse.data;
            this.popularCards.forEach(el => Object.assign(el,pics[el.id]));
        }
        catch(e){
            alert(e);
        }
        // if(localStorage['cart']!=undefined){
        //   var cart = JSON.parse(localStorage['cart']);
        //   cart.push(...this.popularCards);
        //   console.log(cart);
        //   this.popularCards = cart;
        // }
      }
    }
}
</script>

<template>
  <Header></Header>
  <Content>
    <PopularStaff :popularCards="popularCards"></PopularStaff>
    <AboutUs></AboutUs>
  </Content>
  <Promo></Promo>
  <RequestForm/>
  <img src="@/assets/damn_bro.png">
</template>

<style scoped lang="sass">
img
  width: 100%
  margin-top:-50px
</style>
