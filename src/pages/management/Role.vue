<template>
    <div>

    <div class="content-header"></div>
        <div class="content-body">
            <div class="is-row">
                <div class="is-col is-70">
                    <loading :active.sync="loading.isLoading" :can-cancel="false" :is-full-page="false"
                        :color="loading.color" :loader="loading.loaderType">
                    </loading>
                    <vue-good-table :columns="table.fields" :rows="table.rows" :line-numbers="true" mode="remote"
                        :search-options="{
                    enabled: true,
                    trigger: 'enter',
                    skipDiacritics: true,
                    placeholder: 'Type and enter to search'
                    }" @on-search="onColumnSearch" @on-page-change="onPageChange" @on-sort-change="onSortChange"
                        @on-column-filter="onColumnFilter" @on-per-page-change="onPerPageChange"
                        :totalRows="table.totalRows" :pagination-options="{
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
                    }" styleClass="vgt-table striped condensed">
                        <div slot="table-actions">
                            <div class="toolbar toolbar-default">
                                <div class="toolbar-left">
                                    <div class="toolbar-item">
                                        <button v-on:click="permModal({}, 'add')"
                                            style="color:#465368; background-color: #ffffff;border: 1px solid grey;"><i
                                                class='material-icons'>add</i>Add Role</button>
                                        <!-- <button v-else v-on:click="dashboard_show = true" style="min-width:195.89px;color:#465368;width:100%;background-color: #ffffff;border: 1px solid grey;">Show Summary</button> -->
                                    </div>
                                    <div class="toolbar-item">
                                        <div v-on:click="resetForm"
                                            class="single-button synchronize display-flex align-items-center justify-center"
                                            style="background:#0065FF; margin-right: 3px; margin-left: -5px" tabindex="0"><i
                                                class="material-icons warning sync_order">sync</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <template slot="table-row" slot-scope="props">

                            <span v-if="props.column.field == 'display_name'">
                                {{ props.row.display_name }}
                            </span>
                            <span v-if="props.column.field == 'permissions'">
                                <span class="is-label is-warning"
                                    v-if="props.row.permission.length < 1">{{ props.row.permission.length }}
                                    permission</span>
                                <span class="is-label is-success" v-else>{{ props.row.permission.length }}
                                    permission(s)</span>
                            </span>
                            <span v-if="props.column.field == 'user_count'">
                                <span class="is-label is-warning" v-if="props.row.user.length < 1">0 user</span>
                                <span class="is-label is-success" v-else>{{ props.row.user.length }} user(s)</span>
                            </span>
                            <span v-if="props.column.field == 'line'">
                                <span class="is-label is-warning"
                                    v-if="props.row.line.length < 1">{{ props.row.line.length }} Work Center</span>
                                <span class="is-label is-success" v-else>{{ props.row.line.length }} Work Center(s)</span>
                            </span>
                            <span v-if="props.column.field == 'planning_gate'">
                                <span class="is-label is-warning"
                                    v-if="props.row.planning_gate.length < 1">{{ props.row.planning_gate.length }} Planning
                                    Gate Access List</span>
                                <span class="is-label is-success" v-else>{{ props.row.planning_gate.length }} Planning Gate
                                    Access List(s)</span>
                            </span>
                            <span v-if="props.column.field == 'is_customer'">
                                <span v-if="props.row.is_customer=='y'">yes</span>
                                <span v-else>no</span>
                            </span>
                            <span v-if="props.column.field == 'action'">
                                <div class="action">
                                    <i class="material-icons success edit-user workcenter"
                                        v-on:click="workcenterModal(props.row)">group_work</i>
                                    <i class="material-icons primary edit-user workcenter"
                                        v-on:click="planningGateModal(props.row)">airplanemode_active</i>
                                    <i class="material-icons warning edit-user workcenter"
                                        v-on:click="lineModal(props.row)">home</i>
                                    <i class="material-icons success edit-user edituser"
                                        v-on:click="permModal(props.row, 'edit')">edit</i>
                                    <i class="material-icons danger delete-user deleteuser"
                                        v-on:click="deleteRole(props.row)">delete</i>
                                </div>
                            </span>
                        </template>
                    </vue-good-table>

                    <hr><br><br>

                    <vue-good-table :columns="table2.fields" :rows="table2.rows" :pagination-options="{
                    enabled: true,
                    mode: 'records',
                    perPage: 10,
                    position: 'bottom',
                    perPageDropdown: [50, 100],
                    dropdownAllowAll: true,
                    setCurrentPage: 1,
                    nextLabel: 'next',
                    prevLabel: 'prev',
                    rowsPerPageLabel: 'Rows per page',
                    ofLabel: 'of',
                    pageLabel: 'page', // for 'pages' mode
                    allLabel: 'All',
                    }" :search-options="{
                    enabled: true,
                    placeholder: 'Search this table',
                    }" :line-numbers="true" styleClass="vgt-table striped condensed">
                        <div slot="table-actions">
                            <div class="toolbar toolbar-default">
                            </div>
                        </div>

                        <template slot="table-row" slot-scope="props">

                            <span v-if="props.column.field == 'display_name'">
                                {{ props.row.display_name }}
                            </span>
                            <span v-if="props.column.field == 'description'">
                                {{ props.row.display_name }}
                            </span>
                            <span v-if="props.column.field == 'role_name'">
                                {{ props.row.role_name }}
                            </span>

                        </template>
                    </vue-good-table>

                </div>

                <div class="is-col is-30">
                    <div class="card">
                        <div class="card-header no-border">
                            <div class="title-area">
                                <h3 class="title">{{ permissions.length }} Permissions Available</h3>
                            </div>
                        </div>
                        <div class="card-content" style="max-height: 90vh; min-height: 30px; overflow-y: auto;">
                            <div class="card" v-for="(perm, index) in grouped_permissions" :key="index"
                                style="margin-top: 15px">
                                <div class="card-header no-border">
                                    <div class="title-area">
                                        <h3 class="title">{{ perm.name }}</h3>
                                        <span class="subtitle total-project">{{ perm.children.length }} permissions</span>
                                    </div>
                                </div>
                                <div class="card-content" style="overflow-y: auto;">
                                    <span class="label clickable" v-for="(l_perm) in perm.children" :key="l_perm.id"
                                        v-on:click="permModal(perm)"
                                        style="background-color: #3384ff; margin-top: 4px; margin-right: 6px">{{ l_perm.display_name }}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Role Modal -->
        <div class="modal-box" id="role_detail">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('role_detail')"></span>

                <div class="modal-header">
                    <h2 class="title" v-if="modal.type == 'edit'">Edit Role {{ modal.role.display_name }}</h2>
                    <h2 class="title" v-else>Add New Role</h2>
                </div>
                <div class="modal-body" style="position: relative">

                    <div class="is-row" style="margin-right: 20px">
                        <div class="is-col is-100">
                            <div class="card">
                                <div class="form-item">
                                    <label>Name</label>
                                    <input type="text" v-model="modal.role.display_name"
                                        style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                </div>
                                <div class="form-item">
                                    <label>Description</label>
                                    <textarea cols="30" rows="2" v-model="modal.role.description"></textarea>
                                </div>
                                <label class="is-checkbox">
                                    <div class="checkbox"><label><input type="checkbox" true-value="y" false-value="n"
                                                v-model="modal.role.is_customer"
                                                style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);"><span>
                                                Is Customer?</span></label></div>
                                </label>
                                <div v-if="modal.role.is_customer === 'y'" class="form-item" style="margin-top: 10px;">
                                    <label>Customer Code</label>
                                    <multiselect v-model="modal.role.customer" :multiple="true" :options="list_cust"
                                        :searchable="true" :close-on-select="false" :show-labels="false"
                                        placeholder="Select Customer" track-by="code" :custom-label="custLabel" />
                                </div>
                            </div>
                            <br>
                        </div>
                        <div class="is-col is-100" style="margint-top: 20px">

                            <div class="card">
                                <h4>Permissions / Access List</h4>
                                <hr style="margin-top: 10px">

                                <div class="panel panel-default" v-for="(gperm, index) in grouped_permissions" :key="index">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" :href="'#collapse'+index">{{ gperm.name }}</a>
                                        </h4>
                                    </div>
                                    <div :id="'collapse'+index" class="panel-collapse collapse">
                                        <div class="panel-body">

                                            <div class="checkbox" v-for="p in gperm.children" :key="p.id">
                                                <label>
                                                    <input type="checkbox" v-bind:value="p.id" v-model="modal.selected"
                                                        style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                                    <span> {{ p.display_name }}</span>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse"
                                                :href="'#collapse'+grouped_permissions.length+1">Skill, Review Position,
                                                Sloc & Workcenters</a>
                                        </h4>
                                    </div>
                                    <div :id="'collapse'+grouped_permissions.length+1" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <div class="is-row">
                                                <div class="is-col is-50">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title" style="font-size:12px">
                                                                Prod. Control Shop | Jobcard Tracking & MDR Tracking
                                                            </h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <div class="is-row">
                                                                <div class="is-col is-50">
                                                                    <label>Skill</label>
                                                                    <multiselect v-model="modal.selected_role.skills"
                                                                        :multiple="true" :options="skills"
                                                                        :searchable="true" :close-on-select="false"
                                                                        :show-labels="false" placeholder="Select Skill"
                                                                        track-by="description" label="description" />
                                                                </div>
                                                                <div class="is-col is-50">
                                                                    <label>Position</label>
                                                                    <multiselect v-model="modal.selected_role.positions"
                                                                        :multiple="true" :options="positions"
                                                                        :searchable="true" :close-on-select="false"
                                                                        :show-labels="false" placeholder="Select Position"
                                                                        track-by="POSITION_NAME" label="POSITION_NAME" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="is-col is-50">
                                                    <div class="panel panel-default">
                                                        <div class="panel-heading">
                                                            <h4 class="panel-title" style="font-size:12px">
                                                                Prod. Control Shop | MRM Tracking
                                                            </h4>
                                                        </div>
                                                        <div class="panel-body">
                                                            <div class="is-row">
                                                                <div class="is-col is-50">
                                                                    <label>Sloc</label>
                                                                    <multiselect v-model="modal.selected_role.slocs"
                                                                        tag-placeholder="Add this as new sloc"
                                                                        placeholder="Search or add a sloc" label="name"
                                                                        track-by="name" :options="slocs" :multiple="true"
                                                                        :taggable="true" :close-on-select="false"
                                                                        :show-labels="false" @tag="addSloc"
                                                                        @close="onCloseSloc"></multiselect>
                                                                </div>
                                                                <div class="is-col is-50">
                                                                    <label>Workcenters</label>
                                                                    <multiselect v-model="modal.selected_role.workcenters"
                                                                        :multiple="true" :options="workcenters"
                                                                        :searchable="true" :close-on-select="false"
                                                                        :show-labels="false"
                                                                        placeholder="Select Workcenters" track-by="wct"
                                                                        label="wct" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <div class="modal-footer" style="">
                    <button class="button is-primary is-default cancel"
                        v-on:click="hideModal('role_detail')">Cancel</button>
                    <button class="button is-primary is-success" v-on:click="saveData"><i class="material-icons">check</i>
                        Save</button>
                </div>

            </div>
        </div>
        <!-- / Role Modal -->

        <!-- Role Modal -->
        <div class="modal-box" id="planning_gate_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('planning_gate_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Planning Gate Access List for {{ modal.planning_gate.display_name }} Role</h2>
                </div>
                <div class="modal-body" style="padding-left: 50px">

                    <div class="is-row">
                        <div class="is-25" v-for="pg in planning_gate_access_lists" :key="pg.id">
                            <div class="checkbox" style="margin-top: 7px">
                                <label>
                                    <input type="checkbox" v-bind:value="pg.id" v-model="modal.planning_gate_selected"
                                        style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
                                    <span> {{ pg.name }}</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="button is-primary is-success" v-on:click="savePlanningGate"><i
                            class="material-icons">check</i> Save</button>
                </div>
            </div>
        </div>
        <!-- / Role Modal -->

        <!-- Role Workcenter -->
        <div class="modal-box" id="workcenter_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('workcenter_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Workshop Area Access List for {{ modal.planning_gate.display_name }} Role</h2>
                </div>
                <div class="modal-body">
                    <div>
                        <loading :active.sync="loading.isLoadingWCT" :can-cancel="false" :is-full-page="false"
                            :color="loading.color" :loader="loading.loaderType">
                        </loading>
                        <label class="is-checkbox">
                            <div class="checkbox"><label><input type="checkbox" true-value="y" false-value="n"
                                        v-model="modal.planning_gate.all_workshoparea"
                                        style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);"><span>
                                        All Workshop Area</span></label></div>
                        </label>

                        <div v-if="modal.planning_gate.all_workshoparea === 'n' " class="form-item"
                            style="margin-top: 10px;">
                            <label>Workshop Area</label>

                            <multiselect v-model="modal.workcenter_selected" :multiple="true" :options="list_wct"
                                :searchable="true" :close-on-select="false" :show-labels="false"
                                placeholder="Select Workcenter" track-by="wct" label="wct" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button is-primary is-success" v-on:click="saveWorkcenter"><i
                            class="material-icons">check</i> Save</button>
                </div>
            </div>
        </div>
        <!-- / Role Workcenter -->

        <!-- line Modal -->
        <div class="modal-box" id="line_detail">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('line_detail')"></span>
                <div class="modal-header">
                    <h2 class="title">Assign Workcenter for Role {{ modal.line.display_name }}</h2>
                </div>
                <div class="modal-body">

                    <div class="is-row">
                        <div class="is-col is-30">

                            <h4>Select Hangar Below</h4>

                            <div class="card">
                                <!-- <center>
    <label class="is-checkbox" v-if="checked == false"><input type="checkbox" v-on:click="checked = true"> Check All Lines</label>
    <label class="is-checkbox" v-if="checked == true"><input type="checkbox" v-on:click="checked = false"> Un-check All Lines</label>
    </center> -->
                                <center>
                                    <label class="is-checkbox"><input type="checkbox" true-value="y" false-value="n"
                                            v-model="selected_role.role.all_workcenter"> All Workcenter</label>
                                </center>
                            </div>
                            <br>

                            <div v-for="hgr in hangar" :key="hgr.id" class="card-order clickable"
                                v-on:click="selectHangar(hgr)" style="margin-bottom: 15px">
                                <div class="card card-box box-job">
                                    <strong>{{ hgr.name }}</strong>
                                    <br>
                                    Total Line: {{ hgr.line.length }}
                                </div>
                            </div>

                        </div>
                        <div class="is-col is-70">
                            <div v-if="selected_hangar">
                                <h4>Select Line from {{ selected_hangar.name }}</h4>
                                <div class="card">
                                    <!-- <div>
    <div style="margin-bottom: 10px">
    <div class="checkbox">
    <label>
    <input type="checkbox" v-model="selected_role.line_id" 
    style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);">
    <span>
    &nbsp; Check All from {{ selected_hangar.name }}
    </span>
    </label>
    </div>
    </div>
    </div> -->
                                    <div class="item display-flex" v-for="ln in selected_hangar.line" :key="ln.id"
                                        style="margin-bottom: 10px">
                                        <div class="checkbox">
                                            <label><input type="checkbox" v-model="selected_role.line_id" :value="ln.id"
                                                    work_center="GAH1"
                                                    style="border: 1px solid rgb(234, 234, 234); background: rgb(255, 255, 255);"><span>
                                                    &nbsp; {{ ln.line_name }} - {{ ln.description }}</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="'all'">
                                Please select Hangar on left side
                            </div>

                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('line_detail')">Cancel</a>
                    <button class="button is-primary is-success"
                        v-on:click="submitRole(modal.line.id, selected_role.line_id)"><i class="material-icons">check</i>
                        Save</button>
                </div>
            </div>
        </div>
        <!-- / line Modal -->

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

<script>
import swal from 'sweetalert'
import axios from 'axios'
import toastr from 'toastr'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import 'vue-good-table/dist/vue-good-table.css'
import {
    VueGoodTable
} from 'vue-good-table';

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

export default {

    components: {
        VueGoodTable,
        Loading,
        'multiselect': Multiselect
    },

    computed: {},

    data: () => ({

        all_workcenter: 'n',

        grouped_permissions: [],
        planning_gate_access_lists: [],

        hangar: [],
        selected_hangar: 'all',
        selected_line: [],
        selected_role: {
            role: {
                all_workcenter: 'n',
            },
            line_id: []
        },
        loading: {
            isLoading: false,
            isLoadingWCT: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        table: {
            rows: [],
            fields: [

                {
                    label: 'Display Name',
                    field: 'display_name',
                    sortable: true
                },
                {
                    label: 'Total User',
                    field: 'user_count',
                    // sortable: true
                },
                {
                    label: 'Permissions',
                    field: 'permissions',
                    sortable: false
                },
                {
                    label: 'Work Center',
                    field: 'line',
                    sortable: false
                },
                {
                    label: 'Planning Gate',
                    field: 'planning_gate',
                    sortable: false
                },
                {
                    label: 'Is Customer',
                    field: 'is_customer',
                    sortable: true,
                    filterOptions: {
                        enabled: false,
                        placeholder: "",
                        trigger: 'enter',
                    }
                },
                {
                    label: '',
                    field: 'action',
                    sortable: false
                },

            ],
            totalRows: '',
            serverParams: {
                columnFilters: {},
                sort_type: '',
                sort_field: '',
                page: 1,
                perPage: 10,
                search_query: '',
                searchTerm: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },

        table2: {
            rows: [],
            fields: [

                {
                    label: 'Display Name',
                    field: 'display_name',
                    sortable: true
                },

                {
                    label: 'Description',
                    field: 'description',
                    sortable: true
                },

                {
                    label: 'Role Name',
                    field: 'role_name',
                    sortable: true
                },

            ],
            totalRows: '',
            serverParams: {
                columnFilters: {},
                sort_type: '',
                sort_field: '',
                page: 1,
                perPage: 10,
                search_query: '',
                searchTerm: ''
            },
            perPageDropDown: [10, 25, 50, 100],

        },

        permissions: [],
        api: {
            master_index: '/api/management/role',
        },
        form: {
            role: 'all',
            report: 'all',
            search_query: '',
            location: 'all'
        },
        modal: {
            planning_gate_selected: [],
            selected: [],
            type: '',
            role: {
                is_customer: "n",
                customer: [],
            },
            planning_gate: {
                all_workshoparea: "y",
            },
            line: {},
            workcenter_selected: [],
            selected_role: {
                skills: [],
                workcenters: [],
                positions: [],
                slocs: []
            },
        },
        list_cust: [],
        list_wct: [],
        workcenters: [],
        skills: [],
        positions: [],
        slocs: []
    }),

    mounted() {

        // Init tooltip

        // display_tooltip('.workcenter', 'Edit Workcenter', 'left');

        this.initData(this.api.master_index)
        this.initHangar()
        this.initPGAccessList()

        this.tabjs()
        this.initPermission();
        this.initCustomer();
        this.initWorkcenter();
        this.initSlocs();
        this.initPosition();
        this.initrolebypermission();
    },

    methods: {

        addSloc(val) {
            const sloc = {
                id: Math.random(),
                name: val
            }
            this.slocs.push(sloc);
            this.modal.selected_role.slocs.push(sloc);
        },

        async onCloseSloc() {
            try {
                await (await (await axios.post(`/api/management/slocs/update`, {
                    slocs: this.slocs
                })).data).data
            } catch (e) {
                lll(e)
            }
        },

        initData: function (url) {

            this.loading.isLoading = true

            var params = this.table.serverParams

            axios.get(url, {
                    params
                })
                .then(res => {
                    this.table.rows = res.data.data
                    this.table.totalRows = res.data.total

                    this.loading.isLoading = false

                })

        },

        initrolebypermission: function () {
            axios.get('/api/management/roleby_permission')
                .then(res => {
                    this.table2.rows = res.data;
                })
        },

        initCustomer: function (url) {
            axios.get('/api/management/customer_all')
                .then(res => {
                    this.list_cust = res.data;
                })
        },

        initWorkcenter: function (url) {
            axios.get('/api/management/workcenter/get_all')
                .then(({
                    data
                }) => {
                    this.list_wct = data.all;
                    this.skills = data.desc;
                    this.workcenters = data.wct;
                })
        },

        initSlocs: async function (url) {
            try {
                this.slocs = await (await (await axios.get(`/api/management/slocs/get`)).data).data;
            } catch (e) {
                lll(e)
            }
        },

        initPosition: function () {
            axios
                .get("/api/management/review_position/get_all_position")
                .then(res => {
                    this.positions = res.data;
                });
        },

        initPermission: function () {
            console.log('Permissions: ')

            var vm = this

            let permissions = [];

            axios.get('/api/management/permission')
                .then(res => {
                    vm.permissions = res.data

                    permissions = res.data

                    let category = [{
                            name: 'Dashboard',
                            slug: 'a_dashboard'
                        },
                        {
                            name: 'ABMP Report',
                            slug: 'b_abmp_report'
                        },
                        {
                            name: 'Task Review Board',
                            slug: 'c_trb'
                        },
                        {
                            name: 'Planning Gate',
                            slug: 'd_planning_gate'
                        },
                        {
                            name: 'Production Planning',
                            slug: 'e_production_planning'
                        },
                        {
                            name: 'Master Data',
                            slug: 'f_master_data'
                        },
                        {
                            name: 'Miscellanous',
                            slug: 'g_misc'
                        },
                        {
                            name: 'Production Control Hangar',
                            slug: 'h_pchangar'
                        },
                        {
                            name: 'Production Control Shop',
                            slug: 'i_pcshop'
                        },
                        {
                            name: 'Project Performance',
                            slug: 'j_performance'
                        },
                        {
                            name: 'People Development',
                            slug: 'p_dev'
                        },
                        {
                            name: 'XOPS',
                            slug: 'xops'
                        },
                        // {name: 'Review Position', slug: 'c_rvw_position'},
                        // {name: 'Workcenter &  Review Position', slug: 'c_workcenter_and_position'},
                    ];

                    category.sort((a, b) => {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    });

                    for (let i = 0; i < category.length; i++) {
                        let details = {
                            name: category[i].name,
                            children: permissions.filter(function (cat) {
                                return cat.category == category[i].slug;
                            })
                        }
                        this.grouped_permissions.push(details)
                    }

                })
        },

        custLabel({
            code,
            name
        }) {
            return code + " | " + name;
        },

        resetForm: function () {
            this.serverParams = {
                columnFilters: {},
                sort_type: '',
                sort_field: '',
                page: 1,
                perPage: 10,
                search_query: '',
                searchTerm: ''
            }
            this.initData(this.api.master_index)
        },

        liveSearch: function () {
            this.initData(this.api.master_index)
        },

        savePlanningGate: function () {
            let params = {
                role_id: this.modal.planning_gate.id,
                access_id: this.modal.planning_gate_selected
            }

            axios.post('/api/management/role/update_planning_gate_access_list', params)
                .then(res => {
                    if (res.data.status == 'success') {
                        toastr.success(res.data.message, 'Success!')
                        this.hideModal('planning_gate_modal')
                        this.initData(this.api.master_index)
                    }
                })

        },

        saveWorkcenter: function () {
            let params = {
                role_id: this.modal.planning_gate.id,
                access_id: this.modal.workcenter_selected,
                all_workshoparea: this.modal.planning_gate.all_workshoparea,
            }

            this.loading.isLoadingWCT = true;

            axios.post('/api/management/role/update_workcenter_access_list', params)
                .then(res => {
                    if (res.data.status) {
                        toastr.success(res.data.message)
                        this.hideModal('workcenter_modal');
                        this.initData(this.api.master_index)
                    } else {
                        toastr.error(res.data.message)
                    }
                    this.loading.isLoadingWCT = false;
                })
                .catch(() => {
                    this.loading.isLoadingWCT = false;
                })

        },

        saveData: function () {

            var vm = this

            let temp_cust = [];

            if (this.modal.role.is_customer === "y") {
                if (this.modal.role.customer.length > 0) {
                    this.modal.role.customer.forEach(element => {
                        temp_cust.push(element.id);
                    });
                }
            }

            let formData = {
                perm_id: this.modal.selected,
                display_name: this.modal.role.display_name,
                is_customer: this.modal.role.is_customer,
                customer_id: temp_cust,
                description: this.modal.role.description,
                skills: this.modal.selected_role.skills,
                workcenters: this.modal.selected_role.workcenters,
                positions: this.modal.selected_role.positions,
                slocs: this.modal.selected_role.slocs,
            }

            if (vm.modal.type == 'edit') {

                swal({
                        title: 'You are going to Change ' + vm.modal.role.display_name + ' role',
                        text: "Continue?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: false,
                    })
                    .then((value) => {
                        if (value) {

                            axios.put('/api/management/role/' + vm.modal.role.id, formData)
                                .then(res => {
                                    if (res.data.status == 'success') {
                                        vm.loading.isLoading = false
                                        vm.isLoading = false
                                        toastr.success(res.data.message, 'Success!')
                                        vm.initData(vm.api.master_index)
                                        vm.hideModal('role_detail')
                                    }
                                })

                        } else {
                            toastr.info("Canceled")
                            vm.loading.isLoading = false
                        }
                    })

            } else if (vm.modal.type == 'add') {

                swal({
                        title: 'You are going to add new role',
                        text: "Continue?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: false,
                    })
                    .then((value) => {
                        if (value) {

                            axios.post('/api/management/role', formData)
                                .then(res => {
                                    if (res.data.status == 'success') {
                                        vm.loading.isLoading = false
                                        toastr.success(res.data.message, 'Success!')
                                        vm.initData(vm.api.master_index)
                                        vm.hideModal('role_detail')
                                    }
                                })

                        } else {
                            toastr.info("Canceled")

                        }
                    })
            }
        },

        deleteRole: function (data) {
            var vm = this

            swal({
                    title: "Are You Sure to Delete " + data.display_name,
                    text: "Once it deleted, you cant restore it",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.delete('/api/management/role/' + data.id)
                            .then(res => {
                                if (res.data.success) {
                                    toastr.success('Successfully deleted ' + data.name, 'Success')
                                    vm.initData(vm.api.master_index)
                                } else {
                                    toastr.error(res.data.message)
                                }
                            })
                    } else {
                        toastr.info("Canceled")
                    }
                })

        },

        permModal: function (role) {

            var vm = this

            vm.modal.role = role

            $('#role_detail').show();
        },

        planningGateModal: function (role) {
            var vm = this
            vm.modal.planning_gate = role

            axios.get('/api/management/role/' + role.id)
                .then(res => {
                    this.modal.planning_gate_selected = res.data.pg_access_lists
                })

            $('#planning_gate_modal').show();
        },

        workcenterModal: function (role) {
            this.modal.planning_gate = Object.assign({}, role);

            if (this.modal.planning_gate.all_workshoparea === "n") {
                this.loading.isLoadingWCT = true;
                axios.get('/api/management/workcenter/get_role/' + role.id)
                    .then(ress => {
                        this.modal.workcenter_selected = ress.data;
                        this.loading.isLoadingWCT = false;
                    })
                    .catch(e => {
                        this.loading.isLoadingWCT = false;
                    })
            }

            $('#workcenter_modal').show();
        },

        lineModal: function (role) {

            var vm = this
            this.detailRole(role.id)

            console.log(role)

            vm.modal.line = role

            $('#line_detail').show();

        },

        permModal: async function (data, type) {
            var vm = this

            this.modal.selected_role.skills = _lowerObject(await (await (await axios.get(`/api/management/skills/perm/get_role/${data.id}`)).data).data, true)
            this.modal.selected_role.positions = await (await (await axios.get(`/api/management/review_position/perm/get_role/${data.id}`)).data).data
            this.modal.selected_role.workcenters = await (await (await axios.get(`/api/management/workcenter/perm/get_role/${data.id}`)).data).data
            this.modal.selected_role.slocs = await (await (await axios.get(`/api/management/slocs/perm/get_role/${data.id}`)).data).data

            vm.modal.type = type

            vm.modal.role = data

            if (vm.modal.type == 'add') {
                vm.modal.role.is_ldap = 'n'
            } else {
                var perm_id = vm.modal.role.permission

                let result = perm_id.map(a => a.id);

                vm.modal.selected = result
            }

            $('#role_detail').show();
        },

        hideModal: function (modal_name = null) {

            this.modal = Object.assign({}, this.modal, {
                planning_gate_selected: [],
                selected: [],
                type: '',
                role: {},
                planning_gate: {},
                line: {},
                workcenter_selected: [],
            })

            this.selected_hangar = 'all',
                this.selected_line = [],
                this.selected_role = {
                    role: {},
                    line_id: []
                }

            if (modal_name == null) {
                $('.modal-box').hide()
            }

            $('#' + modal_name).hide();
        },

        /**
         * Datatable History - Server Side
         */

        // EndSearch

        updateParams(newProps) {
            this.table.serverParams = Object.assign({}, this.table.serverParams, newProps)
        },

        onPageChange(params) {
            this.updateParams({
                page: params.currentPage
            })
            this.initData(this.api.master_index)
        },

        onPerPageChange(params) {
            this.updateParams({
                perPage: params.currentPerPage
            })
            this.initData(this.api.master_index)
        },

        onSortChange(params) {
            this.updateParams({
                sort_type: params[0].type,
                sort_field: params[0].field
            });
            this.updateParams({
                page: 1
            })
            this.initData(this.api.master_index)
        },

        onColumnFilter(params) {
            this.updateParams(params)
            this.initData(this.api.master_index)
        },

        onColumnSearch(params) {
            this.updateParams(params)
            this.updateParams({
                page: 1
            })

            this.initData(this.api.master_index)
        },

        // load items is what brings back the rows from server

        tabjs: function () {
            $('ul.tab-menu li').click(function () {
                var tab_id = $(this).attr('data-tab');

                $('ul.tab-menu li').removeClass('active');
                $('.tab-content').removeClass('active');

                $(this).addClass('active');
                $("#" + tab_id).addClass('active');
            });
        },

        initHangar: function () {
            axios.get('/api/management/hangar')
                .then(res => {
                    this.hangar = res.data.data
                })
        },

        initPGAccessList: function () {
            axios.get('/api/management/role/planning_gate_access_list/data')
                .then(res => {
                    this.planning_gate_access_lists = res.data
                })
        },

        selectHangar: function (hangar) {
            if (hangar != 'all') {
                this.selected_hangar = hangar
            } else {

                axios.get('/api/management/line/show/all_id')
                    .then(res => {
                        this.selected_role.line_id = res.data
                        this.selected_hangar = 'all'

                        toastr.success('Successfully selected ' + res.data.length + ' lines')
                    })

            }

            // toastr.success(hangar.line.length)
        },

        detailRole: function (role_id) {
            axios.get('/api/management/role/' + role_id)
                .then(res => {
                    this.selected_role = res.data

                    if (this.selected_role == 39) {
                        this.checked = true
                    } else {
                        this.checked = false
                    }
                })
        },

        submitRole: function (role_id, line_id) {

            swal({
                    title: "You are going to Assign " + line_id.length + " Workcenter(s) to " + this.modal.line.display_name,
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.put('/api/management/role/update_workplace/' + role_id, {
                                line_id: line_id,
                                workcenter: this.selected_role.role.all_workcenter
                            })
                            .then(res => {
                                if (res.data.status == 'success') {
                                    this.initData(this.api.master_index)
                                    toastr.success(res.data.message, 'Success!')
                                    this.hideModal()
                                }

                            })
                    } else {
                        toastr.info("Canceled")
                    }
                })

        }

    }
}
</script>

<style scoped>
::v-deep .multiselect__placeholder {
    font-size: 13px;
}

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

::v-deep .form-item .list-work-center {
    padding: 10px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

::v-deep .display-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

::v-deep .box-job {
    background-color: white !important;
    color: rgb(90, 90, 90) !important;
    border-left: 6px solid #026396 !important;
}
</style>
