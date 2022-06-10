import Vuex from "vuex";
import Vue from "vue"
import airports from "../components/data/airports";
// import {SET_NOTE} from "./mutations-types";

Vue.use(Vuex);

// let store = new Vuex.Store({
export default new Vuex.Store({
    state: airports,
    mutations: {
        UPDATE_FIRSTNAME(state, payload) {
            state.firstName = payload
        },
        UPDATE_NAME(state, payload) {
            state.shortdesc = payload
        },
        RESET_NAME(state, payload) {
            state.firstName = payload;
        },
        UPDATE_FAVORITE(state, payload) {
            state.favorites = payload
        },
        changeName(state, item) {
            // item.quantity = 1;
            state.name = item;
        },
    },
    actions: {
        addToFavorite(context, payload) {
            const favorite = context.state.favorites
            favorite.push(payload)
            context.commit('UPDATE_FAVORITE', payload)
        },
        updateFirstName({commit}, payload) {
            commit('UPDATE_FIRSTNAME', payload)
        },
        updateName(context, payload) {
            context.commit('UPDATE_NAME', payload)
        },
        resetName({commit}) {
            commit('RESET_NAME', '')
        },
    },
    getters: {
        // fullName(state) {
        //     return `${state.firstName} ${state.lastName}`
        // },
        allAirport(state) {
            return state.catalogue
        },
    },
});

// global.store = store;
// export default store;