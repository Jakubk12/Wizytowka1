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
  overflow-x: hidden;
  height: 100%;
   font-family: 'Source Sans Pro', sans-serif;
}
    @media all and (max-width:900px) {
      #app {
        width: 100%;
      }
    
    
  
}
</style>
