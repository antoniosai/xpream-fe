
<style scoped>
::v-deep .vgt-left-align {
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
     width: 30px !important;
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
</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header ">
                    <div class="title-area">
                        <h3 class="title">Gantt Chart #{{ $route.params.pg_id }}</h3>
                        <span class="subtitle total-project">Sales ID <strong>#{{pg.pg_id }}</strong> | A/C Type : <strong>{{ pg.ac_type }}</strong> <span v-if="pg.hangar && pg.line">| Hangar-Line : <strong>{{ pg.hangar.name + '-' + pg.line.line_name }}</strong> </span> | A/C Reg : <strong>{{ pg.ac_reg }}</strong> | AMS : <strong>{{ pg.ams_text }}</strong></span>
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                            <button class="button" v-if="gantt.found && loading.isLoadingData == false" v-on:click="$router.go(-1)">
                                <i class='material-icons'>
                                    settings_backup_restore
                                </i>
                                Back
                            </button>
                        </div>
                    </div>

                </div>
                <div class="card-content">
                    <loading 
                        :active.sync="loading.isLoadingData" 
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType">
                    </loading>

                    <div v-if="!loading.isLoadingData">
                        <div v-if="gantt.found">
                            <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                                <div>
                                    <loading style="margin-top: 50px;"
                                        :active.sync="loading.isLoading" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading>
                                </div>
                                <template>
                                    <div class="">
                                        <vue-good-table
                                            ref="tableGanttBY"
                                            :columns="datatable.fields"
                                            :rows="datatable.rows"  
                                            styleClass="vgt-table bordered striped"
                                            mode="remote"
                                            max-height="510px"
                                            :search-options="{
                                                enabled: true,
                                                trigger: 'enter',
                                                skipDiacritics: true,
                                                placeholder: 'Fill and enter to search',
                                                
                                            }"
                                            :sort-options="{
                                                enabled: true
                                            }"
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
                                                pageLabel: 'page', // for 'pages' mode
                                                allLabel: 'All',
                                            }"
                                        >
                                        <div slot="table-actions">
                                            <div class="toolbar toolbar-default">
                                                <div class="toolbar-left">
                                                    <div class="toolbar-item">
                                                        <div v-on:click="syncData()" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'ACTION'">
                                                <button class="button is-success" v-on:click="handlerOpenGantt(props.row.VERSION)"><i class="fa fa-eye"></i> View Details</button>
                                            </span>
                                        </template>
                                        </vue-good-table>
                                    </div>
                                </template>
                                
                            </div>
                        </div>
                        <div v-if="!gantt.found && pg.hasOwnProperty('pg_id')">
                            <div class="alert is-focus">
                                Hello! This Project / Planning Gate has no gantt data yet. Do you want to start create the gantt chart on this project? 
                                <div style="margin-top: 10px;">
                                    <button v-on:click="handlerRedirect()" class="button is-small">Yes, Continue</button>
                                    <button v-on:click="$router.go(-1)" style="color:#fafafa; background-color: #f93232;" class="button is-small is-destructive">No, Turn me back</button>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="!pg.hasOwnProperty('pg_id')">
                            <div class="alert is-focus">
                                This Project / Planning Gate is not found !
                                <div style="margin-top: 10px;">
                                    <button v-on:click="$router.go(-1)" style="color:#fafafa; background-color: #f93232;" class="button is-small is-destructive">Turn me back</button>
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

import swal from 'sweetalert'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';


import FieldGantt from "./datatable/FieldGantt.js";

export default {

    components: {
        Loading,
        VueGoodTable,
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },

    data: () => ({
        aircrafts: [],
        hangars: [],
        datatable: {
            fields: FieldGantt,
            rows: [],
            totalRows: '',
            serverParams: {
                pg_id: '',
                columnFilters: {
                },
                sort: {
                    type: '',
                    field: ''
                },
                page: 1, 
                perPage: 10,
                searchTerm: '',
                filter: {
                    aircraft: '',
                    hangar: ''
                }
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },

        loading: {
            isLoading: false,
            isLoadingData: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        gantt: {
            found: false,
        },
        pg_id: '',
        pg: {},
    }),

    mounted() {
        this.datatable.serverParams.pg_id = this.$route.params.pg_id;
        this.initData();
        this.pg_id = this.$route.params.pg_id,
        this.initDataPG()
    },

    watch: {},

    methods: {

        initData: function() {
            this.loading.isLoading = true;
            axios.post('/api/booking_and_submission/show_gantt_by_pg_id', this.datatable.serverParams)
            .then(res => {
                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
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

        /**
         * Handle datatable request change
         */
        handleDatatableChange: function(params) {
            this.loading.isLoading = true;
            return new Promise((resolve, reject) => {
                axios.post('/api/booking_and_submission/show_gantt_by_pg_id', params)
                .then(res => {
                    this.datatable.rows = res.data.data
                    this.datatable.totalRows = res.data.total
                    resolve();
                })
                .catch(e => {
                    console.log("Error: "+e)
                    resolve();
                })
            })
        },

        handlerFilter: function() {
            this.loading.isLoading = true;
            this.datatable.serverParams.page = 1;
            axios.post('/api/booking_and_submission/show_gantt_by_pg_id', this.datatable.serverParams)
            .then(res => {
                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },

        syncData: function() {
            this.datatable.serverParams.searchTerm = '';
            this.datatable.serverParams.page = 1;
            this.datatable.serverParams.filter.hangar = "";
            this.datatable.serverParams.filter.aircraft = "";
            this.initData();
            this.$refs['tableGanttBY'].reset();
        },

        initDataPG: function() {
            this.loading.isLoadingData = true;
            axios.get('/api/booking_and_submission/get_gantt_by_pg_id/' + this.pg_id)
            .then(res => {
                if(res.data.hasOwnProperty("ID")) {
                    this.gantt.found = true;
                }else {
                    this.gantt.found = false;
                }

                this.getProject();
            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },

        getProject: function() {
            axios.get('/api/slot_and_capacity/planning_gate/show/' + this.pg_id)
            .then( res => {
                if (res.data.status == 'success') {
                    this.pg = res.data.data
                }
                this.loading.isLoadingData = false;

            })
        },

        handlerRedirect: function() {
            window.open('/booking_and_submission/gantt_chart/gantt/create/' + this.pg_id, '_self');
        },

        handlerOpenGantt: function(version) {
            window.open(`${this.$route.path}/${version}`, '_self');
        }
    }

}
</script>
