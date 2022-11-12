<template>
    <div class="background">
        <section>
            <basic-card>
                <h2>What's your vote in these survey?...</h2>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="Info">Your Info</label>
          <input type="text" id="info" name="info" v-model.trim="enteredInfo" />
        </div>
        <h3>What is your rate about this card? Vote and enter informations what we can do</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Extra</label>
        </div>
        <p v-if="invalidInput">Sorry! One or two fields are empty. Check it and enter data again</p>
        <div>
          <basic-button>Submit</basic-button>
        </div>
      </form>
            </basic-card>

        </section>
    </div>
</template>
<style  lang="scss" scoped>
.background {
    display: flex;
    justify-content: center;
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

<script>
import BasicButton from './UI/BasicButton.vue'
import BasicCard from './UI/BasicCard.vue'

export default {
    components: {
        BasicButton, BasicCard
    },
    data() {
        return {
            enteredInfo: '',
            chosenRating: null,
            invalidInput: true
        }
    },
    methods: {
        submitData() {
            if(this.enteredInfo === '' || !this.chosenRating) {
                this.invalidInput = true 
                return;
            }
            this.invalidInput = false;
             this.$emit('surveyData', {
        userName: this.enteredInfo,
        rating: this.chosenRating,
      });

      this.enteredInfo = '';
      this.chosenRating = null;
    },
  },
};

</script>
