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
                            <span v-if="datatable.serverParams.filter.type == ''" class="all">All Type</span>
                            <span v-else class="all">{{datatable.serverParams.filter.type}}</span>
                        </h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box">
                         <div class="option-item">
                            <span style="white-space: nowrap">Type</span>
                            <select  v-model="datatable.serverParams.filter.type" id="quotation-type">
                                <option  value="" selected>All Type</option>
                                <option  value="Maintenance Quotation" >Maintenance Quotation</option>
                            </select>
                        </div>
                        <div class="option-item">
                            <span style="white-space: nowrap">State</span>
                            <select  v-model="datatable.serverParams.filter.state" id="quotation-state">
                                <option  value="" selected>All State</option>
                                <option  value="Draft" >Draft</option>
                                <option  value="Published" >Published</option>
                                <option  value="Rejected" >Rejected</option>
                                <option  value="Cancelled" >Cancelled</option>
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
                            <div class="feedback">
                                <vue-good-table
                                    ref="tableFeedback"
                                    :columns="datatable.fields"
                                    :rows="datatable.rows"  
                                    styleClass="vgt-table bordered striped"
                                    mode="remote"
                                    max-height="510px"
                                    :select-options="{
                                        enabled: true,
                                        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                                        selectionInfoClass: 'custom-class',
                                        selectionText: 'rows selected',
                                        clearSelectionText: 'clear',
                                        disableSelectInfo: true, // disable the select info panel on top
                                    }"
                                    :search-options="{
                                        enabled: true,
                                        trigger: 'enter',
                                        skipDiacritics: true,
                                        placeholder: 'Fill and enter to search',
                                        
                                    }"
                                    :sort-options="{
                                        enabled: true,
                                        initialSortBy: {
                                            field: 'QUOTATION_NUMBER',
                                            type: 'desc',
                                        }
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
                                        <div class="toolbar-item" style="padding-right: 12px;">
                                            <button v-on:click="handlerModalNewQuotation()" class="button is-success">New Quotation</button>
                                        </div>
                                        <div class="toolbar-left">
                                            <div class="toolbar-item">
                                                <div v-on:click="syncDataFeedback()" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <template slot="table-row" slot-scope="props">
                                </template> -->
                                </vue-good-table>
                            </div>
                        </template>
                        
                    </div>
                </div>
            </div>

            <!-- modal new quotation -->
            <div class="modal-box" id="modal-new-quotation">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-new-quotation')"></span>
                        <div class="modal-header">
                            <h2 class="title">New Quotation</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div style="padding-bottom: 10px;">
                                <label for="">Sales Group<span class="is-req">*</span></label>
                                <select v-on:change="handlerChangeGroup()" v-model="form.sales_group" style="width: 100%;"  name="" id="">
                                    <option selected disabled value="">Sales Group</option>
                                    <option v-for="sales in sales_groups" :key="sales.ID" v-bind:value="sales.ID">{{ sales.SALES_NAME }}</option>
                                </select>
                            </div>
                            <!-- <div>
                                <label class="is-checkbox">
                                    <div class="checkbox">
                                        <label>
                                            <input disabled type="checkbox" checked true-value="y" false-value="n" ><span> Auto Quotation Number</span>
                                        </label>
                                    </div>
                                </label>
                            </div> -->
                            <div style="padding-bottom: 10px;">
                                <label>Quotation Number <span class="is-req">*</span></label>
                                <input disabled v-model="form.quotation_number" style="width: 100%;" type="text">
                            </div>
                            <div style="padding-bottom: 10px;">
                                <label for="">Quotation Type<span class="is-req">*</span></label>
                                <select v-model="form.quotation_type" style="width: 100%;"  name="" id="">
                                    <option selected disabled value="">Quotation Type</option>
                                    <option  value="Maintenance">Maintenance</option>
                                </select>
                            </div>
                            <div style="padding-bottom: 10px;">
                                <label for="">Title<span class="is-req">*</span></label>
                                <textarea v-model="form.quotation_title" style="width: 100%;" name="" id="" cols="30" rows="4"></textarea>
                            </div>
                            <div style="padding-bottom: 10px;">
                                <label>Customer<span class="is-req">*</span></label>
                                <div class="is-row">
                                    <div class="is-col is-30">
                                        <!-- kode customer -->
                                        <input v-model="form.customer_code" v-on:click="handlerModalCustomer()" style="width: 100%;" type="text">
                                    </div>
                                    <div class="is-col is-70">
                                        <input v-model="form.customer_name"  disabled style="width: 100%;" type="text">
                                        <input v-model="form.customer_id" type="hidden" name="" id="">
                                    </div>
                                </div>
                            </div>
                            <div style="padding-bottom: 10px; margin-top: -20px">
                                <label>Issued By<span class="is-req">*</span></label>
                                <div class="is-row">
                                    <div class="is-col is-30">
                                        <!-- nomor pegawai -->
                                        <input v-on:change="handlerFindUserName()" v-model="form.issued_by" style="width: 100%;" type="text">
                                    </div>
                                    <div class="is-col is-70">
                                        <input v-model="form.username" disabled style="width: 100%;" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-new-quotation')">Close</button>
                            <button class="button" v-on:click="handlerNewQuotation()" type="button" id="btn-save-quotation"> Save</button>

                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal new quotation -->

            <!-- modal select customer -->
            <div class="modal-box" id="modal-select-customer">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-select-customer')"></span>
                        <div class="modal-header">
                            <h2 class="title">Customer List</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                                <div>
                                    <loading    
                                        :active.sync="loading.isLoadingCustomer" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading>
                                        <template>
                                            <div>
                                                <vue-good-table
                                                    :columns="customer.fields"
                                                    :rows="customer.rows"
                                                    @on-row-dblclick="onRowCustDoubleClick"
                                                    styleClass="vgt-table bordered striped condensed"
                                                    max-height="388px"  
                                                    :sort-options="{
                                                        enabled: true,
                                                        initialSortBy: {field: 'cus_code', type: 'desc'}
                                                    }"                                        
                                                    :search-options="{
                                                        enabled: true,
                                                        trigger: 'keyup',
                                                        skipDiacritics: true,
                                                        placeholder: 'Fill to search'
                                                    }"
                                                    :pagination-options="{
                                                        enabled: true,
                                                        mode: 'records',
                                                        perPage: -1,
                                                        position: 'bottom',
                                                        perPageDropdown: datatable.perPage,
                                                        dropdownAllowAll: true,
                                                        setCurrentPage: 1,
                                                        nextLabel: 'Next',
                                                        prevLabel: 'Prev',
                                                        rowsPerPageLabel: 'Rows per page',
                                                        ofLabel: 'of',
                                                        pageLabel: 'page', // for 'pages' mode
                                                        allLabel: 'All',
                                                    }"
                                                >
                                                </vue-good-table>
                                            </div>
                                        </template>
                                        <label for=""><span style="font-size: 8pt!important; " class="is-req">*Double click to select item.</span></label>
                                </div>                                
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-select-customer')">Close</button>
                        </div>
                </div>
            </div>
            <!-- /modal select customer -->
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

import FieldQuotation from "./datatable/FieldQuotation.js";
import FieldCustomer from "./datatable/FieldCustomer.js";

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
        sales_groups: [],
        datatable: {
            fields: FieldQuotation,
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
                    type: '',
                    state: '',
                }
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },

        customer: {
            fields: FieldCustomer,
            rows: []
        },

        loading: {
            isLoading: false,
            isLoadingCustomer: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        form: {
            issued_by: '',
            username: '',
            customer_id: '',
            customer_code: '',
            customer_name: '',
            quotation_number: '',
            quotation_type: '',
            sales_group: '',
            quotation_title: ''
        },
    }),

    mounted() {

    },

    watch: {},

    methods: {

        initSalesGroup: function(){
            axios.get('/api/sales/get_all_sales')
            .then(res => {
                this.sales_groups = res.data;
            })
        },

        initQuotationNumber: function(id){
            axios.get('/api/quotation/generate_quotation_number/' + id)
            .then(res => {
                this.form.quotation_number = res.data;
            })
        },

        /**
         * Hide modal
         * @param modal_name String
         */
        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        handlerModalNewQuotation: function() {
            this.initSalesGroup();  
            $("#modal-new-quotation").show();
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
                document.getElementById("update_approval").disabled = false;
            }else {
                document.getElementById("update_status").disabled = true;
                document.getElementById("update_approval").disabled = true;
            }
        },

        /**
         * Handle datatable request change
         */
        handleDatatableChange: function(params) {
            this.loading.isLoading = true;
            return new Promise((resolve, reject) => {
                axios.post('', params)
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

        handlerNewQuotation: function(){
            let data_validation = [
                {'element': this.form.sales_group, 'type' : 'Sales group',},
                {'element': this.form.quotation_number    , 'type' : 'Quotation number' },
                {'element': this.form.quotation_type, 'type' : 'Quotation type'},
                {'element': this.form.quotation_title, 'type' : 'Quotation title'},
                {'element': this.form.customer_id, 'type' : 'Customer'},
                {'element': this.form.username, 'type' : 'Issued by'},
            ];
            if(!this.validationNewQuotation(data_validation)) return;

            this.handleButton('btn-save-quotation', 'load').then(() => {
                axios.post('/api/quotation/add_quotation', {
                    CUSTOMER_ID: this.form.customer_id,
                    ISSUED_BY: this.form.issued_by,
                    SALES_ID: this.form.sales_group,
                    QUOTATION_NUMBER: this.form.quotation_number,
                    QUOTATION_TYPE: this.form.quotation_type,
                    TITLE: this.form.quotation_title
                })
                .then(res => {
                    if(res.data.success) {
                        let quotation_number =res.data.data.split("/").join("-");
                        toastr.success(res.data.message);
                        setTimeout(() => {
                            window.open(`/trb/detail_quotation/${quotation_number}/0`, '_self');
                        }, 800)
                    }else {
                        toastr.warning(res.data.message);
                    }
                    this.handleButton('btn-save-quotation', 'stop');
                })
                .catch(e => {
                    console.log("Error " +e);
                    this.handleButton('btn-save-quotation', 'stop');
                })
            });


        },

        handlerFindUserName: function(){
            axios.get('/api/gsmart/get_user_name/' + this.form.issued_by)
            .then(res => {
                if(res.data.hasOwnProperty('USER_NAME')) {
                    this.form.username = res.data.USER_NAME;
                }else {
                    this.form.username = '';
                    toastr.warning('Employee not found');
                }
            }) 
        },

        handlerModalCustomer: function(){
            this.customer.rows = [];
            this.loading.isLoadingCustomer = true;
            $("#modal-select-customer").show();
            this.handlerFindCustomer().then(() => {
                this.loading.isLoadingCustomer = false;
            })

        },

        handlerFindCustomer: function(){
            return new Promise((resolve, reject) => {
                axios.get('/api/gsmart/get_customer')
                .then(res => {
                    this.customer.rows = res.data;
                    resolve();
                })
                .catch(e => {
                    console.log("Error " + e);
                    resolve();
                })
            });
        },

        /**
         * Handle row selection
         * @param param object data from selected row
         */
        onRowCustDoubleClick(params) {
            this.form.customer_id = params.row.cus_id
            this.form.customer_code = params.row.cus_code
            this.form.customer_name = params.row.cus_name

            this.hideModal('modal-select-customer');
        },

        handlerChangeGroup: function() {
            this.initQuotationNumber(this.form.sales_group);
        },

        validationNewQuotation: function(elements) {
            for(let i = 0; i < elements.length; i++) {
                if(elements[i].element == "") {
                    toastr.warning(elements[i].type + ' cant be empty');
                    return false;
                }
            }
            return true;  
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
                    element.className = "button";
                    element.disabled = false;
                    resolve();
                }
            })
        },
    }

}



</script>
