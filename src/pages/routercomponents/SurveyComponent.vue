<template>
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
          <input type="radio" id="rating-great" value="Nice" name="rating" v-model="chosenRating" />
          <label for="rating-great">Nice</label>
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
</template>



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
    emits: ['survey-data'],
    methods: {
        submitData() {
            if(this.enteredInfo === '' || !this.chosenRating) {
                this.invalidInput = true 
                return;
            }
            this.invalidInput = false;
             this.$emit('survey-data', {
        userName: this.enteredName,
        rating: this.chosenRating,
      });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};

</script>
