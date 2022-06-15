<style scoped>
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
        z-index: 1000 !important;
        bottom: 100% !important;
        left: 50% !important;
        margin-left: -60px !important;
        white-space: nowrap !important;
    }

    ::v-deep .tooltip-x:hover .tooltiptext-x {
        visibility: visible !important;
    }

    .switchprio {
        position: relative;
        width: 48px !important;
        height: 24px !important;
        -webkit-appearance: none;
        background: #eaeaea;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        transition: 0.3s !important;
        cursor: pointer;
        border: none !important;
    }
    .switchprio:hover, .switchprio:focus, .switchprio:disabled {
        background: #eaeaea !important;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2) !important;
    }
    .switchprio:hover:checked, .switchprio:focus:checked, .switchprio:disabled:checked {
        background: #49ff55 !important;
    }
    .switchprio:before {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        top: 0;
        left: 0;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
        transition: 0.3s;
        }
    .switchprio:checked:before {
        left: 24px;
    }
    .switchprio:focus {
        border: none;
    }

    .switchprio:checked {
        background: #49ff55;
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

 
    
</style>

<template>
    <div v-show="hasAccess">
        <fullscreen ref="fullscreen" @change="fullscreenChange">
        <div v-if="fullscreen">
            <div class="card tab-content active" id="dashboard" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Dashboard Summary</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item tooltip-x">
                            <span style="padding: 0 10px;">Auto Refresh</span>
                            <span class="tooltiptext-x" style="text-align:right;">every 2 minutes</span>
                            <input type="checkbox" class="switchprio unset" v-model="autorefresh" true-value="autorefresh" false-value="" v-on:click="autorefresh == 'autorefresh' ? autorefresh ='' : autorefresh ='autorefresh'">
                        </div>
                        <div class="option-item">
                            <span style="padding: 0 10px;">Fullscreen</span>
                            <input type="checkbox" class="switchprio unset" v-model="fullscreen" :true-value="true" :false-value="false" v-on:click="fitdisplay">
                        </div>
                    </div>
                </div>
                <div class="card-content" style="position:relative;">
                    <loading
                        :active.sync="loading.isLoadingHighlight" 
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType">
                    </loading>
                    <div class="dashboard">
                        <div class="is-row" style="margin-right: 15px;">
                            <!-- Status -->
                            <div class="is-col is-20">
                                <GChart
                                    type="PieChart"
                                    :data="pietotal"
                                    :options="default_chart_stack_option3"
                                />
                            </div>
                            <div v-for="(stat, index) in status" :key="index" :class="'is-col is-40 is-100-mobile'" :style="stat.name === 'TAT' ? 'display:none;' : ''">
                                <div class="card order-type-status display-flex align-items-center" style="height:110px !important;">
                                    <div class="chart">
                                        <div class="inner" style="width:70px; height:50x;">{{stat.name}}</div>
                                        <div class="inner-info">
                                            <span class="total not-available" style="font-size:19px;">{{stat.progress}} %</span>
                                            <span class="text"></span>
                                        </div>
                                    </div>
                                    <div class="info">
                                        <span v-if="stat.name === 'Jobcard'">
                                            <GChart
                                                type="BarChart"
                                                :data="chart.jobcard.chartData"
                                                :options="default_chart_stack_option2"
                                            />
                                        </span>
                                        <span v-else-if="stat.name === 'MDR'">
                                            <GChart
                                                type="BarChart"
                                                :data="chart.jobcard.chartData"
                                                :options="default_chart_stack_option2"
                                            />
                                        </span>                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="is-row">
                            <div class="is-col is-20 is-20-mobile">
                                <div class="is-row project-info display-flex align-items-center" style="margin-left: 0px;margin-right: 15px;">
                                    <div class="is-col is-100 main-info">
                                        <span class="title-big">{{pg.ac_reg}}</span>
                                        <span class="subtitle-big">{{pg.crm_id}}</span>
                                        <br><hr>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Description</span><br>
                                        <span class="value" style="font-size:12px;">{{pg.main_type}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Location</span><br>
                                        <span class="value" style="font-size:12px;">{{hangar}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Customer</span><br>
                                        <span class="value" style="font-size:12px;">{{pg.customer}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Maintenance Day</span><br>
                                        <span class="value" style="font-size:12px;">{{getDayOf(pg.start_date)}} of {{tat}} ({{status.filter(d => d.name == 'TAT')[0].progress}} %)</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">A/C Type</span><br>
                                        <span class="value" style="font-size:12px;">{{pg.ac_type}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">WBS</span><br>
                                        <span class="value" style="font-size:12px;">{{det_rev.wbs}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">WBS</span><br>
                                        <span class="value" style="font-size:12px;">{{det_rev.so}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Start</span><br>
                                        <span class="value" style="font-size:12px;">{{pg.start_date}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Finish</span><br>
                                        <span class="value" style="font-size:12px;">{{pg.end_date}}</span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">TSN - CSN</span><br>
                                        <span class="value" style="font-size:12px;">
                                            {{ac_data.hasOwnProperty('airframe_maintenance_status') ? ac_data.airframe_maintenance_status.hasOwnProperty('total-hours-tsn') ?  ac_data.airframe_maintenance_status['total-hours-tsn'] : "" : ""}} -
                                            {{ac_data.hasOwnProperty('airframe_maintenance_status') ? ac_data.airframe_maintenance_status.hasOwnProperty('total-cycles-csn') ?  ac_data.airframe_maintenance_status['total-cycles-csn'] : "" : ""}}
                                        </span>
                                    </div>
                                    <div class="is-col is-100">
                                        <span class="title" style="font-size:12px;color:#7798b8;">A/C MSN</span><br>
                                        <span class="value" style="font-size:12px;">
                                            {{ac_data.hasOwnProperty('general-description') ? ac_data['general-description'].hasOwnProperty('aircraft-serial-number') ?  ac_data['general-description']['aircraft-serial-number'] : "" : ""}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="is-col is-80 is-80-mobile">
                                <div class="is-row" style="margin-right: 15px;">
                                    <div class="is-col is-40">
                                        <div class="is-row">
                                            <div class="is-col is-100">
                                                <div class="card">
                                                    <div class="card-header" style="height:10px;">
                                                        Material Status
                                                    </div>
                                                    <div class="card-content">
                                                        <GChart
                                                            type="BarChart"
                                                            :data="chart.statusMaterial.chartData"
                                                            :options="chart.statusMaterial.chartOptions2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="is-col is-100">
                                                <div class="card">
                                                    <div class="card-header" style="height:10px;">
                                                        PD Sheet
                                                    </div>
                                                    <div class="card-content">
                                                        <GChart
                                                            type="BarChart"
                                                            :data="chart.pdsheet.chartData"
                                                            :options="chart.pdsheet.chartOptions2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="is-col is-100">
                                                <div class="card">
                                                    <div class="card-header" style="height:10px;">
                                                        JC by Skill
                                                    </div>
                                                    <div class="card-content">
                                                        <GChart
                                                            type="ColumnChart"
                                                            :data="chart.jcskill.chartData"
                                                            :options="default_chart_column_stack_normal_option2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="is-col is-60">
                                        <div class="is-row">
                                            <div class="is-col is-100">
                                                <div class="card">
                                                    <div class="card-header" style="height:10px;">
                                                        JC by Phase
                                                    </div>
                                                    <div class="card-content">
                                                        <GChart
                                                            type="ColumnChart"
                                                            :data="chart.jcphase.chartData"
                                                            :options="default_chart_column_stack_option2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="is-col is-100">
                                                <div class="card">
                                                    <div class="card-header" style="height:10px;">
                                                        JC by Zone
                                                    </div>
                                                    <div class="card-content">
                                                        <GChart
                                                            type="ColumnChart"
                                                            :data="chart.jczone.chartData"
                                                            :options="default_chart_column_stack_normal_option2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="is-col is-100">
                                                <div class="card">
                                                    <div class="card-header" style="height:10px;">
                                                        MDR by Skill
                                                    </div>
                                                    <div class="card-content">
                                                        <GChart
                                                            type="ColumnChart"
                                                            :data="chart.mdrskill.chartData"
                                                            :options="default_chart_column_stack_normal_option2"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </fullscreen>
        <div v-if="!fullscreen">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul v-if="$route.params.type === 'hangar'" class="tab-menu">
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_dashboard', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" class="tab-link active" data-tab="dashboard">Dashboard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_highlight')" v-on:click="$router.push({name: 'pc_hangar.tracking.highlight', params: {pg_id: $route.params.pg_id, type: 'hangar'}})" class="tab-link" data-tab="highlight">Performance</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.jobcard', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="jobcard">Jobcard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.mdr', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mdr">MDR</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mrm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">MRM</li>
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mcms', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">ZMCMS<span class="status-handler success" style="font-size:11px;margin-left:6px;">beta</span></li> -->
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li> -->
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_csp', 'pc_hangar_tracking_system_edit_csp', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.csp', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="csp">CSP</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_crm', 'pc_hangar_tracking_system_edit_crm')" v-on:click="$router.push({name: 'pc_hangar.tracking.crm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="csp">CRM</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_project_charter')" v-on:click="$router.push({name: 'pc_hangar.tracking.project_charter', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="project-charter">Project Team & Charter</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_gantt_chart')" v-on:click="$router.push({name: 'pc_hangar.tracking.gantt_chart', params:{pd_id:$route.params.pg_id}})" class="tab-link" data-tab="gantt-chart">Gantt Chart</li>
                <li v-if=" $bulkCan('pc_hangar_tracking_system_discuss') " v-on:click=" $router.push({ name: 'pc_hangar.tracking.discuss', params: { pd_id: $route.params.pg_id } }) " data-tab="discuss" class="tab-link" > Discuss </li>
            </ul>
            <ul v-else-if="$route.params.type === 'shop'" class="tab-menu">
                <li v-if="$bulkCan('pc_shop_tracking_system_view', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view_dashboard')"  class="tab-link active" data-tab="dashboard">Dashboard</li>
                <li v-if="$bulkCan('pc_shop_tracking_system_view_jobcard', 'pc_shop_tracking_system_Edit_jobcard', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" v-on:click="$router.push({name: 'pc_shop.tracking.jobcard', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="jobcard">Jobcard</li>
                <li v-if="$bulkCan('pc_shop_tracking_system_view_mdr', 'pc_shop_tracking_system_edit_mdr', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" v-on:click="$router.push({name: 'pc_shop.tracking.mdr', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mdr">MDR</li>
                <li v-if="$bulkCan('pc_shop_tracking_system_view_mrm', 'pc_shop_tracking_system_edit_mrm', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" v-on:click="$router.push({name: 'pc_shop.tracking.mrm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">MRM</li>
            </ul>
            <div class="card tab-content active" id="dashboard" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Dashboard Summary</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item tooltip-x">
                            <span style="padding: 0 10px;">Auto Refresh</span>
                            <span class="tooltiptext-x" style="text-align:right;">every 2 minutes</span>
                            <input type="checkbox" class="switchprio unset" v-model="autorefresh" true-value="autorefresh" false-value="" v-on:click="autorefresh == 'autorefresh' ? autorefresh ='' : autorefresh ='autorefresh'">
                        </div>
                        <div class="option-item">
                            <span style="padding: 0 10px;">Fullscreen</span>
                            <input type="checkbox" class="switchprio unset" v-model="fullscreen" :true-value="true" :false-value="false" v-on:click="fitdisplay">
                        </div>
                    </div>
                </div>
                <div class="card-content" style="position:relative;">
                    <loading
                        :active.sync="loading.isLoadingHighlight" 
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType">
                    </loading>
                    <div class="dashboard">
                        <div class="is-row">
                            <div class="is-col is-80">
                                <div class="is-row project-info display-flex align-items-center" style="margin-left: 0px;margin-right: 15px;">
                                    <div class="is-col is-20 main-info">
                                        <span class="title-big">{{pg.ac_reg}}</span>
                                        <span class="subtitle-big">{{pg.crm_id}}</span>
                                    </div>
                                    <div class="is-col is-20">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Description</span><br>
                                        <span class="value" style="font-size:12px;">{{pg.main_type}}</span>
                                    </div>
                                    <div class="is-col is-20">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Location</span><br>
                                        <span class="value" style="font-size:12px;">{{hangar}}</span>
                                    </div>
                                    <div class="is-col is-20">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Customer</span><br>
                                        <span class="value" style="font-size:12px;">{{pg.customer}}</span>
                                    </div>
                                    <div class="is-col is-20">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Maintenance Day</span><br>
                                        <span class="value" style="font-size:12px;">{{getDayOf(pg.start_date)}} of {{tat}}</span>
                                    </div>
                                </div>
                                <div class="is-row" style="margin-right: 15px;">
                                    <!-- Status -->
                                    <div v-for="(stat, index) in status" :key="index" class="is-col is-30">
                                        <div class="card order-type-status display-flex align-items-center">
                                            <div class="chart">
                                                <div class="inner" style="width:70px; height:70x;"></div>
                                                <div class="inner-info">
                                                    <span class="total not-available" style="font-size:19px;">{{stat.progress}} %</span>
                                                    <span class="text"></span>
                                                </div>
                                            </div>
                                            <div class="info">
                                                <h3 class="title">{{stat.name}}</h3>
                                                <ul class="detail display-flex">
                                                    <li v-for="(item, idx) in stat.data" :key="idx">
                                                        <span class="title" style="font-size:12px;">{{item.name}}</span>
                                                        <span :class="'value ' + item.name.toLowerCase()">{{item.value}}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="project-info is-col is-20" style="margin-left:0px;position:relative;" v-if="user.role.is_customer !== 'y'">
                                <div class="is-row">
                                    <div class="is-col is-30">
                                        <span class="title" style="font-size:12px;color:#7798b8;">Highlight</span><br>
                                    </div>
                                    <div class="is-col is-60">
                                        <input
                                            :disabled="!date_highlight"
                                            style="height:20px;"
                                            type="date"
                                            v-model="calendar_selected"
                                        />
                                        <!--DatePicker v-model="calendar_selected" :attributes="calendar_highlight">
                                            <template v-slot="{ inputValue, inputEvents }">
                                                <input
                                                class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                                                style="height:20px;"
                                                :value="inputValue"
                                                v-on="inputEvents"
                                                />
                                            </template>
                                        </DatePicker-->
                                    </div>
                                    <div class="is-col is-10" v-if="status.length>0">
                                        <a target="_blank" :href="'https://wa.me/?text=Dear%20All%2C%0AHerewith%20we%20would%20like%20to%20inform%20progress%20report%20of%20maintenance%20'+pg.ac_reg+'%20('+pg.main_type+')%2C%20'+new Date()+'%0A%0AA.%20General%20Info%0A%20%20%20%E2%80%A2%20Revision%20No%20%20%3A%20'+pg.crm_id+'%0A%20%20%20%E2%80%A2%20Start%20%20%20%20%20%20%20%20%3A%20'+handlerConvertDate(pg.start_date)+'%0A%20%20%20%E2%80%A2%20Plan%20Finish%20%20%3A%20'+handlerConvertDate(pg.end_date)+'%0A%20%20%20%E2%80%A2%20Current%20Days%20%3A%20'+getDayOf(pg.start_date)+'%20of%20'+tat+'%0A%0AB.%20Progress%20Status%0A%20%20%20%E2%80%A2%20Jobcard%20%3A%20'+status[0].progress+'%25%20(Closed%3A%20'+status[0].data[1].value+'%2C%20Progress%3A%20'+status[0].data[0].value+'%2C%20Open%3A%20'+status[0].data[2].value+')%0A%20%20%20%E2%80%A2%20MDR%20%20%20%20%20%3A%20'+status[1].progress+'%25%20(Closed%3A%20'+status[1].data[1].value+'%2C%20Progress%3A%20'+status[1].data[0].value+'%2C%20Open%3A%20'+status[1].data[2].value+')%0A%0AC.%20Highlight%0A%20%20'+encodeURIComponent(today_highlight[0].frtext)+'%0A%0AKindly%20Regards'">
                                            <button class="button is-success" style="height:20px; width:25px;">
                                            <i class='material-icons'>
                                                maps_ugc
                                            </i>
                                            </button>
                                        </a>
                                    </div>                                    
                                </div>
                                <div class="is-row" style="overflow-y:auto;height:160px;padding-left:10px;">
                                    <textarea v-if="highlight_edit" style="height:150px;" v-model="today_highlight[0].frtext"></textarea>
                                    <span v-else style="color:yellow;white-space: pre;">{{today_highlight[0].frtext}}</span>
                                </div>
                                <div class="is-row" style="position: absolute; bottom:0; left:20px;" v-if="grantAccessHighlight">
                                    <button v-if="!highlight_edit" v-on:click="highlight_edit=true" class="button is-success" style="height:20px;margin-left:5px;">
                                        edit
                                    </button>
                                    <button v-if="highlight_edit && today_highlight[0].frtext!==null && today_highlight[0].frtext!==''" v-on:click="savetodayhighlight()" class="button" style="height:20px;margin-left:5px;">
                                        save
                                    </button>
                                    <button v-if="highlight_edit" v-on:click="inittodayhighlight()" class="button is-default" style="height:20px;margin-left:5px;">
                                        cancel
                                    </button>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <!-- Tracking summary -->
            <div class="is-row">
                <div class="is-col is-33">
                    <div class="card">
                        <div class="card-header bb">
                            <div class="title-area">
                                <h3 class="title small">Project Detail</h3>
                            </div>
                        </div>
                        <div style="height: 860px; overflow-y: auto" class="card-content">
                            <!-- <span> -->
                            <img width="50%" src="/assets/img/logo_gmf_blue.png" alt="">
                            <!--<img width="50%" src="" alt="logo_customer"></span>-->
                            <div class="is-table-container">
                                <table class="is-bordered is-striped">
                                    <loading
                                        :active.sync="loading.isLoadingProjectInfo" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading>
                                    <tr>
                                        <td width="150px">REGISTER</td>
                                        <td width="1px">:</td>
                                        <td>{{pg.ac_reg}}</td>
                                    </tr>
                                    <tr>
                                        <td>CUSTOMER</td>
                                        <td width="1px">:</td>
                                        <td>{{pg.customer}}</td>
                                    </tr>
                                    <tr>
                                        <td>A/C TYPE</td>
                                        <td width="1px">:</td>
                                        <td>{{pg.ac_type}}</td>
                                    </tr>
                                    <tr>
                                        <td>MAIN. TYPE</td>
                                        <td width="1px">:</td>
                                        <td>{{pg.main_type}}</td>
                                    </tr>
                                    <tr>
                                        <td>PROJECT OWNER</td>
                                        <td width="1px">:</td>
                                        <td>{{project_owner}}</td>
                                    </tr>
                                    <tr>
                                        <td>WBS</td>
                                        <td width="1px">:</td>
                                        <td>{{det_rev.wbs}}</td>
                                    </tr>
                                    <tr>
                                        <td>REVISION NO</td>
                                        <td width="1px">:</td>
                                        <td>{{pg.crm_id}}</td>
                                    </tr>
                                    <tr>
                                        <td>SO NUMBER</td>
                                        <td width="1px">:</td>
                                        <td>{{det_rev.so}}</td>
                                    </tr>                                                                        
                                    <tr>
                                        <td>START</td>
                                        <td width="1px">:</td>
                                        <td>{{handlerConvertDate(pg.start_date)}}</td>
                                    </tr>
                                    <tr>
                                        <td>FINISH</td>
                                        <td width="1px">:</td>
                                        <td>{{handlerConvertDate(pg.end_date)}}</td>
                                    </tr>
                                    <tr>
                                        <td>TAT</td>
                                        <td width="1px">:</td>
                                        <td>{{tat}}</td>
                                    </tr>
                                    <tr>
                                        <td>MAINT DOC</td>
                                        <td width="1px">:</td>
                                        <td>
                                            <span v-if="pg.ac_document !== null && pg.ac_document !== ''">
                                                <a :href="pg.ac_document" target="_blank"><button>Visit Link</button></a>
                                            </span>                
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>PROJECT DOC</td>
                                        <td width="1px">:</td>
                                        <td>
                                            <span v-if="pg.ac_document !== null && pg.ac_document !== ''">
                                                <a :href="pg.pg_document" target="_blank"><button>Visit Link</button></a>
                                            </span>                                          
                                        </td>
                                    </tr>                                                                        
                                    <tr>
                                        <td>TSN</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('airframe_maintenance_status') ? ac_data.airframe_maintenance_status.hasOwnProperty('total-hours-tsn') ?  ac_data.airframe_maintenance_status['total-hours-tsn'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>CSN</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('airframe_maintenance_status') ? ac_data.airframe_maintenance_status.hasOwnProperty('total-cycles-csn') ?  ac_data.airframe_maintenance_status['total-cycles-csn'] : "" : ""}}</td>
                                    </tr>
                                    <!-- <tr>
                                        <td>WO NUMBER</td>
                                        <td width="1px">:</td>
                                        <td></td>
                                    </tr> -->
                                    <tr>
                                        <td>A/C MSN</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('general-description') ? ac_data['general-description'].hasOwnProperty('aircraft-serial-number') ?  ac_data['general-description']['aircraft-serial-number'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>ENG TYPE</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('engine_maintenance_1_status') ? ac_data.engine_maintenance_1_status.hasOwnProperty('type-model') ?  ac_data.engine_maintenance_1_status['type-model'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>ESN #1</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('engine_maintenance_1_status') ? ac_data.engine_maintenance_1_status.hasOwnProperty('serial-number') ?  ac_data.engine_maintenance_1_status['serial-number'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>ESN #2</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('engine_maintenance_2_status') ? ac_data.engine_maintenance_2_status.hasOwnProperty('serial-number') ?  ac_data.engine_maintenance_2_status['serial-number'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>ESN #3</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('engine_maintenance_3_status') ? ac_data.engine_maintenance_3_status.hasOwnProperty('serial-number') ?  ac_data.engine_maintenance_3_status['serial-number'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>ESN #4</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('engine_maintenance_4_status') ? ac_data.engine_maintenance_4_status.hasOwnProperty('serial-number') ?  ac_data.engine_maintenance_4_status['serial-number'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>APU TYPE</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('auxiliary_power_unit_status') ? ac_data.auxiliary_power_unit_status.hasOwnProperty('model-number-oem') ?  ac_data.auxiliary_power_unit_status['model-number-oem'] : "" : ""}}</td>
                                    </tr>
                                    <tr>
                                        <td>APU SN</td>
                                        <td width="1px">:</td>
                                        <td>{{ac_data.hasOwnProperty('auxiliary_power_unit_status') ? ac_data.auxiliary_power_unit_status.hasOwnProperty('serial-number') ?  ac_data.auxiliary_power_unit_status['serial-number'] : "" : ""}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="is-col is-67">
                    <div class="card">
                        <div class="card-header bb">
                            <div class="title-area">
                                <!--h3 class="title small">
                                Project Highlight &nbsp;&nbsp;&nbsp;&nbsp;-->
                                <button v-on:click="datarefresh" class="button is-success" style="height:20px;">
                                    <i class='material-icons'>
                                        sync
                                    </i>
                                </button> 
                                <!--/h3-->
                            </div>
                        </div>
                        <div style="height: 860px; overflow-y: auto; padding-right: 10px;" class="card-content">
                            <div class="tracking-dashboard">
                                <!-- TAT Tracking 
                                <div class="is-row">
                                    <div class="is-col">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">TAT</h3>
                                                </div>
                                            </div>
                                            <div id="dashboard-tat-tracking" class="card-content">
                                                 <GChart
                                                    type="BarChart"
                                                    :data="chart.tatTracking.chartData"
                                                    :options="chart.tatTracking.chartOptions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                -->
                                <!-- Presentase Total JC + MDR -->
                                 <div class="is-row">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">TOTAL PERCENTAGE OF JC + MDR</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.jcmdr.chartData"
                                                    :options="default_chart_stack_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-row">
                                    <!-- Jobcard -->
                                    <div class="is-col is-50">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">JOBCARD</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.jobcard.chartData"
                                                    :options="default_chart_stack_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <!-- MDR -->
                                    <div class="is-col is-50">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">MDR</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.mdr.chartData"
                                                    :options="default_chart_stack_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- JC By Phase -->
                                <div class="is-row">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">JC BY PHASE</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="ColumnChart"
                                                    :data="chart.jcphase.chartData"
                                                    :options="default_chart_column_stack_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- JC By Skill -->
                                <div class="is-row">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">JC BY SKILL</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="ColumnChart"
                                                    :data="chart.jcskill.chartData"
                                                    :options="default_chart_column_stack_normal_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- JC By Zone -->
                                <div class="is-row">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">JC BY ZONE</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="ColumnChart"
                                                    :data="chart.jczone.chartData"
                                                    :options="default_chart_column_stack_normal_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- MDR by Skill -->
                                <div class="is-row">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">MDR BY SKILL</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="ColumnChart"
                                                    :data="chart.mdrskill.chartData"
                                                    :options="default_chart_column_stack_normal_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- MDR by Zone -->
                                <div class="is-row">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">MDR BY ZONE</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="ColumnChart"
                                                    :data="chart.mdrzone.chartData"
                                                    :options="default_chart_column_stack_normal_option"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-row">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">PDSHEET</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.pdsheet.chartData"
                                                    :options="chart.pdsheet.chartOptions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-row" v-if="grant_mrm_cust">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">

                                                    <div class="is-row" style="width:100%;">
                                                        <div class="is-col is-30">
                                                            <h3 class="title small small-title">MATERIAL STATUS</h3>
                                                        </div>
                                                        <div class="is-col is-70" style="text-align:right;">
                                                            <button class="button is-success" v-on:click="handlerchangemattype('all')">All</button>
                                                            <span v-for="(elem, index) in chart.matType.chartData" v-bind:key="index">
                                                                <button class="button is-success" v-on:click="handlerchangemattype(elem[0])" v-if="elem[0] !=''">{{elem[0]}}
                                                                </button>                                                                &nbsp;
                                                            </span>

                                                            <!--<select v-on:change="handlerchangemattype($event)">
                                                                <option v-for="elem in chart.matType.chartData" :key="chart.matType.chartData" :value="elem[0]">{{elem[0]}}</option>
                                                            </select>-->
                                                        </div>
                                                    </div>

                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.statusMaterial.chartData"
                                                    :options="chart.statusMaterial.chartOptions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <!-- Status MRM -->
                                <div class="is-row" v-if="grant_mrm_cust">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">MATERIAL TYPE</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.matType.chartData"
                                                    :options="chart.matType.chartOptions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="is-row" v-if="user.role.is_customer !== 'y' && chart.findingcateg.chartData.length>1">
                                    <div class="is-col is-100">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">DFP Finding Category</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="PieChart"
                                                    :data="chart.findingcateg.chartData"
                                                    :options="chart.findingcateg.chartOptions"
                                                />
                                            </div>
                                        </div>
                                    </div>                                
                                </div> 

                                <div class="is-row">
                                    <div class="is-col is-50">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">CLOSING PERFORMANCE (JOBCARD)</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.odcsjc.chartData"
                                                    :options="chart.odcsjc.chartOptions"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="is-col is-50">
                                        <div class="card">
                                            <div class="card-header bb">
                                                <div class="title-area">
                                                    <h3 class="title small small-title">CLOSING PERFORMANCE (MDR)</h3>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <GChart
                                                    type="BarChart"
                                                    :data="chart.odcsmdr.chartData"
                                                    :options="chart.odcsmdr.chartOptions"
                                                />
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>                                                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Tracking summary -->

            <div class="is-row" v-if="user.role.is_customer !== 'y'">
                <div class="is-col is-100">
                    <div class="card">
                        <div class="card-header">
                            <div class="title-area">
                                <h6>Daily Log</h6>
                            </div>
                        </div>
                        <div class="card-content">
                            <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                                <div>
                                    <loading style="margin-top: 50px;"
                                        :active.sync="loading.isLoading" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading>
                                    <template>
                                        <div>
                                            <vue-good-table
                                                :line-numbers="true"
                                                max-height="90vh"
                                                :search-options="{
                                                    enabled: true,
                                                    trigger: 'keyup',
                                                    skipDiacritics: true,
                                                    placeholder: 'Fill and enter to search',                                                      
                                                }"                                                     
                                                :fixed-header="false"
                                                ref="table-job-tracking"
                                                :columns="datatable1.fields"
                                                :rows="datatable1.rows"                                     
                                                styleClass="vgt-table bordered condensed"
                                                :sort-options="{
                                                    enabled: true,
                                                }"
                                                :pagination-options="{
                                                    enabled: true,
                                                    mode: 'pages',
                                                    perPage: datatable1.serverParams.perPage,
                                                    position: 'bottom',
                                                    perPageDropdown:  datatable1.perPageDropDown,
                                                    dropdownAllowAll: true,
                                                    setCurrentPage: datatable1.serverParams.page,
                                                    nextLabel: 'Next',
                                                    prevLabel: 'Prev',
                                                    rowsPerPageLabel: 'Rows per page',
                                                    ofLabel: 'of',
                                                    pageLabel: 'page',
                                                    allLabel: 'All',
                                                }"
                                            >
                                            <div slot="table-actions">
                                                <div class="toolbar toolbar-default">
                                                    <div class="toolbar-item toolbar-dropdown">                                                                                                 
                                                    </div>
                                                    <div class="toolbar-item" style="margin-right: -8px;">
                                                        <div v-on:click="handlerExportDailyLog()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                            <span class="tooltiptext-x">Export Excel</span>
                                                            <i class="material-icons warning sync_order" >file_download</i>
                                                        </div>
                                                    </div>                                                       
                                                    <div class="toolbar-item" style="margin-right: 10px;">
                                                        <!--button v-on:click="handlerlayout()" class="button is-success">
                                                            <i class='material-icons'>
                                                                grid_on
                                                            </i>
                                                            Layout
                                                        </button-->
                                                    </div>
                                                </div>
                                            </div>                                                  
                                                <template slot="table-row" slot-scope="props">
                                                    <span v-if="props.column.field == 'PMHRS_done'">
                                                        <span v-if="props.formattedRow['PMHRS_total']!==null">
                                                            <table>
                                                                <tr>
                                                                    <td>Closed</td><td><span style="color:#28a745;font-weight:bold;">{{props.formattedRow['PMHRS_done']}}</span></td>
                                                                    <td rowspan="2" style="text-align: center;vertical-align:middle;">
                                                                        <span v-if="props.formattedRow['PMHRS_total']!==0">{{((props.formattedRow['PMHRS_done']/props.formattedRow['PMHRS_total'])*100).toFixed(0)}} %</span>
                                                                        <span v-else>0 %</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Total</td><td><span style="color:#2e5ca6;font-weight:bold;">{{props.formattedRow['PMHRS_total']}}</span></td>
                                                                </tr>
                                                            </table>
                                                        </span>
                                                    </span>   
                                                    <span v-else-if="props.column.field == 'jc_done'">
                                                        <span v-if="props.formattedRow['jc_open']+props.formattedRow['jc_progress']+props.formattedRow['jc_done']!==null">
                                                            <table>
                                                                <tr>
                                                                    <td>Open</td><td><span style="color:#dc3545;font-weight:bold;">{{props.formattedRow['jc_open']}}</span></td>
                                                                    <td rowspan="4" style="text-align: center;vertical-align:middle;">
                                                                        <span v-if="props.formattedRow['jc_open']+props.formattedRow['jc_progress']+props.formattedRow['jc_done']!==0">{{((props.formattedRow['jc_done']/(props.formattedRow['jc_open']+props.formattedRow['jc_progress']+props.formattedRow['jc_done']))*100).toFixed(1)}} %</span>
                                                                        <span v-else>0 %</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Progress</td><td><span style="color:#ffc107;font-weight:bold;">{{props.formattedRow['jc_progress']}}</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Closed</td><td><span style="color:#28a745;font-weight:bold;">{{props.formattedRow['jc_done']}}</span> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Scanned</td><td><span style="color:#981CEB;font-weight:bold;">{{props.formattedRow['jc_scan']}}</span> </td>
                                                                </tr>
                                                            </table>
                                                            
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == 'mdr_done'">
                                                        <span v-if="props.formattedRow['mdr_open']+props.formattedRow['mdr_progress']+props.formattedRow['mdr_done']!==null">
                                                            <table>
                                                                <tr>
                                                                    <td>Open</td><td><span style="color:#dc3545;font-weight:bold;">{{props.formattedRow['mdr_open']}}</span></td>
                                                                    <td rowspan="4" style="text-align: center;vertical-align:middle;">
                                                                        <span v-if="props.formattedRow['mdr_open']+props.formattedRow['mdr_progress']+props.formattedRow['mdr_done']!==0">{{((props.formattedRow['mdr_done']/(props.formattedRow['mdr_open']+props.formattedRow['mdr_progress']+props.formattedRow['mdr_done']))*100).toFixed(1)}} %</span>
                                                                        <span v-else>0 %</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Progress</td><td><span style="color:#ffc107;font-weight:bold;">{{props.formattedRow['mdr_progress']}}</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Closed</td><td><span style="color:#28a745;font-weight:bold;">{{props.formattedRow['mdr_done']}}</span> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Scanned</td><td><span style="color:#981CEB;font-weight:bold;">{{props.formattedRow['mdr_scan']}}</span> </td>
                                                                </tr>
                                                            </table>
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == 'frtext'">
                                                        <span v-if="props.formattedRow['frtext']!==null && props.formattedRow['frtext']!==''">
                                                            <span style="white-space: pre;">{{props.formattedRow['frtext']}}</span>
                                                            <hr>
                                                            {{props.formattedRow['created_byname']}} | {{props.formattedRow['timestamp_highlight']}}
                                                        </span>
                                                    </span>                                                                                                                                 
                                                    <span v-else>
                                                        <div class="flex-middle-default">
                                                            {{props.formattedRow[props.column.field]}}
                                                        </div>
                                                    </span>
                                                </template>

                                            </vue-good-table>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>   
                <!--div class="is-col is-30">
                    <div class="card">
                        <div class="card-header">
                            <div class="title-area">
                                <h6>Over Consume</h6>
                            </div>
                        </div>
                        <div class="card-content">
                        </div>
                    </div>          
                </div-->          
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
import XLSX from 'xlsx';
import Fullscreen from 'vue-fullscreen'


export default {
    components: {
        VueGoodTable,
        GChart,
        Loading,
        Fullscreen
    },
    
    watch: {
        autorefresh(val) {
            if(val === 'autorefresh') {
                this.dashboard_interval.push(setInterval(() => {
                    this.datarefresh();
                }, 120000))
            }
            else {
                return new Promise((resolve, reject) => {
                    for(let i=0;i<this.dashboard_interval.length;i++){
                        clearInterval(this.dashboard_interval[i]);
                    }
                    this.dashboard_interval=[];             
                    resolve();
                })
            }
        }
    },

    computed: {

        user: function () {
                return JSON.parse(localStorage.getItem('user'));
            },

        grant_mrm_cust: function() {
            let val = true;
            if(this.user.role.is_customer == 'y'){
                this.user.role.permission.forEach(function(el){
                    if(el.slug=="pc_hangar_hide_mrm_dashboard"){
                        val = false;
                    }
                })
            }
            return val;
        }

    },

    data: () => ({
        dashboard_interval: [],
        autorefresh: '',
        smart_tv: false,
        hasAccess: false,
        loading: {
            isLoadingHighlight: false,
            isLoadingProjectInfo: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        today_highlight:[{
            frtext: null,
            created_at: null,
            created_by:null
        }],
        highlight_edit:false,
        datatable1: {
            fields: [
                    {
                        label: 'Date',
                        field: 'created_at',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Plan Manhours',
                        field: 'PMHRS_done',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: '',
                        field: 'PMHRS_total',       
                        hidden: true,
                    },                    
                    {
                        label: 'Jobcard',
                        field: 'jc_done',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: '',
                        field: 'jc_open',       
                        hidden: true,
                    }, 
                    {
                        label: '',
                        field: 'jc_progress',       
                        hidden: true,
                    },
                    {
                        label: 'MDR',
                        field: 'mdr_done',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: '',
                        field: 'mdr_open',       
                        hidden: true,
                    }, 
                    {
                        label: '',
                        field: 'mdr_progress',       
                        hidden: true,
                    },
                    {
                        label: '',
                        field: 'jc_scan',       
                        hidden: true,
                    },
                    {
                        label: '',
                        field: 'mdr_scan',       
                        hidden: true,
                    },
                    {
                        label: 'Highlight',
                        field: 'frtext',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: '',
                        field: 'created_byname',       
                        hidden: true,
                    },
                    {
                        label: '',
                        field: 'timestamp_highlight',       
                        hidden: true,
                    },                                                                             
                    
            ],
            rows: [],
            totalRows: '',
            serverParams: {
                columnFilters: {
                },
                sort: {
                    type: '',
                    field: ''
                },
                page: 1, 
                perPage: 10,
                searchTerm: '',
                filter: {
                    
                },
                revnr: "",
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: [],
        },         
        calendar_selected: new Date(new Date().setTime(new Date().getTime()) + (/*GMT*/7*60*60*1000)).toISOString().split('T')[0],
        date_highlight: false,
        calendar_highlight: [
            {
                key: 'today',
                highlight: {
                color: 'purple',
                fillMode: 'solid',
                contentClass: 'italic',
                },
                dates: new Date('2021-02-10'),
            },
            {
                highlight: {
                color: 'purple',
                fillMode: 'light',
                },
                dates: new Date('2021-02-14'),
            },
            {
                highlight: {
                color: 'purple',
                fillMode: 'outline',
                },
                dates: new Date('2021-02-15'),
            },
            ],
        general: {
            ac_reg: '',
            pg_id: '',
            main_type: '',
            location: '',
            customer: ''
        },

        status: [],

        chart: {
            findingcateg: {
                chartData: [
                ],
                chartOptions:{
                    pieHole: 0.4,
                    pieSliceText: 'value',
                    //legend: 'none',
                    chartArea:{left:0,top:10,bottom:5,width:'100%',height:'100%'},
                    height: 200,
                    backgroundColor: 'white'
                    // /title: 'My Daily Activities'
                }
            },
            // ONE DAY CLOSING
            odcsjc: {
                chartData: [
                    ['', '', '', ''],
                    ['', 0, '', '']
                ],
                chartOptions: {
                    //bar: {groupWidth: "100%"},
                    chartArea:{left:20, top:20},
                    height: 250,
                    vAxis: {textPosition: 'none'},
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                }
            },

            odcsmdr: {
                chartData: [
                    ['', '', '', ''],
                    ['', 0, '', '']
                ],
                chartOptions: {
                    //bar: {groupWidth: "100%"},
                    chartArea:{left:20, top:20},
                    height: 250,
                    vAxis: {textPosition: 'none'},
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                }
            },

            // PRESENTASE TOTAL JC + MDR
            jcmdr: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0],
                    ['', 0, 0, 0],
                ],
            },

            // Jobcard
            jobcard: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0],
                ],
                
            },
            // mdr
            mdr: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0],
                ],
                
            },

            // JC BY SKILL
            jcphase: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0]
                ],
                
            },

            // JC BY PHASE
            jcskill: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0],
                ],
            },

            // JC BY ZONE
            jczone: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0],
                ],
            },

            // MDR BY SKILL
            mdrskill: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0],
                ],
            },

            // MDR BY ZONE
            mdrzone: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['', 0, 0, 0],
                ],
            },

            pdsheet: {
                chartData: [
                    ['Status', 'Qty', {role: "style"}, {role:"annotation"}],
                    ['Open', 0, '#fff', '']
                ],
                chartOptions: {
                    //bar: {groupWidth: "100%"},
                    height: 500,
                    vAxis: {textPosition: 'none'},
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                },
                chartOptions2: {
                    chartArea:{left:0,top:10,bottom:5,width:'100%',height:'100%'},
                    height: 100,
                    vAxis: {textPosition: 'none'},
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                }
            },
            // STATUS MRM
            /*statusmrm: {
                chartData: [
                    ['', 'Done', 'Progress', 'Open'],
                    ['PRELOAD IN HANGAR', 136, 3, 133],
                    ['TAIL/APU', 136, 3, 133],
                    ['FWD CARGO', 136, 3, 133],
                    ['AFT CARGO', 136, 3, 133],
                    ['LH WING/FUEL', 136, 3, 133],
                    ['RH WING/FUEL', 136, 3, 133],
                    ['LH ENGINE', 136, 3, 133],
                    ['RH ENGINE', 136, 3, 133],
                    ['AVIONIC', 136, 3, 133],
                    ['STRUCTURE', 136, 3, 133],
                    ['LANDING GEAR / HYD', 136, 3, 133],
                    ['CABIN', 136, 3, 133],
                    ['COCKPIT', 136, 3, 133],
                ],
            },*/

            matType: {
                chartData: [
                    ['', 'QTY'],
                    ['', 0],
                ],
                chartOptions: {
                    height: 100,
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                }
            },

            statusMaterial: {
                chartData: [
                    ['Status', 'Qty', {role: "style"}, {role: "annotation"}],
                    [null, 0, '#fff', '']
                ],
                chartOptions2: {
                    chartArea:{left:0,top:10,bottom:5,width:'100%',height:'100%'},
                    height: 200,
                    vAxis: {textPosition: 'none'},
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                },
                chartOptions: {
                    //bar: {groupWidth: "100%"},
                    height: 500,
                    vAxis: {textPosition: 'none'},
                    legend: { position: 'none', maxLines: 3 },
                    hAxis: {
                        minValue: 0,
                    },
                }
            },
            
        },
        default_chart_stack_option2: {
            chartArea:{left:0,top:25,bottom:0,width:'100%',height:'100%'},
            height: 60,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'percent',
            hAxis: {
                minValue: 0,
                ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
                3:{color:'#981CEB'},
                4:{color:'#ffffff'},
            }
        },
        default_chart_stack_option3: {
            pieHole: 0.2,
            pieSliceText: 'percentage',
            // legend: 'none',
            chartArea:{left:0,top:5,bottom:5,width:'100%',height:'100%'},
            height: 100,
            backgroundColor: 'white',
            tooltip: {trigger: 'focus', ignoreBounds:true, isHtml: true},
            slices: {
                0:{color:'#28a745', offset:0.1},
                1:{color:'#ffc107', offset:0.1},
                2:{color:'#dc3545', offset:0.1},
            }
        },
        default_chart_stack_option: {
            height: 100,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'percent',
            hAxis: {
                minValue: 0,
                ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
                3:{color:'#981CEB'},
                4:{color:'#ffffff'},
            }
        },

        default_chart_column_stack_option: {
            height: 350,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'percent',
            hAxis: {
                minValue: 0,
                ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
            }
        },

        default_chart_column_stack_option2: {
            chartArea:{left:0,top:0,bottom:50,width:'100%',height:'100%'},
            height: 150,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'percent',
            hAxis: {
                minValue: 0,
                ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
            }
        },

        default_chart_column_stack_normal_option: {
            height: 350,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'true',
            hAxis: {
                minValue: 0,
                // ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
            }
        },
        default_chart_column_stack_normal_option2: {
            chartArea:{left:0,top:0,bottom:50,width:'100%',height:'100%'},
            height: 150,
            legend: { position: 'top', maxLines: 3 },
            isStacked: 'true',
            hAxis: {
                minValue: 0,
                // ticks: [0, .25, .5, .75, 1],
            },
            vAxis: {
                minValue: 0,
            },            
            series: {
                0:{color:'#28a745'},
                1:{color:'#ffc107'},
                2:{color:'#dc3545'},
            }
        },
        pg: {},
        pg_position: {},
        hangar: "",
        project_owner: "",
        det_rev: {},
        ac_data: {},
        tat: "",
        pietotal: [],
        grantAccessHighlight: false,
        fullscreen: false,
    }),

    mounted() {
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if(!res) {
                this.$router.push({name: 'access_denied'});
            } else {
                if(
                    !this.$bulkCan(
                        'pc_hangar_tracking_system_view_dashboard', 
                        'pc_shop_tracking_system_view_dashboard', 
                        'pc_hangar_tracking_system_edit', 
                        'pc_shop_tracking_system_edit', 
                        'pc_hangar_tracking_system_view', 
                        'pc_shop_tracking_system_view', 
                        'pc_hangar_tracking_system_customer_edit'
                    )
                ) {
                    this.$router.push({name: 'access_denied'});
                }else {
                    this.hasAccess = true;
                    this.datarefresh();
                }
            }
        });

        if(this.$can('pc_hangar_tracking_system_edit_highlight')) {
            this.grantAccessHighlight = true;
        }
        
    },

    methods: {
        fitdisplay() {
            // this.fullscreen = !this.fullscreen
            this.togglefullscreen()
        },
        // smart_tv == 'smarttv' ? smart_tv ='' : smart_tv ='smarttv'
        togglefullscreen () {
            this.$refs['fullscreen'].toggle()
        },
        fullscreenChange (fullscreen) {
            this.fullscreen = fullscreen
        },
        datarefresh: function(){
            this.initSummary();
            //this.initJCTotal();
            //this.initMDRTotal();
            //this.initJCMdrTotal();
            this.initJCPhase();
            this.initJCZone();
            this.initMDRZone();
            this.initJCSkill();
            this.initMDRSkill();
            this.initStatusMaterial().then(() => {
                this.loading.isLoadingHighlight = false;
            });
            this.initMaterialType();       
            this.getAcData();
            this.getProject();
            this.handlerGetRevision();
            
            this.initCRMstatus();

            this.initdailylog();
            this.inittodayhighlight();
            this.initfindingcategory();
            this.initClosingperformance();
        },



        initSummary: function() {
            this.loading.isLoadingHighlight = true;
            return new Promise((resolve, reject) => {
                axios.get(`/api/production_control_hangar/dashboard/summary/${this.$route.params.pg_id}`)
                .then(res => {
                    this.tat = res.data[2].data[2].value
                    this.status = res.data
                    this.pietotal = [
                        ['Status','Qty'],
                        ['Done', parseInt(res.data[0].data[1].value) + parseInt(res.data[1].data[1].value)],
                        ['Progress', parseInt(res.data[0].data[0].value) + parseInt(res.data[1].data[0].value)],
                        ['Open', parseInt(res.data[0].data[2].value) + parseInt(res.data[1].data[2].value)]
                    ]

                    if(res.data[0].scanned>0){ 
                        this.chart.jobcard.chartData = [
                            [
                                '',
                                'Done', 
                                'Progress', 
                                'Open',
                                'Scanned',
                                '',
                                {role: 'style'},
                                {type: 'string', role: 'tooltip'}
                            ],
                            [
                                '',
                                parseInt(res.data[0].data[1].value),
                                parseInt(res.data[0].data[0].value),
                                parseInt(res.data[0].data[2].value),
                                0,
                                0,
                                '',
                                ''
                            ],
                            [
                                '',
                                0,
                                0,
                                0,
                                res.data[0].scanned,
                                res.data[0].total-res.data[0].scanned,
                                'stroke-color: #981CEB; stroke-opacity: 0.6; stroke-width: 1; fill-color: #981CEB; fill-opacity: 0',
                                'not scanned yet'
                            ]
                        ];                          
                    }
                    else{
                        this.chart.jobcard.chartData = [
                            [
                                '',
                                'Done', 
                                'Progress', 
                                'Open'
                            ],
                            [
                                '',
                                parseInt(res.data[0].data[1].value),
                                parseInt(res.data[0].data[0].value),
                                parseInt(res.data[0].data[2].value)
                            ]
                        ];
                    }
                    if(res.data[1].scanned>0){ 
                        this.chart.mdr.chartData = [
                            [
                                '',
                                'Done', 
                                'Progress', 
                                'Open',
                                'Scanned',
                                '',
                                {role: 'style'},
                                {type: 'string', role: 'tooltip'}
                            ],
                            [
                                '',
                                parseInt(res.data[1].data[1].value),
                                parseInt(res.data[1].data[0].value),
                                parseInt(res.data[1].data[2].value),
                                0,
                                0,
                                '',
                                ''
                            ],
                            [
                                '',
                                0,
                                0,
                                0,
                                res.data[1].scanned,
                                res.data[1].total-res.data[1].scanned,
                                'stroke-color: #981CEB; stroke-opacity: 0.6; stroke-width: 1; fill-color: #981CEB; fill-opacity: 0',
                                'not scanned yet'
                            ]
                        ];                          
                    }
                    else{
                        this.chart.mdr.chartData = [
                            [
                                '',
                                'Done', 
                                'Progress', 
                                'Open'
                            ],
                            [
                                '',
                                parseInt(res.data[1].data[1].value),
                                parseInt(res.data[1].data[0].value),
                                parseInt(res.data[1].data[2].value)
                            ]
                        ];
                    }                

                    if(res.data[0].scanned+res.data[1].scanned>0){ 
                        this.chart.jcmdr.chartData = [
                            [
                                '',
                                'Done', 
                                'Progress', 
                                'Open',
                                'Scanned',
                                '',
                                {role: 'style'},
                                {type: 'string', role: 'tooltip'}
                            ],
                            [
                                '',
                                parseInt(res.data[0].data[1].value) + parseInt(res.data[1].data[1].value),
                                parseInt(res.data[0].data[0].value) + parseInt(res.data[1].data[0].value),
                                parseInt(res.data[0].data[2].value) + parseInt(res.data[1].data[2].value),
                                0,
                                0,
                                '',
                                ''
                            ],
                            [
                                '',
                                0,
                                0,
                                0,
                                res.data[0].scanned+res.data[1].scanned,
                                res.data[0].total+res.data[1].total-res.data[0].scanned-res.data[1].scanned,
                                'stroke-color: #981CEB; stroke-opacity: 0.6; stroke-width: 1; fill-color: #981CEB; fill-opacity: 0',
                                'not scanned yet'
                            ]
                        ];                          
                    }
                    else{
                        this.chart.jcmdr.chartData = [
                            [
                                '',
                                'Done', 
                                'Progress', 
                                'Open'
                            ],
                            [
                                '',
                                parseInt(res.data[0].data[1].value) + parseInt(res.data[1].data[1].value),
                                parseInt(res.data[0].data[0].value) + parseInt(res.data[1].data[0].value),
                                parseInt(res.data[0].data[2].value) + parseInt(res.data[1].data[2].value),
                            ]
                        ];                         
                    }                                     
                    //console.log(this.chart.jobcard.chartData);                 
                    resolve();
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoadingHighlight = false;
                    resolve();
                })
            })
        },

         getProject: function() {
            this.loading.isLoadingProjectInfo = true;
            axios.get('/api/slot_and_capacity/planning_gate/show_dashboard/' + this.$route.params.pg_id)
            .then( res => {
            //console.log(res.data.data);
            //console.log(res.data.status);
                if (res.data.status == 'success') {
                    this.pg = res.data.data;
                    //console.log(this.pg);
                    //this.pg_position = res.data.position;
                    this.hangar = res.data.data.location;
                    this.project_owner = res.data.data.name;
                    this.loading.isLoadingProjectInfo = false;

                }
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Failed get planning gate");
                this.loading.isLoadingProjectInfo = false;
            })
        },

        initdailylog: function() {
            //this.loading.isLoadingProjectInfo = true;
            axios.get('/api/production_control_hangar/dashboard/dailylog/' + this.$route.params.pg_id)
            .then( res => {
            //console.log(res.data.data);
            //console.log(res.data.status);
                if (res.data.success) {
                    this.datatable1.rows = res.data.data;
                    //this.loading.isLoadingProjectInfo = false;

                }
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Failed get daily log");
                //this.loading.isLoadingProjectInfo = false;
            })
        },

        handlerExportDailyLog: function() {
            return new Promise((resolve, reject) => {
                let data = this.datatable1.rows;
                let tmp = XLSX.utils.json_to_sheet(data)                 
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, 'daily_log '+this.calendar_selected)
                XLSX.writeFile(wb, `${this.pg.ac_reg}_daily_log_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },

        inittodayhighlight: function() {
            this.highlight_edit=false;
            //this.loading.isLoadingProjectInfo = true;
            axios.get('/api/production_control_hangar/dashboard/highlight/' + this.$route.params.pg_id + '/' + this.calendar_selected)
            .then( res => {
            //console.log(res.data.data);
            //console.log(res.data.status);
                if (res.data.success) {
                    this.today_highlight = res.data.data;
                    //this.loading.isLoadingProjectInfo = false;

                }
                else{
                    this.today_highlight = [
                        {
                            frtext: null,
                            created_at: null,
                            created_by:null
                        }]
                }
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Failed get highlight");
                //this.loading.isLoadingProjectInfo = false;
            })
        },

        savetodayhighlight: function() {
            this.highlight_edit=false;
            if(this.today_highlight[0].frtext==null || this.today_highlight[0].frtext==''){
                this.inittodayhighlight();
                return
            }
            //this.loading.isLoadingProjectInfo = true;
            axios.post('/api/production_control_hangar/dashboard/save_highlight', {
                revnr: this.$route.params.pg_id,
                date: this.calendar_selected,
                frtext: this.today_highlight[0].frtext
            })
            .then( res => {
            //console.log(res.data.data);
            //console.log(res.data.status);
                if (res.data.success) {
                    toastr.success("highlight data saved!");
                    this.inittodayhighlight();
                    //this.loading.isLoadingProjectInfo = false;

                }
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Failed get highlight");
                //this.loading.isLoadingProjectInfo = false;
            })
        },

        initfindingcategory: function() {
            axios.get(`/api/production_control_hangar/dashboard/finding_categ/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.findingcateg.chartData = Object.keys(res.data).map((key) => [key, res.data[key]]);
                let header = ['finding','qty'];
                this.chart.findingcateg.chartData.unshift(header);
                //console.log(this.chart.findingcateg.chartData);
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initJCPhase: function() {
            axios.get(`/api/production_control_hangar/dashboard/jc_phase_summary/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.jcphase.chartData = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initJCZone: function() {
            axios.get(`/api/production_control_hangar/dashboard/jc_zone_summary/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.jczone.chartData = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initMDRZone: function() {
            axios.get(`/api/production_control_hangar/dashboard/mdr_zone_summary/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.mdrzone.chartData = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initCRMstatus: function() {
            axios.get(`/api/production_control_hangar/dashboard/crm_summary/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.pdsheet.chartData = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initStatusMaterial: function() {
            return new Promise((resolve, reject) => {
                axios.get(`/api/production_control_hangar/dashboard/status_material_summary/${this.$route.params.pg_id}/all`)
                .then(res => {
                    this.chart.statusMaterial.chartData = res.data;
                    resolve();
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoadingHighlight = false;
                    resolve();
                })
            })
        },

        handlerchangemattype: function(mattype){
            axios.get(`/api/production_control_hangar/dashboard/status_material_summary/${this.$route.params.pg_id}/`+mattype)
            .then(res => {
                this.chart.statusMaterial.chartData = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })        

        },

        initMaterialType: function() {
            axios.get(`/api/production_control_hangar/dashboard/material_type_summary/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.matType.chartData = res.data;
                //console.log(this.chart.matType.chartData);
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initJCSkill: function() {
            axios.get(`/api/production_control_hangar/dashboard/jc_skill_summary/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.jcskill.chartData = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initMDRSkill: function() {
            axios.get(`/api/production_control_hangar/dashboard/mdr_skill_summary/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.mdrskill.chartData = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        initClosingperformance: function() {
            axios.get(`/api/production_control_hangar/dashboard/closing_performance/${this.$route.params.pg_id}`)
            .then(res => {
                this.chart.odcsjc.chartData = res.data.jc;
                this.chart.odcsmdr.chartData = res.data.mdr;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
            })
        },

        getAcData: function() {
            axios.get('/api/production_control_hangar/ac/ac_data/' + this.$route.params.pg_id)
            .then( res => {
                this.ac_data = res.data
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Failed get AC data")
            })
        },

        getDayOf: function(date) {
            if (date == undefined) {
                return 0;
            }

            let now = new Date();
            now.setHours(0);
            now.setMinutes(0, 0, 0);

            date = new Date(date);
            date.setHours(0);
            date.setMinutes(0, 0, 0);

            var datediff = (now.getTime() - date.getTime());
            return parseInt(datediff / (24 * 60 * 60 * 1000), 10) + 1;
        },

        handlerConvertDate: function(date) {
            if(date == undefined) {
                return "";
            }

            const month_names = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            let res = new Date(date);
            return `${res.getDate()} ${month_names[res.getMonth()]} ${res.getFullYear()}`;

        },

        handlerGetRevision: function(revnr) {
             axios.get('/api/crm_data/get_detail/' + this.$route.params.pg_id)
            .then( res => {
                this.det_rev = res.data;
            })
            .catch(e => {
                toastr.error("Failed get revisioin detail");
                console.log("Error: " + e);
            })
        }


    }
}
</script>
