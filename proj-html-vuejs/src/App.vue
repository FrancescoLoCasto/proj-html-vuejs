<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name : 'AppVue',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}

</script>

<template>

<section>
  <AppHeader/>
</section>




</template>

<style lang="scss" >
@use './styles/general.scss' as *;
@use './styles/variables' as *;
@use 'bootstrap/scss/bootstrap.scss' as *;


</style>
