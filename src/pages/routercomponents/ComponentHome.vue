<template>
<div class="main">
<div class="top"></div>
<div class="bottom"></div>
<div class="left"></div>
<div class="right"></div>
<div class="inner">
    <slider-left-button></slider-left-button>
    <slider-right-button></slider-right-button>
</div>

</div>

</template>

<style scoped  lang="scss">


    .main {
        margin-top: 5%;
        margin-left: 35%;
        display:inline-block;
        overflow: auto;
        width: 650px;
        height: 650px;
        background-color: yellow;
        transform: perspective(800px), rotateX(270px), rotate(0deg), rotateY(180deg);
        transition: 600ms;

    }
    .inner {
        display: block;
        }
</style>

<script>
import SliderLeftButton from './UI/SliderLeftButton.vue';
import SliderRightButton from './UI/SliderRightButton.vue'

export default {
components: {
    SliderLeftButton, SliderRightButton
}
}
</script>
