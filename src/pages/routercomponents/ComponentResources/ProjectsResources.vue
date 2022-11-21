<template>
      <div class="elements-one">
        <div class="content"><p class="head">{{title}}</p> <p>{{description}}</p></div>
        </div>
        <div class="slide">

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
  background-image:("/1proj.png");
  background-size: 100% 100%;
  box-shadow: rgba(150, 160, 170, 0.15) 0px 5px 15px;
  animation: changeImage 15s infinite;
  display: block;


}
@keyframes changeImage {
  0% {
    background-image:("/1proj.png")
  }
  50% {
    background-image:("/2proj.png")
  }
  100% {
    background-image:("/1proj.png")
  }
}
}
</style>



