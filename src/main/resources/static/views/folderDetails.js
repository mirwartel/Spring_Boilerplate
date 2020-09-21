import listAllDocuments from '../components/listAllDocuments.js'
import addNewDocument from '../components/addNewDocument.js'

export default {
    components: {
    listAllDocuments,
    addNewDocument,
        
    },
    template: `
    <div class="folder-details">
        <div>
        <h2>{{folder.name}}</h2>
        <p>Uploader: {{folder.uploaderUsername}}</p>
        <p>Creation date: {{folder.creation_date}}</p>
        <listAllDocuments :documents='folder.documents'/>
       
        </div>
        <addNewDocument :folder='folder'/>
    </div>
    `,
    data() {
        return {


            
            folder: {
                
                name: '',
                uploader: '',

                creation_date: '',

                documents: [],
                
              
            
            }
        }
    },

async created() {


        
    // all dynamic params

    console.log(this.folder.documents)


    let folder = await fetch('/rest/folders/' + this.$route.params.id)
    folder = await folder.json()
  
   this.folder = folder

 },


}