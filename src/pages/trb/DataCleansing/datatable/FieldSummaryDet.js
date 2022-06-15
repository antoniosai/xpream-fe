export default [
    {
        label: 'Reference No',
        field: 'XREF',         
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
        label: 'MDR Material',
        field: 'MDR_MATERIAL',
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
        label: 'MDR Mat Prob',
        field: 'MDR_MAT_PROB',
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
        label: 'ID',
        field: 'ID',
        hidden: true,
    }, 
]