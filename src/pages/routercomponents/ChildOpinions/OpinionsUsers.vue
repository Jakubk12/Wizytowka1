<template>
    <li>
    <p>
      <span class="highlight">Name: {{ name }}</span> 
     <span>Rating: <span :class="ratingClass">{{ rating }}</span> </span>
      <span class="highlight">Info:{{ info }}</span>
    </p>
  </li>
</template>


<script>
export default {
  props: ['name', 'rating', 'info'],
  computed: {
    ratingClass() {
      return 'highlight rating--' + this.rating;
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  display: block;
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}
.rating--nice {
  color: #008327;
}

.rating--great {
  color: #73ff9d;
}
</style>
