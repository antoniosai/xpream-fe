export default [
    {
        label: 'AC Reg',
        field: 'ac_reg',
        thClass: 'cac_reg',
        tdClass: 'cac_reg',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }
    },
    {
        label: 'Status',
        field: 'STATUS',
        thClass: 'cstatus',
        tdClass: 'cstatus',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['DONE', 'OPEN', 'PROGRESS', 'INTERUPT', 'WAITING DEPLOYMENT', 'UNDER EVALUATION', 'DEFERRED']
        }
    },
    {
        label: 'System Status',
        field: 'SYSTEM_STATUS',
        thClass: 'csysstat',
        tdClass: 'csysstat',
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['DONE', 'OPEN']
        }
    },       
    {
        label: 'MRM Status',
        field: 'MRM_STATUS',
        thClass: 'cmrmstat',
        tdClass: 'cmrmstat',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['COMPLETE', 'INCOMPLETE']
        }
    },
    {
        label: 'Seq',
        field: 'SEQ',
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
        }
    },
    {
        label: 'Seq GA',
        field: 'SEQ_SWIFT',
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
        }
    },
    {
        label: 'Order No',
        field: 'AUFNR',
        thClass: 'caufnr',
        tdClass: 'caufnr',           
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
        label: 'Description',
        field: 'DESCRIPTION',
        thClass: 'cdesc',
        tdClass: 'cdesc',           
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
        label: 'Task Code',
        field: 'TASK_CODE',
        thClass: 'ctask',
        tdClass: 'ctask',          
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
        label: 'Zone / Area',
        field: 'ZONE_AREA',
        thClass: 'czone',
        tdClass: 'czone',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['Cockpit Area', 'Cabin Area', 'Wing & Flight Control Area', 'Engines & Pylons Area', 'Landing Gears Area', 'Cargo Area', 'APU & Empennage Area', 'Fuselage Area']
        }
    },
    {
        label: 'Phase',
        field: 'PHASE',
        thClass: 'cphas',
        tdClass: 'cphas',        
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['Pre-Inputs', 'Removal', 'Cleaning', 'Inspection & Check', 'Rectification', 'Installation', 'Lubrication', 'OPC', 'Final']
            
        }
    },
    {
        label: 'Skill',
        field: 'SKILL',
        thClass: 'cskill',
        tdClass: 'cskill',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "use prefix '#' for selected skill",
        }
    },    
    {
        label: 'Pmhrs',
        field: 'PMHRS',
        thClass: 'cpmhrs',
        tdClass: 'cpmhrs',           
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
        label: 'Act Mhrs',
        field: 'ACTMHRS',
        thClass: 'cactmhrs',
        tdClass: 'cactmhrs',           
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
        label: 'Jobcard Track',
        field: 'TRACK_STATUS',
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
        label: 'Jobcard Track (Shop)',
        field: 'TRACK_STATUS_SHOP',
        thClass: 'ctrackstatshop',
        tdClass: 'ctrackstatshop',          
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
        label: 'Date Done',
        field: 'DATE_DONE',
        thClass: 'cdatedone',
        tdClass: 'cdatedone',        
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
        label: 'Review Pos',
        field: 'REVIEW_POSITION',
        thClass: 'crevpos',
        tdClass: 'crevpos',           
        filterable: true,
        sortable: true,
        hidden: false,
        isShow: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: [
                'Plan Board',
                'Review at Line',
                'PPC',
                'Finding Box at Line',
                'Transit to Recording',
                'Tech Rep',
                'FLC',
                'Painting Shop',
                'Component Shop',
                'Sealant',
                'NDT',
                'Structure Shop',
                'Cabin Seat Shop',
                'Cabin Painting Shop',
                'Cabin Laundry Shop',
                'Cabin Sewing Shop',
                'Cabin Monument Shop',
                'Cabin Monument Shop H4',
                'Cabin Hangar',
                'Structure Hangar',
                'Landing Gear Shop', 
                'Engine Shop',
                'Cleaning', 
                'Review at Recording', 
                'Finding at Recording',
                'Ready to Scan',
                'Scanned',
                'Ordner'
            ]
        }
    },   
    {
        label: 'Remark',
        field: 'REMARK',
        thClass: 'crmk',
        tdClass: 'crmk',           
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
        label: 'Shop Remark',
        field: 'SHOP_REMARK',
        thClass: 'csrmk',
        tdClass: 'csrmk',           
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
        label: 'Customer Ref',
        field: 'CUST_REF',
        thClass: 'custref',
        tdClass: 'custref',           
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
        label: 'Customer Note',
        field: 'CUST_RMK',
        thClass: 'custrmk',
        tdClass: 'custrmk',           
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
        label: 'Skill Active',
        field: 'SKILL_ACTIVE',
        filterable: false,
        sortable: false,
        hidden: true,
        isShow: false,
        filterOptions: {
            enabled: false,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Material',
        field: 'MATERIAL',
        filterable: true,
        trigger: 'enter',
        sortable: false,
        hidden: true,
        isShow: false,
    },
    {
        label: 'LONGSYSSTAT',
        field: 'LONGSYSSTAT',
        filterable: true,
        trigger: 'enter',
        sortable: false,
        hidden: true,
        isShow: false,
    }, 
    {
        label: 'ID',
        field: 'ID',
        hidden: true,
    },  
]