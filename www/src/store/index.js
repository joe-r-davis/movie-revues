import vuex from "vuex";
import axios from "axios";
import vue from "vue";

let movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/movie?api_key=ebe5f1a4c064456889986e20dbad71c8&page=1&include_adult=false&query=",
    timeout: 2000
});

var auth = axios.create({
    baseURL: "//localhost:3000/auth/",
    timeout: 3000
    // withCredentials: true
  });

vue.use(vuex);

export default new vuex.Store({
    state: {
        user: {
            name: "Joe"
        },
        searchResults: [],
        activeMovie: {}
    },
    mutations: {
        addResults(state, payload){
            state.searchResults = payload
        }
    },
    actions: {
        getMovies({ commit, dispatch}, title){
            movieDB(title)
            .then(res=>{
                commit('addResults', res.data.results)
            })
            .catch(err=>{
                console.error(err)
            })
        }
    }
})