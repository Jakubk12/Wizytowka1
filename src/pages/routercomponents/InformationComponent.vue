<template>
    <basic-card>
        <span class="me" v-if="!ButtonIsVisible">If you want to know more about mine, click the button next to </span>
        <div class="container" v-if="ButtonIsVisible">
        <span class="me">Who I am?  </span>
        </div>
        <div class="container" v-if="ButtonIsVisible">

        <span class="me"> I'm an 24 year old frontend developer with willigness to improve own skills and learn new technologies. My best advantage is good konwoledge in Vues.JS framework.</span>
        
        <span class="me"> If you are interested to use my service or invite me to your company, I am open to contact. </span>
        <div class="container" v-if="ButtonIsVisible">
        <span class="me">With ensuration, you will not be disappointed. I enjoy creating and finding coding solutions. From a some time I'm very in topic and consistently work for get new experiences. </span>
        </div>
        </div>
        <div class="animated">
        <transition name="fade-button" mode="out-in">
        <basic-button @click="Active" v-if="!ButtonIsVisible">Show!</basic-button>
        <basic-button @click="Deactive" v-else-if="ButtonIsVisible">Hide!</basic-button>
    </transition>
    </div>
    </basic-card>
</template>

<style scoped lang="scss">
.container {
    display: block;
    margin: 2rem;
}
.me {
    font-weight: 900;

}
.animated {
    animation: modal ease-in forwards; 
    opacity: 1;

}
.fade-button-enter-from,
.fade-button-leave-to {
opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.35s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.35s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1
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
