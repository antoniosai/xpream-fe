<template>
<div>
    <div class="dashboard" id="dashboard" style="position: fixed; overflow:auto;z-index: 1000044; box-shadow: 100px 100px 100px black; left: 0; top: 0; background: white; height: 100%; top: 0; padding: 30px 69px">

        <!-- <span class="material-icons" style="position: absolute; right: 20px; top: 20px; background: red; color: white; padding: 2px;">close</span> -->

        <div class="is-row" style="margin-top:15px" >
            <div class="is-col is-100">
                <div class="is-row project-info display-flex align-items-center" style="padding-top:7px;padding-bottom:7px;margin-left: 0px;margin:unset !important;">
                    <div class="is-col is-10 main-info"><span class="title-big">A-1315</span> <span class="subtitle-big">00158245</span></div>
                    <div class="P is-col is-90">
                        <div class="is-row m0">
                            <div class="is-col is-20">
                                <div class="_"><span class="title" style="font-size: 12px; color: rgb(119, 152, 184);">Description</span><br <span class="value" style="font-size: 12px;">A-1315 C-130 TNI AU CWB REPLACEMENT</span>
                                </div>
                                <div class="_"><span class="title" style="font-size: 12px; color: rgb(119, 152, 184);">Location</span><br <span class="value" style="font-size: 12px;">Hangar 4 INHAN Line 9</span>
                                </div>
                                <div class="_"><span class="title" style="font-size: 12px; color: rgb(119, 152, 184);">Customer</span><br <span class="value" style="font-size: 12px;">BARANAHAN KEMHAN</span>
                                </div>
                                <div class="_"><span class="title" style="font-size: 12px; color: rgb(119, 152, 184);">Maintenance Day</span><br <span class="value" style="font-size: 12px;">11 of 255</span>
                                </div>
                            </div>
                            <div class="is-col is-20">
                                <div class="card order-type-status display-flex align-items-center">
                                    <div class="chart">
                                        <div class="inner" style="width: 50px;"></div>
                                        <div class="inner-info"><span class="total" style="font-size: 19px;">1 %</span> <span class="text"></span></div>
                                    </div>
                                    <div class="info">
                                        <h3 class="title">Jobcard</h3>
                                        <ul class="detail display-flex">
                                            <li><span class="title" style="font-size: 12px;">Progress</span> <span class="value progress">0</span></li>
                                            <li><span class="title" style="font-size: 12px;">Done</span> <span class="value done">2</span></li>
                                            <li><span class="title" style="font-size: 12px;">Remaining</span> <span class="value remaining">205</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="is-col is-20">
                                <div class="card order-type-status display-flex align-items-center">
                                    <div class="chart">
                                        <div class="inner" style="width: 50px;"></div>
                                        <div class="inner-info"><span class="total" style="font-size: 19px;">0 %</span> <span class="text"></span></div>
                                    </div>
                                    <div class="info">
                                        <h3 class="title">MDR</h3>
                                        <ul class="detail display-flex">
                                            <li><span class="title" style="font-size: 12px;">Progress</span> <span class="value progress">0</span></li>
                                            <li><span class="title" style="font-size: 12px;">Done</span> <span class="value done">0</span></li>
                                            <li><span class="title" style="font-size: 12px;">Remaining</span> <span class="value remaining">0</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="is-col is-20">
                                <div class="card order-type-status display-flex align-items-center">
                                    <div class="chart">
                                        <div class="inner" style="width: 50px;"></div>
                                        <div class="inner-info"><span class="total" style="font-size: 19px;">4.3 %</span> <span class="text"></span></div>
                                    </div>
                                    <div class="info">
                                        <h3 class="title">TAT</h3>
                                        <ul class="detail display-flex">
                                            <li><span class="title" style="font-size: 12px;">Remaining</span> <span class="value remaining">244</span></li>
                                            <li><span class="title" style="font-size: 12px;">Avg Target</span> <span class="value avg target">0.84</span></li>
                                            <li><span class="title" style="font-size: 12px;">TAT</span> <span class="value tat">255</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="is-col is-100" id="dashboard-body" style="margin-top: 35px; max-height: 84vh; overflow: auto;">
                <div style="display:grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap:2rem;" v-if="users.length">
                    <div :class="'status-job '+ item.on_job_status" style="background:white;padding: 15px; display: flex; font-family: 'Be Vietnam Pro', sans-serif;align-items: center; border:3px solid #ddd;padding:10px;display: flex;align-items: center; border-radius: 5px;" v-for="(item, key) of users">
                        <div style="max-width: 79px;min-width: 79px; margin-right: 10px;">
                            <img style="object-fit: cover; object-position: center;border-radius: 100px;" :src="item.avatar">
                        </div>
                        <div style="display:flex;flex-direction:column;max-width: 166px;">
                            <span style="font-weight:700">{{item.username}}</span>
                            <span>{{_splitName(item.name)}}</span>
                            <div style="display: flex; font-size: 11px; justify-content: space-between;margin-bottom: 4px;">
                            <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;">Total {{item.aggr ? item.aggr : 'N/A'}}</span>
                            <span style="font-style: italic; backdrop-filter: brightness(0.8); padding: 2px 3px;">Job Order {{item.job_order ? item.job_order : 'N/A'}}</span>
                            </div>
                            <span v-if="item.reason" style="font-size: 11px; border-top: 1px dotted;">{{item.reason}}</span>
                        </div>
                    </div>
                </div>
                <div v-else style="display: flex; align-items: center; justify-content: center; height: 65vh;">
                    <svg width=70 viewBox="-2 -2 52 52" xmlns="http://www.w3.org/2000/svg" stroke=black class="w-4 h-4 ml-3" style="margin-top: 5px;">
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)" stroke-width="4">
                                <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                                <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(114.132 18 18)">
                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                                </path>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import Paginate from "vuejs-paginate";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import gql from 'graphql-tag'

export default {
    data: () => ({
        users: [],
        personalStatus: []
    }),

    components: {
        Loading,
        paginate: Paginate,
    },

    apollo: {
        $subscribe: {
            tags: {
                query: gql `
                subscription subGetPersonalStatus(
                $listOfUnit: [String!]
                $listOfNopeg: [Int!]
                $fromTime: timestamptz,
                $toTime: timestamptz,
                ) {
                personalStatus: xops_personal_status(
                    where: { personal_unit: { _in: $listOfUnit } }
                ) {
                    personal_name
                    personal_number
                    on_job_status 
                    job_order
                    status_history_aggregate(
                    where: { personal_number: { _in: $listOfNopeg }, created_at: { _gt: $fromTime, _lt: $toTime }, stop_id: { _is_null: false } }
                    ) {
                    aggregate {
                        count
                    }
                    }
                    status_history(
                    where: {
                        created_at: { _gt: $fromTime, _lt: $toTime },
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
                }`,
                variables() {
                    console.log(this.users.map(a => a.unit).flatMap(a => a), 'prikitiwww2 ')
                    return {
                        listOfUnit: this.users.length ? this.users.map(a => a.unit) : [],
                        listOfNopeg: this.users.length ? this.users.map(a => Number(a.username)) : [],
                        fromTime: "2022-01-03T00:00:00.000+00:00",
                        toTime: "2022-01-04T00:00:00.000+00:00",

                    }
                },
                result({
                    data
                }) {
                    ll('apollo data', data)
                    this.personalStatus = data.personalStatus;
                    this.checkJobStatus();
                },
            },
        },
    },

    watch: {
        users: function (n, o) {
            this.checkJobStatus();
        },

        personalStatus: function(n, o) {
            this.checkJobStatus();
        }

    },

    computed: {

    
    },

    mounted() {
        
        this.initUser();


        const time = document.getElementById('dashboard-body').scrollWidth * 3600 / 400;
        

        function scrollDown(el) {
            el.animate({
                scrollTop: el[0].scrollHeight
            }, time, function() {
                scrollUp(el)
            });
        };

        function scrollUp(el) {
            el.animate({
                scrollTop: 0
            }, time + 400, function() {
                scrollDown(el);
            });
        };

        setTimeout(() => {
            scrollDown($("#dashboard #dashboard-body"));
        },time / 1.2)

            

    },

    methods: {
        
        _splitName(val){
            const fullname = val.split(' ');
            const shortName = `${fullname[0]} ${fullname[1]}`
            return shortName;
        },


        checkJobStatus() {
            console.log(this.personalStatus.length, this.users.length);
            
            if (this.personalStatus.length) {
                if(this.users.length) {
                for (const [i, a] of this.users.entries()) {
                    for (const b of this.personalStatus) {
                        if (a.username == b.personal_number) {
                            this.$set(this.users[i], "on_job_status", b['on_job_status']);
                            // this.$set(this.users[i], "reason",  b['status_history'].length > 0 ? b['status_history']['personal_status_stop_reason']['reason'] : null);
                            this.$set(this.users[i], "aggr", b['status_history_aggregate']['aggregate']['count']);
                            this.$set(this.users[i], "job_order", b['job_order']);
                        }
                    }
                }
                }
            }
        },

        async initUser() {
            try{

                this.users = await (await (await axios.get(`/api/management/user/by-unit-id/${this.$route.params.unit_id}`)).data).data
                if(this.users.length) {
                    for(const [i, a] of this.users.entries()){
                        this.$set(this.users[i], "on_job_status", null);
                        this.$set(this.users[i], "reason", null);
                        this.$set(this.users[i], "aggr", null);
                        this.$set(this.users[i], "job_order", null);
                    }
                    
                }

            }catch(e){
                lll(e);
            }

        },

    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.status-job.onjob {
    color: #fff;
    background: #31d138 !important;
}

.status-job.finish {
    color: #fff;
    background: #2196f3 !important;
}

.status-job.break {
    color: #fff;
    background: #ff4242 !important;
}

.justify-between {
    justify-content: space-between;
}

.items-start {
    align-items: flex-start;
}

.flex {
    display: flex;
}

.gap-5 {
    /* gap: 1.25rem
rem
; */
}

.mt-6 {
    margin-top: 1.5rem;
}

.grid {
    display: grid;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

.panel-percent {
    border-radius: 10px !important;
    position: relative
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
    from {
        opacity: 0;
        width: 0%
    }

    to {
        opacity: 1;
        width: 80%
    }
}

@keyframes setOpacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.panel-danger .ms-badge.animation {
    animation-name: setOpacity;
    animation-duration: 4s;
}

.percent-bg.animation {
    animation-name: setWidth;
    animation-duration: 2s;
}

.percent-bg {
    position: absolute;
    top: 0;
    transition: 2s ease-in;
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
    //font-weight: 600;
    color: #000;
}

.ms-badge.panel-danger {
    background: inherit;
    border: none;
    padding: unset;
    height: unset;
    width: unset;
    z-index: 1;
}

.task-info.orange .ms-badge {
    background: #cabb36;
    border-color: #cabb36;
    //font-weight: 600;
    color: #000;
}

.task-info.dark .ms-badge {
    background: #9d9c8f;
    border-color: #9d9c8f;
    //font-weight: 600;
    color: #000;
}

.task-info h2 {
    font-weight: 500;
    font-size: 16px;
}

.task-info p {
    margin: unset;
    font-size: 13px;
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

::v-deep .card {
    background-image: linear-gradient(to bottom, #21314d, #0f1a2d) !important;
    border-radius: 0px;
}

::v-deep .order-type-status .chart {
    background: white;
}

::v-deep .order-type-status .chart .inner-info {
    color: #121f34 !important;
}

::v-deep .order-type-status .detail {
    margin: 5px 0 0 0;
}

::v-deep .chart {
    padding: 0 10px;
}

::v-deep .value {
    text-align: center !important;
}

::v-deep .progress {
    color: #ffc107 !important;
    background-color: unset !important;
    border-radius: unset !important;
    -webkit-box-shadow: unset !important;
    box-shadow: unset !important;
}

::v-deep .done {
    color: #28a745 !important;
}

::v-deep .remaining {
    color: #dc3545 !important;
}

::v-deep .average {
    color: #dc3545 !important;
}

::v-deep .tat {
    color: #17a2b8 !important;
}

::v-deep .small-title {
    font-size: 10pt !important;
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
    border-color: #white !important;
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
    margin-bottom: 15px;
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
</style>
