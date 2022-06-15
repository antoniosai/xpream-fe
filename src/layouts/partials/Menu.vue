<template>
    <nav class="main-menu">
        <div class="slimscroll">
            <h3 class="title">Menu</h3>
            <ul class="menu" id="metismenu">
                <li v-if="$can('dashboard')">
                    <router-link
                        :to="{ name: 'dashboard' }"
                        disabled
                        :class="{ active: subIsActive('/dashboard') }"
                    >
                        <i class="material-icons">dashboard</i>
                        <span class="text">Home</span>
                    </router-link>
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_summary_dashboard_view',
                            'pc_hangar_summary_dashboard_edit'
                        )
                    "
                >
                    <router-link
                        :to="{ name: 'pc_hangar.summary_dashboard' }"
                        :class="{
                            active: subIsActive(
                                '/production_control_hangar/summary_dashboard'
                            )
                        }"
                    >
                        <i class="material-icons">pie_chart</i
                        ><span class="text">Executive Summary Dashboard</span>
                    </router-link>
                </li>
                <li
                    v-if="role_count.c_trb != 0"
                    class="has-child"
                    :class="{ active: subIsActive('/trb/*') }"
                >
                    <a href="javascript: void(0);">
                        <span class="notif-icon" style="display:none"></span
                        ><i class="material-icons">question_answer</i
                        ><span class="text">Task Review Board</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <li v-if="$can('trb_taskreview_view')">
                            <router-link
                                :to="{ name: 'trb.task' }"
                                :class="{ active: subIsActive('/trb/task') }"
                                >Task Review<span class="notif-count"
                                    >0</span
                                ></router-link
                            >
                        </li>
                        <!-- <li v-if="$can('trb_taskreview_view')" :class="{'active' : subIsActive('/trb/cogs')}"><router-link :to="{ name: 'trb.cogs' }">COGS</router-link></li> -->
                        <li v-if="$can('trb_planningengineer_view')">
                            <router-link
                                :to="{ name: 'trb.planning_engineer' }"
                                :class="{
                                    active: subIsActive(
                                        '/trb/planning_engineer'
                                    )
                                }"
                                >Planning Engineer</router-link
                            >
                        </li>
                        <!-- <li v-if="$can('trb_taskreview_view')" :class="{'active' : subIsActive('/trb/quotation')}"><router-link :to="{ name: 'trb.quotation' }">Quotation Manager</router-link></li> -->
                        <li v-if="$can('trb_knowledgemanager_view')">
                            <router-link
                                :to="{ name: 'trb.knowledge_manager' }"
                                :class="{
                                    active: subIsActive(
                                        '/trb/knowledge_manager'
                                    )
                                }"
                                >Knowledge Manager</router-link
                            >
                        </li>
                        <li v-if="$can('trb_data_cleansing')">
                            <router-link
                                :to="{ name: 'trb.list_data_cleansing' }"
                                :class="{
                                    active: subIsActive(
                                        '/trb/list_data_cleansing'
                                    )
                                }"
                                >Data Cleansing</router-link
                            >
                        </li>
                    </ul>
                </li>
                <!--li v-if="$bulkCan('pc_hangar_summary_dashboard_view', 'pc_hangar_summary_dashboard_edit')"><router-link :to="{ name: 'pc_hangar.summary_dashboard' }" :class="{'active' : subIsActive('/production_control_hangar/summary_dashboard')}">Summary Dashboard</router-link></li-->

                <li
                    v-if="role_count.d_planning_gate != 0"
                    class="has-child"
                    :class="{ active: subIsActive('/slot_and_capacity') }"
                >
                    <a href="javascript: void(0);">
                        <span class="notif-icon" style="display:none"></span
                        ><i class="material-icons">dns</i
                        ><span class="text">Slot and Capacity</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <li v-if="$can('abmp_report')">
                            <a
                                href="/slot_and_capacity/abmp_report"
                                :class="{
                                    active: subIsActive(
                                        '/slot_and_capacity/abmp_report'
                                    )
                                }"
                                >ABMP Report</a
                            >
                        </li>
                        <li v-if="$can('planning_gate_view')">
                            <router-link
                                :to="{ name: 'module1.planning_gates' }"
                                :class="{
                                    active: subIsActive(
                                        '/slot_and_capacity/planning_gates'
                                    )
                                }"
                                >Planning Gate</router-link
                            >
                        </li>
                        <li v-if="$can('slot_availability')">
                            <router-link
                                :to="{ name: 'module1.aircraft_parking' }"
                                :class="{
                                    active: subIsActive(
                                        '/slot_and_capacity/aircraft_parking'
                                    )
                                }"
                                >Aircraft Parking</router-link
                            >
                        </li>
                        <li v-if="$can('ac_parking')">
                            <router-link
                                :to="{ name: 'module1.slot_availability' }"
                                :class="{
                                    active: subIsActive(
                                        '/slot_and_capacity/slot_availability'
                                    )
                                }"
                                >Slot Availability</router-link
                            >
                        </li>
                    </ul>
                </li>

                <li
                    v-if="role_count.e_production_planning != 0"
                    class="has-child"
                    :class="{ active: subIsActive('/booking_and_submission') }"
                >
                    <a href="javascript: void(0);">
                        <span class="notif-icon" style="display:none"></span
                        ><i class="material-icons">collections_bookmark</i
                        ><span class="text">Production Planning</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level" aria-expanded="false">
                        <!--li v-if="$can('project_team_view')">
                            <router-link
                                :to="{ name: 'module2.project' }"
                                :class="{
                                    active: subIsActive(
                                        '/booking_and_submission/project'
                                    )
                                }"
                                >Project Team & Charter</router-link
                            >
                        </li>
                        <
                        <li v-if="$can('gantt_chart_view')"><router-link :to="{ name: 'module2.gantt_chart' }" :class="{'active' : subIsActive('/booking_and_submission/gantt_chart')}">Gantt Chart & Daily Menu</router-link></li>
                        -->
                        <li v-if="$can('gantt_chart_view')">
                            <router-link
                                :to="{ name: 'module2.tracking' }"
                                :class="{
                                    active: subIsActive(
                                        '/booking_and_submission'
                                    )
                                }"
                                >Planning & Scheduling</router-link
                            >
                        </li>
                        <!--li v-if="$can('gantt_chart_view')">
                            <router-link
                                :to="{ name: 'module2.DailyMenu' }"
                                :class="{
                                    active: subIsActive(
                                        '/booking_and_submission/dailymenu'
                                    )
                                }"
                                >Daily Menu</router-link
                            >
                        </li-->

                        <li v-if="$can('daily_menu_and_manpower_assignment')">
                            <router-link
                                :to="{
                                    name:
                                        'module2.daily_menu_and_manpower_assignment'
                                }"
                                :class="{
                                    active: subIsActive(
                                        '/booking_and_submission/daily_menu_manpowers_assignment'
                                    )
                                }"
                                >Daily Menu & Manpower Assignment</router-link
                            >
                        </li>
                        <li v-if="$can('daily_handover_and_project')">
                            <router-link
                                :to="{
                                    name: 'module2.daily_handover_and_project'
                                }"
                                :class="{
                                    active: subIsActive(
                                        '/booking_and_submission/daily_handover_and_projects'
                                    )
                                }"
                                >Daily Handover & Report</router-link
                            >
                        </li>
                    </ul>
                </li>
                <li
                    v-if="role_count.h_pchangar != 0"
                    class="has-child"
                    :class="{ active: subIsActive('/managements') }"
                >
                    <a href="javascript: void(0);"
                        ><i class="material-icons">home</i
                        ><span class="text">Prod. Control Hangar</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level collapse" aria-expanded="false">
                        <li v-if="$contain('pc_hangar_tracking_system')">
                            <router-link
                                :to="{ name: 'pc_hangar.tracking' }"
                                :class="{
                                    active: subIsActive(
                                        '/production_control_hangar/tracking'
                                    )
                                }"
                                >Tracking System</router-link
                            >
                        </li>
                        <!--li
                            v-if="
                                $bulkCan(
                                    'pc_hangar_summary_dashboard_view',
                                    'pc_hangar_summary_dashboard_edit'
                                )
                            "
                        >
                            <router-link
                                :to="{ name: 'pc_hangar.summary_dashboard' }"
                                :class="{
                                    active: subIsActive(
                                        '/production_control_hangar/summary_dashboard'
                                    )
                                }"
                                >Summary Dashboard</router-link
                            >
                        </li-->
                        <li
                            v-if="
                                $can('pc_hangar_central_flc') ||
                                    $can('pc_hangar_central_flc_view') ||
                                    $can('pc_hangar_central_flc_exp') ||
                                    $can('pc_hangar_central_flc_gah')
                            "
                        >
                            <router-link
                                :to="{ name: 'pc_hangar.centralmrm' }"
                                :class="{
                                    active: subIsActive(
                                        '/production_control_hangar/centralmrm'
                                    )
                                }"
                                >Fleet Logistic Control</router-link
                            >
                        </li>

                        <!--<li v-if="$can('pc_hangar_central_flc' ) || $can('pc_hangar_central_flc_view') || $can('pc_hangar_central_flc_exp')"><router-link :to="{ name: 'pc_hangar.centralmrm' }" :class="{'active' : subIsActive('/production_control_hangar/centralcsp')}">Customer Supplied Parts</router-link></li>-->
                        <li
                            v-if="
                                $can('pc_hangar_temporary_store_view') ||
                                    $can('pc_hangar_temporary_store')
                            "
                        >
                            <router-link
                                :to="{ name: 'pc_hangar.sky_store' }"
                                :class="{
                                    active: subIsActive(
                                        '/production_control_hangar/sky_store'
                                    )
                                }"
                                >Sky Store</router-link
                            >
                        </li>
                    </ul>
                </li>

                <li
                    v-if="role_count.i_pcshop != 0"
                    class="has-child"
                    :class="{ active: subIsActive('/production_control_shop') }"
                >
                    <a href="javascript: void(0);"
                        ><i class="material-icons">shopping_cart</i
                        ><span class="text">Prod. Control Shop</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level collapse" aria-expanded="false">
                        <li v-if="$contain('pc_shop_tracking_system')">
                            <router-link
                                :to="{ name: 'pc_shop.tracking.all.jobcard' }"
                                :class="{
                                    active: subIsActive(
                                        '/production_control_shop/tracking'
                                    )
                                }"
                                >Tracking System</router-link
                            >
                        </li>
                    </ul>
                </li>
                <li
                    v-if="role_count.p_dev != 0"
                    class=" has-child"
                    :class="{ active: subIsActive('/people_development') }"
                >
                    <a href="javascript: void(0);"
                        ><i class="material-icons">developer_board</i
                        ><span class="text">People Development</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level collapse" aria-expanded="false">
                        <li v-if="$can('p_dev_training_monitoring')">
                            <router-link
                                :to="{ name: 'p_dev.training_monitoring' }"
                                :class="{
                                    active: subIsActive(
                                        '/people_development/training_monitoring'
                                    )
                                }"
                                style="padding-right:20px"
                                > Training & License Monitoring
                            </router-link>
                        </li>
                        <li v-if="$can('p_dev_manpower_availablity')">
                            <router-link
                                :to="{ name: 'p_dev.manpower_availablity' }"
                                :class="{
                                    active: subIsActive(
                                        '/people_development/manpower_availablity'
                                    )
                                }"
                                style="padding-right:20px"
                                > Manpower Availability
                            </router-link>
                        </li>
                        <li v-if="$can('p_dev_leaderboard')">
                            <router-link
                                :to="{ name: 'p_dev.leaderboard' }"
                                :class="{
                                    active: subIsActive(
                                        '/people_development/leaderboard'
                                    )
                                }"
                                style="padding-right:20px"
                                > Leaderboard
                            </router-link>
                        </li>
                        <!--li v-if="$can('p_dev_availability_qualification')">
                            <router-link
                                :to="{
                                    name: 'p_dev.availability_qualification'
                                }"
                                :class="{
                                    active: subIsActive(
                                        '/people_development/availability_qualification'
                                    )
                                }"
                                >Availability & Qualification</router-link
                            >
                        </li-->
                        <li v-if="$can('p_dev_toeic')">
                            <router-link
                                :to="{ name: 'p_dev.toeic' }"
                                class="{'active' : subIsActive('/people_development/toeic')}"
                                >TOEIC</router-link
                            >
                        </li>
                    </ul>
                </li>
                <li
                    v-if="
                        $bulkCan('xops')
                    "
                >
                    <router-link
                        :to="{ name: 'xops' }"
                        :class="{
                            active: subIsActive(
                                '/xops'
                            )
                        }"
                    >
                        <i class="material-icons">app_settings_alt</i
                        ><span class="text">XOPS</span>
                    </router-link>
                </li>
                <!--
                <li>
                    <router-link :to="{ name: 'customer_support_and_sales' }" :class="{'active' : subIsActive('/customer_support_and_sales')}">
                        <i class="material-icons">shopping_basket</i><span class="text">Customer Support & Sales</span>
                    </router-link>
                </li>
                
                <li>
                    <router-link :to="{ name: 'post_project_overview' }" disabled :class="{'active' : subIsActive('/post_project_overview')}">
                        <i class="material-icons">rate_review</i><span class="text">Post Project Review</span>
                    </router-link>
                </li> 
                -->
                <li
                    v-if="role_count.f_master_data != 0"
                    class="has-child"
                    :class="{ active: subIsActive('/management') }"
                >
                    <a href="javascript: void(0);"
                        ><i class="material-icons">tab</i
                        ><span class="text">Master Data</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level collapse" aria-expanded="false">
                        <li v-if="$can('users')">
                            <router-link
                                :to="{ name: 'management.user' }"
                                :class="{
                                    active: subIsActive('/master_data/user')
                                }"
                                >User
                            </router-link>
                        </li>
                        <li v-if="$can('roles')">
                            <router-link
                                :to="{ name: 'management.roles' }"
                                :class="{
                                    active: subIsActive('/master_data/roles')
                                }"
                                >Roles
                            </router-link>
                        </li>
                        <li v-if="$can('position')">
                            <router-link
                                :to="{ name: 'management.position' }"
                                :class="{
                                    active: subIsActive('/master_data/position')
                                }"
                                >Position
                            </router-link>
                        </li>
                        <li v-if="$can('project-team')">
                            <router-link
                                :to="{ name: 'management.project_team' }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/project_team'
                                    )
                                }"
                                >Project Team
                            </router-link>
                        </li>
                        <li v-if="$can('project-team')">
                            <router-link
                                :to="{ name: 'management.project_template' }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/project_charter'
                                    )
                                }"
                                >Project Charter
                            </router-link>
                        </li>
                        <li
                            v-if="$can('traininglcu') || $can('trainingcenter')"
                        >
                            <router-link
                                :to="{
                                    name: 'management.trainingqualification'
                                }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/trainingqualification'
                                    )
                                }"
                                >Training & License
                            </router-link>
                        </li>
                        <li v-if="$can('notification')">
                            <router-link
                                :to="{ name: 'management.notification' }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/notification'
                                    )
                                }"
                                >Notification
                            </router-link>
                        </li>
                        <li v-if="$can('hangar-line')">
                            <router-link
                                :to="{ name: 'management.hangar' }"
                                :class="{
                                    active: subIsActive('/master_data/hangar')
                                }"
                                >Hangar & Line
                            </router-link>
                        </li>
                        <li v-if="$can('docduedate')">
                            <router-link
                                :to="{ name: 'management.due_date_documents' }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/due_date_documents'
                                    )
                                }"
                                >Docs. Due Date
                            </router-link>
                        </li>
                        <li v-if="$can('ganttpattern')">
                            <router-link
                                :to="{ name: 'management.gantt_pattern' }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/gantt_pattern'
                                    )
                                }"
                                >Gantt Pattern
                            </router-link>
                        </li>
                        <li v-if="$can('dynamicquery')">
                            <router-link
                                :to="{ name: 'management.dynamic_query' }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/dynamic_query'
                                    )
                                }"
                                >Dynamic Query
                            </router-link>
                        </li>
                        <li v-if="$can('workcenter')">
                            <router-link
                                :to="{ name: 'management.workcenter' }"
                                :class="{
                                    active: subIsActive(
                                        '/master_data/workcenter'
                                    )
                                }"
                                >Workcenter
                            </router-link>
                        </li>
                        <li v-if="$can('customer')">
                            <router-link
                                :to="{ name: 'management.customer' }"
                                :class="{
                                    active: subIsActive('/master_data/customer')
                                }"
                                >Customer
                            </router-link>
                        </li>
                        <li v-if="$can('callus')">
                            <router-link
                                :to="{ name: 'management.call_us' }"
                                :class="{
                                    active: subIsActive('/master_data/call_us')
                                }"
                                >Employee
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li v-if="role_count.g_misc != 0" class=" has-child">
                    <a href="javascript: void(0);"
                        ><i class="material-icons">reply</i
                        ><span class="text">Miscellaneous</span
                        ><span class="icon-expand"></span
                    ></a>
                    <ul class="nav-second-level collapse" aria-expanded="false">
                        <li v-if="$can('profile')">
                            <router-link
                                :to="{ name: 'misc.profile' }"
                                :class="{
                                    active: subIsActive('/misc/profile')
                                }"
                                >Profile
                            </router-link>
                        </li>
                        <li v-if="$can('log_activity')">
                            <router-link
                                :to="{ name: 'misc.log' }"
                                :class="{
                                    active: subIsActive('/misc/activity_logs')
                                }"
                                >Activity Log</router-link
                            >
                        </li>
                        <li v-if="$can('synchronize')">
                            <router-link
                                :to="{ name: 'misc.sync' }"
                                :class="{
                                    active: subIsActive('/misc/syncronize')
                                }"
                                >Syncronize</router-link
                            >
                        </li>
                        <li v-if="$can('sync-zmcms')">
                            <router-link
                                :to="{ name: 'sync.zmcms' }"
                                :class="{
                                    active: subIsActive('/misc/sync-zmcms')
                                }"
                                >Syncronize ZMCMS Log</router-link
                            >
                        </li>
                        <li v-if="$can('help_and_support')">
                            <router-link
                                :to="{ name: 'misc.help' }"
                                :class="{ active: subIsActive('/misc/help') }"
                                >Help & Support</router-link
                            >
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import swal from "sweetalert";

export default {
    computed: {
        role_count: function() {
            // `this` points to the vm instance
            let user = JSON.parse(localStorage.user);

            return user.role_count;
        }
    },

    mounted() {},

    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input];
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0; // current path starts with this path string
            });
        },

        logout: function() {
            swal({
                title: "You Are Going to Logout",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(value => {
                if (value) {
                    this.$store.dispatch("logout").then(() => {
                        this.$router.push("/login");
                        toastr.success("Successfully logged out");
                    });
                } else {
                    toastr.info("Canceled");
                }
            });
        }
    }
};
</script>

<style>
#metismenu {
    font-size: 11px;
}
</style>
