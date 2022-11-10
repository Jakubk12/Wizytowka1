<template>
 <div class="container">
      <projects-resources v-for="Element in storedElements" :key="Element.id" :title="Element.title" :description="Element.description" :img="Element.img">  </projects-resources>
      </div>
    
</template>
<script>
import ProjectsResources from './ComponentResources/ProjectsResources.vue'
export default {
  components: { ProjectsResources},
data() {
  return {
    storedElements: [
    {
      id: 'project-multipage',
      title: 'project multipage',
      description: 'Simple project about modern technologies in frontend',
      img: '',

    },
    {
      id: 'My-project',
      title: 'My own card',
      description: 'A project where are you looking now',
      img: '',

    }
    ],
  }

}

}

</script>
<style  lang="scss" scoped>
/* justify content nie działa bez display flex u rodzica. */
.container {
    display: flex;
    width: 100%;
      width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400%
  400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
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