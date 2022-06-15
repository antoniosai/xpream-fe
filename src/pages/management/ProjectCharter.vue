<template>
    <div>

        <div class="is-row">

            <div class="is-col is-50">
                <div class="card">
                    <div class="headline">
                        <div class="is-row">
                            <div class="is-col is-60">
                                <h4 class="title">
                                    Variable List
                                </h4>
                            </div>
                            <div class="is-col is-40">
                                <div class="pull-right">
                                    <button v-on:click="varModal(null, 'add')"><i class="fa fa-plus"></i> Add Variable</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">
                        
                        <vue-good-table
                            style="width: 100%"
                            :columns="variables.columns"
                            :rows="variables.rows"
                            :search-options="{
                                enabled: true,
                                placeholder: 'Search this table',
                            }"
                            :group-options="{
                                enabled: true,
                                collapsable: true
                            }"
                            :pagination-options="{
                                enabled: true,
                                mode: 'records',
                                perPage: 20,
                                position: 'bottom',
                                perPageDropdown: [20, 50, 100],
                                dropdownAllowAll: true,
                                setCurrentPage: 1,
                                nextLabel: 'next',
                                prevLabel: 'prev',
                                rowsPerPageLabel: 'Variables per page',
                                ofLabel: 'of',
                                pageLabel: 'page', // for 'pages' mode
                                allLabel: 'All',
                            }"
                        >
                            <template slot="table-row" style="background-color: #c5e1a5" slot-scope="props">
                                <span v-if="props.column.field == 'variable'">
                                    <strong><i>{{ '${' + props.row.variable + '}' }}</i></strong>
                                </span>
                                <span v-if="props.column.field == 'description'">
                                    {{ props.row.description }}
                                </span>
                                <span v-if="props.column.field == 'is_editable'">
                                    <button v-on:click="varModal(props.row, 'update')" v-if="props.row.is_editable == 'y'" style="display: unset; line-height: 18px">Edit</button>
                                    <button v-if="props.row.is_editable == 'y'" v-on:click="deleteVar(props.row)" style="display: unset; background: unset; line-height: 18px; background: red">Delete</button>
                                </span>
                            </template>
                        </vue-good-table>
                        
                    </div>
                </div>
            </div>

            <div class="is-col is-50">
                <div class="card">
            
                    <div class="headline">
                        <div class="is-row">
                            <div class="is-col is-60">
                                <h4 class="title">
                                    Project Charter Template
                                </h4>
                            </div>
                            <div class="is-col is-40">
                                <div class="pull-right">
                                    <button v-on:click="uploadModal"><i class="fa fa-file-word-o"></i> Upload DOCX Template</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">

                        <div>
                            <vue-good-table
                                style="width: 100%"
                                :columns="table.columns"
                                :rows="table.rows"
                                :search-options="{
                                    enabled: true,
                                    placeholder: 'Search this table',
                                }"
                                :pagination-options="{
                                    enabled: true,
                                    mode: 'records',
                                    perPage: 10,
                                    position: 'bottom',
                                    perPageDropdown: [3, 7, 9],
                                    dropdownAllowAll: true,
                                    setCurrentPage: 1,
                                    nextLabel: 'next',
                                    prevLabel: 'prev',
                                    rowsPerPageLabel: 'Variables per page',
                                    ofLabel: 'of',
                                    pageLabel: 'page', // for 'pages' mode
                                    allLabel: 'All',
                                }"
                            >
                                <template slot="table-row" style="background-color: #c5e1a5" slot-scope="props">
                                    <span v-if="props.column.field == 'filename'" style="text-align: center">
                                        <a :href="'/template/project_charter/'+props.row.filename" target="_blank">{{ props.row.filename }}</a>
                                    </span>
                                    <span v-if="props.column.field == 'is_used'" style="text-align: center">
                                        <span class="is-label is-warning" v-if="props.row.is_used == 'n'">NOT SELECTED</span>
                                        <span class="is-label is-success" v-if="props.row.is_used == 'y'">SELECTED</span>
                                    </span>
                                    <span v-if="props.column.field == 'created_at'" style="text-align: center">
                                        {{ props.row.created_at }}
                                    </span>
                                    <span v-if="props.column.field == 'action'" style="text-align: center">
                                        <button v-on:click="editModal(props.row)" style="display: unset; line-height: 18px">Edit</button>
                                        <button v-on:click="deleteTemplate(props.row)" style="display: unset; background: unset; line-height: 18px; background: red">Delete</button>
                                    </span>
                                </template>

                            </vue-good-table>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>


        <!-- Modal Zone -->

        <!-- Upload Modal -->
        <div class="modal-box" id="upload_modal">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('upload_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Upload Project Charter Template</h2>
                </div>
                <div class="modal-body">

                    
                    <div class="card">
                        <p>Only DOCX and DOC are allowed</p>
                        <hr>

                        <form action="javascript:void(0)" @submit.prevent="submitFile" 
                            enctype="multipart/form-data" method="post">
                            <div class="is-row">
                                <div class="is-col is-60">
                                    <input type="file" class="form-control" ref="file" name="file" @change="fileUpload($event.target)" required>
                                </div>
                                <div class="is-col is-40">
                                    <div class="pull-right">

                                        <button class="btn btn-danger btn-sm"
                                            :disabled="isLoading">{{ isLoading ? 'Loading...':'Submit' }}</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
        <!-- / Upload Modal -->

        <!-- Edit Modal -->
        <div class="modal-box" id="edit_modal">

            <form action="javascript:void(0)" @submit.prevent="submitFile('update')"  enctype="multipart/form-data" method="post">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('edit_modal')"></span>
                    <div class="modal-header">
                        <h2 class="title">Upload Project Charter Template</h2>
                    </div>
                    <div class="modal-body">

                        
                        <div class="card">

                            <form action="javascript:void(0)" @submit.prevent="submitFile" 
                                enctype="multipart/form-data" method="post">
                                <div class="is-row">
                                    <div class="is-col is-100">
                                        <center>
                                            <label>Status</label>
                                            <input type="checkbox" v-model="modal.template.is_used" true-value="y" false-value="n" class="switch unset">
                                        </center>
                                    </div>
                                    <div class="is-col is-100">
                                        <br>
                                        <div class="form_padding">
                                            <label>Update Template</label>
                                            <input type="file" class="form-control" ref="file" name="file" @change="fileUpload($event.target)">
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger btn-sm"
                            :disabled="isLoading">{{ isLoading ? 'Loading...':'Submit' }}
                        </button>
                    </div>

                </div>
            </form>

        </div>
        <!-- / Edit Modal -->
        
        <!-- v-model -->
        <div class="modal-box" id="variable_modal">

            <form action="javascript:void(0)" @submit.prevent="submitVar"  enctype="multipart/form-data" method="post">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('variable_modal')"></span>
                    <div class="modal-header">
                        <h2 class="title">{{ modal.variable_type == 'add' ? 'Add New Variable' : 'Update Variable' }}</h2>
                    </div>
                    <div class="modal-body">

                        
                        <div class="card">

                            <form action="javascript:void(0)" @submit.prevent="submitVar" 
                                enctype="multipart/form-data" method="post">

                                <div class="form-item">
                                    <label>Variable</label>
                                    <input type="text" v-model="modal.variable.variable" required>
                                </div>

                                <div class="form-item" style="margin-top: 12px">
                                    <label>Description</label>
                                    <input type="text" v-model="modal.variable.description">
                                </div>

                                <div class="form-item" style="margin-top: 12px">
                                    <label>Form Type</label>
                                    <select v-model="modal.variable.form_type" required>
                                        <option value="text" selected>Text</option>
                                        <option value="date">Date</option>
                                        <option value="number">Number</option>
                                        <option value="textarea">Textarea</option>
                                    </select>
                                </div>

                            </form>

                        </div>

                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger btn-sm"
                            :disabled="isLoading">{{ isLoading ? 'Loading...':'Submit' }}
                        </button>
                    </div>

                </div>
            </form>

        </div>
        <!-- / v-model -->

        <!-- End of Modal Zone -->
    </div>

        
        
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'

import swal from 'sweetalert'
import axios from 'axios'
import toastr from 'toastr'

export default {

    components: {
        VueGoodTable
    },

    data() {
        return {
            progressBar: 0, //VARIABLE INI NILAINYA AKAN BERUBAH SESUAI PROGRESS UPLOADING
            message: '',
            isLoading: false,
            file: '', //UNTUK MENYIMPAN DATA FILE YANG AKAN DIUPLOAD
            files: [], //MENYIMPAN DATA FILE YANG TELAH DIUPLOAD

            modal: {

                variable_type: 'add',

                variable: {
                    variable: '',
                    description: '',
                    is_editable: '',
                    form_type: '',
                },
                template: {
                    id: '',
                    filename: '',
                    is_used: ''
                }
            },

            variables: {
                columns: [
                    {
                        label: 'Variable Name',
                        field: 'variable',
                        sortable: true
                    },
                    {
                        label: 'Description',
                        field: 'description',
                        sortable: true
                    },
                    {
                        label: 'Action',
                        field: 'is_editable',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        sortable: true
                    },
                    
                ],
                rows: []
            },

            table: {
                columns: [
                    {
                        label: 'File Name',
                        field: 'filename',
                        sortable: true
                    },
                    {
                        label: 'Status',
                        field: 'is_used',
                        sortable: true
                    },
                    {
                        label: 'Upload Date',
                        field: 'created_at',
                        sortable: true
                    },
                    {
                        label: '',
                        field: 'action',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        sortable: false
                    }
                    
                ],
                rows: []
            }

        }
    },
    created() {
        this.initFile()
        this.initVariable()
    },
    methods: {

        uploadModal: function (data) {

            var vm = this

            this.modal.template = data

            $('#upload_modal').show()
        },

        varModal: function (data = null, type) {

            toastr.success(type)

            var vm = this

            if(type == 'add') {
                this.reset()
                this.modal.variable_type = 'add'
            } else if (type == 'update') {
                this.modal.variable_type = 'update'
                this.modal.variable = data
            }

            $('#variable_modal').show()
        },

        submitVar: function() {
            
            this.isLoading = true

            if(this.modal.variable.variable == '') {
                this.isLoading = false
                return toastr.error('Variable can\'t be blank')
            }

            swal({
                title: "You Are Going to Update Variable",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    let params = {
                        variable_type: this.modal.variable_type,
                        id: this.modal.variable.id,
                        variable: this.modal.variable.variable,
                        description: this.modal.variable.description,
                        is_editable: this.modal.variable.is_editable,
                        form_type: this.modal.variable.form_type
                    }

                    this.isLoading = false
                    
                    axios.post('/api/booking_and_submission/project/variable/new', params)
                    .then( (res, err) => {

                        console.log(res.data)
                        
                        if(res.data.status == 'success')
                        {
                            toastr.success(res.data.message, 'Success!')

                            this.hideModal('variable_modal')

                            this.isLoading = false
                            this.reset()
                            this.initVariable()
                        }
                        else
                        {
                            toastr.error('Something went wrong', 'Ooppss')
                            this.isLoading = false
                        }
                        
                    })
                    .catch(err => {
                        console.log(err)
                        this.isLoading = false
                        toastr.error('Something went wrong', 'Ooppss')
                    })
                }
            })
            
        },

        deleteVar: function(data) {
            swal({
                title: "You Are Going to Delete Variable",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.delete('/api/booking_and_submission/project/variable/delete/'+data.id)
                    .then( res => {
                        if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success')
                            this.initVariable()
                        }
                        else if (res.data.status == 'error') {
                            toastr.error(res.data.message, 'Oopss!')
                        }
                    })
                } else {
                    toastr.info("Canceled");
                }
            })
        },

        editModal: function (data) {

            var vm = this

            this.modal.template = data

            $('#edit_modal').show()
        },

        hideModal: function (modal_name) {
            // deleteformhere
            this.reset()
            this.initFile()
            $('#' + modal_name).hide()
        },
        
        //MENGAMBIL DATA FILE YANG TELAH DI-UPLOAD
        initFile() {
            axios.get('/api/booking_and_submission/project/template/show')
            .then((response) => {
                // this.table.rows = response.data
                this.table.rows = response.data.templates
            })
        },

        initVariable: function() {
            axios.get('/api/booking_and_submission/project/variable/show_all')
            .then((response) => {
                this.variables.rows = response.data
            })
        },

        //MENYIMPAN DATA FILE YANG AKAN DI-UPLOAD
        fileUpload(event) {
            this.file = event.files[0]
        },
        //MENGIRIM FILE UNTUK DI-UPLOAD
        submitFile: function(type = null) {
            this.isLoading = true
            
            let formData = new FormData();
            
            formData.append('file', this.file);

            if(type == 'update')
            {
                toastr.success('update')
                formData.append('type', 'update');
                formData.append('template_id', this.modal.template.id);
                formData.append('is_used', this.modal.template.is_used);
            }
            else
            {
                toastr.success('add')
                formData.append('type', 'add');
                formData.append('template_id', this.modal.template.id);
                formData.append('is_used', 'n');
            }

            axios.post('/api/booking_and_submission/project/template/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                //FUNGSI INI YANG MEMILIKI PERAN UNTUK MENGUBAH SEBERAPA JAUH PROGRESS UPLOAD FILE BERJALAN
                onUploadProgress: function( progressEvent ) {
                    //DATA TERSEBUT AKAN DI ASSIGN KE VARIABLE progressBar
                    this.progressBar = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                }.bind(this)
            })
            .then( (res, err) => {
                
                if(res.data.status == 'success')
                {
                    toastr.success(res.data.message, 'Success!')

                    this.hideModal('upload_modal')
                    this.hideModal('edit_modal')

                    this.isLoading = false
                    this.reset()
                    this.initFile()
                }
                else
                {
                    toastr.error('Something went wrong', 'Ooppss')
                    this.isLoading = false
                }
                
            })
            .catch(err => {
                console.log(err)
                this.isLoading = false
                toastr.error('Something went wrong', 'Ooppss')
            })

        },

        deleteTemplate: function(data) {

            swal({
                title: "You Are Going to Delete Project Charter Template",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.delete('/api/booking_and_submission/project/template/delete/'+data.id)
                    .then( res => {
                        if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success')
                            this.initFile()
                        }
                        else if (res.data.status == 'error') {
                            toastr.error(res.data.message, 'Oopss!')
                        }
                    })
                } else {
                    toastr.info("Canceled");
                }
            })
        },

        //RESET FORM UPLOAD
        reset: function() {
            this.$refs.file.value = '';

            this.modal = {

                variable_type: 'add',

                variable: {
                    variable: '',
                    description: '',
                    is_editable: '',
                    form_type: '',
                },
                template: {
                    id: '',
                    filename: '',
                    is_used: ''
                }
            }

        }
    }
}
</script>

<style scoped>
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
    ::v-deep input[type="checkbox"]:checked+span .fake-checkbox:after {
        display: block;
    }

    ::v-deep .centerize {
        margin: auto;
        text-align: center
    }
    
</style>