<style scoped>

    ::v-deep  .vgt-left-align {
        white-space: nowrap !important;
    }

    ::v-deep .table.vgt-table{
        font-size: 9px !important; 
        border-collapse: collapse !important;
        background-color: #fff !important;
        width: 100% !important;
        max-width: 100% !important;
        table-layout: auto !important;
        border: 1px solid #dcdfe6 !important;
    }

    ::v-deep .vgt-table.bordered td, .vgt-table.bordered th {
        border: 1px solid #dcdfe6  !important;
        height: 20px  !important;
        font-size: 9pt  !important;
    }

    ::v-deep .vgt-wrap__footer {
        font-size: 9pt !important;
        /* color: #606266; */
        padding: 0.5em !important;
        height: 35px !important;
        border: 1px solid #dcdfe6 !important;
        background: #ffffff !important;
    }


    ::v-deep .vgt-wrap__footer .footer__row-count__label {
        font-size: 9pt !important;
        color: #909399 !important;
    }

    ::v-deep .vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {
        opacity: .5 !important;
        cursor: not-allowed !important;
        box-shadow: 0 0 black !important;
        font-size: 9pt !important;
    }

    ::v-deep .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {
        display: inline-block !important;
        color: #909399 !important;
        margin: 0 16px !important;
        font-size: 9pt !important;
    }

    ::v-deep .vgt-wrap__footer .footer__navigation__page-btn {
        text-decoration: none !important;
        color: #606266 !important;
        font-weight: 700 !important;
        white-space: nowrap !important;
        font-size: 9pt !important;
    }

    ::v-deep .vgt-global-search__input .input__icon .magnifying-glass {
        margin-top: 8px !important;
        margin-left: 10px !important;
        display: block !important;
        width: 12px !important;
        height: 12px !important;
        border: 2px solid #d6dae2 !important;
        position: relative !important;
        border-radius: 50% !important;
    }

    ::v-deep .vgt-input, .vgt-select{
        font-size: 9pt !important;
    }

    ::v-deep .footer__row-count__label {
        margin-top: -7px !important;
    }

    ::v-deep .footer__navigation{
        margin-top: -2px !important;
    }

    ::v-deep .vgt-wrap__footer .footer__row-count__select {
        margin-top: -5px !important;
        width: 50px !important;
        padding: 0px 15px 0px 5px;
        border: 0px  !important;
        border-radius: 0px !important;
        color: #606266 !important;
        font-weight: 700 !important;
        font-size: 9pt !important;
        margin-left: 0px !important;
        height: 32px !important;
        line-height: 32px !important;
    }

    ::v-deep .vgt-wrap__footer .footer__navigation__page-info__current-entry {
        width: 50px !important;
        text-align: center !important;
        display: inline-block !important;
        margin: 0 10px !important;
        font-weight: 700 !important;
        height: 25px !important;
    }

    ::v-deep .vgt-global-search {
        background: #ffffff !important;
        border: 1px solid #dcdfe6  !important;
    }

    ::v-deep .vgt-table thead th {
        background: #ffffff !important;
    }

    ::v-deep .action > i {
        padding: 5px;
        background: #fff;
        border-radius: 5px;
        font-size: 18px;
        border: 1px solid #eaeaea;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        cursor: pointer;
    }

    ::v-deep .action > i.warning {
        color: #ffc107;
    }

    ::v-deep .action > i.warning:hover {
        background-color: #ffc107;
        color: white;
    }

    ::v-deep .action > i.success {
        color: #13CE66;
    }

    ::v-deep .action > i.primary {
        color: #026396;
    }

    ::v-deep .action > i.success:hover {
        background-color: #13CE66;
        color: white;
    }

    ::v-deep .action > i.primary:hover {
        background-color: #026396;
        color: white;
    }

    ::v-deep .flex-middle-default {
        text-align: center;
    }

    ::v-deep .status-handler {
        color: white;
        font-size: 9pt;
        border-radius: 5px;
        padding: 4px !important;
    }

    ::v-deep .status-handler.success {
        background-color: #13CE66;

    }

    ::v-deep .status-handler.primary {
        background-color: #026396;

    }

    ::v-deep .status-handler.danger {
        background-color: #dc3545;
    }

    ::v-deep .status-handler.warning {
        background-color: #ffc107;
    }

    ::v-deep .multiselect {
        /* width: 230px !important; */
        font-size: 0.9375em !important;
        height: 35px !important;
        min-height: unset !important;
    }

    ::v-deep .multiselect__placeholder {
        font-size: 0.9375em !important;
    }

    ::v-deep .multiselect__input {
        font-size: 0.9375em !important;
        height: 30px !important;
    }

    ::v-deep .multiselect__select {
        height: 35px !important;
        padding: 10px 8px !important;
    }

    ::v-deep .multiselect__tags {
        min-height: 35px !important;
        padding: 5px 40px 0 8px !important;
    }

    ::v-deep .multiselect__placeholder {
        margin-bottom: unset !important;
    }

    ::v-deep .tooltip-x {
        position: relative !important;
        display: inline-block !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x {
        visibility: hidden !important;
        width: 120px !important;
        background-color: black !important;
        color: #fff !important;
        text-align: center !important;
        border-radius: 6px !important;
        padding: 5px 0 !important;
        
        /* Position the tooltip */
        position: absolute !important;
        z-index: 1 !important;
        bottom: 100% !important;
        left: 50% !important;
        margin-left: -60px !important;
        white-space: nowrap !important;
    }

    ::v-deep .tooltip-x:hover .tooltiptext-x {
        visibility: visible !important;
    }

    ::v-deep .action-handler {
        color: white;
        font-size: 9pt;
        border-radius: 3px;
        padding: 5px 5px 5px 5px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    }

    ::v-deep .action-handler.primary {
        background-color: #026396;
        cursor: pointer;
    }

    ::v-deep .action-handler.success {
        background-color: #13CE66;
        cursor: pointer;
    }

    ::v-deep .action-handler.default {
        background-color: #aeb3b8;
        cursor: unset;
    }
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_dashboard', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: $route.params.pg_id, type: 'hangar'}})" class="tab-link" data-tab="dashboard">Dashboard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_highlight')" v-on:click="$router.push({name: 'pc_hangar.tracking.highlight', params: {pg_id: $route.params.pg_id, type: 'hangar'}})" class="tab-link" data-tab="highlight">Performance</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.jobcard', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="jobcard">Jobcard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.mdr', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mdr">MDR</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mrm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">MRM</li>
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mcms', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">ZMCMS<span class="status-handler success" style="font-size:11px;margin-left:6px;">beta</span></li> -->
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li> -->
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_csp', 'pc_hangar_tracking_system_edit_csp', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.csp', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="csp">CSP</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_crm', 'pc_hangar_tracking_system_edit_crm')" class="tab-link active" data-tab="crm">CRM</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_project_charter')" v-on:click="$router.push({name: 'pc_hangar.tracking.project_charter', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="project-charter">Project Team & Charter</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_gantt_chart')" v-on:click="$router.push({name: 'pc_hangar.tracking.gantt_chart', params:{pd_id:$route.params.pg_id}})" class="tab-link" data-tab="gantt-chart">Gantt Chart</li>
                <li v-if=" $bulkCan('pc_hangar_tracking_system_discuss') " v-on:click=" $router.push({ name: 'pc_hangar.tracking.discuss', params: { pd_id: $route.params.pg_id } }) " data-tab="discuss"  class="tab-link" > Discuss </li>
            </ul>
            <div class="card tab-content active" id="crm" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">CRM Tracking</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                            <h4>{{projectinfo}}&nbsp;&nbsp;&nbsp;<button class="button is-secondary is-success" style="padding:0px 15px;height:30px;">{{acreginfo}}</button></h4>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                        <div>
                            <loading style="margin-top: 50px;"
                                :active.sync="loading.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                            <template>
                                <div>
                                    <vue-good-table
                                        ref="table-job-tracking"
                                        :columns="datatable.fields"
                                        :rows="datatable.rows"  
                                        styleClass="vgt-table bordered striped"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill and enter to search',
                                            
                                        }"
                                        :sort-options="{
                                            enabled: true,
                                        }"
                                        :select-options="{ 
                                            enabled: false,
                                            selectOnCheckboxOnly: true
                                        }"
                                        :line-numbers="true"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'pages',
                                            position: 'bottom',
                                            dropdownAllowAll: true,
                                            nextLabel: 'Next',
                                            prevLabel: 'Prev',
                                            rowsPerPageLabel: 'Rows per page',
                                            ofLabel: 'of',
                                            pageLabel: 'page',
                                            allLabel: 'All',
                                        }"
                                    >

                                        <div slot="table-actions">
                                        </div>

                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'USERSTATUS'">
                                                <span v-if="
                                                    props.formattedRow[props.column.field] == '1'
                                                ">
                                                    <button class="button is-secondary is-danger" style="width: 100%; height: 20px; line-height: 20px;">
                                                        Open
                                                    </button>                                                                                                  
                                                </span>
                                                <span v-else-if="
                                                    props.formattedRow[props.column.field] == '2'
                                                ">
                                                    <button class="button is-secondary is-danger" style="width: 100%; height: 20px; line-height: 20px;">
                                                        Waiting Material
                                                    </button>                                                                                                  
                                                </span>
                                                <span v-else-if="
                                                    props.formattedRow[props.column.field] == '3'
                                                ">
                                                    <button class="button is-secondary is-danger" style="width: 100%; height: 20px; line-height: 20px;">
                                                        Waiting Customer Supply
                                                    </button>                                                                                                  
                                                </span>
                                                <span v-else-if="
                                                    props.formattedRow[props.column.field] == '4'
                                                ">
                                                    <button class="button is-secondary is-success" style="width: 100%; height: 20px; line-height: 20px;">
                                                        Work Done
                                                    </button>                                                                                                  
                                                </span>
                                                <span v-else>
                                                    <button class="button is-secondary is-warning" style="width: 100%; height: 20px; line-height: 20px;">
                                                        Repair in Progress
                                                    </button>                                                                                                  
                                                </span>                                                                                                                                             
                                            </span>
                                            <span v-else>
                                               {{props.formattedRow[props.column.field]}}
                                            </span>                                                                                                                                   
                                        </template>
                                    </vue-good-table>

                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

//vue-good
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';
//import FieldCRM from './datatable/FieldCRM';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import XLSX from 'xlsx';

export default {

    data: () => ({
        hasAccess: false,
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        datatable: {
            fields: [
                {
                    label: 'Order',
                    field: 'AUFNR',
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
                    field: 'SERMAT',
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
                    field: 'EQKTX',
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
                    label: 'Equipment',
                    field: 'EQUNR',
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
                    label: 'Skill',
                    field: 'SKILL',
                    hidden: false,
                    filterable: true,
                    sortable: true,
                    filterOptions: {
                        enabled: true,
                        placeholder: "",
                        trigger: 'enter',
                    }
                },  
                /*{
                    label: 'Order Status',
                    field: 'STATUS',
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
                    label: 'User Status',
                    field: 'USERSTATUS',
                    hidden: false,
                    filterable: true,
                    sortable: true,
                    filterOptions: {
                        enabled: true,
                        placeholder: "",
                        trigger: 'enter',
                        filterDropdownItems: [
                            { value: '1', text: 'Open' },
                            { value: '2', text: 'Waiting Material' },  
                            { value: '3', text: 'Waiting Customer Supply' },
                            { value: '5', text: 'Repair In Progress' },
                            { value: '4', text: 'Work Done' },
                        ],
                          
                    }
                },
                {
                    label: 'Issued At',
                    field: 'ISSUE_DATE',
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
                    label: 'Last Update',
                    field: 'UPDATE_DATE',
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
                    label: 'Originating',
                    field: 'ORIGINATING',
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
                    label: 'Originating Type',
                    field: 'ORITYPE',
                    hidden: false,
                    filterable: true,
                    sortable: true,
                    filterOptions: {
                        enabled: true,
                        placeholder: "",
                        trigger: 'enter',
                    }
                },                                                                                       
                ],
            rows: [],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                sort: {
                    type: '',
                    field: ''
                },
                page: 1, 
                perPage: 10,
                searchTerm: '',
                filter: {},
                revnr: "",
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        data_import: {
            file: ""
        },

        stats: [],
        acreginfo: "",
        projectinfo: "",
        form: {
            revnr: "",
            desc: "",
            pn_on: "",
            pn_off: "",
            sn_on: "",
            sn_off: "",
            position: "",
            inout: "",
            qty: "",
            date: "",
            remark: "",
            reason: "",
            dn: "",
            tag: "",
            so: "",
            aufnr: "",
            qty: "",
        },
        columns: [
            {
                id: 12,
                label: 'All Columns',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 0,
                label: 'Part Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 1,
                label: 'Serial Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 2,
                label: 'Order Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 3,
                label: 'Reason Removal',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 4,
                label: 'In/Out',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 5,
                label: 'Location',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 6,
                label: 'Date',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 7,
                label: 'DN',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 8,
                label: 'Removal Tag',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 9,
                label: 'SO',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 10,
                label: 'Remark',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 11,
                label: 'Action',
                status: 'HIDE',
                hidden: false,
            },
             {
                id: 12,
                label: 'Qty',
                status: 'HIDE',
                hidden: false,
            },           
        ],

        form_link: {
            id: "",
            link: "",
            column: ""
        },

        grant_access: false,
        cust_access: false,

    }),

    components: {
        Loading, 
        VueGoodTable,
        'multiselect': Multiselect,
    },

    mounted() {
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if(!res) {
                this.$router.push({name: 'access_denied'});
            } else {
                if(
                    !this.$bulkCan(
                        'pc_hangar_tracking_system_view_crm', 
                        'pc_hangar_tracking_system_edit_crm', 
                        'pc_hangar_tracking_system_edit', 
                        'pc_hangar_tracking_system_view'
                    )
                ) {
                    this.$router.push({name: 'access_denied'});
                }else {
                    this.hasAccess = true;
                    this.permissionHandler();
                    this.initData();
                }
            }
        });
    },

    methods: {

        initData:  function() {
            this.loading.isLoading = true;

            axios.get('/api/production_control_hangar/crm/get_newcrm/'+this.$route.params.pg_id)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data, please run synchronize.`)
                }

                this.datatable.rows = res.data.data
                //this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            })
        },

        permissionHandler: function() {
            this.grant_access = false;
            this.cust_access = false; 

            this.$isReleased(this.$route.params.pg_id).then(res => {
                if(res) { 
                    if(this.$bulkCan('pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_edit_crm')) {
                        this.grant_access = true;
                    }
                    if(this.$can('pc_hangar_tracking_system_customer_edit')) {
                        this.cust_access = true;
                    }     
                    
                    axios.get('/api/management/job_mdr_track/linerev/'+this.$route.params.pg_id)
                    .then(res => {
                        this.acreginfo = res.data.info.ac_reg;
                        this.projectinfo = res.data.info.main_type;
                        if(res.data.info.access == 'failed'){
                            this.grant_access = false;
                        }
                    })
                }
            })
        },

    }
}
</script>

