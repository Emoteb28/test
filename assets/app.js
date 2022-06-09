/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import store from "./store"

import Home from './components/Home'
import Demo from './components/Demo'

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/demo', component: Demo, name: 'demo'},
    // { path: '*',       // * => wildcard. Matches all other routes
    //     name: 'notfound',
    //     component: notfound
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    //base: '/app/',
    routes
})

Vue.use(VueRouter)
new Vue({
    router,
    vuetify,
    store
}).$mount('#app')