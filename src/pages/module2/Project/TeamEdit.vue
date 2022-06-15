<template>
    <div>

        <loading style="margin-top: 50px;"
            :active.sync="loading.isLoading" 
            :can-cancel="false"
            :is-full-page="false"
            :color="loading.color"
            :loader="loading.loaderType">
        </loading>

        <div class="content-header"></div>

        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li :class="'tab-link'+tab1" v-on:click="toggletab(1)" data-tab="tab-list-project_team">Project Team</li>
                <li :class="'tab-link'+tab2" v-on:click="toggletab(2)" data-tab="tab-list-master_input">Project Charter</li>
                <li v-if="pg.project_file !== null && pg.project_file !== ''" class="tab-link" data-tab="tab-list-download" v-on:click="createCharter">Download</li>
            </ul>
            
            <div :class="'card tab-content'+tab1" id="tab-list-project_team" style="border-radius: 0px 8px 8px 8px;">
                <div class="content-body">
                    <div class="card-header no-border">
                        <div class="title-area">
                            <h3 class="title" v-if="objEmpty(line_detail)">Project / Planning Gate</h3>
                            <span class="subtitle total-project"><span v-if="pg.hangar && pg.line">| Hangar-Line : <strong>{{ pg.hangar.name + '-' + pg.line.line_name }}</strong> </span> | A/C Reg : <strong>{{ pg.ac_reg }}</strong></span>
                            <!-- <span class="subtitle total-project"><strong>{{ line_detail.hangar.name }} - {{ line_detail.line_name }}</strong></span> -->
                        </div>
                        <div class="content-header">
                            <div class="option-box">
                                <!-- <button v-on:click="createCharter" class="button is-primary"><i class='material-icons'>refresh</i> Refresh Template</button> &nbsp; &nbsp;
                                <a v-if="pg.project_file" v-bind:href="pg.project_file" class="button"><i class="fa fa-file-word-o"></i> Download Project Charter</a> -->
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="card-content">
                        <div v-if="!isLoad">
                            <div v-if="pg.project_file == null || pg.project_file == ''">
                                <div class="alert is-focus">
                                    <button class="button is-small" v-on:click="createTemplate">Save New Project Team</button> 
                                    or 
                                    <button v-on:click="$router.go(-1)" style="color:#fafafa; background-color: #f93232;" class="button is-small is-destructive">No, Turn me back</button>
                                </div>
                            </div>

                            <div class="is-row">
                                <div class="is-col">

                                    <table>
                                        <thead>
                                            <tr style="background-color: #90a4ae; color: white">
                                                <td style="text-align: center">No</td>
                                                <td>Name</td>
                                                <td>Email</td>
                                                <td>Phone</td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody v-for="position in positions" :key="position.id">
                                            <tr style="background-color: #cfd8dc">
                                                <td></td>
                                                <td colspan="3">
                                                    <h4>{{ position.label }} {{ (position.multiple_personel == 'y' ? position.children.length + ' personel(s)' : '('+position.children.length+'/1)') }}</h4>
                                                </td>
                                                <td>
                                                    <div v-if="position.multiple_personel == 'y'">
                                                        <div class="clearfix" style="margin-right: 20px">
                                                            <div class="pull-right">
                                                                <button v-on:click="addPersonel(position)">Add Personel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr v-for="(user, index) in position.children" :key="user.id">
                                                <td v-if="user" style="text-align: center">{{ index+1 }}</td>
                                                <td v-if="user">{{ user.name }}</td>
                                                <td v-if="user" style="text-align: center">{{ user.email }}</td>
                                                <td v-if="user" style="text-align: center">
                                                    <span v-if="user.phone">
                                                        +62 {{ user.phone }}
                                                    </span>
                                                    <span v-else>
                                                        <button class="my_button" v-on:click="editModal(user)"><i class='material-icons'>local_phone</i>Add Phone</button>
                                                    </span>
                                                </td>
                                                <td style="text-align: center">
                                                    <div class="action">
                                                        <button class="my_button" v-on:click="editModal(user)"><i class='material-icons'>mode_edit</i>Detail</button> &nbsp;
                                                        <button class="my_button" v-on:click="changeModal(user, position)"><i class='material-icons'>settings</i>Change</button> &nbsp;
                                                        <button class="my_button" v-on:click="deletePersonel(pg_id, position.id, user.id)"><i class='material-icons'>delete</i>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr v-if="position.children.length == 0" style="text-align: right;">
                                                <td></td>
                                                <td colspan="5" style="padding-right: 20px">
                                                    Doesnt have personel for this position, <button v-on:click="addPersonel(position)">Add Personel</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <!-- <vue-good-table
                                        :columns="columns"
                                        :rows="positions"
                                        :groupOptions="{
                                            enabled: true
                                        }"
                                        :line-numbers="true"
                                        :search-options="{
                                            enabled: true,
                                            placeholder: 'Type and enter to search'
                                        }"
                                    >
                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'name'">
                                                {{ props.row.name }}
                                            </span>
                                            <span v-if="props.column.field == 'email'">
                                                {{ props.row.email }}
                                            </span>
                                            <span v-if="props.column.field == 'phone'">
                                                <span v-if="props.row.phone">
                                                    +62 {{ props.row.phone }}
                                                </span>
                                                <span v-else>
                                                    <button class="button is-primary" v-on:click="editModal(props.row)"><i class='material-icons'>local_phone</i>Add Phone</button>
                                                </span>
                                            </span>
                                            <span v-if="props.column.field == 'action'">
                                                <div class="action">
                                                    <button class="button is-primary" v-on:click="editModal(props.row)"><i class='material-icons'>mode_edit</i>Edit</button> &nbsp;
                                                    <button class="button is-primary" v-on:click="changeModal(props.row)"><i class='material-icons'>settings</i>Change</button> &nbsp;
                                                    <button class="button is-danger" v-on:click="deleteMember(props.row)"><i class='material-icons'>delete</i>Delete</button>
                                                </div>
                                            </span>
                                        </template>
                                        <template slot="table-header-row" slot-scope="props">
                                            <span class="my-fancy-class">
                                                {{ props.row.label }}
                                            </span>
                                        </template>
                                    </vue-good-table> -->

                            
                                </div>
                                <!-- <div class="is-col is-30"> -->
                                    <!-- s -->
                                    <!-- <div>&nbsp;</div> -->
                                <!-- </div> -->
                            </div>
                        </div>

                    </div>
                        
                </div>
                
            </div>

            <div :class="'card tab-content'+tab2" id="tab-list-master_input" style="border-radius: 0px 8px 8px 8px;">
                <div class="content-body">
                    <div class="card-header no-border">
                        <div class="title-area">
                            <h3 class="title" v-if="objEmpty(line_detail)">Project</h3>
                            <span class="subtitle total-project"><strong>#{{pg.pg_id }}</strong> | A/C Type : <strong>{{ pg.ac_type }}</strong> <span v-if="pg.hangar && pg.line">| Hangar-Line : <strong>{{ pg.hangar.name + '-' + pg.line.line_name }}</strong> </span> | A/C Reg : <strong>{{ pg.ac_reg }}</strong></span>
                            <!-- <span class="subtitle total-project"><strong>{{ line_detail.hangar.name }} - {{ line_detail.line_name }}</strong></span> -->
                        </div>
                        <div class="content-header">
                            <div class="option-box">
                                <!-- <a v-if="pg.project_file" v-bind:href="pg.project_file" class="button"><i class="fa fa-file-word-o"></i> Download Project Charter</a> -->
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="card-content">
                        <!-- <MasterInput :pg="pg" /> -->

                        <div class="is-row">
                            <div class="is-col is-70">
                                <form @submit.prevent="saveMasterData">
                                    <div class="is-row">
                                        <div class="is-col is-50" v-for="variable in variables" :key="variable.id">
                                            <div class="form-item" style="margin-top: 15px">
                                                <label>{{ variable.description }} <small><strong><i>{{ '${'+variable.variable+'}' }}</i></strong></small> </label>
                                                <input :type="variable.form_type" :placeholder="variable.description" v-model="variable.value" v-if="variable.form_type != 'textarea'">
                                                <textarea :placeholder="variable.description" v-else-if="variable.form_type == 'textarea'" rows="3" v-model="variable.value"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="clearfix">
                                        <div class="pull-right">
                                            <button><i class="fa fa-save"></i> Save Project Charter</button>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            <div class="is-col is-30">
                                &nbsp;
                            </div>
                        </div>
                        
                        
                    </div>
                        
                </div>
            </div>

            <div class="card tab-content" id="tab-list-download">
                
                <div class="content-body">

                    <div class="card-header no-border">
                        <div class="title-area">
                            <h3 class="title" v-if="objEmpty(line_detail)">Project / Planning Gate</h3>
                            <span class="subtitle total-project">Sales ID <strong>#{{pg.pg_id }}</strong> | A/C Type : <strong>{{ pg.ac_type }}</strong> <span v-if="pg.hangar && pg.line">| Hangar-Line : <strong>{{ pg.hangar.name + '-' + pg.line.line_name }}</strong> </span> | A/C Reg : <strong>{{ pg.ac_reg }}</strong> | AMS : <strong>{{ pg.ams_txt }}</strong></span>
                            <!-- <span class="subtitle total-project"><strong>{{ line_detail.hangar.name }} - {{ line_detail.line_name }}</strong></span> -->
                        </div>
                        <div class="content-header">
                            <div class="option-box">
                                <!-- <a v-if="pg.project_file" v-bind:href="pg.project_file" class="button"><i class="fa fa-file-word-o"></i> Download Project Charter</a> -->
                            </div>
                        </div>
                    </div>
                    <hr>
                    
                    <div class="card-content">

                        <div class="is-row" v-if="loading.isLoading == false">

                            <div class="is-col is-30"></div>

                            <div class="is-col is-40">
                                <div class="card" style="margin-top: 16px">
                                    <center>
                                        <img v-on:click="downloadProjectCharter" style="cursor: pointer; height: 110px" src="/assets/img/download.png" alt="">
                                        <br>
                                        <br>
                                        Project Charter is ready to download
                                        <br v-if="pg.project_charter_update">
                                        <small v-if="pg.project_charter_update" style="color: grey">Last Update {{ pg.project_charter_update }}</small>
                                        <br>
                                        <button style="margin-top: 10px" v-on:click="downloadProjectCharter">Download Latest Project Charter</button>
                                    </center>
                                </div>
                                
                            </div>
                            
                            <div class="is-col is-30"></div>

                        </div>

                    </div>
                        
                </div>
            </div>

        </div>

        <!-- Edit Modal -->
        <div class="modal-box" id="edit_modal">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('edit_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Edit Details Member</h2>
                </div>
                <div class="modal-body">
                    <div class="form-item">
                        <label>Name</label>
                        {{ modal.user.name }}
                    </div>
                    <div class="form-item form-username">
                        <label>Username</label>
                        {{ modal.user.username }}
                    </div>
                    <div class="form-item">
                        <label>Position</label>
                        {{ modal.user.title }}
                    </div>
                    <div class="form-item">
                        <label>Email</label>
                        {{ modal.user.email }}
                    </div>
                    <div class="form-item is-bar">
                        <label>Phone number</label>
                        <input type="text" value="+62" name="phone-prefix" size="3" disabled>
                        <input type="text" v-model="modal.user.phone" name="phone-number" placeholder="828xxxxx">
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button class="button is-success" v-on:click="updatePhone">Save</button>
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('edit_modal')">Cancel</a>
                </div>
            </div>
        </div>
        <!-- / Edit Modal -->

        <!-- Edit Modal -->
        <div class="modal-box" id="change_modal">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('change_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Change Personel</h2>
                </div>
                <div class="modal-body">
                    
                        <div class="is-row">
                            <div class="is-col is-20">
                                <img v-bind:src="modal.user.avatar" alt="">
                            </div>
                            <div class="is-col is-80">
                                <h3 style="margin-bottom: 2px">{{ modal.user.name }}<br><small>{{ modal.user.username }}</small> - <small>{{ modal.user.unit }}</small></h3>
                                <hr style="margin: 0 auto">
                                <p style="margin-top: 2px">{{ modal.user.jabatan }}</p>
                            </div>
                        </div>
                    <p style="margin-top: 7px; margin-bottom: 0px">
                        Replace with
                    </p>
                    
                    <!-- <multiselect 
                        v-model="modal.user.model" 
                        placeholder="Type at least 2 characters to Get Employee" 
                        :options="modal.new_personel.options"
                        :multiple="false"
                        :custom-label="employeeLabel" 
                        label="nama" 
                        track-by="nama" 
                        :searchable="true" 
                        :internal-search="false" 
                        :clear-on-select="false" 
                        :close-on-select="true" 
                        :options-limit="300" 
                        :limit="3" 
                        :max-height="600" 
                        :show-no-results="false" 
                        :hide-selected="true" 
                        @search-change="asyncFind($event, modal.new_personel)"
                        >
                    </multiselect> -->

                    <multiselect 
                        v-model="form.selected_unit" 
                        :multiple="true"
                        :options="unit" 
                        :searchable="true" 
                        :close-on-select="false" 
                        :show-labels="false" 
                        placeholder="Select users who have a customer role"
                        @input="getEmployee(pg.line_id, modal.unit.position.id)"
                    />

                    <br>

                    <label>Select Personel</label>

                    <multiselect 
                        v-model="form.change_employee" 
                        :multiple="false"
                        :custom-label="employeeLabel" 
                        :options="modal.unit.employees" 
                        :searchable="true" 
                        :close-on-select="true" 
                        :show-labels="false" 
                        placeholder="Select users who have a customer role"
                    />
                    
                    
                </div>
                <div class="modal-footer">
                    <button class="button is-success" v-on:click="changePersonel">Submit</button>
                </div>
            </div>
        </div>
        <!-- / Edit Modal -->

        <!-- Add Personel Modal -->
        <div class="modal-box" id="add_personel">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('add_personel')"></span>
                <div class="modal-header">
                    <h2 class="title">Add Personel</h2>
                </div>
                <div class="modal-body">
                    <label>Unit</label>
                
                    <multiselect 
                        v-model="form.selected_unit" 
                        :multiple="true"
                        :options="unit" 
                        :searchable="true" 
                        :close-on-select="false" 
                        :show-labels="false" 
                        placeholder="Select users who have a customer role"
                        @input="getEmployee(pg.line_id, modal.unit.position.id)"
                    />

                    <br>

                    <label>Select Personel</label>

                    <multiselect 
                        v-model="form.selected_employee" 
                        :multiple="false"
                        :custom-label="employeeLabel" 
                        :options="modal.unit.employees" 
                        :searchable="true" 
                        :close-on-select="true" 
                        :show-labels="false" 
                        placeholder="Select users who have a customer role"
                    />
                  
                </div>
                <div class="modal-footer">
                    <button class="button is-success" v-on:click="submitPersonel">Submit</button>
                </div>
            </div>
        </div>
        <!-- / Add Personel Modal -->
        
    
    
    
    </div>

</template>

<script>

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

import MasterInput from './MasterInput'

export default {

    components: {
        Loading, VueGoodTable, Multiselect, MasterInput
    },

    data: () => ({
        isLoad: true,
        
        pdf: '/project_charter/12474_GAH1-20_08012020.pdf',
        unit: [],

        variables: [],

        form: {
            selected_unit: [],
            selected_employee: [],
            change_employee: [],
        },

        modal: {
            user: [],
            new_personel: {
                model: '',
                options: []
            },
            position_id: '',
            add_personel: {},
            unit: {
                position: {
                    id: '',
                    name: '',
                    level: '',
                    parent: '',
                    slug: '',
                    dynamic_query: '',
                    multiple_personel: ''
                },
                employees: []
            }
        },
        table: {
            rows: [],
            fields: [
                {
                    label: 'Name',
                    field: 'position',
                    sortable: false,
                    tdClass: 'text-center',
                }, 
                {
                    label: 'Position',
                    field: 'position',
                    sortable: false,
                    tdClass: 'text-center',
                }, 
                {
                    label: '',
                    field: 'action',
                    sortable: false,
                }
            ],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                doc_type: 'all',
                level: 'all',
                report: 'all',
                location: 'all',
                airframe_category: 'all',
                customer_category: 'all',
                project_status: 'all',
                doc_type: 'all',
                start_date: '',
                end_date: 'all',
                searchTerm: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },

        loading: {
            isLoading: false,
            isLoadingCustomer: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        api: {
            master: '/api/management/lin'
        },

        tab1: ' active',
        tab2: '',

        pg: {},

        pg_id: '',
        line: {},
        line_detail: {},
        members: [],
        positions: [],
        columns: [
            {
                label: "Name",
                field: 'name',
                sortable: true,
                tdClass: 'centerize',
                thClass: 'centerize',
            },
            {
                label: "Email",
                field: 'email',
                sortable: false,
                tdClass: 'centerize',
                thClass: 'centerize',
            },
            {
                label: "Phone",
                field: 'phone',
                sortable: false,
                tdClass: 'centerize',
                thClass: 'centerize',
            },
            {
                label: "Action",
                field: 'action',
                sortable: false,
                tdClass: 'centerize',
                thClass: 'centerize',
            },
        ]
    }),

    created() {
        this.pg_id = this.$route.params.pg_id
        // this.getProject(this.$route.params.pg_id)
        // this.getUnit()
        this.initData()
        this.initVariable()
    },

    methods: {

        getUnit: function() {
            axios.get('/api/management/employee/get_unit')
            .then( res => {
                this.unit = res.data
            })
        },

        employeeLabel ({ nopeg, nama, jabatan }) {
            return `${nopeg} | ${nama} — [${jabatan}]`
        },

        loadEmployee: function() {
            // console.log(this.form.selected_unit)
            
        },

        downloadProjectCharter: function() {
            window.location.href = this.pg.project_file;
        },

        asyncFind: function (query, emp) {
            // this.isLoading = true
            if(query.length >= 2)
            {
                this.modal.new_personel.options = []
                let template = this.modal.user.template

                let params = {
                    search_query: query,
                    unit: template.unit,
                    jabatan: template.jabatan
                }

                axios.post('/api/management/employee/search', params)
                .then(res => {
                    console.log(res.data)
                    this.modal.new_personel.options = res.data
                })
                // axios.get()
            }
        },

        asyncFindChangePersonel: function (query, emp) {
            // this.isLoading = true
            if(query.length >= 2)
            {
                this.modal.new_personel.options = []
                let template = this.modal.user.template

                let params = {
                    search_query: query,
                    unit: template.unit,
                    jabatan: template.jabatan
                }

                axios.post('/api/management/employee/search', params)
                .then(res => {
                    console.log(res.data)
                    this.modal.new_personel.options = res.data
                })
                // axios.get()
            }
        },

        getProject: function() {
            this.isLoad = true;
            axios.get('/api/slot_and_capacity/planning_gate/show/' + this.pg_id)
            .then( res => {
                if (res.data.status == 'success')
                {
                    this.pg = res.data.data
                    this.isLoad = false;
                }
            })
        },

        addPersonel: function(position) {
            
            let position_id = position.id
            let line_id = this.pg.line_id
            
            $('#add_personel').show()

            this.initPosition(position_id, line_id)
        },

        submitPersonel: function() {

            var vm = this

            vm.loading.isLoading = true

            swal({
                title: "You are going to Add new Personel To Default Template for " + this.modal.unit.position.name,
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {

                    
                    vm.loading.isLoading = true

                    let params = {
                        pg_id: this.pg_id,
                        position_id: this.modal.unit.position.id,
                        nopeg: this.form.selected_employee.nopeg
                    }

                    axios.post('/api/booking_and_submission/project',  params)
                    .then( res => {
                        if (res.data.status == 'success') {
                            this.initData()
                            toastr.success(res.data.message, 'Success!')
                            this.loading.isLoading = false
                            this.hideModal('add_personel')
                        }
                    })

                } else {
                    this.loading.isLoading = false
                    toastr.info("Canceled")
                }
            })

        },

        deletePersonel: function(pg_id, position_id, user_id) {

            this.loading.isLoading = true

            // console.log('PG ID: #' +pg_id + ' | Position ID: ' + position_id + 'User ID | ' + user_id )
            swal({
                title: "You are going to Delete Personel",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {

                    let params = {
                        pg_id: this.pg.id,
                        position_id: position_id,
                        user_id: user_id,
                    }
                    
                    axios.post('/api/booking_and_submission/project/delete_team', params)
                    .then (res => {
                        console.log(res.data)
                        if (res.data.status == 'success')    
                        {
                            this.initData()
                            toastr.success(res.data.message, 'Success!')
                        }
                    })

                } else {
                    
                }
            })

            this.loading.isLoading = false
        },

        editModal: function(user) {
            this.getUnit()
            this.modal.user = user
            // console.log(user)
            $('#edit_modal').show()
        },

        changeModal: function(user, position) {

            this.getUnit()

            let position_id = position.id
            this.modal.position_id = position.id
            let line_id = this.pg.line_id

            this.initPosition(position_id, line_id)

            this.modal.user = user
            console.log(user)
            $('#change_modal').show()
        },

        deleteMember: function(member) {
            // console.log(member)
        },

        hideModal: function (modal_name) {
            // deleteformhere
            this.resetModal()
            $('#' + modal_name).hide()
        },

        createCharter: function() {

            toastr.success('Updating Project Charter.<br>We are making sure that you will get the latest Project Charter', 'Please wait')

            this.loading.isLoading = true

            axios.get('/api/booking_and_submission/project/charter/' + this.pg_id)
            .then(res=> {
                if(res.data.status == 'success') {
                    swal({
                        
                        title: 'Success Generating Data',
                        text: res.data.message,
                        button: 'Download',
                        icon: "success",

                    }).then((value) => {
                        if(value){
                            window.location.href = res.data.filename;
                        }
                    })
                    this.loading.isLoading = false
                }
            })
        },

        saveMasterData: function() {

            this.loading.isLoading = true
            
            swal({
                title: "You are going to Save Project Charter",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    
                    axios.put('/api/booking_and_submission/project/master_input/'+this.pg_id, this.variables)
                    .then( res => {
                        if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success')
                            this.initVariable()
                            this.loading.isLoading = false
                        }
                    })

                } else {
                    this.loading.isLoading = false
                    toastr.info("Canceled")
                }
            })
            
        },

        updatePhone: function() {

            swal({
                title: "Change Detail",
                text: "You Are Going to Change Phone Number. Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    let params = {
                        id: this.modal.user.id,
                        phone: this.modal.user.phone
                    }

                    axios.put('/api/management/user/phone_update/'+this.modal.user.id, params)
                    .then( res => {
                        if(res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success')
                            // this.createCharter()
                            this.initData()
                            this.hideModal('edit_modal')
                        }
                    })

                } else {
                    toastr.info("Canceled")
                }
            })
        },

        changePersonel: function() {

            swal({
                title: "Change Personel",
                text: "You Are Going to Replace Personel. Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {

                    let data_body = {
                        type: 'change',
                        pg_id: this.pg.id,
                        position_id: this.modal.position_id,
                        user_id: this.modal.user.id,
                        new_data: this.form.change_employee
                    }

                    axios.post('/api/booking_and_submission/project/update_team', data_body)
                    .then( res => {
                        console.log(res.data)
                        if(res.data.status == 'success') {
                            this.hideModal('change_modal')
                            toastr.success(res.data.message, 'Success')
                            // this.createCharter()
                            this.initData()
                        }
                    })

                } else {
                    toastr.info("Canceled")
                }
            })

        },

        resetModal: function() {
            this.modal.user = []
            this.modal.new_personel.options = []

            this.form = {
                selected_employee: [],
                selected_unit: []
            }

            this.modal = {
                user: [],
                new_personel: {
                    model: '',
                    options: []
                },
                add_personel: {},
                unit: {
                    position: {
                        id: '',
                        name: '',
                        level: '',
                        parent: '',
                        slug: '',
                        dynamic_query: '',
                        multiple_personel: ''
                    },
                    employees: []
                }
            }
            
        },

        initOrgChart: function() {
            var chart = new OrgChart(document.getElementById("tree"), {
                // mouseScrool: OrgChart.action.none,
                layout: OrgChart.tree,
                enableSearch: false,
                template: "ula",
                enableDragDrop: false,
                nodeMenu:{
                    details: {text:"Details"},
                    edit: {text:"Edit"},
                    add: {text:"Add"},
                    remove: {text:"Remove"}
                },
                menu: {
                    pdf: { text: "Export PDF" },
                    png: { text: "Export PNG" },
                    svg: { text: "Export SVG" },
                    csv: { text: "Export CSV" }
                },
                tags: {
                    certiying_staff: {
                        group: true,
                        groupName: "Certiying Staff",
                        groupState: OrgChart.COLLAPSE,
                        template: "group_grey"
                    },
                    quality_control: {
                        group: true,
                        groupName: "Quality Control / RII",
                        groupState: OrgChart.COLLAPSE,
                        template: "group_grey"
                    },
                    production_manager: {
                        group: true,
                        groupName: "Production Manager",
                        groupState: OrgChart.COLLAPSE,
                        template: "group_grey"
                    },
                    engineer: {
                        templateName: 'Engineer',
                        group: true,
                        groupName: "Engineer",
                        groupState: OrgChart.COLLAPSE,
                        template: "group_grey"
                    }
                },
                nodeBinding: {
                    field_0: "name",
                    field_1: "title",
                    img_0: "img",
                    img_1: "img",
                    field_number_children: "field_number_children"
                },
                nodes: this.members
            });
        },


        initData: function() {
            var vm = this

            vm.loading.isLoading = true
            vm.getProject(vm.pg_id)

            axios.get('/api/booking_and_submission/project/' + vm.pg_id)
            .then( res => {
                vm.positions = res.data
                vm.loading.isLoading = false

                // vm.initOrgChart()
            })
        },
        
        initPosition: function(line_id, position_id) {
            axios.get('/api/management/employee/get_unit_by_line_and_position/'+ line_id +'/' + position_id)
            .then( res => {
                console.log(res.data)
                this.form.selected_unit = res.data.model
                this.modal.unit = res.data
            })
        },

        initVariable: function() {
            let params = {
                is_editable: 'y'
            }

            axios.get('/api/booking_and_submission/project/variable/show', { params })
            .then((response) => {
                this.variables = response.data.variables;
            })
        },

        getEmployee: function(line_id, position_id) {

            let params = {
                unit: this.form.selected_unit,
                line_id: line_id,
                position_id: position_id
            }

            axios.get('/api/management/employee/get_employee_by_unit', {params})
            .then( res => {
                console.log(res.data)
                this.modal.unit.employees = res.data.employees
                this.form.selected_employee = []
            })
        },

        // Ok init data but not satisfied
        // initData: function() {
            
        //     var vm = this

        //     vm.loading.isLoading = true

        //     axios.get('/api/booking_and_submission/project/' + vm.pg_id)
        //     .then( res => {
        //         if (res.data.status == 'success') {
        //             vm.members = res.data.team
        //             vm.getProject()
        //         }
        //         vm.loading.isLoading = false

        //         // vm.initOrgChart()
        //     })
        // },

        // getProject: function() {

        //     var vm = this
        //     vm.loading.isLoading = true
            
        //     axios.get('/api/slot_and_capacity/planning_gate/' + vm.pg_id)
        //     .then( res => {
        //         if(res.data.status == 'success')
        //         {
        //             vm.pg = res.data.data
        //         }
        //         vm.loading.isLoading = false
        //     })
        // },

        objEmpty: function(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        },

        createTemplate: function() {

            var vm = this

            swal({
                title: "You Are Going to Create New Team for this Project",
                text: "Default Data is based on it's Hangar & Line. Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    vm.loading.isLoading = true
                    axios.post('/api/booking_and_submission/project/create_template/' + vm.pg_id)
                    .then( res => {
                        if(res.data.status == 'success') {
                            axios.get('/api/booking_and_submission/project/charter/' + vm.pg_id)
                            vm.initData()
                            vm.loading.isLoading = false
                            toastr.success('Successfully Created Team')
                            // axios.get('/api/booking_and_submission/project/charter/12474')
                        } else {
                            toastr.error(res.data.message, 'Something wrong happens')
                            vm.loading.isLoading = false
                        }
                    })
                } else {
                    toastr.info("Canceled")
                    vm.loading.isLoading = false
                }
            })

            
        },


        toggletab(index){
            if(index==1){
                this.tab1 = ' active';
                this.tab2 = '';
            }
            else if(index==2){
                this.tab1 = '';
                this.tab2 = ' active';            
            }
        }

    }
}
</script>


<style scoped>
    ::v-deep .centerize {
        margin: auto;
        text-align: center
    }

    ::v-deep .my_button {
        background-color: white; 
        color: grey; border: 2px solid grey; 
        border-radius: 5px;
    }
</style>