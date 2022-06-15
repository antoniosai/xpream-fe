<style scoped></style>

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
                    class="tab-link  active"
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
                    class="tab-link"
                    data-tab="gantt-chart"
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
                id="project-charter"
                style="border-radius: 0px 8px 8px 8px;"
            >
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Project Team & Charter</h3>
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
                <div class="card-content">
                    <div
                        style="box-sizing: border-box; position: relative; min-height: 20px;"
                    >
                        <div>
                            <div
                                id="waiting-iframe"
                                style="display: flex; justify-content: center;"
                            ></div>
                            <iframe
                                src=""
                                frameborder="0"
                                id="iframe-docx"
                                class="word"
                                style="transition:0.3s; 1px solid red !important"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        hasAccess: false,
        stats: [],
        acreginfo: "",
        projectinfo: "",
        form: {
            revnr: "",
            desc: "",
            pn_on: "",
            pn_off: "",
            sn_on: "",
            sn_off: "",
            position: "",
            inout: "",
            qty: "",
            date: "",
            remark: "",
            reason: "",
            dn: "",
            tag: "",
            so: "",
            aufnr: "",
            qty: ""
        },

        form_link: {
            id: "",
            link: "",
            column: ""
        },

        grant_access: false,
        cust_access: false
    }),

    components: {},

    mounted() {
        this.onPreviewDoc();
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if (!res) {
                this.$router.push({ name: "access_denied" });
            } else {
                if (
                    !this.$bulkCan(
                        "pc_hangar_tracking_system_view_project_charter",
                        "pc_hangar_tracking_system_edit",
                        "pc_hangar_tracking_system_view"
                    )
                ) {
                    this.$router.push({ name: "access_denied" });
                } else {
                    this.hasAccess = true;
                    this.permissionHandler();
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

                    this.datatable.rows = res.data.data;
                    //this.datatable.totalRows = res.data.total
                    this.loading.isLoading = false;
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                });
        },

        onPreviewDoc: async function() {
            try {
                const json = await (
                    await axios.get(
                        `/api/planning_gate/by/${this.$route.params.pg_id}`
                    )
                ).data;

                const { success, message, data } = json;

                if (!success) {
                    return toastr.warning(message);
                }

                const URL_IFRAME = data.project_file ? `https://docs.google.com/gview?url=https://xpream.gmf-aeroasia.co.id/${data.project_file}&embedded=true` : `https://docs.google.com/gview?url=NotFound.pdf&embedded=true`
                // const URL_IFRAME = `https://docs.google.com/gview?url=${location.origin}${data.project_file}&embedded=true`;

                const iframeDocx = document.getElementById("iframe-docx");
                const waitingIframe = document.getElementById("waiting-iframe");

                iframeDocx.src = "";
                iframeDocx.style.cssText = "height:0px";

                const ___iconLoading = (color = "white") => {
                    return `<svg width="35" viewBox="-2 -2 52 52" xmlns="http://www.w3.org/2000/svg" stroke=${color} class="w-4 h-4 ml-3">
                    <g fill="none" fill-rule="evenodd">
                        <g transform="translate(1 1)" stroke-width="4">
                            <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                            <path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(114.132 18 18)">
                                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                            </path>
                        </g>
                    </g>
                </svg>`;
                };

                waitingIframe.innerHTML = `Loading ${___iconLoading("black")}`;

                /****** Processing Loading Document ****/

                iframeDocx.src = URL_IFRAME; // For Testing; working only https "https://docs.google.com/gview?url=https://xpream.gmf-aeroasia.co.id/project_charter/00128384_GAH3-20_19102020.docx&embedded=true";

                var cntDwn = setInterval(function() {
                    iframeDocx.src = URL_IFRAME;
                    // For Testing; working only https"https://docs.google.com/gview?url=https://xpream.gmf-aeroasia.co.id/project_charter/00128384_GAH3-20_19102020.docx&embedded=true";
                }, 5000);

                iframeDocx.addEventListener("load", () => {
                    console.group();
                    console.warn(URL_IFRAME);
                    console.warn("only work with https!");
                    console.groupEnd();

                    waitingIframe.innerHTML = "";

                    iframeDocx.style.cssText = "height:600px;";
                    clearInterval(cntDwn);
                });
            } catch (e) {
                console.error(e);
                // toastr.error(e);
            }
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
        }
    }
};
</script>
