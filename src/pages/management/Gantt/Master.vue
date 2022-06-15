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

::v-deep .action > i.primary {
    color: rgb(51, 132, 255);
}

::v-deep .action > i.primary:hover {
    background-color: rgb(51, 132, 255);
    color: white;
}

::v-deep .action > i {
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
}
</style>

<template>
    <div>
        <div>
            <div class="card-header">
                <div class="title-area">
                    <h3 class="title">Master Data</h3>
                    <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                </div>

                <div class="option-box">
                    <div class="option-item">
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="is-row">
                    <div class="is-col">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Phase
                                </div>
                                <div class="option-box">
                                    <div class="option-item">
                                        <div  class="action">
                                            <i id="add-row" v-on:click="handlerShowModal('Add', 'Phase', '', '')" class="material-icons primary add-row" tabindex="0">add_circle_outline</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="field.phase"
                                            :rows="phases"
                                            styleClass="vgt-table bordered striped"
                                            :search-options="{
                                                enabled: true,
                                                trigger: 'keyup',
                                                skipDiacritics: true,
                                                placeholder: 'Fill to search'
                                            }"
                                            max-height="350px"
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
                                            <template slot="table-row" slot-scope="props">
                                                <span v-if="props.column.field == 'action'">
                                                    <div class="action">
                                                        <i v-on:click="handlerShowModal('Update', 'Phase', props.row.ID, 'phases')" class="material-icons success edit-user">edit</i>
                                                        <i class="material-icons danger delete-user disabled" >delete</i>
                                                    </div>
                                                </span>
                                                <span v-else-if="props.column.field == 'PHASE_CODE'">
                                                    <div style="text-align: center;">
                                                       {{props.row.PHASE_CODE}}
                                                    </div>
                                                </span>
                                                <span v-else>{{props.row.PHASE_NAME}}</span>
                                            </template>
                                        </vue-good-table>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="is-col">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Task
                                </div>
                                <div class="option-box">
                                    <div class="option-item">
                                        <div  class="action">
                                            <i id="add-row" v-on:click="handlerShowModal('Add', 'Task', '', '')" class="material-icons primary add-row" tabindex="0">add_circle_outline</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="field.task"
                                            :rows="tasks"
                                            styleClass="vgt-table bordered striped"
                                            :search-options="{
                                                enabled: true,
                                                trigger: 'keyup',
                                                skipDiacritics: true,
                                                placeholder: 'Fill to search'
                                            }"
                                            max-height="350px"
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
                                            <template slot="table-row" slot-scope="props">
                                                <span v-if="props.column.field == 'action'">
                                                    <div class="action">
                                                        <i v-on:click="handlerShowModal('Update', 'Task', props.row.ID, 'tasks')" class="material-icons success edit-user">edit</i>
                                                        <i class="material-icons danger delete-user disabled" >delete</i>
                                                    </div>
                                                </span>
                                                <span v-else-if="props.column.field == 'TASK_CODE'">
                                                    <div style="text-align: center;">
                                                       {{props.row.TASK_CODE}}
                                                    </div>
                                                </span>
                                                <span v-else>{{props.row.TASK_NAME}}</span>
                                            </template>
                                        </vue-good-table>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="is-col">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    Area
                                </div>
                                <div class="option-box">
                                    <div class="option-item">
                                        <div  class="action">
                                            <i id="add-row" v-on:click="handlerShowModal('Add', 'Area', '', '')" class="material-icons primary add-row" tabindex="0">add_circle_outline</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <template>
                                    <div>
                                        <vue-good-table
                                            :columns="field.area"
                                            :rows="areas"
                                            styleClass="vgt-table bordered striped"
                                            :search-options="{
                                                enabled: true,
                                                trigger: 'keyup',
                                                skipDiacritics: true,
                                                placeholder: 'Fill to search'
                                            }"
                                            max-height="350px"
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
                                            <template slot="table-row" slot-scope="props">
                                                <span v-if="props.column.field == 'action'">
                                                    <div class="action">
                                                        <i v-on:click="handlerShowModal('Update', 'Area', props.row.ID, 'areas')" class="material-icons success edit-user">edit</i>
                                                        <i class="material-icons danger delete-user disabled" >delete</i>
                                                    </div>
                                                </span>
                                                <span v-else-if="props.column.field == 'AREA_CODE'">
                                                    <div style="text-align: center;">
                                                       {{props.row.AREA_CODE}}
                                                    </div>
                                                </span>
                                                <span v-else>{{props.row.AREA_NAME}}</span>
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
        <!-- modal add data -->
        <div class="modal-box" id="modal-add-data">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-add-data')"></span>
                    <div class="modal-header">
                        <h2 class="title">
                            <span id="post-status"></span> 
                            <span class="post-type" id="post-type"></span>
                        </h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label><span class="post-type"></span> data <span class="is-req">*</span></label>
                        <div class="is-row">
                            <div class="form-item is-col is-10">
                                <input v-model="form.type" type="hidden" name="">
                                <input v-model="form.status" type="hidden" name="">
                                <input v-model="form.id" type="hidden" name="">
                                <input  v-model="form.code" type="text" name="name">
                                <div class="is-desc">Code</div>
                            </div>
                            <div class="form-item is-col is-80">
                                <input  v-model="form.name" type="text" name="name">
                                <div class="is-desc"><span class="post-type"></span> name</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-add-data')">Close</button>
                        <button class="button is-success" v-on:click="handlerPostData()" type="submit" id="btn-save-data"> </button>
                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- modal add pattern -->
    </div>
</template>

<script>

import Loading from 'vue-loading-overlay'
import axios from 'axios'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import 'vue-loading-overlay/dist/vue-loading.css'
import FieldPhase from './datatable/FieldPhase'
import FieldTask from './datatable/FieldTask'
import FieldArea from './datatable/FieldArea'

export default {
    data: () => ({
        phases: [],
        tasks: [],
        areas: [],
        field: {
            phase: FieldPhase,
            task: FieldTask,
            area: FieldArea
        },
        datatable: {
            perPage: [10, 50, 100],
        },
        form: {
            id: "",
            code: "",
            name: "",
            type: "",
        },
        post_to:'',
    }),

    components: {
        Loading,
        VueGoodTable
    },

    mounted() {
        this.initPhase();
        this.initTask();
        this.initArea();
    },

    methods: {
        initPhase: function() {
            axios.get('/api/management/get_all_phase')
            .then(res => {
                this.phases = res.data;
            })
        },

        initTask: function() {
            axios.get('/api/management/get_all_task')
            .then(res => {
                this.tasks = res.data;
            })
        },

        initArea: function() {
            axios.get('/api/management/get_all_area')
            .then(res => {
                this.areas = res.data;
            })
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        handlerShowModal: function(status, type, id, item) {
            document.getElementById("post-status").innerHTML = status;
            let elem = document.getElementsByClassName("post-type");

            for(let i = 0; i < elem.length; i++ ) {
                elem[i].innerHTML = type;
            }

            if(status == "Add") {
                document.getElementById("btn-save-data").innerHTML = "Save";
                this.form = {
                    id: "",
                    code: "",
                    name: "",
                    type: type,
                    status: status
                };
            }else {
                
                document.getElementById("btn-save-data").innerHTML = "Update";
                let data = this[item].filter(d => d.ID === id);
                // console.log(data, id)
                let key_names = Object.keys(data[0]);
                console.log(key_names)

                if(key_names.length >= 3) {
                    this.form = {
                        id: data[0][key_names[0]],
                        code: data[0][key_names[1]],
                        name: data[0][key_names[2]],
                        type: type,
                        status: status
                    };
                }
            }
            $("#modal-add-data").show();
        },

        validate: function() {
            if(this.form.code == "") {
                toastr.warning("Code can't be empty");
                return false;
            }

            if(this.form.name == "") {
                toastr.warning("Name can't be empty");
                return false;
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

        handlerPostData: function() {
            if(!this.validate()) return;
            if(this.form.status == 'Add'){
                this.post_to = '/api/management/add_master';
            }
            else if(this.form.status == 'Update'){
                this.post_to = '/api/management/update_master';
            }
            this.handleButton('btn-save-data', 'load').then(() => {
                if(this.form.type)
                axios.post(this.post_to, this.form)
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success');

                        switch(this.form.type) {
                            case 'Phase': 
                                this.initPhase();
                                break;
                            case 'Task':
                                this.initTask();
                                break;
                            case 'Area':
                                this.initArea();
                                break;
                        }

                        setTimeout(()=> {
                            this.hideModal('modal-add-data');
                        }, 1000)

                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-save-data', 'stop');
                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-save-data', 'stop');
                })
            })
        }
    },
}
</script>