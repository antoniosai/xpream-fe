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

        <div class="card-header">
            <div class="title-area">
                <h3 class="title">Project Charter</h3>
                <!-- <span class="subtitle total-project">{{ $route.meta.sub_title }}</span> -->
            </div>
            <div class="option-box">
                
                <div class="option-item">
                    <span>Location</span>
                    <select @change="liveSearch" v-model="table.serverParams.location" class="by_location">
                        <option value="all">All Location</option>
                        <option v-bind:value="h.id" v-for="h in hangar" :key="h.id">{{ h.name + ' - ' + h.description }}</option>
                    </select>
                </div>
                <div class="option-item">
                    <span>Line</span>
                    <select @change="liveSearch" v-model="table.serverParams.line" class="by_location">
                        <option v-bind:value="l.id" v-for="l in line" :key="l.id">{{ l.line_name }}</option>
                    </select>
                </div>
                <!-- Airframe Category -->
                <div class="option-item">
                    <span>Airframe Category</span>
                    <select @change="liveSearch" v-model="table.serverParams.airframe_category" class="by_location">
                        <option value="all">All Airframe Category</option>
                        <option value="Wide Body">Wide Body</option>
                        <option value="Narrow Body">Narrow Body</option>
                        <!-- <option v-bind:value="l.id" v-for="l in line" :key="l.id">{{ l.line_name }}</option> -->
                    </select>
                </div>
                <div class="option-item">
                    <span>Level</span>
                    <select @change="liveSearch" v-model="table.serverParams.level" class="by_location">
                        <option value="all">All Level</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <!-- <option value="4">4</option> -->
                    </select>
                </div>

                <div class="option-item">
                    <button class="button is-warning" style="background-color: #fbc02d; color: white" v-on:click="resetForm"><i class='material-icons'>sort</i> Reset Filter</button>
                </div>

            </div>
        </div>
        <div class="card-content">
            
            <div id="list-order_wrapper">
                <vue-good-table 
                    :columns="table.fields" 
                    :rows="table.rows"
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
                                <!-- <div class="toolbar-item toolbar-dropdown" style="position: relative">
                                    <select class="by_timeframe" v-model="table.serverParams.report" @change="liveSearch">
                                        <option value="all" selected="">-- All Report --</option>
                                        <option value="1">On</option>
                                        <option value="0">Off</option>
                                    </select>
                                </div>
                                <div class="toolbar-item toolbar-dropdown">
                                    <select class="by_timeframe" v-model="table.serverParams.level" @change="liveSearch">
                                        <option value="all" selected="">-- All Level --</option>
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                        <option value="3">Level 3</option>
                                        <option value="4">Level 4</option>
                                    </select>
                                </div> -->
                                <!-- <div class="toolbar-item toolbar-dropdown">
                                    <select class="by_location" v-model="table.serverParams.location" @change="liveSearch">
                                        <option value="all">-- All Location --</option>
                                        <option v-bind:value="h.id" v-for="h in hangar" :key="h.id">{{ h.name }}
                                        </option>
                                    </select>
                                </div> -->
                                <div class="toolbar-item">
                                    <div v-on:click="resetForm" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'pg_id'">
                            #{{ props.row.pg_id }}
                        </span>
                        <span v-if="props.column.field == 'level'">
                            #{{ props.row.level }}
                        </span>
                        <span v-if="props.column.field == 'line'">
                            {{ props.row.line.hangar.name }}-{{ props.row.line.line_name }}
                        </span>
                        <span v-if="props.column.field == 'lvl'">
                            {{ props.row.lvl }}
                        </span>
                        <span v-if="props.column.field == 'ac_type'">
                            {{ props.row.ac_type }}
                        </span>
                        <span v-if="props.column.field == 'ac_reg'">
                            {{ props.row.ac_reg }}
                        </span>
                        <span v-if="props.column.field == 'ams'">
                            {{ props.row.ams_text }}
                        </span>
                        <span v-if="props.column.field == 'customer'">
                            {{ props.row.customer }}
                        </span>
                        <span v-if="props.column.field == 'airframe_cat'">
                            {{ props.row.line.airframe_category }}
                        </span>
                        
                        <span v-if="props.column.field == 'action'">
                            <a v-bind:href="props.row.project_file" v-if="props.row.project_file" target="_blank" class="button pull-right"><i class="fa fa-file-word-o"></i> DOCX</a>
                        </span>
                        <span v-if="props.column.field == 'action2'">
                            <button class="button is-success" v-on:click="$router.push({ name: 'module2.project.edit', params: {pg_id: props.row.pg_id} })"><i class="fa fa-users"></i> Edit Team</button>
                        </span>
                    </template>
                </vue-good-table>
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


export default {

    components: {
        VueGoodTable, Loading
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },

    data: () => ({

        loading: {
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
            cancel: true
        },

        search_query: '',
        table: {
            rows: [],
            fields: [
                {
                    label: 'PG/Project ID',
                    field: 'pg_id',
                    sortable: true
                },
                {
                    label: 'Hangar - Line',
                    field: 'line'
                },
                {
                    label: 'Level',
                    field: 'lvl'
                },
                {
                    label: 'A/C Type',
                    field: 'ac_type'
                },
                {
                    label: 'A/C Reg',
                    field: 'ac_reg'
                },
                {
                    label: 'AMS',
                    field: 'ams_text'
                },
                {
                    label: 'Customer',
                    field: 'customer'
                },
                {
                    label: 'Airframe Category',
                    field: 'airframe_cat',
                    sortable: false
                },
                {
                    label: '',
                    field: 'action',
                    sortable: false
                },
                {
                    label: '',
                    field: 'action2',
                    sortable: false
                }
            ],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                search_query: '',
                role_id: 'all',
                is_active: 'all',
                is_ldap: 'all',
                searchTerm: '',

                timeframe: 'weekly',
                location: 'all',
                level: 'all',
                line: 'all',
                start_date: 'all',
                end_date: 'all',
                search_query: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },
        roles: [],
        api: {
            master_index: '/api/booking_and_submission/project',
        },
        hangar: [],
        line: [],
        form: {
            timeframe: 'weekly',
            location: 'all',
            level: 'all',
            line: 'all',
            start_date: 'all',
            end_date: 'all',
            search_query: ''
        },
        modal: {
            is_ldap: 'n',
            type: '',
            file: '',
            role: {},
            user: {}
        }
    }),

    mounted() {
        this.initData(this.api.master_index)
        this.initHangar()
        this.initRole()
    },

    watch: {},

    methods: {
        initData: function(url) {

            // this.loading.isLoading = true

            var params = this.table.serverParams

            axios.get(url, { params })
            .then( res => {
                this.loading.isLoading = false
                this.table.rows = res.data.data
                this.table.totalRows = res.data.total

                this.loading.isLoading = false
            })
        },

        initRole: function() {

            var vm = this

            axios.get('/api/management/role')
            .then( res => {
                vm.roles = res.data.data
            })
        },

        initHangar: function() {
            axios.get('/api/management/hangar')
            .then( res => {
                this.hangar = res.data.data
            })
        },

        resetForm: function() {
            this.table.serverParams = {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                search_query: '',
                role_id: 'all',
                is_active: 'all',
                is_ldap: 'all',
                searchTerm: '',

                timeframe: 'weekly',
                location: 'all',
                level: 'all',
                line: 'all',
                start_date: 'all',
                end_date: 'all',
                search_query: ''
            }
            this.initData(this.api.master_index)
        },
        /**
         * Datatable History - Server Side
         */

        // Search Column
        columnFilterFn: function(data, filterString){

        },

        // EndSearch

        updateParams(newProps) {
            this.table.serverParams = Object.assign({}, this.table.serverParams, newProps)
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage})
            this.initData(this.api.master_index)
        },

        onPerPageChange(params) {
            this.updateParams({perPage: params.currentPerPage})
            this.initData(this.api.master_index)
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field
            });
            this.updateParams({page: 1})
            this.initData(this.api.master_index)
        },
        
        onColumnFilter(params) {
            this.updateParams(params)
            this.initData(this.api.master_index)
        },

        onColumnSearch(params) {
            this.updateParams(params)
            this.updateParams({page: 1})

            this.initData(this.api.master_index)
        },

        // load items is what brings back the rows from server
        loadItems() {
            this.handleDatatableChange(this.table.serverParams).then(()=> {
                this.loading.isLoading = false;
            });
        },

        liveSearch: function () {

            var vm = this
            
            if(vm.table.serverParams.location != 'all') {
                this.setLineWithHangarId(this.table.serverParams.location)
            } 
            
            if(vm.table.serverParams.location == 'all'){
                vm.table.serverParams.line = 'all'
                vm.line = []
            }

            vm.initData(vm.api.master_index)
        },

        setLineWithHangarId: function(hangar_id) {
            this.line = []
            // this.table.serverParams.line = 'all'
            axios.get('/api/management/hangar/'+hangar_id)
            .then( res => {
                this.line = res.data.line
            })
        },
    }
}
</script>

<style scoped>

    /* Dot */
    ::v-deep .clickable {
        cursor: pointer; 
    }

    ::v-deep input[type="radio"]:checked+span .fake-radiobutton:after,
    input[type="checkbox"]:checked+span .fake-checkbox:after {
        display: block;
    }

    ::v-deep .vgt-table.condensed td, .vgt-table.condensed th {
        /* height: 20px !important; */
        font-size: 12px !important;
        /* text-align: center; */
    }


    
</style>