
export default {
  components: {

  },
  template: `
    <div id="app">

    <router-link to="/">Home</router-link>
      <!-- <h1 v-show="showHeader">Hello Vue!</h1>
      <h1 v-else>IF ELSE</h1>
      <h2>{{ message }}</h2>
      <button @click="toggleHeader">{{ buttonText }}</button> -->
      <main>
          <router-view />
        </main>


    </div>
  `,
  data() {
    return {
      message: 'Some random text',
      showHeader: true
    }
  },
  computed: {
    buttonText() {
      return this.showHeader ? 'Hide header' : 'Show header'
    }
  },
  methods: {
    toggleHeader() {
      console.log('clicked toggle')
      this.showHeader = !this.showHeader
    }
  }
}