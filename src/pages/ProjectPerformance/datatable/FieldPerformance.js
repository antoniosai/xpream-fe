export default [
    {
        label: 'del',
        field: 'action',
        hidden: false,
        isShow: true,
        thClass: 'cdel',
        tdClass: 'cdel',         
    }, 
    {
        label: 'Revision',
        field: 'REVNR',
        thClass: 'crevnr',
        tdClass: 'crevnr',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
         }
    },
    {
        label: 'Type',
        field: 'ac_type',
        thClass: 'cactype',
        tdClass: 'cactype',
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'A/C Reg',
        field: 'ac_reg',
        thClass: 'cacreg',
        tdClass: 'cacreg',
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Maintenance Desc',
        field: 'main_type',
        thClass: 'cmaintype',
        tdClass: 'cmaintype',
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },      
    {
        label: 'Maint Type',
        field: 'rev_type',
        thClass: 'crevtyp',
        tdClass: 'crevtyp',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['Daily Check', 'Service Check', 'Weekly Check', 'A Check', 'C Check', 'D Check', 'SR Check', 'SR Painting']
        }
    },
    {
        label: 'Painting',
        field: 'is_painting',
        thClass: 'cseq',
        tdClass: 'cseq',        
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
            filterDropdownItems: [
                { value: 'y', text: 'yes' },
                { value: 'n', text: 'no' },
            ]
        }
    },
    {
        label: 'Customer',
        field: 'cust',
        thClass: 'ccust',
        tdClass: 'ccust',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Line',
        field: 'line_name',
        thClass: 'cline',
        tdClass: 'cline',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'PO',
        field: 'poname',
        thClass: 'cacc',
        tdClass: 'cacc',        
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
        }
    },
    {
        label: 'Plan In',
        field: 'planstart',
        thClass: 'cdate',
        tdClass: 'cdate',          
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Plan Out',
        field: 'planend',
        thClass: 'cdate',
        tdClass: 'cdate',         
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
        }
    },
    {
        label: 'Act In',
        field: 'actstart',
        thClass: 'cdate',
        tdClass: 'cdate',         
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
        }
    },
    {
        label: 'Act Out',
        field: 'actend',
        thClass: 'cdate',
        tdClass: 'cdate',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Cust Agreed',
        field: 'cust_agreed',
        thClass: 'cdate',
        tdClass: 'cdate',        
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",           
        }
    },
    {
        label: 'Month Out',
        field: 'endmonth',
        thClass: 'cmon',
        tdClass: 'cmon',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        }
    },    
    {
        label: 'Maint Status',
        field: 'status_new',
        thClass: 'cstat',
        tdClass: 'cstat',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Start Parking',
        field: 'startparking',
        thClass: 'cdate',
        tdClass: 'cdate',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'End Parking',
        field: 'endparking',
        thClass: 'cdate',
        tdClass: 'cdate',        
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Parking Day',
        field: 'parkingday',
        thClass: 'cpark',
        tdClass: 'cpark',           
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Plan TAT',
        field: 'planttat',
        thClass: 'cpark',
        tdClass: 'cpark',           
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Act TAT',
        field: 'acttat',
        thClass: 'cpark',
        tdClass: 'cpark',         
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Act TAT %',
        field: 'planacttat',
        thClass: 'cpark',
        tdClass: 'cpark',         
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },    
    {
        label: 'Agreed TAT',
        field: 'agreedtat',
        thClass: 'cpark',
        tdClass: 'cpark',           
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Agreed TAT %',
        field: 'agreedacttat',
        thClass: 'cpark',
        tdClass: 'cpark',           
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Delay',
        field: 'delay',
        thClass: 'cpark',
        tdClass: 'cpark',           
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },    
    {
        label: 'Reason of Delay',
        field: 'reason',
        thClass: 'ctrackstat',
        tdClass: 'ctrackstat',          
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Reason Category',
        field: 'reason_ctg',
        thClass: 'creason',
        tdClass: 'creason',       
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            placeholder: "Date done jc",
        }
    },
    {
        label: 'BA Delay',
        field: 'ba_delay',
        thClass: 'cbadelay',
        tdClass: 'cbadelay',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },   
    {
        label: 'Document',
        field: 'doc',
        thClass: 'creason',
        tdClass: 'creason',           
        filterable: true,
        sortable: false,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'WBS',
        field: 'wbs',
        thClass: 'cwbs',
        tdClass: 'cwbs',
        filterable: false,           
        sortable: false,           
        hidden: false,
        isShow: true,
    },
    {
        label: 'SO',
        field: 'so',
        thClass: 'cwbs',
        tdClass: 'cwbs',           
        filterable: false,   
        sortable: false,           
        hidden: false,
        isShow: true,
    },              
    {
        label: 'ID',
        field: 'ID',
        hidden: true,
        isShow: false,
    },  
]