<template>

    <div>

        <loading 
        :loader="'dots'"
        :color="'#1976d2'"
        :width="loading.width"
        :height="loading.height"
        :active.sync="loading.isLoading" 
        :can-cancel="loading.cancle" 
        :is-full-page="loading.fullPage"></loading>

        <div class="content-header"></div>
        <div class="content-body">


            <vue-good-table 
                :columns="table.fields" 
                :rows="table.rows"
                :line-numbers="true"
                mode="remote"
                :search-options="{
                    enabled: true,
                    trigger: 'enter',
                    skipDiacritics: true,
                    placeholder: 'Type and enter to search',
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
                                <div v-on:click="resetForm" class="button" style="background:#0065FF; margin-right: 50px; margin-left: -5px"><i class="material-icons warning sync_order" >sync</i>Refresh</div>
                            </div>
                        </div>
                    </div>
                </div>
                <template slot="table-row"  slot-scope="props">
                    <span v-if="props.column.field == 'STATUS'">
                        <a v-if="props.formattedRow['STATUS']=='Progress'" class="is-label is-warning">{{ props.formattedRow['STATUS'] }}</a>
                        <a v-else-if="props.formattedRow['STATUS']=='Executed'" class="is-label is-success">{{ props.formattedRow['STATUS'] }}</a>
                        <a v-else-if="props.formattedRow['STATUS']=='Failed'" class="is-label is-danger">{{ props.formattedRow['STATUS'] }}</a>
                    </span>
                    <span v-else>
                        <div class="flex-middle-default">
                            {{props.formattedRow[props.column.field]}}
                        </div>
                    </span>

                </template>                
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
        table: {
            rows: [],
            fields: [
                {
                    label: 'Revision',
                    field: 'REVNR',
                },  
                {
                    label: 'Status',
                    field: 'STATUS',
                },                           
                {
                    label: 'Start',
                    field: 'START_SYNC',                   
                },
                {
                    label: 'End',
                    field: 'END_SYNC',
                },                  
                {
                    label: 'Duration',
                    field: 'DURATION',
                },                  
                {
                    label: 'Executed By',
                    field: 'EXEC_BY',
                },                                              
            ],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 30,
                search_query: '',
                searchTerm: ''
            },
            perPageDropDown: [30, 50, 100],

        },
    }),

    mounted() {
        this.initData()
    },

    methods: {


        resetForm: function() {
            this.updateParams({page: this.table.serverParams.page});
            this.loadItems();
        },


        initData: function() {
            this.loading.isLoading = true

            let params = this.table.serverParams

            axios.post('/api/activity_log/sync_zmcms_log', params)
            .then( ({data}) => {
                this.table.rows = data.data
                this.table.totalRows = data.total
                this.loading.isLoading = false
            })
        },

        liveSearch: function() {
            this.initData()
        },

        handleDatatableChange: function(params) {
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {
                axios.post('/api/activity_log/sync_zmcms_log', params)
                .then(({data}) => {
                    this.table.rows = data.data
                    this.table.totalRows = data.total
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

        loadItems() {
            this.handleDatatableChange(this.table.serverParams).then(()=> {
                this.loading.isLoading = false;
            });
            
        },

        updateParams(newProps) {
            this.table.serverParams = Object.assign({}, this.table.serverParams, newProps)
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage})
            this.loadItems();
        },

        onPerPageChange(params) {
            this.updateParams({perPage: params.currentPerPage})
            this.updateParams({page: 1})
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field
            });
            this.updateParams({page: 1})
            this.loadItems();
        },
        
        onColumnFilter(params) {
            this.updateParams(params)
            this.updateParams({page: 1})
            this.loadItems();
        },

        onColumnSearch(params) {
            this.updateParams(params)
            this.updateParams({page: 1})

            this.loadItems();
        },

    },
}
</script>