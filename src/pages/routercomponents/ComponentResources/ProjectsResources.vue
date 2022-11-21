<template>
      <div class="elements-one">
        <div class="content"><p class="head">{{title}}</p> <p>{{description}}</p></div>
        <div>{{img}}</div>
        </div>

</template>
<script>
export default {
    props: ['id', 'title', 'description', ]
    
}
</script>

<style lang="scss" scoped>
  .elements {
  display: flex; 
  
    
  }
.content {
margin-bottom: 15vh;
margin-right: 5vw;
margin-left: 2vw; 

.img{
  width: 30vw;
  height: 30vh;
  background-size: 100% 100%;
  box-shadow: rgba(150, 160, 170, 0.15) 0px 5px 15px;



}

}
</style>



