<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">

            <div class="is-row">
                <div class="is-col">
                    <div class="card">
                        <div class="card-header">
                            <div class="title-area">
                                <h3 class="title">{{ $route.meta.title }}</h3>
                            </div>
                            <!-- <div class="option-box">
                                <div class="option-item length-data">
                                    <span>Show</span>
                                    <select class="page-length">
                                        <option value="10">10</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="-1">All</option>
                                    </select>
                                </div>
                            </div> -->
                        </div>
                        <div class="card-content">

                            <loading 
                            :loader="'dots'"
                            :color="'#1976d2'"
                            :width="loading.width"
                            :height="loading.height"
                            :active.sync="loading.isLoading" 
                            :can-cancel="loading.cancle" 
                            :is-full-page="loading.fullPage"/>

                            <div class="alert is-error" data-kube="alert" v-if="Object.keys(errors).length">
                                <ul>
                                    <li v-for="err in errors" :key="err">
                                        {{ err }}
                                    </li>
                                </ul>
                            </div>

                            <!-- <div class="toolbar">
                                <div class="toolbar-left">
                                    <div class="toolbar-item">
                                        <button class="button" v-on:click="userModal({}, 'add')">Add New User</button>
                                    </div>
                                    <div class="toolbar-item">
                                        <button class="button" v-on:click="userModal({}, 'add')">Add New LDAP</button>
                                    </div>
                                </div>
                                <div class="toolbar-right">
                                    <input class="toolbar-item full" id="user_search" type="search"
                                        placeholder="Fill and enter to search">
                                </div>
                            </div> -->

                            <div class="is-row">
                                <div class="is-col">

                                    <table>
                                        <tr>
                                            <th style="text-align: center" rowspan="3">WS</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.ws_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.ws}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.ws_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">COGS</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.cogs_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.cogs}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.cogs_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">PA</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.pa_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.pa}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.pa_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">HGR</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.hgr_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.hgr}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.hgr_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">Proposal</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.prop_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.prop}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.prop_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">Gantt Chart</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.gantt_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.prop}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.gantt_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                    </table>
                                </div>
                                <div class="is-col">
                                    <table>
                                        <tr>
                                            <th style="text-align: center" rowspan="3">SOW</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.sow_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.sow}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.sow_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">WBS</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.wbs_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.wbs}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.wbs_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">SO</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.so_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.so}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.so_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">REV</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.rev_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.rev}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.rev_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                         <tr>
                                            <th style="text-align: center" rowspan="3">Reschedule</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.reschedule_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.reschedule}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.reschedule_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>

                                        <tr>
                                            <th style="text-align: center" rowspan="3">Project Charter</th>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.pcharter_warning" col="3"> days dot indicator <span class="dot color_warning"></span> will turn to Warning (orange color)</td>
                                        </tr>
                                        <tr :class="{'alert is-error': errors.reschedule}">
                                            <td>&nbsp;&nbsp;in <input type="number" v-model="data.pcharter_danger" col="3"> days dot indicator <span class="dot color_danger"></span> will turn to Warning (red color)</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="is-row">
                                <div class="is-col">
                                    <table>
                                        <tr>
                                            <th colspan="3">
                                                <center>Color Index</center>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td><span class="dot color_empty"></span></td>
                                            <td>:</td>
                                            <td>Doc is not having an attachment</td>
                                        </tr>
                                        <tr>
                                            <td><span class="dot color_warning"></span></td>
                                            <td>:</td>
                                            <td>Doc is not having an attachment & got warned to upload an attachment</td>
                                        </tr>
                                        <tr>
                                            <td><span class="dot color_danger"></span></td>
                                            <td>:</td>
                                            <td>Doc is not having an attachment & got warned to upload an attachment <strong>urgently</strong></td>
                                        </tr>
                                        <tr>
                                            <td><span class="dot color_success"></span></td>
                                            <td>:</td>
                                            <td>Is completed</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="is-col">
                                    <div class="clearfix">
                                        <div class="pull-right">
                                            <button class="button is-success" v-on:click="initDocDueDate">Reset</button>
                                            <button class="button" v-on:click="save" v-if="!loading.button_processing">Save</button>
                                            <button class="button is-loading" disabled v-on:click="save" v-else>Processing</button>
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
</template>

<script>

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {

    components: {
        Loading,
    },

    data: () => ({
        loading: {
            button_processing: false,
            height: 120,
            width: 120,
            isLoading: false,
            fullPage: false,
            cancel: true,
            progressBar: 0
        },
        data: {},
        errors: []
    }),
    mounted() {
        this.initDocDueDate()
    },

    methods: {
        initDocDueDate: function() {
            var vm = this
            axios.get('/api/slot_and_capacity/planning_gate/doc_due_date')
            .then( res => {
                vm.data = res.data
                vm.errors = []
            })
        },

        save: function () {
            var vm = this
            

            swal({
                title: "Are You Sure?",
                text: "You Are Going to Change Due Date Documents. Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.button_processing = true
                    axios.post('/api/slot_and_capacity/planning_gate/doc_due_date_save', vm.data)
                    .then( res => {
                        if (res.data.status == 'success') {
                            toastr.success(res.data.message, 'Success')
                            vm.errors = []
                            vm.loading.button_processing = false
                            vm.loading.isLoading = false
                        } else if(res.data.status == 'error') {
                            vm.errors = res.data.data
                            vm.loading.button_processing = false
                            vm.loading.isLoading = false
                        }
                    })
                } else {
                    vm.loading.button_processing = false
                    vm.loading.isLoading = false
                }
            });
        },
    },
}
</script>

<style scoped>
    ::v-deep input {
        width: 40px;
    }

    ::v-deep tr {
        padding-left: 5px
    }

    ::v-deep .dot {
        height: 18px;
        width: 18px;
        border-radius: 50%;
        display: inline-block;
        margin: auto 0;
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
</style>