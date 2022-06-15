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

    ::v-deep .flex-middle-default {
        text-align: center;
    }
</style>

<template>
  <div>
        <template>
            <div>
                <loading
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
                        <div  class="toolbar toolbar-default">
                            <div v-if="$props.type === 'manhours_jobcard'" class="toolbar-item" style="margin-right: 10px;">
                                <!--button v-on:click="handlerGenerateInitial()" class="button is-danger">
                                    <i class='material-icons'>
                                        sync
                                    </i>
                                    Generate Initial Data
                                </button-->                                                  
                            </div>                                                 
                        </div>
                    </div>
                    <template slot="table-row" slot-scope="props">                      
                        <span v-if="props.column.field == 'ACTION'">
                            <div class="action tooltip-x" style="text-align: center; width: 100%;">
                                <span class="tooltiptext-x">Delete Item</span>
                                <i v-if="!grant_access" style="font-size: 10pt; font-weight: bold;" class="material-icons default">delete</i>
                                <i v-else v-on:click="handlerDeleteItem(props.formattedRow['ID'])" style="font-size: 10pt; font-weight: bold;" class="material-icons danger">delete</i>
                            </div>
                        </span>
                        <span v-else-if="props.column.field == 'STDEV' || props.column.field == 'MHRSPLAN' || props.column.field == 'MHRSAVG'">
                            <div class="flex-middle-default">
                                {{props.formattedRow[props.column.field]}}
                            </div>
                        </span>
                        <span v-else>
                            {{props.formattedRow[props.column.field]}}
                        </span>
                    </template>>
                </vue-good-table>
            </div>
        </template>
  </div>
</template>

<script> 
import Loading from 'vue-loading-overlay';
import { VueGoodTable } from 'vue-good-table';
import FieldMDRManhours from "../datatable/FieldMDRManhours";
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-good-table/dist/vue-good-table.css'


export default {
    name: 'jobcard-manhours',
    props: {
        draft_id:  "",
        grant_access: false,
        type: "",
    },

    components: {
        VueGoodTable,
        Loading
    },

    data: () => ({
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        datatable: {
            fields: FieldMDRManhours,
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
    }),

    mounted() {
    if(this.$props.type == "manhours_mdr") {
        this.handlerGenerateInitial();
    }

    this.initData();

    },

    watch: {

    },

    methods: {
        initData: function() {

            if(this.$props.type == "manhours_mdr") {
                /*FieldMDRManhours[1].hidden = false;
                FieldMDRManhours[2].hidden = false;
                FieldMDRManhours[3].hidden = false;*/
                FieldMDRManhours[3].hidden = false;
                FieldMDRManhours[6].hidden = true;
            }else {
                /*FieldMDRManhours[1].hidden = true;
                FieldMDRManhours[2].hidden = true;
                FieldMDRManhours[3].hidden = true;*/
                FieldMDRManhours[3].hidden = true;       
                FieldMDRManhours[6].hidden = false;
            }

            this.loading.isLoading = true;
            axios.get(`/api/data_cleansing/validation/mdr_manhours/${this.$props.draft_id}`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("No data available");
                }
                this.datatable.rows = res.data;
                this.loading.isLoading = false;
            })
            .catch(e => {
                this.loading.isLoading = false;
                toastr.error("Failed get data");
            })
        },

        handlerUpdateData: function(refno, column, elem) {
            if(!this.grant_access) return;
            this.loading.isLoading = true;
            let elm = document.getElementById(elem).value;

            axios.post('/api/data_cleansing/validation/job_manhours/update', {
                refno: refno,
                column: column,
                data: elm,
                draft_id: this.$props.draft_id,
                auart: "GA02",
            })
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
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;

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
                    axios.get('/api/data_cleansing/validation/mdr_manhours/delete/' + id)
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

        handlerGenerateInitial: function() {
            /*swal({
                title: "Generate Initial Data",
                text: "This action will reset existing values for field Mhrs Plan AVG, Standard Deviation and  Mhrs Plan.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {*/
                    this.loading.isLoading = true;
                    toastr.info("calculating manhours data . . .");
                    axios.get(`/api/data_cleansing/validation/job_manhours/generate_initial/GA02/${this.$props.draft_id}`)
                    .then(res => {
                        if(res.data.success) {
                            toastr.remove();
                            toastr.success("manhours calculation completed");
                            this.initData();
                        }else {
                            toastr.remove();
                            toastr.error(res.data.message);
                        }
                        this.loading.isLoading = false;

                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Undefined error");
                        this.loading.isLoading = false;
                    })
        
                /*} else {
                    toastr.info("Canceled");
                    return;
                }
            });*/
        }
    }
}

</script>