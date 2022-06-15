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
                :rows="table.rows.map(d => {
                    let temp = {}
                    temp = d
                    temp['collapse'] = false
                    return temp
                })"
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
                                <button class="button is-success" v-on:click="syncModal">Sync SAP->CRM</button>
                            </div>
                            <div class="toolbar-item">
                                <button v-on:click="syncgsmartmrev()" class="button is-success">Sync Gsmart & M_REVISION->XPREAM</button>
                            </div>
                            <div class="toolbar-item">
                                <button v-on:click="forbiddenTimeModal('show')" class="button is-danger"><i class="fa fa-ban"></i> Forbidden Time</button>
                            </div>           
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
                    <span v-else-if="props.column.field == 'sync_xpream_mrm'">
                        
                        <span v-if="props.formattedRow['sync_xpream_start_mrm_getfromcrm'] !== null">
                            <button style="height:20px;" @click="props.row.collapse = !props.row.collapse">details</button><br>
                            <span v-show="props.row.collapse">
                            <tr>
                                <th>Action</th>
                                <th>Start</th>
                                <th>Finish</th>
                                <th>Duration</th>
                                <th>Message</th>
                            </tr>
                            <tr>
                                <td>Get data JC/MDR<br>from DB_CRM</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_start_mrm_getfromcrm']) }}</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_finish_mrm_getfromcrm']) }}</td>
                                <td>{{ diffMinutes(props.formattedRow['sync_xpream_finish_mrm_getfromcrm'] , props.formattedRow['sync_xpream_start_mrm_getfromcrm']) }}</td>
                                <td>{{ props.formattedRow['sync_xpream_mrm_getfromcrm_log'] }}</td>
                            </tr>
                            <tr>
                                <td>Merge data JC/MDR<br>to XPREAM</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_start_mrm']) }}</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_mrm']) }}</td>
                                <td>{{ diffMinutes(props.formattedRow['sync_xpream_mrm'] , props.formattedRow['sync_xpream_start_mrm']) }}</td>
                                <td>{{ props.formattedRow['sync_xpream_mrm_log'] }}</td>
                            </tr>
                            <tr>
                                <td>Get data pdsheet<br>from DB_CRM</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_start_mrm_pds_getfromcrm']) }}</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_finish_mrm_pds_getfromcrm']) }}</td>
                                <td>{{ diffMinutes(props.formattedRow['sync_xpream_finish_mrm_pds_getfromcrm'] , props.formattedRow['sync_xpream_start_mrm_pds_getfromcrm']) }}</td>
                                <td>{{ props.formattedRow['sync_xpream_mrm_pds_getfromcrm_log'] }}</td>
                            </tr>
                            <tr>
                                <td>Merge data pdsheet<br>to XPREAM</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_start_mrm_pds']) }}</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_mrm_pds']) }}</td>
                                <td>{{ diffMinutes(props.formattedRow['sync_xpream_mrm_pds'] , props.formattedRow['sync_xpream_start_mrm_pds']) }}</td>
                                <td>{{ props.formattedRow['sync_xpream_mrm_pds_log'] }}</td>
                            </tr>
                            <tr>
                                <td>Get data Sloc & <br>Wctr from DB_CRM</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_start_mrm_sloc_getfromcrm']) }}</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_finish_mrm_sloc_getfromcrm']) }}</td>
                                <td>{{ diffMinutes(props.formattedRow['sync_xpream_finish_mrm_sloc_getfromcrm'] , props.formattedRow['sync_xpream_start_mrm_sloc_getfromcrm']) }}</td>
                                <td>{{ props.formattedRow['sync_xpream_mrm_sloc_getfromcrm_log'] }}</td>
                            </tr>
                            <tr>
                                <td>Update data Sloc & <br>Wctr to XPREAM</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_start_mrm_sloc']) }}</td>
                                <td>{{ datetimeConverter(props.formattedRow['sync_xpream_mrm_sloc']) }}</td>
                                <td>{{ diffMinutes(props.formattedRow['sync_xpream_mrm_sloc'] , props.formattedRow['sync_xpream_start_mrm_sloc']) }}</td>
                                <td>{{ props.formattedRow['sync_xpream_mrm_sloc_log'] }}</td>
                            </tr> 
                            </span>                          
                        </span>
                    </span>
                    <span v-else>
                        <div class="flex-middle-default">
                            {{props.formattedRow[props.column.field]}}
                        </div>
                    </span>



                </template>                
            </vue-good-table>


        </div>

        <!-- Modal Forbidden Time -->
        <div class="modal-box" id="modal-forbidden-time">
            <div class="modal sm">
                <span class="close" v-on:click="forbiddenTimeModal('hide')"></span>
                    <div class="modal-header">
                        <h2 class="title">Forbidden Time to Sync</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <div class="alert is-warning" style="background-color: #ffc107">
                            <p>
                                <i class="fa fa-exclamation-triangle"></i> You Are Not Allowed to Sync <strong><i>SAP to CRM</i></strong> while is executed Auto-Sync in certain time.
                            </p>
                        </div>
                        <div class="container">
                            <div class="table-responsive">
                                <table class="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Time</th>
                                            <th>Start</th>
                                            <th>Until</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(forbidden_time, index) in forbidden_times" :key="index">
                                            <td>{{ index+1 }}</td>
                                            <td>{{ forbidden_time.exec_time }}</td>
                                            <td class="is-forbidden">{{ forbidden_time.start }}</td>
                                            <td class="is-forbidden">{{ forbidden_time.finish }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="forbiddenTimeModal('hide')">Close</button>
                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- End Modal Forbidden Time -->

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
        forbidden_times: [],
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
                {
                    label: '',
                    field: 'collapse',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_start_mrm_getfromcrm',
                    hidden: true
                },   
                {
                    label: '',
                    field: 'sync_xpream_finish_mrm_getfromcrm',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_mrm_getfromcrm_log',
                    hidden: true
                },  
                {
                    label: '',
                    field: 'sync_xpream_start_mrm',
                    hidden: true
                },   
                {
                    label: '',
                    field: 'sync_xpream_mrm',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_mrm_log',
                    hidden: true
                },  
                {
                    label: '',
                    field: 'sync_xpream_start_mrm_pds_getfromcrm',
                    hidden: true
                },   
                {
                    label: '',
                    field: 'sync_xpream_finish_mrm_pds_getfromcrm',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_mrm_pds_getfromcrm_log',
                    hidden: true
                },  
                {
                    label: '',
                    field: 'sync_xpream_start_mrm_pds',
                    hidden: true
                },   
                {
                    label: '',
                    field: 'sync_xpream_mrm_pds',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_mrm_pds_log',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_start_mrm_sloc_getfromcrm',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_finish_mrm_sloc_getfromcrm',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_mrm_sloc_getfromcrm_log',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_start_mrm_sloc',
                    hidden: true
                },   
                {
                    label: '',
                    field: 'sync_xpream_mrm_sloc',
                    hidden: true
                },
                {
                    label: '',
                    field: 'sync_xpream_mrm_sloc_log',
                    hidden: true
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
                perPage: 30,
                search_query: '',
                searchTerm: ''
            },
            perPageDropDown: [30, 50, 100],

        },
    }),

    mounted() {
        this.initData()
        this.getForbbidenTime();
    },

    methods: {

        getForbbidenTime: function() {
            axios.get('/api/sync/forbidden_time')
            .then( res => {
                this.forbidden_times = res.data;
            })
        },

        datetimeConverter: function(dt) {
            if(dt == null) {
                return null
            }
            if(dt == '0000-00-00 00:00:00.000') {
                return null
            }
            var a = new Date(dt)
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            var year = a.getFullYear()
            var month = months[a.getMonth()]
            var date = a.getDate()
            var hour = a.getHours()
            var min = a.getMinutes()
            if (date < 10) {
                date = '0' + date
            }
            if (hour < 10) {
                hour = '0' + hour
            }
            if (min < 10) {
                min = '0' + min
            }
            var sec = a.getSeconds()
            if (sec < 10) {
                sec = '0' + sec
            }   
            if (!isNaN(year)) {
                var time = hour + ':' + min + ':' + sec
                return time
            } else {
                return null
            }
        },

        diffMinutes(dt1, dt2) {
            if(dt1 == null || dt2 == null) {
                return null
            }
            if(dt1 == '0000-00-00 00:00:00.000' || dt1 == '0000-00-00 00:00:00.000') {
                return null
            }
            if (!isNaN(new Date(dt1).getFullYear()) && !isNaN(new Date(dt2).getFullYear())) {
                var a = (new Date(dt1) - new Date(dt2)) / (1000)
                if(a>=0) {
                    return a.toFixed(0) + ' sec'
                }
                
            } else {
                return null
            }
        },

        initData: function() {
            this.loading.isLoading = true

            let params = this.table.serverParams

            axios.post('/api/activity_log/rfc_log', { params })
            .then( res => {
                this.table.rows = res.data.data
                this.table.totalRows = res.data.total
                this.loading.isLoading = false
            })
        },

        resetForm: function() {
            this.updateParams({page: this.table.serverParams.page});
            this.loadItems();
        },

        syncgsmartmrev: function () {
            
            swal({
                title: "You Are Going to Sync Data from M_REVISION & Gsmart",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {

                    this.loading.isLoading = true

                    const config = {
                        onDownloadProgress: function( progressEvent ) {
                            let progressBar = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))

                            this.loading.progressBar = progressBar

                            console.log(progressBar)
                        }.bind(this)
                    }

                    axios.post('/api/sync', {}, config)
                    .then( res => {
                        if(res.data.status == 'success') {
                            this.loading.isLoading = false
                            this.initData()
                            toastr.options.progressBar = true;

                            toastr.success('CRM INFO & GSMART Successfully Synced', 'Success',  {timeOut: 3000})
                    
                            
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

        syncModal: function() {
            swal({
                title: 'Syncronize',
                text: 'Input by Revision Number',
                content: "input",
                button: {
                    text: "Execute Job",
                    closeModal: true,
                },
            })
            .then(revnr => {
                if (!revnr) throw null;

                axios.post('/api/sync/create_bgjob', {revnr: revnr})
                .then( res => {
                    if(res.data.success == 1) {
                        swal("Success!", res.data.message, "success");
                        this.resetForm();
                    } else {
                        swal({
                            title: res.data.title ? res.data.title : "Something Wrong",
                            text: res.data.message,
                            icon: "warning",
                        });
                        // toastr.error(res.data.message, "Oppss!!")
                    }
                    
                })
            })
            .catch(err => {
                if (err) {
                    swal("request failed!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
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

        forbiddenTimeModal: function(action) {
            $('#modal-forbidden-time').modal(action)
        },

    },
}
</script>


<style scoped>
 .is-forbidden {
     /* background-color: #fff350; */
     font-weight: bold;
     color: #ff5722;
 }
</style>