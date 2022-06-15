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

    ::v-deep .action > i {
        padding: 5px;
        background: #fff;
        border-radius: 5px;
        font-size: 18px;
        border: 1px solid #eaeaea;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        cursor: pointer;
    }

    ::v-deep .action > i.warning {
        color: #ffc107;
    }

    ::v-deep .action > i.warning:hover {
        background-color: #ffc107;
        color: white;
    }

    ::v-deep .action > i.success {
        color: #13CE66;
    }

    ::v-deep .action > i.primary {
        color: #026396;
    }

    ::v-deep .action > i.success:hover {
        background-color: #13CE66;
        color: white;
    }

    ::v-deep .action > i.primary:hover {
        background-color: #026396;
        color: white;
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
        width: 100% !important;
        background-color: black !important;
        color: #fff !important;
        text-align: center !important;
        border-radius: 6px !important;
        padding: 5px 50px 3px 20px !important;
        
        /* Position the tooltip */
        position: absolute !important;
        z-index: 1 !important;
        bottom: 100% !important;
        /* left: 50% !important; */
        margin-left: -36px !important;
        white-space: nowrap !important;
    }

    ::v-deep .tooltip-x:hover .tooltiptext-x {
        visibility: visible !important;
    }

    ::v-deep .centerize {
        text-align: center
    }

        ::v-deep .tooltip-x {
        position: relative !important;
        display: inline-block !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x {
        visibility: hidden !important;
        width: 110px !important;
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

            <div class="is-row">
                <div class="is-col">
                    <div class="card">
                        <div class="card-header">
                            <div class="title-area">
                                <h3 class="title">{{ $route.meta.title }}</h3>
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
                                            ref="tableWorkcenter"
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
                                            :line-numbers="true"
                                            :select-options="{ 
                                                enabled: false,
                                                selectOnCheckboxOnly: true
                                            }"
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
                                                <div class="toolbar-item" style="margin-right: 8px;">
                                                    <div v-on:click="handlerExportData()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; padding-top: 6px;" tabindex="0">
                                                        <span class="tooltiptext-x">Export Excel</span>
                                                        <i class="material-icons warning sync_order" >file_download</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'phone'">
                                                <span v-if="props.formattedRow['phone'] != '' && props.formattedRow['phone'] != null">
                                                    +62 {{props.formattedRow['phone']}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'whatsapp'">
                                                <div style="text-align: center;" v-if="props.formattedRow['phone'] != '' && props.formattedRow['phone'] != null" class="action tooltip-x">
                                                    <span class="tooltiptext-x">Chat</span>
                                                    <i v-on:click="handlerWA(props.formattedRow['phone'])" class="material-icons success edit-user">chat</i> 
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
import FieldCallUs from './datatable/FieldCallUs';
import XLSX from 'xlsx';

export default {

    components: {
        Loading,VueGoodTable
    },

    data: () => ({
        datatable: {
            fields: FieldCallUs,
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
                filter: {}
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
    }),
    mounted() {
        this.initData();
    },

    methods: {
        initData: function() {
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            this.loading.isLoading = true;
            axios.post('/api/management/callus/all', this.datatable.serverParams)
            .then(res => {
                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " +e);
                toastr.error("Failed get data");
                this.loading.isLoading = false;
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

                axios.post('/api/management/callus/all', params)
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

        handlerWA: function(phone) {
            window.open(`https://wa.me/62${phone}`);
        },

        handlerExportData: function() {
            this.loading.isLoading = true;
            axios.get(`/api/management/callus/export`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("No data available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'Master Call Us').then(() => {
                    this.loading.isLoading = false;
                });
            })
            .catch(e => {
                console.log("Error: " + e);
                this.loading.isLoading = false;
                toastr.error("Undefined error")
            })
        },

        handlerExport: function(data, name) {
            return new Promise((resolve, reject) => {
                let tmp = XLSX.utils.json_to_sheet(data)                 
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.writeFile(wb, `master_call_us.xlsx`)

                resolve();
            })
        },
    },
}
</script>
