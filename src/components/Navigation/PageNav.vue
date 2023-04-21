<script>
import But from "./NavButton.vue"
import Logo from "./NavLogo.vue";
import Profile from "./ProfileStaff.vue"

export default{
components:{
    But,
    Logo,
    Profile
  }
}
</script>

<template>
    <div class="nav">

        <Logo></Logo>
        <div class="nav-buttons">
          <But>О компании</But>
          <But @click="$router.push('/catalog')">Каталог</But>
          <But>Контакты</But>
          <But>Доставка</But>
        </div>
        <Profile></Profile>

    </div>
</template>


<style lang="sass" scoped>
.nav
  display: flex
  align-items: center
  justify-content: center
  background-color: #EF800B
  position: sticky
  top: 0
  height: 84px
  padding-left: 20%
  padding-right: 20% 
  width: 60%
  z-index: 5


.nav-buttons
  display: flex
  justify-content: space-around
  flex-grow: 4

</style>