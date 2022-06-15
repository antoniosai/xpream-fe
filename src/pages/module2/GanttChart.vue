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
                        <h3 class="title">{{ $route.meta.title }}
                            <span v-if="datatable.serverParams.filter.aircraft == ''" class="all">All Aircraft</span>
                            <span v-else class="all">{{datatable.serverParams.filter.aircraft}}</span>
                        </h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box">
                         <div class="option-item">
                            <span style="white-space: nowrap">Aircraft Type</span>
                            <select v-on:change="handlerFilter()" v-model="datatable.serverParams.filter.aircraft">
                                <option  value="" selected>All Type</option>
                                <option v-for="aircraft in aircrafts" :key="aircraft.ID"  :value="aircraft.PMPS_CODE" >{{aircraft.PMPS_CODE}}</option>
                            </select>
                        </div>

                        <div class="option-item">
                            <span style="white-space: nowrap">Hangar</span>
                            <select v-on:change="handlerFilterLine()" v-model="datatable.serverParams.filter.hangar">
                                <option  value="" selected>All Hangar</option>
                                <option v-for="hangar in hangars" :key="hangar.ID"  :value="hangar.id" >{{hangar.name + ' - ' + hangar.description}}</option>
                            </select>
                        </div>

                        <div class="option-item">
                            <span style="white-space: nowrap">Line</span>
                            <select v-on:change="handlerFilter()" v-model="datatable.serverParams.filter.line">
                                <option  value="" selected>All Line</option>
                                <option v-for="line in lines" :key="line.id"  :value="line.id" >{{line.line_name + ' ' + line.description}}</option>
                            </select>
                        </div>
                        <div class="option-item">
                            <span style="white-space: nowrap">Status</span>
                            <select v-on:change="handlerFilter()" v-model="datatable.serverParams.filter.status">
                                <option value="">Select</option>
                                <option value="All">All Status</option>
                                <option value="CRTD">Created</option>
                                <option value="REL">Released</option>
                                <option value="CLSD">Closed</option>
                            </select>
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
                        </div>
                        <template>
                            <div class="">
                                <vue-good-table
                                    ref="tableAllGantt"
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
                                    <span v-if="props.column.field == 'HANGAR_LINE'">
                                        <span v-if="props.formattedRow['name'] !== null && props.formattedRow['line_name'] !== null">
                                            {{props.formattedRow['name'] + '-' + props.formattedRow['line_name']}}
                                        </span>
                                    </span>
                                    <span v-else-if="props.column.field == 'ACTION'">
                                        <button class="button is-success" v-on:click="$router.push({ name: 'module2.gantt_chart.detail', params: {pg_id: props.row.PG_ID} })"><i class="fa fa-eye"></i> View Details</button>
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
</template>

<script>

import swal from 'sweetalert'
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';


import FieldAllGantt from "./Gantt/datatable/FieldAllGantt.js";

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
        lines: [],
        datatable: {
            fields: FieldAllGantt,
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
                filter: {
                    aircraft: "",
                    hangar: "",
                    line: "",
                    status: "",
                }
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },

        loading: {
            isLoading: false,
            isLoadingCustomer: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
    }),

    mounted() {
        this.initData();
        this.initAircraft();
        this.initHangar();
    },

    watch: {},

    methods: {

        initAircraft: function() {
            axios.get('/api/booking_and_submission/show_pmps_aircraft')
            .then( res => {
                this.aircrafts = res.data
            })
        },

        initHangar: function() {
            axios.get('/api/booking_and_submission/show_hangar_by_line')
            .then( res => {
                this.hangars = res.data
            })
        },

        initData: function() {
            this.loading.isLoading = true;
            axios.post('/api/booking_and_submission/show_all_gantt')
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
                axios.post('/api/booking_and_submission/show_all_gantt', params)
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
            axios.post('/api/booking_and_submission/show_all_gantt', this.datatable.serverParams)
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
            this.datatable.serverParams.filter.hangar = "";
            this.datatable.serverParams.filter.aircraft = "";
            this.datatable.serverParams.filter.line = "";

            this.datatable.serverParams.page = 1;
            this.initData();
            this.$refs['tableAllGantt'].reset();
        },

        handlerFilterLine: function() {
        this.datatable.serverParams.filter.line = "";
        this.lines = [];
        if(this.datatable.serverParams.filter.hangar === "") {
            this.handlerFilter();
        }else {
            axios.get('/api/booking_and_submission/show_line_by_hangar/' + this.datatable.serverParams.filter.hangar)
                .then( res => {
                    this.lines = res.data.line
                    this.handlerFilter();
                })
            }
        }
    }
}



</script>
