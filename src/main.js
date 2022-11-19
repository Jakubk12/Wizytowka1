import { createApp } from 'vue';
import App from './App.vue'
import BasicCard from './pages/routercomponents/UI/BasicCard.vue';
import BasicButton from './pages/routercomponents/UI/BasicButton';

import router from './router.js';
import { createPinia, Pinia } from 'pinia';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret, )




const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('basic-card', BasicCard)
app.component('basic-button', BasicButton)
.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')