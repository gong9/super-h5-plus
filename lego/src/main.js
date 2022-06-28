import Vue from 'vue'
import App from './App.jsx'
import router from './router'

new Vue({
    router,
    el: '#app',
    render: (h) => h(App)
})