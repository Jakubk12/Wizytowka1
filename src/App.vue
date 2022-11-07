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
 width: 100%;
    height: 100%;
    margin: 0;
    padding: 0px;
    overflow-x: hidden; 
  
}
</style>
