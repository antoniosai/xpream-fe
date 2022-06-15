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
/* 
    ::v-deep .vgt-table thead th {
        background: #ffffff !important;
    } */

</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
             <ul class="tab-menu">
                <li v-if="$can('log_activity')" v-on:click="$router.push({name: 'misc.log'})" class="tab-link" data-tab="dashboard">Activity Log</li>
                <li v-if="$can('log_activity')" class="tab-link active" data-tab="tracking-log">Tracking Log</li>
            </ul>
            <div class="card tab-content active" id="jobcard" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                            <h3 class="title">Tracking Log</h3>                       
                    </div>
                    <div class="option-box">
                        <div class="option-item"></div>
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
                                        ref="table-tracking-log"
                                        :columns="datatable.fields"
                                        :rows="datatable.rows"
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
                                        <div slot="table-actions">
                                            <div class="toolbar toolbar-default">
                                                <div class="toolbar-left">
                                                    <div class="toolbar-item">
                                                        <div v-on:click="resetForm" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px;" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'DATA_ID'">
                                                <a href="#" v-on:click="handlerModalTimeline(props.formattedRow[props.column.field])">{{props.formattedRow[props.column.field]}}</a>
                                            </span>
                                            <span v-else >
                                                {{props.formattedRow[props.column.field]}}
                                            </span>
                                        </template>
                                    </vue-good-table>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <!-- modal timeline -->
                <div class="modal-box" id="modal-timeline" data-keyboard="false" data-backdrop="static">
                    <div class="modal sm">
                        <span class="close" v-on:click="hideModal('modal-timeline')"></span>
                        <div class="modal-header">
                            <h2 class="title">Log Timeline #{{timelines.length ? timelines[0].aufnr : ''}}</h2>
                        </div>
                        <div class="modal-body">
                            <div>REVNR</div>
                            <div style="font-size: 12pt; font-weight: bold; margin-bottom: 25px; color: #f98930">
                                {{timelines.length ? timelines[0].revnr : ''}}
                            </div>
                            <div style="position: relative; height:450px; overflow-y:auto; margin-left: 10px; margin-right: 10px;">
                                <Timeline v-for="(timeline, index) in timelines" :key="index" :data="timeline" :index="index" />
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-timeline')">Close</button>
                        </div>
                    </div>
                </div>
                <!-- /modal timeline -->
            </div>
        </div>
    </div>
</template>

<script>

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';
import FieldTrackingLog from './datatable/FieldTrackingLog';
import Timeline from "./components/Timeline";

export default {

    data: () => ({
        hasAccess: false,
        grant_access: false,
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        datatable: {
            fields: FieldTrackingLog,
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
                },
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },

        timelines: [],
    }),

    components: {
        Loading,
        VueGoodTable,
        Timeline
    },

    mounted() {
        if(!this.$can('log_activity')) {
            this.$router.push({name: 'access_denied'});
        }else {
            this.hasAccess = true;
            this.initData();
        }
    },

    computed: {},

    methods: {
        initData:  function() {
            this.loading.isLoading = true;

            axios.post('/api/tracking_log/get_data', this.datatable.serverParams)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data !`)
                }

                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            });
        },

        resetForm: function() {
            this.datatable.serverParams = {
                columnFilters: {},
                sort: {
                    type: '',
                    field: ''
                },
                page: 1, 
                perPage: 10,
                searchTerm: '',
                filter: {},
            }
            this.initData()
        },

        /**
         * Datatable - Server Side
         */
        onRefresh() {
            //this.datatable.serverParams.page
            this.updateParams({page: this.datatable.serverParams.page});
            this.checksync();
            this.loadItems();
        },

        
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
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {

                axios.post('/api/tracking_log/get_data', params)
                .then(res => {
                    this.datatable.rows = res.data.data
                    this.datatable.totalRows = res.data.total
                    this.loading.isLoading = false;
                    resolve();
                })
                .catch(e => {
                    resolve();
                })
            })
        },

        handlerModalTimeline: function(data_id) {
            this.handlerTimeline(data_id).then(() => {
                $('#modal-timeline').modal('show');
            })
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        handlerTimeline: function(data_id) {
            return new Promise((resolve, reject) => {
                this.timelines = [];
                axios.get(`/api/tracking_log/get_timeline/${data_id}`)
                .then(res => {
                    this.timelines = res.data;
                    resolve();
                })
                .catch((e) =>{
                    toastr.error("Failed get timeline data");
                    reject();
                })
            })
        }
    }
}
</script>
