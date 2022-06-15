export default [
    {
        
        label: 'Part Number',
        field: 'part_number',
        hidden: false,
        filterable: true,
        sortable: true,
        width: "200px",
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'QTY',
        field: 'qty',
        hidden: false,
        filterable: true,
        sortable: true,
        width: "80px",
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
/*    {
        
        label: 'Type',
        field: 'type',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },*/
    {
        
        label: 'Location',
        field: 'id_location',
        hidden: true,
    },    
    {
        
        label: 'Location',
        field: 'location_name',
        width: "200px",
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
        
        label: 'Attachment',
        field: 'url_attachment',
        hidden: false,
        filterable: true,
        sortable: true,
        width: "350px",
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'Min',
        field: 'min',
        hidden: false,
        filterable: true,
        sortable: true,
        width: "80px",
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'Max',
        field: 'max',
        hidden: false,
        filterable: true,
        sortable: true,
        width: "80px",
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'Batch',
        field: 'batch',
        hidden: false,
        width: "100px",
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        
        label: 'Expired',
        field: 'expired',
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
        
        label: 'action',
        field: 'action',
    },        
    {
        label: 'ID',
        field: 'id',
        hidden: true,
        filterable: false,
        sortable: false,
        filterOptions: {
            enabled: false,
            placeholder: "",
            trigger: 'enter',
        }      
    },   

]