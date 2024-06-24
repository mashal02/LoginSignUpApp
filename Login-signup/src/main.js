import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
// import { createstore } from "vuex";
import Button from "primevue/button";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";

//import store from "./store";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
// app.use(createstore);
//app.use(store);

app.use(createPinia());
app.component("Button", Button);
app.component("InputGroup", InputGroup);
app.component("InputGroupAddon", InputGroupAddon);
app.component("InputText", InputText);
app.mount("#app");
