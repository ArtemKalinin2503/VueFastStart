import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//Подключим компоненты
import StartScreen from './components/StartScreen.vue';

//Регистрируем компоненты
Vue.component ('StartScreen', StartScreen);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
