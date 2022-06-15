<style scoped>
    ::v-deep .project-info {
        overflow-x: auto;
    }

    ::v-deep .title {
        white-space: nowrap !important;
    }

    ::v-deep .value {
        white-space: nowrap !important;
    }

    ::v-deep .footer {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        width: 100%; 
        position: sticky; 
        bottom: 0; 
        text-align: right;
    }

    ::v-deep .content-data {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div v-if="!loading.isLoading && isFound" class="content-body">
            <div class="card content-data">
                <div class="card-header bb">
                    <div class="title-area">
                        <h3 class="title">{{ $route.meta.title }}</h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box"></div>
                </div>
                <div class="card-content">
                    <div class="project-info display-flex align-items-center">
                        <div class="main-info">
                            <span class="title-big">{{pg_data.ac_reg}}</span>
                            <span class="subtitle-big">REVISION {{pg_data.pg_id}}</span>
                        </div>
                        <ul class="display-flex align-items-center">
                            <li>
                                <span class="title">AMS</span>
                                <span class="value">{{pg_data.ams_text ? pg_data.ams_text : pg_data.ams}}</span>
                            </li>
                            <li>
                                <span class="title">Customer</span>
                                <span class="value">{{pg_data.customer}}</span>
                            </li>
                            <li>
                                <span class="title">Type</span>
                                <span class="value">{{pg_data.airframe_cat}}</span>
                            </li>
                            <li>
                                <span class="title">SN</span>
                                <span class="value">{{'-'}}</span>
                            </li>
                            <li>
                                <span class="title">Category</span>
                                <span class="value">{{'-'}}</span>
                            </li>
                            <li>
                                <span class="title">TAT</span>
                                <span class="value">{{`${pg_data.TAT} cal. days`}}</span>
                            </li>
                            <li>
                                <span class="title">Start Date</span>
                                <span class="value">{{pg_data.start_date_new ? pg_data.start_date_new : pg_data.start_date}}</span>
                            </li>
                            <li>
                                <span class="title">Finish Date</span>
                                <span class="value">{{pg_data.end_date_new ? pg_data.end_date_new : pg_data.end_date}}</span>
                            </li>
                            <li>
                                <span class="title">Maintenance Type</span>
                                <span class="value">{{pg_data.main_type}}</span>
                            </li>
                        </ul>
                    </div>
                    <div style="padding-bottom: 20px;">
                        <div style="margin-top: 30px;">
                            <h4>General Information</h4>
                            <div class="is-row">
                                <div class="form-item is-col">
                                    <label>Capping <span class="is-req">*</span></label>
                                    <select v-model="profit_data.capping_id" name="capping" id="capping">
                                        <option value="">Select Capping</option>
                                        <option v-for="(capping, index) in cappings" :key="index" :value="capping.id">{{capping.capping}}</option>
                                    </select>
                                </div>
                                <div class="form-item is-col">
                                    <label>Mhrs <span class="is-req">*</span></label>
                                    <input v-model="profit_data.mhrs" type="text">
                                </div>
                                <div class="form-item is-col">
                                    <label>Material <span class="is-req">*</span></label>
                                    <input v-model="profit_data.material" type="text">
                                </div>
                            </div>
                            <div class="is-row" style="margin-top: -20px;">
                                <div class="form-item is-col">
                                    <label>Est. NPPA (Percent %) <span class="is-req">*</span></label>
                                    <input v-model="profit_data.nppa" type="number">
                                </div>
                                <div class="form-item is-col">
                                    <label>Target <span class="is-req">*</span></label>
                                    <input v-model="profit_data.target" type="number">
                                </div>
                                <div class="form-item is-col">
                                    <label>Revisi <span class="is-req">&nbsp;</span></label>
                                    <input v-model="profit_data.version" :disabled="true" type="text">
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4>Detail Information</h4>
                            <div v-for="(cat, index) in profit_detail" :key="index" style="margin-top: 20px;">
                                <h4>#{{cat.category}}</h4>
                                <div v-for="(header, head_idx) in cat.header" :key="head_idx" style="margin-top: 15px;">
                                    <h5>{{(head_idx+10).toString(36).toUpperCase()}}. {{header.coa_header}}</h5>
                                    <div v-for="(item, idx_item) in header.items" :key="idx_item" class="is-row" style="margin-bottom: -25px;">
                                        <div class="is-col is-25">
                                            <div style="margin-left: 20px;">
                                                <i style="font-size: 14pt;" class='material-icons'>
                                                    subdirectory_arrow_right
                                                </i> 
                                                <div style="margin-top: -20px; margin-left: 25px;">
                                                    <h5>{{item.coa_desc}}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="is-col is-75">
                                            <div class="is-row">
                                                <div class="form-item is-col">
                                                    <label>COA Number</label>
                                                    <input v-model="item.coa_number" :disabled="true" type="text">
                                                </div>
                                                <div class="form-item is-col">
                                                    <label>QTY {{item.unit === "percent" ? "(Percent %)" : ""}}</label>
                                                    <input type="number" v-model="item.qty">
                                                </div>
                                                <div class="form-item is-col">
                                                    <label>Rate</label>
                                                    <input type="number" v-model="item.rate">
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
            <div class="card footer">
                <button v-on:click="handlerPrintProfit()" class="button is-inverted">Print</button>
                <button v-on:click="$router.go(-1)" class="button is-inverted">Cancel</button>
                <button v-on:click="handlerPost()" id="btn-save-profit" class="button is-primary">
                    <i class='material-icons'>
                        save
                    </i>
                    Save
                </button>
            </div>
        </div>
        <div v-if="!loading.isLoading && !isFound">
            <div class="alert is-focus">
                Sales plan data not found !
                <div style="margin-top: 10px;">
                    <button v-on:click="$router.go(-1)" style="color:#fafafa; background-color: #f93232;" class="button is-small is-destructive">Turn me back</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        Loading,
    },

    computed: {

    },

    data: () => ({
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        isFound: false,
        hasAccess: true,
        pg_data: {
            ac_reg: "",
            pg_id: "",
            ams: "",
            ams_text: "",
            customer: "",
            main_type: "",
            airframe_cat: "",
            TAT: "0",
            start_date: "",
            end_date: "",
            start_date_new: "",
            end_date_new: "",

        },
        profit_data: {
            id: "",
            capping_id: "",
            mhrs: "",
            material: "",
            nppa: "",
            target: "",
            version: "0",
        },
        profit_detail: [],
        cappings: [],
    }),

    mounted() {
        // if(!this.$can('')) {
        //     this.$router.push({name: 'access_denied'});
        // }else {
        //     this.hasAccess = true;
        // }
        this.initData();
        this.initCapping();
    },

    watch: {},

    methods: {
        initData: function() {
            this.loading.isLoading = true;
            this.isFound = false;
            axios.get(`/api/profit/form/${this.$route.params.sales_id}`)
            .then(res => {
                if(res.data.success) {
                    this.pg_data = res.data.data.pg_data;
                    if(res.data.data.profit_data.length) {
                        this.profit_data = res.data.data.profit_data[0];

                    }else {
                        this.profit_data.sales_id = this.$route.params.sales_id;
                    }
                    this.profit_detail = res.data.data.profit_form;
                    this.isFound = true;
                }else {
                    this.isFound = false;
                }
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initCapping: function() {
            axios.get(`/api/profit/capping`)
            .then(res => {
                this.cappings = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        handlerValidation: function() {
            if(!this.profit_data.capping_id) {
                toastr.warning("Capping should be selected");
                return false;
            }

            if(!this.profit_data.mhrs) {
                toastr.warning("Mhrs can't be empty");
                return false;
            }

            if(!this.profit_data.material) {
                toastr.warning("Material can't be empty");
                return false;
            }

            if(!this.profit_data.nppa) {
                toastr.warning("Est. NPPA can't be empty");
                return false;
            }

            if(!this.profit_data.target) {
                toastr.warning("Target can't be empty");
                return false;
            }

            return true;
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

        handlerPost: function() {
            if(!this.handlerValidation()) return;

            this.handleButton('btn-save-profit', 'load').then(() => {
                axios.post('/api/profit/save_profit', {
                    data_profit: this.profit_data,
                    detail_profit: this.profit_detail,
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message);
                        this.initData();
                    }else {
                        toastr.error(res.data.message);
                    }

                    this.handleButton('btn-save-profit', 'stop');
                })
                .catch(e => {
                    console.log("Error: "+e)
                    toastr.error("Undefined error")
                    this.handleButton('btn-save-profit', 'stop');
                })
            })
        },

        handlerPrintProfit: function() {
            axios.get(`/api/profit/print_profit/${this.$route.params.sales_id}/${this.profit_data.version}`)
            .then(res => {
                if(res.data.success) {
                    window.open(res.data.data, '_blank');
                }else {
                    toastr.error(res.data.message);
                }
            })
            .catch(e => {
                toastr.error("Undefined error");
            })
        }
    }
}
</script>