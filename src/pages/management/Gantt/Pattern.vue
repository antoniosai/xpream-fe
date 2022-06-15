<style scoped>

::v-deep .gantt-pattern {
    margin-left: -5px;
}
::v-deep .gantt-pattern-box {
    background-color: rgb(51, 132, 255);
    color: white;
    padding: 8px 10px 8px 10px;
    border-radius: 3px;
    margin-left: 3px;
    cursor: pointer;
}
</style>

<template>
    <div>
        <div>
            <div class="card-header">
                <div class="title-area">
                    <h3 class="title">{{ $route.meta.title }}</h3>
                    <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                </div>

                <div class="option-box">
                    <div class="option-item">
                        <button class="button is-success" v-on:click="handlerModalAddPattern('Create', '')">
                            <i class='material-icons'>
                                add_circle
                            </i>
                            Add Pattern
                        </button>
                    </div>
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

                <div>
                    <div class="is-container-row gantt-pattern">
                        <span v-on:click="handlerModalAddPattern('Update', pattern.ID)" v-for="(pattern, index) in patterns" :key="index" class="label clickable gantt-pattern-box">{{pattern.PMPS_CODE}}</span>
                    </div>
                </div>
                <br><br>
                <span style="color: red; font-size: 9pt;">*Click for details</span>

            </div>
        </div>
        <!-- modal add pattert -->
        <div class="modal-box" id="modal-add-pattern">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('modal-add-pattern')"></span>
                    <div class="modal-header">
                        <h2 class="title"><span id="status-post"></span> Gantt Pattern</h2>
                        <div class="planning-info">
                            <ul class="display-flex align-items-center">
                                <li class="revision">
                                    <span class="title">PMPS Code</span>
                                    <select v-on:change="handlerChangePMPS()" v-model="code" style="font-size: 9pt;" name="" id="pmps_code">
                                        <option value="">-- PMPS Code --</option>
                                        <option v-for="code in pmps_codes" :key="code.ID" :value="code.ID">{{code.PMPS_CODE}}</option>
                                    </select>
                                </li>
                                <li class="created_by">
                                    <span class="title">Created At</span>
                                    <span style="font-size: 9pt;" id="created-at" class="value">-</span>
                                </li>
                                <li class="edited_by">
                                    <span class="title">Last Edited At</span>
                                    <span style="font-size: 9pt;" id="updated-at" class="value">-</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <table class="is-bordered">
                            <thead>
                                <tr>
                                <th style="width:30%">Phase</th>
                                <th style="width:30%">Task</th>
                                <th style="width:30%">Area</th>
                                <th style="width:40px">
                                    <div  class="action">
                                        <i v-on:click="handlerAddrow()" id="add-row" class="material-icons success add-row" tabindex="0">add_circle_outline</i>
                                    </div>
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="planning_item" v-for="(form, index) in forms" :key="index">
                                    <td>
                                        <select v-model="form.phase" class="phase">
                                            <option value="">-- Phase --</option>
                                            <option v-for="phase in phases" :key="phase.ID" :value="phase.ID">{{phase.PHASE_NAME}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select v-model="form.task" style="max-height: 100px;" class="task">
                                            <option value="">-- Task --</option> 
                                            <option v-for="task in tasks" :key="task.ID" :value="task.ID">{{task.TASK_NAME}}</option>

                                        </select>
                                    </td>
                                    <td>
                                        <select v-model="form.area" class="">
                                            <option value="">-- Area --</option>         
                                            <option v-for="area in areas" :key="area.ID" :value="area.ID">{{area.AREA_NAME}}</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div  class="action">
                                            <i v-on:click="handlerRemoveRow(index)" id="remove-row" class="material-icons danger remove-row" tabindex="0">remove_circle_outline</i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-add-pattern')">Close</button>
                        <button class="button is-success" v-on:click="handlerSavePattern()" type="submit" id="btn-save-pattern"> </button>

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
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
    data: () => ({
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        patterns: [],
        phases: [],
        tasks: [],
        areas: [],
        pmps_codes: [],
        code: "",
        forms: [
            {
                phase: "",
                task: "",
                area: "",
            }
        ]
    }),

    components: {
        Loading
    },

    mounted() {
        this.initPattern();
        this.initPhase();
        this.initTask();
        this.initArea();
        this.initPMPSCode();
    },

    methods: {
        initPhase: function() {
            axios.get('/api/management/get_all_phase')
            .then(res => {
                this.phases = res.data;
            })
        },

        initPMPSCode: function() {
            axios.get('/api/management/get_all_pmps_code')
            .then(res => {
                this.pmps_codes = res.data;
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

        initPattern: function() {
            axios.get('/api/management/used_pmps_code')
            .then(res => {
                this.patterns = res.data;
            })
            .catch(e => {
                console.log("Error: " +e);
            })
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).hide();
        },

        handlerModalAddPattern: function(status, pmps_code) {
            this.forms = [];
            if(pmps_code == "") {
                document.getElementById('pmps_code').disabled = false;
                document.getElementById("btn-save-pattern").disabled = true;
                document.getElementById('created-at').innerHTML = "-";
                document.getElementById('updated-at').innerHTML = "-";
                this.code = "";
                this.forms =  [ {
                    phase: "",
                    task: "",
                    area: "",
                }];
            }else {
                this.code = pmps_code;
                document.getElementById("btn-save-pattern").disabled = false;
                document.getElementById('pmps_code').disabled = true;
                axios.get('/api/management/get_pattern_det/' + pmps_code)
                .then(res => {
                    this.forms = res.data.detail;
                    if(res.data.created_at === null) {
                        document.getElementById('created-at').innerHTML = "-";
                    }else {
                        document.getElementById('created-at').innerHTML = res.data.created_at.substring(0, 16);  
                    }
                    
                    if(res.data.updated_at === null) {
                        document.getElementById('updated-at').innerHTML = "-";
                    }else {
                        document.getElementById('updated-at').innerHTML = res.data.updated_at.substring(0, 16);
                    }
                })    
            }
            document.getElementById('status-post').innerHTML = status;
            document.getElementById('btn-save-pattern').innerHTML = status;
            $("#modal-add-pattern").show();
        },

        handlerAddrow: function() {
            let element = document.getElementById('add-row');
            if(element.classList.contains('disabled')) return;
            this.forms.push({phase: "", task: "", area: ""});
        },

        handlerRemoveRow: function(index) {
            let element = document.getElementById('remove-row');
            if(element.classList.contains('disabled')) return;

            this.forms.splice(index, 1);
        },

        handlerChangePMPS: function() {
            if(this.code === "") {
                document.getElementById("btn-save-pattern").disabled = true;
            }else {
                axios.get('/api/management/get_pmps_det/' +this.code)
                .then(res => {
                    if(res.data.length < 1) {
                        document.getElementById("btn-save-pattern").disabled = false;
                    }else {
                        toastr.warning("Gantt pattern already exists");
                        document.getElementById("btn-save-pattern").disabled = true;
                    }
                })
            }
        },

        handlerSavePattern: function() {
            if(!this.validate()) return;

            this.handleButton('btn-save-pattern', 'load').then(() => {
                axios.post('/api/booking_and_submission/create_gantt_pattern', {
                    code: this.code,
                    data: this.forms
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initPattern();
                        setTimeout(()=> {
                            this.hideModal('modal-add-pattern');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-save-pattern', 'stop');
                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-save-pattern', 'stop');

                })
            })
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

        validate: function() {
            if(this.code === "") {
                toastr.warning("PMPS Code can't be empty");
                return false;
            }

            for(let i = 0; i < this.forms.length; i++) {
                if(this.forms[i].phase == "") {
                    toastr.warning("Phase can't be empty");
                    return false;
                }

                if(this.forms[i].task == "") {
                    toastr.warning("Task can't be empty");
                    return false;
                }

            }

            return true;
        }
    }
}

</script>