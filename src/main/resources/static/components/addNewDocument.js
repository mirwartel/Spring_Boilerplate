
/// need to prevent multipart file request
//need to prevent usser is null

export default {
    props: [
        'folder'
    ],
    template: `
        <form @submit.prevent = "createNewDocument" class = "documentForm">
               <div>
               <p>Parent Folder Name: {{folder.name}}</p>
               <p>Parent Folder id: {{folder.id}}</p>
                <input name="name" placeholder="document name" v-model="name" required />
                            <label for="files">File to upload:</label>
                            <input type="file" name="files" accept=".png,.jpg,.jpeg,.gif,.bmp,.jfif" multiple required @change="filesChange($event.target.files)" />
               </div>




            <button>Add Document</button>
        </form>

    `,



    data() {
        return {


     page_number:'',
     name:'',
     image_original:'',
     creation_date:'',
     uploader:'',
     //containingFolder:'',
     imageFiles: null
      }
    },
    methods: {

            create_UUID(){

                var dt = new Date().getTime();

                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {

                    var r = (dt + Math.random()*16)%16 | 0;

                    dt = Math.floor(dt/16);

                    return (c=='x' ? r :(r&0x3|0x8)).toString(16);

                });

                return uuid;

              },



          async filesChange(fileList) {
            if (!fileList.length) return;

            // handle file changes
            const formData = new FormData();

            // reset images array on file change
            this.image_original = '';

            // append the files to FormData
            Array.from(Array(fileList.length).keys())
              .map(x => {

                // create a new unique filename
                const uuid = this.create_UUID()
                // with regex
                // const fileExt = fileList[x].name.replace(/[\w-]*/, '')

                let fileExt = fileList[x].name
                fileExt = fileExt.slice(fileExt.lastIndexOf('.'))
                const filename = uuid + fileExt

                // save image url in frontend array
                this.image_original = String('/uploads/' + filename)
                formData.append("files", fileList[x], filename);
              });

            // store formData to be sent later
            this.imageFiles = formData
          },

        async createNewDocument() {
            let nowDate = new Date()


            let document = {
                name: this.name,
                uploader: this.$store.state.user.id,
                creation_date: nowDate,
                image_original: this.image_original,
                folder: this.folder.id,
                page_number: this.folder.documents.length + 1,

            }
                  let response = await fetch('/rest/documents', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(document)
                  })

                  try {
                    response = await response.json()

                    // if we created an entity we then
                    // send the image files
                    await fetch('/rest/upload-files', {
                      method: 'POST',
                      body: this.imageFiles
                    });

                    // clear variables
                    this.imageFiles = null
                    this.image_original = ''
                  }
                  catch {
                    console.warn('Could not create entity');
                  }
                }
              }
            }




