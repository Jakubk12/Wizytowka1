<template>
    <section>
        <basic-card>
      <h2>Submitted Opinions</h2>
      <div>
        <basic-button>Load opinions</basic-button>
      </div>
      <ul>
        <opinions-users v-for="opinion in opinions" 
        :key="opinion.id"
        :name="opinion.name"
        :rating="opinion.rating"></opinions-users>
      </ul>
    </basic-card>
    </section>
</template>
<script>
import BasicButton from './UI/BasicButton.vue';
import BasicCard from './UI/BasicCard.vue';
import OpinionsUsers from './ChildOpinions/OpinionsUsers.vue'

export default {
components: {
    BasicButton, BasicCard, OpinionsUsers
},
props: ['opinions']
}
</script>
