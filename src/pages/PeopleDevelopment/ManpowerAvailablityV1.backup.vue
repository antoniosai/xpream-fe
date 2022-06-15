<template>
    <div>
        <div>
            <loading :active.sync="loading.isLoading" :can-cancel="false" :is-full-page="true" :color="loading.color" :loader="loading.loaderType">
            </loading>
        </div>

        <div>
            <loading :active.sync="loading.isLoadingPaginate" :can-cancel="false" :is-full-page="true" :color="loading.color" :loader="loading.loaderType">
            </loading>
        </div>
        <div class="card" style="margin-bottom: 15px; top: 0; position: sticky; z-index: 2; width: 100%;">
            <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Location</span>
                    <select v-on:change="handlerFilterLine()" v-model="filter.location">
                    <option value="">All Location</option>
                    <option
                    v-for="hangar in hangars"
                    :key="hangar.ID"
                    :value="hangar.id"
                    >{{
                    hangar.name + " - " + hangar.description
                    }}</option
                    >
                    </select>
                </div>
                <div class="option-item">
                    <span style="white-space: nowrap">Line</span>
                    <select v-on:change="handlerFilter()" v-model="filter.line">
                    <option value="" selected>All Line</option>
                    <option
                    v-for="line in lines"
                    :key="line.id"
                    :value="line.id"
                    >{{
                    line.line_name + " " + line.description
                    }}</option
                    >
                    </select>
                </div>
                <div class="option-item d-none test">
                    <span style="white-space: nowrap">Status</span>
                    <select id="single-status" v-on:change="handlerFilter()" v-model="filter.status">
                    <option value="">All Status</option>
                    <option value="Prepared">Prepared</option>
                    <option value="Progress">Progress</option>
                    <option value="Released">Released</option>
                    <option value="Freeze">Freeze</option>
                    <option value="Parking">Parking</option>
                    </select>
                </div>
                <div class="option-item">
                    Search
                    <input v-on:keyup.enter="handlerFilter()" v-model="filter.search" type="text" placeholder="Type and enter" />
                </div>
                <div class="option-item">
                    Per Page
                    <select v-on:change="handlerFilter()" v-model="filter.perPage" name="per-page" id="per-page">
                        <option value="2">2</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option
                        v-if="
                        filter.status != '' ||
                        filter.status != 'Released'
                        "
                        :value="paginate.total_page"
                        >All</option>
                    </select>
                </div>
            </div>
        </div>
        <div id="data-project"></div>
        <div v-if="!loading.isLoading" class="is-row">
            <div style="" class="is-col is-100 ms-container">

                <div class="is-row">
                    <div class="is-col is-12_5" v-for="(a, idx) of manpowerAvailablities" :key="idx">
                        <div class="ms-card">
                            <div class="ms-card-header" style="margin-bottom: 8px; padding-right: 3px;text-align:left">
                                <div style="display: flex; justify-content: space-between;align-items: center; ">
                                <span style="text-align:left;">
                                    {{a.description}}
                                </span>
                                <span style="font-size: 10px; color: #2196f3; font-weight: 700;">
                                    <a :href="'#openModal-about'+idx" @click="onTouchModal(idx)"class="btn btn-sm is-success" style="background: rgb(0, 188, 212); border-radius: 50px; color: rgb(255, 255, 255); padding: 4px 10px; top: 4px; ">
                                        {{ a.attendance.Available.length + a.attendance.Unavailable.length }}
                                    </a>
                                </span>
                                </div>
                                <span style="font-size:10px;color: #2196f3;">{{a.unit.string}}</span>
                            </div>

                            <div class="ms-card-body">
                                <div class="panel panel-primary" style="position:relative" >
                                    <div class="panel-heading jc-between pointer" data-toggle="collapse" :href="'#collapseOne'+idx" aria-expanded="true" aria-controls="collapseOne" @click="clickable($event.target.children[1])">

                                        <h3 class="panel-title ev-none">Line Up</h3>

                                        <div class="flex ev-none">
                                            <span class="ms-badge">{{a.attendance.Available.length}}</span>
                                            <i class="material-icons ev-none" style="margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                        </div>



                                    </div>

                                    <div :id="'collapseOne'+idx" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body">

                                            <div class="panel panel-info">
                                                <div class="panel-heading jc-between pointer" data-toggle="collapse" :href="'#collapseOneStatus'+idx" aria-expanded="true" aria-controls="collapseOneStatus" @click="clickable($event.target.children[1])" style="border-radius:10px !important">
                                                    <h3 class="panel-title ev-none">Status</h3>
                                                    <div class="flex ev-none">
                                                        <i class="material-icons ev-none" style="margin:unset;font-size: 29px;color;#ccc">expand_less</i>
                                                    </div>
                                                </div>

                                                <!--
                                                <div :id="'collapseOneStatus'+idx" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOneStatus">
                                                    <div class="panel-body">
                                                        <div class="task-info blue" @click="onDetailTaskInfo($event)">
                                                            <div>
                                                                <h2>VP-CEI</h2>
                                                                <p>C03-Check + 12 Years</p>
                                                            </div>
                                                            <span class="ms-badge">6</span>
                                                        </div>
                                                        <div class="task-info blue">
                                                            <div>
                                                                <h2>VP-CEI</h2>
                                                                <p>C03-Check + 12 Years</p>
                                                            </div>
                                                            <span class="ms-badge">4</span></div>
                                                        <div class="task-info orange">
                                                            <p>Take a rest</p>
                                                            <span class="ms-badge">3</span>
                                                        </div>
                                                        <div class="task-info orange">
                                                            <p>Preparing material</p>
                                                            <span class="ms-badge">2</span></div>
                                                        <div class="task-info orange">
                                                            <p>Preparing tools</p>
                                                            <span class="ms-badge">1</span></div>
                                                        <div class="task-info dark">
                                                            <p>Idle</p>
                                                            <span class="ms-badge">2</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                -->


                                                <div :id="'collapseOneStatus'+idx" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOneStatus">
                                                    <div class="panel-body">
                                                        <div class="task-info blue" style="background: rgb(130 221 25 / 65%); color: rgb(0 103 25);" @click="onDetailTaskInfo($event)">
                                                            <p>Onjob</p>
                                                            <span class="ms-badge" style="background: rgb(77, 214, 99); border-color: rgb(255, 255, 255); color: #fff;">{{ a.on_job_status.onjob }}</span>
                                                        </div>
                                                        <div class="task-info orange" style="background: rgb(231, 235, 118); color: #696008;">
                                                             <p>Break</p>
                                                            <span class="ms-badge" style="background: #cabb36; border-color: #ffffff; //: ; font-weight: 600; color: #fff;">{{ a.on_job_status.break }}</span></div>
                                                        <div class="task-info dark" style="background: #3aa7ff; color: #fff;">
                                                            <p>Finish</p>
                                                            <span class="ms-badge" style="background: #2479bf; border-color: #ffffff; color: #fff;">{{ a.on_job_status.finish }}</span>
                                                        </div>
                                                        <div class="task-info dark" style="background: #ff685a; color: rgb(255, 255, 255);">
                                                            <p>Idle</p>
                                                            <span class="ms-badge" style="background: #d33a2a;color:#fff;border-color:#fff;">{{ a.on_job_status.undefined }}</span>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>


                                            <div class="panel panel-info d-none test" style="display:none">
                                                <div class="panel-heading jc-between pointer" data-toggle="collapse" :href="'#collapseOneDetailInformation'+idx" aria-expanded="true" aria-controls="collapseOneDetailInformation" @click="clickable($event.target.children[1])" style="border-radius:10px !important">
                                                    <h3 class="panel-title ev-none">Detail Information</h3>
                                                    <div class="flex ev-none">
                                                        <span class="ms-badge" style="background:inherit;border:none;padding:unset;height:unset;width:unset">15</span>
                                                        <i class="material-icons ev-none" style="margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                                    </div>
                                                </div>

                                                <div :id="'collapseOneDetailInformation'+idx" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOneDetailInformation">
                                                    <div class="panel-body">
                                                        <table class="table" border="1px" style="border-collapse:collapse">
                                                            <tr>
                                                                <th rowspan=10>
                                                                    <div class="td-val">15</div>
                                                                </th>
                                                            </tr>
                                                            <tr>
                                                                <th rowspan=2>
                                                                    I Stamp
                                                                    <div class="th-val">3</div>
                                                                </th>
                                                                <td>AP
                                                                    <div class="td-val">1</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>EA
                                                                    <div class="td-val">1</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th rowspan=2>
                                                                    M Stamp
                                                                    <div class="th-val">2</div>
                                                                </th>
                                                                <td>AP
                                                                    <div class="td-val">6</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>EA
                                                                    <div class="td-val">4</div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th rowspan=2>
                                                                    Others
                                                                    <div class="th-val">2</div>
                                                                </th>
                                                                <td>
                                                                    <div class="td-val">2</div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="panel panel-danger" style="display:none">
                                                <div class="panel-heading jc-between pointer panel-percent" data-toggle="collapse" :href="'#collapseOneComplience'+idx" aria-expanded="true" aria-controls="collapseOneOne" @click="clickable($event.target.children[1])" :style="percentBg(100, 'second-bg')">
                                                    <h3 class="panel-title ev-none" style=""></h3>
                                                    <div class="flex ev-none">
                                                        <span class="ms-badge panel-danger animation" :style="percentBg(100, 'color-bg')">100%</span>
                                                        <i class="material-icons ev-none" style="margin:unset;color:#3e3233;font-size: 29px;color;#ccc;z-index:1">expand_more</i>
                                                    </div>
                                                    <div class="percent-bg animation ev-none" :style="percentBg(100)">Complience</div>
                                                </div>

                                                <div :id="'collapseOneComplience'+idx" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOneComplience">
                                                    <div class="panel-body">
                                                        <div class="comp">
                                                            <div>
                                                                <p>Stamp Valid</p>
                                                                <b>3</b>
                                                            </div>
                                                            <div>
                                                                <p>Stamp Expired</p>
                                                                <b>4</b>
                                                            </div>
                                                            <div>
                                                                <p>Stamp will Expired</p>
                                                                <b>6</b>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-primary">
                                    <div class="panel-heading jc-between pointer">
                                        <h3 class="panel-title">Absent</h3>
                                        <div class="flex ev-none">
                                            <span class="ms-badge" style="background:gray;color:white">{{ a.attendance.Absence.length }}</span>
                                            <i class="material-icons ev-none" style="display:none;margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                        </div>
                                    </div>
                                    <div class="panel-body" style="display:none;"></div>
                                </div>
                                <div class="panel panel-primary">
                                    <div class="panel-heading jc-between pointer">
                                        <h3 class="panel-title">Next shift</h3>
                                        <div class="flex ev-none">
                                            <span class="ms-badge" style="background:#009688;color:white">{{ a.attendance.NextShift.length }}</span>
                                            <i class="material-icons ev-none" style="display:none;margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                        </div>
                                    </div>
                                    <div class="panel-body" style="display:none;"></div>
                                </div>
                                <div class="panel panel-primary">
                                    <div class="panel-heading jc-between pointer">
                                        <h3 class="panel-title">Off</h3>
                                        <div class="flex ev-none">
                                            <span class="ms-badge" style="background:black;color:white">{{ a.attendance.Off.length }}</span>
                                            <i class="material-icons ev-none" style="display:none;margin:unset;font-size: 29px;color;#ccc">expand_more</i>
                                        </div>
                                    </div>
                                    <div class="panel-body" style="display:none;"></div>
                                </div>
                            </div>
                        </div>

                        <div :id="'openModal-about'+idx" class="modalDialog">
                        <div>
                            <div style="display:flex;justify-content: space-between;">
                                <div>
                                    <h3>Detail Manpower {{ a.description }} <span style="font-size:12px">Last Sync at : {{a.syncAt}}</span></h3>
                                </div>
                                <div style="display:flex;align-items:center">
                                    <div class="legend">
                                        <div>
                                            <span class="t o" style="background: rgb(62 201 68) !important;"></span>
                                            <span>Onjob</span>
                                        </div>
                                         <div>
                                            <span class="t b" style="background: #f5a228 !important;"></span>
                                            <span>Break</span>
                                        </div>
                                         <div>
                                            <span class="t f" style="background: #2479bf;"></span>
                                            <span>Finish</span>
                                        </div>
                                        <div>
                                            <span class="t niy" style="background: #f44336;"></span>
                                            <span>Idle</span>
                                        </div>
                                        <div>
                                            <span class="t a" style="background:gray"></span>
                                            <span>Absence</span>
                                        </div>
                                         <div>
                                            <span class="t a" style="background:#009688"></span>
                                            <span>Next Shift</span>
                                        </div>
                                         <div>
                                            <span class="t a" style="background:black"></span>
                                            <span>Off</span>
                                        </div>
                                    </div>
                                    <a href="#close" title="Close" class="close-mdl" @click="onTouchModal(idx,'close')">
                                        <i class="material-icons">close</i>
                                    </a>
                                <div>
                            </div>
                        </div>
                        </div>

                            <hr style="margin: 10px 0;">
                            <DetailMainAvailablity :manpower="a" v-if="modalIsOpen[idx]"/>
                            <div v-else style="display: flex; align-items: center; justify-content: center; height: 65vh;font-size:18px;">
                                Loading...
                            </div>
                        </div>
                        </div>

                    </div>
                </div>


                <div class="is-col is-100 text-center">
                    <paginate :page-count="paginate.total" :container-class="'pagination'" :prev-text="'Prev'" :next-text="'Next'" :click-handler="handlerPaginate">
                    </paginate>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Paginate from "vuejs-paginate";
    import Loading from "vue-loading-overlay";
    import DetailMainAvailablity from './component/DetailMainAvailablity'
    import "vue-loading-overlay/dist/vue-loading.css";
    import gql from 'graphql-tag'
    import moment from 'moment'

    export default {
        data: () => ({
            modalIsOpen: {},
            loading: {
                isLoading: false,
                isLoadingPaginate: false,
                fullPage: false,
                loaderType: "dots",
                color: "#0065ff"
            },
            filter: {
                location: "",
                status: "Progress",
                line: "",
                search: "",
                page: 1,
                perPage: 16
            },
            paginate: {
                last: 0,
                total: 0,
                total_page: 0
            },
            manpowerAvailablities: [],
            personalStatus: [],
            lines: [],
            hangars: [],
            status: []
        }),

        components: {
            Loading,
            paginate: Paginate,
            DetailMainAvailablity,
        },

        mounted() {

            this.initHangar();
            this.initData()
            // this.initStatus();
            // this.initData().then(() => {
            // this.handlerGrid(this.manpowerAvailablities.length);
            // });
        },

        methods: {
            onTouchModal(idx, type) {
                if(type == 'close') {
                    this.modalIsOpen[idx] = !this.modalIsOpen[idx];
                } else {
                    setTimeout(() => {
                        this.modalIsOpen[idx] = !this.modalIsOpen[idx];
                    },1100)
                }
            },


            dateNow(isTrue) {
                if(isTrue) {
                    return moment().subtract(1, 'days').format('YYYY-MM-DD');
                } else {
                    return moment().format('YYYY-MM-DD');
                }
            },

            onDetailTaskInfo(e) {
                console.log(e)
                 $('#exampleModal').modal('show');
            },

            percentBg(val, type = 'main-bg'){

                let bgColor;
                if(type == 'main-bg') {
                    if(val < 50) {
                        bgColor = '#f44336'
                    } else if(val >= 50 && val <70) {
                        bgColor = '#ff5722';
                    } else if(val >= 70 && val <80) {
                        bgColor = '#4caf50'
                    } else if(val >= 80) {
                        bgColor = '#2196f3'
                    }
                } else if(type == 'second-bg') {
                     if(val < 50) {
                        bgColor = '#ffc1bc'
                    } else if(val >= 50 && val <70) {
                        bgColor = '#ffd18e';
                    } else if(val >= 70 && val <80) {
                        bgColor = '#c7e5a4'
                    } else if(val >= 80) {
                        bgColor = 'rgb(32 150 243 / 37%)'
                    }
                } else if(type == 'color-bg') {
                     if(val < 50) {
                        bgColor = '#ad150a'
                    } else if(val >= 50 && val <70) {
                        bgColor = '#bb2d01';
                    } else if(val >= 70 && val <80) {
                        bgColor = '#237227'
                    } else if(val >= 80) {
                        bgColor = '#035595'
                    }
                }
                if(type == 'main-bg') {
                    return {width:`${val}%`, background:bgColor}
                } else  if(type == 'second-bg') {
                    return { background:bgColor}
                } else {
                    return {width:`${val}%`, color:bgColor}
                }

            },

            clickable(elms) {
                let elm;
                console.log(elms)


                if(elms.children.length>1) {
                    elm = elms.children[1]
                } else {
                    elm = elms.children[0]
                }

                elm.innerText === 'expand_more' ? elm.innerText = 'expand_less' : elm.innerText = 'expand_more'
            },

            initData: function() {
                return new Promise(resolve => {
                    this.loading.isLoading = true;
                    this.filter.page = 1;
                    axios
                        .post(
                            "/api/dashboard/manpower-availablity",
                            this.filter
                        )
                        .then(res => {
                            const a = res;
                            for(const [i,v] of res.data.data.entries()) {
                                this.apolloManpowerAvailablities(v,i, this)
                                this.manpowerAvailablities.push(v)
                                
                                this.$set(this.modalIsOpen, i, false);
                            }

                            lll(this.modalIsOpen);
                            this.paginate.total = res.data.last_page;
                            this.paginate.total_page = res.data.total;
                            this.loading.isLoading = false;
                            resolve();
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            resolve();
                        });
                });
            },


            validateDateRange: function(planStart, planEnd) {
                const now = (moment().format('Y-MM-DD'))
                let is = moment().isBetween(moment(`${now} ${planStart}`),moment(`${now} ${planEnd}`))
                return is;
            },

            setColumnDetailManpower: function(idx,rows, vm) {

                for (const [i,v] of rows) {
                    vm.$set(vm.manpowerAvailablities[idx]['user'][i], "on_job_status");
                    vm.$set(vm.manpowerAvailablities[idx]['user'][i], "aggr", );
                    vm.$set(vm.manpowerAvailablities[idx]['user'][i], "job_order",);
                    vm.$set(vm.manpowerAvailablities[idx]['user'][i], "reason");
                }

            },

           apolloManpowerAvailablities: function(row, idx, vm) {

                const subQuery = gql`
                    subscription subGetPersonalStatus(
                    $listOfUnit: [String!]
                    $listOfNopeg: [Int!]
                    $fromTime: timestamptz
                    $toTime: timestamptz
                    ) {
                    personalStatus: xops_personal_status(
                        where: { personal_unit: { _in: $listOfUnit } }
                    ) {
                        personal_name
                        personal_number
                        on_job_status
                        job_order
                        status_history_aggregate(
                        where: {
                            personal_number: { _in: $listOfNopeg }
                            created_at: { _gt: $fromTime, _lt: $toTime }
                            stop_id: { _is_null: false }
                        }
                        ) {
                        aggregate {
                            count
                        }
                        }
                        status_history(
                        where: {
                            created_at: { _gt: $fromTime, _lt: $toTime }
                            stop_id: { _is_null: false }
                        }
                        ) {
                        duration
                        personal_history_stop_reason {
                            category
                            reason
                        }
                        }
                    }
                }
                `

                const observer = this.$apollo.subscribe({
                    query: subQuery,
                    variables: {
                        listOfUnit: row.unit.arr,
                        listOfNopeg: row.nopeg,
                        fromTime: `${this.dateNow(true)}T00:00:00.000+00:00`,
                        toTime: `${this.dateNow()}T00:00:00.000+00:00`,
                    },
                })

                observer.subscribe({
                    next({
                        data
                    }) {

                        const {
                            personalStatus
                        } = data;


                        vm.setColumnDetailManpower(idx, row.user.entries(), vm);
                        
                        let z = [];
                        let personalStatusRejected = [];
                        let fixPersonalStatus = [];

                        if (personalStatus && personalStatus.length) {

                           


                            for(const a of personalStatus) {

                                let job_order = a.job_order ? a.job_order : 'N/A';
                                let aggrFix = a['status_history_aggregate']['aggregate']['count'] ? a['status_history_aggregate']['aggregate']['count'] : 'N/A';

                                for(const [i,b] of row.user.entries()) {

                                    if(b.username == a.personal_number) {

                                        vm.$set(vm.manpowerAvailablities[idx]['user'][i], "on_job_status", a.on_job_status);
                                        vm.$set(vm.manpowerAvailablities[idx]['user'][i], "aggr", aggrFix);
                                        vm.$set(vm.manpowerAvailablities[idx]['user'][i], "job_order", job_order);
                                        vm.$set(vm.manpowerAvailablities[idx]['user'][i], "reason", null);

                                    }
                                }


                                if(row.attendance.Absence.length) {
                                    for(const [i,b] of row.attendance.Absence.entries()) {

                                        if(a.username == b.personnel_number) {
                                            personalStatusRejected = personalStatusRejected.concat([b])
                                        }

                                        if(a.username == b.username) {
                                            personalStatusRejected = personalStatusRejected.concat([b])
                                        }

                                    }
                                }

                                if(row.attendance.NextShift.length) {
                                    for(const [i,b] of row.attendance.NextShift.entries()) {

                                        if(a.username == b.personnel_number) {
                                            personalStatusRejected = personalStatusRejected.concat([b])
                                        }

                                        if(a.username == b.username) {
                                            personalStatusRejected = personalStatusRejected.concat([b])
                                        }
                                    }
                                }


                                if(row.attendance.NextShift.length) {
                                    for(const [i,b] of row.attendance.Off.entries()) {
                                        if(a.username == b.personnel_number) {
                                            personalStatusRejected = personalStatusRejected.concat([b])
                                        }

                                        if(a.username == b.username) {
                                            personalStatusRejected = personalStatusRejected.concat([b])
                                        }
                                    }
                                }

                            }




                            if(personalStatusRejected.length) {
                                



                                const length = Math.round(personalStatusRejected.length / personalStatus.length);
                                
                                for(let i = 0; i < length; i++) {
                                    for(const a of personalStatus) {
                                        fixPersonalStatus.push(a)
                                    }
                                }
                            }
 
 
                            // if(fixPersonalStatus.length && personalStatusRejected.length) {

                                let mama = [];
                                for(const a of personalStatusRejected) {
                                    
                                    for(let i = 0; i < personalStatus.length; i++) {
                                        if(personalStatus[i].personnel_number !== a.personnel_number) {
                                            if(a.hasOwnProperty('dws')) {
                                                
                                                if(a.dws.code !== 'OFF') {
                                                    if(!vm.validateDateRange(a.dws.plan_start, a.dws.plan_end)) {
                                                        // personalStatus.splice(i, 1);
                                                        mama.push(a);
                                                    }
                                                } else {
                                                    // personalStatus.splice(i, 1);
                                                }

                                            } else {
                                                // personalStatus.splice(i, 1);
                                            }
                                        } 
                                    }

                                }
                               
    
                                lll(mama.map(a=>a.personnel_number),'mama');

                            // }


                            // ll(personalStatus,'personalStatus');
                            // const on_job_status = personalStatus.map(i => i.on_job_status);
                            // for (const i of on_job_status) z.push(i)

                            // let groupBy = [...new Set(z)].reduce((a, v) => ({
                            //     ...a,
                            //     [v]: on_job_status.filter(i => i == v).length
                            // }), {})


                            // for (const a in row.on_job_status) row.on_job_status[a] = '-'
                            // for (const a in groupBy) row.on_job_status[a] = groupBy[a]
                            // ll(row.attendance.NextShift.filter(a => a.personnel_number == '580075'));
                            // for (const a in row.on_job_status) row.on_job_status['undefined'] = (row.attendance.Available.length - on_job_status.length)

                        }

                    },
                    error(error) {
                        lll(error,'h')
                    },
                })

            },

            initHangar: function() {
                axios.get("/api/booking_and_submission/show_hangar").then(res => {
                    this.hangars = res.data;
                });
            },

            initStatus: function() {
                axios.get("/api/project_status/get_status").then(res => {
                    this.status = res.data;
                });
            },


            handlerPaginate: function(page) {
                this.runPaginate(page).catch(e => console.error(e, 'error nih'))
            },

            runPaginate: function(page) {
                return new Promise(resolve => {
                    this.loading.isLoadingPaginate = true;
                    this.filter.page = page;

                    axios
                        .post(
                            "/api/dashboard/manpower-availablity",
                            this.filter
                        )
                        .then(res => {
                            this.manpowerAvailablities = res.data.data;
                            this.paginate.total = res.data.last_page;
                            this.paginate.total_page = res.data.total;
                            this.loading.isLoadingPaginate = false;
                            resolve();
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            this.loading.isLoadingPaginate = false;
                            resolve();
                        });
                });
            },


            handlerFilterLine: function() {
                axios
                    .get("/api/management/hangar/" + this.filter.location)
                    .then(res => {
                        this.lines = res.data.line;
                        this.handlerFilter();
                    });
            },

            handlerFilter: function() {
                this.loading.isLoading = true;
                this.filter.page = 1;
                axios
                    .post(
                        "/api/dashboard/manpower-availablity",
                        this.filter
                    )
                    .then(res => {
                        this.manpowerAvailablities = res.data.data;
                        this.paginate.total = res.data.last_page;
                        this.paginate.total_page = res.data.total;
                        this.loading.isLoading = false;
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                    });
            },


            hideModal: function(modal_name) {
                $("#" + modal_name).hide();
            },

        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    .legend{
        display:flex;
        align-items:center;
        margin-right: 40px;
    }
    .legend > div{
        display:flex;
        align-items:center;
        margin:5px;
    }
    .legend .t{
        border-radius: 100px;
    width: 19px;
    height: 19px;
    display: block;
    margin-right: 3px;
    }
    .legend .t.o{

    }
    .legend .t.b{

    }
    .legend .t.f{

    }
    .legend .t.niy{

    }
    .legend .t.a{

    }
    .is-12_5 {
        min-width: calc(12.5% - 20px);
    }
    .panel-percent{
        border-radius:10px !important;position:relative
    }
    .comp {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .comp div * {
        margin: unset;
        padding: unset;
    }

    .comp div:first-child {
        margin: unset;
    }

    .comp div:last-child {
        margin: unset;
    }

    .comp div {
        width: 100%;
        display: flex;
        margin: 10px 0;
        justify-content: space-between;
        align-items: center;
    }

    .panel-title {
        font-size: 14px;
    }

    .th-val {
        display: block;
        margin: 10px;
        font-weight: bold
    }

    .td-val {
        margin: 0 5px;
        font-weight: bold
    }

    .task-info:first-child {
        margin-top: inherit;
    }

    table.table tr th,
    table.table tr td {
        border-color: #cccccc;
        text-align: center;
        font-weight: normal;
    }

    @keyframes setWidth {
    from {opacity:0;width:0%}
    to {opacity:1;width:80%}
    }
    @keyframes setOpacity {
    from {opacity:0;}
    to {opacity:1;}
    }


    .panel-danger .ms-badge.animation{
    animation-name: setOpacity;
    animation-duration: 4s;
    }
    .percent-bg.animation{
    animation-name: setWidth;
    animation-duration: 2s;
    }
    .percent-bg {
        position: absolute;
        top: 0;
        transition:2s ease-in;
        left: 0;
        height: 100%;
        background: red;
        /* opacity: .2; */
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding-left: 15px;
        color: #fff;
    }

    .panel-info h3 {
        font-weight: 400;
    }

    .ms-container *:not(i) {
        font-family: 'Roboto', sans-serif !important;
    }

    .task-info.blue .ms-badge {
        background: #4dd663;
        border-color: #4dd663;
        /*font-weight: 600;*/
        color: #000;
    }
    .ms-badge.panel-danger {
        background:inherit;border:none;padding:unset;height:unset;width:unset;z-index:1;
    }
    .task-info.orange .ms-badge {
        background: #cabb36;
        border-color: #cabb36;
        /*font-weight: 600;*/
        color: #000;
    }

    .task-info.dark .ms-badge {
        background: #9d9c8f;
        border-color: #9d9c8f;
        /*font-weight: 600;*/
        color: #000;
    }

    .task-info h2 {
        font-weight: 500;
        font-size: 16px;
    }

    .task-info p {
        margin: unset;
        font-size:13px;
    }

    .task-info.blue {
        background: #d7e9f1;
        color: #1c3098;
    }

    .task-info.dark {
        background: #e3e3e3;
        color: #000;
    }

    .task-info.orange {
        background: #dbdcb9;
        color: #958812;
    }

    .task-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 8px 0;
        padding: 4px 8px;
        border-radius: 7px;
    }

    .panel-heading>* {
        margin: unset
    }

    .flex {
        display: flex;
    }

    .jc-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .panel-heading+.panel-collapse>.panel-body {
        border-color: #cccccc !important;
    }

    .panel-heading {
        padding: 4px 15px;
    }

    .panel {
        margin-bottom: 9px;
        border-color: #cccccc !important;
        background: #f4f7fa !important;
    }

    .panel-body {
        padding: 6px;
    }

    .panel-primary>.panel-heading {
        background: #f4f7fa !important;
        color: #000000;
        border-color: #cccccc !important;
    }

    .panel-info .panel-body,
    .panel-danger .panel-body {
        background: #fff;
    }

    .panel-info>.panel-heading {
        background: #fff !important;
        color: #333;
        font-weight: 400;
        border-color: #cccccc !important;
    }

    .panel-danger>.panel-heading {
        /* background: #fed4d4 !important; */
        /*color: red;*/
        font-weight: 400;
        border-color: white !important;
    }

    .panel,
    .panel-heading {
        border-radius: 10px;
    }

    .panel-body {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .panel>.panel-heading {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .task-info .ms-badge {
        height: 25px;
        background: #fff;
        border-radius: 100%;
        line-height: normal;
        font-weight: normal;
        width: 25px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ms-badge {
        border: 2.3px solid;
        font-weight: 500;
        background: #fff;
        border-radius: 30px;
        line-height: unset;
        display: flex;
        align-items: center;
        width: 35px;
        height: 25px;
        justify-content: center;
    }
    .ms-card {
        background: white;
        color: black;
        padding: 10px 15px;
        box-shadow: 0px 1px 7px -3px #939393;
        margin-bottom:15px;
    }

    .ms-card-header {
        text-align: right;
        margin-bottom: 12px;
        padding-right: 3px;
    }

    .is-row {
        margin-right: 10px;
    }

    .ev-none {
        pointer-events: none;
    }

    .pointer {
        cursor: pointer;
    }


    * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.modalDialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 100ms ease-in;
    -moz-transition: opacity 100ms ease-in;
    transition: opacity 100ms ease-in;
    pointer-events: none;
}
.modalDialog:target {
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
    z-index: 999999999;
}
.modalDialog > div {
    /*max-width: 800px;*/
    width: 95%;
    position: relative;
    margin: 20px auto;
    padding: 25px;
    border-radius: 3px;
    background: #fff;
}
.close-mdl {
    color: #fff !important;
    /* background: #f26d7d; */
    /* color: #fff; */
    /* line-height: 25px; */
    position: absolute;
    right: 16px;
    /* text-align: center; */
    top: 22px;
    width: 31px;
    height: 31px;
    text-decoration: none;
    font-weight: bold;
    /* border-radius: 50%; */
    /* box-shadow: 1px 1px 3px #000; */
    /* padding-top: 5px; */
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: red;
    border-radius: 500px;
    /* font-size: 8px !important; */
    /* padding: 5px; */
}
.close-mdl:hover {
    background: #fa3f6f;
}

</style>
