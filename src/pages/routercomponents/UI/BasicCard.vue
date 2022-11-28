<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      width: 100%;
  background: linear-gradient(-45deg, #23a6d5, #23d5ab);
  background-size: 400%
  400%;
  animation: gradient 15s ease infinite;
  height: 100vh auto;
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