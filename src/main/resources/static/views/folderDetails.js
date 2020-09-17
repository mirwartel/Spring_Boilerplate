

export default {
    components: {
        
    },
    template: `
    <div class="folder-details">
        <div>
        <h2>{{folder.name}}</h2>
        <p>Uploader: {{folder.uploaderUsername}}</p>
        <p>Creation date: {{folder.creation_date}}</p>
 

       
        </div>
    </div>
    `,
    data() {
        return {


            
            folder: {
                
                name: '',
                uploader: '',

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