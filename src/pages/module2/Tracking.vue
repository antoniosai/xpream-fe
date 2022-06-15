<template>
    <div>
        <div>
            <loading
                :active.sync="loading.isLoading"
                :can-cancel="false"
                :is-full-page="true"
                :color="loading.color"
                :loader="loading.loaderType"
            >
            </loading>
        </div>

        <div>
            <loading
                :active.sync="loading.isLoadingPaginate"
                :can-cancel="false"
                :is-full-page="true"
                :color="loading.color"
                :loader="loading.loaderType"
            >
            </loading>
        </div>
        <div
            class="card"
            style="margin-bottom: 15px; top: 0; position: sticky; z-index: 2; width: 100%;"
        >
            <div class="option-box">
                <div class="option-item">
                    <span style="white-space: nowrap">Location</span>
                    <select
                        v-on:change="handlerFilterLine()"
                        v-model="filter.location"
                    >
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
                <div class="option-item">
                    <span style="white-space: nowrap">Status</span>
                    <select
                        id="single-status"
                        v-on:change="handlerFilter()"
                        v-model="filter.status"
                    >
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
                    <input
                        v-on:keyup.enter="handlerFilter()"
                        v-model="filter.search"
                        type="text"
                        placeholder="Type and enter"
                    />
                </div>
                <div class="option-item">
                    Per Page
                    <select
                        v-on:change="handlerFilter()"
                        v-model="filter.perPage"
                        name="per-page"
                        id="per-page"
                    >
                        <option value="12">12</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option
                            v-if="
                                filter.status != '' ||
                                    filter.status != 'Released'
                            "
                            :value="paginate.total_page"
                            >All</option
                        >
                    </select>
                </div>
            </div>
        </div>
        <div class="is-row" id="data-project">
            <div
                v-for="(pg, index) in data_pg"
                :key="index"
                class="is-col is-25"
                style="margin-bottom: 15px;"
            >
                <CardTracking
                    @sync="handlerSynchronize"
                    @option-change="handlerSelectTracking"
                    @modal-date="handlerModalDate"
                    @modal-status="handlerModalStatus"
                    :data_pg="pg"
                    :idx="index"
                    :grant_access_highlight="grantAccessHighlight"
                    :grant_access_date="grantAccessDate"
                    :grant_access_status="grantAccessStatus"
                />
            </div>
        </div>
        <div v-if="!loading.isLoading" class="is-row">
            <div style="text-align: center;" class="is-col is-100">
                <paginate
                    :page-count="paginate.total"
                    :container-class="'pagination'"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :click-handler="handlerPaginate"
                >
                </paginate>
            </div>
        </div>

        <!-- modal Project Highlight -->
        <!--div class="modal-box" id="modal-project-highlight">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-project-highlight')"></span>
                    <div class="modal-header">
                        <h2 class="title"><span id="status-post"></span> Project Highlight #{{form_highlight.pg_id}}</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <div class="form-item">
                            <label for="">Highlight</label>
                            <textarea :disabled="!this.grantAccessHighlight" v-model="form_highlight.highlight" name="project-higihlight" id="project-higihlight" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-project-highlight')">Close</button>
                        <button v-if="this.grantAccessHighlight" class="button is-success" v-on:click="handlerPostHighlight()" type="submit" id="btn-save-highlight">Save</button>

                    </div>
            </div>
        </div-->
        <!-- / modal Project Highlight -->

        <!-- modal change status -->
        <div class="modal-box" id="modal-project-status">
            <div class="modal sm">
                <span
                    class="close"
                    v-on:click="hideModal('modal-project-status')"
                ></span>
                <div class="modal-header">
                    <h2 class="title">
                        <span id="status-post"></span> Project Status #{{
                            form_status.pg_id
                        }}
                    </h2>
                </div>
                <div class="modal-body" style="position: relative">
                    <div class="form-item">
                        <label for="">Status</label>
                        <select
                            v-model="form_status.status"
                            name="project-status"
                            id="project-status"
                        >
                            <option value="">Select Status</option>
                            <option
                                v-for="(stat, index) in status"
                                :key="index"
                                :value="stat.ID"
                                >{{ stat.NAME }}</option
                            >
                        </select>
                    </div>
                </div>
                <div class="modal-footer" style="">
                    <button
                        class="button is-primary is-default cancel"
                        v-on:click="hideModal('modal-project-status')"
                    >
                        Close
                    </button>
                    <button
                        v-if="this.grantAccessStatus"
                        class="button is-success"
                        v-on:click="handlerPostStatus(form_status.index)"
                        type="submit"
                        id="btn-save-status"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
        <!-- /modal change status -->

        <!-- Change Modal -->
        <div class="modal-box" id="docpreview">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('docpreview')"></span>
                <div class="modal-header">
                    <h2 class="title">Project Charter & Team</h2>
                </div>
                <div class="modal-body">
                    <br />
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
        <!-- / Change Date Modal -->
    </div>
</template>

<script>
import CardTracking from "./components/CardTracking";
import Paginate from "vuejs-paginate";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import PGDetails from "../module1/PGDetails";

export default {
    data: () => ({
        docValue: "",
        grantAccessHighlight: false,
        grantAccessDate: false,
        grantAccessStatus: false,
        grantAccessConsolidate: false,
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
            perPage: 12
        },
        paginate: {
            last: 0,
            total: 0,
            total_page: 0
        },
        data_pg: {},
        lines: [],
        hangars: [],
        form_highlight: {
            index: "",
            type: "",
            pg_id: "",
            highlight: ""
        },
        form_date: {
            pg_data: {},
            change_date: {
                pg_id: "",
                start_date_new: "",
                end_date_new: ""
            }
        },
        form_status: {
            index: "",
            pg_id: "",
            status: ""
        },
        status: []
    }),

    components: {
        Loading,
        CardTracking,
        paginate: Paginate,
        PGDetails
    },

    mounted() {
        if (this.$can("pc_hangar_tracking_system_edit_highlight")) {
            this.grantAccessHighlight = true;
        }

        if (this.$can("pc_hangar_tracking_system_edit_date")) {
            this.grantAccessDate = true;
        }

        if (this.$can("pc_hangar_tracking_system_edit_status")) {
            this.grantAccessStatus = true;
        }

        if (this.$can("pc_hangar_tracking_system_consolidate")) {
            this.grantAccessConsolidate = true;
        }

        this.initHangar();
        this.initStatus();
        this.initData().then(() => {
            this.handlerGrid(this.data_pg.length);
        });
    },

    methods: {
        initData: function() {
            return new Promise(resolve => {
                this.loading.isLoading = true;
                this.filter.page = 1;
                axios
                    .post(
                        "/api/booking_and_submission/get_list_tracking",
                        this.filter
                    )
                    .then(res => {
                        this.data_pg = res.data.data;
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

        handlerGrid: function(rows) {
            this.handlerClearCustomGrid().then(() => {
                const template = ` <div class="is-col is-25 custom-card"></div>`;
                let elem = document.getElementById("data-project");
                let result = "";
                let loop = 0;

                if (rows > 0 && rows < 4) {
                    loop = 4 - rows;
                } else {
                    if (rows % 4 > 0) {
                        loop = 4 - (rows % 4);
                    }
                }

                for (let i = 0; i < loop; i++) {
                    result += template;
                }

                elem.insertAdjacentHTML("beforeend", result);
            });
        },

        handlerSynchronize: function(pg_id) {
            swal({
                title: "Synchronize Project",
                text:
                    "Are you sure that you want sync this project? \n This action will take a few minutes.",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(value => {
                if (value) {
                    this.loading.isLoadingPaginate = true;
                    this.handlerSyncJC(pg_id).then(() => {
                        this.handlerSyncJMDR(pg_id).then(() => {
                            this.handlerSyncJMRM(pg_id).then(() => {
                                this.loading.isLoadingPaginate = false;
                                this.handlerPaginate(this.filter.page);
                            });
                        });
                    });
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
        },

        handlerSyncJC: function(revnr) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/production_control_hangar/sync_jobcard/" + revnr)
                    .then(res => {
                        if (res.data.success) {
                            toastr.success("Success sync Jobcard data");
                        } else {
                            toastr.warning(res.data.message);
                        }
                        resolve();
                    });
            });
        },

        handlerSyncJMDR: function(revnr) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/production_control_hangar/sync_mdr/" + revnr)
                    .then(res => {
                        if (res.data.success) {
                            toastr.success("Success sync MDR data");
                        } else {
                            toastr.warning(res.data.message);
                        }
                        resolve();
                    });
            });
        },

        handlerSyncJMRM: function(revnr) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/api/production_control_hangar/sync_mrm/" + revnr)
                    .then(res => {
                        if (res.data.success) {
                            toastr.success("Success sync MRM data");
                        } else {
                            toastr.warning(res.data.message);
                        }
                        resolve();
                    });
            });
        },

        handlerSelectTracking: function(pg_id, value) {
            if (value == "") return;
            let routeData = this.$router.resolve({
                name: `module2.project.edit`,
                params: { pg_id: pg_id }
            });
            /* if(value == "") return;
            let routeData = this.$router.resolve({name: `pc_hangar.tracking.${value}`, params: {pg_id: pg_id}});
            
            if(value === 'dashboard_summary' || value === "highlight") {
                routeData = this.$router.resolve({name: `pc_hangar.tracking.${value}`, params: {pg_id: pg_id, type: 'hangar'}});
            }
            */
            window.open(routeData.href, "_blank");
        },

        handlerPaginate: function(page) {
            this.runPaginate(page).then(() => {
                this.handlerGrid(this.data_pg.length);
            });
        },

        runPaginate: function(page) {
            return new Promise(resolve => {
                this.loading.isLoadingPaginate = true;
                this.filter.page = page;

                axios
                    .post(
                        "/api/production_control_hangar/get_list_tracking",
                        this.filter
                    )
                    .then(res => {
                        this.data_pg = res.data.data;
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

        handlerClearCustomGrid: function() {
            return new Promise(resolve => {
                let elem = document.querySelectorAll(".custom-card");
                elem.forEach((element, index) => {
                    element.remove();
                });
                resolve();
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
                    "/api/production_control_hangar/get_list_tracking",
                    this.filter
                )
                .then(res => {
                    this.data_pg = res.data.data;
                    this.paginate.total = res.data.last_page;
                    this.paginate.total_page = res.data.total;
                    this.loading.isLoading = false;

                    this.handlerGrid(res.data.data.length);
                })
                .catch(e => {
                    console.log("Error: " + e);
                });
        },

        /* handlerModalHighlight: function(index) {
            this.form_highlight.index = index;
            this.form_highlight.pg_id = this.data_pg[index].pg_id;
            this.form_highlight.highlight = this.data_pg[index].project_highlight;

            $("#modal-project-highlight").show();
        }, */

        handlerModalDate: function(index) {
            this.form_date.pg_data = this.data_pg[index];
            this.form_date.change_date = this.data_pg[index];

            $("#change_date_modal").show();
        },

        handlerModalStatus: function(index) {
            const status = this.data_pg[index].custom_status;
            const stat_idx = this.status.findIndex(elm => elm.NAME === status);

            this.form_status.index = index;
            this.form_status.pg_id = this.data_pg[index].pg_id;
            this.form_status.status = this.status[stat_idx].ID;
            $("#modal-project-status").show();
        },

        hideModal: function(modal_name) {
            $("#" + modal_name).hide();
        },

        handlerPostHighlight: function() {
            if (!this.grantAccessHighlight) return;

            this.handleButton("btn-save-highlight", "load").then(() => {
                axios
                    .post("/api/dashboard/post_highlight", {
                        pg_id: this.form_highlight.pg_id,
                        highlight: this.form_highlight.highlight
                    })
                    .then(res => {
                        if (res.data.success) {
                            toastr.success(res.data.message);
                            this.data_pg[
                                this.form_highlight.index
                            ].project_highlight = this.form_highlight.highlight;

                            setTimeout(() => {
                                this.hideModal("modal-project-highlight");
                            }, 500);
                        } else {
                            toastr.error(res.data.message);
                        }

                        this.handleButton("btn-save-highlight", "stop");
                    })
                    .catch(e => {
                        this.handleButton("btn-save-highlight", "stop");
                        toastr.error("Undefined error");
                        console.log(e);
                    });
            });
        },

        handleButton: function(id, status, color = "success") {
            let element = document.getElementById(id);
            return new Promise((resolve, reject) => {
                if (status == "load") {
                    element.className += " is-loading";
                    element.disabled = true;

                    setTimeout(() => {
                        resolve();
                    }, 500);
                } else {
                    element.className = `button is-${color}`;
                    element.disabled = false;
                    resolve();
                }
            });
        },

        changeDateToDefault: function(data) {
            if (!this.grantAccessDate) return;
            swal({
                title: "Are You Sure Want To Change Date Into Default Value",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false
            }).then(value => {
                if (value) {
                    this.handleButton("btn-save-default", "load").then(() => {
                        let params = {
                            pg_id: this.form_date.change_date.pg_id
                        };

                        axios
                            .post(
                                "/api/slot_and_capacity/planning_gate/default_date",
                                params
                            )
                            .then(res => {
                                if (res.data.status == "success") {
                                    toastr.success(
                                        res.data.message,
                                        "Success!"
                                    );

                                    this.form_date.change_date = {
                                        start_date_new: null,
                                        end_date_new: null
                                    };
                                    this.initData().then(() => {
                                        this.handlerGrid(this.data_pg.length);
                                    });

                                    setTimeout(() => {
                                        this.hideModal("change_date_modal");
                                    }, 500);
                                } else {
                                    swal("Ooppss!", res.data.message, "error");
                                }

                                this.handleButton(
                                    "btn-save-default",
                                    "stop",
                                    "primary"
                                );
                            })
                            .catch(() => {
                                this.handleButton(
                                    "btn-save-default",
                                    "stop",
                                    "primary"
                                );
                            });
                    });
                }
            });
        },

        saveDate: function() {
            if (!this.grantAccessDate) return;
            swal({
                title: "Are You Sure Want To Change Date",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(value => {
                if (value) {
                    this.handleButton("btn-save-date", "load").then(() => {
                        let params = {
                            pg_id: this.form_date.change_date.pg_id,
                            start_date_new: this.form_date.change_date
                                .start_date_new,
                            end_date_new: this.form_date.change_date
                                .end_date_new
                        };

                        axios
                            .post(
                                "/api/slot_and_capacity/planning_gate/save_date",
                                params
                            )
                            .then(res => {
                                if (res.data.status == "success") {
                                    toastr.success(
                                        res.data.message,
                                        "Success!"
                                    );
                                    this.form_date.change_date = {
                                        pg_id: "",
                                        start_date_new: "",
                                        end_date_new: ""
                                    };
                                    this.initData().then(() => {
                                        this.handlerGrid(this.data_pg.length);
                                    });

                                    setTimeout(() => {
                                        this.hideModal("change_date_modal");
                                    }, 500);
                                } else {
                                    swal("Ooppss!", res.data.message, "error");
                                }
                                this.handleButton("btn-save-date", "stop");
                            })
                            .catch(() => {
                                this.handleButton("btn-save-date", "stop");
                            });
                    });
                }
            });
        },

        handlerPostStatus: function(index) {
            if (!this.grantAccessStatus) return;
            swal({
                title: "Are You Sure Want To Change Project Status",
                text: "Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(value => {
                if (value) {
                    this.handleButton("btn-save-status", "load").then(() => {
                        axios
                            .post(
                                "/api/production_control_hangar/update_project_status",
                                {
                                    pg_id: this.form_status.pg_id,
                                    status: this.form_status.status
                                }
                            )
                            .then(res => {
                                if (res.data.success) {
                                    toastr.success(res.data.message);
                                    const idx = this.status.findIndex(
                                        elm =>
                                            elm.ID === this.form_status.status
                                    );
                                    this.data_pg[
                                        this.form_status.index
                                    ].custom_status = this.status[idx].NAME;

                                    setTimeout(() => {
                                        this.hideModal("modal-project-status");
                                    }, 500);
                                } else {
                                    toastr.error(res.data.message, "Failed", {
                                        timeOut: 15000
                                    });
                                    setTimeout(() => {
                                        this.hideModal("modal-project-status");
                                    }, 500);
                                    setTimeout(() => {
                                        this.handlerModalDate(index);
                                    }, 500);
                                }
                                this.handleButton("btn-save-status", "stop");
                            })
                            .catch(e => {
                                this.handleButton("btn-save-status", "stop");
                                toastr.error("Failed update project status");
                                console.log(e);
                            });
                    });
                }
            });
        }
    }
};
</script>
