<template>
<div class="main">
<div class="slider-parent">
<div class="slider">
<div class="top"></div>
<div class="bottom"></div>
<div class="left"></div>
<div class="right"></div>
 
    </div>

<div class="last">

<slider-left-button @click="leftSlide"></slider-left-button>
    <slider-right-button @click="rightSlide"></slider-right-button>
    </div>
    </div>
    </div>

</template>

<style scoped  lang="scss">
.main {
    display: flex;
    margin-top: 0;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
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
    margin-top: 20px;
        margin-left: 25%;
        width: 675px;
        left: 0;
        top: 0;
}
    .slider {
        
        width: 550px;
        height: 550px;
        background: yellow;
        transform: perspective(800px), rotateX(180deg), rotate(0deg), rotate TranslateZ(-150deg);
        transform-style: preserve-3d;
        transition: 2000ms;

}
.top, .bottom, .left, .right {
    width: 75%;
    height: 600px;
    position: absolute;
    box-shadow: 0 0 5px 0 #ccc, inset 0 0 10px 0 #ccc;
    border-radius: 12px;

    }
    .top {
  transform: rotateX(90deg) translate3d(0, 150px, 150px);
  background: Green;
    width: 75%;
    height: 75%;

}
.bottom {
  transform: rotateX(90deg) translate3d(0, 150px, -250px);
  background: Blue;
 width: 75%;
    height: 75%;


}
.left {
  transform: rotateX(90deg) rotateY(90deg) translate3d(50px, 150px, -200px);
  background: Red;
   width: 75%;
    height: 75%;

}
.right {
  transform: rotateX(90deg) rotateY(90deg) translate3d(50px, 150px, 200px);
  background: Yellow;
   width: 75%;
    height: 75%;

}


.last {
    width: 100%;
    display: flex;
    justify-content: center;
      margin-top: 10px;


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
    document.querySelector('.slider').style.transform = `perspective(800px) rotateX(90deg) rotate(${this.Change}deg)  translateZ(-80px)`;

},
 rightSlide() {
      this.Change -= 90;
      document.querySelector(
        ".slider"
      ).style.transform = `perspective(800px) rotateX(90deg) rotate(${this.Change}deg)  translateZ(-80px)`;
    },
}
}
</script>
