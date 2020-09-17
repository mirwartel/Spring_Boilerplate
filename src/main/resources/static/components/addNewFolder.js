

export default {
    template: `
        <form @submit.prevent = "createNewFolder" class = "folderForm">
              <input required v-model = "name" type = "text"
              placeholder = "Enter folder name">


            
            
            <button>Add Folder</button>
            <p>{{ confirmationMessage }}</p>
            <p>{{valid}}</p>
        
        </form>

    `,
    data() {
        return {

            name: '',
            uploader: '',
            creationdate:' ',

            confirmationMessage: '',
            valid: ""
        }
    },
    methods: {





        async createNewFolder() {
            let nowDate = new Date()
            

            let folder = {
                uploader: this.$store.state.user.id,
                name: this.name,
                creation_date: nowDate,

            }

            let result = await fetch('/rest/folders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(folder)
            })



    
            result = await result.json()
            this.$store.commit('appendFolders', result)
            this.confirmationMessage = this.name + ' has been added as a new fodler.'

              //clearing the fields

              


        


 



        this.name = ''
        this.creation_date = ''
        this.uploader = ''
        this.valid = ""


    }
}
}