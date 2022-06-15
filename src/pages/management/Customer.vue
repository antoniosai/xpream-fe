<template>

    <div>

        <div class="content-header"></div>
        <div class="content-body">
            <div class="is-row">
                <div class="is-col is-75">
                    <loading 
                        :loader="'dots'"
                        :color="'#1976d2'"
                        :width="loading.width"
                        :height="loading.height"
                        :active.sync="loading.isLoading" 
                        :can-cancel="loading.cancle" 
                        :is-full-page="loading.fullPage" 
                    />
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">
                                Customer Data
                            </h4>
                        </div>
                        <div class="card-body">
                            <vue-good-table 
                                :line-numbers="true"
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

                                <template slot="table-row" slot-scope="props">
                                    <span v-if="props.column.field == 'logo'">
                                        <center>
                                            <img :src="'/customer/logo/' + props.row.logo" v-if="props.row.logo" style="max-height: 45px; text-align: center"/>
                                        </center>
                                    </span>
                                    <span v-if="props.column.field == 'code'">
                                        {{ props.row.code }}
                                    </span>
                                    <span v-if="props.column.field == 'name'">
                                        {{ props.row.name }}
                                    </span>
                                    <span v-if="props.column.field == 'country'">
                                        ({{ props.row.country_code }}) {{ props.row.country }}
                                    </span>
                                    <span v-if="props.column.field == 'action'">
                                        <div class="action">
                                            <i class="material-icons success edit-user" v-on:click="editCust(props.row, 'edit')">edit</i>
                                        </div>
                                    </span>
                                </template>
                            </vue-good-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Modal -->
        <div class="modal-box" id="cust_detail">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('cust_detail')"></span>
                
                <div class="modal-header">
                    <h2 class="title">Customer {{ modal.cust.name }}</h2>
                </div>
                <div class="modal-body" style="position: relative">

                    <div class="is-row">
                        <div class="is-col is-30">
                            <div class="form-item">
                                <label>Customer Code</label>
                                <input type="text" v-model="modal.cust.code" disabled>
                            </div>
                        </div>
                        <div class="is-col is-70">
                            <div class="form-item">
                                <label>Customer Name</label>
                                <input type="text" v-model="modal.cust.name" disabled>
                            </div>
                        </div>
                    </div>
                    

                    <div class="form-item">
                        <label>Customer Origin</label>
                        <input type="text" :value="'('+modal.cust.country_code+')' + ' ' + modal.cust.country" disabled>
                    </div>

                    <div class="card">
                        <div class="form-item">
                            <span v-if="modal.cust.logo">
                                <center>
                                    <img :src="'/customer/logo/' + modal.cust.logo" v-if="modal.cust.logo" style="max-height: 200px; text-align: center"/>
                                </center>
                            </span>
                        </div>

                        <hr>

                        <div class="form-item">
                            <div class="is-row">
                                <div class="is-col is-80">
                                    <input type="file" ref="file" name="file" @change="fileUpload($event.target)">
                                </div>
                                <div class="is-col is-20">
                                    <button class="button is-primary pull-right" :disabled="progressBar > 0" v-on:click="doUpload"
                                        type="submit"><i class="material-icons">check</i> Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="progress" v-if="progressBar > 0">
                        <div class="progress-bar" role="progressbar" :aria-valuenow="progressBar"
                        aria-valuemin="0" aria-valuemax="100" :style="{width: progressBar + '%'}">
                            <span class="sr-only">70% Complete</span>
                            {{ progressBar + '%' }}
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
                <div class="modal-footer" style="">
                    <button class="button is-primary is-default cancel" v-on:click="hideModal('cust_detail')">Cancel</button>
                    <button class="button is-primary is-success" v-on:click="saveData"><i class="material-icons">check</i> Save</button>
                </div>
                
            </div>
        </div>
        <!-- / User Modal -->

  

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

        progressBar: 0,

        loading: {
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: false,
            cancel: true
        },

        modal: {
            file: '',
            cust: {}
        },

        search_query: '',
        table: {
            rows: [],
            fields: [
                {
                    label: '',
                    field: 'logo',
                },
                {
                    label: 'Customer Code',
                    field: 'code',
                    sortable: true
                },
                {
                    label: 'Customer Name',
                    field: 'name',
                    sortable: true
                }, 
                {
                    label: 'Origin',
                    field: 'country',
                    sortable: false
                },
                {
                    label: '',
                    field: 'action'
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
                searchTerm: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },
        api: {
            master_index: '/api/management/customer',
        }
    }),

    mounted() {
        this.initData(this.api.master_index)
    },

    watch: {},

    methods: {
        initData: function(url) {

            var params = this.table.serverParams

            axios.get(url, { params })
            .then( res => {
                this.loading.isLoading = false
                this.table.rows = res.data.data
                this.table.totalRows = res.data.total

                this.loading.isLoading = false
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
                searchTerm: ''
            }
            this.initData(this.api.master_index)
        },

        liveSearch: function() {
            this.updateParams({page: 1})
            this.initData(this.api.master_index)
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        editCust: function(data) {
            var vm = this

            vm.modal.cust = data

            $('#cust_detail').show();
        },

        saveData: function() {

            // return console.log(this.modal.cust)
            var vm = this

            vm.loading.isLoading = true

            if(vm.modal.type == 'edit') {
                axios.put('/api/management/user/' + vm.modal.user.id, this.modal.user)
                .then( res => {
                    if (res.data.status == 'success')
                    {
                        toastr.success(res.data.message, 'Success!')
                        this.initData(this.api.master_index)
                        this.hideModal('user_detail')
                    }
                    else if (res.data.status == 'failed') {
                        toastr.error(res.data.message, 'Ooopss! Something went wrong')
                    }
                })
            } else if (vm.modal.type == 'add') {

                this.modal.user.is_ldap = this.modal.is_ldap

                axios.post('/api/management/user', this.modal.user)
                .then( res => {
                    if (res.data.status == 'success')
                    {
                        toastr.success(res.data.message, 'Success!')
                        this.initData(this.api.master_index)
                        this.hideModal('user_detail')
                    }
                    else if (res.data.status == 'failed') {
                        toastr.error(res.data.message, 'Ooopss! Something went wrong')
                    }
                })

            }  
        },

        fileUpload: function (event) {
            this.file = event.files[0]
            // this.modal.cust.logo = event.files[0]
        },

        doUpload: function () {

            let formData = new FormData()

            formData.append('file', this.file)

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                onUploadProgress: function( progressEvent ) {
                    this.progressBar = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                }.bind(this)
            }

            // var pg_id = this.modal.pg_data.pg_id

            swal({
                title: "Uploading File",
                text: "You Are Going to Upload " + this.modal.cust.name + " Logo. Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {

                    if(!this.file || this.file == "")
                    {
                        toastr.error('Please select file to start uploading')
                        return
                    }

                    axios.post(
                        '/api/management/customer/upload/logo/' + this.modal.cust.id, 
                        formData, config
                    )
                    .then((res) => {
                        setTimeout(() => {
                            if (res.data.status == 'success') {
                                this.initData(this.api.master_index)

                                toastr.success(res.data.message, 'Success')
                                // this.hideModal(type + '_modal')
                                this.modal.cust.logo = ''
                                this.$refs.file.value = ''

                                this.progressBar = 0

                                this.hideModal('cust_detail')
                                this.initData(this.api.master_index)
                            }
                        })
                    })
                } else {
                    toastr.info("Canceled")
                }
            })

        },

        /**
         * Datatable History - Server Side
         */

        handleDatatableChange: function(params) {
            this.loading.isLoading = true;
            return new Promise((resolve, reject) => {
                axios.get('/api/management/user', params)
                .then(res => {
                    this.table.rows = res.data.data
                    this.table.totalRows = res.data.total
                    resolve();
                })
                .catch(e => {
                    resolve();
                })
            })
        },

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
    }
}
</script>