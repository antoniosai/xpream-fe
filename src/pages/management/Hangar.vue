<template>

    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="is-row">
                <div class="is-col">

                    <loading 
                    :loader="'dots'"
                    :color="'#1976d2'"
                    :width="loading.width"
                    :height="loading.height"
                    :active.sync="loading.isLoading" 
                    :can-cancel="loading.cancle" 
                    :is-full-page="loading.fullPage"></loading>

                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">List of Hangar</h3>
                            </div>

                            <!-- <div class="option-box">
                                <div class="option-item">
                                    <button v-on:click="resetForm()">Reset Filter</button>
                                </div>
                            </div> -->
                        </div>
                        <div class="card-content">
                            <vue-good-table 
                                id="hangar_table"
                                @on-row-click="onHangarClick"
                                :columns="table.fields" 
                                :rows="table.rows"
                                :line-numbers="true"
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
                                <div slot="table-actions">
                                    <div class="toolbar toolbar-default">
                                        <div class="toolbar-left">
                                            <div class="toolbar-item">
                                                <button v-on:click="hangarModal({}, 'add')" style="color:#465368; background-color: #ffffff;border: 1px solid grey;"><i class='material-icons'>add</i>Add Hangar</button>
                                            </div>
                                            <div class="toolbar-item">
                                                <div v-on:click="resetForm" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <template slot="table-row" slot-scope="props">
                                    
                                    <span v-if="props.column.field == 'name'">
                                        {{ props.row.name }}
                                    </span>
                                    <span v-if="props.column.field == 'description'">
                                        {{ props.row.description }}
                                    </span>
                                    <span v-if="props.column.field == 'line'">
                                        <span v-if="props.row.line.length <= 1">{{ props.row.line.length }} line</span>
                                        <span v-else>{{ props.row.line.length }} line(s)</span>
                                    </span>
                                    <span v-if="props.column.field == 'action'">
                                        <div class="action">
                                            
                                            <i class="material-icons success edit-user" v-on:click="hangarModal(props.row, 'edit')">edit</i>
                                            <i class="material-icons danger delete-user" v-on:click="deleteHangar(props.row)">delete</i>
                                        </div>
                                    </span>
                                </template>
                            </vue-good-table>
                        </div>
                    </div>

                </div>
                <div class="is-col">

                    <loading 
                    :loader="'dots'"
                    :color="'#1976d2'"
                    :width="loading.width"
                    :height="loading.height"
                    :active.sync="loading.isLoading" 
                    :can-cancel="loading.cancle" 
                    :is-full-page="loading.fullPage"></loading>

                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">Line</h3>
                            </div>

                            <!-- <div class="option-box">
                                <div class="option-item">
                                    <button v-on:click="resetForm()">Reset Filter</button>
                                </div>
                            </div> -->
                        </div>
                        <div class="card-content">
                            <p v-if="selected_hangar == ''">Please select Hangar first to list Line</p>
                            <div v-else>
                                <vue-good-table 
                                    :columns="lines.columns" 
                                    :rows="lines.rows"
                                    :search-options="{
                                        enabled: true,
                                        trigger: 'enter',
                                        skipDiacritics: true,
                                        placeholder: 'Type and enter to search'
                                    }"
                                    styleClass="vgt-table striped condensed">
                                    <div slot="table-actions">
                                        <div class="toolbar toolbar-default">
                                            <div class="toolbar-left">
                                                <!-- <div class="toolbar-item">
                                                    <button v-on:click="hangarModal({}, 'add')" style="color:#465368; background-color: #ffffff;border: 1px solid grey;"><i class='material-icons'>add</i>Add Role</button>
                                                </div> -->

                                                <div class="toolbar-item">
                                                    <button v-on:click="lineModal({}, 'add')" style="color:#465368; background-color: #ffffff;border: 1px solid grey;"><i class='material-icons'>add</i>Add Line</button>
                                                </div>

                                                <div class="toolbar-item">
                                                    <div v-on:click="resetForm" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <template slot="table-row" slot-scope="props">
                                        <span v-if="props.column.field == 'line_name'">
                                            {{ props.row.line_name }}
                                        </span>
                                        <span v-if="props.column.field == 'description'">
                                            {{ props.row.description }}
                                        </span>
                                        <span v-if="props.column.field == 'airframe_category'">
                                            {{ props.row.airframe_category }}
                                        </span>
                                        <span v-if="props.column.field == 'action'">
                                            <div class="action">
                                                <i class="material-icons success edit-user" v-on:click="lineModal(props.row, 'edit')">edit</i>
                                                <i class="material-icons danger delete-user" v-on:click="deleteLine(props.row)">delete</i>
                                            </div>
                                        </span>
                                    </template>
                                </vue-good-table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!--     Modal -->
        <div class="modal-box" id="hangar_detail">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('hangar_detail')"></span>
                
                <div class="modal-header">
                    <h2 class="title" v-if="modal.type == 'edit'">Edit Hangar</h2>
                    <h2 class="title" v-else>Add New Hangar</h2>
                </div>
                <div class="modal-body" style="position: relative">

                    <div class="is-row">
                        <div class="is-col is-100">
                            <div class="card" style="margin-right: 20px">
                                <div class="form-item">
                                    <label>Hangar Name</label>
                                    <input type="text" v-model="modal.hangar.name" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                </div>
                                <div class="form-item form-username">
                                    <label>Description</label>
                                    <textarea rows="3" v-model="modal.hangar.description" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);"></textarea>
                                </div>
                                
                            </div>
                        </div>
                        <!-- <div class="is-col is-60">
                            <div class="card">
                                <div class="is-row">
                                    <div class="is-col is-30">
                                        <div class="form-item">
                                            <label>Line</label>
                                            <input type="text" v-model="modal.temp_line.line_name" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                        </div>
                                    </div>
                                    <div class="is-col is-70">
                                        <div class="form-item">
                                            <label>Line Desc</label>
                                            <input type="text" v-model="modal.temp_line.description" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix">
                                    <div class="pull-right">
                                        <button class="button" v-on:click="processTempLine">Add Line</button>
                                    </div>
                                </div>
                            </div>
                            <h4>Line</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <td>No</td>
                                        <td>Line Name</td>
                                        <td>Description</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(li, i) in modal.temp_line.data" :key="i">
                                        <td>{{ i+1 }}</td>
                                        <td>{{ li.line_name }}</td>
                                        <td>{{ li.description }}</td>
                                        <td><div class="action"><i class="material-icons danger" v-on:click="delTempLine(i)">delete</i></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> -->
                    </div>
                </div>
                <div class="modal-footer" style="">
                    <button class="button is-primary is-default" v-on:click="hideModal('hangar_detail')">Cancel</button>
                    <button class="button is-primary is-success" v-on:click="saveData"><i class="material-icons">check</i> Save</button>
                </div>
                
            </div>
        </div>
        <!-- / Role Modal -->

        <!-- Role Modal -->
        <div class="modal-box" id="line_detail">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('line_detail')"></span>
                <div class="modal-header">
                    <h2 class="title" v-if="modal.type_line == 'edit'">Edit Line {{ modal.line.description }}</h2>
                    <h2 class="title" v-else>Add New Line</h2>
                </div>
                <div class="modal-body">

                    <div class="is-row">
                        <div class="is-col is-100">
                            <div class="form-item">
                                <label>Line</label>
                                <input type="text" v-model="modal.line.line_name" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                            </div>
                        </div>
                        <div class="is-col is-100" style="margin-top: 20px">
                            <div class="form-item">
                                <label>Airframe Category</label>
                                <select v-model="modal.line.airframe_category">
                                    <option value="" selected>-- Please Select Airframe Category--</option>
                                    <option value="Wide Body">Wide Body</option>
                                    <option value="Narrow Body">Narrow Body</option>
                                </select>
                            </div>
                        </div>
                        <div class="is-col is-100" style="margin-top: 20px">
                            <div class="form-item">
                                <label>Line Desc</label>
                                <input type="text" v-model="modal.line.description" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                            </div>
                        </div>
                    </div>
                    <div class="clearfix">
                        <div class="pull-right">
                            <button class="button is-primary is-success" v-on:click="saveLine">Save Line</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- / Role Modal -->

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
    },

    data: () => ({

        selected_hangar: '',

        loading: {
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: false,
            cancel: true
        },
        table: {
            rows: [],
            fields: [
                
                {
                    label: 'Hangar Name',
                    field: 'name',
                    sortable: true
                },
                {
                    label: 'Description',
                    field: 'description',
                    sortable: true
                },
                {
                    label: 'Total Line',
                    field: 'line',
                    sortable: false
                },
                {
                    label: '',
                    field: 'action',
                    sortable: false
                },
                
            ],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 20,
                search_query: '',
                searchTerm: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },
        lines: {
            columns: [
                {
                    label: 'Line',
                    field: 'line_name',
                },
                {
                    label: 'Description',
                    field: 'description',
                },
                {
                    label: 'Airframe Category',
                    field: 'airframe_category',
                },
                {
                    label: 'Action',
                    field: 'action',
                },
            ],
            rows: [],
        },
        permissions: [],
        api: {
            master_index: '/api/management/hangar',
        },
        form: {
            role: 'all',
            report: 'all',
            search_query: '',
            location: 'all'
        },
        modal: {
            type: '',
            file: '',
            hangar: {
                line_name: '',
                description: ''
            },
            line: {},
            temp_line: {
                line_name: '',
                description: '',
                data: []
            },
        }
    }),

    mounted() {
        this.initData(this.api.master_index)
        this.initPermission()
    },

    watch: {},

    methods: {
        initData: function(url) {

            this.loading.isLoading = true

            var params = this.table.serverParams

            axios.get(url, {
                params
            })
            .then( res => {
                this.table.rows = res.data.data
                this.table.totalRows = res.data.total

                this.loading.isLoading = false
            })
        },

        initPermission: function() {

            var vm = this

            axios.get('/api/management/permission')
            .then( res => {
                vm.permissions = res.data
            })
        },

        processTempLine: function() {
            var temp = {
                line_name: this.modal.temp_line.line_name,
                description: this.modal.temp_line.description
            }

            this.modal.temp_line.data.push(temp)

            this.modal.temp_line.description = ''
            this.modal.temp_line.line_name = ''
        },

        delTempLine: function(index) {

            swal({
                title: "Deleting Line",
                text: "Continue?",
                // icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    this.modal.temp_line.data.splice(index, 1)
                }
            });
        },

        saveLine: function() {

            swal({
                title: "Are You Sure to " + this.modal.type_line + " " + this.modal.line.line_name + "?",
                text: "Continue",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    if(this.modal.type_line == 'add') {

                        let params = this.modal.line
                        params.hangar_id = this.selected_hangar

                        console.log(params)
                        axios.post('/api/management/line', params)
                        .then( res => {
                            if (res.data.status == 'success') {
                                toastr.success(res.data.message, 'Success')
                                this.refreshLine()
                                this.hideModal('line_detail')
                            }
                        })
                    } else {
                        axios.put('/api/management/line/' + this.modal.line.id, this.modal.line)
                        .then( res => {
                            if (res.data.status == 'success') {
                                toastr.success(res.data.message, 'Success')
                                this.refreshLine()
                                this.hideModal('line_detail')
                            }
                        })
                    }

                }
            })

            
            
        },

        onHangarClick: function(events) {

            let hangar = events.row

            this.selected_hangar = hangar.id
            
            axios.get('/api/management/hangar/' + this.selected_hangar)
            .then( res => {
                this.lines.rows = res.data.line
            })
        },

        refreshLine: function() {

            axios.get('/api/management/hangar/' + this.selected_hangar)
            .then( res => {
                this.lines.rows = res.data.line
            })
        },

        resetForm: function() {
            this.form = {
                role: 'all',
                search_query: '',
            }
            this.initData(this.api.master_index)
        },

        liveSearch: function() {
            // this.initData(this.api.master_index)
        },

        saveData: function() {

            var vm = this

            var type = vm.modal.type

            var formData = {
                id: vm.modal.hangar.id,
                name: vm.modal.hangar.name,
                description: vm.modal.hangar.description,
                line: vm.modal.temp_line.data
            }

            if(type == 'add') {

                swal({
                    title: "You Are Going to Add New Hangar",
                    text: "Continue?",
                    // icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/management/hangar', formData)
                        .then( res => {
                            if(res.data.status == 'success') {
                                toastr.success(res.data.message, 'Success')
                                vm.initData(this.api.master_index)
                            }
                        })
                    }
                });
                
            } else {

                swal({
                    title: "You Are Going to Edit "+ formData.name,
                    text: "Continue?",
                    // icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {
                        axios.put('/api/management/hangar/'+ formData.id, formData)
                        .then( res => {
                            if(res.data.status == 'success') {
                                toastr.success(res.data.message, 'Success')
                                vm.initData(this.api.master_index)
                            }
                        })
                    }
                });
                
            }

            this.hideModal('hangar_detail')
        },

        deleteHangar: function(data) {
            var vm = this

            swal({
                title: "Are You Sure to Delete " + data.name,
                text: "Once it deleted, you cant restore it",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.delete('/api/management/hangar/' + data.id)
                    .then( res => {
                        if(res.data.status == 'success')
                        {
                            toastr.success('Successfully deleted ' + data.name, 'Success')
                            vm.initData(vm.api.master_index)
                        }
                    })
                } else {
                    toastr.info("Canceled");
                }
            });

        },

        deleteLine: function(data) {
            var vm = this

            swal({
                title: "Are You Sure to Delete " + data.line_name,
                text: "Once it deleted, you cant restore it",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.delete('/api/management/line/' + data.id)
                    .then( res => {
                        if(res.data.status == 'success')
                        {
                            this.refreshLine()
                            toastr.success('Successfully deleted ' + data.line_name, 'Success')
                        }
                    })
                } else {
                    toastr.info("Canceled");
                }
            });

        },

        hangarModal: function(hangar, type){

            var vm = this

            vm.modal.type = type

            if(type == 'edit') {
                vm.modal.hangar = hangar
                // hangar.line
                vm.modal.temp_line.data = hangar.line
            } else if ('add') {
                // swal('else hangar modal')
            }

            $('#hangar_detail').show();
        },

        lineModal: function(line, type){

            var vm = this

            vm.modal.type_line = type

            if(type == 'edit') {
                vm.modal.line = line
            } else {
                // swal('else hangar modal')
            }

            $('#line_detail').show();
        },

       
        hideModal: function(modal_name) {
            var vm = this
            $('#' + modal_name).hide();

            
            
            if(vm.modal.type_line == 'edit')
            {
                vm.modal.type_line = ''
                vm.modal.line = {}
                vm.initData(this.api.master_index)
            }

            if(vm.modal.type == 'edit')
            {

                vm.modal.hangar = {}
                vm.modal.temp_line.data = []
                vm.initData(this.api.master_index)
            }

        },

        /**
         * Datatable History - Server Side
         */

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
    }
}
</script>

<style scoped>
    ::v-deep table {
        font-size: 12px;
        width: 100%; /* Optional */
    }


    ::v-deep .summ {
        margin-top: 5px;
        margin-right: 3px
    }
    
    
    ::v-deep .material-switch > input[type="checkbox"] {
        display: none;   
    }

    ::v-deep .material-switch > label {
        cursor: pointer;
        height: 0px;
        position: relative; 
        width: 40px;  
    }

    ::v-deep .material-switch > label::before {
        background: rgb(0, 0, 0);
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        content: '';
        height: 16px;
        margin-top: -8px;
        position:absolute;
        opacity: 0.3;
        transition: all 0.4s ease-in-out;
        width: 40px;
    }
    ::v-deep .material-switch > label::after {
        background: rgb(255, 255, 255);
        border-radius: 16px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        content: '';
        height: 24px;
        left: -4px;
        margin-top: -8px;
        position: absolute;
        top: -4px;
        transition: all 0.3s ease-in-out;
        width: 24px;
    }
    ::v-deep .material-switch > input[type="checkbox"]:checked + label::before {
        background: inherit;
        opacity: 0.5;
    }
    ::v-deep .material-switch > input[type="checkbox"]:checked + label::after {
        background: inherit;
        left: 20px;
    }

    /* Dot */
    ::v-deep .clickable {
        cursor: pointer; 
    }

    ::v-deep .dot {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer; 
    }

    ::v-deep .color_empty {
        background-color: #bbb;
    }

    ::v-deep .color_success {
        background-color: #4CAF50;
    }

    ::v-deep .color_warning {
        background-color: #FF9800;
    }

    ::v-deep .color_danger {
        background-color: #f93232;
    }

    /* Customize the label (the container) */
    ::v-deep .radio-button,
    .checkbox {
        position: relative;
        margin: 20px 0;
    }

    ::v-deep .checkbox {
        display: block;
    }

    ::v-deep .radio-button input,
    .checkbox input {
        position: absolute;
        margin: 5px;
        padding: 0;
        /* for mobile accessibility (iOS Label Bug) */
        visibility: hidden;
    }

    ::v-deep .radio-button .label-visible,
    .checkbox .label-visible {
        margin-left: 2em;
        margin-bottom: 0;
    }

    ::v-deep .fake-radiobutton,
    .fake-checkbox {
        position: absolute;
        display: block;
        top: 0;
        left: 3px;
        width: 20px;
        height: 20px;
        border: 1px solid slategray;
        background-color: white;
    }

    ::v-deep .fake-radiobutton:after,
    .fake-checkbox:after {
        content: "";
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        background: navy;
        transform: translateX(-50%) translateY(-50%);
    }

    ::v-deep .fake-radiobutton {
        border-radius: 50%;
    }

    ::v-deep .fake-radiobutton:after {
        border-radius: 50%;
    }

    ::v-deep input[type="radio"]:checked+span .fake-radiobutton:after,
    input[type="checkbox"]:checked+span .fake-checkbox:after {
        display: block;
    }

    /* Hover */

    ::v-deep #hangar_table tr:hover {
        background-color: #ffff99;
        cursor: pointer;
    }


    
</style>