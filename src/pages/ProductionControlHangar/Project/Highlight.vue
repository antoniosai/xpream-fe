<style scoped>

::v-deep .btn-custom {
    height: 30px;
    margin-right: -2.5px;
}

::v-deep .is-secondary {
    border: 2px solid #286baa !important ;
    color: #286baa !important;
}

::v-deep .is-primary {
    background-color:#286baa !important ;
    color: white !important;
}

::v-deep .is-secondary:hover {
    background-color:#286baa !important ;
    color: white !important;
}

::v-deep .flex-middle-default {
    font-size: 10px;
}

::v-deep .vgt-responsive {
    overflow-x:auto;
}

::v-deep .table.vgt-table{
    font-size: 9px !important; 
    border-collapse: collapse !important;
    background-color: #fff !important;
    width: 100% !important;
    max-width: 100% !important;
    table-layout: auto !important;
    border: 1px solid #dcdfe6 !important;
}

::v-deep .vgt-table.bordered td, .vgt-table.bordered th {
    border: 1px solid #dcdfe6  !important;
    height: 20px  !important;
    font-size: 9pt  !important;
}

::v-deep .vgt-wrap__footer {
    font-size: 9pt !important;
    /* color: #606266; */
    padding: 0.5em !important;
    height: 35px !important;
    border: 1px solid #dcdfe6 !important;
    background: #ffffff !important;
}


::v-deep .vgt-wrap__footer .footer__row-count__label {
    font-size: 9pt !important;
    color: #909399 !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {
    opacity: .5 !important;
    cursor: not-allowed !important;
    box-shadow: 0 0 black !important;
    font-size: 9pt !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__info, .vgt-wrap__footer .footer__navigation__page-info {
    display: inline-block !important;
    color: #909399 !important;
    margin: 0 16px !important;
    font-size: 9pt !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__page-btn {
    text-decoration: none !important;
    color: #606266 !important;
    font-weight: 700 !important;
    white-space: nowrap !important;
    font-size: 9pt !important;
}

::v-deep .vgt-input, .vgt-select{
    font-size: 9pt !important;
}

::v-deep .footer__row-count__label {
    margin-top: -7px !important;
}

::v-deep .footer__navigation{
    margin-top: -2px !important;
}

::v-deep .vgt-wrap__footer .footer__row-count__select {
    margin-top: -5px !important;
    width: 50px !important;
    padding: 0px 15px 0px 5px;
    border: 0px  !important;
    border-radius: 0px !important;
    color: #606266 !important;
    font-weight: 700 !important;
    font-size: 9pt !important;
    margin-left: 0px !important;
    height: 32px !important;
    line-height: 32px !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__page-info__current-entry {
    width: 50px !important;
    text-align: center !important;
    display: inline-block !important;
    margin: 0 10px !important;
    font-weight: 700 !important;
    height: 25px !important;
}

::v-deep .vgt-global-search {
    background: #ffffff !important;
    border: 1px solid #dcdfe6  !important;
}

::v-deep .vgt-table thead th {
    background: #ffffff !important;
    width:null;
}

::v-deep .status-handler {
    color: white;
    font-size: 9pt;
    border-radius: 5px;
    padding: 4px !important;
}

::v-deep .status-handler.success {
    background-color: #13CE66;

}

::v-deep .status-handler.primary {
    background-color: #026396;

}

::v-deep .status-handler.danger {
    background-color: #dc3545;
}

::v-deep .status-handler.warning {
    background-color: #ffc107;
}

::v-deep .box-progress-circle {
    padding-top: 5px;
    text-align: center;
}

::v-deep .progress-circle-text {
    font-size: 9pt;
    font-weight: bold;
    color: #0E988E;
}

::v-deep .data-dashboard-completion {
    font-weight: bold;
    padding-top: 10px;
    font-size: 10pt;
    letter-spacing: 0.01px;
    word-spacing: 1px;
    text-align: center;
    
}

.input-mhrsval {
  /*background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="100"><text x="7" y="19" style="font: bold 12px Arial;">Act Mhrs > Plan Mnhrs x </text></svg>') no-repeat;
    */
  padding-left: 195px;
}

.input-box { position: relative; }

.unit { position: absolute; display: block; left: 5px; top: 10px; z-index: 9; font-size: 11px;}

.clickbarcode{ cursor: pointer}

::v-deep .cost-desc {
max-width: 200px;
}

.zoom-normal {
    zoom: 118%
}

</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_dashboard', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: $route.params.pg_id, type: 'hangar'}})" class="tab-link" data-tab="dashboard">Dashboard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_highlight', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link active" data-tab="highlight">Performance</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.jobcard', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="jobcard">Jobcard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.mdr', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mdr">MDR</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mrm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">MRM</li>
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mcms', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">ZMCMS<span class="status-handler success" style="font-size:11px;margin-left:6px;">beta</span></li> -->
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li> -->
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_csp', 'pc_hangar_tracking_system_edit_csp', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" class="tab-link" data-tab="csp">CSP</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_crm', 'pc_hangar_tracking_system_edit_crm')" v-on:click="$router.push({name: 'pc_hangar.tracking.crm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="csp">CRM</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_project_charter', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.project_charter', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="project-charter">Project Team & Charter</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_gantt_chart', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.gantt_chart', params:{pd_id:$route.params.pg_id}})" class="tab-link" data-tab="gantt-chart">Gantt Chart</li>
                <li v-if=" $bulkCan('pc_hangar_tracking_system_discuss') " v-on:click=" $router.push({ name: 'pc_hangar.tracking.discuss', params: { pd_id: $route.params.pg_id } }) " data-tab="discuss"  class="tab-link"  > Discuss </li>
            </ul>
            <div class="card tab-content active" id="csp" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header bb">
                    <!--div class="title-area">
                        <h3 class="title">Daily Profitability Dashboard</h3>
                    </div-->
                    <div class="option-box">
                        <div class="option-item">
                            <button type="button" v-on:click="handlersync()" :class="`button btn-custom is-danger`">Sync</button>
                        </div> 
                        <div class="option-item" style="text-align: center;">
                            <a class="button btn-custom is-success" style="font-size: 9pt; font-weight: bold; cursor: default;">{{ac_reg}}</a> 
                            <a class="button btn-custom is-secondary" style="font-size: 8pt; cursor: default;"> {{main_type}}</a> 
                        </div>
                       <div class="option-item">
                           <a type="button" class="button btn-custom is-secondary" style="cursor: default;">{{currentprogress.line_name}}</a>
                            <a type="button" class="button btn-custom is-secondary" style="cursor: default;">{{currentprogress.poname}}</a>
                        </div>                        
                        <div class="option-item">
                            <a class="button btn-custom is-secondary" style="cursor: default;">{{sum_copa_arr.wbs}}</a>
                            <a type="button" class="button btn-custom is-secondary" style="cursor: default;">{{$route.params.pg_id}}</a>
                        </div>                       
                    </div>
                </div>
                <div class="card-content">
                    <!--div class="is-row">
                        <div class="is-col is-30"></div>
                        <div class="is-col is-40">
                            <div style=" text-align: center; text-decoration: underline; font-size: 13pt; font-weight: bold;">
                                Daily Profitability Dashboard
                            </div>  
                        </div>
                        <div class="is-col is-30"></div>
                    </div-->
                    <!--div>
                        <div class="is-row">
                            <div class="is-col is-25"></div>
                            <div class="is-col is-50">
                                <highcharts :options="dataChart.pieChart" ref="piecharts"></highcharts>
                            </div>
                            <div class="is-col is-25"></div>
                        </div>
                    </div-->
                    <!--div style="margin-top: -70px; position: relative; width: 100%"-->
                    <div class="is-row">
                        <loading style="margin-top: 50px;"
                            :active.sync="syncloading.isLoading" 
                            :can-cancel="false"
                            :is-full-page="false"
                            :color="syncloading.color"
                            :loader="syncloading.loaderType">
                        </loading>
                        <div class="is-col is-50" style="margin-bottom: 0px;">    
                            <div class="card" style="border-radius: 0px 8px 8px 8px;">
                                <div class="card-header">
                                    <div class="box-progress-circle">
                                        <VmProgress style="width:70px;" 
                                            type="circle" 
                                            stroke-width="6" 
                                            :width=70
                                            :percentage="currentprogress.PMHRS_done == null ? 0 : (parseFloat(currentprogress.PMHRS_done).toFixed(2)/parseFloat(currentprogress.PMHRS_total).toFixed(2)).toFixed(2)*100"
                                            :strokeColor="handlerMainProgressColor(currentprogress.PMHRS_total, currentprogress.PMHRS_done, currentprogress.TAT, currentprogress.day)">
                                            <span :style="{color: handlerMainProgressColor(currentprogress.PMHRS_total, currentprogress.PMHRS_done, currentprogress.TAT, currentprogress.day)}" class="progress-circle-text">{{currentprogress.PMHRS_done == null ? 0 : (100*parseFloat(currentprogress.PMHRS_done)/parseFloat(currentprogress.PMHRS_total)).toFixed(1)}} %</span>
                                        </VmProgress>
                                        <div class="data-dashboard-completion">Plan Mhrs</div>
                                    </div>
                                    <div class="box-progress-circle">
                                        <VmProgress style="width:70px;" 
                                            type="circle" 
                                            stroke-width="6" 
                                            :width=70
                                            :percentage="currentprogress.jobdone == null ? 0 : (parseFloat(currentprogress.jobdone).toFixed(2)/parseFloat(currentprogress.jobtotal).toFixed(2)).toFixed(2)*100"
                                            :strokeColor="handlerMainProgressColor(currentprogress.jobtotal, currentprogress.jobdone, currentprogress.TAT, currentprogress.day)">
                                            <span :style="{color: handlerMainProgressColor(currentprogress.jobtotal, currentprogress.jobdone, currentprogress.TAT, currentprogress.day)}" class="progress-circle-text">{{currentprogress.jobdone == null ? 0 : (100*parseFloat(currentprogress.jobdone)/parseFloat(currentprogress.jobtotal)).toFixed(1)}} %</span>
                                        </VmProgress>
                                        <div class="data-dashboard-completion">Qty</div>
                                    </div>
                                    <div class="box-progress-circle">
                                        <VmProgress style="width:70px;" 
                                            type="circle" 
                                            stroke-width="6" 
                                            :width=70
                                            :percentage="systemstatus"
                                            :strokeColor="handlerMainProgressColor2(systemstatus, currentprogress.TAT, currentprogress.day)">
                                            <span :style="{color: handlerMainProgressColor2(systemstatus, currentprogress.TAT, currentprogress.day)}" class="progress-circle-text">{{systemstatus}} %</span>
                                        </VmProgress>
                                        <div class="data-dashboard-completion">TECO</div>
                                    </div>                                    
                                    <div class="box-progress-circle">
                                        <VmProgress style="width:70px;" 
                                            type="circle" 
                                            stroke-width="6" 
                                            :width=70
                                            :percentage="handlerProjectPercent(currentprogress.TAT, currentprogress.day)">
                                            <span style="color:#43a2da;" class="progress-circle-text">{{handlerProjectPercent(currentprogress.TAT, currentprogress.day)}} %</span>
                                        </VmProgress>
                                        <div class="data-dashboard-completion">TAT</div>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div class="is-row">
                                        <div class="is-col is-40">
                                            <highcharts
                                        
                                            id='columnchart'
                                            :options="dataChart.columnChart"
                                            ref="colcharts"
                                            
                                            ></highcharts>
                                        </div>
                                        <div class="is-col is-60">
                                            <div class="card-content">
                                                <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                                                    <div>
                                                        <template>
                                                            <div>
                                                                <loading style="margin-top: 50px;"
                                                                    :active.sync="soaploading.isLoading" 
                                                                    :can-cancel="false"
                                                                    :is-full-page="false"
                                                                    :color="soaploading.color"
                                                                    :loader="soaploading.loaderType">
                                                                </loading>
                                                                <vue-good-table
                                                                    :line-numbers="false"
                                                                    max-height="90vh"
                                                                    :search-options="{
                                                                        enabled: true,
                                                                        trigger: 'keyup',
                                                                        skipDiacritics: true,
                                                                        placeholder: 'Fill and enter to search',                                                      
                                                                    }"                                                     
                                                                    :fixed-header="false"
                                                                    ref="table-tysow"
                                                                    :columns="datatable3.fields"
                                                                    :rows="datatable3.rows"                                     
                                                                    styleClass="vgt-table bordered condensed"
                                                                    :sort-options="{
                                                                        enabled: true,
                                                                    }"
                                                                    :pagination-options="{
                                                                        enabled: true,
                                                                        mode: 'pages',
                                                                        perPage: datatable3.serverParams.perPage,
                                                                        position: 'bottom',
                                                                        perPageDropdown:  datatable3.perPageDropDown,
                                                                        dropdownAllowAll: true,
                                                                        setCurrentPage: datatable3.serverParams.page,
                                                                        nextLabel: 'Next',
                                                                        prevLabel: 'Prev',
                                                                        rowsPerPageLabel: 'Rows per page',
                                                                        ofLabel: 'of',
                                                                        pageLabel: 'page',
                                                                        allLabel: 'All',
                                                                    }"
                                                                >
                                                                    <template slot="table-row" slot-scope="props">
                                                                        <span v-if="props.column.field == 'WTGBTR'">
                                                                            <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                                            <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}}</span>
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
                                            <div class="card-footer"><br><br>
                                                <div v-if="sales_id != null && sales_id !=''" class="option-box">
                                                    <div class="option-item" style="text-align: center; position:relative;">
                                                        <span v-if="gsmartpaloading.isLoading" style="font-size: 9pt; color:#FF9898; ">
                                                            loading PA attachment ...
                                                        </span>
                                                        <button v-if="sales_document.pa.length>0" class="button btn-custom is-secondary"  v-on:click="openmodal('modal-pa')">PA</button> 
                                                        <br><br>
                                                    </div>
                                                    <div class="option-item" style="text-align: center; position:relative;">  
                                                        <span v-if="gsmartsowloading.isLoading" style="font-size: 9pt; color:#FF9898; ">
                                                            loading SOW attachment ...
                                                        </span>                                                     
                                                        <button v-if="sales_document.sow.length>0" class="button btn-custom is-secondary" v-on:click="openmodal('modal-sow')">SOW</button>
                                                        <br><br>
                                                    </div>                       
                                                </div>
                                                <div v-else class="option-box">
                                                    <div class="option-item" style="text-align: center;">
                                                        <a style="font-size: 9pt; color:#FF9898; ">Sales document reference not found because this revision number is not linked yet with GSMART data<!--, please click here to linked with sales plan data from GSMART--></a> 
                                                    </div>                      
                                                </div>                                                
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div class="is-col is-50" style="margin-bottom: 0px;"> 
                            <div class="card" style="border-radius: 0px 8px 8px 8px;">
                                <div class="card-header bb">
                                    <div class="option-box">
                                        <div class="option-item">
                                            <select v-on:change="handlerSelect()" id='option_select'>
                                                <option value='cost'>Revenue and Cost</option>
                                                <option value='qty'>Qty</option>
                                                <option value='mhrs'>Manhours</option>
                                                <option disabled value='comp'>Percentage of Completion</option>
                                            </select>
                                        </div>
                                        <div class="option-item" v-if="btnType==='cost'">                                    
                                            <button type="button" v-on:click="handlerButton('cost', 'type', 'all')" :class="`button btn-custom ${btnTypeCost === 'all' ? 'is-primary' : 'is-secondary'}`">All</button>
                                            <button type="button" v-on:click="handlerButton('cost', 'type', 'mhcost')" :class="`button btn-custom ${btnTypeCost === 'mhcost' ? 'is-primary' : 'is-secondary'}`">MH Cost</button>
                                            <button type="button" v-on:click="handlerButton('cost', 'type', 'matcost')" :class="`button btn-custom ${btnTypeCost === 'matcost' ? 'is-primary' : 'is-secondary'}`">MAT Cost</button>
                                        </div> 
                                        <div class="option-item">
                                            <button type="button" v-on:click="handlerButton('all', 'option', 'all')" :class="`button btn-custom ${btnOption === 'all' ? 'is-primary' : 'is-secondary'}`">All</button>
                                            <button type="button" v-on:click="handlerButton('GA01', 'option', 'all')" :class="`button btn-custom ${btnOption === 'GA01' ? 'is-primary' : 'is-secondary'}`">Jobcard</button>
                                            <button type="button" v-on:click="handlerButton('GA02', 'option', 'all')" :class="`button btn-custom ${btnOption === 'GA02' ? 'is-primary' : 'is-secondary'}`">MDR</button>
                                        </div> 
                                    </div>  
                                </div>
                                <div class="card-content">
                                    <div class="is-col is-100" style="overflow-x: auto;">
                                    <loading
                                        :active.sync="loading.isLoading" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="loading.loaderType">
                                    </loading>
                                    <!--highcharts :constructorType="'stockChart'" class="hc" :options="dataChart.lineChart" ref="linecharts"></highcharts-->
                                    <!--style="transform: scaleX(1.21);transform-origin: 0% 0%; -webkit-transform: scaleX(1.21);-webkit-transform-origin: 0% 0%;"-->
                                    <highstock
                                    class="zoom-normal"
                                    id='stockchart'
                                    :constructorType="'stockChart'"
                                    :options="dataChart.lineChart"
                                    ref="linecharts"                                    
                                    ></highstock>
                                    <!--GChart
                                    type="AreaChart"
                                    :data="dataChart.lineChart.series"
                                    :options="dataChart.lineChart.options"
                                    /-->
                                    </div>                                                
                                    
                                </div>
                                <div class="card-footer">
                                    <div class="is-col is-100" style="padding-top:0px;padding-left:30px;font-size:12px;"><br>
                                        <!--Planned Cost : Based on ZIW39 Plan Manhours Cost, Plan Material Cost and Xpream Daily Menu<br>-->
                                        Actual Cost : ZIW39 Actual Manhours Cost & Material Cost by Xpream Closed Date<br>
                                        Actual Revenue : FBL3N

                                    </div>                  
                                </div> 
                            </div>

                        </div>                                                                    
                    </div>
                    <div class="is-row">
                        <div class="is-col is-50" style="padding:30px;">
                            <div class="card-header">
                                <div class="title-area">
                                    <h6>Actual Revenue Details</h6>
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
                                                            <div v-on:click="handlerExportDetailRevenue()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
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
                                                        <span v-if="props.column.field == 'DMBE2'">
                                                            <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                            <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}}</span>
                                                        </span>   
                                                        <span v-else-if="props.column.field == 'VBEL2'">
                                                            {{props.formattedRow[props.column.field]-0}}
                                                        </span>
                                                        <span v-else-if="props.column.field == 'INVSTAT'">
                                                            <span v-if="props.formattedRow[props.column.field]==0">
                                                                <a class="status-handler danger">Not Cleared</a>
                                                            </span>
                                                            <span v-else-if="props.formattedRow[props.column.field]==1">
                                                                <a class="status-handler success">Cleared</a>
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

                        <div class="is-col is-50" style="padding:30px;"> 
                            <div class="card-header">
                                <div class="title-area">
                                    <h6>Actual Cost Details</h6>
                                </div>
                            </div>
                            <div class="card-content">
                                <div  style="box-sizing: border-box; position: relative; min-height: 20px;overflow-x=auto;">
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
                                                    ref="table-mdr-tracking"
                                                    :columns="datatable2.fields"
                                                    :rows="datatable2.rows"                                     
                                                    styleClass="vgt-table bordered condensed"
                                                    :sort-options="{
                                                        enabled: true,
                                                    }"
                                                    :pagination-options="{
                                                        enabled: true,
                                                        mode: 'pages',
                                                        perPage: datatable2.serverParams.perPage,
                                                        position: 'bottom',
                                                        perPageDropdown:  datatable2.perPageDropDown,
                                                        dropdownAllowAll: true,
                                                        setCurrentPage: datatable2.serverParams.page,
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
                                                            <div v-on:click="handlerExportDetailCost()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                                <span class="tooltiptext-x">Export Excel</span>
                                                                <i class="material-icons warning sync_order" >file_download</i>
                                                            </div>
                                                        </div>                                                       
                                                        <div class="toolbar-item" style="margin-right: -8px;">
                                                            <!--div v-on:click="validatemhrs" class="button" tabindex="0">
                                                                Mhrs Validation
                                                            </div-->
                                                            <div class="input-box">
                                                                <input v-model="mhval" class="input-mhrsval" id="inputmhval" type="number">
                                                                <span class="unit">Validation : Act Mhrs > Plan Mhrs x </span>
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
                                                        <span v-if="props.column.field == 'PMHRS'">
                                                            <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                            <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</span>
                                                        </span>
                                                        <span v-else-if="props.column.field == 'ACTMHRS'">
                                                            <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                            <span v-else v-on:click="findbarcode(props.formattedRow['AUFNR'])" class="clickbarcode">
                                                                <span v-if="parseFloat(props.formattedRow[props.column.field]) > parseFloat(props.formattedRow['PMHRS'])*mhval">
                                                                    <a class="status-handler danger">{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</a>

                                                                </span>
                                                                <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</span>
                                                            </span>
                                                        </span>
                                                        <span v-else-if="props.column.field == 'GKSTI' || props.column.field == 'GKSTP' || props.column.field == 'DMBTR' || props.column.field == 'WRBTR'">
                                                            <span v-if="props.formattedRow[props.column.field] === null">$0</span>
                                                            <span v-else>${{parseFloat(props.formattedRow[props.column.field]).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}}</span>
 
                                                        </span>
                                                        <span v-else-if="props.column.field == 'AUFNR'">
                                                            <span>
                                                                <a :id="'dfp-link-button-'+props.index" target="_blank">
                                                                    {{props.formattedRow[props.column.field]}}
                                                                </a>
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

                </div>
            </div>

                <div class="modal-box" id="modal-mhval" data-keyboard="false" data-backdrop="static">
                    <div class="modal lg">
                        <span class="close" v-on:click="hideModal('modal-mhval')"></span>
                            <div class="modal-header">
                                <h2 class="title">Actual Manhours Barcode Details</h2>
                            </div>
                            <div class="modal-body" style="position: relative">
                                <loading style="margin-top: 50px;"
                                    :active.sync="modalloading.isLoading" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="modalloading.color"
                                    :loader="modalloading.loaderType">
                                </loading>
                                <table class="is-bordered is-striped">
                                    <thead>
                                        <th>Emp ID</th>
                                        <th>Name</th>
                                        <th>Unit</th>
                                        <th>Stamp No</th>
                                        <th>Act Mhrs</th>
                                        <th>Barcode Status</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(mpwrs, index) in manpowerbarcode" :key="index">
                                            <td>{{mpwrs.NOPEG}}</td>
                                            <td>{{mpwrs.NAMA}}</td>
                                            <!--td>{{mpwrs.TITLE}}</td-->
                                            <td>{{mpwrs.UNIT}}</td>
                                            <td>{{mpwrs.STAMPNO}}</td>
                                            <td>{{mpwrs.ACT_MHRS}} H</td>
                                            <td>{{mpwrs.BARCODE_STATUS}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!--div v-for="(mpwrs, index) in manpowerbarcode" :key="index" class="is-col is-25" style="margin-bottom: 15px;"></div-->
                            </div>
                            <div class="modal-footer" style="">
                                <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-mhval')">Close</button>
                            </div>

                    </div>
                </div>

                <div class="modal-box" id="modal-pa" data-keyboard="false" data-backdrop="static">
                    <div class="modal lg">
                        <span class="close" v-on:click="hideModal('modal-pa')"></span>
                        <div class="modal-header">
                            <h4 class="title">Available {{ sales_document.pa.length }} documents</h4>
                        </div>
                        <div class="modal-body" style="height: 80vh; overflow-y: auto;">
                            <div class="card" v-for="palist in sales_document.pa" :key="palist.attc_id" style="margin-bottom: 10px; height: 85px">
                                <div class="is-row">
                                    <div class="is-col is-80">
                                        <p>
                                            <strong>
                                                <a v-bind:href="gsmart_attachment + palist.attc_created_by +'/' + palist.attc_file" target="_blank">{{ palist.attc_file }}</a>
                                            </strong>
                                        </p>
                                        <span>Uploaded by: <strong>{{ palist.attc_created_by }}</strong></span><span>| Uploaded at: <strong>{{ palist.attc_created_date }}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-pa')">Close</button>
                        </div>
                    </div>
                </div>

                <div class="modal-box" id="modal-sow" data-keyboard="false" data-backdrop="static">
                    <div class="modal lg">
                        <span class="close" v-on:click="hideModal('modal-sow')"></span>
                        <div class="modal-header">
                            <h4 class="title">Available {{ sales_document.sow.length }} documents</h4>
                        </div>
                        <div class="modal-body" style="height: 80vh; overflow-y: auto;">
                            <div class="card" v-for="sowlist in sales_document.sow" :key="sowlist.attc_id" style="margin-bottom: 10px; height: 85px">
                                <div class="is-row">
                                    <div class="is-col is-80">
                                        <p>
                                            <strong>
                                                <a v-bind:href="gsmart_attachment + sowlist.attc_created_by +'/' + sowlist.attc_file" target="_blank">{{ sowlist.attc_file }}</a>
                                            </strong>
                                        </p>
                                        <span>Uploaded by: <strong>{{ sowlist.attc_created_by }}</strong></span><span>| Uploaded at: <strong>{{ sowlist.attc_created_date }}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-sow')">Close</button>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</template>


<script>

import axios from 'axios';

import { GChart } from 'vue-google-charts';
import 'vue-good-table/dist/vue-good-table.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import Loading from 'vue-loading-overlay';
import { VueGoodTable } from 'vue-good-table';
import Progress from 'vue-multiple-progress';
import XLSX from 'xlsx';

export default {
    components: {
        Loading,
        GChart,
        VueGoodTable,
        'VmProgress': Progress,
        // Highcharts: genComponent('Highcharts', Highcharts),
        // Highstock: genComponent('Highstock', Highcharts),
    },

    data: () => ({

        hasAccess: false,
        grant_access: true,
        btnOption: "all",
        btnType: "cost",
        btnTypeCost: "all",
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        modalloading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        soaploading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        syncloading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },  
        gsmartpaloading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'spinner',
            color: '#0065ff',
            width: 200,
            height: 20,
        },  
        gsmartsowloading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'spinner',
            color: '#0065ff',
            width: 200,
            height: 20,
        },                            
        initialData: [],
        datatable1: {
            fields: [
                    {
                        label: 'AccNo',
                        field: 'BELNR',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'DocDate',
                        field: 'BLDAT',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'PosDate',
                        field: 'BUDAT',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },                    
                    {
                        label: 'Description',
                        field: 'SGTXT_BSIS',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'SO',
                        field: 'VBEL2',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },  
                    {
                        label: 'Value',
                        field: 'DMBE2',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    }, 
                    {
                        label: 'Curr',
                        field: 'HWAE2',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    }, 
                    {
                        label: 'Status',
                        field: 'INVSTAT',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
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
        
        datatable2: {
            fields: [
                    {
                        label: 'Date Done',
                        field: 'DATE_DONE',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Order',
                        field: 'AUFNR',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Type',
                        field: 'AUART',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Description',
                        field: 'DESCRIPTION',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        tdClass: 'cost-desc',
                        thClass: 'cost-desc',
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },  
                    {
                        label: 'P Mhrs',
                        field: 'PMHRS',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    }, 
                    {
                        label: 'A Mhrs',
                        field: 'ACTMHRS',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    /*{
                        label: 'P Mhrs Cost',
                        field: 'GKSTP',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },*/
                    {
                        label: 'A Mhrs Cost',
                        field: 'GKSTI',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    /*{
                        label: 'P Mat Cost',
                        field: 'DMBTR',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },*/
                    {
                        label: 'A Mat Cost',
                        field: 'WRBTR',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },  
                    {
                        label: 'System Status',
                        field: 'LONGSYSSTAT',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
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

        datatable3: {
            fields: [
                    /*{
                        label: 'Cost Element',
                        field: 'KSTAR',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },*/
                    {
                        label: 'Description',
                        field: 'CEL_TXT',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
                    },
                    {
                        label: 'Actual Value',
                        field: 'WTGBTR',       
                        hidden: false,
                        filterable: false,
                        sortable: true,
                        filterOptions: {
                            enabled: false,
                            placeholder: "",
                        }
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

        dataChart: {
            lineChart: {
                chart: {
                    //width: 950,
                    //zoomType: 'y',
                    type: 'line',
                },
                credits: {
                    enabled: false,
                },
                title: {
                    text: '',
                },
                colors: ['#3690DA', '#000000', '#B87F3C', '#194670'],
                 plotOptions: {
                    line: {
                        //size:'50%',
                        dataLabels: {
                            enabled: false,
                            style: {
                                fontWeight: 'normal',
                                color: '#666666'
                            },
                        },
                    },
                    series: {
                        showInNavigator: true
                    }                    
                },
                navigator: {
                    height: 40
                }, 
                              
                rangeSelector: {
                    enabled: true,
                    //selected: 1
                },               
                               
                tooltip: {
                    crosshairs: [true,true],
                    split: false,
                    shared: true
                },
                legend: {
                    layout: 'vertical',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0,
                },  
                series: [                  
                    {
                        name: '-',
                        enableMouseTracking: true,
                        marker: {
                            symbol: 'circle'
                        },
                        data: [],  
                        visible: true                  
                    }, 
                    {
                        name: 'Closed',
                        enableMouseTracking: true,
                        marker: {
                            symbol: 'circle'
                        },
                        data: [],
                        visible: true
                    },
                    {
                        name: '-',
                        enableMouseTracking: true,
                        marker: {
                            symbol: 'circle'
                        },
                        data: [],
                        visible: true,
                        dashStyle: 'ShortDot'
                    },
                    {
                        name: 'Planned',
                        enableMouseTracking: false,
                        marker: {
                            symbol: 'circle'
                        },
                        data: [],
                        visible: true
                        
                    }                                      
                ]
            },
            /*
            lineChart: {
                series: [
                    ['Day', 'Planned Cost', {role : 'tooltip'}, 'Actual Cost', {role : 'tooltip'}, 'Accrued Revenue', {role : 'tooltip'}, 'Actual Revenue', {role : 'tooltip'}],
                    ['0',  0, '0', 0, '0', 0, '0', 0, '0']
                ],
                options: {
                    height: 350,                   
                    legend: { position: 'top'},
                    //isStacked: 'true',
                    hAxis: {
                        minValue: 0,
                        format: 'd/M',
                        // ticks: [0, .25, .5, .75, 1],
                    },
                    vAxis: {
                        minValue: 0,
                    },            
                },               
            },
            */
            
            columnChart: {
                colors: ['#B98E2A', '#000000', '#3690DA', '#46DC6A'], //E24646
                chart: {
                    type: 'column'
                },
                title: {
                    text: '',
                    align: 'center',
                    verticalAlign: 'middle',
                },
                xAxis: {
                    categories: ['COPA Report (ZGMF_TY_SOW)'],
                },

                yAxis: {
                    allowDecimals: true,
                    //min: 0,
                    title: {
                        text: 'USD'
                    },
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -2
                    }
                    
                },
                plotOptions: {
                    column: {
                        stacking: 'normal'
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    borderWidth: 0,
                },         
                series: [
                {
                    name: 'Revenue (NPPA)',
                    data: [],
                    stack: 'revenue'
                },
                {
                    name: 'Revenue (Package)',
                    data: [],
                    stack: 'revenue'
                },
                /*{
                    name: 'Cost Non-Package',
                    data: [1],
                    stack: 'cost'
                },*/
                {
                    name: 'Cost',
                    data: [],
                    stack: 'cost'
                },
                {
                    name: 'Profit',
                    data: [],
                    stack: 'profit'
                },]
            }

        },


        ac_reg: "",
        sales_id: 0,
        sales_document: {
            pa : [],
            sow : []
        },
        currentprogress: [],
        systemstatus: "",
        main_type: "",
        opselect:"cost",
        dfp_url:[],
        mhval:50,
        manpowerbarcode:[],
        sum_copa_arr:{
            revenue: [0],
            cost: [0],
            profit: [0],
            nppa: 0,
            wbs:"",
        },
        gsmart_attachment: 'https://gsmart-beta.gmf-aeroasia.co.id/public/files/upgrade/',
    }),
    
    mounted() {
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if(!res) {
                this.$router.push({name: 'access_denied'});
            } else {
                if(
                    !this.$bulkCan(
                        'pc_hangar_tracking_system_view_highlight', 
                        /*'pc_hangar_tracking_system_edit', 
                        'pc_hangar_tracking_system_view', 
                        'pc_hangar_tracking_system_customer_edit'*/
                    )
                ) {
                    this.$router.push({name: 'access_denied'});
                }else {
                    this.hasAccess = true;

                    this.initDailyHighlight();
                    this.getnppa();
                    
                }
            }
        });
    },

    methods: {
        
        initDailyHighlight: function() {
            this.dataChart.lineChart.series[0].data = [];
            this.dataChart.lineChart.series[1].data = [];
            this.dataChart.lineChart.series[2].data = [];
            this.dataChart.lineChart.series[3].data = [];

            return new Promise((resolve) => {
                if(this.btnType=='cost'){
                    //this.dataChart.lineChart.series[0] = ['Day', 'Planned Cost', {role : 'tooltip'}, 'Actual Cost', {role : 'tooltip'}, 'Accrued Revenue', {role : 'tooltip'}, 'Actual Revenue', {role : 'tooltip'}]    
                    this.dataChart.lineChart.series[3].name = "<b>Planned Cost</b></p>";
                    this.dataChart.lineChart.series[0].name = "<b>Actual Cost</b></p>";
                    this.dataChart.lineChart.series[1].name = "<b>Actual Revenue</b>";
                    this.dataChart.lineChart.series[2].name = "<b>Cleared Invoices</b>";
                    //this.dataChart.lineChart.series[3].name = 'Planned Revenue'; 
            
                }
                else if(this.btnType=='mhrs'){
                    //this.dataChart.lineChart.series[0] = ['Day', 'Planned Cost', {role : 'tooltip'}, 'Actual Cost', {role : 'tooltip'}, 'Accrued Revenue', {role : 'tooltip'}, 'Actual Revenue', {role : 'tooltip'}]  
                    this.dataChart.lineChart.series[3].name = "-";
                    this.dataChart.lineChart.series[0].name = "<b>Actual Mhrs by Closed Date</b></p>";
                    this.dataChart.lineChart.series[1].name = "<b>Plan Mhrs by Closed Date</b></p>";
                    this.dataChart.lineChart.series[2].name = "<b>Plan Mhrs by Issued Date</b></p>"; 

                }
                else{
                    //this.dataChart.lineChart.series[0] = ['Day', 'Planned Cost', {role : 'tooltip'}, 'Actual Cost', {role : 'tooltip'}, 'Accrued Revenue', {role : 'tooltip'}, 'Actual Revenue', {role : 'tooltip'}]  
                    this.dataChart.lineChart.series[3].name = "<b>Planned</b></p>";
                    this.dataChart.lineChart.series[0].name = "<b>Actual Closed</b></p>";
                    this.dataChart.lineChart.series[1].name = "-";
                    this.dataChart.lineChart.series[2].name = "-"; 

                }                               
                axios.get(`/api/production_control_hangar/highlight/daily/${this.$route.params.pg_id}/${this.btnOption}/${this.btnType}/${this.btnTypeCost}`)
                .then(res => {
                    //this.dataChart.lineChart.xAxis.categories = res.data.date;
                    
                    //this.dataChart.lineChart.xAxis.categories.data = [];

                    for(let i = 0; i < res.data.date.length; i++){ 
                        let d = new Date(res.data.date[i]).getTime();
                        let planned = res.data.planned[i];
                        let planned_issued = res.data.planned_issued[i];
                        let closed = res.data.closed[i];
                        let actrev = res.data.actual_revenue[i];
                        let clearedinv = res.data.cleared_invoices[i];
                        //this.dataChart.lineChart.series.push([d, planned, planned, closed, closed, 0, 0, actrev, actrev])
                        //this.dataChart.lineChart.series[3].data.push([d,planned]);
                        this.dataChart.lineChart.series[0].data.push([d,closed]);
                        if(this.btnType=='mhrs'){
                            this.dataChart.lineChart.series[1].data.push([d,planned]);
                            this.dataChart.lineChart.series[2].data.push([d,planned_issued]);
                        }
                        else{
                            this.dataChart.lineChart.series[1].data.push([d,actrev]);
                            this.dataChart.lineChart.series[2].data.push([d,clearedinv]);
                        }
                        
                    }  
                    // /console.log(this.dataChart.lineChart.series);


                    this.ac_reg = res.data.ac_reg;
                    this.sales_id = res.data.sales_data;
                    if(res.data.sales_data != null && res.data.sales_data!=''){
                        this.initSalesDocument(res.data.sales_data);
                    }
                    this.currentprogress = res.data.current_progress;
                    this.systemstatus = res.data.system_status;
                    this.main_type = res.data.main_type;
                    this.datatable1.rows = res.data.data_col1;
                    this.datatable2.rows = res.data.data_col2;
                    //console.log(this.dataChart.lineChart.series);                
                    //this.handlergetdfp(res.data.dfpjc);
                    //this.handlergetdfp(res.data.dfpmdr);
                });
                resolve();
            })
            
            //$(".highcharts-tooltip").attr('opacity','1');
            //$(".highcharts-label.highcharts-tooltip-box").attr("transform","translate(226,242)");
        },

        getnppa: function(){
            axios.get('/api/production_control_hangar/highlight/nppasummary/'+this.$route.params.pg_id)
            .then(res => { 
                if(res.data.success){
                    this.sum_copa_arr.nppa = -1*parseInt(res.data.data);
                }
            }).then(res => {
                this.initCopaLineItem(this.sum_copa_arr.nppa);
            })

        },
        
        initCopaLineItem: function(nppa){
            //return new Promise((resolve) => {
            this.dataChart.columnChart.series[3].data=[0];
            this.dataChart.columnChart.series[0].data=[0];
            this.dataChart.columnChart.series[1].data=[0];
            this.dataChart.columnChart.series[2].data=[0];
            this.soaploading.isLoading = true;
            axios.get('/api/production_control_hangar/highlight/profitsummary/'+this.$route.params.pg_id)
            .then(res => { 
                if(res.data.success){
                    this.sum_copa_arr.wbs = res.data.wbs;
                    this.datatable3.rows = res.data.data;
                    //console.log(res.data.data);
                    this.sum_copa_arr.revenue = [0];
                    this.sum_copa_arr.cost = [0];
                    this.sum_copa_arr.profit = [0];
                    for(let i = 0; i < res.data.data.length; i++){ 
                        if(res.data.data[i].CEL_TXT.includes('REVENUE')){
                            this.sum_copa_arr.revenue.push(-1*parseInt(res.data.data[i].WTGBTR));
                        }
                        else{
                            this.sum_copa_arr.cost.push(parseInt(res.data.data[i].WTGBTR));
                        }
                    }
                    this.dataChart.columnChart.series[0].data = [nppa];
                    this.dataChart.columnChart.series[1].data = [this.sum_copa_arr.revenue.map(idx => idx).reduce((prev, next) => prev + next)-nppa];
                    this.dataChart.columnChart.series[2].data = [this.sum_copa_arr.cost.map(idx => idx).reduce((prev, next) => prev + next)];
                    this.dataChart.columnChart.series[3].data = [this.sum_copa_arr.revenue.map(idx => idx).reduce((prev, next) => prev + next)-this.sum_copa_arr.cost.map(idx => idx).reduce((prev, next) => prev + next)];
                    if(this.dataChart.columnChart.series[3].data < 0){
                        this.dataChart.columnChart.colors[3] = '#E24646';
                    }
                    
                    this.soaploading.isLoading = false;
                    //console.log(this.dataChart.columnChart);
                }
                else{
                    toastr.warning(res.data.message); 
                    this.soaploading.isLoading = false;
                }
                //this.datatable3.rows = Object.keys(res.data.data).map((key) => res.data.data[key]);
                //toastr.remove();
                //toastr.success('DFP folder connected');                
            })
            .catch(e => {
                console.log("Error: "+e);
                this.soaploading.isLoading = false;
                //toastr.remove();
                //toastr.error("Undefined error");
            })

            //resolve();
            //})
        },

        initSalesDocument: function(id){ 
            this.gsmartpaloading.isLoading  = true;
            this.gsmartsowloading.isLoading  = true;
            axios.get('/api/slot_and_capacity/attachment/pa/'+id)
            .then(res => { 
                if(res.data.status=='success'){
                    this.sales_document.pa = res.data.data;
                    this.gsmartpaloading.isLoading  = false;
                }
                else{
                    toastr.warning('failed to connect to PA');
                    this.gsmartpaloading.isLoading  = false;
                }        
            })
            .catch(e => {
                console.log("Error: "+e);
                this.gsmartpaloading.isLoading  = false;
            })

            axios.get('/api/slot_and_capacity/attachment/sow/'+id)
            .then(res => { 
                if(res.data.status=='success'){
                    this.sales_document.sow = res.data.data;
                    this.gsmartsowloading.isLoading  = false;
                }
                else{
                    toastr.warning('failed to connect to SOW');
                    this.gsmartsowloading.isLoading  = false;
                } 
                //console.log(this.sales_document);      
            })
            .catch(e => {
                console.log("Error: "+e);
                this.gsmartsowloading.isLoading  = false;
            })
        },

        handlerobjecttoarray: function(arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i)
            rv[i] = arr[i];
        return rv;
        },

        handlergetdfp: function(url) {
            if(url == "" || url==null){
                this.dfp_url=[]; 
                //this.datatable2.rows.forEach(this.matchindexdfp);
                return;
            }
            //toastr.info('Connecting to Sharepoint DFP folder ...');
            axios.post('/api/production_control_hangar/connectdfp', {
                urlfolder: url
            })
            .then(res => {
                this.dfp_url = res.data.data;
                this.datatable2.rows.forEach(this.matchindexdfp);
                //toastr.remove();
                //toastr.success('DFP folder connected');                
            })
            .catch(e => {
                console.log("Error: "+e);
                //toastr.remove();
                //toastr.error("Undefined error");
            }) 
        }, 
        
        matchindexdfp: function(item, index){
            $('#dfp-link-button-'+index).removeAttr('href').removeAttr('class');
            let url = this.dfp_url.find(a =>a.includes('('+item.AUFNR+')'));
            //console.log(this.dfp_url.find(a =>a.includes('('+item.AUFNR+')')));
            if(url != null){
                $('#dfp-link-button-'+index).attr('href',url).addClass('status-handler success');
            }
            //$('#dfp-link-button-'+index).attr('href',url);

            //this.datatable.rows[index].DFPURL = this.dfp_url.find(a =>a.includes('('+item.AUFNR+')'));
        },


        handlerSelect: function(){
            this.opselect = document.getElementById('option_select').value;
            this.handlerButton(this.opselect, 'type', 'all')
        },

        handlerButton: function(type, status, typecost) {
            if(status === "option") {
                /*if(type === "all") this.dataChart.lineChart.yAxis.title.text = "All";
                else if(type === "GA01") this.dataChart.lineChart.yAxis.title.text = "Jobcard";
                else if(type === "GA02") this.dataChart.lineChart.yAxis.title.text = "MDR";*/
    
                this.btnOption = type;
                //this.initHighlight();

            }else if(status === "type") {
                this.btnType = type;
                this.btnTypeCost = typecost;
            }
            this.initDailyHighlight();
        },

        handlersync: function(){
            this.syncloading.isLoading = true;
            this.handlersyncrevenue();
            toastr.warning('sync cost', 'started synchorizing data from CJI3 ...');
            //axios.get(`/api/production_control_hangar/highlight/synccost/${this.$route.params.pg_id}`)
            axios.get('/api/cron/sync_profit_ext/'+this.$route.params.pg_id)
            .then(res => {
                if(res.data.success) {
                    this.syncloading.isLoading = false;
                    toastr.remove();
                    toastr.success(res.data.message, 'Success sync data from CJI3');
                    //this.handlersyncrevenue();
                    //this.initHighlight();
                    this.initDailyHighlight();
                    this.initCopaLineItem();

                }else {
                    //toastr.remove();
                    toastr.warning(res.data.message);
                    this.syncloading.isLoading = true;
                    this.loading.isLoading = false;
                }
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
                this.syncloading.isLoading = true;
            })     
        },
        openmodal: function(modalid){
            $('#'+modalid).modal('show');
        },

        findbarcode: function(order){
            $('#modal-mhval').modal('show');
            this.modalloading.isLoading = true;
            toastr.warning('searching personnel job record data', 'Manhours Barcode');
            axios.get(`/api/production_control_hangar/highlight/get_barcode/${this.$route.params.pg_id}/${order}`)
            .then(res => {                
                if(res.data.success) {
                    this.modalloading.isLoading = false;
                    this.manpowerbarcode = res.data.data;
                    //console.log(res.data.data);
                    //toastr.remove();
                    //toastr.success(res.data.message, 'Success Sync Revenue');
                    //this.initHighlight();
                    //this.initDailyHighlight();

                }else {
                    //toastr.remove();
                    //toastr.warning(res.data.message);
                    this.modalloading.isLoading = false;
                }
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.modalloading.isLoading = false;
            })            

        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        handlersyncrevenue: function(){
            //this.loading.isLoading = true;
            toastr.warning('sync revenue', 'started synchorizing revenue from FBL3N ...');
            axios.get(`/api/production_control_hangar/highlight/syncrevenue/${this.$route.params.pg_id}`)
            .then(res => {
                if(res.data.success) {
                    this.loading.isLoading = false;
                    //toastr.remove();
                    toastr.success(res.data.message, 'Success Sync Revenue from FBL3N');
                    //this.initHighlight();
                    this.initDailyHighlight();

                }else {
                    toastr.remove();
                    toastr.warning(res.data.message);
                    //this.loading.isLoading = false;
                }
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                //this.loading.isLoading = false;
            })     
        },

        handlerMainProgressColor: function(total, done, tat, day) {
            //console.log(total, done, tat, day);
            let color = "#0E988E";
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;
            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    z = 100;
                }

                z = z.toFixed(2);
            }
            let progress = (parseFloat(done).toFixed(2)/parseFloat(total).toFixed(2))*100;
            //console.log(progress);
            //console.log(z);
            let res = progress/z;
            if(progress == 0) {
                color = "#dc3545";
            }else if(res >= 1) {
                color = "#0E988E";
            }else if(res >= 0.95 && res < 1) {
                color = "#ff9635";
            }else {
                color = "#dc3545";
            }

            return color;
        },

        handlerMainProgressColor2: function(done, tat, day) {
            //console.log(total, done, tat, day);
            let color = "#0E988E";
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;
            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    z = 100;
                }

                z = z.toFixed(2);
            }
            let progress = done;
            //console.log(progress);
            //console.log(z);
            let res = progress/z;
            if(progress == 0) {
                color = "#dc3545";
            }else if(res >= 1) {
                color = "#0E988E";
            }else if(res >= 0.95 && res < 1) {
                color = "#ff9635";
            }else {
                color = "#dc3545";
            }

            //console.log(progress);

            return color;
        },

        handlerProjectPercent: function(tat, day) {
            let x = day == "" ? 0 : day;
            let y = tat == "" ? 0 : tat;
            let z = x / y;

            z = isNaN(z) ? 0 : z;

            if(z > 0) {
                z = (z*100);

                if(z > 100) {
                    z = 100;
                }

                z = z.toFixed(1);
            }
            else{
                z = 0;
            }
            //console.log(tat, day, z);
            return z;
        },

        handlerExportDetailCost: function() {
            this.loading.isLoading = true;
            this.handlerExport(this.datatable2.rows, 'Cost_Details').then(() => {
                this.loading.isLoading = false;
            });
        },

        handlerExportDetailRevenue: function() {
            this.loading.isLoading = true;
            this.handlerExport(this.datatable1.rows, 'Revenue_Details').then(() => {
                this.loading.isLoading = false;
            });
        },

        handlerExport: function(data, name) {
            return new Promise((resolve, reject) => {
                let tmp = XLSX.utils.json_to_sheet(data)                 
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.writeFile(wb, `${this.ac_reg}_${name}_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        }


    }
}
</script>
