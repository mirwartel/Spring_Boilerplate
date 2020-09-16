export default {
    props: [
        'folder'
    ],
    template: `
        <li
            @click="openFolder(folder.id)"
            class="folder-card">
                    Name: {{ folder.name }} <br>

                    Uploader: {{ folder.uploader }} <br/>

                   
        </li>
    `,
    computed: {
        folders() {
            return this.$store.state.folders
        }
    },
    methods: {
        openFolder(id) {
            this.$router.push('/folder/' + id)
        }
    }
}