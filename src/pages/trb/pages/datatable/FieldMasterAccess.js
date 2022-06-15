export default [
    {
        label: 'ID',
        field: 'ID',
        filterable: true,
        hidden: true,
    },
    {
        label: 'Access',
        field: 'ACCESS',
        filterable: true,
        width: '100px',
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
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'MENR',
        field: 'MEN',
        filterable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'MENI',
        field: 'MEN_INSTALL',
        filterable: true,
        width: '100px',
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'MHRSR',
        field: 'MH',
        filterable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'MHRSI',
        field: 'MH_INSTALL',
        filterable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'A/C Type',
        field: 'AIRCRAFT',
        filterable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Action',
        field: 'ACTION',
        filterable: false,
        width: '100px',
        sortable: false,
    },
  ]