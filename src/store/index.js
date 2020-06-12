import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


let hello = {
  state:{
    title: '你好阿'
  },
  mutations:{
    addName(state , obj) {
      state.title += obj.str;
    },
  },
  getters:{
    getTitle: state => {
      return state.title
    },
  }
}

let hello2 = {
  namespaced: true,
  state:{
    title: '你好阿'
  },
  mutations:{
    addName(state , obj) {
      state.title += obj.str;
    },
  },
  getters:{
    getTitle: state => {
      return state.title
    },
  }
}

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'todo1', done: true },
      { id: 2, text: 'todo2', done: false },
    ]
  },
  // mutations 應該只能是同步函式,如果在內變調用異步函式會導致狀態難以被追蹤
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementNumber(state, number) {
      state.count += number.add;
    },
    decrement(state) {
      state.count--;
    },
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
    // increment(context) {
    //   context.commit("increment");
    // }
    increment({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    incrementNumber({ commit }, add) {
      setTimeout(() => {
        commit({
          type: "incrementNumber",
          add: add.add
        });
      }, 1000);
    },
    actionsA({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment');
          resolve();
        }, 1000);
      })
    },
    // actionB({ dispatch, commit }) {
    //   return dispatch('actionsA').then(res=>{
    //     setTimeout(() => {
    //       commit({
    //         type: "incrementNumber",
    //         add: 10
    //       });
    //       res;
    //     }, 1000);
    //   })
    // }
    async actionB({ dispatch, commit }) {
      await dispatch('actionsA')
      setTimeout(() => {
        commit({
          type: "incrementNumber",
          add: 10
        });
      }, 1000);
    }
  },
  modules: {
    hello : hello,
    hello2 : hello2
  }
})
