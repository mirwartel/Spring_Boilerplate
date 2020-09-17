import Vue from './libs/vue.esm.browser.js'
import Vuex from './libs/vuex.esm.browser.js'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

    folders: [],
    user: null,

  },
  mutations: {

        setUser(state, user) {
            state.user = user
        },

            setFolders(state, folders) {
              state.folders = folders
          },
          appendFolders (state, folders) {
              state.folders.push(folders)
          },
  }
})

export default store