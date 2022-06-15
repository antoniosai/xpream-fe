export default [
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
        field: 'AUART',
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
        label: 'Item',
        field: 'RSPOS',
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
        label: 'Delete Item',
        field: 'XLOEK',
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
        label: 'Alt',
        field: 'ALTERNATEPN',
        thClass: 'cqtyow',
        tdClass: 'cqtyow',         
        hidden: false
    },
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
        label: 'Special Stock',
        field: 'SOBKZ',
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
        label: '',
        field: 'WERKS',
        hidden: true
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
        label: 'Own Stock C310',
        field: 'LABST',
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
        label: 'Own Stock GADC C310',
        field: 'LABST_D',
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
        label: 'Picking Qty',
        field: 'QTYPK',
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
        label: 'Alt Stock C410',
        field: 'ALTSTOK_L',
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
        label: 'Alt Stock GADC C410',
        field: 'ALTSTOKGDC',
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
        label: 'Cons. Stock C510',
        field: 'CONSSTOK_L',
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
        label: 'Cons. Stock GADC C510',
        field: 'CONSSTOKGDC',
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
        label: 'Project Stock C700',
        field: 'PRLAB',
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
        label: 'Project Stock GADC C700',
        field: 'PRLAB_D',
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
        label: 'Pooling Stock C710',
        field: 'SLABS',
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
        label: 'Pooling Stock GADC C710',
        field: 'SLABS_D',
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
        label: 'Customer Stock C510',
        field: 'SDLAB',
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
        label: 'Customer Stock GADC C510',
        field: 'SDLAB_D',
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
        label: 'Tot Reserv',
        field: 'T_RESER',
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
        label: 'STO',
        field: 'EBELN_STO',
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
        label: 'STO Qty',
        field: 'MENGE_STO',
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
        label: 'Outbond Delivery',
        field: 'VBELN_O',
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
        label: 'Outbond Qty',
        field: 'LFIMG',
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
        label: 'TO GADC',
        field: 'TANUM',
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
        label: 'TO Confirmation',
        field: 'TANUM_C',
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
        label: 'PR Number',
        field: 'BANFN_NB',
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
        label: 'PR Qty',
        field: 'MENGE',
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
        label: 'Purchase Order',
        field: 'EBELN',
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
        label: 'PO Qty',
        field: 'MENGE_P',
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
        label: 'Inbound Delivery',
        field: 'VBELN',
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
        label: 'AWB Number',
        field: 'BOLNR',
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
        label: 'Actual GR Date',
        field: 'BUDAT',
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
        label: 'Unused Material',
        field: 'MENGE_UN',
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
        label: 'Status',
        field: 'STATUS',
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
        label: 'Qty All',
        field: 'TOTAL_QTY_REQ',
        thClass: 'costat',
        tdClass: 'costat',         
        hidden: false,
        filterable: false,
        sortable: true,
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
        label: 'Purchaser Remark',
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
        label: 'Toggle',
        field: 'VISIBILITY',
        thClass: 'cawb',
        tdClass: 'cawb',       
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
        thClass: 'cawb',
        tdClass: 'cawb',       
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
        label: 'Payment Status',
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
        label: 'Received By (Prod)',
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
        label: 'Date Received (Prod)',
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
    }
]