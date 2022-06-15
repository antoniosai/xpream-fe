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
        text-align: center !important;
    }

    ::v-deep .tooltip-x .tooltiptext-x {
        visibility: hidden !important;
        width: unset !important;
        background-color: black !important;
        color: #fff !important;
        text-align: center !important;
        border-radius: 6px !important;
        padding: 5px 7px 5px 7px !important;

        /* Position the tooltip */
        position: absolute !important;
        z-index: 1 !important;
        white-space: nowrap !important;
        display: inline-block;
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
                                                <span v-on:click="handlerOpenDailyMenu(pg.pg_id, pg.ac_type, pg.start_date, pg.end_date)" class="link-handler">{{pg.pg_id}}</span> . {{pg.cust_name}} . {{pg.ac_reg}}
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


                                                <div class="status-handler primary tooltip-x">
                                                    <span class="tooltiptext-x">Last Update</span>
                                                    {{handlerDateSync(pg.last_sync)}}
                                                </div>
                                            </div>
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
                                <div class="is-col" style="text-align: right;">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <div style="text-align: center;" class="action tooltip-x">
                                                <div  class="tooltiptext-x">Create Daily Menu</div>
                                                <i v-on:click="handlerOpenDailyMenu(pg.pg_id, pg.ac_type, pg.start_date, pg.end_date)" class="material-icons primary" tabindex="0">event</i>
                                            </div>&nbsp;
                                            <div style="text-align: center;" class="action tooltip-x">
                                                <span  class="tooltiptext-x">Gantt Version</span>
                                                <i v-on:click="handlerOpenVersion(pg.pg_id, pg.ac_type, pg.start_date, pg.end_date)" class="material-icons success" tabindex="0">poll</i>
                                            </div>&nbsp;
                                            <div style="text-align: center;" class="action tooltip-x">
                                                <span  class="tooltiptext-x">View Barcode</span>
                                                <i v-on:click="handlerOpenBarcode(pg.pg_id, pg.ac_type, pg.start_date, pg.end_date)" class="material-icons warning" tabindex="0">visibility</i>
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
            axios.post('/api/production_control_hangar/get_list_active_job_daily', this.filter)
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
            }else {
                result = "EMPTY DAILY MENU  ";
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

        handlerOpenDailyMenu: function(pg_id, ac_type, start_date, end_date) {
            axios.get(`/api/booking_and_submission/get_gantt_last_version/${pg_id}`)
            .then(res => {
                if(res.data.version >= 0) {
                    this.handlerRedirect(pg_id, res.data.version)
                }else {
                    this.handlerCreateInitialGantt(pg_id, ac_type, start_date, end_date, "create")
                }
            })
            .catch(e => {
                console.log("Error: " +e);
                toastr.error("Failed get data");
            })
        },

        handlerOpenBarcode: function(pg_id, ac_type, start_date, end_date) {
            axios.get(`/api/booking_and_submission/get_gantt_last_version/${pg_id}`)
            .then(res => {
                // console.log(res.data.version);
                if(res.data.version >= 0) {
                    this.handlerRedirectBarcode(pg_id, res.data.version)
                }else {
                    this.handlerCreateInitialGantt(pg_id, ac_type, start_date, end_date, "create")
                }
            })
            .catch(e => {
                console.log("Error: " +e);
                toastr.error("Failed get data");
            })
        },

        handlerCreateInitialGantt: function(pg_id, ac_type, start_date, end_date, status) {
            axios.post('/api/booking_and_submission/create_initial_gantt', {
                pg_id: pg_id,
                ac_type: ac_type,
                start_date: start_date,
                end_date: end_date,
                maped_ac: this.handlerMapAircraft(ac_type),
            })
            .then(res => {
                if(res.data.success) {
                    if(status === "create") {
                        this.handlerRedirect(pg_id, res.data.data);
                    }else {
                        this.handlerRedirectVersion(pg_id);
                    }
                }else {
                    toastr.error("Failed create initial gantt");
                }
            })
            .catch(e => {
                console.log("Error: "+e);
                toastr.error("Failed create initial gantt");
            })
        },

        handlerMapAircraft: function(ac_type) {
            let mapped_ac = "";
            if(ac_type.indexOf('-') !== -1 ) {
                let splited_ac = ac_type.split('-');
                if(splited_ac[0].charAt(0) == "3") {
                    mapped_ac = splited_ac[0];
                }else {
                    mapped_ac = splited_ac[0] + "-" + splited_ac[1].charAt(0);
                }
            }else {
                mapped_ac = ac_type;
            }
            return mapped_ac;
        },

        handlerRedirect: function(pg_id, version) {
            const routeData = this.$router.resolve({
                name: 'module2.gantt_chart.gantt_detail',
                params: {
                    pg_id: pg_id,
                    version: version
                }
            });

            window.open(routeData.href, '_blank');

        },

        handlerRedirectBarcode: function(pg_id, version) {
            const routeData = this.$router.resolve({
                name: 'module2.gantt_chart.gantt_detail_filter',
                params: {
                    pg_id: pg_id,
                    version: version
                }
            });

            window.open(routeData.href, '_blank');

        },

        handlerRedirectVersion: function(pg_id) {
            const routeData = this.$router.resolve({
                name: 'module2.gantt_chart.detail',
                params: {
                    pg_id: pg_id,
                }
            });

            window.open(routeData.href, '_blank');
        },

        handlerOpenVersion: function(pg_id, ac_type, start_date, end_date) {
            axios.get(`/api/booking_and_submission/get_gantt_last_version/${pg_id}`)
            .then(res => {
                if(res.data.version >= 0) {
                    this.handlerRedirectVersion(pg_id);
                }else {
                    this.handlerCreateInitialGantt(pg_id, ac_type, start_date, end_date, "version")
                }
            })
            .catch(e => {
                console.log("Error: " +e);
                toastr.error("Failed get data");
            })
        }
    }
}
</script>
