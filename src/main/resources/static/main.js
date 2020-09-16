import Vue from './libs/vue.esm.browser.js'
import { store } from './store.js'
import router from './router.js'
import app from './app.js'

new Vue({
  store,
  router,
  render: h => h(app)
}).$mount('#app')


async function getAllFolders() {
  let folders = await fetch('/rest/folders')
  folders = await folders.json()
  console.log(folders)
}

async function getfolderById(id) {
  let folder = await fetch('/rest/folders' + id)
  folder = await folder.json()
  console.log(folder)
}
