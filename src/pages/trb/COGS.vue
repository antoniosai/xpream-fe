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

::v-deep .action {
    padding: 5px;
    margin-top: 1px !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center !important;
}

::v-deep .action > i {
    margin: -3px 5px 0px 3px;
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 12px !important;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
}

::v-deep .action > i.primary {
    color: #0065FF;
}

::v-deep .action > i.primary:hover {
    background: #0065FF;
    color: white;
    border-color: #0065FF;
}

::v-deep .single-button-default {
    width: 26px !important;
    height: 26px !important;
    text-align: center;
    background: #2E8758;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header">
                    <h3 class="title">Maintenance Package Review</h3>
                </div>
                <div class="card-content">
                    <div class="is-row">
                        <div class="is-col is-20">
                            <div class="card">
                                <div class="card-header no-border">
                                    MPD Detail
                                </div>
                                <div class="card-content" style="height: 71vh;overflow-y: auto;">
                                    <div style="padding-bottom: 5px;">
                                        <select v-on:change="findRevision()" id="aircraft-type" v-model="form.aircraft_type">
                                            <option value="" disabled selected>A/C Type</option>
                                            <option v-for="aircraft in aircrafts" :key="aircraft.ID" v-bind:value="aircraft.ID">{{ aircraft.AIRCRAFT }}</option>
                                        </select>
                                    </div>
                                    <div style="padding-bottom: 5px;">
                                        <select disabled id="revision-type" v-model="form.revision_type">
                                            <option value="" disabled selected>Version</option>
                                            <option v-for="revision in revisions" :key="revision.ID" v-bind:value="revision.ID">{{ revision.NAME}} (v.{{revision.VERSION}})</option>
                                        </select>
                                    </div>
                                    <div style="padding-bottom: 5px;">
                                        <textarea v-model="form.task_number" placeholder="MPD Task Number" name="" id="" cols="30" rows="15"></textarea>
                                    </div>
                                    <div style="padding-bottom: 5px; text-align: left; width: unset;" >
                                        <label style="font-size: 10pt; " class="is-checkbox"><input  style="width: unset;" value="1" v-model="form.include_deleted" type="checkbox">Include deleted task</label>
                                    </div>
                                    <div>
                                        <button style="width: 100%" v-on:click="handleFindReview()">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-col is-80">
                            <loading style="margin-top: 50px;"
                                :active.sync="loading.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                            <div class="card">
                                <div class="card-header no-border">
                                    Result Review
                                </div>
                                <div v-if="datatable.isShow" class="card-content" style="max-height: 71vh;overflow-y: auto;">
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="tittle-area">
                                                Mhrs Core Task Per Zone
                                            </div>
                                            <div class="option-box">
                                                <div class="option-item">
                                                    <div v-on:click="handleExport(datatable.core.rows, 'TJ CORE')" class="single-button single-button-default export_to_excel excel"><img class="icon" src="https://crm-tj.gmf-aeroasia.co.id/assets/img/excel.svg"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            <template>
                                                <div>
                                                    <vue-good-table
                                                        :columns="datatable.core.fields"
                                                        :rows="datatable.core.rows"
                                                        styleClass="vgt-table bordered striped"
                                                        :line-numbers="true"
                                                        :search-options="{
                                                            enabled: true,
                                                            trigger: 'keyup',
                                                            skipDiacritics: true,
                                                            placeholder: 'Fill to search',
                                                        }"
                                                        :pagination-options="{
                                                            enabled: true,
                                                            mode: 'records',
                                                            perPage: 10,
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
                                                        <div slot="table-actions-bottom">
                                                            <center>
                                                                <span style="font-size: 9pt;"><b>Total: {{datatable.core.total}} Mhrs</b> </span>
                                                            </center>
                                                        </div>
                                                    </vue-good-table>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="tittle-area">
                                                Mhrs Access Panel
                                            </div>
                                            <div class="option-box">
                                                <div class="option-item">
                                                    <div v-on:click="handleExport(datatable.access.rows, 'TJ ACCESS')" class="single-button single-button-default export_to_excel excel"><img class="icon" src="https://crm-tj.gmf-aeroasia.co.id/assets/img/excel.svg"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            <template>
                                                <div>
                                                    <vue-good-table
                                                        :columns="datatable.access.fields"
                                                        :rows="datatable.access.rows"
                                                        styleClass="vgt-table bordered striped"
                                                        :line-numbers="true"
                                                        :search-options="{
                                                            enabled: true,
                                                            trigger: 'keyup',
                                                            skipDiacritics: true,
                                                            placeholder: 'Fill to search',
                                                        }"
                                                        :pagination-options="{
                                                            enabled: true,
                                                            mode: 'records',
                                                            perPage: 10,
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
                                                        <div slot="table-actions-bottom">
                                                            <center>
                                                                <div class="action" style="text-align: center;" >
                                                                    <i v-on:click="handleModalAccess()" class="material-icons primary">notes</i>
                                                                    <span style="font-size: 9pt;"><b>Total: {{datatable.access.total}} Mhrs</b> </span>
                                                                </div>
                                                            </center>
                                                        </div>
                                                    </vue-good-table>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                    <br>
                                     <div class="card">
                                        <div class="card-header">
                                            <div class="tittle-area">
                                                Mhrs Preparation
                                            </div>
                                            <div class="option-box">
                                                <div class="option-item">
                                                    <div v-on:click="handleExport(datatable.preparation.rows, 'TJ PREPARATION')" class="single-button single-button-default export_to_excel excel"><img class="icon" src="https://crm-tj.gmf-aeroasia.co.id/assets/img/excel.svg"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            <template>
                                                <div>
                                                    <vue-good-table
                                                        :columns="datatable.preparation.fields"
                                                        :rows="datatable.preparation.rows"
                                                        styleClass="vgt-table bordered striped"
                                                        :line-numbers="true"
                                                        :search-options="{
                                                            enabled: true,
                                                            trigger: 'keyup',
                                                            skipDiacritics: true,
                                                            placeholder: 'Fill to search',
                                                        }"
                                                        :pagination-options="{
                                                            enabled: true,
                                                            mode: 'records',
                                                            perPage: 10,
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
                                                        <div slot="table-actions-bottom">
                                                            <center>
                                                                <div class="action" style="text-align: center;">
                                                                    <i v-on:click="handleModalPreparation()" class="material-icons primary">notes</i>
                                                                    <span style="font-size: 9pt;"><b>Total: {{datatable.preparation.total}} Mhrs</b> </span>
                                                                </div>
                                                            </center>
                                                        </div>
                                                    </vue-good-table>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="tittle-area">
                                                Tools & Materials
                                            </div>
                                            <div class="option-box">
                                                <div class="option-item">
                                                    <div v-on:click="handleExport(datatable.material.rows, 'TJ MATERIAL')" class="single-button single-button-default export_to_excel excel"><img class="icon" src="https://crm-tj.gmf-aeroasia.co.id/assets/img/excel.svg"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            <template>
                                                <div>
                                                    <vue-good-table
                                                        :columns="datatable.material.fields"
                                                        :rows="datatable.material.rows"
                                                        styleClass="vgt-table bordered striped"
                                                        :line-numbers="true"
                                                        :search-options="{
                                                            enabled: true,
                                                            trigger: 'keyup',
                                                            skipDiacritics: true,
                                                            placeholder: 'Fill to search',
                                                        }"
                                                        :pagination-options="{
                                                            enabled: true,
                                                            mode: 'records',
                                                            perPage: 10,
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
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="card-content">
                                    <span style="font-size: 9pt;">{{datatable.message}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal detail Access -->
            <div class="modal-box" id="modal-detail-access">
                <div class="modal md">
                    <span class="close" v-on:click="hideModal('modal-detail-access')"></span>
                        <div class="modal-header">
                            <h2 class="title">Detail Access</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div>
                                <loading 
                                    :active.sync="loading.isLoadingDetailAccess" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>
                            </div>
                            <div style="padding-bottom: 10px;">
                                <div v-on:click="handleExport(datatable.access.detail.rows, 'TJ DET ACCESS')" class="single-button single-button-default export_to_excel excel"><img class="icon" src="https://crm-tj.gmf-aeroasia.co.id/assets/img/excel.svg"></div>
                            </div>
                            <template>
                                <div>
                                    <vue-good-table
                                        :columns="datatable.access.detail.fields"
                                        :rows="datatable.access.detail.rows"
                                        styleClass="vgt-table bordered striped"
                                        :line-numbers="true"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill to search',
                                        }"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'records',
                                            perPage: 10,
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
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-detail-access')">Close</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>

            <!-- /Modal detail Access -->

            <!-- Model detail preparation -->
            <div class="modal-box" id="modal-detail-preparation">
                <div class="modal md">
                    <span class="close" v-on:click="hideModal('modal-detail-preparation')"></span>
                        <div class="modal-header">
                            <h2 class="title">Detail Preparation</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <div>
                                <loading 
                                    :active.sync="loading.isLoadingDetailPreparation" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>
                            </div>
                            <div style="padding-bottom: 10px;">
                                <div v-on:click="handleExport(datatable.preparation.detail.rows, 'TJ DET PREP')" class="single-button single-button-default export_to_excel excel"><img class="icon" src="https://crm-tj.gmf-aeroasia.co.id/assets/img/excel.svg"></div>
                            </div>
                            <template>
                                <div>
                                    <vue-good-table
                                        :columns="datatable.preparation.detail.fields"
                                        :rows="datatable.preparation.detail.rows"
                                        styleClass="vgt-table bordered striped"
                                        :line-numbers="true"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill to search',
                                        }"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'records',
                                            perPage: 10,
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
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-detail-preparation')">Close</button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /Modal detail preparation -->
            
        </div>
    </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import XLSX from 'xlsx'

import FieldCogsCore from "./datatable/FieldCogsCore.js";
import FieldCogsAccess from "./datatable/FieldCogsAccess.js";
import FieldCogsPreparation from "./datatable/FieldCogsPreparation.js";
import FieldCogsMaterial from "./datatable/FieldCogsMaterial.js";
import FieldCogsDetailAccess from "./datatable/FieldCogsDetailAccess.js";
import FieldCogsDetailPreparation from "./datatable/FieldCogsDetailPreparation.js";


export default {
    components: {
        VueGoodTable,
        Loading,
    },

    data: () => ({
        aircrafts: [],
        revisions: [],
        form: {
            aircraft_type: '',
            task_number: '',
            revision_type: '',
            include_deleted: 0
        },
        datatable: {
            core: {
                fields: FieldCogsCore,
                rows: [],
                total: ''
            },
            access: {
                fields: FieldCogsAccess,
                rows: [],
                total: '',
                detail: {
                    fields: FieldCogsDetailAccess,
                    rows: []
                }
            },
            preparation: {
                fields: FieldCogsPreparation,
                rows: [],
                total: '',
                detail: {
                    fields: FieldCogsDetailPreparation,
                    rows: []
                }
            },
            material: {
                fields: FieldCogsMaterial,
                rows: [],
            },
            perPage: [10, 50, 100],
            isShow: false,
            message: 'Select Aircraft Type and input Task Number !'
        },

        loading: {
            isLoadingDetailAccess: false,
            isLoadingDetailPreparation: false,
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        }
    }),

    mounted() {
        this.initAircraft();
    },

    methods: {
        initAircraft: function() {
            axios.get('/api/aircraft/get_aircraft')
            .then( res => {
                this.aircrafts = res.data.data
            })
        },

        initData: function() {
            return new Promise((resolve, reject) => {
                axios.post('/api/cogs/get_data', this.form)
                .then(res => {
                    if(res.data.success) {
                        this.datatable.core.rows = res.data.data.core.data;
                        this.datatable.core.total = res.data.data.core.total.TOTAL_MH;
                        this.datatable.access.rows = res.data.data.access.data;
                        this.datatable.access.total = res.data.data.access.total.TOTAL_MH;
                        this.datatable.preparation.rows = res.data.data.preparation.data;
                        this.datatable.preparation.total = res.data.data.preparation.total.TOTAL_MH;
                        this.datatable.material.rows = res.data.data.material.data;
                        this.datatable.isShow = true;

                    }else {
                        this.datatable.message = 'Data not found !';
                        this.datatable.isShow = false;

                    }
                    resolve();
                })
                .catch(e =>{
                    console.log("Error: "+e);
                    resolve();
                })
            })
        },

        handleFindReview: function() {
            if(!this.validation()) {
                return;
            }

            this.loading.isLoading = true;

            this.initData().then(() => {
                this.loading.isLoading = false;
            })
        },

        handleModalAccess: function() {
            this.datatable.access.detail.rows = [];
            $('#modal-detail-access').show();
            this.loading.isLoadingDetailAccess = true;
            axios.post('/api/cogs/get_detail_data_access', this.form)
            .then(res => {
                this.datatable.access.detail.rows = res.data;
                this.loading.isLoadingDetailAccess = false;

            })
            .catch(e => {
                console.log("Error " +e);
            })
        },

        handleModalPreparation: function() {
            this.datatable.preparation.detail.rows = [];
            $('#modal-detail-preparation').show();
            this.loading.isLoadingDetailPreparation = true;
            axios.post('/api/cogs/get_detail_data_preparation', this.form)
            .then(res => {
                this.datatable.preparation.detail.rows = res.data;
                this.loading.isLoadingDetailPreparation = false;

            })
            .catch(e => {
                console.log("Error " +e);
            })
        },

        handleExport: function(rows, name) {
            let data = XLSX.utils.json_to_sheet(rows) 
            let wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, data, name) 
            XLSX.writeFile(wb, `${name}.xlsx`)
        },

        validation: function() {
            if(this.form.aircraft_type == "") {
                toastr.warning('Aircraft type cant be empty')
                return false
            }

            if(this.form.revision_type == "") {
                toastr.warning('Version cant be empty')
                return false
            }

            if(this.form.task_number == "") {
                toastr.warning('Task number type cant be empty')
                return false
            }

            return true;
        },

        /**
         * Hide modal
         * @param modal_name String
         */
        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        findRevision: function() {
            axios.get('/api/revision/get_revision_by_aircraft/' +this.form.aircraft_type)
            .then( res => {
                if(res.data.data.length < 1) {
                    document.getElementById('revision-type').disabled = true;
                    toastr.warning('No data available for this aircraft type')
                    return;
                }
                document.getElementById('revision-type').disabled = false;
                this.revisions = res.data.data;
            })
        },
    }
}
</script>