<style scoped>
::v-deep .gantt_task .action > i {
    pointer-events: none !important;
    /* border:1px solid red !important; */
}
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_dashboard',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.dashboard_summary',
                            params: {
                                pg_id: $route.params.pg_id,
                                type: 'hangar'
                            }
                        })
                    "
                    class="tab-link"
                    data-tab="dashboard"
                >
                    Dashboard
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_highlight'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.highlight',
                            params: {
                                pg_id: $route.params.pg_id,
                                type: 'hangar'
                            }
                        })
                    "
                    class="tab-link"
                    data-tab="highlight"
                >
                    Performance
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_jc_mdr',
                            'pc_hangar_tracking_system_edit_jc_mdr',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.jobcard',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="jobcard"
                >
                    Jobcard
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_jc_mdr',
                            'pc_hangar_tracking_system_edit_jc_mdr',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.mdr',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="mdr"
                >
                    MDR
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_mrm',
                            'pc_hangar_tracking_system_edit_mrm',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.mrm',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="mrm"
                >
                    MRM
                </li>
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mcms', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">ZMCMS<span class="status-handler success" style="font-size:11px;margin-left:6px;">beta</span></li> -->
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li> -->
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_csp',
                            'pc_hangar_tracking_system_edit_csp',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.csp',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="csp"
                >
                    CSP
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_crm',
                            'pc_hangar_tracking_system_edit_crm'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.crm',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="crm"
                >
                    CRM
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_project_charter'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.project_charter',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="project-charter"
                >
                    Project Team & Charter
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_gantt_chart'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.gantt_chart',
                            params: { pd_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link active"
                    data-tab="project-charter"
                >
                    Gantt Chart
                </li>

                <li
                    v-if="
                        $bulkCan('pc_hangar_tracking_system_discuss')
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.discuss',
                            params: { pd_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link" 
                    data-tab="discuss"
                >
                    Discuss
                </li>
            </ul>
            <div
                class="card tab-content active"
                id="crm"
                style="border-radius: 0px 8px 8px 8px;"
            >
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Gantt Chart</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                            <h4>
                                {{ projectinfo }}&nbsp;&nbsp;&nbsp;<button
                                    class="button is-secondary is-success"
                                    style="padding:0px 15px;height:30px;"
                                >
                                    {{ acreginfo }}
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>

                <template>
                    <GanttChart
                        v-if="ganttChart.version && ganttChart.pgId"
                        :version="ganttChart.version"
                        :pg_id="ganttChart.pgId"
                    />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
//vue-good
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import Loading from "vue-loading-overlay";
import axios from "axios";
import "vue-loading-overlay/dist/vue-loading.css";
//import FieldCRM from './datatable/FieldCRM';
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import XLSX from "xlsx";

import GanttChart from "./components/GanttChart";

export default {
    data: () => ({
        hasAccess: false,
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: "dots",
            color: "#0065ff"
        },
        acreginfo: "",
        projectinfo: "",
        grant_access: false,
        cust_access: false,
        ganttChart: {
            pgId: null,
            version: null
        }
    }),

    components: {
        Loading,
        VueGoodTable,
        GanttChart,
        multiselect: Multiselect
    },

    mounted() {
        this.initGanttChart();
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            console.log(res)
            if (!res) {
                this.$router.push({ name: "access_denied" });
            } else {
                if (
                    !this.$bulkCan(
                        "pc_hangar_tracking_system_view_crm",
                        "pc_hangar_tracking_system_edit_crm",
                        "pc_hangar_tracking_system_edit",
                        "pc_hangar_tracking_system_view"
                    )
                ) {
                    this.$router.push({ name: "access_denied" });
                } else {
                    this.hasAccess = true;
                    this.permissionHandler();
                    this.initData();
                }
            }
        });
    },

    methods: {
        initData: function() {
            this.loading.isLoading = true;

            axios
                .get(
                    "/api/production_control_hangar/crm/get_newcrm/" +
                        this.$route.params.pg_id
                )
                .then(res => {
                    if (res.data.data.length < 1) {
                        toastr.warning(`Empty data, please run synchronize.`);
                    }

                    // this.datatable.rows = res.data.data
                    //this.datatable.totalRows = res.data.total
                    this.loading.isLoading = false;
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                });
        },

        permissionHandler: function() {
            this.grant_access = false;
            this.cust_access = false;

            this.$isReleased(this.$route.params.pg_id).then(res => {
                if (res) {
                    if (
                        this.$bulkCan(
                            "pc_hangar_tracking_system_edit",
                            "pc_hangar_tracking_system_edit_crm"
                        )
                    ) {
                        this.grant_access = true;
                    }
                    if (this.$can("pc_hangar_tracking_system_customer_edit")) {
                        this.cust_access = true;
                    }

                    axios
                        .get(
                            "/api/management/job_mdr_track/linerev/" +
                                this.$route.params.pg_id
                        )
                        .then(res => {
                            this.acreginfo = res.data.info.ac_reg;
                            this.projectinfo = res.data.info.main_type;
                            if (res.data.info.access == "failed") {
                                this.grant_access = false;
                            }
                        });
                }
            });
        },

        initGanttChart: async function() {
            try {
                this.loading.isLoading = true;
                const jsonPG = await (
                    await axios.get(
                        `/api/planning_gate/by/${this.$route.params.pg_id}`
                    )
                ).data;

                if (!jsonPG.success) {
                    return toastr.warning(jsonPG.message);
                }

                const params = obj => {
                    let objNew = Object.assign(
                        {},
                        {
                            pg_id: obj.pg_id,
                            ac_type: obj.ac_type,
                            start_date: obj.start_date,
                            end_date: obj.end_date
                        }
                    );

                    if (obj.end_date_new) {
                        return Object.assign({}, objNew, {
                            ...objNew,
                            end_date: obj.end_date_new
                        });
                    } else {
                        return objNew;
                    }
                };

                const { pg_id, ac_type, start_date, end_date } = params(
                    jsonPG.data
                );

                const jsonGLV = await (
                    await axios.get(
                        `/api/booking_and_submission/get_gantt_last_version/${pg_id}`
                    )
                ).data;

                const { version } = jsonGLV;

                if (version >= 0) {
                    this.ganttChart = {
                        pgId: pg_id,
                        version: version
                    };
                } else {
                    this.handlerCreateInitialGantt(
                        pg_id,
                        ac_type,
                        start_date,
                        end_date,
                        "create"
                    );
                }

                this.loading.isLoading = false;
            } catch (e) {
                this.loading.isLoading = true;
                console.error(e);
                toastr.error(e);
            }
        },

        handlerMapAircraft: function(ac_type) {
            let mapped_ac = "";
            if (ac_type.indexOf("-") !== -1) {
                let splited_ac = ac_type.split("-");
                if (splited_ac[0].charAt(0) == "3") {
                    mapped_ac = splited_ac[0];
                } else {
                    mapped_ac = splited_ac[0] + "-" + splited_ac[1].charAt(0);
                }
            } else {
                mapped_ac = ac_type;
            }
            return mapped_ac;
        },

        handlerCreateInitialGantt: async function(
            pg_id,
            ac_type,
            start_date,
            end_date,
            status
        ) {
            try {
                const jsonCIG = await (
                    await axios.post(
                        "/api/booking_and_submission/create_initial_gantt",
                        {
                            pg_id: pg_id,
                            ac_type: ac_type,
                            start_date: start_date,
                            end_date: end_date,
                            maped_ac: this.handlerMapAircraft(ac_type)
                        }
                    )
                ).data;

                const { success, message, data } = jsonCIG;
                if (success) {
                    if (status === "create") {
                        this.ganttChart = {
                            pgId: pg_id,
                            version: data.data
                        };
                    }
                } else {
                    toastr.error("Failed create initial gantt");
                }
            } catch (e) {
                console.log("Error: " + e);
                toastr.error("Failed create initial gantt");
            }
        }
    }
};
</script>
