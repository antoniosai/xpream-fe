export default [
    {
        label: 'AC Reg',
        field: 'ac_reg',
        thClass: 'cac_reg',
        tdClass: 'cac_reg',           
        filterable: true,
        sortable: true,
        hidden: false,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['DONE', 'OPEN', 'PROGRESS', 'INTERUPT', 'WAITING DEPLOYMENT', 'UNDER EVALUATION', 'DEFERRED', 'NEED RO', 'N/A']

        }
    },
    {
        label: 'Toggle',
        field: 'VISIBILITY',
        thClass: 'ctoggle',
        tdClass: 'ctoggle',        
        hidden: false,
        filterable: false,
        sortable: true,
        filterOptions: {
            enabled: false,
            placeholder: "",
        }
    },
    {
        label: 'Priority',
        field: 'URGENCY',
        thClass: 'cprior',
        tdClass: 'cprior',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "filter",
            filterDropdownItems: [
                { value: '0', text: 'urgent' }
            ],               
        }
    },    
    {
        label: 'Material Fullfilment Status',
        field: 'MATFULSTAT',
        thClass: 'cmatfulstat',
        tdClass: 'cmatfulstat',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "filter",
            filterDropdownItems: [
                'Waiting Purchase Order',
                'Waiting Shipment from Vendor',
                'Waiting Customer Supply',
                'Shipment / Customs Process', 
                'Progress Inspect in Receiving Area',
                'Available at GMF Central Store',
                'Waiting for Distribution',
                'Available at Hangar Local Store',
                'Delivered to Production',
                'Waiting Customer Approval',
                'No Source',
                'Waiting Send to Shop',
                'Progress Repair in Shop',
                'Waiting Payment',
                'Work Done',
                'Finding at Receiving Area',
                'Shortage',
                'Undefined'
            ]            
        }
    },    
    {
        label: 'Part Number',
        field: 'MATNR',
        thClass: 'cmatnr',
        tdClass: 'cmatnr',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Alternate Part Number',
        field: 'ALTERNATEPN',
        thClass: 'calternate',
        tdClass: 'calternate',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Material Description',
        field: 'MAKTX',
        thClass: 'cmaktx',
        tdClass: 'cmaktx',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    /*{
        label: 'Batch',
        field: 'BATCH',
        thClass: 'cbatch',
        tdClass: 'cbatch',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },  
    {
        label: 'Cert',
        field: 'ATTACHMENT',
        thClass: 'cattach',
        tdClass: 'cattach',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },*/
    {
        label: 'Type',
        field: 'MTART',
        thClass: 'cmtart',
        tdClass: 'cmtart',          
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'GADC Req',
        field: 'GADCREQ',
        thClass: 'ctoggle',
        tdClass: 'ctoggle',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['y', 'n']
        }
    },  
        
    {
        label: 'Order',
        field: 'AUFNR',
        thClass: 'caufnr',
        tdClass: 'caufnr',  
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'OType',
        field: 'ORDER_TYPE',
        thClass: 'cotype',
        tdClass: 'cotype',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'OStatus',
        field: 'ORDER_STATUS',
        thClass: 'costat',
        tdClass: 'costat',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'OSeq',
        field: 'ORDER_SEQ',
        thClass: 'cotype',
        tdClass: 'cotype',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Req Date',
        field: 'REQUEST_DATE',
        thClass: 'creqdate',
        tdClass: 'creqdate',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "Filter request date",
        }
    },
    {
        label: 'Mat Supply',
        field: 'MATERIAL_SUPPLY',
        thClass: 'cmatsup',
        tdClass: 'cmatsup',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'SLoc',
        field: 'LGORT',
        thClass: 'cwct',
        tdClass: 'cwct',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    }, 
    {
        label: 'Wctr',
        field: 'ARBPL',
        thClass: 'cwct',
        tdClass: 'cwct',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    }, 
    {
        label: 'Flag',
        field: 'INACT',
        thClass: 'cflag',
        tdClass: 'cflag',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['X', '-']
        }
    },         
    /*{
        label: 'Qty',
        field: 'BDMNG',
        thClass: 'cbdmng',
        tdClass: 'cbdmng',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },*/
    {
        label: 'QTY Required',
        field: 'BDMNG',
        thClass: 'cqtyow',
        tdClass: 'cqtyow',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },    
    {
        label: 'Remaining QTY',
        field: 'QTYOWING',
        thClass: 'cqtyow',
        tdClass: 'cqtyow',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    }, 
    {
        label: 'Qty All',
        field: 'TOTAL_QTY_REQ',
        thClass: 'cqtyall',
        tdClass: 'cqtyall',        
        hidden: false,
        filterable: false,
        sortable: true,
    },
    {
        label: 'UOM',
        field: 'MEINS',
        thClass: 'cmeins',
        tdClass: 'cmeins',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Additional Status',
        field: 'ADDITIONAL_STATUS',
        thClass: 'caddstat',
        tdClass: 'caddstat',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "filter",
            filterDropdownItems: [
                { value: '1', text: 'Waiting Customer Approval' },  
                /*{ value: '2', text: 'WAITING PN CONFIRMATION' },*/
                { value: '3', text: 'No Source' },
                { value: '4', text: 'Waiting Send to Shop' },
                { value: '5', text: 'Waiting Payment' },
                { value: '6', text: 'Work Done' },
                /*{ value: '7', text: 'SHORTAGE' },*/
                { value: '8', text: 'Finding at Receiving Area' },
                /*{ value: '9', text: 'DLVR PARTIAL' },*/
                { value: '18', text: 'Waiting Purchase Order' },
                { value: '19', text: 'Progress Repair in Shop' }
            ]            
        }
    },
    {
        label: 'PO Net Value',
        field: 'NETVAL',
        thClass: 'caddstat',
        tdClass: 'caddstat',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Vendor Name',
        field: 'VENDOR',
        thClass: 'caddstat',
        tdClass: 'caddstat',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    }, 
    {
        label: 'Curr',
        field: 'CURR',
        thClass: 'cmeins',
        tdClass: 'cmeins',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },  
    {
        label: 'Payment Date',
        field: 'PAYMENT_STATUS',
        thClass: 'cdatepo',
        tdClass: 'cdatepo',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },         
    {
        label: 'Free Text & Notes',
        field: 'REMARKS',
        thClass: 'crmk',
        tdClass: 'crmk',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Shop Remark',
        field: 'SHOP_REMARKS',
        thClass: 'csrmk',
        tdClass: 'csrmk',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Part Location',
        field: 'PART_LOCATION',
        thClass: 'cpartloc',
        tdClass: 'cpartloc',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Qty Avail',
        field: 'QTY_AVAILABLE',
        thClass: 'cqtyav',
        tdClass: 'cqtyav',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Shortage',
        field: 'SHORTAGE',
        thClass: 'cshort',
        tdClass: 'cshort',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'UIC',
        field: 'UIC',
        thClass: 'cuic',
        tdClass: 'cuic',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Purchase Order',
        field: 'PURCHASE_ORDER',
        thClass: 'cpo',
        tdClass: 'cpo',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Date of PO',
        field: 'DATEPO',
        thClass: 'cdatepo',
        tdClass: 'cdatepo',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "Filter date po",
        }
    },   
    {
        label: 'AWB Number',
        field: 'AWB_NUMBER',
        thClass: 'cawb',
        tdClass: 'cawb',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'ETA',
        field: 'ETA',
        thClass: 'ceta',
        tdClass: 'ceta',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "Filter ETA date",
        }
    },
    {
        label: 'SP IN',
        field: 'SPIN',
        thClass: 'cspin',
        tdClass: 'cspin',        
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Date of Provision',
        field: 'DATEPRO',
        thClass: 'cdatepro',
        tdClass: 'cdatepro',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "Filter date of provision",
        }
    },
    /*{
        label: 'STO Number',
        field: 'STO_NUMBER',
        thClass: 'csto',
        tdClass: 'csto',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },*/  
    {
        label: 'DN Number',
        field: 'DN',
        thClass: 'csto',
        tdClass: 'csto',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'TO Number',
        field: 'TO',
        thClass: 'csto',
        tdClass: 'csto',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },        
    {
        label: 'Date at GAH4 1000',
        field: 'DATEATGAH4',
        thClass: 'cdateh4',
        tdClass: 'cdateh4',         
        hidden: true,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "Filter deta at gah4 1000",
        }
    },
    {
        label: 'Date PRE-LOAD',
        field: 'DATEPL',
        thClass: 'cdatepl',
        tdClass: 'cdatepl',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "Filter date preload",
        }
    },
    {
        label: 'Received By',
        field: 'RECEIVED_BY',
        thClass: 'crecby',
        tdClass: 'crecby',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Date Received (By Prod.)',
        field: 'DATEREC',
        thClass: 'cdaterec',
        tdClass: 'cdaterec',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "Filter date received by prod",
        }
    },
    {
        label: 'QTY Received',
        field: 'QTYDEL',
        thClass: 'cqtydel',
        tdClass: 'cqtydel',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'QTY Installed',
        field: 'QTYINS',
        thClass: 'cqtyins',
        tdClass: 'cqtyins',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Excess Mat. Unused',
        field: 'EXMATUN',
        thClass: 'cexmatun',
        tdClass: 'cexmatun',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'RWS',
        field: 'RWS',
        thClass: 'crws',
        tdClass: 'crws',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },
    {
        label: 'Withdrawn',
        field: 'ENMNG',
        thClass: 'cenmng',
        tdClass: 'cenmng',         
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    }, 
    {
        label: 'Action',
        field: 'ACTION',
        thClass: 'mrmact',
        tdClass: 'mrmact',
        hidden: false,
    },
    {
        label: 'is_add',
        field: 'STORE_STATUS',
        hidden: true,
    }, 
    {
        label: 'ID',
        field: 'ID',
        filterable: true,
        sortable: true,
        hidden: true,
    },       

]