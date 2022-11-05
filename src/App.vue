<template>
  <div id="app">
<the-header></the-header>
<router-view></router-view>
<the-footer></the-footer>
</div>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter, 
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  
}
</style>
