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

<style  lang="scss">

#app {
  width: 100%;
  overflow-x: hidden;
  height: 100%;
   font-family: 'Source Sans Pro', sans-serif;
}
 .head {
  font-weight: 900;
   text-shadow: 2px 2px 15px green;}
   /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

</style>
