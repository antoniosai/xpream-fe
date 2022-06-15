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

    ::v-deep .vgt-table thead th {
        background: #ffffff !important;
    }

    ::v-deep .flex-middle-default {
        text-align: center;
    }

    ::v-deep .tooltip-x {
        position: relative !important;
        display: inline-block !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x {
        visibility: hidden !important;
        width: 90px !important;
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
        margin-left: -50px !important;
        white-space: nowrap !important;
    }

    ::v-deep .tooltip-x:hover .tooltiptext-x {
        visibility: visible !important;
    }
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header ">
                    <div class="title-area">
                        <h3 class="title">{{ $route.meta.title }}</h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box"></div>
                </div>
                <div class="card-content">
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
                                    ref="table-list-cleansing"
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
                                    @on-selected-rows-change="selectionChanged"
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
                                            <div class="toolbar-item" style="margin-right: 10px;">
                                                <button v-on:click="handlerModalAddDraft()" class="button">
                                                    <i class='material-icons'>
                                                        add
                                                    </i>
                                                    Add New
                                                </button>                                                   
                                            </div>                                                 
                                        </div>
                                    </div>

                                    <template slot="table-row" slot-scope="props">
                                        <span v-if="props.column.field == 'PROGRESS'">
                                            <div v-if="props.formattedRow['PROGRESS'] === null || props.formattedRow['PROGRESS'] == ''" class="flex-middle-default">
                                                0%
                                            </div>
                                            <div v-else class="flex-middle-default">
                                                {{props.formattedRow[props.column.field]}}
                                            </div>
                                        </span>
                                        <span v-else-if="props.column.field == 'DRAFT_NAME'">
                                            <span v-if="props.formattedRow['PROGRESS'] === '100%'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>
                                            <span v-else>
                                                <a target="_blank" :href="`/trb/data_cleansing/${props.formattedRow[props.column.field]}`">{{props.formattedRow[props.column.field]}}</a>
                                            </span>
                                        </span>
                                        <span v-else-if="props.column.field == 'ACTION'">
                                            <div class="action tooltip-x" style="text-align: center; width: 100%;">
                                                <span class="tooltiptext-x">Delete Item</span>
                                                <i v-if="!grant_access" style="font-size: 10pt; font-weight: bold;" class="material-icons default">delete</i>
                                                <i v-else v-on:click="handlerDeleteItem(props.formattedRow['ID'])" style="font-size: 10pt; font-weight: bold;" class="material-icons danger">delete</i>
                                            </div>
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
                <!-- Modal Add Draft -->
                <div class="modal-box" id="modal-add-draft" data-keyboard="false" data-backdrop="static">
                    <div class="modal sm">
                        <span class="close" v-on:click="hideModal('modal-add-draft')"></span>
                            <div class="modal-header">
                                <h2 class="title">Add New Draft</h2>
                            </div>
                            <div class="modal-body" style="position: relative">
                                <div class="form-item">
                                    <div class="is-desc">Draft Name<span class="is-req">*</span></div>
                                    <input v-model="draft_name" value="" type="text"> 
                                </div>                                                                                                                         
                            </div>
                            <div class="modal-footer" style="">
                                <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-add-draft')">Close</button>
                                <button v-on:click="handlerAddDraft()" class="button is-success" type="submit" id="btn-add-draft"> Add New Draft </button>
                            </div>    
                    </div>
                </div>
                <!-- /Modal Add Draft -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import { VueGoodTable } from 'vue-good-table';
import FieldDraft from "./datatable/FieldDraft";
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-good-table/dist/vue-good-table.css'


export default {
    components: {
        Loading,
        VueGoodTable,
    },

    computed: {

    },

    data: () => ({
        hasAccess: false,
        grant_access: false,
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        datatable: {
            fields: FieldDraft,
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
                filter: {},
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        draft_name: "",
    }),

    mounted() {
        if(!this.$can('trb_data_cleansing')) {
            this.$router.push({name: 'access_denied'});
        }else {
            this.hasAccess = true;
            this.grant_access = true;
            this.initData();
        }
    },

    watch: {},

    methods: {

        initData:  function() {
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            this.loading.isLoading = true;

            axios.post('/api/data_cleansing/draft/list_draft', this.datatable.serverParams)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data !`)
                }

                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            })
        },

        handlerModalAddDraft: function() {
            this.draft_name = "";
            $('#modal-add-draft').modal('show');
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        handlerAddDraft: function() {
            if(this.draft_name == "") {
                toastr.warning("Draft name field is required");
                return;
            }

            this.handleButton('btn-add-draft', 'load').then(() => {
                axios.post('/api/data_cleansing/draft/add_new_draft', {
                    draft_name: this.draft_name,
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success');
                        this.hideModal('modal-add-draft');
                        this.$router.push({name: 'trb.data_cleansing', params: {draft_name: res.data.data}});
                    }else {
                        toastr.error(res.data.message)
                    }
                    this.handleButton('btn-add-draft', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-add-draft', 'stop');

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

        handlerDeleteItem: function(id) {
            swal({
                title: "Delete Item",
                text: "Are you sure that you want to delete this item?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {                    
                    this.loading.isLoading = true;
                    axios.get('/api/data_cleansing/draft/delete/' + id)
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.initData();
                        }else {
                            toastr.error(res.data.message);
                        }
                        this.loading.isLoading = false;

                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Undefined error");
                        this.loading.isLoading = false;
                    })
        
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
        },

        /**
         * Datatable - Server Side
         */
        onRefresh() {
            //this.datatable.serverParams.page
            this.updateParams({page: this.datatable.serverParams.page});
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
        selectionChanged(params) {
            this.datatable.selectedRows = [];
            for(let i = 0; i < params.selectedRows.length; i++) {
                this.datatable.selectedRows.push(params.selectedRows[i].ID);
            }
        },
        /**
         * load items is what brings back the rows from server
         */
        loadItems() {
            this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                this.loading.isLoading = false;
            });
            
        },
        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },
        

        handleDatatableChange: function(params) {
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {

                axios.post('/api/data_cleansing/draft/list_draft', params)
                .then(res => {
                    this.datatable.rows = res.data.data
                    this.datatable.totalRows = res.data.total
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
    }
}
</script>