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
        label: 'Criteria (Query Language)',
        field: 'jobtitle',
        filterable: true,
    },
    {
        label: 'Group Name',
        field: 'group_name',
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
    }
  ]