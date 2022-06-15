export default [
    {
        label: 'ID',
        field: 'ID',
        filterable: false,
        sortable: false,
        hidden: true,
        filterOptions: {
            enabled: false,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        label: 'Workcenter',
        field: 'WCT',
        filterable: true,
        sortable: true,
        width: '200px',
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Description',
        field: 'DESCRIPTION',
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Created At',
        field: 'CREATED_AT',
        filterable: false,
        sortable: true,
        width: '200px',
        filterOptions: {
            enabled: false,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Updated At',
        field: 'UPDATED_AT',
        filterable: false,
        sortable: true,
        width: '200px',
        filterOptions: {
            enabled: false,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Action',
        field: 'ACTION',
        filterable: false,
        sortable: false,
        width: '100px',
        filterOptions: {
            enabled: false,
            trigger: 'enter',
            placeholder: "",
        }
    },
]