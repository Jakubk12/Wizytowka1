<template>
<div class="first">
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

</template>

<style scoped  lang="scss">
.first {
    margin-top: 5%;
        margin-left: 25%;
        width: 675px;
        display: block;
}
    .slider {
        margin-top: 5%;
        width: 600px;
        height: 600px;
        background: yellow;
        transform: perspective(800px), rotateX(270deg), rotate(0deg), rotate TranslateZ(-150deg);
        transform-style: preserve-3d;
        transition: 2000ms;

}
.top, .bottom, .left, .right {
    width: 100%;
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
    document.querySelector('.slider').style.transform = `perspective(800px) rotateX(90deg) rotate(${this.Change}deg) rotateY(10deg) translateZ(-150px)`;

},
 rightSlide() {
      this.Change -= 90;
      document.querySelector(
        ".slider"
      ).style.transform = `perspective(800px) rotateX(90deg) rotate(${this.Change}deg) rotateY(10deg) translateZ(-150px)`;
    },
}
}
</script>
