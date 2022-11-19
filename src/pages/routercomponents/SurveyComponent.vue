<template>
  <section>
            <basic-card>
                <h2>What's your vote in these survey?...</h2>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>What is your rate about this card? Add a simple comment about and select rate from </h3>
        <div class="form-control"><label for="info">Your info</label></div>
        <input type="text" id="info" required placeholder="Info body" name="info" v-model="enteredInfo" />
        <div class="form-control">
          <input type="radio" required placeholder="Info radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
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
          <input type="radio" id="rating-nice" value="nice" name="rating" v-model="chosenRating" />
          <label for="rating-nice">Nice</label>
        </div>
         <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Extra</label>
        </div>
        <p class="alert-negative" v-if="invalidInput">Sorry! One / two or three fields are empty. Check it and enter data again</p>
        <p class="alert-positive" v-if="!invalidInput">Ok! Your data are correct, you entered all fields</p>
        <div>
          <basic-button>Submit</basic-button>
        </div>
      </form>
            </basic-card>

        </section>
</template>



<script>


export default {
    components: {
    },
    data() {
        return {
            enteredName: '',
            enteredInfo: '',
            chosenRating: null,
            invalidInput: true

        }
    },
    methods: {
        submitData() {
            if(this.enteredName === '' || this.enteredInfo === '' || !this.chosenRating) {
                this.invalidInput = true 
                return;
            }
            this.invalidInput = false;
        //     this.$emit('survey-data', {
     //   userInfo: this.enteredInfo,
     //   userName: this.enteredName,
     //   rating: this.chosenRating, 
      fetch('http://localhost:3000/posts/', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/JSON' },
        body: JSON.stringify({ 
          name: this.enteredName,
          Info: this.enteredInfo,
          rating: this.chosenRating
        })
      })
      this.enteredName = '';
      this.chosenRating = null;
      this.enteredInfo = '';
    },
  },
};

</script>

<style lang="scss" scoped>
.alert {
 &-negative {
  font-weight: 900;
  color: #c83349;
 }
 &-positive {
  color: #405d27;
  font-weight: 900;
 }
}

</style>