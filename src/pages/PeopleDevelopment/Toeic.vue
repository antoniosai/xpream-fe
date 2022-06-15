<style scoped>
/* table */
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
    /* /table */

    ::v-deep .flex-middle-default {
        text-align: center;
    }

    ::v-deep .tooltip-x {
        position: relative !important;
        display: inline-block !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x {
        visibility: hidden !important;
        width: 100px !important;
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
                    <loading style="margin-top: 50px;"
                        :active.sync="loading.isLoading" 
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType">
                    </loading>
                    <vue-good-table
                        :columns="datatable.fields"
                        :rows="datatable.rows"
                        styleClass="vgt-table bordered striped"
                        :line-numbers="true"
                        :search-options="{
                            enabled: true,
                            trigger: 'keyup',
                            skipDiacritics: true,
                            placeholder: 'Fill to search'
                        }"
                        :pagination-options="{
                            enabled: true,
                            mode: 'pages',
                            perPage: 10,
                            position: 'bottom',
                            perPageDropdown: datatable.perPage,
                            dropdownAllowAll: true,
                            setCurrentPage: 1,
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
                                <div class="toolbar-item" style="margin-right: -10px;">
                                    <div v-on:click="handlerExportData()" class="single-button display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: 20px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                        <span class="tooltiptext-x">Export Excel</span>
                                        <i class="material-icons warning sync_order" >file_download</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <template slot="table-row" slot-scope="props">  
                            <span v-if="props.column.field == 'personnel_number'">
                                {{props.formattedRow[props.column.field]}}
                            </span>                                          
                            <span v-else-if="props.column.field == 'full_name'">
                                {{props.formattedRow[props.column.field]}}
                            </span>
                            <span v-else-if="props.column.field == 'start_date'">
                                {{props.formattedRow[props.column.field]}}
                            </span>
                            <span v-else-if="props.column.field == 'end_date'">
                                {{props.formattedRow[props.column.field]}}
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
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import { VueGoodTable } from 'vue-good-table';
import XLSX from 'xlsx';
import FieldToic from "./datatable/FieldToic.js";
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
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        datatable: {
            fields: FieldToic,
            rows: [],
            perPage: [10, 50, 100],
        },
        
    }),

    mounted() {
        if(!this.$can('p_dev_toeic')) {
            this.$router.push({name: 'access_denied'});
        }else {
            this.hasAccess = true;
            this.initData();
        }
    },

    watch: {},

    methods: {
        initData: function() {
            this.loading.isLoading = true;
            axios.get('/api/people_development/toeic/get_all_toeic')
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("No data available");
                }
                this.datatable.rows = res.data;
                this.loading.isLoading = false;
            })
            .catch(e => {
                this.loading.isLoading = false;
                toastr.error("Failed get TOEIC data");
            })
        },

        handlerExportData: function() {
            if(this.datatable.rows.length < 1) {
                toastr.warning("No data available");
                return;
            }

            this.handlerExport(this.datatable.rows, 'Data TOEIC TJ').then(() => {
                this.loading.isLoading = false;
            });
        },

        handlerExport: function(data, name) {
            return new Promise((resolve, reject) => {
                let tmp = XLSX.utils.json_to_sheet(data)                 
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.writeFile(wb, `data_toeic_tj.xlsx`)

                resolve();
            })
        },
    }
}
</script>