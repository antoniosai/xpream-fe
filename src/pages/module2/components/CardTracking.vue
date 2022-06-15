<style scoped>
::v-deep .status-handler {
    color: white;
    font-size: 8pt;
    border-radius: 5px;
}

::v-deep .status-handler.success {
    background-color: #13ce66;
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

::v-deep .status-handler.unknown {
    background-color: black;
    padding: 4px !important;
}

::v-deep .status-handler.warning {
    background-color: #ffc107;
    padding: 4px !important;
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
    color: #13ce66;
}

::v-deep .action > i.primary {
    color: #026396;
}

::v-deep .action > i.success:hover {
    background-color: #13ce66;
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

::v-deep .tooltip-x .tooltiptext-x .tooltiptext-sub {
    font-size: 9px !important;
}

::v-deep .tooltip-x:hover .tooltiptext-x {
    visibility: visible !important;
}

.test {
    border: 1px solid red !important;
}
.__add {
    background: #32c42d !important;
    color: #fff;
    border: 1px solid #fff !important;
}
.__warn {
    background: #ffb300 !important;
    color: #fff;
    border: 1px solid #fff !important;
}

.__gant {
    color: #fff;
    background: #03a9f4 !important;
    border: 1px solid #fff !important;
}

.__info {
    background: #1f4cbf !important;
    color: #fff;
    border: 1px solid #fff !important;
}
.word {
    display: block;
    width: 100%;
    height: 0;
    border-radius: 10px;
    transition: 0.5s;
}
#waiting-iframe {
    width: 100%;
    font-size: 16px;
    text-align: center;
}
.__ {
    padding: 12px;
    font-family: monospace;
    background: #9c27b0;
    color: #fff;
    width: 361px;
    display: block;
    z-index: 999;
    position: relative;
    word-break: break-word;
}
</style>

<template>
    <div class="card" :style="handlerStatus($props.data_pg.custom_status)">
        <div class="card-header bb" style="margin-bottom: 10px;">
            <div class="title-area">
                <h3 class="title">
                    <i
                        style="font-size: 13pt; font-weight: bold;"
                        class="material-icons"
                    >
                        flight
                    </i>
                    &nbsp;
                    {{ $props.data_pg.ac_reg }}
                </h3>
            </div>
            <div class="option-box">
                <div class="option-item">
                    {{
                        $props.data_pg.cust_name
                            ? $props.data_pg.cust_name.substring(0, 25)
                            : $props.data_pg.cust_name
                    }}
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="is-row">
                <div class="is-col is-30">
                    <div style="margin-bottom: 1px;">
                        <div style="font-size: 10pt; font-weight: bold;">
                            <a
                                v-bind:href="
                                    '/production_control_hangar/tracking/' +
                                        $props.data_pg.pg_id +
                                        '/hangar/dashboard'
                                "
                                >{{ $props.data_pg.pg_id }}</a
                            >
                        </div>
                    </div>
                    <div>
                        <span
                            class="status-handler success"
                            v-if="$props.data_pg.custom_status === 'Prepared'"
                            >Prepared</span
                        >
                        <span
                            class="status-handler warning"
                            v-else-if="
                                $props.data_pg.custom_status === 'Progress'
                            "
                            >Progress</span
                        >
                        <span
                            class="status-handler primary"
                            v-else-if="
                                $props.data_pg.custom_status === 'Released'
                            "
                            >Released</span
                        >
                        <span
                            class="status-handler danger"
                            v-else-if="
                                $props.data_pg.custom_status === 'Freeze'
                            "
                            >Freeze</span
                        >
                        <span
                            class="status-handler danger"
                            v-else-if="
                                $props.data_pg.custom_status === 'Parking'
                            "
                            >Parking</span
                        >
                        <span class="status-handler unknown" v-else
                            >UNKNOWN</span
                        >
                    </div>
                </div>

                <div class="is-col is-70" style="text-align: right;">
                    <div class="is-100" style="display: flex; align-items: center;justify-content: space-between; ">
                        <span>Project Team & Charter</span>
                        <div style="display:flex;">
                            <div
                                class="action tooltip-x"
                                v-if="!$props.data_pg.project_file"
                                v-on:click="
                                    $router.push({
                                        name: 'module2.project.edit',
                                        params: { pg_id: $props.data_pg.pg_id }
                                    })
                                "
                            >
                                <span class="tooltiptext-x"
                                    >Create Project<br />Team & Charter</span
                                >
                                <i
                                    style="font-size: 13pt; font-weight: bold;"
                                    class="material-icons __add"
                                >
                                    add
                                </i>
                            </div>
                            <div
                                class="action tooltip-x"
                                v-if="$props.data_pg.project_file">
                                <span class="tooltiptext-x"
                                    >Preview Project<br />Team & Charter</span
                                >
                                <i
                                    style="font-size: 13pt; font-weight: bold;"
                                    class="material-icons __info"
                                    v-on:click="
                                        handlerPreviewDoc(
                                            $event,
                                            $props.data_pg.project_file ? `https://docs.google.com/gview?url=https://xpream.gmf-aeroasia.co.id/${$props.data_pg.project_file}&embedded=true` : `https://docs.google.com/gview?url=NotFound.pdf&embedded=true`,
                                            `https://xpream.gmf-aeroasia.co.id/${$props.data_pg.project_file}`
                                        )
                                    "
                                >
                                    file_present
                                </i>
                            </div>

                            <div
                                class="action tooltip-x"
                                v-if="$props.data_pg.project_file"
                            >
                                <span class="tooltiptext-x"
                                    >Edit Project<br />Team & Charter</span
                                >

                                <i
                                    v-on:click="
                                        $router.push({
                                            name: 'module2.project.edit',
                                            params: { pg_id: $props.data_pg.pg_id }
                                        })
                                    "
                                    style="font-size: 13pt; font-weight: bold;"
                                    class="material-icons __warn"
                                >
                                    edit
                                </i>
                            </div>
                        </div>
                    </div>
                    <div class="is-100">
                        <hr style="margin-top:10px" />
                    </div>
                    <div class="is-100">
                        <div class="w100">
                            <div class="flex jend acenter">
                                <div class="action tooltip-x">
                                    <span class="tooltiptext-x"
                                        >Manage Gantt,<br> Daily Menu &,<br> Daily Hand Over</span
                                    >Project Scheduling
                                    <i
                                        v-on:click="
                                            handlerOpenVersion($props.data_pg)
                                        "
                                        class="material-icons __gant"
                                        tabindex="0"
                                        >poll</i
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--select v-on:change="handlerSelectTracking()" style="width: 100%;" :id="'select-tracking-'+$props.idx">
                        <option value="">Select option ...</option>
                        <option value="charter">Project Charter & Team</option>
                        <option value="schedule">Project Scheduling</option>
                    </select-->
                </div>

                <!--div class="is-col is-30" style="text-align: right;">
                    <select v-on:change="handlerSelectTracking()" style="width: 100px;" :id="'select-tracking-'+$props.idx">
                        <option value="">Tracking</option>
                        <option value="dashboard_summary">Dashboard</option>
                        <option value="jobcard">Jobcard</option>
                        <option value="mdr">MDR</option>
                        <option value="mrm">MRM</option>
                        <option value="prm" disabled>PRM</option>
                        <option value="csp">CSP</option>
                        <option value="crm">CRM</option>
                        <option value="highlight">S-Curve</option>
                    </select>                  
                </div-->
            </div>
            <div style="font-size: 9pt; font-weight: normal;">
                <div class="is-row">
                    <div class="is-col is-100"></div>
                </div>
            </div>
        </div>
        <div class="card-header bb" style="margin-top: -30px;"></div>
        <div>
            <div style="font-size: 8pt; font-weight: bold;">
                {{ $props.data_pg.main_type }}
            </div>
        </div>

        <div class="modal-box" id="modal-preview-docx">
            <div class="modal xl" style="margin-right:20px;margin-left:20px">
                <span
                    class="close"
                    v-on:click="handlerClosePreviewDoc()"
                ></span>
                <div class="modal-header">
                    <h2 class="title">
                        Preview Document
                    </h2>
                </div>
                <div class="modal-body" style="position: relative">
                    <div id="waiting-iframe"></div>
                    <iframe
                        src=""
                        frameborder="0"
                        id="iframe-docx"
                        class="word"
                        style="transition:0.3s"
                    ></iframe>
                </div>
                <div class="modal-footer" style="">
                    <a
                        class="button btn-primary cancel"
                        target="_blank"
                        id="download-docx"
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "card-tracking",
    props: {
        data_pg: {
            pg_id: "",
            main_type: "",
            linedesc: "",
            cust_name: "",
            ac_reg: "",
            start_date: "",
            start_date_new: "",
            end_date: "",
            end_date_new: "",
            last_sync: "",
            custom_status: "",
            deadline: ""
        },
        idx: "",
        grant_access_highlight: false,
        grant_access_date: false,
        grant_access_status: false
    },

    data: () => ({
        URL: location.origin
    }),

    components: {},

    mounted() {},

    methods: {
        handlerOpenVersion: function(obj) {
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

            const { pg_id, ac_type, start_date, end_date } = params(obj);

            axios
                .get(
                    `/api/booking_and_submission/get_gantt_last_version/${pg_id}`
                )
                .then(res => {
                    if (res.data.version >= 0) {
                        // this.handlerRedirectVersion(pg_id);
                        this.handlerRedirect(pg_id, res.data.version);
                    } else {
                        this.handlerCreateInitialGantt(
                            pg_id,
                            ac_type,
                            start_date,
                            end_date,
                            "create"
                        );
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Failed get data");
                });
        },

        handlerCreateInitialGantt: function(
            pg_id,
            ac_type,
            start_date,
            end_date,
            status
        ) {
            axios
                .post("/api/booking_and_submission/create_initial_gantt", {
                    pg_id: pg_id,
                    ac_type: ac_type,
                    start_date: start_date,
                    end_date: end_date,
                    maped_ac: this.handlerMapAircraft(ac_type)
                })
                .then(res => {
                    if (res.data.success) {
                        if (status === "create") {
                            this.handlerRedirect(pg_id, res.data.data);
                        } else {
                            this.handlerRedirectVersion(pg_id);
                        }
                    } else {
                        toastr.error("Failed create initial gantt");
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Failed create initial gantt");
                });
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

        handlerRedirectVersion: function(pg_id) {
            const routeData = this.$router.resolve({
                name: "module2.gantt_chart.detail",
                params: {
                    pg_id: pg_id
                }
            });

            window.open(routeData.href, "_blank");
        },
        handlerRedirect: function(pg_id, version) {
            const routeData = this.$router.resolve({
                name: "module2.gantt_chart.gantt_detail",
                params: {
                    pg_id: pg_id,
                    version: version
                }
            });

            window.open(routeData.href, "_blank");
        },

        handlerPreviewDoc: (e, url_iframe, url_download = null) => {
            const iframeDocx = document.getElementById("iframe-docx");
            const waitingIframe = document.getElementById("waiting-iframe");
            const downloadDocx = document.getElementById("download-docx");
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
            downloadDocx.style.cssText =
                "pointer-events:none;background:#ddd;cursor:disabled";

            /****** Processing Loading Document ****/

            iframeDocx.src = url_iframe; // For Testing; working only https "https://docs.google.com/gview?url=https://xpream.gmf-aeroasia.co.id/project_charter/00128384_GAH3-20_19102020.docx&embedded=true";

            var cntDwn = setInterval(function() {
                iframeDocx.src = url_iframe;
                // For Testing; working only https"https://docs.google.com/gview?url=https://xpream.gmf-aeroasia.co.id/project_charter/00128384_GAH3-20_19102020.docx&embedded=true";
            }, 5000);

            iframeDocx.addEventListener("load", () => {
                console.group();
                console.warn(url_iframe, url_download);
                console.warn("only work with https!");
                console.groupEnd();

                waitingIframe.innerHTML = "";
                downloadDocx.href = url_download;
                downloadDocx.style.cssText =
                    "pointer-events:auto;background:#2196f3;color:#fff";
                iframeDocx.style.cssText = "height:560px;";
                clearInterval(cntDwn);
            });

            $("#modal-preview-docx").show();
        },

        handlerClosePreviewDoc() {
            $("#modal-preview-docx").hide();
        },

        handlerDate: function(date1, date2) {
            let result = "";

            let d = "";
            if (date2) {
                d = date2.split("-");
            } else if (date1) {
                d = date1.split("-");
            }

            if (d.length > 0) {
                result = `${d[2]}/${d[1]}/${d[0]}`;
            }

            return result;
        },

        handlerDateSync: function(date) {
            const month_names = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            let result = date;
            if (date !== null) {
                const d = new Date(date);
                let hours =
                    d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
                let minutes =
                    d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                let seconds =
                    d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                result = `${d.getDate()} ${
                    month_names[d.getMonth()]
                } ${d.getFullYear()} ${hours}:${minutes}:${seconds}`;
            }
            return result;
        },

        handlerStatus(status) {
            let result = "border-left: 6px solid ";

            if (status === "Prepared") {
                result = result + "#13CE66";
            } else if (status === "Progress") {
                result = result + "#ffc107";
            } else if (status === "Released") {
                result = result + "#026396";
            } else if (status === "Freeze") {
                result = result + "#dc3545";
            } else if (status === "Parking") {
                result = result + "#dc3545";
            } else {
                result = result + "black";
            }

            return result;
        },

        handlerSynchronize: function() {
            this.$emit("sync", this.$props.data_pg.pg_id);
        },

        handlerSelectTracking: function() {
            let value = document.getElementById(
                `select-tracking-${this.$props.idx}`
            ).value;
            this.$emit("option-change", this.$props.data_pg.pg_id, value);
            document.getElementById(
                `select-tracking-${this.$props.idx}`
            ).value = "";
        },

        handlerModalHighLight: function() {
            this.$emit("modal-highlight", this.$props.idx);
        },

        handlerModalUpdateDate: function() {
            this.$emit("modal-date", this.$props.idx);
        },

        handlerModalUpdateStatus: function() {
            if (!this.$props.grant_access_status) return;
            this.$emit("modal-status", this.$props.idx);
        }
    }
};
</script>
