<template>
      <div class="elements-one">
        <div class="content"><p class="head">{{title}}</p> <p>{{description}}</p> <div class="img">{{img}}</div>
        </div>
        </div>
</template>
<script>
export default {
    props: ['id', 'title', 'description', 'img']
    
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
 .head {
  font-weight: 600;
}
.img{
  width: 15vw;
  height: 15vw;
}
}
</style>



