<template>

    <div>

        <loading 
            :loader="'dots'"
            :color="'#1976d2'"
            :width="loading.width"
            :height="loading.height"
            :active.sync="loading.isLoading" 
            :can-cancel="loading.cancle" 
            :is-full-page="loading.fullPage" 
        />

        <div class="content-header"></div>
        <div class="content-body">

            <center v-if="!table_show">
                <img src="https://image.flaticon.com/icons/png/512/2131/premium/2131871.png" style="width: 400px" alt="">
                <br>
                <h3>Last Sync <span>{{ sync_history.last_sync }}</span> by <span>{{ sync_history.synced_by }}</span></h3>
                <button style="position: relative" v-on:click="sync">Sync Now</button>
                <div style="position: relative">&nbsp;</div>
                <button style="position: relative" v-on:click="table_show = true">Show History</button>
            </center>

            <vue-good-table v-else
                :columns="table.fields" 
                :rows="table.rows"
                :line-numbers="true"
                mode="remote"
                :search-options="{
                    enabled: true,
                    trigger: 'enter',
                    skipDiacritics: true,
                    placeholder: 'Type and enter to search'
                }"
                @on-search="onColumnSearch"
                @on-page-change="onPageChange"
                @on-sort-change="onSortChange"
                @on-column-filter="onColumnFilter"
                @on-per-page-change="onPerPageChange"

                :totalRows="table.totalRows"
                :pagination-options="{
                    enabled: true,
                    mode: 'pages',
                    perPage: table.serverParams.perPage,
                    position: 'bottom',
                    perPageDropdown:  table.perPageDropDown,
                    dropdownAllowAll: true,
                    setCurrentPage: table.serverParams.page,
                    nextLabel: 'Next',
                    prevLabel: 'Prev',
                    rowsPerPageLabel: 'Rows per page',
                    ofLabel: 'of',
                    pageLabel: 'page', // for 'pages' mode
                    allLabel: 'All',
                }"
                styleClass="vgt-table striped condensed">
                <div slot="table-actions">
                    <div class="toolbar toolbar-default">
                        <div class="toolbar-left">
                            <div class="toolbar-item">
                                <button class="button" style="background-color: #2e7d32; white: black" v-on:click="table_show = false">
                                    <i class="material-icons">sync</i>
                                    Sync Now
                                </button>
                            </div>
                            <div class="toolbar-item">
                                <div v-on:click="resetForm" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </vue-good-table>

        </div>

    </div>
    
</template>

<script>

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

export default {

    components: {
        VueGoodTable, Loading
    },

    data: () => ({
        loading: {
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
            cancel: true
        },

        table_show: false,

        sync_history: {},

        table: {
            rows: [],
            fields: [
                {
                    label: 'Description',
                    field: 'description',
                    sortable: false
                },
                {
                    label: 'Date Time',
                    field: 'created_at',
                    sortable: true
                },
                {
                    label: 'Executed By',
                    field: 'usertype',
                    // sortable: true
                },
            ],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                usertype: 'all',
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                search_query: '',
                searchTerm: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },
    }),

    mounted() {
        this.initData()
    },

    methods: {
        initData: function() {
            this.loading.isLoading = true

            let params = this.table.serverParams

            axios.get('/api/activity_log/sync', { params })
            .then( res => {
                this.table.rows = res.data.data
                this.table.totalRows = res.data.total
                this.loading.isLoading = false
                this.syncHistory()
            })
        },

        sync: function () {
            
            swal({
                title: "You Are Going to Sync Data from CRM & GSMART",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {

                    this.loading.isLoading = true

                    axios.post('/api/sync')
                    .then( res => {
                        if(res.data.status == 'success') {
                            this.loading.isLoading = false
                            this.syncHistory()
                            this.initData()
                            toastr.options.progressBar = true;

                            toastr.success('CRM INFO & GSMART Successfully Synced. Page will be reloaded in 3 seconds', 'Success',  {timeOut: 3000})
                    
                            
                        } else {
                            this.loading.isLoading = false
                            toastr.error('Failed to Sync CRM INFO & GSMART', 'Failed')
                        }
                    })

                    // this.loading.isLoading = false
                } else {
                    toastr.info("Canceled");
                }
            });
        },

        syncHistory: function() {
            axios.get('/api/sync/history')
            .then( res => {
                this.sync_history = res.data
            })
        },

        resetForm: function() {
            this.serverParams = {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                search_query: '',
                searchTerm: ''
            }
            this.initData()
        },

        liveSearch: function() {
            this.initData()
        },

        /**
         * Datatable History - Server Side
         */

        // EndSearch

        updateParams(newProps) {
            this.table.serverParams = Object.assign({}, this.table.serverParams, newProps)
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage})
            this.initData()
        },

        onPerPageChange(params) {
            this.updateParams({perPage: params.currentPerPage})
            this.updateParams({page: 1})
            this.initData()
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field
            });
            this.updateParams({page: 1})
            this.initData()
        },
        
        onColumnFilter(params) {
            this.updateParams(params)
            this.updateParams({page: 1})
            this.initData()
        },

        onColumnSearch(params) {
            this.updateParams(params)
            this.updateParams({page: 1})

            this.initData()
        },

        // load items is what brings back the rows from server

    },
}
</script>

<style>
    .widget {
        margin: 0 0 25px 0;
        display: block;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
    }
    .widget .widget-heading {
        padding: 7px 15px;
        -webkit-border-radius: 2px 2px 0 0;
        -moz-border-radius: 2px 2px 0 0;
        border-radius: 2px 2px 0 0;
        text-transform: uppercase;
        text-align: center;
        background: #38BDFF;
        color: white;
    }
    .widget .widget-body {
        padding: 10px 15px;
        font-size: 36px;
        font-weight: 300;
        background: #8FDEFF;
    }
</style>