

export default {
    props: [
        'document'
    ],
    template: `
        <li
            @click.self="openFolder(document.id)"
            class="document-card">
                    ID: {{ document.id }} <br>
                    Name: {{ document.name }} <br>
                    Page: {{ document.page_number }} <br/>

        </li>
    `,

    methods: {
        openFolder(id) {
            this.$router.push('/document/' + id)
        }
    },


}



