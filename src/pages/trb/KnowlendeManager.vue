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

::v-deep .toolbar-default {
    margin-bottom: 0px !important;
}

::v-deep .is-data-label {
    display: inline-block;
    padding: 10px;
    height: 20px;
    width: 60px;
    color: white;
    font-size: 8pt !important;
    text-align: center;
}

::v-deep .is-data-success {
    background: green;
}

::v-deep .is-data-warning {
    background: #FFC107;
}

::v-deep .is-data-danger {
    background: red;
}

::v-deep input[type=checkbox]:hover {
    cursor: pointer !important;
}


::v-deep table td .is-label.is-focus, table th .is-label.is-focus {
    background: rgba(21,141,247,.07); 
    color: #158df7;
}

::v-deep table td .is-label.is-default, table th .is-label.is-default {
    background: #f3f3f3; 
    color: rgba(17,17,19,.85);
}

::v-deep input[type=file] {
    line-height: 0px !important;
}

::v-deep .notif {
    padding: 4px !important;
    border-radius: 5px !important;
    font-size: 12px !important;
    border: 1px solid #eaeaea !important;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07) !important;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07) !important;
    color: white !important;
    cursor: unset !important;
    font-weight: bold;
}

::v-deep .success-default {
    background-color: #0065FF !important;
}

::v-deep .danger-default {
    background-color: red !important;
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

</style>

<template>
    <div>
        <div class="content-header"></div>
         <div class="content-body">
            <div class="card">
                <div class="card-header ">
                    <div class="title-area">
                        <h3 class="title">
                            {{ $route.meta.title }}
                            <span v-if="datatable.serverParams.filter.status == ''" class="all">All</span>
                            <span v-else class="all">{{datatable.serverParams.filter.status}}</span>
                        </h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>
                                <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Status</span>
                    <select v-on:change="handlerFilter()" v-model="datatable.serverParams.filter.status" id="feedback-status">
                        <option value="" selected>All Status</option>
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected" >Rejected</option>
                    </select>
                </div>
                <div class="option-item">
                    <span  style="white-space: nowrap">Aircraft Type</span>
                    <select v-on:change="handlerFilter()" v-model="datatable.serverParams.filter.aircraft" id="feedback-aircraft">
                        <option value="">All Aircraft</option>
                        <option v-for="aircraft in aircrafts" :key="aircraft.ID" v-bind:value="aircraft.ID">{{ aircraft.AIRCRAFT }}</option>
                    </select>
                </div>
            </div>

                </div>
                <div class="card-content">
                    <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                        <div>
                            <loading
                                :active.sync="loading.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                        </div>
                        <template>
                            <div class="knowledge">
                                <vue-good-table
                                    ref="tableKnowledge"
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
                                        enabled: true,
                                        initialSortBy: {
                                            field: 'ID',
                                            type: 'desc',
                                        }
                                    }"
                                    :select-options="{ 
                                        enabled: true,
                                        selectOnCheckboxOnly: true
                                    }"
                                    @on-selected-rows-change="selectionChanged"
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
                                            <div class="toolbar-item toolbar-dropdown" style="position: relative">
                                                <select v-model="form.status" name="update_approval" id="sel-status">
                                                    <option value="">Update Status</option>
                                                    <option value="APPROVED">APPROVED</option>
                                                    <option value="REJECTED">REJECTED</option>
                                                </select>
                                                <button v-on:click="handleUpdateStatus()" class="button" type="button" id="update_status" disabled="disabled">Update</button>
                                            </div>
                                            <div class="toolbar-item">
                                                <div v-on:click="syncDataKnowledge()" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <template slot="table-row" slot-scope="props">
                                    <span v-if="props.column.field == 'STATUS'">
                                        <div style="width: 100%; text-align: center;">
                                            <span v-if="props.formattedRow['STATUS'] == 'APPROVED'" class="is-label is-success">{{props.formattedRow[props.column.field]}}</span>
                                            <span  v-if="props.formattedRow['STATUS'] == 'PENDING'" class="is-label is-warning">{{props.formattedRow[props.column.field]}}</span>
                                            <span v-if="props.formattedRow['STATUS'] == 'REJECTED'" class="is-label is-danger">{{props.formattedRow[props.column.field]}}</span>
                                        </div>
                                    </span>
                                    <span v-else-if="props.column.field == 'LINK'">
                                        <a :href="props.formattedRow['LINK']" target="_blank">{{props.formattedRow['LINK'].substring(0, 70)}}</a>
                                    </span>
                                     <span v-else-if="props.column.field == 'CREATED_AT'">
                                         {{props.formattedRow['CREATED_AT'].substring(0, 16)}}
                                    </span>
                                    <span v-else-if="props.column.field == 'ACTION'">
                                        <div style="text-align: center; width: 100%;" class="action tooltip-x">
                                            <span class="tooltiptext-x">Edit Data</span>
                                            <i v-on:click="handlerModalEditLink(props.formattedRow)"  class="material-icons success">
                                                edit
                                            </i>
                                        </div>
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
        <!-- modal edit link -->
        <div class="modal-box" id="modal-edit-link" data-keyboard="false" data-backdrop="static">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-edit-link')"></span>
                    <div class="modal-header">
                        <h2 class="title">Edit Knowledge</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <div class="form-item">
                                <label>File Type <span class="is-req">*</span></label>
                                <select v-model="edt.type">
                                    <option selected disabled value="">Link Type</option>
                                    <option value="Video">Video</option>
                                    <option value="Image">Image</option>
                                    <option value="Other">Other</option>    
                                </select>
                                
                            </div>
                            <div class="form-item">
                                <label>File Link <span class="is-req">*</span> <span class="is-desc"></span></label>
                                <textarea v-model="edt.link"  placeholder="Please enter a valid link"  cols="30" rows="5"></textarea>
                            </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-edit-link')">Close</button>
                        <button v-on:click="handlerEditKnowledge()" class="button is-success" type="submit" id="btn-edit-knowledge"> Save </button>

                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- /modal edit link -->
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import axios from 'axios'
import 'vue-loading-overlay/dist/vue-loading.css'

//vue-good
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import FieldKnowledge from './datatable/FieldKnowledge'

export default {

    data: () => ({
        aircrafts: [],
        datatable: {
            fields: FieldKnowledge,
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
                    status: '',
                    aircraft: '',
                }
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        form: {
            status: '',
        },

        edt: {
            type: "",
            link: "",
            id: "",
        }
    }),

    components: {
        Loading,
        VueGoodTable,
    },


    mounted() {
        this.initAircraft();
        // this.initData();
    },

    methods: {
        initAircraft: function() {
            axios.get('/api/aircraft/get_aircraft')
            .then( res => {
                this.aircrafts = res.data.data
            })
        },

        initData: function() {
            this.loading.isLoading = false;
            axios.post('/api/knowledge/get_knowledge')
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
         * Handle row selection
         * @param param object data from selected row
         */
        selectionChanged(params) {
            this.datatable.selectedRows = [];
            for(let i = 0; i < params.selectedRows.length; i++) {
                this.datatable.selectedRows.push(params.selectedRows[i].ID)
            }

            if(this.datatable.selectedRows.length > 0) {
                document.getElementById("update_status").disabled = false;
            }else {
                document.getElementById("update_status").disabled = true;
            }
        },

        /**
         * Handle datatable request change
         */
        handleDatatableChange: function(params) {
            this.loading.isLoading = true;
            return new Promise((resolve, reject) => {
                axios.post('/api/knowledge/get_knowledge', params)
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

        handlerAttachment: function(data) {
            window.open(data, "_blank");
        },

        handlerFilter: function() {
            this.loading.isLoading = true;
            this.datatable.serverParams.page = 1;
            axios.post('/api/knowledge/get_knowledge', this.datatable.serverParams)
            .then(res => {
                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },
        syncDataKnowledge: function() {
            this.datatable.serverParams.searchTerm = '';
            this.datatable.serverParams.page = 1;
            this.datatable.serverParams.filter.status = "";
            this.datatable.serverParams.filter.aircraft = "";
            this.form.status = "";
            this.initData();
            this.$refs['tableKnowledge'].reset();
        },
        /**
         * Handle update status from selected row
         */
        handleUpdateStatus: function() {
            if(!this.updateValidation('sel-status', 'Knowledge status')) return;
            axios.post('/api/knowledge/update_status_knowledge', {
                id_knowledge: this.datatable.selectedRows,
                status: this.form.status
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.syncDataKnowledge();
                }else {
                    toastr.error(res.data.message);
                }
            })
            .catch(e =>{
                console.log("Error: "+e)
            })
        }, 

        /**
         * Handle validation for update data
         * @param field String field id
         * @param type String 
         */
        updateValidation: function(field, type) {
            let data = document.getElementById(field).value;
            if(data == "") {
                toastr.warning(type +' cant be empty');
                return false;
            } 
            return true;
        },

        handlerModalEditLink: function(props) {
            this.edt.id = props.ID;
            this.edt.type = props.TYPE;
            this.edt.link = props.LINK;
            $("#modal-edit-link").modal("show");
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        handlerEditKnowledge: function() {
            if(!this.validation()) return;

            this.handleButton('btn-edit-knowledge', 'load').then(() => {
                axios.post('/api/knowledge/update_knowledge', {
                    id: this.edt.id,
                    type: this.edt.type,
                    link: this.edt.link,
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        this.initData();

                        setTimeout(()=> {
                            this.hideModal('modal-edit-link');
                        }, 500)



                    }else {
                        toastr.error(res.data.message);
                    }

                    this.handleButton('btn-edit-knowledge', 'stop');

                })
                .catch(e => {
                    toastr.error("Undefined error");
                    console.log("Error: " + e);
                    this.handleButton('btn-edit-knowledge', 'stop');

                })
            })
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
                    element.className = "button is-success";
                    element.disabled = false;
                    resolve();
                }
            })
        },

        validation: function() {
            if(this.edt.type == "") {
                toastr.warning("Field type can't be empty");
                return false;
            }

            if(this.edt.link == "") {
                toastr.warning("Field link can't be empty");
                return false;
            }

            return true;
        }

    }
}
</script>
