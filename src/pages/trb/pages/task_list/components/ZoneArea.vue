<template>
    <div>
        <div class="table-responsive">
            <vue-good-table max-height="90vh" :fixed-header="false" ref="table-job-tracking"
                :columns="table.columns" :rows="table.rows" styleClass="vgt-table condensed pgTble"
                :search-options="{
                enabled: true,
                trigger: 'keyup',
                skipDiacritics: true,
                placeholder: 'Fill and enter to search',
                
            }" :sort-options="{
                enabled: true,
            }" :line-numbers="false" :pagination-options="{
                enabled: true,
            }">
                <div slot="table-actions">
                    <button class="btn btn-primary" @click="openModal('modal-add-zonetask', 'add')">Add New Zone</button>
                </div>

                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'action'" style="text-align: right">
                        <span class="badge pointer" style="color: white; background-color: #d84315"
                            @click="deleteData(props.row)"><i class="fa fa-trash"></i> Delete</span>
                        <span class="badge pointer" style="color: white; background-color: #1976d2"
                            @click="editData(props.row)"><i class="fa fa-pencil"></i> Edit</span>
                    </span>
                </template>

            </vue-good-table>

        </div>

        <!-- modal add data -->
        <div class="modal-box" id="modal-add-zonetask">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('modal-add-zonetask')"></span>
                <div class="modal-header">
                    <h2 class="title">
                        <span>Add Zone Area</span>
                    </h2>
                </div>
                <div class="modal-body" style="position: relative">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-item">
                                    <label>DB Version</label>
                                    <input type="number" class="form-style" v-model="form.zmp_db_version">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-item">
                                    <label>Zone</label>
                                    <input type="number" class="form-style" v-model="form.zmp_zone">
                                </div>
                            </div>
                        </div>

                        <br>
                        <div class="clearfix">
                            <div class="pull-right">
                                <button type="submit" @click="saveData"><i class="fa fa-check"></i>
                                    {{ action != 'add' ? 'Update' : 'Create' }}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- modal add pattern -->

    </div>
</template>

<script>

import Tab from "./Tab.vue";
import Loading from 'vue-loading-overlay';
import {
    VueGoodTable
} from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

import ToolsForm from "./FormTools.vue";
import MasterCard from "./MasterCard"

export default {

    components: {
        Tab,
        VueGoodTable,
        Loading,
        MasterCard,
        ToolsForm,
    },

    data: () => ({
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        selected_tools: {},
        task: {
            base: {
                db_oem: '',
            },
            gen_mpd_task: '',
        },
        action: 'add',
        form: {
            task_list_id: '',
            zmp_id: '',
            zmp_originating: '',
            zmp_mpd_task: '',
            zmp_mpd_task_code: '',
            zmp_db_version: '',
            zmp_zone: ''
        },
        table: {
            rows: [],
            columns: [
              {
                  label: 'DB Version',
                  field: 'zmp_db_version',
                  filterable: true,
                  sortable: true,
                  hidden: false,
                  filterOptions: {
                    enabled: true,
                    trigger: 'enter',
                    noholder: "",
                  }
              },
              {
                  label: 'Zone',
                  field: 'zmp_zone',
                  filterable: true,
                  sortable: true,
                  hidden: false,
                  filterOptions: {
                    enabled: true,
                    trigger: 'enter',
                    noholder: "",
                  }
              },
              {
                  label: '',
                  field: 'action',
                  filterable: false,
                  sortable: false,
                  hidden: false,
           
              },
            ],
        }
    }),

    mounted() {
        this.initData();
    },

    methods: {
        initData: function () {
            let gen_id = this.$route.params.gen_id;
            this.loading.isLoading = true;
            axios.get(`/api/task_list_data/zone_area?gen_id=${gen_id}`)
                .then(res => {
                    this.task = res.data.task;
                    this.table.rows = res.data.zone_area;
                })
                .catch(e => {
                    console.log(e);
                })
                .then(() => {
                    this.loading.isLoading = false;
                });
        },

        changeZonPOSNumber: function() {
            if(this.form.zmp_pos_number) {
                console.log("zone pos number exist");
                this.form.zmp_mpd_task_code = `${this.task.gen_mpd_task}-${this.form.zmp_pos_number}`
            } else {
                let zmp_task = this.table.rows;


                if(zmp_task.length > 0) {
                    
                    let next_number = parseInt(zmp_task[zmp_task.length - 1].zmp_pos_number) + 1;
                    this.form.zmp_mpd_task_code = this.task.gen_mpd_task + `-${next_number}`;
                } else {
                    console.log('task length empoty');
                    this.form.zmp_mpd_task_code = this.task.gen_mpd_task;
                }
            }
        },

        openModal: function (modalId, action) {
            this.action = action;

            this.form.zmp_originating = this.$route.params.base_id;
            this.form.task_list_id = this.$route.params.gen_id;
            if (action == 'add') {
                console.log('add cooyyy')

                this.form = {

                    task_list_id: '',
                    zmp_id: '',
                    zmp_originating: this.$route.params.base_id,
                    zmp_mpd_task: this.task.gen_mpd_task,
                    zmp_mpd_task_code: this.task.gen_mpd_task,
                    zmp_db_version: '',
                    zmp_mpd_task: '',
                    zmp_zone: ''

                };
                
                this.changeZonPOSNumber();
                console.log('add button pressed');
            }
            $(`#${modalId}`).modal('show');
        },

        hideModal: function (modalId) {
            $(`#${modalId}`).modal('hide');
        },

        editData: function (zone_area) {
            this.form = zone_area;
            this.openModal('modal-add-zonetask', 'edit');
        },

        request: async function () {
            if (this.action === 'add') {

                this.form.zmp_originating = this.$route.params.base_id;
                this.form.task_list_id = this.$route.params.gen_id;
                return await axios.post('/api/task_list_data/zone_area', this.form);
            } else {
                return await axios.put('/api/task_list_data/zone_area/' + this.form.zmp_id, this.form);
            }
        },

        saveData: function () {

            let title_text = `You Are Going to ${this.action == 'add' ? 'Add' : 'Update'} Zone Area Data`;

            swal({
                title: title_text,
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;
                    this.request()
                        .then(res => {
                            if (res.data.status == true) {
                                this.initData();
                                toastr.success(res.data.message, "Success!");
                            } else {
                                swal("Please check your input", res.data.message, "warning");
                            }
                        })
                        .catch(e => {
                            console.log(e.response);
                        })
                        .then(() => {
                            this.hideModal('modal-add-zonetask');
                            this.loading.isLoading = false;
                        });
                } else {
                    toastr.info("Canceled")
                }
            })
        },

        deleteData: function (zone_area) {

            swal({
                    title: "You are Going to Delete Zone Area Data",
                    text: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        this.loading.isLoading = true;
                        axios.delete('/api/task_list_data/zone_area/' + zone_area.zmp_id)
                            .then(res => {
                                if (res.data.status == true) {
                                    this.initData();
                                    toastr.success(res.data.message, "Success!");
                                } else {
                                    swal("Something Wrong", res.data.message, "warning");
                                }
                            })
                            .catch(e => {
                                console.log(e.response);
                            })
                            .then(() => {
                                this.loading.isLoading = false;
                            });
                    } else {
                        toastr.info("Canceled")
                    }
                });
        },

    }

}
</script>

<style scoped>
    .form-item {
        margin-bottom: 10px;
    }

    .pointer {cursor: pointer;}
</style>