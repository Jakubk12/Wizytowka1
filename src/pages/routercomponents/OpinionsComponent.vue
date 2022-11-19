<template>
    <section>
        <basic-card>
      <h2>Submitted Opinions</h2>
      <div>
        <basic-button @click="loadOpinions">Load opinions</basic-button>
      </div>
      <ul>
        <opinions-users v-for="opinion in opinions" 
        :key="opinion.id"
        :name="opinion.name"
        :rating="opinion.rating"
      :info="opinion.info"></opinions-users>
      </ul>
    </basic-card>
    </section>
</template>
<script>

import OpinionsUsers from './ChildOpinions/OpinionsUsers.vue'

export default {
  data() {
    return {
      opinions: []
    }
  },
components: {
     OpinionsUsers
}, methods: {
loadOpinions() {
    fetch('http://localhost:3000/posts/').then
    ((response) =>{
      if (response.ok) {
        return response.json()
      }
    })
    .then((data)=>{
      this.opinions = data
        })
        .then((data)=>{
          const opinions = [];
          for (const id in data) {
            opinions.push({id: id,
              name: data[id].name,
              rating: data[id].rating,
            info: data[id].info,})
          }
          this.opinions = opinions;
        })
    }
  
}
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
