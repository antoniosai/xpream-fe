export default [
    {
        label: 'Nopeg',
        field: 'personnel_number',          
        filterable: true,
        sortable: true,
        hidden: false,
        width: "100px",
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
         }
    },
    {
        label: 'Full Name',
        field: 'full_name',          
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
        label: 'Division',
        field: 'division_code',          
        filterable: true,
        sortable: true,
        hidden: false,
        width: '80px',
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
         }
    },
    {
        label: 'TOEIC Score',
        field: 'final_grade',          
        filterable: true,
        sortable: true,
        hidden: false,
        width: '120px',
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
         }
    },
    {
        label: 'Start Date',
        field: 'start_date',          
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
        label: 'End Date',
        field: 'end_date',          
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
];