import folderSummary from './folderSummary.js'

export default {
    components: {
        folderSummary
    },
    data(){
     return {
         search:"",
     }

    },
   
   template: ` 
   <div>
   <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search folder name.."/>
        <label>Search folder name:</label>
    </div>
    <ul>
        <folderSummary v-for="folder of folders" :key="folder.id" :folder="folder"/>
     </ul>
     </div>
    `,

    computed: {
        folders() {
            return this.$store.state.folders.filter((folder) => {
                return folder.name.toLowerCase().match(this.search.toLowerCase());
            })
        }

        
    },
    methods: {

    }
}
