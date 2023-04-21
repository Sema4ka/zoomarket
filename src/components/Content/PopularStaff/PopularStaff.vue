<script>
import PopularCard from './PopularCard.vue';
import axios from 'axios';
export default{
    components:{
        PopularCard
    },
    data(){
        return{
            currentIndex: 0,
            popularCards:[],
            pics:[],
        }
    },
    computed:{
        countOfStaff(){
            return this.popularCards.length-1;
        },
    },
    watch:{
        popularCards(){
            this.popularCards.sort(() => Math.random() - 0.5);
        }
    },
    mounted(){
        this.fetchCards();
    },

    methods:{
        moveRight(){
            if(this.currentIndex != this.countOfStaff-1)
                this.currentIndex++;
            else
                this.currentIndex = 0;

        },
        moveLeft(){
            if(this.currentIndex != 0)
                this.currentIndex--;
            else
                this.currentIndex = this.countOfStaff-1;
        },
        async fetchCards(){
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                const picResponse = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
                this.popularCards = response.data;
                this.pics = picResponse.data;
                this.popularCards.forEach(el => Object.assign(el,this.pics[el.id]));
            }
            catch(e){
                alert(e);
            }
        }
    }
}
</script>
<template>
    <div class="tile-header">Популярные товары</div>
    <div class="popular-staff">
        <img @click="moveLeft" src="@/assets/Content/PopularStaff/arrow.svg"/>
        <div class="wrapper">
            <div 
            :style="{'margin-left': '-' + 50*currentIndex + '%'}"
            class="popular-cards">
                <PopularCard 
                v-for="post in popularCards"
                :cardData="post"
                >
                </PopularCard> 
            </div>
        </div>
        <img 
        @click="moveRight"
        id="right" src="@/assets/Content/PopularStaff/arrow.svg"/>
    </div>
</template>
<style scoped lang="sass">
@import "../../../consts.sass"

.wrapper
    overflow: hidden
    margin-left: 40px

.popular-staff
    font-size:24px
    display: flex
    width: 95%
    margin: auto


#right
  transform: rotate(0.5turn)

.popular-cards
  display: flex
  row-gap: 30px
  column-gap: 5%
  height: auto
  width: 100%
  transition: all ease .5s 




.tile-header
  color:#7DA0AF 
  font-size:36px
  text-align: center
  margin: 5% 0


</style>