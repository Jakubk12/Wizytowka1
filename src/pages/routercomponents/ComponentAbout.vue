<template>
    <div class="background">
    <survey-component @survey-data="storeData"></survey-component>
    <opinions-component :opinions="loadedOpinionsData"></opinions-component>
    </div>
</template>
<style  lang="scss" scoped>
.background {
    display: inline-block;
    justify-content: space-between;
      width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%
  400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
} @keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
<script>
import SurveyComponent from './SurveyComponent.vue'
import OpinionsComponent from './OpinionsComponent.vue'
export default {
  data() { 
    return {
    loadedOpinionsData: []
  }
  },
    components: {
        SurveyComponent, OpinionsComponent
    },
    methods: {
      storeData(opinionData) {
        const submitData  = {  
          name: opinionData.userName,
          info: opinionData.userInfo,
          rating: opinionData.rating,
          id: new Date().toISOString()
        }
        
         this.loadedOpinionsData.push(submitData);
         console.log(submitData)
      }
    }
}
</script>


