export default [
    {
        label: 'ID',
        field: 'id',
        filterable: true,
        width: '70px',
        //sortable: true,
        //width: "200px",
        /*filterOptions: {
            enabled: true,
            placeholder: "",
            trigger: 'enter',
        }*/        
    },
    {
        label: 'Dinas',
        field: 'unit',
        filterable: true,
    },   
    {
        label: 'Criteria (Query Language)',
        field: 'training_query',
        filterable: true,
        thClass: 'cdesc',
        tdClass: 'cdesc', 
    },
    {
        label: 'Group Name',
        field: 'training_name_mapping',
        filterable: true,
    },  
    {
        label: 'Recurrent',
        field: 'need_reccurent',
        filterable: true,
    },             
    {
        label: 'created_at',
        field: 'created_at',
        filterable: true,
        hidden: true,
    },
    {
        label: 'created_by',
        field: 'created_by',
        filterable: true,
        hidden: true,
    },
    {
        label: 'updated_at',
        field: 'updated_at',
        filterable: true,
        hidden: true,
    },
    {
        label: 'updated_by',
        field: 'updated_by',
        filterable: true,
        hidden: true,
    }        
    ,
    {
        label: 'Action',
        field: 'action',
        filterable: true,
        width: '70px',
    },
    {
        label: 'Query Level',
        field: 'query_level',
        filterable: true,
        hidden: true,
    },  
    {
        label: 'ID Relation',
        field: 'id_relation',
        filterable: true,
        hidden: true,
    },     
  ]