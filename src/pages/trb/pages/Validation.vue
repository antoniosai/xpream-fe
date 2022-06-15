<style scoped>
::v-deep .default-table{
    border: unset;
    padding: 0px 4px 1px 0px;
}

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
        <div class="card-header">
            <div class="title-area">
                <h3 class="title">Validation Clustering</h3>
            </div>
            <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Search By</span>
                    <select v-model="filter.type" id="search-by" >
                        <option  value="" disabled selected>Search By</option>
                        <option value="mpd">MPD Number</option>
                        <option value="rev">Rev Number</option>
                    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap;">Data</span> 
                    <input v-model="filter.data" id="data-search" name="search" placeholder=""> 
                    &emsp;
                    <button v-on:click="handleFindCluster()" style="height: 32px;" class="button" id="find-cluster">
                        <i class="material-icons">search</i>
                        Search
                    </button>
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
                            ref="tableValidation"
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
                            :select-options="{
                                enabled: true,
                                selectOnCheckboxOnly: true
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
                            @on-selected-rows-change="selectionChangedCluster"
                        >
                        <div slot="table-actions">
                            <div class="toolbar toolbar-default">
                                <div class="toolbar-left">
                                    <div class="toolbar-item toolbar-dropdown">
                                        <select v-model="form.status" id="sel-related"  name="update_status">
                                            <option value="">Update Status</option>
                                            <option value="Related JC">Related JC</option>
                                            <option value="Unrelated JC">Unrelated JC</option>
                                        </select>
                                        <button v-on:click="handleUpdateStatus()" class="button" type="button" id="update-status" disabled="">Update</button>
                                    </div>
                                    <div class="toolbar-item">
                                        <div v-on:click="handlerExportFeedback()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#28a745; margin-right: -2px; margin-left: -7px; padding-top: 6px;" tabindex="0">
                                            <span class="tooltiptext-x">Export Excel</span>
                                            <i class="material-icons warning sync_order" >file_download</i>
                                        </div>
                                    </div>
                                    <div class="toolbar-item">
                                        <div v-on:click="handleFindCluster()"  class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#0065FF; margin-right: 3px; margin-left: -5px; padding-top: 6px;    " tabindex="0">
                                            <span class="tooltiptext-x">Refresh</span>
                                            <i class="material-icons warning sync_order" >sync</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <template slot="table-row" slot-scope="props">
                            <span v-if="props.column.field == 'MDR'">
                                <div class="flex-middle">
                                    <i v-on:click="handlerDetailMaterial(props.formattedRow['MDR'])" class="material-icons warning sync" style="margin-left:10px">playlist_add</i> &nbsp;
                                    {{props.formattedRow[props.column.field]}}
                                </div>
                            </span>

                            <span v-else-if="props.column.field == 'STATUS'">
                                <span v-if="props.formattedRow['STATUS'] == 'Related JC'" class="is-label is-success">{{props.formattedRow[props.column.field]}}</span>
                                <span v-else-if="props.formattedRow['STATUS'] == 'Unrelated JC'" class="is-label is-danger">{{props.formattedRow['RELTO']}}</span>
                                <span v-else class="is-label is-warning">{{props.formattedRow[props.column.field]}}</span>
                            </span>

                            <span v-else>
                                {{props.formattedRow[props.column.field]}}
                            </span>
                        </template>
                        </vue-good-table>
                    </div>
                </template>
            </div>

            <!-- modal detail material -->
            <div class="modal-box" id="modal-detail-material">
                <div class="modal md">
                    <span class="close" v-on:click="hideModal('modal-detail-material')"></span>
                        <div class="modal-header">
                            <h2 class="title">Detail Material</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div>
                                <loading 
                                    :active.sync="loading.isLoadingDetailMaterial" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>
                            </div>
                            <table >
                                <tr>
                                    <td width="18%" class="default-table"> Order Number</td>
                                    <td class="default-table"> : </td>
                                    <td width="81%" class="default-table">
                                        <b><span id="det-order-number"></span></b>
                                    </td>
                                </tr>
                            </table>
                            <br>
                            <template>
                                <div>
                                    <vue-good-table
                                        :columns="detail_material.field"
                                        :rows="detail_material.rows"
                                        styleClass="vgt-table bordered striped"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill to search'
                                        }"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'records',
                                            perPage: 10,
                                            position: 'bottom',
                                            perPageDropdown: 10,
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
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-detail-material')">Close</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- modal detail material -->

            <!-- modal related to -->
            <div class="modal-box" id="modal-related-to">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-related-to')"></span>
                        <div class="modal-header">
                            <h2 class="title">Related To</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <input v-model="form.relto"  style="width: 100%" type="text" name="" id="">
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-related-to')">Close</button>
                            <button v-on:click="handlerSaveUnrelatedTask()" type="button" id="btn-save-unrelated" class="button">Save</button>
                        </div>
                </div>
            </div>
            <!-- /modal related to -->
        </div>
    </div>
</template>

<script>

import Loading from 'vue-loading-overlay';
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';

//vue-good
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';

import FieldValidation from '../datatable/FieldValidation';
import FieldDetailMaterial from '../datatable/FieldDetailMaterial';
import XLSX from 'xlsx';




export default {
    components: {
        Loading,
        VueGoodTable,
    },

    data: () => ({
        datatable: {
            fields: FieldValidation,
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
        loading: {
            isLoadingDetailMaterial: false,
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        form: {
            status: '',
            relto: '',
        },

        filter: {
            data: "",
            type: "",
        },

        detail_material: {
            rows: [],
            field: FieldDetailMaterial
        },
    }),

    mounted() {

    },

    methods: {

        findCluster: function() {
            if(!this.validationFindCluster()) return;

            this.loading.isLoading = true;
            return new Promise((resolve, reject) => {
                axios.post('/api/cluster/get_cluster', {
                    type: this.filter.type,
                    data: this.filter.data
                })
                .then(res => {
                    this.datatable.rows = res.data
                    resolve();
                })
                .catch(e => {
                    console.log("Error: "+e)
                    resolve();
                })
            })
        },

        handleFindCluster: function() {
            this.findCluster().then(()=> {
                this.loading.isLoading = false;
            })

        },

        handleUpdateStatus: function() {
            if(!this.updateValidation('sel-related', 'Related status')) return;

            if(this.form.status == "Unrelated JC") {
                this.form.relto = '';
                $("#modal-related-to").show();
            }else {
                this.form.relto = '';
                this.handlerSaveStatus().then(() => {
                    this.handleFindCluster();
                });
            }

        },

        handlerSaveStatus: function() {
            return new Promise((resolve, reject) => {
                axios.post('/api/cluster/update_status', {
                    mdr: this.datatable.selectedRows,
                    status: this.form.status,
                    relto: this.form.relto,
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        resolve();
                    }else {
                        toastr.error(res.data.message);
                        resolve();
                    }
                })
                .catch(e =>{
                    console.log("Error: "+e)
                    resolve();
                })
            })

        },

        handlerSaveUnrelatedTask: function() {
            if(this.form.relto == "") {
                toastr.warning("Related to cant be empty")
                return
            }

            this.handleButton('btn-save-unrelated', 'load').then(() => {
                this.handlerSaveStatus().then(() => {
                    setTimeout(()=> {
                        this.hideModal('modal-related-to');
                    }, 1000);
                    this.handleButton('btn-save-unrelated', 'stop');
                    this.handleFindCluster();
                })
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
                console.log(data);
                toastr.warning(type +' cant be empty '+data );
                return false;
            } 
            return true;
        },

        /**
         * Handle row selection
         * @param param object data from selected row
         */
        selectionChangedCluster(params) {
            this.datatable.selectedRows = [];
            for(let i = 0; i < params.selectedRows.length; i++) {
                this.datatable.selectedRows.push(params.selectedRows[i].MDR)
            }

            if(this.datatable.selectedRows.length > 0) {
                document.getElementById("update-status").disabled = false;
            }else {
                document.getElementById("update-status").disabled = true;
            }
        },

        validationFindCluster: function() {
            if(this.filter.type == "") {
                toastr.warning('Search type cant be empty');
                return false;
            }

            if(this.filter.data == "") {
                toastr.warning('Search data cant be empty');
                return false;
            }

            return true;
        },

        handlerDetailMaterial: function(order_number) {
            this.detail_material.rows = [];
            this.loading.isLoadingDetailMaterial = true;
            document.getElementById('det-order-number').innerHTML = order_number;

            axios.get(`/api/task/get_detail_material_valid/${order_number}`)
            .then( res => {
                this.detail_material.rows = res.data;
                this.loading.isLoadingDetailMaterial = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                this.loading.isLoadingDetailMaterial = false;
            })
            $('#modal-detail-material').show();
        },

        /**
         * Hide modal
         * @param modal_name String
         */
        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
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

        handlerExportFeedback: function() {
            if(!this.validationFindCluster()) return;
            this.loading.isLoading = true;
            axios.post(`/api/cluster/export_cluster`, {
                type: this.filter.type,
                data: this.filter.data
            })
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    return;
                }

                this.handlerExport(res.data, 'Cluster').then(() => {
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

                XLSX.utils.book_append_sheet(wb, tmp, 'Cluster') 
                XLSX.writeFile(wb, `${name}.xlsx`)

                resolve();
            })
        }
    }
}
</script>