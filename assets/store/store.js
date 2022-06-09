// import Vuex from "vuex";
// import Vue from "vue"
// import airports from "../components/data/airports";
// Vue.use(Vuex);
//
// // let store = new Vuex.Store({
// export default new Vuex.Store({
//     state: {
//         firstName: 'John',
//         lastName: 'Doe',
//         age:20,
//         dob:'20/08/1990',
//         favorites :[]
//     },
//     mutations : {
//         UPDATE_FIRSTNAME(state, payload) {
//             state.firstName = payload
//         },
//         RESET_NAME(state, payload) {
//             state.firstName = payload;
//         },
//         UPDATE_FAVORITE(state, payload) {
//             state.favorites = payload
//         },
//     },
//     actions: {
//         addToFavorite(context, payload) {
//             const favorite = context.state.favorites
//             favorite.push(payload)
//             context.commit('UPDATE_FAVORITE', payload)
//         },
//         updateFirstName({commit}, payload) {
//             console.log(payload)
//             commit('UPDATE_FIRSTNAME', payload)
//         },
//         resetName({ commit }) {
//             commit('RESET_NAME', '')
//         },
//     },
//     getters: {
//         fullName (state){
//             return `${state.firstName} ${state.lastName}`
//
//         }
//     },
//
// });
//
// // global.store = store;
// // export default store;