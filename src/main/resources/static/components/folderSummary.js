

export default {
    props: [
        'folder'
    ],
    template: `
        <li
            @click.self="openFolder(folder.id)"
            class="folder-card">
                    Name: {{folder.name}} <br>
                    ID: {{folder.id}} <br>
                   
        </li>
    `,
    computed: {
        folders() {
            return this.$store.state.folders
        }
    },
    methods: {
        openFolder(id) {
            this.$router.push('/folders/' + id)
        }
    },




}