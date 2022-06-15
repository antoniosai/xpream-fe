<template>
    <div>

        <div class="is-row">
            <div class="is-col is-70">
                <div class="card">
            
                    <div class="headline">
                        <div class="is-row">
                            <div class="is-col is-60">
                                <h4 class="title">
                                    Notification Type Management
                                </h4>
                            </div>
                            <div class="is-col is-40">
                                <div class="pull-right">
                                    <button v-on:click="actionForm(null, 'add')"><i class="fa fa-plus"></i> Add New Notification</button>
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
                                    placeholder: 'Search Notification',
                                }"
                            >
                                <template slot="table-row" style="background-color: #c5e1a5" slot-scope="props">
                                    <span v-if="props.column.field == 'name'" style="text-align: center">
                                        {{ props.row.name }}
                                    </span>

                                    <span v-if="props.column.field == 'type'" style="text-align: center">
                                        <span class="is-label is-success">
                                            <strong><i>{{ props.row.type }}</i></strong>
                                        </span>
                                    </span>

                                    <span v-if="props.column.field == 'description'" style="text-align: center">
                                        <i>{{ props.row.description }}</i>
                                    </span>

                                    <span v-if="props.column.field == 'receiver'" style="text-align: center">
                                        <i>{{ props.row.receiver_count }} receiver(s)</i>
                                    </span>

                                    <span v-if="props.column.field == 'action'" style="text-align: center">
                                        <button v-on:click="receiverModal(props.row)" style="display: unset; line-height: 18px">Add Broadcast Receiver</button>
                                        <button v-on:click="actionForm(props.row, 'update')" style="display: unset; background: #fb8c00; color: white; line-height: 18px">Edit</button>
                                        <button v-on:click="deleteNotif(props.row)" style="display: unset; background: unset; line-height: 18px; background: red">Delete</button>
                                    </span>
                                </template>

                            </vue-good-table>

                        </div>
                    </div>
                </div>
            </div>

            <div class="is-30">

                &nbsp;
                
                <!-- <div class="container">

                    <div class="card">
            
                        <div class="card-body">

                            <dl>
                                <dt>Abbreviation</dt>
                                <dd>
                                    Is a short name of notif Name that used for Project Charter templating system. <br>How to use it
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
                                    <p>If Dynamic Query is % it will allows all employees to fill it's notif. % means any</p>
                                </dd>
                            </dl>

                        </div>
                    </div>

                </div> -->

            </div>
        </div>

        <!-- Modal -->
        <div class="modal-box" id="form_notif">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('form_notif')"></span>
                <div class="modal-header">
                    <h2 class="title">{{ modal.type | capitalize }} Notification Type</h2>
                </div>
                <div class="modal-body" style="padding-right: 38px">

                    <form @submit.prevent="submitForm" 
                        enctype="multipart/form-data" method="post">
                        <div class="is-row">

                            <div class="is-col is-100">
                                <div class="form_item">
                                    <label for="">Notification Name</label>
                                    <input type="text" v-model="modal.notif.name" class="form-control" required>
                                </div>
                            </div>

                            <div class="is-col is-100" style="margin-top: 20px">
                                <div class="form_item">
                                    <label for="">Type Notification</label>
                                    <input type="text" @keydown.space.prevent v-model="modal.notif.type" class="form-control" required>
                                </div>
                            </div>

                            <div class="is-col is-100" style="margin-top: 20px">
                                <div class="form_item">
                                    <label for="">Description</label>
                                    <textarea v-model="modal.notif.description" cols="30" rows="3"></textarea>
                                </div>
                            </div>
                            <hr>

                            <div class="is-col is-100" style="margin-top: 10px">
                                <div class="clearfix">
                                    <div class="pull-right">
                                        <button type="submit" :class="isLoading == true ? 'is-loading' : ''"  v-on:click="submitForm" :disabled="isLoading"><i class="fa fa-check"></i> {{ isLoading ? 'Loading...':'Submit' }}</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </form>


                </div>

            </div>
        </div>
        <!-- Modal -->

        <!-- Modal Receiver -->
        <div class="modal-box" id="receiver_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('receiver_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">{{ modal.receiver.name }} - Broadcast Notification Receiver</h2>
                </div>
                <div class="modal-body">

                    <div class="is-row">
                        <div class="is-col is-40">

                            <div class="card">
                                <div class="card-content">
                                    <form @submit.prevent="submitReceiver" enctype="multipart/form-data" method="post" style="margin-right: 20px">
                                        <div class="is-row">

                                            <div class="is-col is-100">
                                                <div class="form_item">
                                                    <label for="">Add Email</label>
                                                    <input type="email" placeholder="Type an email address for Notification Receiver" v-model="form_receiver.email" class="form-control" required>
                                                </div>
                                            </div>
                                            <hr>

                                            <div class="is-col is-100" style="margin-top: 10px">
                                                <div class="clearfix">
                                                    <div class="pull-right">
                                                        <button type="submit" :class="isLoading ? 'is-loading' : ''"  :disabled="isLoading"><i class="fa fa-check"></i> {{ isLoading ? 'Loading...':'Submit' }}</button>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="is-col is-60">
                            <vue-good-table
                                :line-numbers="true"
                                style="width: 100%"
                                :columns="table_receiver.fields"
                                :rows="modal.receiver.receiver"
                                :search-options="{
                                    enabled: true,
                                    placeholder: 'Search Notification',
                                }"
                            >
                                <template slot="table-row" style="background-color: #c5e1a5" slot-scope="props">
                                    <span v-if="props.column.field == 'email'" style="text-align: center">
                                        {{ props.row.email }}
                                    </span>

                                    <span v-if="props.column.field == 'action'" style="text-align: center">
                                        <button v-on:click="editEmail(props.row)" style="display: unset; background: #fb8c00; color: white; line-height: 18px">Edit</button>
                                        <button v-on:click="deleteEmail(props.row)" style="display: unset; background: unset; line-height: 18px; background: red">Delete</button>
                                    </span>
                                </template>

                            </vue-good-table>

                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- Modal -->

        <!-- Modal Receiver -->
        <div class="modal-box" id="update_email">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('update_email')"></span>
                <div class="modal-header">
                    <h2 class="title">Update Email</h2>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateEmail">
                        <div class="form-item">
                            <label>Email Address</label>
                            <input type="email" v-model="form_email.email">
                        </div>
                        <br>
                        <div class="clearfix">
                            <div class="pull-right">
                                <button type="submit" :class="isLoading ? 'is-loading' : ''" :disabled="isLoading"><i class="fa fa-check"></i> {{ isLoading ? 'Loading...':'Update Email' }}</button>
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

    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
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
                    label: 'Type',
                    field: 'type',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: true
                }, 
                {
                    label: 'Description',
                    field: 'description',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: true
                },
                {
                    label: 'Receiver',
                    field: 'receiver',
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

        table_receiver: {
            rows: [
                {
                    id: 21,
                    email: 'finallyantonio@gmail.com',
                },
                {
                    id: 22,
                    email: 'jajang@gmail.com',
                }
            ],
            fields: [
                {
                    label: 'Email Address',
                    field: 'email',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: true
                },
                {
                    label: '',
                    thClass: 'centerize',
                    tdClass: 'centerize',
                    sortable: false,
                    field: 'action'

                }
            ],

        },

        form: {
            id: '',
            name: '',
            type: '',
            description: ''
        },

        form_receiver: {
            email: ''
        },

        form_email: {
            id: '',
            notification_id: '',
            email: ''
        },

        modal: {
            type: 'Add',
            notif: {
                id: '',
                name: '',
                type: '',
                description: ''
            },
            receiver: {
                id: '',
                name: '',
                type: '',
                description: '',
                receiver: []
            },
            email: {
                id: '',
                notification_id: '',
                email: ''
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
            axios.get('/api/management/notification')
            .then( res => {
                this.loading.isLoading = false
                this.table.rows = res.data

                this.loading.isLoading = false
            })
        },

        // ReceiverModal
        receiverModal: function(data) {
            var vm = this

            axios.get('/api/management/notification/'+data.id)
            .then(res => {
                vm.modal.receiver = res.data
            })


            $('#receiver_modal').show()
        },

        // actionForm
        actionForm: function (data, type) {

            var vm = this

            vm.modal.type = type

            if (type == 'update') {
                toastr.success('ok update')
                vm.modal.notif = data
            } else {
            }

            $('#form_notif').show()
        },

        deleteNotif: function(data) {

            swal({
                title: "You Are Going to Delete notif",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.delete('/api/management/notification/'+data.id)
                    .then( res => {
                        if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success') 
                            this.hideModal('form_notif')
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

            

            let data_validation = [
                {'element': vm.modal.notif.name, 'type' : 'Name', 'data' : 'pass'},
                {'element': vm.modal.notif.type, 'type' : 'Notification Type', 'data' : 'string'},
                {'element': vm.modal.notif.description, 'type' : 'Description', 'data' : 'string'},
            ]

            if(!this.validation(data_validation)) {
                return;
            } else {

                

                swal({
                    title: "You Are Going to Create New notif",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        vm.isLoading = true

                        if(this.modal.type == 'add')
                        {
                            axios.post('/api/management/notification', this.modal.notif)
                            .then( res => {

                                if (res.data.status == 'success') {
                                    toastr.success(res.data.message, 'Success')
                                    this.initData()
                                    this.hideModal('form_notif')

                                    vm.isLoading = false
                                }
                                else if (res.data.status == 'error') {
                                    let errors = res.data.errors

                                    for(let i = 0; i < errors.type.length; i++) {
                                        toastr.error(res.data.errors.type[i], 'Oopss!')
                                    }

                                    vm.isLoading = false
                                    // res.data.errors
                                    toastr.error(res.data.message, 'Oopss!')
                                }
                                
                            })
                            .catch( error => {
                                console.log(error)
                            })
                        }
                        else if (this.modal.type == 'update')
                        {
                            axios.put('/api/management/notification/'+this.modal.notif.id, this.modal.notif)
                            .then( res => {
                                if (res.data.status == 'success') {
                                    toastr.success(res.data.message, 'Success')
                                    this.hideModal('form_notif')
                                    this.initData()
                                }
                                else if (res.data.status == 'error') {


                                    let errors = res.data.errors

                                    for(let i = 0; i < errors.type.length; i++) {
                                        toastr.error(res.data.errors.type[i], 'Oopss!')
                                    }

                                    this.isLoading = false
                                    // res.data.errors
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

        submitReceiver: function() {

            var vm = this

            let data_validation = [
                {'element': vm.form_receiver.email, 'type' : 'Email', 'data' : 'pass'}
            ]

            if(!this.validation(data_validation)) {
                return;
            } else {

                swal({
                    title: "You Are Going to Add Receiver",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    vm.isLoading = true
                    if (value) {

                        this.isLoading = true

                        let params = {
                            notification_id: this.modal.receiver.id,
                            email: this.form_receiver.email
                        }

                        console.log(params)

                        axios.post('/api/management/notification/add_email', params)
                        .then( res => {
                            if(res.data.status == 'error') {
                                toastr.error(res.data.message, 'Ooppss!')
                                this.isLoading = false
                            } else if (res.data.status == 'success') {
                                toastr.success(res.data.message, 'Success!')
                                this.isLoading = false
                                this.form_receiver.email = ''

                                axios.get('/api/management/notification/'+params.notification_id)
                                .then(res => {
                                    this.modal.receiver = res.data
                                })
                            }
                            this.isLoading = false
                        })


                    } else {
                        toastr.info("Canceled");
                    }
                })
            }
        },

        editEmail: function(data) {
            
            this.form_email = data

            $('#update_email').show()
        },

        updateEmail: function() {

            swal({
                title: "You Are Going to Edit Receiver",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {

                    
                    this.isLoading = true

                    let params = {
                        id: this.form_email.id,
                        email: this.form_email.email,
                    }

                    console.log(params)

                    axios.post('/api/management/notification/update_email', params)
                    .then( res => {
                        if(res.data.status == 'error') {
                            toastr.error(res.data.message, 'Ooppss!')
                            this.isLoading = false
                        } else if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success!')
                            this.isLoading = false
                            this.form_receiver.email = ''

                            this.hideModal('update_email')

                            axios.get('/api/management/notification/'+this.form_email.notification_id)
                            .then(res => {
                                this.modal.receiver = res.data
                            })
                        }
                        this.isLoading = false
                    })

                } else {
                    toastr.info("Canceled");
                }
            })
        },

        deleteEmail: function(data) {
            swal({
                title: "You Are Going to Delete Receiver",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    
                    this.isLoading = true

                    let params = {
                        notification_id: this.modal.receiver.id,
                        email: data.email
                    }

                    console.log(params)

                    axios.post('/api/management/notification/delete_email', params)
                    .then( res => {
                        if(res.data.status == 'error') {
                            toastr.error(res.data.message, 'Ooppss!')
                            this.isLoading = false
                        } else if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success!')
                            this.isLoading = false
                            this.form_receiver.email = ''

                            axios.get('/api/management/notification/'+params.notification_id)
                            .then(res => {
                                this.modal.receiver = res.data
                            })
                        }
                        this.isLoading = false
                    })

                } else {
                    toastr.info("Canceled");
                }
            })
        },

        validation: function(elements) {

            this.isLoading = false

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
                title: "You Are Going to Create New notif",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    axios.post('/api/management/notification')
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
                type: 'add',
                notif: {
                    id: '',
                    name: '',
                    type: '',
                    description: ''
                },
                receiver: {
                    id: '',
                    name: '',
                    type: '',
                    description: '',
                    receiver: []
                },
                email: {
                    id: '',
                    notification_id: '',
                    email: ''
                }
            }
        },

        hideModal: function (modal_name) {

            if(modal_name == 'form_notif')
            {
                this.reset()
                this.initData()
            }
            
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