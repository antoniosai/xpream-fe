<style scoped>
/* ::v-deep .row-phase {
    background-color: red;
    color: white;
}

::v-deep .row-task {
    background-color: green;
    color: white;
}

::v-deep .row-area {
    background-color: #0065FF;
    color: white;
} */
</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Create Gantt Chart</h3>
                        <span class="subtitle total-project">Sales ID <strong>#{{pg.pg_id }}</strong> | A/C Type : <strong>{{ pg.ac_type }}</strong> <span v-if="pg.hangar && pg.line">| Hangar-Line : <strong>{{ pg.hangar.name + '-' + pg.line.line_name }}</strong> </span> | A/C Reg : <strong>{{ pg.ac_reg }}</strong> | AMS : <strong>{{ pg.ams }}</strong></span>

                    </div>

                    <div class="option-box">
                        <button class="button" v-if="roles.length > 0 && loading.isLoading == false"  v-on:click="$router.go(-1)">
                            <i class='material-icons'>
                                settings_backup_restore
                            </i>
                            Back
                        </button>
                    </div>
                </div>
                <div class="card-content">
                    <loading 
                        :active.sync="loading.isLoading" 
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType">
                    </loading>

                    <loading 
                        :active.sync="loading.isLoadingSave" 
                        :can-cancel="false"
                        :is-full-page="true"
                        :color="loading.color"
                        :loader="loading.loaderType">
                    </loading>

                    <div v-if="!loading.isLoading">
                        <div v-if="!pg.hasOwnProperty('pg_id')">
                            <div class="alert is-focus">
                                This Project / Planning Gate is not found !
                                <div style="margin-top: 10px;">
                                    <button v-on:click="$router.go(-1)" style="color:#fafafa; background-color: #f93232;" class="button is-small is-destructive">Turn me back</button>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="roles.length < 1">
                            <div class="alert is-focus">
                                Gantt chart is not available for this aircraft type !
                                <div style="margin-top: 10px;">
                                    <button v-on:click="$router.go(-1)" style="color:#fafafa; background-color: #f93232;" class="button is-small is-destructive">Turn me back</button>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div>
                                <label>Gantt Data <span class="is-req">*</span></label>
                                <div class="is-row">
                                    <div class="form-item is-col">
                                        <input disabled type="text" name="" :value="pg.pg_id">
                                        <div class="is-desc">PG ID</div>
                                    </div>
                                    <div class="form-item is-col">
                                        <input disabled :value="pg.ac_type" type="text" name="">
                                        <div class="is-desc">Aircraft Type</div>
                                    </div>
                                    <div class="form-item is-col">
                                        <input v-model="pg.start_date"  v-on:change="handlerChangeStartDateGantt()" type="date" name="" id="gantt-start-date">
                                        <div class="is-desc">Start Date</div>
                                    </div>
                                    <div class="form-item is-col">
                                        <input v-model="pg.end_date" v-on:change="handlerChangeEndDateGantt()" type="date" name="" id="gantt-end-date">
                                        <div  class="is-desc">End Date</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th width="44%">Task Name</th>
                                            <th width="28%">Start Date</th>
                                            <th width="28%">End Date</th>
                                        </tr>
                                    </thead>
                                </table>
                                <table v-for="(role, indexphase) in roles" :key="indexphase">
                                    <thead>
                                        <tr>
                                            <th width="44%"></th>
                                            <th width="28%"></th>
                                            <th width="28%"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="row-phase">
                                                <div style="margin-left: 10px;">
                                                    <i style="font-size: 16pt;" class='material-icons'> view_carousel </i> <span style="display: block; margin-top: -25px; margin-left: 25px;">{{role.PHASE_NAME}}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <input style="width: 74%;" v-model="role.START_DATE" v-on:change="handlerChangeStartDatePhase('phase-start-date-' +indexphase, 'phase-end-date-' +indexphase, 'task-start-date-' +indexphase)" class="phase-start-date" :id="'phase-start-date-' +indexphase" disabled type="date" name="">
                                                <input style="width: 25%;" v-model="role.START_TIME" type="time">
                                            </td>
                                            <td>
                                                <input style="width: 74%;" v-model="role.END_DATE" v-on:change="handlerChangeEndDatePhase('phase-start-date-' +indexphase, 'phase-end-date-' +indexphase, 'task-end-date-' +indexphase, 'task-start-date-' +indexphase)"  class="phase-end-date" :id="'phase-end-date-' +indexphase" disabled type="date" name="">
                                                <input max="12:50" style="width: 25%;" v-model="role.END_TIME" type="time">
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody  v-for="(task, indextask) in role.TASK" :key="indextask">
                                        <tr>
                                            <td class="row-task">
                                                <div style="margin-left: 32px;"> 
                                                    <i style="font-size: 14pt;" class='material-icons'> widgets </i> <span style="display: block; margin-top: -23px; margin-left: 24px;">{{task.TASK_NAME}}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <input style="width: 74%;" v-model="task.START_DATE" v-on:change="handlerChangeStartDateTask('task-start-date-' +indextask+indexphase, 'task-end-date-' +indextask+indexphase, 'area-start-date-' +indextask+indexphase )" :class="'task-start-date-' +indexphase" :id="'task-start-date-' +indextask+indexphase" disabled type="date" name="">
                                                 <input style="width: 25%;" v-model="task.START_TIME" type="time">
                                            </td>
                                            <td>
                                                <input style="width: 74%;" v-model="task.END_DATE" v-on:change="handlerChangeEndDateTask('task-start-date-' +indextask+indexphase, 'task-end-date-' +indextask+indexphase, 'area-end-date-' +indextask+indexphase, 'area-start-date-' +indextask+indexphase)" :class="'task-end-date-' +indexphase" :id="'task-end-date-' +indextask+indexphase" disabled type="date" name="">
                                                <input style="width: 25%;" v-model="task.END_TIME" type="time">
                                            </td>
                                        </tr>
                                        <tr v-for="(area, indexarea) in task.AREA" :key="indexarea">
                                                <td class ="row-area">
                                                    <div style="margin-left: 55px;"> 
                                                        <i style="font-size: 14pt;" class='material-icons'> insert_drive_file </i> <span style="display: block; margin-top: -23px; margin-left: 24px;">{{area.AREA_NAME}}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <input style="width: 74%;" v-model="area.START_DATE" v-on:change="handlerChangeStartDateArea('area-start-date-' +indexarea+indexphase, 'area-end-date-' +indexarea+indexphase, 'task-end-date-' +indextask+indexphase)" :class="'area-start-date-' +indextask+indexphase" :id="'area-start-date-' +indexarea+indexphase"  disabled type="date" name="">
                                                    <input style="width: 25%;" v-model="area.START_TIME" type="time">
                                                </td>
                                                <td>
                                                    <input style="width: 74%;" v-model="area.END_DATE" :class="'area-end-date-' +indextask+indexphase" :id="'area-end-date-' +indexarea+indexphase" disabled type="date" name="">
                                                    <input style="width: 25%;" v-model="area.END_TIME" type="time">
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                                <!-- <table class="table table-condensed" style="margin-top: 10px;">
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center"><b>Phase</b></td>
                                            <td style="text-align: center"><b>Task</b></td>
                                            <td style="text-align: center"><b>Area</b></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div style="width:100%;height:15px;background:red;"></div>
                                            </td>
                                            <td>
                                                <div style="width:100%;height:15px;background:green;"></div>
                                            </td>
                                            <td>
                                                <div style="width:100%;height:15px;background:#0065FF;"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> -->
                                <br>
                                <button style="width: 100%" class="button is-success" v-if="roles.length > 0 && loading.isLoading == false" v-on:click="handlerSaveGantt()">
                                    <i class='material-icons'>
                                        save
                                    </i>
                                    Save
                                </button>
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
import axios from 'axios'
import 'vue-loading-overlay/dist/vue-loading.css'

// import Vue from 'vue'
// import '@progress/kendo-ui/js/kendo.treeview'
// import '@progress/kendo-theme-default/dist/all.css'

// import { TreeView,
//         TreeViewItem,
//         TreeViewInstaller } from '@progress/kendo-treeview-vue-wrapper'

// Vue.use(TreeViewInstaller)

export default {
    data: () => ({
        pg: {},
        pg_id: '',
        roles: [],
        form: {},
        loading: {
            isLoading: true,
            isLoadingSave: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
    }),

    components: {
        Loading,
        // TreeView
    },

    mounted() {
        this.pg_id = this.$route.params.pg_id,
        this.getProject().then(() => {
            const event = new Event('change');
            setTimeout(() => {
                document.getElementById("gantt-start-date").dispatchEvent(event);
                document.getElementById("gantt-end-date").value = this.pg.end_date;
                document.getElementById("gantt-end-date").dispatchEvent(event);
            },500)
        })
    },

    methods: {
        getProject: function() {
            return new Promise((resolve, reject) => {
                this.loading.isLoading = true;
                axios.get('/api/slot_and_capacity/planning_gate/show/' + this.pg_id)
                .then( res => {
                    if (res.data.status == 'success') {
                        this.pg = res.data.data;
                        this.handlerGanttRole(this.handlerMapAircraft(this.pg.ac_type)) 
                    }
                })
                .catch(() => {
                    this.loading.isLoading = false;
                })
            })
        },

         handlerMapAircraft: function(ac_type) {
            let mapped_ac = "";
            if(ac_type.indexOf('-') !== -1 ) {
                let splited_ac = ac_type.split('-');
                if(ac_type.charAt(0) === "3") {
                    mapped_ac = splited_ac[0];
                }else {
                    mapped_ac = splited_ac[0] + "-" + splited_ac[1].charAt(0);
                }
            }else {
                mapped_ac = ac_type;
            }
            return mapped_ac;
        },

        handlerGanttRole: function(ac_type){
            axios.get('/api/booking_and_submission/get_gantt_role/' + ac_type)
            .then(res => {
                if(res.data.success) {
                    this.roles = res.data.data;
                }
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " +e);
                this.loading.isLoading = false;
            })
        },

        handlerChangeStartDateGantt: function() {
            let element = document.getElementsByClassName('phase-start-date');
            let start_date = document.getElementById('gantt-start-date').value;
            for(let i = 0; i < element.length; i++) {
                element[i].disabled = false;
                element[i].value = "";
                element[i].setAttribute("min", start_date);
            }

            let end_date = document.getElementById("gantt-end-date");
            end_date.value = '';
            end_date.setAttribute("min", start_date);
        },

        handlerChangeEndDateGantt: function() {
            let element = document.getElementsByClassName('phase-end-date');
            let element_start = document.getElementsByClassName('phase-start-date');
            let start_date = document.getElementById('gantt-start-date').value;
            let end_date = document.getElementById('gantt-end-date').value;
            for(let i = 0; i < element.length; i++) {
                element[i].disabled = false;
                element[i].value = "";
                element_start[i].value = "";
                element[i].setAttribute("min", start_date);
                element[i].setAttribute("max", end_date);
                element_start[i].setAttribute("max", end_date);
            }
        },

        handlerChangeStartDatePhase: function(id_start_phase, id_end_phase, class_task) {
            let element = document.getElementsByClassName(class_task);
            let start_date = document.getElementById(id_start_phase).value;
            let end_date = document.getElementById(id_end_phase);

            for(let i = 0; i < element.length; i++) {
                element[i].disabled = false;
                element[i].value = "";
                element[i].dispatchEvent(new Event('input'));
                element[i].setAttribute("min", start_date);
            }

            end_date.value = '';
            end_date.dispatchEvent(new Event('input'));
            end_date.setAttribute("min", start_date)

        },

        handlerChangeEndDatePhase: function(id_start_phase, id_end_phase, class_task, class_start_task) {
            let element = document.getElementsByClassName(class_task);
            let element_start = document.getElementsByClassName(class_start_task);
            let start_date = document.getElementById(id_start_phase).value;
            let end_date = document.getElementById(id_end_phase).value;

            for(let i = 0; i < element.length; i++) {
                element[i].disabled = false;
                element[i].value = "";
                element[i].dispatchEvent(new Event('input'));
                element_start[i].value = "";
                element_start[i].dispatchEvent(new Event('input'));
                element_start[i].setAttribute("max", end_date);
                element[i].setAttribute("min", start_date);
                element[i].setAttribute("max", end_date);
            }
        },

        handlerChangeStartDateTask: function(id_start_task, id_end_task, class_area) {
            let element = document.getElementsByClassName(class_area);
            let start_date = document.getElementById(id_start_task).value;
            let end_date = document.getElementById(id_end_task);

            for(let i = 0; i < element.length; i++) {
                element[i].disabled = false;
                element[i].value = "";
                element[i].dispatchEvent(new Event('input'));
                element[i].setAttribute("min", start_date);
            }

            end_date.value = "";
            end_date.dispatchEvent(new Event('input'));
            end_date.setAttribute("min", start_date)
        },

        handlerChangeEndDateTask: function(id_start_task, id_end_task, class_area, class_start_area) {
            let element = document.getElementsByClassName(class_area);
            let element_start = document.getElementsByClassName(class_start_area);
            let start_date = document.getElementById(id_start_task).value;
            let end_date = document.getElementById(id_end_task).value;

            for(let i = 0; i < element.length; i++) {
                element[i].disabled = false;
                element[i].value = "";
                element[i].dispatchEvent(new Event('input'));
                element_start[i].value = "";
                element_start[i].setAttribute("max", end_date);
                element_start[i].dispatchEvent(new Event('input'));
                element[i].setAttribute("min", start_date);
                element[i].setAttribute("max", end_date);
            }
        },

        handlerChangeStartDateArea: function(id_start_area, id_end_area, task_end_date) {
            let start_date = document.getElementById(id_start_area).value;
            let task_end_dates = document.getElementById(task_end_date).value;
            let end_date = document.getElementById(id_end_area);
            end_date.value = "";
            end_date.dispatchEvent(new Event('input'));
            end_date.setAttribute("min", start_date)
            end_date.setAttribute("max", task_end_dates)
        },

        handlerPreparePostData: function() {
            this.form = {
                PG_ID: this.pg.pg_id,
                AC_TYPE: this.pg.ac_type,
                START_DATE: document.getElementById('gantt-start-date').value,
                END_DATE: document.getElementById('gantt-end-date').value,
                MAPED_AC: this.handlerMapAircraft(this.pg.ac_type)
            };
        },

        handlerSaveGantt: function() {
            if(!this.validate()) return;

            this.loading.isLoadingSave = true;

            this.handlerPreparePostData();
            axios.post('/api/booking_and_submission/create_gantt', {
                data_gantt: this.form,
                detail_gantt: this.roles,
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    setTimeout(() => {
                        window.open('/booking_and_submission/gantt_chart/' + this.pg_id  + '/' + res.data.data, '_self');
                    }, 500);
                }else {
                    toastr.error(res.data.message);
                }
                this.loading.isLoadingSave = false;
            })
            .catch(e => {
                console.log("Error: " +e);
                this.loading.isLoadingSave = false;
            })
        },

        validate: function() {
            let start = document.getElementById("gantt-start-date").value;
            let end = document.getElementById("gantt-end-date").value;

            if(start == "") {
                toastr.warning("Start date can't be empty");
                return false;
            }

            if(end == "") {
                toastr.warning("End date can't be empty");
                return false;
            }

            // for(let i = 0; i < this.roles.length; i++) {
            //     if(this.roles[i].START_DATE === "" ) {
            //         toastr.warning(this.roles[i].PHASE_NAME +" start date can't be empty");
            //         return false;
            //     }else {
            //         console.log(this.roles[i].START_DATE);
            //     }

            //     if(this.roles[i].END_DATE === "" ) {
            //         toastr.warning(this.roles[i].PHASE_NAME +" end date can't be empty");
            //         return false;
            //     }

            //     for(let j = 0; j < this.roles[i].TASK.length; j++) {
            //         if(this.roles[i].TASK[j].START_DATE === "") {
            //             toastr.warning(this.roles[i].TASK[j].TASK_NAME +" start date can't be empty");
            //             return false;
            //         }

            //         if(this.roles[i].TASK[j].END_DATE === "") {
            //             toastr.warning(this.roles[i].TASK[j].TASK_NAME +" end date can't be empty");
            //             return false;
            //         }

            //         for(let k = 0; k < this.roles[i].TASK[j].AREA.length; k++) {
            //             if(this.roles[i].TASK[j].AREA[k].START_DATE !== "" && this.roles[i].TASK[j].AREA[k].END_DATE === "") {
            //                 toastr.warning(this.roles[i].TASK[j].AREA[k].AREA_NAME +" end date can't be empty");
            //                 return false;
            //             }

            //             if(this.roles[i].TASK[j].AREA[k].START_DATE === "" && this.roles[i].TASK[j].AREA[k].END_DATE !== "") {
            //                 toastr.warning(this.roles[i].TASK[j].AREA[k].AREA_NAME +" start date can't be empty");
            //                 return false;
            //             }
            //         }

            //     }
            // }

            return true;
        }
    }
}

</script>