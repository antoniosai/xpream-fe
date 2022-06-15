export default [
    {
        
        label: 'In/Out',
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
        field: 'location_name',
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
        label: 'Date',
        field: 't_timestamp',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "Date",
        }
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