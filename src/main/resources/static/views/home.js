import listAllFolders from '../components/listAllFolders.js'

export default {
    components: {
        listAllFolders
    },
    
    template: `
        <div class="main-listing">
            <listAllFolders />

        </div>
    `,

    async created() {

        let folders = await fetch('/rest/folders')
        folders = await folders.json()


       this.$store.commit('setFolders', folders)
      }
}