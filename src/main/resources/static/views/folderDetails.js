

export default {
    components: {
        
    },
    template: `
    <div class="folder-details">
        <div>
        <h2>{{folder.name}}</h2>
        <p>Uploader: {{folder.uploader}}</p>
        <p>Creation date: {{folder.creation_date}}</p>
 

        <p class="a-description">Description: {{folder.description}}</p>
        <newBid :folder="folder" v-if="this.$store.state.user && this.$store.state.user.id !== folder.seller"/>
       
        </div>
    </div>
    `,
    data() {
        return {


            
            folder: {
                
                name: '',
                uploaderer: '',

                creation_date: '',
                
              
            
            }
        }
    },

async created() {


        
    // all dynamic params
    console.log(this.$route.params)

    let folder = await fetch('/rest/folders/' + this.$route.params.id)
    folder = await folder.json()
  
   this.folder = folder

 },


}