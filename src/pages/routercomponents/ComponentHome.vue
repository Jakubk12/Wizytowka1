<template>
<div class="main">
<div class="top"></div>
<div class="bottom"></div>
<div class="left"></div>
<div class="right"></div>
</div>
</template>

<style scoped>
    .main {
        align-items: center;
        justify-content: center;
        width: 350px;
        height: 350px;
        background-color: yellow;
        transform: perspective(800px), rotateX(270px), rotate(0deg), rotateY(180deg)

    }
    .slide {

    }
</style>

<script>
export default {

}
</script>
