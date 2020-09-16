import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      'get up', 
      'eat', 
      'code'
    ]
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    }
  }
})