export default [
    {
        
        label: 'Status',
        field: 't_inout',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "All",
            trigger: 'enter',
            filterDropdownItems: ['IN']
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
            filterDropdownItems: ['OUT','RWS','-'],
            filterValue: ''
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