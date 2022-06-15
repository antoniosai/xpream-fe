export default [
    {
        label: 'Revision No',
        field: 'REVNR',         
        filterable: true,
        sortable: true,
        hidden: false,
        width: "150px",
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",

        }
    },
    {
        label: 'Main Desc',
        field: 'REVTX',
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
        label: 'Main Type',
        field: 'MAIN_TYPE',
        filterable: true,
        sortable: true,
        hidden: false,
        width: "150px",
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
        width: "70px",
    }, 
    {
        label: 'Validated Date',
        field: 'UPDATED_AT',
        filterable: true,
        sortable: true,
        hidden: false,
        width: "200px",
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'ID',
        field: 'ID',
        hidden: true,
    }, 
]