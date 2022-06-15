<style scoped>
    ::v-deep .rowavail {
        background-color: rgb(215, 252, 215);
    }

    ::v-deep .rowtaken {
        background-color: rgb(235, 168, 168);
    }

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


    ::v-deep .rad input {
    display: none;
    }
    ::v-deep .rad label {
    width: 65px;
    margin-right: 15px;
    display: inline-block;
    cursor: pointer;
    }
    ::v-deep .rad .fix {
    width: auto;
    }
    ::v-deep .rad1 span {
    display: block;
    padding: 5px 10px 5px 25px;
    border: 2px solid #ddd;
    border-radius: 5px;
    position: relative;
    transition: all 0.25s linear;
    }
    ::v-deep .rad1 span:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 50%;
    -webkit-transform: translatey(-50%);
            transform: translatey(-50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ddd;
    transition: all 0.25s linear;
    }
    ::v-deep .rad1 input:checked + span {
    background-color: #fff;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    }
    ::v-deep .rad1 .red input:checked + span {
    color: red;
    border-color: red;
    }
    ::v-deep .rad1 .red input:checked + span:before {
    background-color: red;
    }
    ::v-deep .rad1 .blue input:checked + span {
    color: #4b84cf;
    border-color: #4b84cf;
    }
    ::v-deep .rad1 .blue input:checked + span:before {
    background-color: #4b84cf;
    }
    ::v-deep .rad1 .green input:checked + span {
    color: #45a872;
    border-color: #45a872;
    }
    ::v-deep .rad1 .green input:checked + span:before {
    background-color: #45a872;
    }
    ::v-deep .rad1 .black input:checked + span {
    color: #000000;
    border-color: #000000;
    }
    ::v-deep .rad1 .black input:checked + span:before {
    background-color: #000000;
    }
</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <!--<li v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="dashboard">Dashboard</li>
                <li v-on:click="$router.push({name: 'pc_hangar.tracking.jobcard', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="jobcard">Jobcard</li>
                <li v-on:click="$router.push({name: 'pc_hangar.tracking.mdr', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mdr">MDR</li>
                <li v-on:click="$router.push({name: 'pc_hangar.tracking.mrm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">MRM</li>
                <li class="tab-link" data-tab="prm">PRM</li>
                <li v-on:click="$router.push({name: 'pc_hangar.tracking.csp', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="csp">CSP</li>
                -->
                <li v-on:click="$router.push({name: 'pc_hangar.sky_store'})" class="tab-link" data-tab="tempstore">Sky Store Transaction</li>
                <li v-on:click="$router.push({name: 'pc_hangar.chemical_store'})" class="tab-link" data-tab="chemicalstore">Inventory</li>
                <li class="tab-link active" data-tab="tempstore">Material Availability</li>
            </ul>
            <div class="card tab-content active" id="tempstoredash" style="border-radius: 0px 8px 8px 8px;">
                <div class="is-row">
                    <div class="is-col is-80">
                        <div class="card">
                            <div class="card-header">
                                <div class="title-area">
                                    <h3 class="title">Search Available Material</h3>
                                </div>
                                <div class="option-box">
                                    <div class="option-item">
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
                                                    :row-style-class="rowStyleClassFn" 
                                                    styleClass="vgt-table bordered"
                                                    mode="remote"
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
                                                    @on-search="onColumnSearch"
                                                    @on-page-change="onPageChange"
                                                    @on-sort-change="onSortChange"
                                                    @on-column-filter="onColumnFilter"
                                                    @on-per-page-change="onPerPageChange"
                                                    :totalRows="datatable.totalRows"
                                                    :pagination-options="{
                                                        enabled: true,
                                                        mode: 'pages',
                                                        perPage: datatable.serverParams.perPage,
                                                        position: 'bottom',
                                                        perPageDropdown:  datatable.perPageDropDown,
                                                        dropdownAllowAll: true,
                                                        setCurrentPage: datatable.serverParams.page,
                                                        nextLabel: 'Next',
                                                        prevLabel: 'Prev',
                                                        rowsPerPageLabel: 'Rows per page',
                                                        ofLabel: 'of',
                                                        pageLabel: 'page',
                                                        allLabel: 'All',
                                                    }"
                                                >

                                                    <!--<div slot="table-actions">
                                                        <div class="toolbar toolbar-default">
                                                            <div class="toolbar-item" style="margin-right: -8px;">
                                                                <div v-on:click="handlerExportTempstore()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                                    <span class="tooltiptext-x">Export Excel</span>
                                                                    <i class="material-icons warning sync_order" >file_download</i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>-->

                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 't_inout'">
                                                <span v-if="props.formattedRow['t_outin'] == 'OUT' || props.formattedRow['t_outin'] == 'RWS'">Picked Up</span>
                                                <span v-else-if="props.formattedRow['t_outin'] == '' || props.formattedRow['t_outin'] == null">Available</span>
                                           </span>                                            
                                            <span v-else-if="props.column.field == 't_timestamp'">
                                                <input :disabled="!grant_access" style="width: 120px;" :value="props.formattedRow[props.column.field] == null ? '' :  props.formattedRow[props.column.field].substring(0, 10)" type="date" :id="'crm-track-date-t_timestamp' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'date','t_timestamp')">
                                                <input :disabled="!grant_access" style="width: 100px;" type="time" :value="props.formattedRow[props.column.field] == null ? '' : props.formattedRow[props.column.field].substring(11, 16)" :id="'crm-track-time-t_timestamp' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'time','t_timestamp')">
                                            </span>
                                            <span v-else-if="props.column.field == 't_dateout'">
                                                <input :disabled="!grant_access" style="width: 120px;" :value="props.formattedRow[props.column.field] == null ? '' :  props.formattedRow[props.column.field].substring(0, 10)" type="date" :id="'crm-track-date-t_dateout' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'date','t_dateout')">
                                                <input :disabled="!grant_access" style="width: 100px;" type="time" :value="props.formattedRow[props.column.field] == null ? '' : props.formattedRow[props.column.field].substring(11, 16)" :id="'crm-track-time-t_dateout' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'time','t_dateout')">
                                            </span>                                                                                                                                   
                                            <span v-else>
                                                <div class="flex-middle-default">
                                                    {{props.formattedRow[props.column.field]}}
                                                </div>
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
import FieldTempstorePivot from './Project/datatable/FieldTempstorePivot';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import XLSX from 'xlsx';

export default {
    data: () => ({
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        datatable: {
            fields: FieldTempstorePivot,
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
                //revnr: "",
            },
            perPageDropDown: [20, 60, 100, 200],
            selectedRows: []
        },
        data_import: {
            file: ""
        },

        stats: [],

        grant_access: false,

    }),

    components: {
        Loading, 
        VueGoodTable,
        'multiselect': Multiselect,
    },

    mounted() {
        this.initData();
    },

    methods: {

        initData:  function() {
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            //this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/crm/search_ttempstore', this.datatable.serverParams)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data, please run synchronize.`)
                }

                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            })
        },

        /**
         * Datatable - Server Side
         */
        updateParams(newProps) {
            this.datatable.serverParams = Object.assign({}, this.datatable.serverParams, newProps);
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage});
            this.loadItems();
        },

        onPerPageChange(params) {
            this.datatable.serverParams.page = 1;
            this.updateParams({perPage: params.currentPerPage});
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                sort: {
                    type: params[0].type,
                    field: params[0].field,
                },
            });
            this.updateParams({page: 1});
            this.loadItems();
        },
        
        onColumnFilter(params) {
            this.updateParams(params);
            this.updateParams({page: 1});
            this.loadItems();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({page: 1});
            this.loadItems();
        },

        /**
         * load items is what brings back the rows from server
         */
        loadItems() {
            this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                this.loading.isLoading = false;
            });
            
        },

        handleDatatableChange: function(params) {
            //this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {

                axios.post('/api/production_control_hangar/crm/search_ttempstore', params)
                .then(res => {
                    this.datatable.rows = res.data.data
                    this.datatable.totalRows = res.data.total
                    this.loading.isLoading = false;
                    resolve();
                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.loading.isLoading = false;
                    resolve();
                })
            })
        },
/*
        handlerSyncData: function() {
            swal({
                title: "Synchronize Project",
                text: "Are you sure that you want to sync this project?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;
                    axios.get('/api/production_control_hangar/crm/sync_crm/' + this.$route.params.pg_id)
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.initData();
                        }else {
                            toastr.error(res.data.message);
                        }
                        this.loading.isLoading = false;
                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Undefined error");
                        this.loading.isLoading = false;

                    })
        
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
        },
*/
        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },
/*
        handlerImport: function() {
            if(!this.validate()) return;

            this.handleButton('btn-import-crm', 'load').then(() => {
                let formData = new FormData();
                formData.append('revnr', this.$route.params.pg_id);
                formData.append('file', this.data_import.file);

                axios.post('/api/production_control_hangar/crm/import_crm', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-import-crm');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-import-crm', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-import-crm', 'stop');

                })
            })
        },


        validate: function() {
            if(this.data_import.file == "") {
                toastr.warning("File import can't be empty");
                return false;
            }

            return true;
        },
*/
        rowStyleClassFn(row) {
            //return 'rowcomplete';
            //return console.log(row.t_outin);
            if(row.t_outin == null || row.t_outin ==''){
                return 'rowavail';
            }
            else{
                return 'rowtaken';
            }
        },

        handleButton: function(id, status) {
            let element = document.getElementById(id);
            return new Promise((resolve, reject) => {
                if(status == "load") {
                    element.className += " is-loading";
                    element.disabled = true;

                    setTimeout(() => {
                       resolve(); 
                    }, 500);

                }else {
                    element.className = "button";
                    element.disabled = false;
                    resolve();
                }
            })
        },

        handlerExportTempstore: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/crm/export_tempstore`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'Temporary Store').then(() => {
                    this.loading.isLoading = false;
                });
            })
            .catch(e => {
                console.log("Error: " + e);
                this.loading.isLoading = false;
                toastr.error("Undefined error")
            })
        },

        handlerExport: function(data, name) {
            return new Promise((resolve, reject) => {
                let tmp = XLSX.utils.json_to_sheet(data)                 
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.writeFile(wb, `temp_store.xlsx`)

                resolve();
            })
        },

        handlerOpenLink: function(link) {
            window.open(link);
        }
    }
}
</script>

