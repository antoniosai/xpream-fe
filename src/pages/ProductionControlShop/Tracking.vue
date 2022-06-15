<style scoped>
    ::v-deep .box-order {
        width: 100%;
        border: 1px solid #eee;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    ::v-deep .action > i {
        padding: 5px;
        background: #fff;
        border-radius: 5px;
        font-size: 18px;
        border: 1px solid #eaeaea;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
        cursor: pointer;
    }

    ::v-deep .action > i.warning {
        color: #ffc107;
    }

    ::v-deep .action > i.warning:hover {
        background-color: #ffc107;
        color: white;
    }

    ::v-deep .action > i.success {
        color: #13CE66;
    }

    ::v-deep .action > i.primary {
        color: #026396;
    }

    ::v-deep .action > i.success:hover {
        background-color: #13CE66;
        color: white;
    }

    ::v-deep .action > i.primary:hover {
        background-color: #026396;
        color: white;
    }

    ::v-deep .tooltip-x {
        position: relative !important;
        display: inline-block !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x {
        visibility: hidden !important;
        width: 120px !important;
        background-color: black !important;
        color: #fff !important;
        text-align: center !important;
        border-radius: 6px !important;
        padding: 5px 0 !important;
        
        /* Position the tooltip */
        position: absolute !important;
        z-index: 1 !important;
        bottom: 100% !important;
        left: 50% !important;
        margin-left: -60px !important;
        white-space: nowrap !important;
    }

    ::v-deep .tooltip-x:hover .tooltiptext-x {
        visibility: visible !important;
    }


    ::v-deep .status-handler {
        color: white;
        font-size: 9pt;
        border-radius: 5px;
    }

    ::v-deep .status-handler.success {
        background-color: #13CE66;
        padding: 4px !important;

    }

    ::v-deep .status-handler.primary {
        background-color: #026396;
        padding: 2px 4px 2px 4px !important;

    }

    ::v-deep .status-handler.danger {
        background-color: #dc3545;
        padding: 4px !important;
    }

    ::v-deep .status-handler.warning {
        background-color: #ffc107;
        padding: 4px !important;

    }

    ::v-deep .link-handler {
        color: #1b69b6;
        cursor: pointer;
    }

    ::v-deep .link-handler:hover {
        text-decoration: underline;
    }

    ::v-deep .outer-x {
        display: table; 
        top: 0; 
        height: 100%; 
        width: 100%;
    }

    ::v-deep .inner-x {
        display: table-cell; 
        vertical-align: middle;
    }

</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header ">
                    <div class="title-area">
                        <h3 class="title">
                            List Project
                        </h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box">
                        
                         <div class="option-item">
                            <span style="white-space: nowrap">Location</span>
                            <select v-on:change="handlerFilterLine()" v-model="filter.location">
                                <option value="">All Location</option>
                                <option v-for="hangar in hangars" :key="hangar.ID"  :value="hangar.id" >{{hangar.name + ' - ' + hangar.description}}</option>
                            </select>
                        </div>
                        <div class="option-item">
                            <span style="white-space: nowrap">Line</span>
                            <select v-on:change="handlerFilter()"  v-model="filter.line">
                                <option  value="" selected>All Line</option>
                                <option v-for="line in lines" :key="line.id"  :value="line.id" >{{line.line_name + ' ' + line.description}}</option>
                            </select>
                        </div>
                        <div class="option-item">
                            <span style="white-space: nowrap">Status</span>
                            <select v-on:change="handlerFilter()" v-model="filter.status">
                                <option value="">All Status</option>
                                <option value="REL">Release</option>
                                <option value="CRTD">Created</option>
                            </select>
                        </div>
                        <div class="option-item">
                             Search
                             <input v-on:keyup.enter="handlerFilter()" v-model="filter.search" type="text" placeholder="Type and enter">
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div style="box-sizing: border-box; position: relative; min-height: 40px;">
                        <div>
                            <loading
                                :active.sync="loading.isLoading" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                        </div>

                        <div>
                            <loading
                                :active.sync="loading.isLoadingPaginate" 
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                        </div>
                        
                        <div v-for="(pg, index) in data_pg" :key="index" class="box-order">
                            <div class="is-row" style="padding: 20px 20px 10px 20px;">
                                <div class="is-col is-40">
                                    <div >
                                        <div>
                                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                                flight
                                            </i>
                                            <div style="font-size: 12pt; font-weight: bold; margin: -24px 0px 0px 20px;">
                                                {{pg.main_type}}
                                            </div>
                                        </div>
                                        <div style="margin-top: 4px;">
                                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                                linear_scale
                                            </i>
                                            <div style="font-size: 11pt; margin: -23px 0px 0px 20px;">
                                                <span v-on:click="handlerOpenProject(pg.pg_id)" class="link-handler">{{pg.pg_id}}</span> . {{pg.cust_name}} . {{pg.ac_reg}}
                                            </div>
                                        </div>
                                        <div style="margin-top: 5px;">
                                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                                timeline
                                            </i>
                                            <div style="font-size: 11pt; margin: -23px 0px 0px 20px;">
                                                <span class="status-handler success" v-if="pg.status == 0">OPEN</span>
                                                <span class="status-handler primary" v-if="pg.status == 1">PROGRESS</span>
                                                <span class="status-handler danger" v-if="pg.status == 2">CANCEL</span>
                                                <span class="status-handler warning" v-if="pg.status == 3">CLOSED</span>
                                                <span class="status-handler warning" v-if="pg.status == 4">WAIT</span>
                                                <span class="status-handler success" v-if="pg.status == 'REL'">RELEASED</span>
                                                <span class="status-handler warning" v-if="pg.status == 'CRTD'">CREATED</span>


                                                <span class="status-handler primary tooltip-x">
                                                    <span class="tooltiptext-x">Last Sync</span>
                                                    {{handlerDateSync(pg.last_sync)}}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <select v-on:change="handlerSelectTracking(pg.pg_id, 'select-tracking-'+index)" style="width: 100px;" :id="'select-tracking-'+index">
                                                <option value="">Tracking</option>
                                                <option value="dashboard_summary">Dashboard</option>
                                                <option value="jobcard">Jobcard</option>
                                                <option value="mdr">MDR</option>
                                                <option value="mrm">MRM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <table>
                                                <tr>
                                                    <td width="50%" style="border: unset; padding: unset; text-align: right;">Start Date</td>
                                                    <td width="5%" style="border: unset; padding: unset; text-align: center;">:</td>
                                                    <td style="border: unset; padding: unset;"><b>{{handlerDate(pg.start_date,pg.start_date_new)}}</b></td>
                                                </tr> 
                                                <tr>
                                                    <td width="50%" style="border: unset; padding: unset; text-align: right;">End Date</td>
                                                    <td width="5%" style="border: unset; padding: unset; text-align: center;">:</td>
                                                    <td style="border: unset; padding: unset;"><b>{{handlerDate(pg.end_date,pg.end_date_new)}}</b></td>
                                                </tr>    
                                            </table> 
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <table>
                                                <tr>
                                                    <td width="50%" style="border: unset; padding: unset; text-align: right;">Location</td>
                                                    <td width="5%" style="border: unset; padding: unset; text-align: center;"> : 
                                                    </td>
                                                    <td style="border: unset; padding: unset;"><b>{{pg.linedesc}}</b></td>
                                                </tr>   
                                            </table>                           
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <!--<table>
                                                <tr>
                                                    <td style="border: unset; padding: unset; text-align: center;">JC (<b>{{pg.total_jc_done}}%</b> of <b>{{pg.total_jc}}</b> )</td>
                                                </tr> 
                                                <tr>
                                                    <td style="border: unset; padding: unset; text-align: center;">MDR (<b>{{pg.total_mdr_done}}%</b> of <b>{{pg.total_mdr}}</b>)</td>
                                                </tr>    
                                            </table>-->                           
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col" style="text-align: right;">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <div style="text-align: center;" class="action tooltip-x">
                                                <span  class="tooltiptext-x">Synchronize</span>
                                                <i v-on:click="handlerSync(pg.pg_id)" class="material-icons warning" tabindex="0">sync</i>
                                            </div>&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="!loading.isLoading" class="is-row">
                            <div style="text-align: center;" class="is-col is-100">
                                  <paginate
                                    :page-count="paginate.total"
                                    :container-class="'pagination'"
                                    :prev-text="'Prev'"
                                    :next-text="'Next'"
                                    :click-handler="handlerPaginate">
                                </paginate>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Paginate from 'vuejs-paginate';
export default {
    components: {
        Loading,
        'paginate': Paginate
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
        tracking: "",
        data_pg: [],
        filter: {
            location: "",
            status: "",
            line: "",
            search: "",
            page: 1,
        },
        lines: [],
        hangars: [],
        paginate: {
            last: 0,
            total: 0,
        },
    }),

    mounted() {
        this.initHangar();
        this.initData();
    },

    watch: {},

    methods: {
        initData: function() {
            this.loading.isLoading = true;
            this.filter.page = 1;
            axios.post('/api/production_control_hangar/get_list_active_job', this.filter)
            .then(res => {
                this.data_pg = res.data.data;
                this.paginate.total = res.data.last_page;
                this.loading.isLoading = false;

            })
            .catch(e => {
                console.log("Error: " + e);
            })
        },

        handlerDate: function(date1, date2) {
            const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let result = date1;
            if(date2 !== null) {
                const d = new Date(date2);
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()}`;
            }
            else{
                const d = new Date(date1);
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()}`;            
            }
            return result;
        },

        handlerDateSync: function(date) {
            const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let result = date;
            if(date !== null) {
                const d = new Date(date);
                let hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
                let minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                let seconds = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()} ${hours}:${minutes}:${seconds}`;
            }
            return result;
        },

        initHangar: function() {
            axios.get('/api/booking_and_submission/show_hangar')
            .then( res => {
                this.hangars = res.data
            })
        },

        handlerFilterLine: function() {
        axios.get('/api/management/hangar/' + this.filter.location)
            .then( res => {
                this.lines = res.data.line;
                this.handlerFilter();
            })
        },

        handlerFilter: function() {
            this.loading.isLoading = true;
            this.filter.page = 1;
            axios.post('/api/production_control_hangar/get_list_active_job', this.filter)
            .then(res => {
                this.data_pg = res.data.data;
                this.paginate.total = res.data.last_page;
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },

        handlerPaginate: function(page) {
            this.loading.isLoadingPaginate = true;
            this.filter.page = page;

            axios.post('/api/production_control_hangar/get_list_active_job', this.filter)
            .then(res => {
                this.data_pg = res.data.data;
                this.paginate.total = res.data.last_page;
                this.loading.isLoadingPaginate = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                this.loading.isLoadingPaginate = false;

            })
        },

        handlerSync: function(pg_id) {
            swal({
                title: "Synchronize Project",
                text: "Are you sure that you want sync this project? \n This action will take a few minutes.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoadingPaginate = true;
                    this.handlerSyncJC(pg_id).then(() => {
                        this.handlerSyncJMDR(pg_id).then(() => {
                            this.handlerSyncJMRM(pg_id).then(() => {
                                this.loading.isLoadingPaginate = false;
                                this.handlerPaginate(this.filter.page);
                            })
                        })
                    })
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
        },

        handlerOpenProject: function(pg_id) {
            this.$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: pg_id, type: 'shop'}})
        },

        handlerSyncJC: function(revnr) {
            return new Promise((resolve, reject) => {
                axios.get('/api/production_control_hangar/sync_jobcard/' + revnr)
                .then(res => {
                    if(res.data.success) {
                        toastr.success("Success sync Jobcard data");
                    }else {
                        toastr.warning(res.data.message);
                    }
                    resolve();
                })
            })
        },

        handlerSyncJMDR: function(revnr) {
            return new Promise((resolve, reject) => {
                axios.get('/api/production_control_hangar/sync_mdr/' + revnr)
                .then(res => {
                    if(res.data.success) {
                        toastr.success("Success sync MDR data");
                    }else {
                        toastr.warning(res.data.message);
                    }
                    resolve();
                })
            })
        },

        handlerSyncJMRM: function(revnr) {
            return new Promise((resolve, reject) => {
                axios.get('/api/production_control_hangar/sync_mrm/' + revnr)
                .then(res => {
                    if(res.data.success) {
                        toastr.success("Success sync MRM data");
                    }else {
                        toastr.warning(res.data.message);
                    }
                    resolve();
                })
            })
        },

        handlerSelectTracking: function(pg_id, elem_id) {
            let elem = document.getElementById(elem_id).value;
            if(elem == "") return;
            let routeData = this.$router.resolve({name: `pc_shop.tracking.${elem}`, params: {pg_id: pg_id}});
            
            if(elem === 'dashboard_summary') {
                routeData = this.$router.resolve({name: `pc_hangar.tracking.${elem}`, params: {pg_id: pg_id, type: 'shop'}});
            }
            
            window.open(routeData.href, '_blank');
        }


    }
}
</script>