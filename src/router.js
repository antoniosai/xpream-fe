import Vue from 'vue'
import Router from 'vue-router'

import store from './store'

import decode from 'jwt-decode'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "*",
            component: () => import('./pages/error/404.vue')
        },
        {
            path: '/access_denied',
            name: 'access_denied',
            component: () => import('./pages/error/PermissionDenied.vue'),
            meta: {}
        },
        {
            path: '/page_not_found',
            name: 'page_not_found',
            component: () => import('./pages/error/404.vue'),
            meta: {}
        },
        {
            path: "/",
            redirect: '/dashboard',
            meta: {
                requiresAuth: true
            },
        },
        // {
        //     path: "/",
        //     redirect: '/slot_and_capacity/abmp_report',
        //     name: 'abmp_report',
        //     meta: {
        //         requiresAuth: true
        //     },
        // },
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/Login.vue'),
            meta: {
                // requiresAuth: true,
                title: "XPREAM Login",
                // sub_title: 'Menampilkan Data pada tanggal '
            }
        },
        /*{
            path: '/sky_store',
            name: 'sky_store',
            component: () => import('./pages/ProductionControlHangar/TemporaryStoreDashboard'),
            meta: {
                title: "Temporary Store Dashboard",
            }
        },  */
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./pages/dashboard/Dashboard.vue'),
            meta: {
                requiresAuth: true,
                title: "Dashboard"
            }
        },
        {
            path: '/slot_and_capacity/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: 'abmp_report',
                    name: 'module1.abmp_report',
                    component: () => import('./pages/module1/ABMPGantt'),
                    meta: {
                        title: "ABMP Report",
                    }
                },
                {
                    path: 'planning_gates',
                    name: 'module1.planning_gates',
                    component: () => import('./pages/module1/PlanningGates'),
                    meta: {
                        title: "Planning Gate",
                    }
                },
                {
                    path: 'planning_gates/timeline/:pg_id',
                    name: 'module1.planning_gates.timeline',
                    component: () => import('./pages/module1/PGTimeline'),
                    meta: {
                        title: "Planning Gate Timeline",
                    }
                },
                {
                    path: 'aircraft_data/:pg_id',
                    name: 'module1.aircraft_data',
                    component: () => import('./pages/module1/AircraftData'),
                    meta: {
                        title: "Aircraft Data",
                    }
                },
                {
                    path: 'aircraft_parking',
                    name: 'module1.aircraft_parking',
                    component: () => import('./pages/module1/ACParking'),
                    meta: {
                        title: "AirCraft Parking",
                    }
                },
                {
                    path: 'slot_availability',
                    name: 'module1.slot_availability',
                    component: () => import('./pages/module1/SlotAvailability'),
                    meta: {
                        title: "Slot Availability",
                    }
                },
            ]
        },
        {
            path: '/booking_and_submission/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: 'project',
                    name: 'module2.project',
                    component: () => import('./pages/module2/Project/Index'),
                    meta: {
                        title: "Project Team & Charter",
                    }
                },
                {
                    path: 'project_team/:pg_id',
                    name: 'module2.project.edit',
                    component: () => import('./pages/module2/Project/TeamEdit'),
                    meta: {
                        title: 'Edit Project Team'
                    }
                },
                {
                    path: 'project_charter/:pg_id',
                    name: 'module2.project.master',
                    component: () => import('./pages/module2/Project/MasterInput'),
                    meta: {
                        title: 'Edit Project Team'
                    }
                },
                {
                    path: 'daily_menu_and_manpower_assignment',
                    name: 'module2.daily_menu_and_manpower_assignment',
                    component: () => import('./pages/module2/DailyMenu'),
                    meta: {
                        title: "Daily Menu & Manpower Assignment",
                    }
                },
                {
                    path: 'daily_handover_and_project',
                    name: 'module2.daily_handover_and_project',
                    component: () => import('./pages/module2/DailyHandover'),
                    meta: {
                        title: "Daily Handover & Report",
                    }
                },
                {
                    path: 'gantt_chart',
                    name: 'module2.gantt_chart',
                    component: () => import('./pages/module2/GanttChart'),
                    meta: {
                        title: "Gantt Chart",
                    }
                },
                {
                    path: 'tracking',
                    name: 'module2.tracking',
                    component: () => import('./pages/module2/Tracking'),
                    meta: {
                        title: "Planning & Schedulling",
                    }
                },
                {
                    path: 'dailymenu',
                    name: 'module2.DailyMenu',
                    component: () => import('./pages/module2/DailyMenuLanding'),
                    meta: {
                        title: "Daily Menu",
                    }
                },
                {
                    path: 'gantt_chart/:pg_id',
                    name: 'module2.gantt_chart.detail',
                    component: () => import('./pages/module2/Gantt/Index'),
                    meta: {
                        title: 'Gantt Chart'
                    }
                },
                {
                    path: 'gantt_chart/:pg_id/:version',
                    name: 'module2.gantt_chart.gantt_detail',
                    component: () => import('./pages/module2/Gantt/GanttChart'),
                    meta: {
                        title: 'Gantt Chart'
                    }
                },
                {
                    path: 'gantt_chart_filter/:pg_id/:version',
                    name: 'module2.gantt_chart.gantt_detail_filter',
                    component: () => import('./pages/module2/Gantt/GanttChartFilter'),
                    meta: {
                        title: 'Gantt Chart'
                    }
                },
                {
                    path: 'gantt_chart/gantt/create/:pg_id',
                    name: 'module2.gantt_chart.create',
                    component: () => import('./pages/module2/Gantt/CreateGantt'),
                    meta: {
                        title: 'Gantt Chart'
                    }
                },
                {
                    path: 'gantt_chart/gantt/edit/:pg_id/:version',
                    name: 'module2.gantt_chart.edit',
                    component: () => import('./pages/module2/Gantt/EditGantt'),
                    meta: {
                        title: 'Gantt Chart    '
                    }
                },
            ]
        },
        {
            path: '/trb/',
            component: () => import('./pages/Blank'),
            meta: {
                // layout: 'imte-layout-dashboard'
                requiresAuth: true,
            },
            children: [{
                    path: 'task',
                    name: 'trb.task',
                    component: () => import('./pages/trb/Task'),
                    meta: {
                        title: "Task",
                    }
                },
                {
                    path: 'cogs',
                    name: 'trb.cogs',
                    component: () => import('./pages/trb/COGS'),
                    meta: {
                        title: "COGS",
                    }
                },
                {
                    path: 'planning_engineer',
                    name: 'trb.planning_engineer',
                    component: () => import('./pages/trb/PlanningEngineer'),
                    meta: {
                        title: "Planning Engineer",
                    }
                },
                {
                    path: 'quotation',
                    name: 'trb.quotation',
                    component: () => import('./pages/trb/Quotation'),
                    meta: {
                        title: "Quotation Manager",
                    }
                },
                {
                    path: 'detail_quotation/:quotation_number/:revision',
                    name: 'trb.detail_quotation',
                    component: () => import('./pages/trb/pages/DetailQuotation'),
                    meta: {
                        title: "Quotation Detail",
                    }
                },
                {
                    path: 'knowledge_manager',
                    name: 'trb.knowledge_manager',
                    component: () => import('./pages/trb/KnowlendeManager'),
                    meta: {
                        title: "Knowledge Manager",
                    }
                },
                {
                    path: 'list_data_cleansing',
                    name: 'trb.list_data_cleansing',
                    component: () => import('./pages/trb/DataCleansing/DataCleansingLanding'),
                    meta: {
                        title: "Data Cleansing",
                    }
                },
                {
                    path: 'data_cleansing/:draft_name',
                    name: 'trb.data_cleansing',
                    component: () => import('./pages/trb/DataCleansing/DataCleansing'),
                    meta: {
                        title: "Data Cleansing",
                    }
                },
            ]
        },
        {
            path: '/master_data/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: 'user',
                    name: 'management.user',
                    component: () => import('./pages/management/User'),
                    meta: {
                        title: "User Management",
                    }
                },
                {
                    path: 'position',
                    name: 'management.position',
                    component: () => import('./pages/management/Position'),
                    meta: {
                        title: "Position",
                    }
                },
                {
                    path: 'project_charter',
                    name: 'management.project_template',
                    component: () => import('./pages/management/ProjectCharter'),
                    meta: {
                        title: "Project Charter Template",
                    }
                },
                {
                    path: 'notification',
                    name: 'management.notification',
                    component: () => import('./pages/management/Notification'),
                    meta: {
                        title: "Notification",
                    }
                },
                {
                    path: 'customer',
                    name: 'management.customer',
                    component: () => import('./pages/management/Customer'),
                    meta: {
                        title: "Customer Management",
                    }
                },
                {
                    path: 'role',
                    name: 'management.roles',
                    component: () => import('./pages/management/Role'),
                    meta: {
                        title: "Role Management",
                    }
                },
                {
                    path: 'project_team',
                    name: 'management.project_team',
                    component: () => import('./pages/management/ProjectTeam/Index'),
                    meta: {
                        title: "Project Team Template Management",
                    }
                },
                {
                    path: 'hangar',
                    name: 'management.hangar',
                    component: () => import('./pages/management/Hangar'),
                    meta: {
                        title: "Hangar & Line Management",
                    }
                },
                {
                    path: 'due_date_documents',
                    name: 'management.due_date_documents',
                    component: () => import('./pages/management/DueDateDoc'),
                    meta: {
                        title: "Due Date Documents",
                    }
                },
                {
                    path: 'gantt_pattern',
                    name: 'management.gantt_pattern',
                    component: () => import('./pages/management/GanttPattern'),
                    meta: {
                        title: "Gantt Pattern",
                    }
                },
                {
                    path: 'dynamic_query',
                    name: 'management.dynamic_query',
                    component: () => import('./pages/management/DynamicQuery'),
                    meta: {
                        title: "Dynamic Query",
                    }
                },
                {
                    path: 'workcenter',
                    name: 'management.workcenter',
                    component: () => import('./pages/management/Workcenter'),
                    meta: {
                        title: "Workcenter",
                    }
                },
                {
                    path: 'call_us',
                    name: 'management.call_us',
                    component: () => import('./pages/management/CallUs'),
                    meta: {
                        title: "Employee",
                    }
                },
                {
                    path: 'trainingqualification',
                    name: 'management.trainingqualification',
                    component: () => import('./pages/management/Trainingqualification'),
                    meta: {
                        title: "Training & Qualification",
                    }
                },
            ]
        },
        {
            path: '/production_control_hangar/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: 'summary_dashboard',
                    name: 'pc_hangar.summary_dashboard',
                    component: () => import('./pages/ProductionControlHangar/DashboardForManagement'),
                    meta: {
                        title: "Summary Dashboard",
                    }
                },
                {
                    path: 'dashboard_detail',
                    name: 'pc_hangar.dashboard_detail',
                    component: () => import('./pages/error/UnderDevelopment'),
                    meta: {
                        title: "Dashboard Detail",
                    }
                },
                {
                    path: 'mrn_trm_monitoring',
                    name: 'pc_hangar.mrn_trm_monitoring',
                    component: () => import('./pages/error/UnderDevelopment'),
                    meta: {
                        title: "MRM & TRM Monitoring",
                    }
                },
                {
                    path: 'tracking',
                    name: 'pc_hangar.tracking',
                    component: () => import('./pages/ProductionControlHangar/Tracking'),
                    meta: {
                        title: "Tracking System",
                    }
                },
                {
                    path: 'centralmrm',
                    name: 'pc_hangar.centralmrm',
                    component: () => import('./pages/ProductionControlHangar/CentralMRM'),
                    meta: {
                        title: "FLC",
                    }
                },
                {
                    path: 'gadcdashboard',
                    name: 'pc_hangar.gadcdashboard',
                    component: () => import('./pages/ProductionControlHangar/DashboardGADC'),
                    meta: {
                        title: "Tracking System",
                    }
                },
                {
                    path: 'centralcsp',
                    name: 'pc_hangar.centralcsp',
                    component: () => import('./pages/ProductionControlHangar/CentralCSP'),
                    meta: {
                        title: "Tracking System",
                    }
                },
                {
                    path: 'tracking/:pg_id/:type/dashboard',
                    name: 'pc_hangar.tracking.dashboard_summary',
                    component: () => import('./pages/ProductionControlHangar/Project/DashboardSummary'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/:type/highlight',
                    name: 'pc_hangar.tracking.highlight',
                    component: () => import('./pages/ProductionControlHangar/Project/Highlight'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/jobcard',
                    name: 'pc_hangar.tracking.jobcard',
                    component: () => import('./pages/ProductionControlHangar/Project/JobTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/mdr',
                    name: 'pc_hangar.tracking.mdr',
                    component: () => import('./pages/ProductionControlHangar/Project/MDRTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/csp',
                    name: 'pc_hangar.tracking.csp',
                    component: () => import('./pages/ProductionControlHangar/Project/CSPTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/prm',
                    name: 'pc_hangar.tracking.prm',
                    component: () => import('./pages/ProductionControlHangar/Project/PRMTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/mrm',
                    name: 'pc_hangar.tracking.mrm',
                    component: () => import('./pages/ProductionControlHangar/Project/MRMTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/mcms',
                    name: 'pc_hangar.tracking.mcms',
                    component: () => import('./pages/ProductionControlHangar/Project/MCMSTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/crm',
                    name: 'pc_hangar.tracking.crm',
                    component: () => import('./pages/ProductionControlHangar/Project/CRMTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/project_charter',
                    name: 'pc_hangar.tracking.project_charter',
                    component: () => import('./pages/ProductionControlHangar/Project/ProjectCharterTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/gantt_chart',
                    name: 'pc_hangar.tracking.gantt_chart',
                    component: () => import('./pages/ProductionControlHangar/Project/GanttChartTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/discuss',
                    name: 'pc_hangar.tracking.discuss',
                    component: () => import('./pages/ProductionControlHangar/Project/DiscussTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'part_monitoring',
                    name: 'pc_hangar.part_monitoring',
                    component: () => import('./pages/error/UnderDevelopment'),
                    meta: {
                        title: "Part Monitoring",
                    }
                },
                {
                    path: 'component_monitoring',
                    name: 'pc_hangar.component_monitoring',
                    component: () => import('./pages/error/UnderDevelopment'),
                    meta: {
                        title: "Component Monitoring",
                    }
                },
                {
                    path: 'sky_store',
                    name: 'pc_hangar.sky_store',
                    component: () => import('./pages/ProductionControlHangar/TemporaryStore'),
                    meta: {
                        title: "Sky Store",
                    }
                },
                {
                    path: 'chemical_store',
                    name: 'pc_hangar.chemical_store',
                    component: () => import('./pages/ProductionControlHangar/ChemicalStore'),
                    meta: {
                        title: "Chemical Store",
                    }
                },
                {
                    path: 'sky_store_dahsboard',
                    name: 'pc_hangar.sky_store_dashboard',
                    component: () => import('./pages/ProductionControlHangar/TemporaryStoreDashboard'),
                    meta: {
                        title: "Sky Store Dashboard",
                    }
                },
            ]
        },
        {
            path: '/production_control_shop/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: 'tracking',
                    name: 'pc_shop.tracking',
                    component: () => import('./pages/ProductionControlShop/Tracking'),
                    meta: {
                        title: "Tracking System",
                    }
                },

                {
                    path: 'tracking/jobcard',
                    name: 'pc_shop.tracking.all.jobcard',
                    component: () => import('./pages/ProductionControlShop/Project/JobTrackingAll'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/mdr',
                    name: 'pc_shop.tracking.all.mdr',
                    component: () => import('./pages/ProductionControlShop/Project/MDRTrackingAll'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/mrm',
                    name: 'pc_shop.tracking.all.mrm',
                    component: () => import('./pages/ProductionControlShop/Project/MRMTrackingAll'),
                    meta: {
                        title: 'Tracking'
                    }
                },

                {
                    path: 'tracking/:pg_id/jobcard',
                    name: 'pc_shop.tracking.jobcard',
                    component: () => import('./pages/ProductionControlShop/Project/JobTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/mdr',
                    name: 'pc_shop.tracking.mdr',
                    component: () => import('./pages/ProductionControlShop/Project/MDRTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
                {
                    path: 'tracking/:pg_id/mrm',
                    name: 'pc_shop.tracking.mrm',
                    component: () => import('./pages/ProductionControlShop/Project/MRMTracking'),
                    meta: {
                        title: 'Tracking'
                    }
                },
            ]
        },
        {
            path: '/project_performance/',
            name: 'project_performance',
            component: () => import('./pages/ProjectPerformance/PerformanceControl'),
            meta: {
                title: "Project Performance",
            },
        },
        {
            path: '/customer_support_and_sales/',
            name: 'customer_support_and_sales',
            component: () => import('./pages/error/UnderDevelopment'),
            meta: {
                title: "Customer Support and Sales",
            },
        },
        {
            path: '/post_project_overview/',
            name: 'post_project_overview',
            component: () => import('./pages/error/UnderDevelopment'),
            meta: {
                // customer_support_and_sales
                title: "Post Project Overview",
            },
        },
        {
            path: '/misc/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: 'profile',
                    name: 'misc.profile',
                    component: () => import('./pages/misc/Profile'),
                    meta: {
                        title: "Profile",
                    }
                },
                {
                    path: 'activity_logs',
                    name: 'misc.log',
                    component: () => import('./pages/misc/logs/ActivityLog'),
                    meta: {
                        title: "Log",
                    }
                },
                {
                    path: 'tracking_logs',
                    name: 'misc.tracking_log',
                    component: () => import('./pages/misc/logs/TrackingLog'),
                    meta: {
                        title: "Log",
                    }
                },
                {
                    path: 'syncronize',
                    name: 'misc.sync',
                    component: () => import('./pages/misc/Sync'),
                    meta: {
                        title: "Syncronize",
                    }
                },
                {
                    path: 'sync-zmcms',
                    name: 'sync.zmcms',
                    component: () => import('./pages/misc/SyncZMCMS'),
                    meta: {
                        title: "Sync ZMCMS",
                    }
                },
                {
                    path: 'help',
                    name: 'misc.help',
                    component: () => import('./pages/error/UnderDevelopment'),
                    meta: {
                        title: "Help & Support",
                    }
                },
            ]
        },
        {
            path: '/people_development/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                    path: 'training_monitoring',
                    name: 'p_dev.training_monitoring',
                    component: () => import('./pages/PeopleDevelopment/TrainingMonitoring'),
                    meta: {
                        title: "Training & License Monitoring",
                    }
                },
                {
                    path: 'manpower_availablity',
                    name: 'p_dev.manpower_availablity',
                    component: () => import('./pages/PeopleDevelopment/ManpowerAvailablity'),
                    meta: {
                        title: "Manpower Availability",
                    }
                },
                {
                    path: 'leaderboard',
                    name: 'p_dev.leaderboard',
                    component: () => import('./pages/PeopleDevelopment/Leaderboard'),
                    meta: {
                        title: "Leaderboard",
                    }
                },
                {
                    path: 'manpower_availablity_perline/:unit_id',
                    name: 'p_dev.manpower_availablity_perline',
                    component: () => import('./pages/PeopleDevelopment/ManpowerAvailablityPerLine'),
                    meta: {
                        title: "Manpower Availablity : Hangar 4 INHAN Line 9",
                    }
                },
                {
                    path: 'availability_qualification',
                    name: 'p_dev.availability_qualification',
                    component: () => import('./pages/PeopleDevelopment/AvailabilityQualification'),
                    meta: {
                        title: "Availability and Qualification",
                    }
                },
                {
                    path: 'toeic',
                    name: 'p_dev.toeic',
                    component: () => import('./pages/PeopleDevelopment/Toeic'),
                    meta: {
                        title: "TOEIC",
                    }
                },
            ]
        },
        {
            path: '/profit/',
            component: () => import('./pages/Blank'),
            meta: {
                requiresAuth: true,
            },
            children: [{
                path: 'form_profitabilitas/:sales_id',
                name: 'profit.form_profitabilitas',
                component: () => import('./pages/Profitabilitas/FormProfitabilitas'),
                meta: {
                    title: "Form Profitabilitas",
                }
            }, ]
        },
        {
            path: '/xops',
            name: 'xops',
            component: () => import('./pages/xops/index'),
            meta: {
                requiresAuth: true,
                title: "XOPS"
            }
        },

    ]
})

var vm = this;

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {

            function errorResponseHandler(error) {
                // check for errorHandle config
                if (error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false) {
                    return Promise.reject(error);
                }

                // if has response show the error
                if (error.response) {
                    if (error.response.data.message == 'Unauthenticated.') {
                        store.dispatch('logout')
                            .then(() => {
                                window.location.href = "/login"
                            })
                    }
                    if (error.response.data.message == 'This action is unauthorized.') {
                        toastr.error(error.response.data.message, 'Oopps! Sorry');
                        router.push({
                            name: 'module1.abmp_report'
                        })
                    }
                }
            }

            // apply interceptor on response
            axios.interceptors.response.use(
                response => response,
                errorResponseHandler
            )

            const token = localStorage.getItem('token');
            if (!token) {
                store.dispatch('logout')
                    .then(() => {
                        window.location.href = "/login";
                        // toastr.success('Successfully logged out')
                    })
            }

            try {
                const {
                    exp
                } = decode(token);
                if (exp < new Date().getTime() / 1000) {
                    swal({
                            title: "Your Session Has Expired",
                            text: "You have to relogin",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                        })
                        .then((value) => {
                            if (value) {
                                store.dispatch('logout')
                                    .then(() => {
                                        toastr.success('You will be redirected to Login page')
                                        window.location.href = "/login"
                                    })
                            } else {
                                toastr.info("You canceled to re-login. You should to login back to access XPREAM")
                            }
                        })

                }
            } catch (e) {
                store.dispatch('logout')
                    .then(() => {
                        window.location.href = "/login";
                        // toastr.success('Successfully logged out')
                    })
            }
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

router.beforeResolve((to, from, next) => {
    if (to.path) {
        // pace.start()
    }
    next()
});

router.afterEach((to, from, next) => {
    // pace.done()
});

export default router
