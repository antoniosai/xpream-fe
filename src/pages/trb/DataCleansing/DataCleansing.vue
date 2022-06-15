<style scoped>
    ::v-deep .vue-form-wizard.md .wizard-icon-circle {
        width: 40px !important;
        height: 40px !important;
        font-size: 16px !important;
    }

    ::v-deep .vue-form-wizard.md .wizard-nav-pills>li.active>a .wizard-icon {
        font-size: 16px !important;

    }

    ::v-deep .vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
        top: 25px !important;
        padding-left: 20px !important;
    }

    ::v-deep .is-error {
        color: red !important;
    }
</style>

<template>
    <div v-show="hasAccess">
        <form-wizard v-if="isFound"
            title=""
            subtitle=""
            color="#007bff"
            style="margin-top: -50px"
            :start-index.sync="step"
        >
            <div>
                <loading
                    :active.sync="loading.isLoading" 
                    :can-cancel="false"
                    :is-full-page="false"
                    :color="loading.color"
                    :loader="loading.loaderType">
                </loading>
            </div>
            <tab-content 
                title="Select Data" 
                :before-change="handlerSelectData"
            >
                <div class="card" style="margin-top: -10px; min-height: 85vh;">
                    <div class="card-header bb">
                        <div class="title-area">
                            <h3 class="title">#{{$route.params.draft_name}}</h3>
                            <span class="subtitle total-project"></span>
                        </div>

                        <div class="option-box"></div>
                    </div>
                    <div class="card-content">
                        <div class="is-row">
                            <div class="is-col is-30">
                                <div>
                                    <div class="is-row">
                                        <div class="is-col is-40">
                                            <label>
                                                Aircraft Type
                                            </label>
                                        </div>
                                        <div class="is-col is-50">
                                            <select 
                                                v-model="form.select_data.ac_type" 
                                                name="select-ac" 
                                                id="select-ac"
                                            >
                                                <option value="">Select Aircraft</option>
                                                <option v-for="aircraft in aircrafts" :key="aircraft.ID" v-bind:value="aircraft.ID">{{ aircraft.AIRCRAFT }}</option>
                                            </select>
                                        </div>
                                        <div class="is-col is-10"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="is-row">
                                        <div class="is-col is-40">
                                            <label>
                                                Reference No<span class="is-req">*</span>
                                            </label>
                                        </div>
                                        <div class="is-col is-50">
                                            <textarea 
                                                rows="15"
                                                :class="form.select_data.reference_no === '' ? 'is-error' : ''" 
                                                v-model="form.select_data.reference_no"
                                            >
                                            </textarea>
                                            <label >
                                                <span 
                                                    v-if="form.select_data.reference_no === ''" 
                                                    class="is-error"
                                                > 
                                                    Reference no is required !
                                                </span>
                                            </label>
                                        </div>
                                        <div class="is-col is-10"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="is-col is-50">
                                <div>
                                    <div class="is-row">
                                        <div class="is-col is-20">
                                            <label>
                                                Period<span class="is-req">*</span>
                                            </label>
                                        </div>
                                        <div class="is-col is-50">
                                            <div class="is-row">
                                                <div class="is-col is-50">
                                                    <input 
                                                        v-model="form.select_data.start_date"
                                                        type="date" 
                                                        name="start-date" id="start-date"
                                                        :class="form.select_data.start_date === '' ? 'is-error' : ''" 
                                                    >
                                                </div> 
                                                <div class="is-col is-50">
                                                    <input 
                                                        v-model="form.select_data.end_date"
                                                        type="date" 
                                                        name="end-date" 
                                                        id="end-date"
                                                        :class="form.select_data.end_date === '' ? 'is-error' : ''" 

                                                    >
                                                </div>
                                                <div class="is-col is-90">
                                                    <label >
                                                        <span 
                                                            v-if="form.select_data.start_date === '' || form.select_data.end_date === ''" 
                                                            class="is-error"
                                                        > 
                                                            Period is required !
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="is-col is-30"></div>
                                    </div>
                                </div>
                                <div style="margin-top: -15px;">
                                    <div class="is-row">
                                        <div class="is-col is-20">
                                            <label>
                                                Revision No
                                            </label>
                                        </div>
                                        <div class="is-col is-50">
                                            <textarea 
                                                v-model="form.select_data.revision_no"
                                                rows="15"

                                            >
                                            </textarea>
                                        </div>
                                        <div class="is-col is-30"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="is-col is-20"></div>
                        </div>
                        <div style="margin-top: 30px;">
                            <span class="is-req">*</span>
                            <small><b>Reference No</b> and <b>Revision No</b> should be separated by enter</small>
                        </div>
                    </div>
                </div>
            </tab-content>
            <tab-content title="Clean & Construct">
                <div class="card" style="margin-top: -10px; min-height: 85vh;">
                    <div class="card-header bb">
                        <div class="title-area">
                            <h3 class="title">#{{$route.params.draft_name}}</h3>
                            <span class="subtitle total-project"></span>
                        </div>

                        <div class="option-box">
                            <div class="option-item">
                                <button 
                                    v-on:click="handlerChildStep('decrement')"  
                                    style="height: 20px; width: 70px; z-index: 5" 
                                    class="button is-secondary"
                                    :disabled="child_step_clean < 1"
                                >
                                    <i class="material-icons">navigate_before</i>
                                    Prev
                                </button>
                            </div>
                            <div class="option-item">
                                <button 
                                    v-on:click="handlerChildStep('increment')" 
                                    style="height: 20px; width: 70px; z-index: 5" 
                                    class="button is-secondary"
                                    :disabled="child_step_clean > 6"
                                >
                                    Next
                                    <i class="material-icons">navigate_next</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-content">
                         <form-wizard
                            title=""
                            subtitle=""
                            color="#007bff"
                            style="margin-top: -50px"
                            :start-index.sync="child_step_clean"

                        >
                            <hr style="margin-left: -35px; margin-right: -35px">
                            <div style="margin-bottom: 20px;"></div>
                            <tab-content title="Revision Data Clustering">
                                <DataClustering 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    ref="dataclustering"
                                    v-if="child_step_clean === 0"
                                />
                            </tab-content>

                            <tab-content title="Jobcard Validation">
                                <JobcardManhours 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    type="jobcard_validation"
                                    ref="jobcardmanhours"
                                    v-if="child_step_clean === 1"
                                />
                            </tab-content>

                            <tab-content title="Manhours Jobcard">
                                <JobcardManhours 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    type="manhours_jobcard"
                                    ref="jobcardmanhours"
                                    v-if="child_step_clean === 2"
                                />
                            </tab-content>

                            <tab-content title="Material Job Validation">
                                <JobcardMaterial 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    ref="jobcardmaterial"
                                    v-if="child_step_clean === 3"
                                />
                            </tab-content>

                            <tab-content title="MDR Validation">
                                <MDRManhours 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    type="MDR_validation"
                                    ref="mdrmanhours"
                                    v-if="child_step_clean === 4"
                                />
                            </tab-content>

                            <tab-content title="Manhours MDR Validation">
                                <MDRManhours 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    type="manhours_mdr"
                                    ref="mdrmanhours"
                                    v-if="child_step_clean === 5"
                                />
                            </tab-content>

                            <tab-content title="Material MDR Validation">
                                <MDRMaterial 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    ref="mdrmaterial"
                                    v-if="child_step_clean === 6"
                                />
                            </tab-content>
                            <tab-content title="Summary">
                                <Summary 
                                    v-bind:draft_id="draft_id" 
                                    v-bind:grant_access="grant_access"
                                    ref="summary"
                                    v-if="child_step_clean === 7"
                                />
                            </tab-content>
                            
                            <button v-show="false" id="prev-button" slot="prev">Back</button>
                            <button v-show="false" id="next-button" slot="next">Next</button>
                            <button v-show="false" slot="finish">Done</button>
                        </form-wizard>
                    </div>
                </div>
            </tab-content>
            <tab-content title="Update Master">
                <div class="card" style="margin-top: -10px; min-height: 85vh;">
                    <div class="card-header bb">
                        <div class="title-area">
                            <h3 class="title">#{{$route.params.draft_name}}</h3>
                            <span class="subtitle total-project"></span>
                        </div>

                        <div class="option-box"></div>
                    </div>
                    <div class="card-content">
                        Summary
                        
                    </div>
                </div>
            </tab-content>
        </form-wizard>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import 'vue-loading-overlay/dist/vue-loading.css';

import DataClustering from "./components/DataClustering";
import JobcardManhours from "./components/JobcardManhours";
import MDRManhours from "./components/MDRManhours";
import JobcardMaterial from "./components/JobcardMaterial";
import MDRMaterial from "./components/MDRMaterial";
import Summary from "./components/Summary";

export default {
    components: {
        Loading,
        FormWizard,
        TabContent,
        DataClustering,
        JobcardManhours,
        JobcardMaterial,
        MDRManhours,
        MDRMaterial,
        Summary
    },

    computed: {

    },

    data: () => ({
        draft_id: "",
        grant_access: false,
        hasAccess: false,
        isFound: false,
        step: 0,
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        form: {
            select_data: {
                ac_type: "",
                reference_no: undefined,
                start_date: undefined,
                end_date: undefined,
                revision_no: "",
            }
        },
        aircrafts: [],
        child_step: 1,
        child_step_clean: 0,
    }),

    mounted() {
        if(!this.$can('trb_data_cleansing')) {
            this.$router.push({name: 'access_denied'});
        }else {
            this.hasAccess = true;
            this.grant_access = true;
            this.checkDraft().then(res => {
                if(!res) {
                    this.$router.push({name: 'page_not_found'});
                }else {
                    this.isFound = true;
                    this.initAircraft();
                }
            })
        }

    },

    watch: {
        child_step_clean: {
            handler: function() {
                this.handlerUpdateHelper('CHILD_STEP', this.child_step_clean);
            },
            deep: true
        }
    },

    methods: {
        onComplete: function() {
            console.log("ok");
        },

        handlerSelectData: function() {
            return new Promise((resolve, reject) => {
                if(!this.validationSelectData()) { reject(); return; } 

                toastr.info("Creating temporary files, this may take a few minutes")

                this.loading.isLoading = true;
                axios.post('/api/data_cleansing/draft/create_temp_data', {
                    ac_type: this.form.select_data.ac_type,
                    reference_no: this.form.select_data.reference_no,
                    start_date: this.form.select_data.start_date,
                    end_date: this.form.select_data.end_date,
                    revision_no: this.form.select_data.revision_no,
                    draft_name: this.$route.params.draft_name
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        this.loading.isLoading = false;
                        this.child_step_clean = 0;
                        this.$refs.dataclustering.initData();
                        resolve(true);
                    }else {
                        toastr.error(res.data.message);
                        this.loading.isLoading = false;
                        resolve(false);
                    }

                })
                .catch(e => {
                    console.log("Error: " +e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                    resolve(false);
                })
            });
        },

        validationSelectData: function() {

            let arr_val = [];

            if(this.form.select_data.reference_no === '' || this.form.select_data.reference_no === undefined) {
                this.form.select_data.reference_no = '';
                arr_val.push(true);   
            }

            if(this.form.select_data.start_date === '' || this.form.select_data.start_date === undefined) {
                this.form.select_data.start_date = '';
                arr_val.push(true);   
            }

            if(this.form.select_data.end_date === '' || this.form.select_data.end_date === undefined) {
                this.form.select_data.end_date = '';
                arr_val.push(true);   
            }

            if(arr_val.length > 0) {
                return false;
            }

            return true;
        },

        checkDraft: function() {
            return new Promise((resolve) => {
                axios.get(`/api/data_cleansing/draft/check_draft/${this.$route.params.draft_name}`)
                .then(res => {
                    if(!res.data.success) {
                        resolve(false);
                    }else {
                        this.form.select_data.ac_type = res.data.data.AC_TYPE;
                        this.form.select_data.reference_no = res.data.data.REFERENCE;
                        this.form.select_data.start_date = res.data.data.START_DATE;
                        this.form.select_data.end_date = res.data.data.END_DATE;
                        this.form.select_data.revision_no = res.data.data.REVISION;
                        this.step = parseInt(res.data.data.STEP) - 1;
                        this.child_step_clean = res.data.data.CHILD_STEP !== null || res.data.data.CHILD_STEP !== "" ? parseInt(res.data.data.CHILD_STEP) : 0;
                        this.draft_id = res.data.data.ID;
                        resolve(true);
                    }
                })
                .catch(() => {
                    resolve(false);
                })
            })
        },

        initAircraft: function() {
            axios.get('/api/aircraft/get_aircraft')
            .then( res => {
                this.aircrafts = res.data.data
            })
        },

        handlerChildStep(status) {
            if(status === "increment") {
                document.getElementById("next-button").click(); 
            }else {
                document.getElementById("prev-button").click(); 
            }
        },

        handlerUpdateHelper: function(column, data) {
            axios.post('/api/data_cleansing/update_helper', {
                id_draft: this.draft_id,
                column: column,
                data: data
            })
            .catch(e => {
                console.log(e);
            })
        },

    }
}
</script>