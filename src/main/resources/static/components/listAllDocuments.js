import documentSummary from './documentSummary.js'

export default {
    components: {
        documentSummary
    },
    props: [
        'documents'
    ],

   
   template: ` 
   <div>
    <ul>
        <documentSummary v-for="document of documents" :key="document.id" :document="document"/>
     </ul>
     </div>
    `,
    methods: {

    }
}
