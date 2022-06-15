<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
             <ul class="tab-menu">
                <li v-if="$can('log_activity')" class="tab-link active" data-tab="tracking-log">My Profile</li>
                <!--li v-if="$can('log_activity')" v-on:click="$router.push({name: 'misc.tracking_log'})" class="tab-link" data-tab="dashboard">Tracking Log</li-->
            </ul>
            <div class="card tab-content active" id="jobcard" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">                  
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="is-row">

                        <div class="is-col is-20">
                            <img v-if="user.avatar ? true:false" :src="user.avatar" width="100%">
                        </div>
                        <div class="is-col is-80">
                            <table>
                                <tr><td>Name</td><td v-if="user.name ? true:false">{{user.name}}</td></tr>
                                <tr><td>Unit</td><td v-if="user.unit ? true:false">{{user.unit}}</td></tr>
                                <tr><td>Title</td><td v-if="user.jabatan ? true:false">{{user.jabatan}}</td></tr>
                                <tr><td>Email</td><td v-if="user.email ? true:false">{{user.email}}</td></tr>
                                <tr><td>Role</td><td v-if="user.role.display_name ? true:false">{{user.role.display_name}}</td></tr>
                                <tr><td>Last Login</td><td></td></tr>
                                <tr><td>Last Transaction</td><td></td></tr>
                            </table>
                        </div>
                    </div>




                    <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
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
                                        <span v-if="props.column.field == 'jobstatus'">
                                            <a v-if="props.formattedRow['jobstatus']=='R' || props.formattedRow['jobstatus']=='S'" class="is-label is-warning">Running</a>
                                            <a v-else-if="props.formattedRow['jobstatus']=='F'" class="is-label is-success">Done</a>
                                            <a v-else-if="props.formattedRow['jobstatus']=='A'" class="is-label is-danger">Cancelled</a>
                                        </span>
                                        <span v-else-if="props.column.field == 'queue_stat'">
                                            <a v-if="props.formattedRow['queue_stat']==0 && props.formattedRow['jobstatus']=='R'"  class="is-label is-warning">Executing</a>
                                            <a v-else-if="props.formattedRow['queue_stat']==0 && props.formattedRow['jobstatus']=='S'"  class="is-label is-warning">Waiting</a>
                                            <a v-else-if="props.formattedRow['queue_stat']==0"  class="is-label is-success">Executed</a>
                                            <a v-else-if="props.formattedRow['queue_stat']>0" class="is-label is-danger">Queueing [{{props.formattedRow[props.column.field]}}]</a>
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
                    </div>
                </div>
            </div>
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

    computed: {
    },
    
    data: () => ({
        user: [],
        hasAccess: false,
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
                    field: 'revision',
                },  
                {
                    label: 'A/C Reg',
                    field: 'ac_reg',
                },                           
                {
                    label: 'Sync CRM',
                    field: 'jobstatus',
                },
                {
                    label: 'Start',
                    field: 'start_date',                   
                },
                {
                    label: 'End',
                    field: 'end_date',
                },                  
                {
                    label: 'Duration',
                    field: 'datediff',
                },                  
                {
                    label: 'Executed By',
                    field: 'execby',
                },                                              
                {
                    label: 'Queue',
                    field: 'queue_stat',
                },
                {
                    label: 'Jobname',
                    field: 'jobname',
                    sortable: true
                },
                {
                    label: 'Variant',
                    field: 'variant',
                    sortable: true
                },
                {
                    label: 'Jobcount',
                    field: 'jobcount',
                    sortable: true
                },
                {
                    label: 'Sync XPREAM JC',
                    field: 'sync_xpream',
                    sortable: true
                },
                {
                    label: 'Sync XPREAM MDR',
                    field: 'sync_xpream_mdr',
                    sortable: true
                },                
                {
                    label: 'Sync XPREAM MRM',
                    field: 'sync_xpream_mrm',
                    sortable: true
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
                perPage: 5,
                search_query: '',
                searchTerm: ''
            },
            perPageDropDown: [5, 10, 50, 100],

        },
    }),

    mounted() {
        if(!this.$can('profile')) {
            this.$router.push({name: 'access_denied'});
        }else {
            this.hasAccess = true;
            this.initData();
        }
    },

    methods: {
        initData: function() {
            this.user = JSON.parse(localStorage.getItem('user'));
        },

        resetForm: function() {
            this.updateParams({page: this.table.serverParams.page});
            this.loadItems();
        },


        hideModal: function (modal_name) {
            // deleteformhere
            this.resetModal()
            $('#' + modal_name).hide()
        },

        liveSearch: function() {
            this.initData()
        },

        /**
         * Datatable History - Server Side
         */

        // EndSearch
        handleDatatableChange: function(params) {
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {
                axios.post('/api/activity_log/rfc_log', params)
                .then(res => {
                    this.table.rows = res.data.data
                    this.table.totalRows = res.data.total
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

        // load items is what brings back the rows from server

    },
}
</script>