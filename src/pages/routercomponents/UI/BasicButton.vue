<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  font-weight: 600;
  color: white;
  background-color: inherit;
  cursor: pointer;
  transition: .8s 
}

button:hover,
button:active {
  background-color: #5c0556;
  border-color: #5c0556;
}
</style>