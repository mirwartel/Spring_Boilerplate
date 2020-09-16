import userInput from './components/userInput.js'
import todoList from './components/todoList.js'

export default {
  components: {
    userInput,
    todoList
  },
  template: `
    <div id="app">
      <!-- <h1 v-show="showHeader">Hello Vue!</h1>
      <h1 v-else>IF ELSE</h1>
      <h2>{{ message }}</h2>
      <button @click="toggleHeader">{{ buttonText }}</button> -->

      <userInput v-if="showHeader"></userInput>

      <todoList />
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