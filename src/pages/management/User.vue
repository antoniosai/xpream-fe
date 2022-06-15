<template>

    <div>

        <div class="content-header"></div>
        <div class="content-body">
            <div class="is-row">
                <div class="is-col is-75">
                    <loading 
                        :loader="'dots'"
                        :color="'#1976d2'"
                        :width="loading.width"
                        :height="loading.height"
                        :active.sync="loading.isLoading" 
                        :can-cancel="loading.cancle" 
                        :is-full-page="loading.fullPage" 
                    />
                    <vue-good-table 
                        :line-numbers="true"
                        :columns="table.fields" 
                        :rows="table.rows"
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
                                    <div class="toolbar-item toolbar-dropdown" style="position: relative">
                                        <select class="by_timeframe" v-model="table.serverParams.is_ldap" @change="liveSearch">
                                            <option value="all" selected="">-- All User Type --</option>
                                            <option value="y">LDAP</option>
                                            <option value="n">Non-LDAP</option>
                                        </select>
                                    </div>
                                    <div class="toolbar-item toolbar-dropdown">
                                        <select class="by_timeframe" v-model="table.serverParams.is_active" @change="liveSearch">
                                            <option value="all" selected="">-- All User Status --</option>
                                            <option value="y">Active Users</option>
                                            <option value="n">In-Active Users</option>
                                        </select>
                                    </div>
                                    <div class="toolbar-item toolbar-dropdown">
                                        <select class="by_location" v-model="table.serverParams.role_id" @change="liveSearch">
                                            <option value="all">-- All Roles --</option>
                                            <option v-bind:value="r.id" v-for="r in roles" :key="r.id">{{ r.display_name }}</option>
                                        </select>
                                    </div>
                                    <div class="toolbar-item">
                                        <button v-on:click="userModal({}, 'add')" style="color:#465368; background-color: #ffffff;border: 1px solid grey;"><i class='material-icons'>add</i>Add User</button>
                                        <!-- <button v-else v-on:click="dashboard_show = true" style="min-width:195.89px;color:#465368;width:100%;background-color: #ffffff;border: 1px solid grey;">Show Summary</button> -->
                                    </div>
                                    <div class="toolbar-item">
                                        <div v-on:click="resetForm" class="single-button synchronize display-flex align-items-center justify-center" style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i class="material-icons warning sync_order" >sync</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <template slot="table-row" slot-scope="props">
                            <span v-if="props.column.field == 'avatar'">
                                <img v-bind:src="props.row.avatar" style="width: 30px" alt="">
                            </span>
                            <span v-if="props.column.field == 'name'">
                                {{ props.row.name }} <span class="is-label is-success" v-if="user.id == props.row.id">It's you</span>
                            </span>
                            <span v-if="props.column.field == 'email'">
                                {{ props.row.email }}
                            </span>
                            <span v-if="props.column.field == 'role'">
                                {{ props.row.role.display_name }}
                            </span>
                            <span v-if="props.column.field == 'username'">
                                {{ props.row.username }}
                            </span>
                            <span v-if="props.column.field == 'unit'">
                                {{ props.row.unit }}
                            </span>                            
                            <span v-if="props.column.field == 'phone'">
                                <span v-if="props.row.phone">
                                    +62 {{ props.row.phone }}
                                </span>
                            </span>
                            <span v-if="props.column.field == 'is_ldap'">
                                <span class="is-label is-success" v-if="props.row.is_ldap == 'y'">LDAP</span>
                                <span class="is-label is-warning" v-else>NON-LDAP</span>
                            </span>
                            <span v-if="props.column.field == 'is_active'">
                                <span class="clickable is-label is-danger" v-if="props.row.is_active == 'n'">INACTIVE</span>
                                <span class="clickable is-label is-success" v-else>ACTIVE</span>
                            </span>
                            <span v-if="props.column.field == 'action'">
                                <div class="action">
                                    <i class="material-icons success edit-user" v-on:click="userModal(props.row, 'edit')">edit</i>
                                    <i class="material-icons warning edit-password" :class="{ 'disabled': props.row.is_ldap == 'y' }" data-type="modal" modal-target="editPasswordModal" id-user="2" tabindex="0">lock</i>
                                    <i class="material-icons danger delete-user" :class="{ 'disabled': user.id == props.row.id }" v-on:click="deleteUser(props.row)">delete</i>
                                </div>
                            </span>
                        </template>
                    </vue-good-table>
                </div>
                <div class="is-col is-25">
                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">{{ roles.length }} Role Available</h3>
                                <span class="subtitle total-project">Click for details</span>
                            </div>
                        </div>
                        <div class="card-content" style="max-height: 90vh; min-height: 30px; overflow-y: auto;">
                            <loading style="margin-top: 60px;"
                                :active.sync="loading.isLoadingRoles" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                            <span class="label clickable" v-for="(role, index) in roles" :key="role.id" v-on:click="roleModal(role)" style="background-color: #3384ff; margin-top: 4px; margin-right: 6px">#{{ index+1 }} - {{ role.display_name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Modal -->
        <div class="modal-box" id="user_detail">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('user_detail')"></span>
                
                <div class="modal-header">
                    <h2 class="title" v-if="modal.type == 'edit'">Edit User</h2>
                    <h2 class="title" v-else>Add New User</h2>
                </div>
                <div class="modal-body" style="position: relative">
                    <label class="is-checkbox" v-if="modal.type == 'add'">
                        <div class="checkbox"><label><input type="checkbox" true-value="y" false-value="n" v-model="modal.is_ldap" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);"><span> Using LDAP?</span></label></div>
                    </label>
                    <label class="is-checkbox">
                        <div class="checkbox"><label><input type="checkbox" true-value="y" false-value="n" v-model="modal.user.is_active" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);"><span> Is Active?</span></label></div>
                    </label>
                    <div class="form-item" v-if="modal.is_ldap == 'n'">
                        <label>Name</label>
                        <input type="text" class="name_form" v-model="modal.user.name" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);" required>
                    </div>
                    <br>
                    <hr>
                    <div class="form-item form-username" style="margin-top: 10px">
                        <label>Username</label>
                        <input type="text" class="username_form" required v-model="modal.user.username"
                            style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);" :disabled="user.id == modal.user.id && modal.is_ldap == 'y' ">
                    </div>
                    <div class="form-item is-bar">
                        <label>Phone number</label>
                        <input type="text" class="phone_form" value="+62" name="phone-prefix" size="3" disabled>
                        <input type="text" class="phone_form" v-model="modal.user.phone" name="phone-number" placeholder="828xxxxx">
                    </div>
                    <transition name="slide-fade">
                        <div class="form-item" v-if="modal.is_ldap == 'n'">
                            <label>Email</label>
                            <input type="text" class="email_form" v-model="modal.user.email" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                        </div>
                    </transition>
                    
                    <transition name="slide-fade">
                        <div v-if="modal.type == 'add' && modal.is_ldap == 'n'">
                            <div class="is-row">
                                <div class="is-col">
                                    <div class="form-item form-username">
                                        <label>Password</label>
                                        <input class="password_form" type="text" :required="modal.type == 'add'" v-model="modal.user.password" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="form-item form-username">
                                        <label>Password Confirmation</label>
                                        <input class="password_form" type="text" v-model="modal.user.password_confirmation" :required="modal.type == 'add'" style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    
                    <div class="form-item">
                        <label>User Group</label>
                        <select v-model="modal.user.role_id" required="" :disabled="user.id == modal.user.id">
                            <option v-for="l_role in roles" :key="l_role.id" v-bind:value="l_role.id">{{ l_role.display_name }}</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer" style="">
                    <button class="button is-primary is-default cancel" v-on:click="hideModal('user_detail')">Cancel</button>
                    <button class="button is-primary is-success" v-on:click="saveData"><i class="material-icons">check</i> Save</button>
                </div>
                
            </div>
        </div>
        <!-- / User Modal -->

        <!-- User Modal -->
        <div class="modal-box" id="user_status">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('user_status')"></span>
                
                <div class="modal-header">
                    <h2 class="title">Edit Status User {{ modal.user.name }}</h2>
                </div>
                <div class="modal-body" style="position: relative">
                    
                    <div class="form-item">
                        <label>Status</label>
                        <select v-model="modal.user.is_active" required="" :disabled="user.id == modal.user.id">
                            <!-- <option v-for="l_role in roles" :key="l_role.id" v-bind:value="l_role.is_active">{{ l_role.display_name }}</option> -->
                            <option value="y">Active</option>
                            <option value="n">In-Active</option>
                        </select>
                    </div>

                </div>
                <div class="modal-footer" style="">
                    <button class="button is-primary is-default cancel" v-on:click="hideModal('user_status')">Cancel</button>
                    <button class="button is-primary is-success" v-on:click="saveData"><i class="material-icons">check</i> Save</button>
                </div>
                
            </div>
        </div>
        <!-- / User Modal -->

        <!-- Role Modal -->
        <div class="modal-box" id="role_detail">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('role_detail')"></span>
                <div class="modal-header">
                    <h2 class="title">Roles Detail</h2>
                </div>  
                <div class="modal-body">

                    <table>
                        <tr>
                            <td>Role Name</td>
                            <td>:</td>
                            <th>{{ modal.role.display_name }}</th>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>:</td>
                            <th>{{ modal.role.slug }}</th>
                        </tr>
                        <tr>
                            <td>Role Description</td>
                            <td>:</td>
                            <th>{{ modal.role.description }}</th>
                        </tr>
                    </table>

                    <br>

                    <div v-if="modal.role.permission">
                        <h4>Permissions attached: {{ modal.role.permission.length }}</h4>
                        <span class="label" v-for="list_perm in modal.role.permission" :key="list_perm.id" style="background-color: #3384ff; margin-right: 8px; margin-top: 4px">{{ list_perm.display_name }}</span>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('role_detail')">Cancel</a>
                    <button class="button is-primary is-success" type="submit"><i class="material-icons">check</i> Close</button>
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
        user() {
            return JSON.parse(localStorage.getItem('user'))
        }
    },

    data: () => ({

        loading: {
            height: 120,
            width: 120,
            isLoading: false,
            isLoadingRoles: false,
            cancel: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        customer_role: {
            id: null
        },

        search_query: '',
        table: {
            rows: [],
            fields: [
                {
                    label: '',
                    field: 'avatar',
                    sortable: false
                },
                {
                    label: 'Name',
                    field: 'name',
                    sortable: true
                }, 
                {
                    label: 'Username',
                    field: 'username',
                    sortable: true
                },
                {
                    label: 'Unit',
                    field: 'unit',
                    sortable: true
                },

                {
                    label: 'Email',
                    field: 'email',
                    sortable: true
                },
                {
                    label: 'Role',
                    field: 'role',
                    sortable: false,
                },
                {
                    label: 'Phone',
                    field: 'phone',
                    sortable: false
                },
                {
                    label: 'LDAP',
                    field: 'is_ldap',
                    sortable: true
                },
                {
                    label: 'Status',
                    field: 'is_active',
                    sortable: true
                },
                {
                    label: '',
                    field: 'action'

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
                search_query: '',
                role_id: 'all',
                is_active: 'all',
                is_ldap: 'all',
                searchTerm: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },
        roles: [],
        api: {
            master_index: '/api/management/user',
        },
        form: {
            role: 'all',
            report: 'all',
            search_query: '',
            location: 'all'
        },
        modal: {
            is_ldap: 'n',
            type: '',
            file: '',
            role: {},
            user: {
                id: '',
                is_active: 'n',
                name: '',
                role_id: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
                
            }
        }
    }),

    mounted() {
        this.initData(this.api.master_index)
        this.initRole()
        this.initCustomerRole()
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

            var params = this.table.serverParams

            axios.get(url, { params })
            .then( res => {
                this.loading.isLoading = false
                this.table.rows = res.data.data
                this.table.totalRows = res.data.total

                this.loading.isLoading = false
            })
        },

        initCustomerRole: function() {
            axios.get('/api/management/role/get/customer_only')
            .then( res => {
                this.customer_role = res.data
            })
        },

        initRole: function() {
            this.loading.isLoadingRoles = true;

            var vm = this

            axios.post('/api/management/role/get_all')
            .then( res => {
                vm.roles = res.data.data
                this.loading.isLoadingRoles = false;
            })
            .catch(e => {
                toastr.error("Failed get role");
                this.loading.isLoadingRoles = false;
            })
        },

        resetModal: function() {
            this.modal = {
                is_ldap: 'n',
                type: '',
                file: '',
                role: {},
                user: {
                    id: '',
                    name: '',
                    role_id: '',
                    username: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    
                }
            }
        },

        resetForm: function() {
            this.table.serverParams = {
                columnFilters: {
                },
                sort_type: '',
                sort_field: '',
                page: 1, 
                perPage: 10,
                search_query: '',
                role_id: 'all',
                is_active: 'all',
                is_ldap: 'all',
                searchTerm: ''
            }
            this.initData(this.api.master_index)
        },

        liveSearch: function() {
            this.updateParams({page: 1})
            this.initData(this.api.master_index)
        },

        saveData: function() {
            // console.log('1: ',this.modal.user)
            var vm = this

            let data_validation = [
                {'element': vm.modal.user.username, 'type' : 'Username', 'data' : 'string'},
                {'element': vm.modal.user.name, 'type' : 'Name', 'data' : 'pass'},
                {'element': vm.modal.user.role_id, 'type' : 'Role', 'data' : 'string'},
            ]
            // console.log('2: ',this.modal.user)

            if(!this.validation(data_validation)) {
                return;
            } else {
                swal({
                    title: "You are going to " + vm.modal.type + " user",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {

                        vm.loading.isLoading = true
                        // console.log('3: ',this.modal.user)
                        
                        if(vm.modal.type == 'edit') {
                            axios.put('/api/management/user/' + vm.modal.user.id, vm.modal.user)
                            .then( res => {
                                if (res.data.status == 'success')
                                {
                                    toastr.success(res.data.message, 'Success!')
                                    vm.initData(this.api.master_index)
                                    vm.hideModal('user_detail')
                                    vm.loading.isLoading = false
                                }
                                else if (res.data.status == 'failed') {
                                    toastr.error(res.data.message, 'Ooopss! Something went wrong')
                                    vm.loading.isLoading = false
                                }
                            })

                        } else if (vm.modal.type == 'add') {
                            console.log(this.modal.user)
                            vm.modal.user.is_ldap = this.modal.is_ldap
                            vm.modal.user.is_active ? vm.modal.user.is_active = vm.modal.user.is_active : vm.modal.user.is_active = 'n'
                            axios.post('/api/management/user',  vm.modal.user)
                            .then( res => {
                                if (res.data.status == 'success')
                                {
                                    toastr.success(res.data.message, 'Success!')
                                    vm.initData(this.api.master_index)
                                    vm.hideModal('user_detail')
                                    vm.loading.isLoading = false
                                }
                                else if (res.data.status == 'failed') {
                                    toastr.error(res.data.message, 'Ooopss! Something went wrong')
                                    vm.loading.isLoading = false
                                }
                            })
                            .catch ( e => {
                                vm.loading.isLoading = false
                                console.log(e)
                            })

                        }

                    } else {
                        toastr.info("Canceled")
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

        deleteUser: function(data) {
            var vm = this

            vm.loading.isLoading = true

            swal({
                title: "Are You Sure to Delete " + data.name,
                text: "Once it deleted, you cant restore it",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.delete('/api/management/user/' + data.id)
                    .then( res => {
                        if(res.data.status == 'success')
                        {
                            vm.loading.isLoading = false
                            toastr.success('Successfully deleted ' + data.name, 'Success')
                            vm.initData(vm.api.master_index)
                        }
                    })
                } else {
                    vm.loading.isLoading = false
                    toastr.info("Canceled")
                }
            })
            .catch( e => {
                vm.loading.isLoading = false
            })

        },

        roleModal: function(role){

            var vm = this

            vm.modal.role = role

            $('#role_detail').show()
        },

        userModal: function(data, type) {
            var vm = this

            // vm.resetModal()
            vm.modal.type = type    
            vm.modal.user = data

            vm.modal.is_ldap = vm.modal.user.is_ldap

            if(vm.modal.type == 'add') {
                vm.modal.is_ldap = 'n'
            }

            $('#user_detail').show();
        },

        statusModal: function(data) {
            var vm = this

            vm.modal.user = data

            $('#user_status').show();
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },
        /**
         * Datatable History - Server Side
         */

        handleDatatableChange: function(params) {
            this.loading.isLoading = true;
            return new Promise((resolve, reject) => {
                axios.get('/api/management/user', params)
                .then(res => {
                    this.table.rows = res.data.data
                    this.table.totalRows = res.data.total
                    resolve();
                })
                .catch(e => {
                    resolve();
                })
            })
        },

        // Search Column
        columnFilterFn: function(data, filterString){

        },

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

        // load items is what brings back the rows from server
        loadItems() {
            this.handleDatatableChange(this.table.serverParams).then(()=> {
                this.loading.isLoading = false;
            });
        },
    }
}
</script>

<style>
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

    ::v-deep .vgt-table.condensed td, .vgt-table.condensed th {
        /* height: 20px !important; */
        font-size: 12px !important;
        /* text-align: center; */
    }

    /* Transition */
    ::v-deep .slide-fade-enter-active {
    transition: all .3s ease;
    }
    ::v-deep .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    ::v-deep .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }


    
</style>