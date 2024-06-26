import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router";
/* import the necessary styles for Vue Flow to work */
import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
import '@vue-flow/core/dist/theme-default.css';

const app = createApp(App);

//
app.use(router);
app.mount('#app')
