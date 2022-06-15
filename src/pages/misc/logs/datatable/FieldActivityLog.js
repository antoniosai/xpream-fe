export default [
    {
        label: 'Date Time',
        field: 'created_at',
        hidden: false,
        filterable: true,
        sortable: true,
        width: '200px',
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'User',
        field: 'usertype',
        hidden: false,
        filterable: true,
        sortable: true,
        width: '170px',
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'Description',
        field: 'description',
        hidden: false,
        filterable: true,
        sortable: true,
        width: '100px',
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'IP Address',
        field: 'ip_address',
        hidden: false,
        filterable: false,
        sortable: false,
        width: '120px',
        filterOptions: {
            enabled: false,
            placeholder: "",
            trigger: 'enter',
        }
    }, 
    {
        
        label: 'MAC Address',
        field: 'mac_address',
        hidden: false,
        filterable: false,
        sortable: false,
        width: '100px',
        filterOptions: {
            enabled: false,
            placeholder: "",
            trigger: 'enter',
        }
    },  
    {
        
        label: 'Browser',
        field: 'browser',
        hidden: false,
        filterable: false,
        sortable: false,
        width: '120px',
        filterOptions: {
            enabled: false,
            placeholder: "",
            trigger: 'enter',
        }
    },        

]