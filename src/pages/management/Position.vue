<template>
    <div>

        <div class="is-row">
            <div class="is-col is-70">
                <div class="card">
            
                    <div class="headline">
                        <div class="is-row">
                            <div class="is-col is-60">
                                <h4 class="title">
                                    Position Management
                                </h4>
                            </div>
                            <div class="is-col is-40">
                                <div class="pull-right">
                                    <button v-on:click="actionForm(null, 'add')"><i class="fa fa-plus"></i> Add New Position</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">

                        <div>
                            <vue-good-table
                                :line-numbers="true"
                                style="width: 100%"
                                :columns="table.fields"
                                :rows="table.rows"
                                :search-options="{
                                    enabled: true,
                                    placeholder: 'Search this table',
                                }"
                            >
                                <template slot="table-row" style="background-color: #c5e1a5" slot-scope="props">
                                    <span v-if="props.column.field == 'name'" style="text-align: center">
                                        {{ props.row.name }}
                                    </span>

                                    <span v-if="props.column.field == 'abbr'" style="text-align: center">
                                        <span class="is-label is-danger">
                                            <strong><i>{{ '${' + props.row.abbr + '}' }}</i></strong>
                                        </span>
                                    </span>

                                    <span v-if="props.column.field == 'dynamic_query'" style="text-align: center">
                                        <i>{{ props.row.dynamic_query }}</i>
                                    </span>

                                    <span v-if="props.column.field == 'multiple_personel'" style="text-align: center">
                                        <span v-if="props.row.multiple_personel == 'y'" class="is-label is-success">
                                            Yes
                                        </span>
                                        <span v-else class="is-label is-warning">
                                            No
                                        </span>
                                    </span>
                                
                                    <span v-if="props.column.field == 'action'" style="text-align: center">
                                        <button v-on:click="actionForm(props.row, 'update')" style="display: unset; line-height: 18px">Edit</button>
                                        <button v-on:click="deletePosition(props.row)" style="display: unset; background: unset; line-height: 18px; background: red">Delete</button>
                                    </span>
                                </template>

                            </vue-good-table>

                        </div>
                    </div>
                </div>
            </div>

            <div class="is-30">
                
                <div class="container">

                    <div class="card">

                        <div class="card-body">

                            <dl>
                                <dt>!xpream-users!</dt>
                                <dd>
                                    Is a Dynamic Query to bind directly and get Non-LDAP users on XPREAM.
                                </dd>
                            </dl>

                        </div>
                        
                    </div>

                    <div class="card" style="margin-top: 20px">
                        <div class="card-body">

                            <dl>
                                <dt>Abbreviation</dt>
                                <dd>
                                    Is a short name of Position Name that used for Project Charter templating system. <br>How to use it
                                    <br><br>
                                    <p>
                                        1. For examle you want to insert Project Sponsor (abbreviation: <i><strong>ps</strong></i>). Just insert this text in MS Word Document <strong><i>${ps}</i></strong></p>
                                    <p>
                                        2. If you want to show Project Sponsor email, just add <strong><i>_email</i></strong>. For example <strong><i>${ps_email}</i></strong> 
                                    </p>
                                    <p>
                                        3. If you want to show Project Sponsor phone number, just add <strong><i>_no</i></strong>. For example <strong><i>${ps_no}</i></strong> 
                                    </p>
                                </dd>
                            </dl>

                        </div>
                    </div>

                    <div class="card" style="margin-top: 20px">
            
                        <div class="card-body">

                            <dl>
                                <dt>Dynamic Query</dt>
                                <dd>
                                    A text that used for searching an employees from SOE Database within it's title. For example, 
                                    <br><br>
                                    <p>If Project Sponsor dynamic query is GM%. Project sponsor will only can be inserted by employee has GM title</p>
                                    <p>If Dynamic Query is % it will allows all employees to fill it's position. % means any</p>
                                </dd>
                            </dl>

                        </div>
                    </div>

                </div>

            </div>
        </div>

        <!-- Modal -->
        <div class="modal-box" id="form_position">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('form_position')"></span>
                <div class="modal-header">
                    <h2 class="title">Position Management</h2>
                </div>
                <div class="modal-body" style="padding-right: 38px">

                    <form @submit.prevent="submitForm" 
                        enctype="multipart/form-data" method="post">
                        <div class="is-row">

                            <div class="is-col is-100">
                                <div class="form_item">
                                    <label for="">Position Name</label>
                                    <input type="text" v-model="modal.position.name" class="form-control" required>
                                </div>
                            </div>

                            <div class="is-col is-100" style="margin-top: 20px">
                                <div class="form_item">
                                    <label for="">Abbreviation</label>
                                    <input type="text" v-model="modal.position.abbr" class="form-control" required>
                                </div>
                            </div>

                            <div class="is-col is-100" style="margin-top: 20px">
                                <div class="form_item">
                                    <label for="">Dynamic Query</label>
                                    <input type="text" v-model="modal.position.dynamic_query" class="form-control" required>
                                </div>
                            </div>

                            <div class="is-col is-100" style="margin-top: 20px">
                                <div class="form_item">
                                    <label for="">Multiple Personel</label>
                                    <input type="checkbox" v-model="modal.position.multiple_personel" true-value="y" false-value="n" class="switch unset">
                                </div>
                            </div>

                            <hr>

                            <div class="is-col is-100" style="margin-top: 10px">
                                <div class="clearfix">
                                    <div class="pull-right">
                                        <button type="submit" v-on:click="submitForm" :disabled="isLoading"><i class="fa fa-check"></i> {{ isLoading ? 'Loading...':'Submit' }}</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </form>


                </div>

            </div>
        </div>
        <!-- Modal -->


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

    data: () => ({

        isLoading: false,
        errors: [],

        loading: {
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: true,
            cancel: false
        },

        customer_role: {
            id: null
        },

        search_query: '',
        table: {
            rows: [],
            fields: [
                {
                    label: 'Name',
                    field: 'name',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: true
                },
                {
                    label: 'Abbreviation',
                    field: 'abbr',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: true
                }, 
                {
                    label: 'Dynamic Query',
                    field: 'dynamic_query',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: true
                },
                {
                    label: 'Multiple Personel',
                    field: 'multiple_personel',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: true
                },
                {
                    label: '',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    field: 'action'

                }
            ],

        },

        form: {
            id: '',
            name: '',
            level: '',
            parent: '',
            slug: '',
            dynamic_query: '',
            multiple_personel: '',
            abbr: '',
        },

        modal: {
            type: '',
            position: {
                id: '',
                name: '',
                level: '',
                parent: '',
                slug: '',
                dynamic_query: '%',
                multiple_personel: 'y',
                abbr: '',
            }
        }
    }),

    mounted() {
        this.initData()
    },

    computed: {
        
    },

    watch: {
        // modal: {
        //     handler(val){
        //         console.log(val)
        //     },
        //     deep: true
        // }
    },

    methods: {
        initData: function(url) {

            // this.loading.isLoading = true
            axios.get('/api/management/position')
            .then( res => {
                this.loading.isLoading = false
                this.table.rows = res.data

                this.loading.isLoading = false
            })
        },

        // actionForm
        actionForm: function (data, type) {

            var vm = this

            vm.modal.type = type

            if (type == 'update') {
                toastr.success('ok update')
                vm.modal.position = data
            } else {
                vm.modal.position.multiple_personel = 'n'
            }

            $('#form_position').show()
        },

        deletePosition: function(data) {

            swal({
                title: "You Are Going to Delete Position",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.delete('/api/management/position/'+data.id)
                    .then( res => {
                        if (res.data.status == 'success') {
                            this.loading.isLoading = false
                            toastr.success(res.data.message, 'Success') 
                            this.hideModal('form_position')
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

        submitForm: function() {

            var vm = this

            vm.isLoading = true

            let data_validation = [
                {'element': vm.modal.position.name, 'type' : 'Name', 'data' : 'pass'},
                {'element': vm.modal.position.abbr, 'type' : 'Abbreviation', 'data' : 'string'},
                {'element': vm.modal.position.dynamic_query, 'type' : 'Dynamic Query', 'data' : 'string'},
                {'element': vm.modal.position.multiple_personel, 'type' : 'Multiple Personel', 'data' : 'string'},
            ]

            if(!this.validation(data_validation)) {
                return;
            } else {

                swal({
                    title: "You Are Going to Create New Position",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        if(this.modal.type == 'add')
                        {
                            axios.post('/api/management/position', this.modal.position)
                            .then( res => {

                                if (res.data.status == 'success') {
                                    toastr.success(res.data.message, 'Success')
                                    this.initData()
                                    this.hideModal('form_position')

                                    vm.isLoading = false
                                }
                                else if (res.data.status == 'error') {

                                    let errors = res.data.errors

                                    for(let i = 0; i < errors.abbr.length; i++) {
                                        toastr.error(res.data.errors.abbr[i], 'Oopss!')
                                    }

                                    vm.isLoading = false
                                    // res.data.errors
                                }
                                
                            })
                            .catch( error => {
                                console.log(error)
                            })
                        }
                        else if (this.modal.type == 'update')
                        {
                            axios.put('/api/management/position/'+this.modal.position.id, this.modal.position)
                            .then( res => {
                                if (res.data.status == 'success') {
                                    this.isLoading = false
                                    toastr.success(res.data.message, 'Success') 
                                    this.hideModal('form_position')
                                    this.initData()
                                }
                                else if (res.data.status == 'error') {
                                    this.isLoading = false
                                    toastr.error(res.data.message, 'Oopss!')
                                }
                            })
                        }
                    } else {
                        toastr.info("Canceled");
                    }
                })
            }
        },

        validation: function(elements) {

            this.loading.isLoading = false

            if(!this.modal.is_ldap == 'y') {
                // this.modal.user.name = 'ldap_temp'
            }

            for(let i = 0; i < elements.length; i++) {
                if(elements[i].element == "") {
                    toastr.warning(elements[i].type + ' cant be empty');
                    return false;
                }
            }
            return true;  
        },

        addModal: function(data = null, type = 'add') {
            this.modal.type = 'add'

            swal({
                title: "You Are Going to Create New Position",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    axios.post('/api/management/position')
                    .then( res => {
                        if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success')
                            this.initData()
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

        reset: function() {
            this.modal = {
                type: '',
                position: {
                    id: '',
                    name: '',
                    level: '',
                    parent: '',
                    slug: '',
                    dynamic_query: '',
                    multiple_personel: '',
                    abbr: '',
                }
            }
        },

        hideModal: function (modal_name) {
            // deleteformhere
            this.reset()
            this.initData()
            $('#' + modal_name).hide()
        },
        

    }

}
</script>

<style scoped>
    ::v-deep .centerize {
        margin: auto;
        text-align: center
    }
</style>