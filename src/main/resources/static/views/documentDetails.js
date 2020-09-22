//    private int id;
//
//    private int page_number;
//    private String text;
//    private String name;
//    private String image_original;
//    private String image_processed;
//    private String image_boxes;
//    private String creation_date;
//    private String uploader;
//    private int folder;


export default {
    components: {




    },
    template: `
    <div class="document-details">
        <div class="document-info">
        <h2>name: {{document.name}}</h2>
        <p>id: {{document.id}}</p>
        <p>Uploader: {{document.uploader}}</p>
        <p>Creation date: {{document.creation_date}}</p>
        <p>page number: {{document.page_number}}</p>
        <p>Parent folder id: {{document.folder}}</p>
        </div>

        <div class="document-content"
        <img class="original-image" :src="document.image_original" alt="Original image" />
        <p class="output-text">Output Text: {{document.text}}</p>
        </div>
    </div>
    `,
    data() {
        return {



            document: {


                id: '',
                page_number: '',
                text:'',
                name: '',
                original_image:'',
                creation_date: '',
                uploader: '',
                folder:'',



            }
        }
    },

async created() {



    // all dynamic params

    let document = await fetch('/rest/documents/' + this.$route.params.id)
    document = await document.json()

   this.document = document

 },


}