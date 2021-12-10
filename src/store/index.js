import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tries: 15,
    movimientos: 0,   

  },
  mutations: {
    CHANGE_MOVES(state){
      state.movimientos = state.movimientos + 1; 
    },

    RESET(state){
      state.movimientos = 0
    }


  },
  actions: {

    incrementar({ commit }){
      
      commit("CHANGE_MOVES")
    },

    reset({commit}){
      commit("RESET")
    }

  },
  modules: {},
});
