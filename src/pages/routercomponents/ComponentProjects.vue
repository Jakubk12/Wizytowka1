<template>
    <div class="container">
        <p>1. ProjectMultipage</p>
        <p>A Simple project about modern frontend technologies with form</p>
    <div>
</div>
    </div>
</template>

<style  lang="scss" scoped>
.container {
    display: flex;
    width: 100%;
      width: 100%;
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
</style>