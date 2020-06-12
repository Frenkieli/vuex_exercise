import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id:1, text: 'todo1', done: true},
      { id:2, text: 'todo2', done: false},
    ] 
  },
  // mutations 應該只能是同步函式,如果在內變調用異步函式會導致狀態難以被追蹤
  mutations: {
    increment(state){
      state.count++;
    },
    incrementNumber(state, number){
      state.count += number.add;
    },
    decrement(state){
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
  },
  modules: {
  }
})
