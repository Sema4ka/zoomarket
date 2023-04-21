<script>
import Nav from './components/Navigation/PageNav.vue'
export default{
  components:{
    Nav
  }
}
</script>

<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="sass">
img
  width: 100%
  margin-top:-50px
</style>
