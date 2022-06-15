export default [
    {
        label: 'STATUS',
        field: 'SUMMARYSTAT',
        thClass: 'matnr-gadc',
        tdClass: 'matnr-gadc',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['Actual Nil Stock','Part in Xdoc', 'DN Problem', 'Different Order', 'Need DN/TO', 'Open TO', 'Processed by GADC', 'Goods Issue', 'At Hangar Store 1000', 'Send to Hangar']
        }
    },
    {
        label: 'Part Number',
        field: 'MATNR',
        thClass: 'matnr-gadc',
        tdClass: 'matnr-gadc',
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
        label: 'Alternate',
        field: 'ALTERNATEPN',
        thClass: 'matnr-gadc',
        tdClass: 'matnr-gadc',
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
        thClass: 'maktx-gadc',
        tdClass: 'maktx-gadc',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
        }
    },
    {
        label: 'Type',
        field: 'MTART',
        thClass: 'mtart-gadc',
        tdClass: 'mtart-gadc',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
        }
    },   
    {
        label: 'Qty',
        field: 'BDMNG',
        thClass: 'bdmng-gadc',
        tdClass: 'bdmng-gadc',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
        }
    },
    {
        label: 'UoM',
        field: 'MEINS',
        thClass: 'meins-gadc',
        tdClass: 'meins-gadc',
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
        label: 'Location',
        field: 'PART_LOCATION',
        thClass: 'loc-gadc',
        tdClass: 'loc-gadc',
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
        label: 'Priority',
        field: 'FLC_STATUS', 
        thClass: 'flcstat-gadc',
        tdClass: 'flcstat-gadc',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "All Status",
            filterDropdownItems: ['NORMAL','URGENT']

        }
    },
    {
        label: 'Line',
        field: 'linedesc',
        thClass: 'line-gadc',
        tdClass: 'line-gadc',
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
        label: 'A/C Reg',
        field: 'ac_reg',
        thClass: 'ac-gadc',
        tdClass: 'ac-gadc',
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
        label: 'Order',
        field: 'AUFNR',
        thClass: 'aufnr-gadc',
        tdClass: 'aufnr-gadc',
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
        label: 'STO',
        field: 'STO_NUMBER',
        thClass: 'sto-gadc',
        tdClass: 'sto-gadc',
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
        label: 'DN',
        field: 'DN',
        thClass: 'dn-gadc',
        tdClass: 'dn-gadc',
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
        label: 'TO',
        field: 'TO',
        thClass: 'to-gadc',
        tdClass: 'to-gadc',
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
        label: 'Exp Status',
        field: 'EXP_STATUS',
        thClass: 'expstat-gadc',
        tdClass: 'expstat-gadc',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "All Status",
            filterDropdownItems: ['OPEN','PICKED', 'GOOD ISSUE', 'NIL STOCK', 'XDOC']

        }
    },
    {
        label: 'QTY Del',
        field: 'EXP_QTY',
        thClass: 'qtydel-gadc',
        tdClass: 'qtydel-gadc',
        hidden: false,
        filterable: true,
        sortable: true,
        filterOptions: {
            enabled: true,
            placeholder: "",
        }
    },    
    {
        label: 'Receiver',
        field: 'EXP_RECEIVER',
        thClass: 'exprec-gadc',
        tdClass: 'exprec-gadc',
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
        label: 'Remarks',
        field: 'EXP_REMARK',
        thClass: 'exprem-gadc',
        tdClass: 'exprem-gadc',
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
        label: 'Hangar Store 1000 Status',
        field: 'GAH_STATUS',
        thClass: 'gahstat-gadc',
        tdClass: 'gahstat-gadc',
        hidden: false,
        filterable: false,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
            filterDropdownItems: ['GOODS RECEIPT','TO CONFIRMED']
        }
    },
    /*{
        label: 'Shipper',
        field: 'GAH_SHIPER',
        thClass: 'gahship-gadc',
        tdClass: 'gahship-gadc',
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
        label: 'Hangar Store 1000 Remarks',
        field: 'GAH_REMARK',
        thClass: 'gahrem-gadc',
        tdClass: 'gahrem-gadc',
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
        label: 'date of provision',
        field: 'DATEPRO',
        thClass: 'cdate',
        tdClass: 'cdate',
        hidden: false,
        filterable: false,
        sortable: true,
        filterOptions: {
            enabled: true,
            trigger: 'enter',
            placeholder: "",
        }
    },

    // {
    //     label: 'Store Status',
    //     field: 'STORE_STATUS',
    //     thClass: 'storestat-gadc',
    //     tdClass: 'storestat-gadc',
    //     hidden: false,
    //     filterable: true,
    //     sortable: true,
    //     filterOptions: {
    //         enabled: true,
    //         trigger: 'enter',
    //         placeholder: "",
    //     }
    // },
    // {
    //     label: 'Store Remarks',
    //     field: 'STORE_REMARK',
    //     thClass: 'storerem-gadc',
    //     tdClass: 'storerem-gadc',
    //     hidden: false,
    //     filterable: true,
    //     sortable: true,
    //     filterOptions: {
    //         enabled: true,
    //         trigger: 'enter',
    //         placeholder: "",
    //     }
    // },
    {
        label: 'Action',
        field: 'action',
        thClass: 'mtart-gadc',
        tdClass: 'mtart-gadc',
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