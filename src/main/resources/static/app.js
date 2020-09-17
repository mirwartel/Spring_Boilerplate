import navbarLoginComponent from './components/navbarLoginComponent.js'
import navbarLogoutComponent from './components/navbarLogoutComponent.js'


export default {
  components: {
        navbarLoginComponent,
        navbarLogoutComponent

  },
  template: `
    <div id="app">

    <nav class="navbar-top">
    <router-link to="/">Home</router-link>

     <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
     <router-link v-if="isLoggedIn" to="/createNewFolder" >Create New Folder</router-link>
               <navbarLogoutComponent v-if="isLoggedIn" />
               <navbarLoginComponent  v-else />
     </nav>
      <main>
          <router-view />
        </main>


    </div>
  `,
    async created() {
        let user = await fetch('/auth/whoami')

        try {
          user = await user.json()
          this.$store.commit('setUser', user)
        } catch {

        }
    },
  computed: {
        isLoggedIn() {
            return this.$store.state.user
        }
  }

 }
