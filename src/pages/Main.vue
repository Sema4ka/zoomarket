<script>
import Header from '@/components/Header/PageHeader.vue';
import Content from '@/components/Content/PageContent.vue';
import PopularStaff from '@/components/Content/PopularStaff/PopularStaff.vue';
import AboutUs from '@/components/Content/AboutUs/AboutUs.vue';
import Promo from '@/components/Promo/PagePromo.vue';
import RequestForm from '@/components/RequestForm/RequestForm.vue';

export default{
    components:{
         Header, Content, PopularStaff, AboutUs, Promo, RequestForm
    }
}
</script>

<template>
  <Header></Header>
  <Content>
    <PopularStaff></PopularStaff>
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
