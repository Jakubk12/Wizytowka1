<template>
<div class="background">
<div class="main">
<div class="slider-parent">
<div class="slider">
<div class="top"></div>
<div class="bottom"></div>
<div class="left"></div>
<div class="right"></div>
    </div>
<div class="last-slider">
<slider-left-button @click="leftSlide"></slider-left-button>
    <slider-right-button @click="rightSlide"></slider-right-button>
    </div>
    </div>
    </div>
    <div class="elements">
  <ul class="items"> <h1 class="head">Skills</h1>
  <li class="">HTML5</li>
  <li class="">CSS3</li>
  <li class="">JS</li>
  <li class="">VueJs</li>
  <li class="">SASS</li>
  <li class="">RWD</li>
  <li class="">SEO</li>
  <li>HTTP</li></ul> 
  <ul class="items"> 
    <h1 class="head">Possibilities</h1>
    <li class="">Create from 0 to 100% web applications at frontend</li>
  <li class="">Modifications in current sites</li>
  <li class="">Fixing bugs</li> 
  </ul> 
  </div>
  <div class="empty">
  </div>
    </div>

</template>

<style scoped  lang="scss">
.background {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
.main {
    display: flex;
    margin-top: 0;
    height: 90vh;
    margin-bottom: -25vh;
}

@keyframes gradient {
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
.slider-parent {
    margin-top: 40px;
    margin-left: 20%;
        width: 675px;
        left: 0;
        top: 0;
        margin-bottom: 30px;
}
    .slider {
    
        width: 75%;
        height: 45%;
        background: yellow;
        transform: perspective(800px), rotateX(180deg), rotate(0deg), rotate TranslateZ(-150deg);
        transform-style: preserve-3d;
        transition: 2000ms;

}
.top, .bottom, .left, .right {
    position: absolute;
    box-shadow: 0 0 5px 0 #ccc, inset 0 0 10px 0 #ccc;
    border-radius: 12px;
    width: 75%;
    height: 75%;

    }
     
      
    .top {
  transform: rotateX(90deg) translate3d(0, 150px, 150px);
  background: Green;
  

}
.bottom {
  transform: rotateX(90deg) translate3d(0, 150px, -250px);
  background: Blue;



}
.left {
  transform: rotateX(90deg) rotateY(90deg) translate3d(50px, 150px, -200px);
  background: Red;
 

}
.right {
  transform: rotateX(90deg) rotateY(90deg) translate3d(50px, 150px, 200px);
  background: Yellow;
}


.last-slider {
    width: 100%;
    display: flex;
    justify-content: space-around;
      margin-top: 80px;


}
.elements {
  display: flex;
  justify-content: space-around;
   .items {
    display: block;
   }

}
.empty {
  display: flex;
  justify-content: space-around;
    margin-top: 30vh;

}
</style>

<script>
import SliderLeftButton from './UI/SliderLeftButton.vue';
import SliderRightButton from './UI/SliderRightButton.vue'


export default {
components: {
    SliderLeftButton, SliderRightButton
},
data(){
    return {
        Change: 0
    }
},
methods: {
leftSlide(){
    this.Change += 90;
    this.$el.querySelector('.slider').style.transform = `perspective(800px) rotateX(90deg) rotate(${this.Change}deg)  translateZ(-150px)`;

},
 rightSlide() {
      this.Change -= 90;
       this.$el.querySelector(
        ".slider"
      ).style.transform = `perspective(800px) rotateX(90deg) rotate(${this.Change}deg)  translateZ(-150px)`;
    },
}
}
</script>
