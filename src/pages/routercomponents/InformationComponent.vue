<template>
    <basic-card>
        <span class="me" v-if="!ButtonIsVisible">If you want to know more about mine, click the button next to </span>
        <div v-if="ButtonIsVisible">
        <span class="me">Who I am?</span>
        <span class="me"> I'am an 24 year old frontend developer with willigness to improve own skills and learn new technologies. By best advantage is good konwoledge in Vue.JS framework.</span>
        <span class="me">If you are interested to use my service or work in your company, I invite to contact. </span>
        </div>
        <basic-button @click="Active" v-if="!ButtonIsVisible">Show!</basic-button>
        <basic-button @click="Deactive" v-else-if="ButtonIsVisible">Hide!</basic-button>
    </basic-card>
</template>

<style scoped lang="scss">

.me {
    font-weight: 900;

}
</style>

<script>
export default {
    data() {
        return {
            ButtonIsVisible: false,
        }
    },
 methods: {
    Active() {
        this.ButtonIsVisible = true;
    },
    Deactive() {
        this.ButtonIsVisible = false;
    }
 }
}
</script>
