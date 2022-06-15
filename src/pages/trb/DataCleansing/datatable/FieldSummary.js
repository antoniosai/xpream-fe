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
        label: 'Total Project',
        field: 'TOTAL_PROJECT',
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
        label: 'Jobcard Performed',
        field: 'JOBCARD_PERFORMED',
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
        label: 'Total Defect',
        field: 'TOTAL_DEFECT',
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
        label: 'Count Defect P/N Requested',
        field: 'COUNT_DEFECT_PN_REQUESTED',
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