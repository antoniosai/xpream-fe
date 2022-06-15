export default [
    {
        label: 'DRAFT ID',
        field: 'ID',
        filterable: true,
        sortable: true,
        hidden: false,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",

        }
    },    
    {
        label: 'Draft Name',
        field: 'DRAFT_NAME',         
        filterable: true,
        sortable: true,
        hidden: false,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",

        }
    },
    {
        label: 'Author',
        field: 'USER_NAME',
        filterable: true,
        sortable: true,
        hidden: false,
        width: '200px',
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Progress',
        field: 'PROGRESS',
        filterable: false,
        sortable: true,
        hidden: false,
        width: '100px',
        filterOptions: {
            enabled: false,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Created At',
        field: 'CREATED_AT',
        filterable: true,
        sortable: true,
        hidden: false,
        width: '200px',
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Updated At',
        field: 'UPDATED_AT',
        filterable: true,
        sortable: true,
        hidden: false,
        width: '200px',
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },     
    {
        label: 'Action',
        field: 'ACTION',
        hidden: false,
        sortable: false,
        width: '80px',
    },  
]