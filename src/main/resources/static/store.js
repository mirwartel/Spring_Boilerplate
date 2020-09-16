import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

    folders: [],

  },
  mutations: {


            setFolders(state, folders) {
              state.folders = folders
          },
          appendAuction (state, folders) {
              state.folders.push(folder)
          },
  }
})

export default store