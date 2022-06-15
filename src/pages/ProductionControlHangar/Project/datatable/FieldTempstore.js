export default [
    {
        
        label: 'In',
        field: 't_inout',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "All",
            trigger: 'enter',
            filterDropdownItems: ['IN','OUT']
        }
    },
    {
        
        label: 'Out',
        field: 't_outin',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "All",
            trigger: 'enter',
            filterDropdownItems: ['OUT','RWS','']
        }
    },
    {
        label: 'A/C Reg',
        field: 'r_acreg',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },                
    {
        label: 'Part Number',
        field: 't_pn',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        label: 'Part Desc',
        field: 'MAKTX',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        label: 'Location',
        field: 't_location',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        label: 'Received By',
        field: 't_empid',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },        
    {
        label: 'TO Number',
        field: 't_to',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },      
    {
        label: 'Batch Number',
        field: 't_batch',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        label: 'Order Number',
        field: 't_aufnr',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        label: 'Rev Number',
        field: 't_revnr',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },   
    {
        label: 'Sys Status',
        field: 'o_systatus',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },         
    {
        label: 'Remark',
        field: 't_rmk',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },    
    {
        label: 'Qty',
        field: 't_qty',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    }, 
    {
        label: 'Tag',
        field: 't_tag',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },            
    {
        label: 'Date In',
        field: 't_timestamp',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "Date In",
        }
    }, 
    {
        label: 'Date Out',
        field: 't_dateout',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "Date Out",
        }
    },  
    {
        
        label: 'MRM update',
        field: 'mrm_isupdated',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
            filterDropdownItems: [
                { value: '1', text: 'Updated' },
                { value: null, text: 'Not updated' }
            ],
        }
    },  
    {
        label: 'Action',
        field: 'action',
        hidden: false,
    },
    {
        
        label: 'Last Modified By',
        field: 't_user',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    }, 
    {
        label: 'ID',
        field: 'track_id',
        hidden: true,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }      
    },   

]