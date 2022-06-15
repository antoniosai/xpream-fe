export default [
    {
        label: 'Nopeg',
        field: 'nopeg',
        filterable: true,
        sortable: true,
        width: '90px',
        filterOptions: {
            enabled: true,
            trigger: 'keyup',
            placeholder: "",
        }
    },
    {
        label: 'Nama',
        field: 'nama',
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'keyup',
            placeholder: "",
        }
    },
    {
        label: 'Jabatan',
        field: 'jabatan',
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'keyup',
            placeholder: "",
        }
    },
    {
        label: 'Unit',
        field: 'unit',
        filterable: true,
        sortable: true,
        width: '100px',
        filterOptions: {
            enabled: true,
            trigger: 'keyup',
            placeholder: "",
        }
    },
    {
        label: 'Email',
        field: 'email',
        filterable: false,
        sortable: false,
        filterOptions: {
            enabled: false,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Phone',
        field: 'phone',
        filterable: false,
        sortable: false,
        filterOptions: {
            enabled: false,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Whatsapp',
        field: 'whatsapp',
        filterable: false,
        sortable: false,
        tdClass: 'centerize',
    },
    
]