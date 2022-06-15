<template>

    <div>
        <transition name="custom-classes-transition"
        enter-active-class="animated slideInRight"
        leave-active-class="animated zoomOut">
            <div class="is-row" v-if="false">
                <div class="is-col is-75">

                    <div class="content-body" style="margin-bottom: 12px; ">
                        <div class="card">
                            <div class="card-header no-border">
                                <div class="title-area">
                                    <h3 class="title">Contract Phase</h3>
                                </div>

                                <!-- <div class="option-box">
                                    <div class="option-item">
                                        <button v-on:click="resetForm()">Reset Filter</button>
                                    </div>
                                </div> -->
                            </div>
                            <div class="card-content">
                                <!--loading
                                :loader="'dots'"
                                :color="'#1976d2'"
                                :width="loading.width"
                                :height="loading.height"
                                :active.sync="loading.isLoading"
                                :can-cancel="loading.cancle"
                                :is-full-page="loading.fullPage"/-->
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px" v-if="false"> Waiting Reschedule Approval
                                    <span class="dot color_danger" style="margin-right: 0px" v-on:click="filterDoc('reschedule_danger')">{{ summary_report.reschedule.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('reschedule_warning')">{{ summary_report.reschedule.warning }}</span>
                                </span>
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px" v-if="summary_report.slot.warning > 0 && summary_report.slot.danger > 0">
                                    Waiting Slot Confirmation
                                    <span class="dot color_danger" style="margin-right: 0px" v-on:click="filterDoc('slot_danger')" v-if="summary_report.slot.danger > 0">{{ summary_report.slot.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('slot_warning')" v-if="summary_report.slot.warning > 0">{{ summary_report.slot.warning }}</span>
                                </span>

                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Need Workscope
                                    <span class="dot color_danger" v-on:click="filterDoc('ws_danger')" style="margin-right: 0px">{{ summary_report.ws.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('ws_warning')">{{ summary_report.ws.warning }}</span>
                                </span>
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Need COGS
                                    <span class="dot color_danger"
                                        style="margin-right: 0px" v-on:click="filterDoc('cogs_danger')">{{ summary_report.cogs.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('cogs_warning')">{{ summary_report.cogs.warning }}</span>
                                </span>
                                <!-- profitability analysis -->
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Need Proposal
                                    <span class="dot color_danger"
                                        style="margin-right: 0px" v-on:click="filterDoc('proposal_danger')">{{ summary_report.proposal.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('proposal_warning')">{{ summary_report.proposal.warning }}</span>
                                </span>
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Profitability Analysis
                                    <span class="dot color_danger"
                                        style="margin-right: 0px" v-on:click="filterDoc('pa_danger')">{{ summary_report.pa.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('pa_warning')">{{ summary_report.pa.warning }}</span>
                                </span>
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Need SOW
                                    <span class="dot color_danger" style="margin-right: 0px" v-on:click="filterDoc('sow_danger')">{{ summary_report.sow.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('sow_warning')">{{ summary_report.sow.warning }}</span>
                                </span>

                            </div>
                        </div>
                    </div>

                    <div class="content-body" style="margin-bottom: 0px; margin-top: 19px">
                        <div class="card">

                            <!--loading
                            :loader="'dots'"
                            :color="'#1976d2'"
                            :width="loading.width"
                            :height="loading.height"
                            :active.sync="loading.isLoading"
                            :can-cancel="loading.cancle"
                            :is-full-page="loading.fullPage"></loading-->

                            <div class="card-header no-border">
                                <div class="title-area">
                                    <h3 class="title">Layover Phase</h3>
                                </div>

                                <!-- <div class="option-box">
                                    <div class="option-item">
                                        <button v-on:click="resetForm()">Reset Filter</button>
                                    </div>
                                </div> -->
                            </div>
                            <div class="card-content">
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting WBS
                                    <span class="dot color_danger" style="margin-right: 0px" v-on:click="filterDoc('wbs_danger')">{{ summary_report.wbs.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('wbs_warning')">{{ summary_report.wbs.warning }}</span>
                                </span>
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting Revision
                                    <span class="dot color_danger" style="margin-right: 0px" v-on:click="filterDoc('rev_danger')">{{ summary_report.rev.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('rev_warning')">{{ summary_report.rev.warning }}</span>
                                </span>

                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting SO
                                    <span class="dot color_danger" style="margin-right: 0px" v-on:click="filterDoc('so_danger')">{{ summary_report.so.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('so_warning')">{{ summary_report.so.warning }}</span>
                                </span>

                                <!-- <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting BoM-BotT
                                    <span class="dot color_danger" style="margin-right: 0px">12</span>
                                    <span class="dot color_warning">10</span>
                                </span> -->
                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting Gantt Chart
                                    <span class="dot color_danger" v-on:click="filterDoc('gantt_danger')" style="margin-right: 0px">{{ summary_report.gantt.danger }}</span>
                                    <span class="dot color_warning" v-on:click="filterDoc('gantt_warning')">{{ summary_report.gantt.warning }}</span>
                                </span>

                                <!-- <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting CQP
                                    <span class="dot color_danger" style="margin-right: 0px">2</span>
                                    <span class="dot color_warning">14</span>
                                </span> -->

                                <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting Project Charter
                                    <span class="dot color_danger" style="margin-right: 0px">{{ summary_report.pcharter.warning }}</span>
                                    <span class="dot color_warning">{{ summary_report.pcharter.warning }}</span>
                                </span>

                                <!-- <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting Project Team
                                    <span class="dot color_danger" style="margin-right: 0px">12</span>
                                    <span class="dot color_warning">10</span>
                                </span> -->

                                <!-- <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting Maintenance Document URL
                                    <span class="dot color_danger" style="margin-right: 0px">12</span>
                                    <span class="dot color_warning">10</span>
                                </span> -->

                                <!-- <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                    Waiting Induction Meeting
                                    <span class="dot color_danger" style="margin-right: 0px">12</span>
                                    <span class="dot color_warning">10</span>
                                </span> -->

                            </div>
                        </div>
                    </div>

                </div>
                <!--div class="is-col is-25">

                    <div class="content-body">
                        <div class="card">
                            <div class="card-content">
                                <div class="form-item">
                                    <label>Airframe Category</label>
                                    <select @change="liveSearch" v-model="table.serverParams.airframe_category">
                                        <option value="all" selected>All</option>
                                        <option value="Narrow Body">Narrow Body</option>
                                        <option value="Wide Body">Wide Body</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div-->
            </div>
        </transition>


        <div class="content-body">
            <div class="is-row" style="width: auto; display: block;">
                <div class="is-col">
                    <div class="card">
                        <div class="card-header bb">
                            <div class="title-area">
                                <h3 class="title">Project List
                                    <span class="button is-secondary is-default" style="color: black" v-if="dashboard_show2" v-on:click="dashboard_show2 = false"> Hide Dashboard</span>
                                    <span class="button is-secondary is-default" style="color: black" v-else v-on:click="dashboard_show2 = true"> Show Dashboard</span>
                                    <span class="button is-secondary is-default" style="color: black" v-if="dashboard_show" v-on:click="dashboard_show = false"> Hide Filters</span>
                                    <span class="button is-secondary is-default" style="color: black" v-else v-on:click="dashboard_show = true"> Show Filters</span>
                                </h3>
                            </div>
                            <div class="option-box" style="text-align:left;">
                                <div class="option-item">
                                </div>
                                <!--div class="option-item">
                                    <span style="white-space: nowrap; padding-right: 10px;"><b>A/C Reg</b></span>
                                    <multiselect
                                        v-model="table.serverParams.col_ac_regs"
                                        tag-placeholder="Add this as new tag"
                                        placeholder="Type and enter"
                                        :options="options_ac"
                                        :multiple="true"
                                        :taggable="true"
                                        label="ac_reg"
                                        track-by="ac_reg"
                                        @tag="addTag"
                                        style="min-width: 250px;"
                                    >
                                    </multiselect>
                                </div>
                                <div class="option-item">
                                    <button v-on:click="liveSearch()">
                                        <i class="material-icons">filter_list</i>
                                        Filter
                                    </button>
                                </div-->
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="is-row" style="width: auto; display: block;">
                                <div class="is-col">

                                    <!--loading
                                    :loader="'dots'"
                                    :color="'#1976d2'"
                                    :width="loading.width"
                                    :height="loading.height"
                                    :active.sync="loading.isLoading"
                                    :can-cancel="loading.cancle"
                                    :is-full-page="loading.fullPage"></loading-->

                                    <!--<div class="card" style="margin-bottom: 12px" v-show="1 == 2">
                                        <div class="card-header no-border">
                                            <div class="title-area">
                                                <h3 class="title">Active Filter(s)</h3>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            <span class="label mini_db" v-show="table.serverParams.searchTerm" style="padding-top: 2px; padding-bottom: 2px;">
                                                Search Query:
                                                <strong>{{ table.serverParams.searchTerm }}</strong>
                                            </span>
                                            <span class="label mini_db" v-show="table.serverParams.airframe_category != 'all'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Airframe Category: <strong>{{ table.serverParams.airframe_category }}</strong>
                                            </span>
                                            <span class="label mini_db" v-show="table.serverParams.customer_category != 'all'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Customer Category:
                                                <strong v-if="table.serverParams.customer_category == 'GA'">Garuda Indonesia</strong>
                                                <strong v-else>Non Garuda Indonesia</strong>
                                            </span>
                                            <span class="label mini_db" v-show="table.serverParams.project_status != 'all'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Project Status:
                                                <strong v-if="table.serverParams.project_status == 0">Open Revision Sales</strong>
                                                <strong v-if="table.serverParams.project_status == 1">On Progress Sales</strong>
                                                <strong v-if="table.serverParams.project_status == 2">Cancelled Sales</strong>
                                                <strong v-if="table.serverParams.project_status == 3">Closed Sales</strong>
                                                <strong v-if="table.serverParams.project_status == 4">Waiting Sales</strong>
                                                <strong v-if="table.serverParams.project_status == 'CRTD'">Created Revision</strong>
                                                <strong v-if="table.serverParams.project_status == 'CLSD'">Closed Revision</strong>
                                            </span>

                                            <span class="label mini_db" v-show="table.serverParams.doc_type != 'all'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Project Status:
                                                <strong>{{ table.serverParams.doc_type }}</strong>
                                            </span>

                                            <span class="label mini_db" v-show="table.serverParams.report != 'all'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Report Status:
                                                <strong>{{ table.serverParams.report }}</strong>
                                            </span>

                                            <span class="label mini_db" v-show="table.serverParams.level != 'all'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Level:
                                                <strong>{{ table.serverParams.level }}</strong>
                                            </span>

                                            <span class="label mini_db" v-show="table.serverParams.location != 'all'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Location:
                                                <strong>{{ table.serverParams.location }}</strong>
                                            </span>

                                            <span class="label mini_db" v-show="table.serverParams.is_show != 'y'" style="padding-top: 2px; padding-bottom: 2px;">
                                                Show Hidden:
                                                <strong>{{ table.serverParams.is_show == 'n' ? 'y' : 'n' }}</strong>
                                            </span>
                                        </div>
                                    </div>-->
                                    <transition name="fade">
                                    <div v-if="dashboard_show" class="card" style="margin-bottom: 12px">
                                        <div class="card-header no-border">
                                            <div class="title-area">
                                                <h3 class="title">Filters</h3>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                             <div class="is-row">
                                                <div class="is-col is-10" style="background-color: #f3f4f8;">
                                                    <label>Hangar</label>
                                                    <select class="by_timeframe" v-model="table.serverParams.location" @change="liveSearch('hgr')">
                                                        <option value="all">-- Location --</option>
                                                        <option v-bind:value="h.id" v-for="h in hangar" :key="h.id">{{ h.name }}</option>
                                                    </select>
                                                </div>
                                                <div class="is-col is-10" style="background-color: #f3f4f8;">
                                                    <label>Line</label>
                                                    <span v-show="table.serverParams.location != 'all'">
                                                        <select class="by_timeframe" v-model="table.serverParams.line" @change="liveSearch">
                                                            <option value="all" selected>-- Line --</option>
                                                            <option v-bind:value="l.id" v-for="l in line" :key="l.id">{{ l.line_name }}</option>
                                                        </select>
                                                    </span>
                                                </div>                                                  
                                               <div class="is-col is-20" style="background-color: #f3f4f8;">
                                                    <label>Start Date Interval</label>
                                                    <div class="is-row">
                                                        <div class="is-col is-50">
                                                            <input type="date" class="by_timeframe" v-model="table.serverParams.start_date" @change="liveSearch('date')">
                                                        </div>
                                                        <div class="is-col is-50">
                                                            <input type="date" class="by_timeframe" v-model="table.serverParams.end_date" @change="liveSearch('date')">
                                                        </div>
                                                    </div>
                                                </div>
                                                <span style="padding-left:20px;">
                                                    <label>Logic</label>
                                                    <select class="by_timeframe" v-model="table.serverParams.interval_logic" @change="liveSearch">
                                                        <option value="OR">OR</option>
                                                        <option value="AND">AND</option>
                                                    </select>
                                                </span>
                                                <div class="is-col is-20" style="background-color: #f3f4f8;">
                                                    <label>Finish Date Interval</label>
                                                    <div class="is-row">
                                                        <div class="is-col is-50">
                                                            <input type="date" class="by_timeframe" v-model="table.serverParams.start_date2" @change="liveSearch('date')">
                                                        </div>
                                                        <div class="is-col is-50">
                                                            <input type="date" class="by_timeframe" v-model="table.serverParams.end_date2" @change="liveSearch('date')">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="is-col is-10" style="background-color: #f3f4f8;"> 
                                                    <div class="form-item">
                                                        <label>Customer Category</label>
                                                        <select @change="liveSearch" v-model="table.serverParams.customer_category">
                                                            <option value="all" selected>All</option>
                                                            <option value="GA">GA</option>
                                                            <option value="NGA">NGA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="is-col is-10" style="background-color: #f3f4f8;"> 
                                                    <div class="form-item">
                                                        <label>Show/Hide</label>
                                                        <select @change="liveSearch" v-model="table.serverParams.is_show">
                                                            <option value="y">Shown Projects</option>
                                                            <option value="n">Hidden Projects</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="is-col is-10">
                                                        <button v-if="is_filtered" class="button is-warning" style="background-color: #fbc02d; color: white" v-on:click="resetForm"><i class='material-icons'>sort</i> Reset Filter</button>
                                                </div>
                                                <div class="is-col is-10">                                          
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                    </transition>

                                    <transition name="fade">
                                    <div v-show="dashboard_show2" class="is-row"> 
                                        <div class="is-col is-20">
                                            <div class="card salesopenbackground" 
                                                v-on:click="db_filter_param('salesopen','NGA','')"
                                            >
                                                <div class="card-header no-border">
                                                    <div class="title-area">
                                                        <h3 class="title" style="color:#ff7592;">Sales Open</h3>
                                                    </div>
                                                </div>
                                                <div class="is-row" style="color:#ffe7ec; position: relative;">
                                                    <loading
                                                            :active.sync="dbsalesloading.isLoading" 
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="dbsalesloading.color"
                                                            :loader="dbsalesloading.loaderType"
                                                            transition="bounce">
                                                    </loading>                                                    
                                                    <div class="is-col is-80">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#ff7592">
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-30" style="font-size:19px; font-weight:bold;">
                                                                            {{mini_db.salesopen.nga}}
                                                                        </div>
                                                                        <div class="is-col is-70" style="line-height:100%;">
                                                                            NGA
                                                                            <span>Projects</span>
                                                                            Level 1
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="is-col is-20">
                                                    </div>                                                    
                                                </div>
                                                <div class="card-footer" v-show="mini_db.salesopen.unlinked>0" v-on:click.stop="db_filter_param('salesopen','NGA','unlinked')">
                                                    <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                                        <div class="is-row" style="margin-bottom: 3px;">
                                                            <div class="is-col is-10">
                                                                <!--i class='material-icons' style="color:orange;">warning</i-->
                                                                <span class="dot_mini_db" style="padding-top:0px;">{{mini_db.salesopen.unlinked}}</span>
                                                                
                                                            </div>
                                                            <div class="is-col is-90" style="padding-top: 5px;">
                                                                projects need to be assigned to the sap-swift revision number
                                                                <!--projects data from GSMART need to be linked with sap-swift's work-package (revision) number-->
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="is-col is-20">
                                            <div class="card preparedbackground" 
                                                v-on:click="db_filter_param('prepared','all','')" 
                                            >                                            
                                                <div class="card-header no-border">
                                                    <div class="title-area">
                                                        <h3 class="title" style="color:#0fa3b1">Prepared</h3>
                                                    </div>
                                                </div>
                                                <div class="is-row" style="color:#d8fcff; position: relative;">
                                                    <loading
                                                            :active.sync="dbpreparedloading.isLoading" 
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="dbpreparedloading.color"
                                                            :loader="dbpreparedloading.loaderType">
                                                    </loading>                                                    
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#0fa3b1;" v-on:click.stop="db_filter_param('prepared','NGA','')">
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                            {{mini_db.prepared.nga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            NGA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#0fa3b1;" v-on:click.stop="db_filter_param('prepared','GA','')">
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                            {{mini_db.prepared.ga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            GA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div class="card-footer" v-show="mini_db.prepared.unlinked>0" v-on:click.stop="db_filter_param('prepared','NGA','unlinked')">
                                                    <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                                        <div class="is-row" style="margin-bottom: 3px;">
                                                            <div class="is-col is-10">
                                                                <!--i class='material-icons' style="color:orange;">warning</i-->
                                                                <span class="dot_mini_db" style="padding-top:0px;">{{mini_db.prepared.unlinked}}</span>
                                                                
                                                            </div>
                                                            <div class="is-col is-90" style="padding-top: 5px;">
                                                                projects not linked with sales plan data from gsmart
                                                                <!--projects data from GSMART need to be linked with sap-swift's work-package (revision) number-->
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>                                         

                                        <div class="is-col is-20">
                                            <div class="card progressbackground" 
                                                v-on:click="db_filter_param('progress','all','')" 
                                            > 
                                                <div class="card-header no-border">
                                                    <div class="title-area">
                                                        <h3 class="title" style="color:#dba56b">Progress</h3>
                                                    </div>
                                                </div>
                                                <div class="is-row" style="color:#be7f3d; position: relative;">
                                                    <loading
                                                            :active.sync="dbprogressloading.isLoading" 
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="dbprogressloading.color"
                                                            :loader="dbprogressloading.loaderType">
                                                    </loading>                                                    
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#dbbb6b;" v-on:click.stop="db_filter_param('progress','NGA','')">
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                             {{mini_db.progress.nga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            NGA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#dbbb6b;" v-on:click.stop="db_filter_param('progress','GA','')">
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                             {{mini_db.progress.ga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            GA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div class="card-footer" v-show="mini_db.progress.unlinked>0" v-on:click.stop="db_filter_param('progress','NGA','unlinked')">
                                                    <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                                        <div class="is-row" style="margin-bottom: 3px;">
                                                            <div class="is-col is-10">
                                                                <!--i class='material-icons' style="color:orange;">warning</i-->
                                                                <span class="dot_mini_db" style="padding-top:0px;"> {{mini_db.progress.unlinked}}</span>
                                                                
                                                            </div>
                                                            <div class="is-col is-90" style="padding-top: 5px;">
                                                                projects not linked with sales plan data from gsmart
                                                                <!--projects data from GSMART need to be linked with sap-swift's work-package (revision) number-->
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="is-col is-20">
                                            <div class="card parkingbackground" 
                                            v-on:click="db_filter_param('parking','all','')" 
                                            >                                             
                                                <div class="card-header no-border">
                                                    <div class="title-area">
                                                        <h3 class="title" style="color:#564d65">Parking/Freeze</h3>
                                                    </div>
                                                </div>
                                                <div class="is-row" style="color:#cfc0e9; position: relative;">
                                                    <loading
                                                            :active.sync="dbparkingloading.isLoading" 
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="dbparkingloading.color"
                                                            :loader="dbparkingloading.loaderType">
                                                    </loading>                                                    
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#564d65;" v-on:click.stop="db_filter_param('parking','NGA','')" >
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                            {{mini_db.parking.nga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            NGA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#564d65;" v-on:click.stop="db_filter_param('parking','GA','')" >
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                            {{mini_db.parking.ga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            GA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div class="card-footer" v-show="mini_db.parking.unlinked>0" v-on:click.stop="db_filter_param('parking','NGA','unlinked')">
                                                    <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                                        <div class="is-row" style="margin-bottom: 3px;">
                                                            <div class="is-col is-10">
                                                                <!--i class='material-icons' style="color:orange;">warning</i-->
                                                                <span class="dot_mini_db" style="padding-top:0px;">{{mini_db.parking.unlinked}}</span>
                                                                
                                                            </div>
                                                            <div class="is-col is-90" style="padding-top: 5px;">
                                                                projects not linked with sales plan data from gsmart
                                                                <!--projects data from GSMART need to be linked with sap-swift's work-package (revision) number-->
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="is-col is-20">
                                            <div class="card releasedbackground" 
                                            >                                            
                                                <div class="card-header no-border">
                                                    <div class="title-area">
                                                        <h3 class="title" style="color: #2cda9d;">Released</h3>
                                                    </div>
                                                </div>
                                                <div class="is-row" style="color:#ebfff8; position:relative;" >
                                                    <loading
                                                            :active.sync="dbreleasedloading.isLoading" 
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="dbreleasedloading.color"
                                                            :loader="dbreleasedloading.loaderType">
                                                    </loading>
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#2cda9d;"  v-on:click.stop="db_filter_param('released','NGA','')" >
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                            {{mini_db.released.nga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            NGA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="is-col is-50">
                                                        <div class="card-content">
                                                            <div class="card btn btn-primary" style="background-color:#2cda9d;"  v-on:click.stop="db_filter_param('released','GA','')" >
                                                                <div class="card-content">
                                                                    <div class="is-row" style="margin-bottom: 0px;">
                                                                        <div class="is-col is-60" style="font-size:19px; font-weight:bold;">
                                                                            {{mini_db.released.ga}}
                                                                        </div>
                                                                        <div class="is-col is-40" style="line-height:100%;">
                                                                            GA
                                                                            <span style="font-size:10px;">Projects</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>                                                    
                                                </div>
                                                <div class="card-footer" v-show="mini_db.released.unlinked>0" v-on:click.stop="db_filter_param('released','NGA','unlinked')">
                                                    <span class="label mini_db" style="padding-top: 2px; padding-bottom: 2px">
                                                        <div class="is-row" style="margin-bottom: 3px;">
                                                            <div class="is-col is-10">
                                                                <!--i class='material-icons' style="color:orange;">warning</i-->
                                                                <span class="dot_mini_db" style="padding-top:0px;">{{mini_db.released.unlinked}}</span>
                                                                
                                                            </div>
                                                            <div class="is-col is-90" style="padding-top: 5px;">
                                                                projects not linked with sales plan data from gsmart
                                                                <!--projects data from GSMART need to be linked with sap-swift's work-package (revision) number-->
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>                                                                                                                      
                                    </div>
                                    </transition>
                                    <div style="position:relative">

                                     <loading
                                            :active.sync="loading.isLoading" 
                                            :can-cancel="false"
                                            :is-full-page="false"
                                            :color="loading.color"
                                            :loader="loading.loaderType">
                                    </loading>

                                    <vue-good-table
                                        ref="tablePlanningGate"
                                        :row-style-class="rowStyleClassFn"
                                        :line-numbers="true"
                                        :columns="table.fields"
                                        :rows="table.rows"
                                        max-height="90vh"
                                        mode="remote"
                                        :select-options="{ enabled: true, selectOnCheckboxOnly: true }"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'enter',
                                            skipDiacritics: true,
                                            placeholder: 'Type and enter to search'
                                        }"
                                        @on-selected-rows-change="selectionChanged"
                                        @on-search="onColumnSearch"
                                        @on-page-change="onPageChange"
                                        @on-sort-change="onSortChange"
                                        @on-column-filter="onColumnFilter"
                                        @on-per-page-change="onPerPageChange"

                                        :totalRows="table.totalRows"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'pages',
                                            perPage: table.serverParams.perPage,
                                            position: 'bottom',
                                            perPageDropdown:  table.perPageDropDown,
                                            dropdownAllowAll: false,
                                            setCurrentPage: table.serverParams.page,
                                            nextLabel: 'Next',
                                            prevLabel: 'Prev',
                                            rowsPerPageLabel: 'Rows per page',
                                            ofLabel: 'of',
                                            pageLabel: 'page', // for 'pages' mode
                                            allLabel: 'All',
                                        }"
                                        styleClass="vgt-table condensed pgTble">




                                        <div slot="table-actions">
                                            <div class="toolbar toolbar-default">
                                                <div class="toolbar-left">
                                                    <!--div class="toolbar-item" v-if="grantAccess">
                                                        <button class="button is-primary" v-on:click="addProjectModal">
                                                            <i class='material-icons'>add_circle_outline</i>
                                                            Add
                                                        </button>
                                                    </div-->
                                                    <!--div class="toolbar-item">
                                                        <button class="button is-primary" style="background-color: white; color: black" v-if="dashboard_show2" v-on:click="dashboard_show2 = false"> Hide Dashboard</button>
                                                        <button class="button is-success" style="background-color: white; color: black" v-else v-on:click="dashboard_show2 = true"> Show Dashboard</button>
                                                    </div>                                                    
                                                    <div class="toolbar-item">
                                                        <button class="button is-primary" style="background-color: white; color: black" v-if="dashboard_show" v-on:click="dashboard_show = false"> Hide Filter(s)</button>
                                                        <button class="button is-success" style="background-color: white; color: black" v-else v-on:click="dashboard_show = true"> Show Filter(s)</button>
                                                    </div-->
                                                    <div class="toolbar-item" v-if="grantAccess">
                                                        <button class="button is-success" v-on:click="syncModal">
                                                            <i class='material-icons'>sync</i>
                                                            Sync
                                                        </button>
                                                    </div>
                                                    <div class="toolbar-item">
                                                    </div>
                        
                                                </div>
                                            </div>
                                        </div>

                                        <template slot="table-row" style="background-color: #c5e1a5" :doc_due_date="doc_due_date" slot-scope="props">
                                            <span v-if="props.column.field == 'report'">
                                                <input type="checkbox" class="switch unset" @change="changeReport(props.row)" true-value="y" false-value="n" v-model="props.row.report">
                                            </span>
                                            <span v-if="props.column.field == 'flag'">
                                                {{ props.row.flag }}
                                            </span>
                                            <span
                                                v-else-if="props.column.field == 'sapstatus' && props.row.flag == 'C'">
                                                {{props.row.status}}
                                            </span>
                                            <span v-else-if="props.column.field == 'status'">
                                                <span :style="`cursor: ${grantAccess ? 'pointer' : 'unset'}`"  v-on:click="grantAccess ? handlerModalStatus(props.row) : ''">
                                                    <span class="is-label is-danger" v-if="props.row.custom_status == 'Sales Open'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-danger" v-if="props.row.custom_status == 'Sales Progress'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-success" v-if="props.row.custom_status == 'Sales Cancel'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-success" v-if="props.row.custom_status == 'Sales Closed'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-danger" v-if="props.row.custom_status == 'Sales Wait'">{{props.row.custom_status}}</span>

                                                    <span class="is-label is-danger" v-if="props.row.custom_status == 'Prepared'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-warning" v-if="props.row.custom_status == 'Progress'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-success" v-if="props.row.custom_status == 'Released'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-warning" v-if="props.row.custom_status == 'Freeze'">{{props.row.custom_status}}</span>
                                                    <span class="is-label is-warning" v-if="props.row.custom_status == 'Parking'">{{props.row.custom_status}}</span>
                                                </span>

                                            </span>
                                            <span v-else-if="props.column.field == 'customer'">
                                                {{ props.row.customer }}
                                            </span>
                                            <span v-else-if="props.column.field == 'slot_confirmation'">
                                                <span class="is-label is-success"
                                                    v-if="props.row.hangar_id && props.row.line_id">
                                                    <span class="clickable" v-on:click="hangarLineModal(props.row)">
                                                        {{ props.row.hangar.name }} - {{ props.row.line.line_name }}
                                                    </span>
                                                </span>
                                                <div v-else>
                                                    <span class="dot color_danger"
                                                        v-if="parseInt(props.row.difference) < doc_due_date.hgr_danger"
                                                        v-on:click="hangarLineModal(props.row)"></span>
                                                    <span class="dot color_warning"
                                                        v-if="parseInt(props.row.difference) <= doc_due_date.hgr_warning  && parseInt(props.row.difference) >= doc_due_date.hgr_danger"
                                                        v-on:click="hangarLineModal(props.row)"></span>
                                                    <span class="dot color_empty"
                                                        v-if="parseInt(props.row.difference) > doc_due_date.hgr_warning"
                                                        v-on:click="hangarLineModal(props.row)"></span>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'lvl'">
                                                <span class="clickable" v-on:click="changeLevel(props.row)">
                                                    {{ props.row.lvl }}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'gsmart_id'">
                                                <div v-if="props.row.gsmart_id">
                                                    <span class="">{{ props.row.gsmart_id }}</span>
                                                </div>
                                                <div v-else>
                                                    
                                                    <span class="dot color_danger" v-if="parseInt(props.row.difference) < parseInt(doc_due_date.ws_danger) && !props.row.ac_reg.startsWith('PK-G')"></span>
                                                    <span class="dot color_warning" v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.ws_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.ws_danger) && !props.row.ac_reg.startsWith('PK-G')"></span>
                                                    <span class="dot color_empty" v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.ws_warning)"></span>
                                                    <span class="dot color_empty" v-else></span>
                                                </div>
                                            </span>

                                            <span
                                                v-else-if="props.column.field == 'ac_type'" v-on:click="handlerCheckAircraft(props.row)">
                                                <span v-if="props.row.crm_id  && props.row.ac_type == ''">
                                                    <span class="is-label is-warning">
                                                        n/a
                                                    </span>
                                                </span>
                                            <span v-else>
                                                {{ props.row.ac_type }}
                                                </span>
                                            </span>
                                            <span
                                                v-else-if="props.column.field == 'ac_reg'">
                                                <span v-if="props.row.flag=='C'" class="is-label is-success" style="cursor: pointer; color: black;" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: props.row.pg_id, type: 'hangar'}})">
                                                    {{props.row.ac_reg}}
                                                </span>
                                                <span v-else>
                                                    {{ props.row.ac_reg}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'ams_text'">
                                                <span class="clickable" v-on:click="changeAms(props.row)">
                                                        <span v-if="props.row.ams_text" class="is-label is-new_date">
                                                            {{ props.row.ams_text | strToName }}
                                                        </span>
                                                        <span v-else>
                                                            <span class="is-label is-danger" v-if="grantAccess">Edit AMS</span>
                                                        </span>
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'main_type'">
                                                {{ props.row.main_type }}
                                            </span>
                                            <span v-else-if="props.column.field == 'start_date'">
                                                <span class="clickable" v-if="props.row.flag=='G'">
                                                    <span v-if="props.row.start_date_new" class="is-label is-new_date">{{ props.row.start_date_new }}</span>
                                                    <span v-else>{{ props.row.start_date }}</span>
                                                </span>
                                                <span class="clickable" v-else v-on:click="changeDate(props.row)">
                                                    <span v-if="props.row.start_date_new" class="is-label is-new_date">{{ props.row.start_date_new }}</span>
                                                    <span v-else>{{ props.row.start_date }}</span>
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'end_date'">
                                                <span class="clickable" v-if="props.row.flag=='G'">
                                                    <span v-if="props.row.end_date_new" class="is-label is-new_date">{{ props.row.end_date_new }}</span>
                                                    <span v-else>{{ props.row.end_date }}</span>
                                                </span>
                                                <span class="clickable" v-else v-on:click="changeDate(props.row)">
                                                    <span v-if="props.row.end_date_new" class="is-label is-new_date">{{ props.row.end_date_new }}</span>
                                                    <span v-else>{{ props.row.end_date }}</span>
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'TAT'">
                                                {{ props.row.TAT }}
                                            </span>
                                            <span v-else-if="props.column.field == 'difference'">
                                                <span v-if="parseInt(props.row.difference) == 0">
                                                    <span class="is-label is-danger">NOW</span>
                                                </span>
                                                <span v-else>
                                                    {{ parseInt(props.row.difference) }}
                                                </span>
                                            </span>

                                            <span v-else-if="props.column.field == 'soa'">
                                                <span class="dot color_success" v-if="props.row.soa_total>0" v-on:click="soaModal(props.row)"></span>
                                                <span class="dot color_empty" v-else v-on:click="soaModal(props.row)"></span>
                                            </span>

                                            <span v-else-if="props.column.field == 'project_charter'">
                                                <div v-if="props.row.crm_id">
                                                    <div v-if="props.row.team_total > 0">
                                                        <span class="dot color_success" v-on:click="$router.push({name: 'module2.project.edit', params: {pg_id: props.row.pg_id}})"></span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger"
                                                            v-if="parseInt(props.row.difference) < parseInt(doc_due_date.ws_danger)"
                                                            v-on:click="$router.push({name: 'module2.project.edit', params: {pg_id: props.row.pg_id}})"></span>
                                                        <span class="dot color_warning"
                                                            v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.ws_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.ws_danger)"
                                                            v-on:click="$router.push({name: 'module2.project.edit', params: {pg_id: props.row.pg_id}})"></span>
                                                        <span class="dot color_empty"
                                                            v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.ws_warning)"
                                                            v-on:click="$router.push({name: 'module2.project.edit', params: {pg_id: props.row.pg_id}})"></span>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <!-- <span class="dot color_empty"></span> -->
                                                    <!-- <span class="dot color_empty" v-on:click="$router.push({name: 'module2.project.edit', params: {pg_id: props.row.pg_id}})"></span> -->
                                                </div>
                                            </span>

                                            <span v-else-if="props.column.field == 'gantt'">
                                                <div v-if="props.row.crm_id">
                                                    <div v-if="parseInt(props.row.gantt_total) > 0">
                                                        <span class="dot color_success" v-on:click="handlerCheckAircraftgantt(props.row)"></span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger"
                                                            v-if="parseInt(props.row.difference) < parseInt(doc_due_date.ws_danger)"
                                                            v-on:click="handlerCheckAircraftgantt(props.row)">
                                                        </span>
                                                        <span class="dot color_warning"
                                                            v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.ws_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.ws_danger)"
                                                            v-on:click="handlerCheckAircraftgantt(props.row)"></span>
                                                        <span class="dot color_empty"
                                                            v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.ws_warning)"
                                                            v-on:click="handlerCheckAircraftgantt(props.row)"></span>
                                                    </div>
                                                </div>
                                                <!-- <div v-else> -->
                                                    <!-- <span class="dot color_empty"></span> -->
                                                    <!-- <span class="dot color_empty" v-on:click="$router.push({name: 'module2.project.edit', params: {pg_id: props.row.pg_id}})"></span> -->
                                                <!-- </div> -->
                                            </span>

                                            <span v-else-if="props.column.field == 'ws'">
                                                <div v-if="props.row.gsmart_id">
                                                    <div v-if="Array.isArray(props.row.ws) && parseInt(props.row.ws.length)">
                                                        <span class="dot color_success"
                                                            v-on:click="wsModal(props.row)"></span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger"
                                                            v-if="parseInt(props.row.difference) < parseInt(doc_due_date.ws_danger)"
                                                            v-on:click="wsModal(props.row)"></span>
                                                        <span class="dot color_warning"
                                                            v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.ws_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.ws_danger)"
                                                            v-on:click="wsModal(props.row)"></span>
                                                        <span class="dot color_empty"
                                                            v-else-if="parseInt(parseInt(props.row.difference)) > parseInt(doc_due_date.ws_warning)"
                                                            v-on:click="wsModal(props.row)"></span>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <span class="dot color_empty"></span>
                                                    <!-- <span class="dot color_empty" v-on:click="wsModal(props.row)"></span> -->
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'cogs'">
                                                <div v-if="props.row.gsmart_id">
                                                    <div v-if="Array.isArray(props.row.cogs) && parseInt(props.row.cogs.length)">
                                                        <span class="dot color_success"
                                                            v-on:click="cogsModal(props.row)"></span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger"
                                                            v-if="parseInt(props.row.difference) < parseInt(doc_due_date.cogs_danger)"
                                                            v-on:click="cogsModal(props.row)"></span>
                                                        <span class="dot color_warning"
                                                            v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.cogs_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.cogs_danger)"
                                                            v-on:click="cogsModal(props.row)"></span>
                                                        <span class="dot color_empty"
                                                            v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.cogs_warning)"
                                                            v-on:click="cogsModal(props.row)"></span>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <span class="dot color_empty"></span>
                                                    <!-- <span class="dot color_empty" v-on:click="cogsModal(props.row)"></span> -->
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'prop'">
                                                <div v-if="props.row.gsmart_id">
                                                    <div v-if="Array.isArray(props.row.proposal) && parseInt(props.row.proposal.length)">
                                                        <span class="dot color_success"
                                                            v-on:click="proposalModal(props.row)"></span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger"
                                                            v-if="parseInt(props.row.difference) < parseInt(doc_due_date.prop_danger)"
                                                            v-on:click="proposalModal(props.row)"></span>
                                                        <span class="dot color_warning"
                                                            v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.prop_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.prop_danger)"
                                                            v-on:click="proposalModal(props.row)"></span>
                                                        <span class="dot color_empty"
                                                            v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.prop_warning)"
                                                            v-on:click="proposalModal(props.row)"></span>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <span class="dot color_empty"></span>
                                                    <!-- <span class="dot color_empty" v-on:click="proposalModal(props.row)"></span> -->
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'pa'">
                                                <div v-if="props.row.gsmart_id">
                                                    <div v-if="Array.isArray(props.row.pa) && parseInt(props.row.pa.length)">
                                                        <span class="dot color_success"
                                                            v-on:click="paModal(props.row)"></span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger"
                                                            v-if="parseInt(props.row.difference) < parseInt(doc_due_date.pa_danger)"
                                                            v-on:click="paModal(props.row)"></span>
                                                        <span class="dot color_warning"
                                                            v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.pa_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.pa_danger)"
                                                            v-on:click="paModal(props.row)"></span>
                                                        <span class="dot color_empty"
                                                            v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.pa_warning)"
                                                            v-on:click="paModal(props.row)"></span>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <span class="dot color_empty"></span>
                                                    <!-- <span class="dot color_empty" v-on:click="paModal(props.row)"></span> -->
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'sow'">
                                                <div v-if="props.row.gsmart_id">
                                                    <div v-if="Array.isArray(props.row.sow) && parseInt(props.row.sow.length)">
                                                        <span class="dot color_success"
                                                            v-on:click="sowModal(props.row)"></span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger"
                                                            v-if="parseInt(props.row.difference) < parseInt(doc_due_date.sow_danger)"
                                                            v-on:click="sowModal(props.row)"></span>
                                                        <span class="dot color_warning"
                                                            v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.sow_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.sow_danger)"
                                                            v-on:click="sowModal(props.row)"></span>
                                                        <span class="dot color_empty"
                                                            v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.sow_warning)"
                                                            v-on:click="sowModal(props.row)"></span>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <span class="dot color_empty"></span>
                                                    <!-- <span class="dot color_empty" v-on:click="sowModal(props.row)"></span> -->
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'rev'">
                                                <div v-if="(props.row.flag == 'G' && props.row.level == 1) || props.row.crm_id">
                                                    <div v-if="props.row.crm_id">
                                                        <span v-if="grantAccess && props.row.flag == 'G' && props.row.level == 1" v-on:click="revModal(props.row)" class="clickable">
                                                            {{ props.row.crm_id }}
                                                        </span>
                                                        <span v-else>{{ props.row.crm_id }}</span>
                                                    </div>
                                                    <div v-else>
                                                        <span class="dot color_danger" v-if="parseInt(props.row.difference) < parseInt(doc_due_date.rev_danger)" v-on:click="revModal(props.row)"></span>
                                                        <span class="dot color_warning" v-else-if="parseInt(props.row.difference) <= parseInt(doc_due_date.rev_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.rev_danger)" v-on:click="revModal(props.row)"></span>
                                                        <span class="dot color_empty" v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.rev_warning)" v-on:click="revModal(props.row)"></span>
                                                    </div>
                                                </div>
                                                <div v-else><span class="dot color_empty" v-on:click="revModal(props.row)"></span></div>
                                            </span>
                                            <span v-else-if="props.column.field == 'wbs'">
                                                <div v-if="props.row.wbs">
                                                    <span class="dot color_success"  v-on:click="handlerModalRevision(props.row.wbs, 'wbs', props.row)"></span>
                                                </div>
                                                <div v-else>
                                                    <span v-if="props.row.ac_reg.startsWith('PK-G')"  class="dot color_empty"></span>
                                                    <span v-else-if="props.row.flag=='C' && props.row.custom_status!='Prepared'"  class="dot color_danger"></span>
                                                    <span v-else class="dot color_empty"></span>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'so'">
                                                <div v-if="props.row.so">
                                                    <span class="dot color_success" v-on:click="handlerModalRevision(props.row.so, 'so', props.row)"></span>
                                                </div>
                                                <div v-else>
                                                    <span v-if="props.row.ac_reg.startsWith('PK-G')"  class="dot color_empty"></span>
                                                    <span v-else-if="props.row.flag=='C' && props.row.custom_status!='Prepared'"  class="dot color_danger"></span>
                                                    <span v-else class="dot color_empty"></span>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'reschedule'">
                                                <!-- <div v-if="props.row.gmsart_id"> -->
                                                <span class="dot color_danger" v-if="props.row.reschedule && props.row.reschedule.status == 0 && (parseInt(props.row.difference) < parseInt(doc_due_date.reschedule_danger))"  v-on:click="rescheduleModal(props.row, 'detail')"></span>
                                                <span class="dot color_warning" v-else-if="props.row.reschedule && props.row.reschedule.status == 0 && (parseInt(props.row.difference) <= parseInt(doc_due_date.reschedule_warning)  && parseInt(props.row.difference) >= parseInt(doc_due_date.reschedule_danger))" v-on:click="rescheduleModal(props.row, 'detail')"></span>
                                                <span class="dot color_success" v-else-if="props.row.reschedule && props.row.reschedule.status == 1" v-on:click="rescheduleModal(props.row, 'view')"></span>
                                                <span class="dot color_empty" v-else-if="parseInt(props.row.difference) > parseInt(doc_due_date.reschedule_warning)" v-on:click="rescheduleModal(props.row, 'detail')"></span>
                                                <!-- </div> -->
                                                <!-- <div v-else> -->
                                                    <!-- <span class="dot color_empty"></span> -->
                                                    <!-- <span class="dot color_empty" v-on:click="rescheduleModal(props.row, 'detail')"></span> -->
                                                <!-- </div> -->
                                            </span>

                                            <!-- <span v-if="props.column.field == 'ac_document'">
                                                <span class="dot color_empty" v-if="props.row.ac_document == null || props.row.ac_document == ''" v-on:click="sharepointModal(props.row, 'detail')"></span>
                                                <span class="dot color_success" v-else v-on:click="sharepointModal(props.row, 'view')"></span>
                                            </span> -->

                                            <!-- <span v-if="props.column.field == 'pg_document'">
                                                <span class="dot color_empty" v-if="props.row.pg_document == null || props.row.pg_document == ''" v-on:click="sharepointModal(props.row, 'detail')"></span>
                                                <span class="dot color_success" v-else v-on:click="sharepointModal(props.row, 'view')"></span>
                                            </span> -->

                                            <span v-else-if="props.column.field == 'doc1'">
                                                <span class="dot color_success" v-if="props.row.final_ws_document != null && props.row.final_ws_document != ''" v-on:click="doc1Modal(props.row, 'view')"></span>
                                                <span v-else-if="props.row.ac_reg.startsWith('PK-G')"  class="dot color_empty"></span>
                                                <span v-else-if="props.row.flag=='C' && props.row.custom_status!='Prepared'"  class="dot color_danger" v-on:click="doc1Modal(props.row, 'detail')"></span>
                                                <span v-else class="dot color_empty" v-on:click="doc1Modal(props.row, 'detail')"></span>
                                            </span>

                                            <span v-else-if="props.column.field == 'doc2'">
                                                <span class="dot color_success" v-if="(props.row.ac_document != null && props.row.ac_document != '') || (props.row.pg_document != null && props.row.pg_document != '')" v-on:click="doc2Modal(props.row, 'view')"></span>
                                                <span v-else-if="props.row.ac_reg.startsWith('PK-G')"  class="dot color_empty"></span>
                                                <span v-else-if="props.row.flag=='C' && props.row.custom_status!='Prepared'"  class="dot color_danger" v-on:click="doc2Modal(props.row, 'detail')"></span>
                                                <span v-else class="dot color_empty" v-on:click="doc2Modal(props.row, 'detail')"></span>                                                
                                            </span>

                                            <span v-else-if="props.column.field == 'available_date'">
                                                <span class="dot" :class="availableDateClass(props.row)" v-on:click="availableDateModal(props.row, 'view')"></span>
                                                <!-- <span class="dot color_success" v-else v-on:click="availableDateModal(props.row, 'view')"></span> -->
                                            </span>

                                            <span v-else-if="props.column.field == 'timeline'">
                                                <button class="clickable" style="display: unset; line-height: 20px; margin-right: 10px" v-on:click="$router.push({ name: 'module1.planning_gates.timeline', params: {pg_id: props.row.pg_id} })">History</button>
                                                <!-- <span class="clickable" v-on:click="$router.push({ name: 'module1.planning_gates.timeline', params: {pg_id: props.row.pg_id} })">History</span> -->
                                                <!-- <span class="dot color_success" v-else v-on:click="availableDateModal(props.row, 'view')"></span> -->
                                            </span>

                                            <!-- <span v-if="props.column.field == 'final_ws_document'">
                                                <span class="dot color_empty" v-if="props.row.final_ws_document == null || props.row.final_ws_document == ''" v-on:click="sharepointModal(props.row, 'detail')"></span>
                                                <span class="dot color_success" v-else v-on:click="sharepointModal(props.row, 'view')"></span>
                                            </span> -->

                                            <span v-else-if="props.column.field == 'remark'">

                                            </span>
                                            <span v-else-if="props.column.field == 'action'">

                                                <span class="dropdown">
                                                    <button class="btn btn-primary dropdown-toggle" style="display: unset; line-height: 20px" type="button" data-toggle="dropdown">
                                                        Notification
                                                        <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li v-for="notif in notifications" :key="notif.id">
                                                            <a class="clickable" v-on:click="notificationAction($event, notif, props.row.id)">{{ notif.description }}</a>
                                                        </li>
                                                    </ul>
                                                </span>
                                                <span v-if="grantAccess && props.row.flag==='X'">
                                                    <button  class="clickable" style="display: unset; line-height: 20px; margin-right: 10px; background: #f93232;" v-on:click="handlerDeletePG(props.row.id)">Delete</button>
                                                </span>


                                                <!-- <button data-kube="dropdown" :data-target="'#dropdown-'+props.row.pg_id" style="display: unset; line-height: 18px">Edit</button>

                                                <div :id="'dropdown-'+props.row.pg_id" class="dropdown is-hidden">
                                                    <a href="#">Item {{ props.row.pg_id }}</a>

                                                    // active state
                                                    <a href="#" class="is-active">Item 2</a>

                                                    // separating line
                                                    <a href="#" class="is-separator">Item 3</a>
                                                    <a href="#">Item 4</a>
                                                </div> -->

                                            </span>

                                            <span v-else-if="props.column.field == 'bom'">
                                                <span class="dot color_success" v-if="props.row.bom_total>0"></span>
                                                <span class="dot color_empty" v-else></span>
                                            </span>
                                            <span v-else-if="props.column.field == 'bot'">
                                                <span class="dot color_success" v-if="props.row.bot_total>0"></span>
                                                <span class="dot color_empty" v-else></span>
                                            </span>
                                            <span v-else-if="props.column.field == 'ind'">
                                                <span class="dot color_success" v-if="props.row.ind_total>0"></span>
                                                <span v-if="props.row.ac_reg.startsWith('PK-G')"  class="dot color_empty"></span>
                                                <span v-else-if="props.row.flag=='C' && props.row.custom_status!='Prepared'"  class="dot color_danger"></span>
                                                <span v-else class="dot color_empty"></span>
                                            </span>
                                            <span v-else-if="props.column.field == 'csf'">
                                                <span class="dot color_success" v-if="props.row.csf_total>0"></span>
                                                <span class="dot color_empty" v-else></span>
                                            </span>  
                                            <span v-else-if="props.column.field == 'ppr'">
                                                <span class="dot color_success" v-if="props.row.ppr_total>0"></span>
                                                <span class="dot color_empty" v-else></span>
                                            </span>                                                                                                                                  
                                        </template>
                                        <div slot="selected-row-actions">
                                            <button v-if="grantAccess" v-on:click="massUnhideProject"><i class='material-icons'>visibility_on</i>Un-hide {{ this.table.selectedRows.length }} Selected</button>
                                            <button v-if="grantAccess" v-on:click="massHideProject"><i class='material-icons'>visibility_off</i> Hide {{ this.table.selectedRows.length }} Selected</button>
                                            <button v-if="grantAccess" v-on:click="massEnableReport" class="is-success"><i class='material-icons'>check</i> Enable {{ this.table.selectedRows.length }} Selected</button>
                                            <button v-if="grantAccess" v-on:click="massDisableReport" class="is-success"><i class='material-icons'>close</i> Disable {{ this.table.selectedRows.length }} Selected</button>
                                        </div>
                                    </vue-good-table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <!-- Sync By Rev -->
        <div class="modal-box" id="sync_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('sync_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Sync By Revision Number</h2>
                </div>
                <form v-on:submit.prevent="sycnByRev">
                    <div class="modal-body">
                        <div class="is-row">
                            <div class="is-col is-100">
                                <div class="form_padding">
                                    <label>Rev Number</label>
                                    <input type="text" placeholder="Input with Revision Number">
                                </div>
                            </div>
                        </div>

                        <div class="is-row">
                            <div class="is-col is-100">
                                <hr>
                                ok
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <a href="javascript:void(0)" class="button is-primary is-default cancel"
                            v-on:click="hideModal('sync_modal')">Cancel</a>
                        <button class="button is-loading" disabled v-if="loading.button_processing">Processing...</button>
                        <button class="button is-primary is-success" v-else type="submit"><i class="material-icons">check</i>
                            Sync Now</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- / Sync By Rev -->


        <!-- Add Project Modal -->
        <div class="modal-box" id="add_project_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('add_project_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Add Project / Planning Gate</h2>
                </div>
                <form v-on:submit.prevent="saveProject">
                    <div class="modal-body">
                        <div class="is-row">
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>Hangar</label>
                                    <select v-model="modal.add_project.hangar_id" @change="setLineWithHangarId(modal.add_project.hangar_id)">
                                        <option value="" selected disabled>All Hangar</option>
                                        <option v-bind:value="h.id" v-for="h in hangar" :key="h.id">{{ h.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>Line</label>
                                    <select v-model="modal.add_project.line_id">
                                        <option value="" selected disabled>All Line</option>
                                        <option v-bind:value="l.id" v-for="l in line" :key="l.id">{{ l.line_name }} - {{ l.description }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="is-row">
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>Aircraft Type</label>
                                    <input style="width: 100%;" v-model="modal.add_project.ac_type" placeholder="Please input Aircraft Type" type="text">
                                </div>
                            </div>
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>Aircraft Reg</label>
                                    <input style="width: 100%;" v-model="modal.add_project.ac_reg" placeholder="Please input Aircraft Registration" type="text">
                                </div>
                            </div>
                        </div>

                        <div class="form_padding">
                            <label>Maintenance Type</label>
                            <input type="text" placeholder="Please input Maintenance Type" v-model="modal.add_project.main_type" style="width: 100%">
                        </div>

                        <div class="form_padding">
                            <label>AMS</label>
                            <input type="text" v-model="modal.add_project.ams" placeholder="Please input AMS name" style="width: 100%">
                        </div>

                        <div class="is-row">
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>Level</label>
                                    <select v-model="modal.add_project.level">
                                        <option value="" selected disabled>-- Select Level --</option>
                                        <option value="1">Level 1</option>
                                        <option value="2">Level 2</option>
                                        <option value="3">Level 3</option>
                                        <!-- <option value="4">Level 4</option> -->
                                    </select>
                                </div>
                            </div>
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>Airframe Category</label>
                                    <select v-model="modal.add_project.airframe_cat">
                                        <option value="" selected disabled>-- Select Airframe Category --</option>
                                        <option value="Narrow Body">Narrow Body</option>
                                        <option value="Wide Body">Wide Body</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="is-row">
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>Start Date</label>
                                    <input style="width: 100%;" v-model="modal.add_project.start_date" placeholder="Please input Start Date" type="date">
                                </div>
                            </div>
                            <div class="is-col is-50">
                                <div class="form_padding">
                                    <label>End Date</label>
                                    <input style="width: 100%;" v-model="modal.add_project.end_date" type="date" placeholder="Please input End Date">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <a href="javascript:void(0)" class="button is-primary is-default cancel"
                            v-on:click="hideModal('add_project_modal')">Cancel</a>
                        <button class="button is-loading" disabled v-if="loading.button_processing">Processing...</button>
                        <button class="button is-primary is-success" v-else type="submit"><i class="material-icons">check</i>
                            Save Project</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- / Add Project Modal -->

        <!-- Hangar Line Modal -->
        <div class="modal-box" id="hangar_line_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('hangar_line_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Slot Confirmation</h2>
                </div>
                <form v-on:submit.prevent="slotConfirm">
                    <div class="modal-body">

                        <PGDetails :pg="modal.hgr" />
                        <br>

                        <div class="is-row">
                            <div class="is-col">
                                <div class="card">

                                    <h4>Select Hangar</h4>
                                    <label class="radio-button" v-for="hgr in hangar" :key="hgr.id">
                                        <input type="radio" name="hangar" @change="setLine(hgr)" v-bind:value="hgr.id"
                                            v-model="modal.hgr.hangar_id">
                                        <span class="label-visible">
                                            <span class="fake-radiobutton"></span>
                                            &nbsp; {{ hgr.name }}
                                        </span>
                                    </label>

                                </div>
                            </div>

                            <div class="is-col">
                                <div class="card">

                                    <h4>Select Line</h4>
                                    <label class="radio-button" v-for="l in line" :key="l.id">
                                        <input type="radio" name="line" v-bind:value="l.id" v-model="modal.hgr.line_id">
                                        <span class="label-visible">
                                            <span class="fake-radiobutton"></span>
                                            {{ l.line_name }} - {{ l.description }}
                                        </span>
                                    </label>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <a href="javascript:void(0)" class="button is-primary is-default cancel"
                            v-on:click="hideModal('hangar_line_modal')">Cancel</a>
                        <button class="button" disabled v-if="loading.button_processing">Processing...</button>
                        <button class="button is-primary is-success" v-else type="submit"><i class="material-icons">check</i>
                            Confirm</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- / Hangar Line Modal -->

        <!-- Change Modal -->
        <div class="modal-box" id="change_date_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('change_date_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Change Date</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card">
                        <div class="is-row">
                            <div class="is-col is-50">
                                <label>Start Date</label>
                                <input type="date" v-model="modal.pg_data.start_date" disabled>
                                <hr>
                                <label>Start Date New</label>
                                <input type="date" v-model="modal.pg_data.start_date_new">
                            </div>
                            <div class="is-col is-50">
                                <label>End Date</label>
                                <input type="date" v-model="modal.pg_data.end_date" disabled>
                                <hr>
                                <label>End Date New</label>
                                <input type="date" v-model="modal.pg_data.end_date_new">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button is-primary" v-on:click="changeDateToDefault">
                        Change to Default
                    </button>
                    <button class="button is-success"
                        v-on:click="saveDate">Save</button>
                </div>
            </div>
        </div>
        <!-- / Change Date Modal -->

        <!-- Change Modal -->
        <div class="modal-box" id="change_level_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('change_level_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Change Level</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card">
                        <div class="is-row">
                            <div class="is-col is-50">
                                <label>Level</label>
                                <input type="number" v-model="modal.pg_data.level" disabled>
                            </div>
                            <div class="is-col is-50">
                                <label>New Level</label>
                                <select v-model="modal.pg_data.level_new">
                                    <option disabled selected>-- Select Level --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button is-primary" v-on:click="changeLevelToDefault">
                        Change to Default
                    </button>
                    <button class="button is-success" v-on:click="saveLevel">Save</button>
                </div>
            </div>
        </div>
        <!-- / Change Level Modal -->

        <!-- Change AMS Modal -->
        <div class="modal-box" id="change_ams_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('change_ams_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Change AMS</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card">
                        <div class="is-row">
                            <div class="is-col is-50">
                                <label>AMS</label>
                                <input type="text" v-model="modal.pg_data.ams" disabled>
                            </div>
                            <div class="is-col is-50">
                                <label>New AMS</label>
                                <input type="text" v-model="modal.pg_data.ams_new">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button is-primary" v-on:click="changeAmsToDefault">
                        Change to Default
                    </button>
                    <button class="button is-success" v-on:click="saveAms">Save</button>
                </div>
            </div>
        </div>
        <!-- / Change AMS Modal -->

        <!-- Workscope Modal -->
        <div class="modal-box" id="ws_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('ws_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Workscope (WS) Document</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card" v-if="grantAccess">
                        <h5>Upload Workscope (WS) Documents</h5>
                        <div class="form-item">
                            <div class="is-row">
                                <div class="is-col is-80">
                                    <input type="file" ref="file" name="file" @change="onFileChange($event.target)">
                                </div>
                                <div class="is-col is-20">
                                    <button class="button is-primary is-success pull-right" :disabled="progressBar > 0" v-on:click="doUpload('ws')"
                                        type="submit"><i class="material-icons">check</i> Upload</button>
                                </div>
                            </div>
                        </div>

                        <div class="progress" v-if="progressBar > 0">
                            <!--<div class="progress-bar" role="progressbar" :aria-valuenow="progressBar"
                            aria-valuemin="0" aria-valuemax="100" :style="{width: progressBar + '%'}">
                                <span class="sr-only">70% Complete</span>
                                {{ progressBar + '%' }}
                            </div>-->
                        </div>

                    </div>
                    <br>
                    <div v-if="modal.ws.files.count > 0" class="file_list">
                        <h4 class="title">Available {{ modal.ws.files.count }} documents</h4>
                        <div class="card" v-for="ws in modal.ws.files.data" :key="ws.id" style="margin-bottom: 10px; height: 85px">
                            <div class="is-row">
                                <div class="is-col is-80">
                                    <p>
                                        <strong>
                                            <a v-bind:href="gsmart_attachment + ws.attc_created_by +'/' + ws.attc_file" target="_blank">{{ ws.attc_file }}</a>
                                        </strong>
                                    </p>
                                    <span>Uploaded by: <strong>{{ ws.attc_created_by }}</strong></span> | <span>Created
                                        At: <strong>{{ ws.attc_created_by }}</strong></span> | <span>Level:
                                        <strong>{{ ws.attc_level }}</strong></span> | <span>Priority:
                                        <strong>{{ ws.attc_id_prio }}</strong>
                                    </span>
                                </div>
                                <!-- <div class="is-col is-20">
                                    <div class="pull-right">
                                        <button class="button is-danger" v-if="true" v-on:click="deleteDoc(ws)">Delete</button>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('ws_modal')">Cancel</a>
                </div>
            </div>
        </div>
        <!-- / Workscope Modal -->

        <!-- Timeline Modal -->
        <div class="modal-box" id="timeline_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('timeline_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Timeline Document</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <PGTimeline />

                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('timeline_modal')">Cancel</a>
                </div>
            </div>
        </div>
        <!-- / Timeline Modal -->

        <!-- COGS Modal -->
        <div class="modal-box" id="cogs_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('cogs_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">COGS Document</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card" v-if="grantAccess">
                        <h5>Upload COGS Documents</h5>
                        <div class="form-item">
                            <div class="is-row">
                                <div class="is-col is-80">
                                    <input type="file" ref="file" name="file" @change="onFileChange($event.target)">
                                </div>
                                <div class="is-col is-20">
                                    <button class="button is-primary is-success pull-right"
                                        v-on:click="doUpload('cogs')" type="submit"><i class="material-icons">check</i>
                                        Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div v-if="modal.cogs.files.count > 0" class="file_list">
                        <h4 class="title">Available {{ modal.cogs.files.count }} documents</h4>
                        <div class="card" v-for="cogs in modal.cogs.files.data" :key="cogs.id"
                            style="margin-bottom: 10px; height: 85px">
                            <div class="is-row">
                                <div class="is-col is-90">
                                    <a v-bind:href="cogs.cogs_loc">{{ cogs.cogs_doc }}</a>
                                    <p>
                                        Uploaded by: {{ cogs.cogs_created_by }}| Start Date: {{ cogs.cogs_start_date }}
                                        | Finish Date: {{ cogs.cogs_finish_date }} | Due Date: {{ cogs.cogs_due_date }}
                                    </p>
                                </div>
                                <!-- <div class="is-col is-10">
                                    <button class="button" v-if="!true">Delete</button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('cogs_modal')">Cancel</a>
                </div>
            </div>
        </div>
        <!-- / COGS Modal -->

        <!-- Proposal Modal -->
        <div class="modal-box" id="proposal_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('proposal_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Proposal Document</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card" v-if="grantAccess">
                        <h5>Upload Proposal Documents</h5>
                        <div class="form-item">
                            <div class="is-row">
                                <div class="is-col is-80">
                                    <input type="file" ref="file" name="file" @change="onFileChange($event.target)">
                                </div>
                                <div class="is-col is-20">
                                    <button class="button is-primary is-success pull-right"
                                        v-on:click="doUpload('proposal')" type="submit"><i
                                            class="material-icons">check</i> Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div v-if="modal.proposal.files.count > 0" class="file_list">
                        <h4 class="title">Available {{ modal.proposal.files.count }} documents</h4>
                        <div class="card" v-for="proposal in modal.proposal.files.data" :key="proposal.id"
                            style="margin-bottom: 10px; height: 85px">
                            <div class="is-row">
                                <div class="is-col is-90">
                                    <p>
                                        <strong>
                                            <a v-bind:href="gsmart_attachment + proposal.attc_created_by +'/' + proposal.attc_file" target="_blank">{{ proposal.attc_file }}</a>
                                        </strong>
                                    </p>
                                    <span>Uploaded by: <strong>{{ proposal.attc_upload_by }}</strong></span> |
                                    <span>Created At: <strong>{{ proposal.attc_created_date }}</strong></span> |
                                    <span>Level: <strong>{{ proposal.attc_level }}</strong></span> | <span>Priority:
                                        <strong>{{ proposal.attc_id_prio }}</strong></span>
                                </div>
                                <!-- <div class="is-col is-10">
                                    <button class="button" v-if="!true">Delete</button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('proposal_modal')">Cancel</a>
                </div>
            </div>
        </div>
        <!-- / Proposal Modal -->

        <!-- PA Modal -->
        <div class="modal-box" id="pa_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('pa_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Profitability Analys Document</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card" v-if="grantAccess">
                        <h5>Upload Profitability Analys Documents</h5>
                        <div class="form-item">
                            <div class="is-row">
                                <div class="is-col is-80">
                                    <input type="file" ref="file" name="file" @change="onFileChange($event.target)">
                                </div>
                                <div class="is-col is-20">
                                    <button class="button is-primary is-success pull-right" v-on:click="doUpload('pa')"
                                        type="submit"><i class="material-icons">check</i> Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div v-if="modal.pa.files.count > 0" class="file_list">
                        <h4 class="title">Available {{ modal.pa.files.count }} documents</h4>
                        <div class="card" v-for="pa in modal.pa.files.data" :key="pa.id"
                            style="margin-bottom: 10px; height: 85px">
                            <div class="is-row">
                                <div class="is-col is-90">
                                    <p><strong><a v-bind:href="gsmart_attachment + pa.attc_created_by +'/' + pa.attc_file"
                                                target="_blank">{{ pa.attc_file }}</a></strong></p>
                                    <span>Uploaded by: <strong>{{ pa.attc_created_by }}</strong></span> | <span>Created
                                        At: <strong>{{ pa.attc_created_by }}</strong></span> | <span>Level:
                                        <strong>{{ pa.attc_level }}</strong></span> | <span>Priority:
                                        <strong>{{ pa.attc_id_prio }}</strong></span>
                                </div>
                                <div class="is-col is-10">
                                    <button class="button" v-if="!true">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('pa_modal')">Cancel</a>
                </div>
            </div>
        </div>
        <!-- / PA Modal -->

        <!-- SOW Modal -->
        <div class="modal-box" id="sow_modal" v-if="grantAccess">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('sow_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">SOW Document</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="card">
                        <h5>Upload SOW Documents</h5>
                        <div class="form-item">
                            <div class="is-row">
                                <div class="is-col is-80">
                                    <input type="file" ref="file" name="file" @change="onFileChange($event.target)">
                                </div>
                                <div class="is-col is-20">
                                    <button class="button is-primary is-success pull-right" v-on:click="doUpload('sow')"
                                        type="submit"><i class="material-icons">check</i> Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div v-if="modal.sow.files.count > 0" class="file_list">
                        <h4 class="title">Available {{ modal.sow.files.count }} documents</h4>
                        <div class="card" v-for="sow in modal.sow.files.data" :key="sow.id"
                            style="margin-bottom: 10px; height: 85px">
                            <div class="is-row">
                                <div class="is-col is-90">
                                    <p><strong><a v-bind:href="gsmart_attachment + sow.attc_created_by +'/' + sow.attc_file"
                                                target="_blank">{{ sow.attc_file }}</a></strong></p>
                                    <span>Uploaded by: <strong>{{ sow.attc_created_by }}</strong></span> | <span>Created
                                        At: <strong>{{ sow.attc_created_by }}</strong></span> | <span>Level:
                                        <strong>{{ sow.attc_level }}</strong></span> | <span>Priority:
                                        <strong>{{ sow.attc_id_prio }}</strong></span>
                                </div>
                                <div class="is-col is-10">
                                    <button class="button" v-if="!true">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('sow_modal')">Cancel</a>
                </div>
            </div>
        </div>
        <!-- / SOW Modal -->

        <!-- WBS Modal -->
        <div class="modal-box" id="rev_modal">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('rev_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Revision</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />
                    <br>

                    <div class="form-item is-col">
                        <label>Select Revision Number</label>
                        <v-select class="select_spesial" v-model="modal.rev.selected" :options="options" @change="revChange" @search="onSearch" style='width: 100%; ' />
                        <!-- <select style="width: 100%" v-model="modal.rev.selected" @change="testTest">
                            <option v-bind:value="rev.id" v-for="rev in modal.rev.data" :key="rev.id">{{ rev.id }}</option>
                        </select> -->
                    </div>

                    <table v-if="modal.wbs.selected && modal.so.selected">
                        <tr class="">
                            <td>Revision Number</td>
                            <td>:</td>
                            <th>{{ this.modal.rev.selected.id }}</th>
                        </tr>
                        <tr class="">
                            <td>WBS Number</td>
                            <td>:</td>
                            <th>{{ this.modal.wbs.selected }}</th>
                        </tr>
                        <tr class="">
                            <td>SO</td>
                            <td>:</td>
                            <th>{{ this.modal.so.selected }}</th>
                        </tr>
                    </table>

                    <br>

                    <div class="clearfix">
                        <div class="pull-right">
                            <button v-on:click="saveRevision">Save Revision</button>
                        </div>
                    </div>

                </div>
                <!-- <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('rev_modal')">Cancel</a>
                </div> -->
            </div>
        </div>
        <!-- / WBS Modal -->

        <!-- Additional Document Modal -->
        <div class="modal-box" id="sharepoint_documents">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('sharepoint_documents')"></span>
                <div class="modal-header">
                    <h2 class="title">Sharepoint Documents {{ modal.pg_data.ac_reg }}</h2>
                </div>
                <div class="modal-body" style="padding-right: 40px; padding-left: 20px">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="is-row">
                        <div class="is-col is-100">
                            <label>Maintenance Document</label>
                            <input type="text" v-model="modal.sharepoint_doc.ac_document">
                        </div>
                        <div class="is-col is-100" style="margin-top: 20px">
                            <label>Project Document</label>
                            <input type="text" v-model="modal.sharepoint_doc.pg_document">
                        </div>
                        <div class="is-col is-100" style="margin-top: 20px">
                            <label>Final Workscope Document</label>
                            <input type="text" v-model="modal.sharepoint_doc.final_ws_document">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="button is-success"
                        v-on:click="saveSharepoint">Save</button>
                </div>
            </div>
        </div>
        <!-- / Additional Document Modal -->

        <!-- Doc 1 -->
        <div class="modal-box" id="doc1_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('doc1_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Final Workscope and Document {{ modal.pg_data.ac_reg }}</h2>
                </div>
                <div class="modal-body" style="padding-right: 40px; padding-left: 20px">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="is-row">
                        <div class="is-col is-100">
                            <div class="card">
                                <label>Aircraft General Data</label>
                                <br>
                                <!--div class="progress">
                                    <div class="progress-bar" role="progressbar" :aria-valuenow="progressBar"
                                    aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                                        <span class="sr-only">70% Complete</span>
                                        70%
                                    </div>
                                </div-->
                                <center>
                                    <!-- { name: 'module1.aircraft_data', {params: modal.pg_data.id} } -->
                                    <button v-if="modal.pg_data.pg_id != null || modal.pg_data.pg_id != ''" v-on:click="$router.push({ name: 'module1.aircraft_data', params: { pg_id: modal.pg_data.pg_id } })" class="button">Click Here to Complete Aircraft General Data</button>
                                </center>
                            </div>

                        </div>
                        <hr>
                        <div class="is-col is-100" style="margin-top: 20px">
                            <label>Final Workscope Document</label>
                            <div class="is-append" v-if="modal.pg_data.final_ws_document != null">
                                <input type="text" placeholder="Insert with Sharepoint URL" v-model="modal.sharepoint_doc.final_ws_document">
                                <button class="button is-success" v-on:click="visitLink(modal.sharepoint_doc.final_ws_document)">Visit Link</button>
                            </div>
                            <input v-else type="text" placeholder="Insert with Sharepoint URL" v-model="modal.sharepoint_doc.final_ws_document">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="button is-success" v-on:click="saveSharepoint">Save</button>
                </div>
            </div>
        </div>
        <!-- /Doc 1 -->

        <!-- Doc 2 Modal -->
        <div class="modal-box" id="doc2_modal">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('doc2_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Planning Gate & Aircraft Document - {{ modal.pg_data.ac_reg }}</h2>
                </div>
                <div class="modal-body" style="padding-right: 40px; padding-left: 20px">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="is-row">
                        <div class="is-col is-100">
                            <label>Maintenance Document</label>
                            <input type="text" v-model="modal.sharepoint_doc.ac_document">
                        </div>
                        <div class="is-col is-100" style="margin-top: 20px">
                            <label>Project Document</label>
                            <input type="text" v-model="modal.sharepoint_doc.pg_document">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="button is-success"
                        v-on:click="saveSharepoint">Save</button>
                </div>
            </div>
        </div>
        <!-- / Doc 2 Modal -->

        <!-- MRM & TRM Modal -->
        <div class="modal-box" id="available_date_modal">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('available_date_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">MRM & TRM {{ modal.pg_data.ac_reg }}</h2>
                </div>
                <div class="modal-body" style="padding-right: 40px; padding-left: 20px">

                    <PGDetails :pg="modal.pg_data" />

                    <br>

                    <div class="is-row">
                        <div class="is-col is-100" style="margin-top: 18px">
                            <label>MRM Available Date</label>
                            <input type="date" v-model="modal.available_date.mrm_available_date">
                        </div>

                        <div class="is-col is-100" style="margin-top: 18px">
                            <label>TRM Available Date</label>
                            <input type="date" v-model="modal.available_date.trm_available_date">
                        </div>

                        <div class="is-col is-100" style="margin-top: 18px">
                            <label>Jobcard Available Date</label>
                            <input type="date" v-model="modal.available_date.jobcard_available_date">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="button is-success"
                        v-on:click="saveAvailableDate">Save</button>
                </div>
            </div>
        </div>
        <!-- / MRM & TRM Modal -->

        <!-- Remark Modal -->
        <div class="modal-box" id="remark_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('remark_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Reject Remark</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <hr>
                    <br>

                    <div class="card">
                        <table>
                            <tr style="font-size: 16px">
                                <td>Reason</td>
                                <td>:</td>
                                <td v-if="modal.pg_data.reschedule && modal.pg_data.reschedule.reject_remark">
                                    {{ modal.pg_data.reschedule.reject_remark }}
                                </td>
                                <td v-else>No Remark</td>
                            </tr>
                        </table>

                        <!-- {{ modal.pg_data.reschedule.reject_remark }} -->
                    </div>


                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('remark_modal')">Close</a>
                </div>
            </div>
        </div>
        <!-- / Remark Modal -->

        <!-- Reschedule Modal -->
        <div class="modal-box" id="reschedule_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('reschedule_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Reschedule {{ modal.pg_data.ac_reg }}</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <hr>
                    <br>

                    <div class="card">

                        <!-- <div class="alert is-success" v-if="modal.pg_data.reschedule == 1">
                            Reschedule has been Approved
                        </div> -->

                        <table v-if="modal.pg_data.reschedule">

                            <tr>
                                <td>Start Date Old</td>
                                <th>{{ modal.pg_data.start_date }}</th>
                                <td>Finish Date Old</td>
                                <th>{{ modal.pg_data.end_date }}</th>
                                <td>TAT</td>
                                <th>{{ modal.pg_data.TAT }} days</th>
                            </tr>

                            <tr>
                                <td>Start Date New</td>
                                <th>{{ modal.pg_data.reschedule.ams_start_date }}</th>
                                <td>Finish Date New</td>
                                <th>{{ modal.pg_data.reschedule.ams_end_date }}</th>
                                <td>TAT</td>
                                <th>{{ modal.pg_data.reschedule.ams_tat }} days</th>
                            </tr>

                            <tr v-if="modal.reschedule.action == 'detail'">
                                <td colspan="6">
                                    <div class="form-item">
                                        <label>Reason</label>
                                        <input type="text" placeholder="Type a Reason here"
                                            v-model="modal.reschedule.reject_remark" name="name" class="w50">
                                    </div>
                                    <div class="clearfix">
                                        <div class="pull-right">
                                            <button class="button is-danger" v-on:click="rescheduleProcess('reject')"><i
                                                    class="material-icons">close</i> Reject</button>
                                            <button class="button" v-if="!loading.button_processing" v-on:click="rescheduleProcess('approve')"><i class="material-icons">check</i> Aprove</button>
                                            <button class="button is-loading" v-else v-on:click="rescheduleProcess('approve')">Approving</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr v-else>
                                <td colspan="6">
                                    <div class="alert is-success">
                                        <center><p style="font-size: 16px">Reschedule has been Approved</p></center>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('reschedule_modal')">Close</a>
                </div>
            </div>
        </div>
        <!-- / Reschedule Modal -->

        <!-- Reject Modal -->
        <div class="modal-box" id="reject_modal">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('reject_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Reschedule {{ modal.pg_data.ac_reg }}</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />

                    <hr>
                    <br>

                    <div class="card">
                        <table>
                            <tr style="font-size: 16px">
                                <td>Reason</td>
                                <td>:</td>
                                <td v-if="modal.pg_data.reschedule && modal.pg_data.reschedule.reject_reschedule">
                                    {{ modal.pg_data.reschedule.reject_reschedule }}
                                </td>
                                <td v-else>No reschedule</td>
                            </tr>
                        </table>

                        <!-- {{ modal.pg_data.reschedule.reject_reschedule }} -->
                    </div>


                </div>
                <div class="modal-footer">
                    <a href="javascript:void(0)" class="button is-primary is-default cancel"
                        v-on:click="hideModal('reject_modal')">Close</a>
                </div>
            </div>
        </div>
        <!-- / Rject Modal -->
        <!-- modal add aircraft -->
        <div class="modal-box" id="ac_modalgantt">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('ac_modalgantt')"></span>
                <div class="modal-header">
                    <h2 class="title">Add Aircraft Type</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />
                    <br>

                    <div class="form-item is-col">
                        <label>Aircraft Type</label>
                        <input v-model="ac_form.ac_type" type="text">
                    </div>

                    <br>

                    <div class="clearfix">
                        <div class="pull-right">
                            <button class="button is-primary" type="submit" id="btn-save-aircraftgantt" v-on:click="saveAircraftgantt">Save</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- / modal add aircraft -->
        <div class="modal-box" id="ac_modal">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('ac_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">Add Aircraft Type</h2>
                </div>
                <div class="modal-body">

                    <PGDetails :pg="modal.pg_data" />
                    <br>

                    <div class="form-item is-col">
                        <label>Aircraft Type</label>
                        <input v-model="ac_form.ac_type" type="text">
                    </div>

                    <br>

                    <div class="clearfix">
                        <div class="pull-right">
                            <button class="button is-primary" type="submit" id="btn-save-aircraft" v-on:click="saveAircraft">Save</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- modal wbs so -->
        <div class="modal-box" id="modal-revision" data-keyboard="false" data-backdrop="static">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-revision')"></span>
                <div class="modal-header">
                    <h2 class="title">{{modal_rev.type.toUpperCase()}}</h2>
                </div>
                <div class="modal-body" style="position: relative">
                    <PGDetails :pg="modal.pg_data" />
                    <br>
                </div>
                <div class="modal-footer">
                    <div style="text-align: left;">
                        <span v-if="modal_rev.data.length < 1">There is no {{modal_rev.type.toUpperCase()}} for selected revision.</span>
                        <span v-else>
                            <span v-for="(data, index) in modal_rev.data" :key="index">
                                <span class="button is-small is-primary" style="height:20px; width: 105px;" >
                                    {{data}}
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="modal-footer" style="">
                    <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-revision')">Close</button>

                </div>
            </div>
        </div>
        <!-- /modal wbs so -->

        <!-- modal change status -->
        <div class="modal-box" id="modal-status">
            <div class="modal md">
                <span class="close" v-on:click="hideModal('modal-status')"></span>
                <div class="modal-header">
                    <h2 class="title">Change Status</h2>
                </div>
                <div class="modal-body">
                    <PGDetails :pg="modal.pg_data" />
                    <br>
                    <div class="card">
                        <div class="is-row">
                            <div class="is-col is-50">
                                <label>Status</label>
                                <input type="text" :value="handlerStatus(modal.pg_data.status)" disabled>
                            </div>
                            <div class="is-col is-50">
                                <label>New Status</label>
                                <select v-model="modal.pg_data.status_new">
                                    <option :value="null">All Status</option>
                                    <option
                                        v-for="(stat, index) in status"
                                        :key="index"
                                        :value="stat.ID"
                                    >
                                        {{stat.NAME}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="btn-status-default" class="button is-primary" v-on:click="handlerUpdateStatus(true, 'btn-status-default', 'is-primary')">
                        Change to Default
                    </button>
                    <button id="btn-change-status" class="button is-success" v-on:click="handlerUpdateStatus(false, 'btn-change-status', 'is-success')">Save</button>
                </div>
            </div>
        </div>
        <!-- /modal change status -->

        <!-- soa -->
        <div class="modal-box" id="soa_modal">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('soa_modal')"></span>
                <div class="modal-header">
                    <h2 class="title">NPPA Document {{ modal.pg_data.ac_reg }}</h2>
                </div>
                <div class="modal-body" style="padding-right: 40px; padding-left: 20px">
                    <PGDetails :pg="modal.pg_data" />
                    <br>
                    <div class="is-row">
                        <div class="is-col is-100">
                            <div class="card">
                                <label>NPPA Document</label>
                                <br>
                                <!-- <center>
                                    <button :disabled="!modal.pg_data.soa" v-on:click="handlerOpenLink(`/uploads/soa/${modal.pg_data.soa}`)" class="button">Click here to open SOA document</button>
                                </center> -->
                                <center id="view_doc">
                                </center>
                            </div>

                        </div>
                        <hr>
                        <div class="is-col is-100" style="margin-top: 20px">
                            <label for="file_soa">Upload NPPA documnet <span class="is-req">*</span></label>
                            <input ref="file_soa" id="file_soa" style="all: unset" type="file"  v-on:change="onChangeSOAFileUpload()" multiple>
                            <div class="is-desc">Required document file</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button is-success" id="btn-upload-soa" v-on:click="handlerUploadSOAFile(user.id)">Upload</button>
                </div>
            </div>
        </div>
        <!-- /soa -->

    </div>

</template>

<script>
    //import moment from 'moment'
    import XLSX from 'xlsx';
    import swal from 'sweetalert'
    import axios from 'axios'
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css'

    import Loading from 'vue-loading-overlay'
    import 'vue-loading-overlay/dist/vue-loading.css'

    import 'vue-good-table/dist/vue-good-table.css'
    import { VueGoodTable } from 'vue-good-table'

    import PGTimeline from './PGTimeline'
    // Import stylesheet

    import Multiselect from 'vue-multiselect';
    import 'vue-multiselect/dist/vue-multiselect.min.css';


    import PGDetails from './PGDetails'

    export default {

        components: {
            // VueGoodTable
            PGTimeline,
            Loading,
            PGDetails,
            'v-select': vSelect,
            VueGoodTable,
            'multiselect': Multiselect,
        },

        computed: {
            user: function () {
                return JSON.parse(localStorage.getItem('user'));
            }
        },

        filters: {

            showtext: function(val) {
                if (!val) return '-'
            },

            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toLowerCase() + value.slice(1)
            },

            strToName: function (fullName) {

                var name = ''

                if(fullName)
                {
                    var exploded_str = fullName.split(" ")


                    for(var i = 0; i < exploded_str.length; i++)
                    {
                        if(i == 0)
                        {
                            name += exploded_str[i];
                        }
                        else
                        {
                            name += ' ' + exploded_str[i].charAt(0);
                        }
                    }
                }

                return name

            }
        },

        watch: {},

        data: () => ({
            grantAccess: false,

            gsmart_attachment: 'https://gsmart-beta.gmf-aeroasia.co.id/public/files/upgrade/',

            notifications: [],

            empty_params: {
                columnFilters: {
                    ac_reg: '',
                    ac_type: '',
                    ams_text: '',
                    main_type: '',
                    cust_code: '',
                    ams: ''
                },
                is_show: 'y',
                is_xpream: 'n',
                sort_type: '',
                sort_field: '',
                page: 1,
                perPage: 10,
                doc_type: 'all',
                level: 'all',
                report: 'all',
                location: 'all',
                line: 'all',
                airframe_category: 'all',
                customer_category: 'all',
                project_status: 'all',
                doc_type: 'all',

                col_ac_reg: '',
                col_ac_type: '',
                col_ams: '',
                col_level: '',
                col_gsmart_id: '',
                col_flag: '',
                col_report: '',
                col_status: '',
                col_sapstatus: '',
                col_rev: '',
                col_ac_regs: [],
                start_date: new Date(new Date().setTime(new Date().getTime() - (/*month*/1000*60*60*24*30*12) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().subtract(12, "months").format('YYYY-MM-DD'),
                end_date: new Date(new Date().setTime(new Date().getTime() + (/*month*/1000*60*60*24*30*6) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().add(6, "months").format('YYYY-MM-DD'),
                start_date2: new Date(new Date().setTime(new Date().getTime() - (/*month*/1000*60*60*24*30*3) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().subtract(3, "months").format('YYYY-MM-DD'),
                end_date2: new Date(new Date().setTime(new Date().getTime()) + (/*GMT*/7*60*60*1000)).toISOString().split('T')[0],//moment().format('YYYY-MM-DD'),
                interval_logic: 'OR',
                searchTerm: '',
                col_status_parking: '',
                crm_unlinked: '',
                gsmart_unlinked: ''                
            },

            progressBar: 0,
            is_filtered: false,
            loading: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'dots',
                color: '#0065ff',
            },
            dbsalesloading: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            }, 
            dbpreparedloading: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            },
            dbprogressloading: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            },
            dbparkingloading: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            },  
            dbreleasedloading: {
                button_processing: false,
                isLoading: false,
                fullPage: false,
                loaderType: 'bars',
                color: '#0065ff',
            },                                 
            search_query: '',
            dashboard_show: false,
            dashboard_show2: true,

            fixed_access_list: [
                {
                    label: 'Report',
                    field: 'report',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Report', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [
                            { value: 'all', text: '-- All Report --' },
                            { value: 'y', text: 'Show' },
                            { value: 'n', text: 'Hide' },
                        ], // dropdown (with selected values) instead of text input
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: "Hgr",
                    field: 'slot_confirmation',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                },
                {
                    label: 'Flag',
                    field: 'flag',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Select Data Source', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [
                            { value: 'C', text: 'C => CRM / SWIFT' },
                            { value: 'G', text: 'G => GSMART' },
                        ], // dropdown (with selected values) instead of text input
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'Level',
                    field: 'lvl',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Select Level', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [
                            { text: '-- All Level --', value: ''},
                            { text: 'Level 1', value: '1'},
                            { text: 'Level 2', value: '2'},
                            { text: 'Level 3', value: '3'}
                        ], // dropdown (with selected values) instead of text input
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'Sales No',
                    field: 'gsmart_id',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Input Sales No', // placeholder for filter input
                        filterValue: '',
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'A/C Type',
                    field: 'ac_type',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Search A/C Type', // placeholder for filter input
                        filterValue: '',
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'A/C Reg',
                    field: 'ac_reg',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Search A/C Reg', // placeholder for filter input
                        filterValue: '',
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'SAP',
                    field: 'sapstatus',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Select Status', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: ['CRTD','REL','CLSD'], // dropdown (with selected values) instead of text input
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'Status',
                    field: 'status',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Select Status', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [
                            { text: '[Gsmart] Open', value: 'Sales Open'},
                            { text: '[Gsmart] On Progress', value: 'Sales Progress'},
                            { text: '[Gsmart] Canceled', value: 'Sales Cancel'},
                            { text: '[Gsmart] Closed', value: 'Sales Closed'},
                            { text: '[Gsmart] Waiting', value: 'Sales Wait'},
                            { text: '[Xpream] Prepared', value: 'Prepared'},
                            { text: '[Xpream] Progress', value: 'Progress'},
                            { text: '[Xpream] Released', value: 'Released'},
                            { text: '[Xpream] Freeze', value: 'Freeze'},
                            { text: '[Xpream] Parking', value: 'Parking'},
                            { text: '[Xpream] Canceled', value: 'Canceled'},
                        ], // dropdown (with selected values) instead of text input
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'Customer',
                    field: 'customer',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Customer', // placeholder for filter input
                        filterValue: '',
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'AMS',
                    field: 'ams_text',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'AMS', // placeholder for filter input
                        filterValue: '',
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'Maintenance Type',
                    field: 'main_type',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    filterOptions: {
                        enabled: true, // enable filter for this column
                        placeholder: 'Maintenance Type', // placeholder for filter input
                        filterValue: '',
                        trigger: 'enter', //only trigger on enter not on keyup
                    },
                },
                {
                    label: 'Start Date',
                    field: 'start_date',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    // filterOptions: {
                    //     enabled: true, // enable filter for this column
                    //     placeholder: 'start_date_col', // placeholder for filter input
                    //     filterValue: '2020-02-02',
                    //     trigger: 'enter', //only trigger on enter not on keyup
                    // },

                },
                {
                    label: 'End Date',
                    field: 'end_date',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    // filterOptions: {
                    //     enabled: true, // enable filter for this column
                    //     placeholder: 'end_date_col', // placeholder for filter input
                    //     filterValue: '2020-02-03',
                    //     trigger: 'enter', //only trigger on enter not on keyup
                    // },
                },
                {
                    label: 'TAT',
                    field: 'TAT',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                },
                {
                    label: 'D-',
                    field: 'difference',
                    tdClass: 'centerize',
                    thClass: 'centerize',
                },
                {
                    label: 'WS',
                    field: 'ws',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'COGS',
                    field: 'cogs',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'BOM',
                    field: 'bom',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'BOT',
                    field: 'bot',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },                
                {
                    label: 'PROP',
                    field: 'prop',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'PA',
                    field: 'pa',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'SOW',
                    field: 'sow',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'REV',
                    field: 'rev',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '110px',
                    filterOptions: {
                        enabled: true,
                        placeholder: 'Search Rev',
                        filterValue: '',
                        trigger: 'enter',
                    },
                },
                {
                    label: 'WBS',
                    field: 'wbs',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'SO',
                    field: 'so',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'NPPA',
                    field: 'soa',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'IND',
                    field: 'ind',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },                
                {
                    label: 'P-Ctr',
                    field: 'project_charter',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'Gantt',
                    field: 'gantt',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'Resched',
                    field: 'reschedule',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                // {
                //     label: 'A/C Doc',
                //     field: 'ac_document',
                //     sortable: false,
                //     tdClass: 'centerize',
                //     thClass: 'centerize',
                //     width: '50px',
                // },
                // {
                //     label: 'PG Doc',
                //     field: 'pg_document',
                //     sortable: false,
                //     tdClass: 'centerize',
                //     thClass: 'centerize',
                //     width: '50px',
                // },
                {
                    label: 'Doc 1',
                    field: 'doc1',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'Doc 2',
                    field: 'doc2',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                // {
                //     label: 'Final WS',
                //     field: 'final_ws_document',
                //     sortable: false,
                //     tdClass: 'centerize',
                //     thClass: 'centerize',
                //     width: '50px',
                // },
                {
                    label: 'Remark',
                    field: 'remark',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                },
                {
                    label: '',
                    field: 'timeline',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: '',
                    field: 'action',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                },
                {
                    label: 'CS-F',
                    field: 'csf',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    width: '50px',
                },
                {
                    label: 'PPR',
                    field: 'ppr',
                    sortable: false,
                    tdClass: 'centerize',
                    thClass: 'centerize',
                    // width: '50px',
                },
            ],

            table: {
                rows: [],
                fields: [
                    {
                        label: 'Report',
                        field: 'report',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Report', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [
                                { value: 'all', text: '-- All Report --' },
                                { value: 'y', text: 'Show' },
                                { value: 'n', text: 'Hide' },
                            ], // dropdown (with selected values) instead of text input
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: "Hgr",
                        field: 'slot_confirmation',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                    },
                    {
                        label: 'Flag',
                        field: 'flag',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Select Flag', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [
                                { value: 'all', text: '-- All --' },
                                { value: 'C', text: 'C => CRM / SWIFT' },
                                { value: 'G', text: 'G => GSMART' },
                                { value: 'X', text: 'X => Temporary' },
                            ], // dropdown (with selected values) instead of text input
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'Level',
                        field: 'lvl',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Select Level', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [
                                { text: '-- All Level --', value: 'all'},
                                { text: 'Level 1', value: '1'},
                                { text: 'Level 2', value: '2'},
                                { text: 'Level 3', value: '3'}
                            ], // dropdown (with selected values) instead of text input
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'Sales No',
                        field: 'gsmart_id',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Input Sales No', // placeholder for filter input
                            filterValue: '',
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'A/C Type',
                        field: 'ac_type',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Search A/C Type', // placeholder for filter input
                            filterValue: '',
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'A/C Reg',
                        field: 'ac_reg',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Search A/C Reg', // placeholder for filter input
                            filterValue: '',
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'SAP',
                        field: 'sapstatus',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        /*filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Select Status', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: ['CRTD','REL','CLSD'], // dropdown (with selected values) instead of text input
                            trigger: 'enter', //only trigger on enter not on keyup
                        },*/
                    },
                    {
                        label: 'Status',
                        field: 'status',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Select Status', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                            filterDropdownItems: [
                                { text: '[Gsmart] Open', value: 'Sales Open'},
                                { text: '[Gsmart] On Progress', value: 'Sales Progress'},
                                { text: '[Gsmart] Canceled', value: 'Sales Cancel'},
                                { text: '[Gsmart] Closed', value: 'Sales Closed'},
                                { text: '[Gsmart] Waiting', value: 'Sales Wait'},
                                { text: '[Xpream] Prepared', value: 'Prepared'},
                                { text: '[Xpream] Progress', value: 'Progress'},
                                { text: '[Xpream] Released', value: 'Released'},
                                { text: '[Xpream] Freeze', value: 'Freeze'},
                                { text: '[Xpream] Parking', value: 'Parking'},
                                { text: '[Xpream] Canceled', value: 'Canceled'},
                            ], // dropdown (with selected values) instead of text input
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'Customer',
                        field: 'customer',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Customer', // placeholder for filter input
                            filterValue: '',
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'AMS',
                        field: 'ams_text',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'AMS', // placeholder for filter input
                            filterValue: '',
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'Maintenance Type',
                        field: 'main_type',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Maintenance Type', // placeholder for filter input
                            filterValue: '',
                            trigger: 'enter', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'Start Date',
                        field: 'start_date',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        // filterOptions: {
                        //     enabled: true, // enable filter for this column
                        //     placeholder: 'start_date_col', // placeholder for filter input
                        //     filterValue: '2020-02-02',
                        //     trigger: 'enter', //only trigger on enter not on keyup
                        // },

                    },
                    {
                        label: 'End Date',
                        field: 'end_date',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        // filterOptions: {
                        //     enabled: true, // enable filter for this column
                        //     placeholder: 'end_date_col', // placeholder for filter input
                        //     filterValue: '2020-02-03',
                        //     trigger: 'enter', //only trigger on enter not on keyup
                        // },
                    },
                    {
                        label: 'TAT',
                        field: 'TAT',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                    },
                    {
                        label: 'D-D',
                        field: 'difference',
                        tdClass: 'centerize',
                        thClass: 'centerize',
                    },
                    {
                        label: 'WS',
                        field: 'ws',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'COGS',
                        field: 'cogs',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'BOM',
                        field: 'bom',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'BOT',
                        field: 'bot',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'PROP',
                        field: 'prop',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'PA',
                        field: 'pa',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'SOW',
                        field: 'sow',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'REV',
                        field: 'rev',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'WBS',
                        field: 'wbs',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'SO',
                        field: 'so',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'NPPA',
                        field: 'soa',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'IND',
                        field: 'ind',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'P-Ctr',
                        field: 'project_charter',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'Gantt',
                        field: 'gantt',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'Resched',
                        field: 'reschedule',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    // {
                    //     label: 'A/C Doc',
                    //     field: 'ac_document',
                    //     sortable: false,
                    //     tdClass: 'centerize',
                    //     thClass: 'centerize',
                    //     width: '50px',
                    // },
                    // {
                    //     label: 'PG Doc',
                    //     field: 'pg_document',
                    //     sortable: false,
                    //     tdClass: 'centerize',
                    //     thClass: 'centerize',
                    //     width: '50px',
                    // },
                    {
                        label: 'Doc 1',
                        field: 'doc1',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'Doc 2',
                        field: 'doc2',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    // {
                    //     label: 'Final WS',
                    //     field: 'final_ws_document',
                    //     sortable: false,
                    //     tdClass: 'centerize',
                    //     thClass: 'centerize',
                    //     width: '50px',
                    // },
                    {
                        label: 'Remark',
                        field: 'remark',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                    },
                    {
                        label: '',
                        field: 'timeline',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: '',
                        field: 'action',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                    },
                    {
                        label: 'CS-F',
                        field: 'csf',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                    {
                        label: 'PPR',
                        field: 'ppr',
                        sortable: false,
                        tdClass: 'centerize',
                        thClass: 'centerize',
                        width: '50px',
                    },
                ],
                totalRows: '',
                serverParams: {
                    columnFilters: {
                        ac_reg: '',
                        ac_type: '',
                        ams_text: '',
                        main_type: '',
                        cust_code: '',
                        ams: ''
                    },
                    is_show: 'y',
                    is_xpream: 'n',
                    sort_type: '',
                    sort_field: '',
                    page: 1,
                    perPage: 10,
                    doc_type: 'all',
                    level: 'all',
                    report: 'all',
                    location: 'all',
                    line: 'all',
                    airframe_category: 'all',
                    customer_category: 'all',
                    project_status: 'all',
                    doc_type: 'all',

                    col_ac_reg: '',
                    col_ac_type: '',
                    col_ams: '',
                    col_level: '',
                    col_gsmart_id: '',
                    col_flag: '',
                    col_report: '',
                    col_status: '',
                    col_sapstatus: '',
                    col_rev: '',
                    col_ac_regs: [],
                    start_date: new Date(new Date().setTime(new Date().getTime() - (/*month*/1000*60*60*24*30*12) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().subtract(12, "months").format('YYYY-MM-DD'),
                    end_date: new Date(new Date().setTime(new Date().getTime() + (/*month*/1000*60*60*24*30*6) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().add(6, "months").format('YYYY-MM-DD'),
                    start_date2: new Date(new Date().setTime(new Date().getTime() - (/*month*/1000*60*60*24*30*3) + (/*GMT*/7*60*60*1000))).toISOString().split('T')[0],//moment().subtract(3, "months").format('YYYY-MM-DD'),
                    end_date2: new Date(new Date().setTime(new Date().getTime()) + (/*GMT*/7*60*60*1000)).toISOString().split('T')[0],//moment().format('YYYY-MM-DD'),
                    interval_logic: 'OR',
                    col_status_parking: '',
                    crm_unlinked: '',
                    gsmart_unlinked: '',
                    //start_date: new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2),
                    //end_date:  new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2),
                    //start_date2: new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() - 4)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2),
                    //end_date2: new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2),

                    searchTerm: ''
                },
                perPageDropDown: [10, 25, 50, 100],
                selectedRows: []

            },

            
            options: [],
            options_ac: [],
            mini_db: {
                salesopen: {
                    nga : 0,
                    unlinked : 0
                },
                prepared: {
                    ga : 0,
                    nga : 0,
                    unlinked : 0
                },
                progress: {
                    ga : 0,
                    nga : 0,
                    unlinked : 0
                },
                parking: {
                    ga : 0,
                    nga : 0,
                    unlinked : 0
                },
                released: {
                    ga : 0,
                    nga : 0,
                    unlinked : 0
                },

            },
            summary_report: {
                reschedule: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                ws: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                cogs: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                proposal: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                pa: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                sow: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                slot: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                rev: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                wbs: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                so: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                gantt: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
                pcharter: {
                    warning: 0,
                    danger: 0,
                    empty: 0,
                    success: 0
                },
            },
            hangar: [],
            line: [],
            api: {
                master_index: '/api/slot_and_capacity/planning_gate',
                doc_due_date: '/api/slot_and_capacity/planning_gate/doc_due_date',
                search: '/api/slot_and_capacity/planning_gate/search',
            },
            form: {
                level: 'all',
                report: 'all',
                search_query: '',
                location: 'all',
                airframe_category: 'all',
                customer_category: 'all',
                project_status: 'all',
                doc_type: 'all',
            },
            doc_due_date: {},
            modal: {
                editable: false,
                file: '',
                pg_data: {},
                sync: {
                    revnr: '',
                    preview: {}
                },
                sharepoint_doc: {
                    ac_document: '',
                    pg_document: '',
                    final_ws_document: ''
                },
                available_date: {
                    mrm_available_date: '',
                    trm_available_date: '',
                    jobcard_available_date: '',
                },
                change_date: {
                    pg_id: '',
                    start_date_new: '',
                    end_date_new: ''
                },
                change_level: {
                    pg_id: '',
                    level_new: ''
                },
                change_ams: {
                    pg_id: '',
                    ams_new: ''
                },
                add_project: {
                    hangar_id: '',
                    line_id: '',
                    ac_type: '',
                    ac_reg: '',
                    ams: '',
                    main_type: '',
                    level: 3,
                    airframe_cat: '',
                    start_date: '',
                    end_date: ''
                },
                hgr: {
                    pg_id: '',
                    hangar: '',
                    line: ''
                },
                ws: {
                    file: '',
                    files: [],

                },
                cogs: {
                    file: '',
                    files: []
                },
                proposal: {
                    file: '',
                    files: []
                },
                pa: {
                    file: '',
                    files: []
                },
                sow: {
                    file: '',
                    files: []
                },
                rev: {
                    action: 'detail',
                    selected: '',
                    revnr_qry: '',
                    data: [],
                },
                wbs: {
                    selected: ''
                },
                so: {
                    selected: ''
                },
                reschedule: {
                    action: '',
                    reject_remark: ''
                },
            },

            ac_form: {
                pg_id: "",
                ac_type: ""
            },

            modal_rev: {
                revnr: "",
                type: "wbs",
                data: [],
            },
            status: [],
            soa_doc: "",
        }),

        created() {
            // this.initData(this.api.master_index)
            if(this.$can('planning_gate_edit')) {
                this.grantAccess = true;
            }

            this.initSummaryReport()

            this.initPGAccessList()

            this.initHangar()
            this.initDocDueDate()
            this.initNotification()

            this.initStatus();
            this.initDashboard();
            //this.initAircraft();

        },

        mounted() {
            this.resizeable();
            // this.col_date()
        },

        watch: {
            'modal.rev.selected': function() {

                // /api/crm_data/get_wbs/00118477
                this.modal.rev.selected.id
                let url = '/api/crm_data/get_wbs/' + this.modal.rev.selected.id

                axios.get(url)
                .then( res => {
                    let data = res.data[0]

                    if(data)
                    {
                        this.modal.wbs.selected = data.wbs
                        this.modal.so.selected = data.so
                    }
                })
            }
        },

        methods: {
            downloadData() {
                return new Promise((resolve, reject) => {
                    let tmp = XLSX.utils.json_to_sheet(this.table.rows)                 
                    let wb = XLSX.utils.book_new();

                    XLSX.utils.book_append_sheet(wb, tmp, name)
                    XLSX.writeFile(wb, 'planning_gate.xlsx')

                    resolve();
                })
            },
            initData: function (url) {

                // var params = this.form
                var params = this.table.serverParams

                this.loading.isLoading = true

                axios.post(url, params)
                .then(res => {
                    if(res.data.status != 'error')
                    {
                        this.table.rows = res.data.data
                        this.table.totalRows = res.data.total
                    }
                    else
                    {
                        toastr.error(res.data.paginate.message, 'Oopps! Something went wrong')
                        this.$router.push({name: 'abmp_report'})
                    }
                    this.loading.isLoading = false
                })
            },

            initStatus: function() {
                axios.get('/api/project_status/get_status')
                .then( res => {
                    this.status = res.data
                })
            },

            initDashboard: function() {
                this.dbsalesloading.isLoading = true;
                axios.post('/api/slot_and_capacity/planning_gate/get_dashboard_sales', this.table.serverParams)
                .then( res => {
                    this.mini_db.salesopen = res.data.data[0];
                    this.dbsalesloading.isLoading = false;
                });

                this.dbpreparedloading.isLoading = true;
                axios.post('/api/slot_and_capacity/planning_gate/get_dashboard_prepared', this.table.serverParams)
                .then( res => {
                    this.mini_db.prepared = res.data.data[0];
                    this.dbpreparedloading.isLoading = false;
                });

                this.dbprogressloading.isLoading = true;
                axios.post('/api/slot_and_capacity/planning_gate/get_dashboard_progress', this.table.serverParams)
                .then( res => {
                    this.mini_db.progress = res.data.data[0];
                    this.dbprogressloading.isLoading = false;
                });

                this.dbparkingloading.isLoading = true;
                axios.post('/api/slot_and_capacity/planning_gate/get_dashboard_parking', this.table.serverParams)
                .then( res => {
                    this.mini_db.parking = res.data.data[0];
                    this.dbparkingloading.isLoading = false;
                });
                
                this.dbreleasedloading.isLoading = true;
                axios.post('/api/slot_and_capacity/planning_gate/get_dashboard_released', this.table.serverParams)
                .then( res => {
                    this.mini_db.released = res.data.data[0];
                    this.dbreleasedloading.isLoading = false;
                });
            },
            
            initAircraft: function() {
                axios.get('/api/slot_and_capacity/planning_gate/get_aircraft')
                .then( res => {
                    this.options_ac = res.data
                })
            },

            initPGAccessList: function() {

                let user_json = JSON.parse(localStorage.user)
                let pgwip = user_json.role.permission

                let access_list = user_json.planning_gate_access

                let new_columns = []

                let temp_filter = []


                for(let i = 0; i <= access_list.length; i++) {
                    var temp_col = this.fixed_access_list.filter( list => { return list.field == access_list[i] })
                    temp_filter.push(temp_col[0]);
                }

                new_columns = temp_filter.filter(x => x !== undefined);
                //filter C flag for user with [planning_gates_edit_wip] authorization
                 if(pgwip.map(a => a.slug).indexOf('planning_gate_edit_wip')>=0){
                     //find index of [flag] custom columns
                     let flagindex = new_columns.map(a => a.field).indexOf('flag');
                     //console.log(flagindex);
                     //set default filter value to [flag] custom columns
                     new_columns[flagindex].filterOptions.filterValue = 'C';
                     new_columns[flagindex].filterOptions.enabled = false;
                     this.table.serverParams.sort_field = 'report';
                     this.table.serverParams.sort_type = 'DESC';
                 }
                //console.log(new_columns);

                // Implement Planning Gate custom columns
                this.table.fields = new_columns;
                //this.table.serverParams.sort_field = 'report';
                //this.table.serverParams.sort_type = 'DESC';
                // return new_columns

                // console.log(this.fixed)

                // console.log(fixed_access_list)

                // Target this.table.fields

            },

            initNotification: function(url) {

                // this.loading.isLoading = true
                axios.get('/api/management/notification')
                .then( res => {
                    this.notifications = res.data
                })
            },

            availableDateClass: function(pg)
            {
                let total = 3
                let completed = 0

                if(pg.mrm_available_date != null) {
                    completed = completed + 1
                }

                if(pg.trm_available_date != null) {
                    completed = completed + 1
                }

                if(pg.jobcard_available_date != null) {
                    completed = completed + 1
                }
                // console.log('#'+ pg.pg_id +' | Total is: ' + completed + ' - MRM ' + pg.mrm_available_date + ' - TRM : ' + pg.trm_available_date + ' - JC: ' + pg.jobcard_available_date)
                if(completed < 3 && completed > 0) {
                    return 'color_warning'
                } else if (completed == 3) {
                    return 'color_success'
                } else  {
                    return 'color_empty'
                }
            },


            selectionChanged(params) {
                this.table.selectedRows = [];

                for(let i = 0; i < params.selectedRows.length; i++) {
                    this.table.selectedRows.push(params.selectedRows[i].pg_id)
                }

                // if(this.table.selectedRows.length > 0) {
                //     document.getElementById("update_status").disabled = false;
                //     document.getElementById("update_approval").disabled = false;
                // }else {
                //     document.getElementById("update_status").disabled = true;
                //     document.getElementById("update_approval").disabled = true;
                // }
            },

            rowStyleClassFn(row) {
                //
                // jika D-D <= 0 berarti WIP
                // jika D-D > 0 berarti layover
                return row.difference <= 0 ? 'wip' : 'layover';
            },
            /**
             * Datatable History - Server Side
             */

            handleDatatableChange: function(params) {
                this.loading.isLoading = true
                return new Promise((resolve, reject) => {
                    axios.get('/api/slot_and_capacity/planning_gate', params)
                    .then(res => {
                        this.table.rows = res.data.data
                        this.table.totalRows = res.data.total
                        resolve()
                    })
                    .catch(e => {
                        resolve()
                    })
                })
            },

            // Search Column
            // columnFilterFn: function(data, filterString){

            // },
            filterFn: function(data, filterString) {
                var x = parseInt(filterString)
                return data >= x - 5 && data <= x + 5;
            },

            // EndSearch

            updateParams(newProps) {
                this.table.serverParams = Object.assign({}, this.table.serverParams, newProps)
            },

            onPageChange(params) {
                this.is_filtered = true
                this.updateParams({page: params.currentPage})
                this.initData(this.api.master_index)
            },

            onPerPageChange(params) {
                this.is_filtered = true
                this.updateParams({perPage: params.currentPerPage})
                this.initData(this.api.master_index)
            },

            onSortChange(params) {
                this.is_filtered = true
                this.updateParams({
                    sort_type: params[0].type,
                    sort_field: params[0].field
                })
                this.updateParams({page: 1})
                this.initData(this.api.master_index)
            },

            onColumnFilter(params) {
                this.is_filtered = true
                // console.log(params.columnFilters)
                let col_filter = params.columnFilters
                // this.updateParams(params)
                let new_params = {
                    page: 1,
                    col_ac_reg: col_filter.ac_reg,
                    col_ac_type: col_filter.ac_type,
                    col_ams: col_filter.col_ams_text,
                    col_customer: col_filter.customer,
                    col_main_type: col_filter.main_type,
                    col_status: col_filter.status,
                    col_sapstatus: col_filter.sapstatus,
                    col_level: col_filter.lvl,
                    col_gsmart_id: col_filter.gsmart_id,
                    col_report: col_filter.report,
                    col_flag: col_filter.flag,
                    col_rev: col_filter.rev,
                    // new

                }
                this.updateParams(new_params)
                this.initData(this.api.master_index)
            },

            onColumnSearch(params) {
                this.is_filtered = true

                this.updateParams(params)
                this.updateParams({page: 1})

                this.initData(this.api.master_index)
            },

            // load items is what brings back the rows from server
            loadItems() {
                this.handleDatatableChange(this.table.serverParams).then(()=> {
                    this.loading.isLoading = false
                })
            },
            // End of Datatable

            resizeable: function() {
                var thElm;
                var startOffset;

                Array.prototype.forEach.call(
                document.querySelectorAll("table th"),
                function (th) {
                    th.style.position = 'relative';

                    var grip = document.createElement('div');
                    grip.innerHTML = "&nbsp;";
                    grip.style.top = 0;
                    grip.style.right = 0;
                    grip.style.bottom = 0;
                    grip.style.width = '5px';
                    grip.style.position = 'absolute';
                    grip.style.cursor = 'col-resize';
                    grip.addEventListener('mousedown', function (e) {
                        thElm = th;
                        startOffset = th.offsetWidth - e.pageX;
                    });

                    th.appendChild(grip);
                });

                document.addEventListener('mousemove', function (e) {
                    if (thElm) {
                        thElm.style.width = startOffset + e.pageX + 'px';
                    }
                });

                document.addEventListener('mouseup', function () {
                    thElm = undefined;
                });
            },

            filterDoc: function(cat) {

                this.clearForm()
                // WS
                this.updateParams({page: 1})
                this.table.serverParams.doc_type = cat
                this.liveSearch()
            },

            initSummaryReport: function () {
            /*
                let user_json = JSON.parse(localStorage.user)
                let pgwip = user_json.role.permission
                //console.log(pgwip.map(a => a.slug).indexOf('planning_gate_edit_wip'));
                if(pgwip.map(a => a.slug).indexOf('planning_gate_edit_wip')<0){
                    var params = this.table.serverParams
                    axios.get('/api/slot_and_capacity/planning_gate/summary_report', { params })
                    // axios.get('/api/test/test12')
                    .then(res => {
                        this.summary_report = res.data
                    })
                }
            */
            },

            initHangar: function () {

                var vm = this

                axios.get('/api/management/hangar')
                .then(res => {
                    vm.hangar = res.data.data
                    vm.setLine(vm.hangar[0])
                })
            },

            initDocDueDate: function () {
                axios.get(this.api.doc_due_date)
                .then(res => {
                    this.doc_due_date = res.data
                })
            },

            onSearch(search, loading) {
                loading(true)
                this.search(loading, search, this)
            },
            search: function (loading, search, vm) {
                axios.get('/api/crm_data/revision?search=' + escape(search))
                .then( res => {
                    // res.json().then(json => (vm.options = json))
                    vm.options = res.data
                    loading(false)
                })
            },

            getRev: function () {
                axios.get('/api/crm_data/revision')
                .then(res => {
                    this.modal.rev.data = res.data
                })
            },

            revChange: function() {
                // alert(this.modal.rev.)
                alert(this.modal.rev.selected)
            },

            massHideProject: function() {
                if(!this.grantAccess) return;
                this.loading.isLoading = true
                swal({
                    title: "Are You Sure Want To Hide " + this.table.selectedRows.length + " projects?",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.table.selectedRows
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/hide_mass_project', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.initData(this.api.master_index)
                                this.table.selectedRows = []
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })
            },

            massUnhideProject: function() {
                if(!this.grantAccess) return;
                this.loading.isLoading = true
                swal({
                    title: "Are You Sure Want To Showing Back " + this.table.selectedRows.length + " projects?",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.table.selectedRows
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/show_mass_project', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.initData(this.api.master_index)
                                this.table.selectedRows = []
                                this.loading.isLoading = false
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error")
                                this.loading.isLoading = false
                            }
                        })

                    } else {
                        this.loading.isLoading = false
                    }
                })
            },

            massEnableReport: function() {
                if(!this.grantAccess) return;
                this.loading.isLoading = true
                swal({
                    title: "Are You Sure Want To Enable " + this.table.selectedRows.length + "?",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.table.selectedRows
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/enable_mass_report', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.initData(this.api.master_index)
                                this.table.selectedRows = []
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })
            },

            columnFilterFn(data, level){
                // console.log(data)
                // console.log(level)
            },

            massDisableReport: function() {
                if(!this.grantAccess) return;
                this.loading.isLoading = true
                swal({
                    title: "Are You Sure Want To Disable " + this.table.selectedRows.length + "?",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.table.selectedRows
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/disable_mass_report', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!")
                                this.initData(this.api.master_index)
                                this.table.selectedRows = []
                                this.loading.isLoading = false
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error")
                                this.loading.isLoading = false
                            }
                        })

                    } else {
                        this.loading.isLoading = false
                    }
                })
                // toastr.success(res.data.message, 'Success')
            },

            resetModal: function() {
                this.modal = {
                    file: '',
                    pg_data: {},
                    add_project: {
                        hangar_id: '',
                        line_id: '',
                        ac_type: '',
                        ac_reg: '',
                        ams: '',
                        main_type: '',
                        level: 3,
                        airframe_cat: '',
                        start_date: '',
                        end_date: ''
                    },
                    hgr: {
                        pg_id: '',
                        hangar: '',
                        line: ''
                    },
                    ws: {
                        file: '',
                        files: [],

                    },
                    cogs: {
                        file: '',
                        files: []
                    },
                    proposal: {
                        file: '',
                        files: []
                    },
                    pa: {
                        file: '',
                        files: []
                    },
                    sow: {
                        file: '',
                        files: []
                    },
                    rev: {
                        action: 'detail',
                        selected: '',
                        revnr_qry: '',
                        data: [],
                    },
                    wbs: {
                        selected: ''
                    },
                    so: {
                        selected: ''
                    },
                    reschedule: {
                        action: '',
                        reject_remark: ''
                    },
                    sync: {
                        revnr: '',
                        preview: {}
                    },
                    sharepoint_doc: {
                        ac_document: '',
                        pg_document: '',
                        final_ws_document: ''
                    },
                    available_date: {
                        mrm_available_date: '',
                        trm_available_date: '',
                        jobcard_available_date: '',
                    },
                    change_date: {
                        pg_id: '',
                        start_date_new: '',
                        end_date_new: ''
                    },
                    change_level: {
                        pg_id: '',
                        level_new: ''
                    },
                }
            },

            resetForm: function () {

                $('.vgt-input').val('')

                this.is_filtered = false

                this.table.serverParams = this.empty_params
                this.liveSearch();
            },

            clearForm: function () {

                $('.vgt-input').val('')

                this.is_filtered = false

                this.table.serverParams = this.empty_params;
            },

            liveSearch: function (data = null) {

                if(data == 'hgr') {
                    this.table.serverParams.line = 'all'
                    this.setLineWithHangarId(this.table.serverParams.location)
                }

                if(data == 'date') {

                    if(this.table.serverParams.start_date == '' || this.table.serverParams.end_date == '' || this.table.serverParams.start_date2 == '' || this.table.serverParams.end_date2 == '') {
                        toastr.error('Date parameter cannot be empty!', 'Ooppss!')
                            return
                    }
                    else
                    {
                        if((this.table.serverParams.start_date > this.table.serverParams.end_date) || (this.table.serverParams.start_date2 > this.table.serverParams.end_date2)) {
                            toastr.error('Start Date cant be Larger from End Date', 'Ooppss!')
                            return
                        }
                    }

                }

                this.updateParams({page: 1})
                this.initData(this.api.master_index)
                this.initDashboard();
                this.is_filtered = true
            },

            setLineWithHangarId: function (hangar_id) {
                axios.get('/api/management/hangar/'+hangar_id)
                .then( res => {
                    this.setLine(res.data)
                })
            },

            setLine: function (hangar) {
                if(!this.grantAccess) return;
                this.line = hangar.line
            },

            changeReport: function (list) {
                if(!this.grantAccess) return;
                this.loading.isLoading = true

                swal({
                    title: "Change Status Report",
                    text: "You Are Going to Change Status Report " + list.ac_reg + ". Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {
                        if (list.report === true || list.report === 'y') {
                            axios.post('/api/slot_and_capacity/planning_gate/turn_on_report', list)
                            .then(res => {
                                if(res.data.status == 'error')
                                {
                                    this.initData(this.api.master_index)
                                    toastr.error(res.data.message, 'Oops! Something went wrong')
                                }
                                if (res.data.status == 'success')
                                {
                                    this.initData(this.api.master_index)
                                    toastr.success('Successfully Turned On and You will be able to see on the ABMP', 'Success')
                                }
                            })
                        } else if (list.report === false || list.report === 'n') {
                            axios.post('/api/slot_and_capacity/planning_gate/turn_off_report', list)
                            .then(res => {
                                if (res.data.status == 'success') {
                                    this.initData(this.api.master_index)
                                    toastr.warning('Successfully Turned Off and You will no longer be able to see on the ABMP', 'Success')
                                    this.loading.isLoading = false
                                }
                            })
                        }

                    }
                    else {
                        this.initData(this.api.master_index)
                        // this.loading.isLoading = false
                    }
                })


            },

            onFileChange: function (event) {
                this.modal.file = event.files[0]
            },

            //MENGIRIM FILE UNTUK DI-UPLOAD
            doUpload: function (type) {
                if(!this.grantAccess) return;
                let formData = new FormData()

                formData.append('file', this.modal.file)

                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    },
                    onUploadProgress: function( progressEvent ) {
                        this.progressBar = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                    }.bind(this)
                }

                var pg_id = this.modal.pg_data.pg_id
                if(type=='cogs'){
                    pg_id = this.modal.pg_data.gsmart_id;
                }

                swal({
                    title: "Uploading File",
                    text: "You Are Going to Upload " + type.toUpperCase() + " File. Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        if(!this.modal.file.name || this.modal.file.name == "")
                        {
                            toastr.error('Please select file to start uploading')
                            return
                        }

                        axios.post(
                            '/api/slot_and_capacity/document/' + type + '/' + pg_id,
                            formData, config
                        )
                        .then((res) => {
                            setTimeout(() => {
                                if (res.data.status == 'success') {
                                    this.initData(this.api.master_index)

                                    if(type == 'ws'){
                                        this.wsModal(this.modal.pg_data)
                                    } else if (type == 'cogs') {
                                        this.cogsModal(this.modal.pg_data)
                                    } else if (type == 'pa') {
                                        this.paModal(this.modal.pg_data)
                                    } else if (type == 'pa') {
                                        this.paModal(this.modal.pg_data)
                                    } else if (type == 'sow') {
                                        this.sowModal(this.modal.pg_data)
                                    }

                                    this.initSummaryReport()
                                    toastr.success(res.data.message, 'Success')
                                    // this.hideModal(type + '_modal')
                                    this.progressBar = 0
                                    this.modal.file = ''
                                    this.$refs.file.value = '';
                                }
                            })
                        })
                    } else {
                        toastr.info("Canceled")
                    }
                })

            },

            deleteDoc: function(doc) {
                if(!this.grantAccess) return;
                swal({
                    title: "Deleting Document #" + doc.attc_file,
                    text: "Once it Deleted, You can't restore it. Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/slot_and_capacity/document/' + type + '/' + pg_id, formData,
                                config)
                            .then((res) => {
                                setTimeout(() => {
                                    if (res.data.status == 'success') {
                                        this.initData(this.api.master_index)
                                        this.initSummaryReport()
                                        toastr.success(res.data.message, 'Success')
                                        this.hideModal(type + '_modal')
                                        this.modal.file = ''
                                    }
                                })
                            })
                    } else {
                        toastr.info("Canceled")
                    }
                })
            },

            slotConfirm: function () {
                if(!this.grantAccess) return;
                if (this.modal.hgr.hangar_id == null) {
                    swal('Hangar cant be empty')
                } else if (this.modal.hgr.line_id == null) {
                    swal('Line cant be empty')
                } else {
                    var formData = {
                        pg_id: this.modal.hgr.pg_id,
                        hangar_id: this.modal.hgr.hangar_id,
                        line_id: this.modal.hgr.line_id,
                    }

                    this.loading.button_processing = true

                    axios.post('/api/slot_and_capacity/planning_gate/save_hangar', formData)
                    .then(res => {
                        if (res.data.status == 'success') {
                            this.initData(this.api.master_index)
                            this.initSummaryReport()
                            this.hideModal('hangar_line_modal')
                            toastr.success('Successfully Updated a Data', 'Success')
                            this.loading.button_processing = false
                        }
                    })
                }
            },

            getHangarLine: function(hangar_id) {

                let hangar = {}

                axios.get('/api/management/hangar/'+hangar_id)
                .then( res => {
                    hangar = res.data
                })
            },

            addProjectModal: function (data) {
                this.line = []
                $('#add_project_modal').show()
            },

            syncModal: function() {
                swal({
                    title: 'Syncronize',
                    text: 'Input by Revision Number',
                    content: "input",
                    button: {
                        text: "Search!",
                        closeModal: true,
                    },
                })
                .then(revnr => {
                    if (!revnr) throw null;

                    axios.post('/api/slot_and_capacity/planning_gate/sync_by_rev', {revnr: revnr})
                    .then( res => {
                        if(res.data.status == 'success')
                        {
                            swal("Success!", res.data.message, "success");
                            this.initData(this.api.master_index)
                        }
                        else
                        {
                            swal("Ooppss!", res.data.message, "error");
                        }
                    })
                })
                .catch(err => {
                    if (err) {
                        swal("Oh noes!", "The AJAX request failed!", "error");
                    } else {
                        swal.stopLoading();
                        swal.close();
                    }
                });
            },

            sycnByRev: function() {

            },

            saveProject: function() {
                this.loading.button_processing = true
                let data_validation = [
                    {'element': this.modal.add_project.hangar_id, 'type' : 'Hangar',},
                    {'element': this.modal.add_project.line_id, 'type' : 'Line',},
                    {'element': this.modal.add_project.ac_type, 'type' : 'Aircraft Type',},
                    {'element': this.modal.add_project.ac_reg, 'type' : 'Aircraft Registtration',},
                    {'element': this.modal.add_project.ams, 'type' : 'AMS name',},
                    {'element': this.modal.add_project.airframe_cat, 'type' : 'Airframe Category',},
                    {'element': this.modal.add_project.level, 'type' : 'Level',},
                    {'element': this.modal.add_project.start_date, 'type' : 'Start Date',},
                    {'element': this.modal.add_project.end_date, 'type' : 'End Date',},
                ];

                if(!this.validationNewProject(data_validation)) {
                    return;
                } else {
                    swal({
                        title: "Create new Project / Planning Gate",
                        text: "Continue?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: false,
                    })
                    .then((value) => {
                        if (value) {
                            axios.post(this.api.master_index + '/save_project', this.modal.add_project)
                            .then( res => {
                                this.loading.button_processing = false
                                // console.log(res.data)
                                if (res.data.status == 'success') {
                                    toastr.success(res.data.message, 'Success')

                                    this.initData(this.api.master_index)
                                    this.line = []

                                    this.modal.add_project = {
                                        hangar_id: '',
                                        line_id: '',
                                        ac_type: '',
                                        ac_reg: '',
                                        ams: '',
                                        main_type: '',
                                        level: '',
                                        airframe_cat: '',
                                        start_date: '',
                                        end_date: ''
                                    }

                                    this.hideModal('add_project_modal')
                                }
                                else
                                {

                                }
                            })

                        }
                        else {
                            this.initData(this.api.master_index)
                            // this.loading.isLoading = false
                        }
                    })
                }

            },

            validationNewProject: function(elements) {
                
                this.loading.button_processing = false

                for(let i = 0; i < elements.length; i++) {
                    if(elements[i].element == "") {
                        toastr.warning(elements[i].type + ' cant be empty');
                        return false;
                    }
                }
                return true;
            },

            changeLevel: function(data) {
                if(!this.grantAccess) return;
                var vm = this

                vm.modal.pg_data = data
                vm.modal.change_level = data

                $('#change_level_modal').show()
            },

            saveLevel: function() {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Change Level",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.change_level.pg_id,
                            level_new: this.modal.change_level.level_new
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/save_level', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('change_level_modal')
                                this.initData(this.api.master_index)
                                this.initSummaryReport()
                                this.modal.change_level ={
                                    pg_id: '',
                                    level_new: ''
                                }
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })

            },

            changeAms: function(data) {
                if(!this.grantAccess) return;
                var vm = this

                vm.modal.pg_data = data
                vm.modal.change_ams = data

                $('#change_ams_modal').show()
            },

            saveAms: function() {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Change AMS",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.change_ams.pg_id,
                            ams_new: this.modal.change_ams.ams_new
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/save_ams', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('change_ams_modal')
                                this.initData(this.api.master_index)
                                // this.initSummaryReport()
                                this.modal.change_ams ={
                                    pg_id: '',
                                    ams_new: ''
                                }
                                this.initData(this.api.master_index)
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })

            },

            validURL: function (str) {
                if (!str) return true

                const res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

                return res !== null

            },

            editForm: function() {
                toastr.success('ok');
                this.modal.editable = true
            },

            visitLink: function(dest_url) {
                return window.open(dest_url, "_blank");
            },

            saveSharepoint: function() {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Save Sharepoint Documents",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.pg_data.pg_id,
                            ac_document: this.modal.sharepoint_doc.ac_document,
                            pg_document: this.modal.sharepoint_doc.pg_document,
                            final_ws_document: this.modal.sharepoint_doc.final_ws_document,
                        }

                        if(!this.validURL(this.modal.sharepoint_doc.ac_document)) {
                            return toastr.error('A/C Document is not a Valid URL')
                        }

                        if(!this.validURL(this.modal.sharepoint_doc.pg_document)) {
                            return toastr.error('Planning Gate Document is not a Valid URL')
                        }

                        if(!this.validURL(this.modal.sharepoint_doc.final_ws_document)) {
                            return toastr.error('Final Workscope Document is not a Valid URL')
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/save_sharepoint_doc', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('sharepoint_documents')
                                this.hideModal('doc1_modal')
                                this.hideModal('doc2_modal')
                                this.hideModal('sharepoint_documents')
                                this.initData(this.api.master_index)
                                this.initSummaryReport()
                                this.modal.change_level ={
                                    pg_id: '',
                                    level_new: ''
                                }
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })

            },

            saveAvailableDate: function() {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Save MRM, TRM & Jobcard Available Date",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.pg_data.pg_id,
                            mrm_available_date: this.modal.available_date.mrm_available_date,
                            trm_available_date: this.modal.available_date.trm_available_date,
                            jobcard_available_date: this.modal.available_date.jobcard_available_date,
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/save_available_date', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('available_date_modal')
                                this.initData(this.api.master_index)
                                // this.initSummaryReport()
                                // this.modal.change_level ={
                                //     pg_id: '',
                                //     level_new: ''
                                // }
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })

            },

            changeDate: function(data) {
                var vm = this

                vm.modal.pg_data = data
                vm.modal.change_date = data

                $('#change_date_modal').show()
            },

            saveDate: function() {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Change Date",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.change_date.pg_id,
                            start_date_new: this.modal.change_date.start_date_new,
                            end_date_new: this.modal.change_date.end_date_new
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/save_date', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('change_date_modal')
                                this.initData(this.api.master_index)
                                this.initSummaryReport()
                                this.modal.change_date ={
                                    pg_id: '',
                                    start_date_new: '',
                                    end_date_new: ''
                                }
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })

            },

            changeLevelToDefault: function(data) {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Change Level Into Default Value",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.change_level.pg_id,
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/default_level', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('change_level_modal')
                                this.initData(this.api.master_index)
                                this.initSummaryReport()
                                this.modal.change_level = {
                                    // pg_id: '',
                                    level_new: null,
                                }
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })
            },

            changeAmsToDefault: function(data) {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Change AMS Into Default Value",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.change_ams.pg_id,
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/default_ams', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('change_ams_modal')
                                this.initData(this.api.master_index)
                                this.initSummaryReport()
                                this.modal.change_ams = {
                                    // pg_id: '',
                                    ams_new: null,
                                }
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })
            },

            changeDateToDefault: function(data) {
                if(!this.grantAccess) return;
                swal({
                    title: "Are You Sure Want To Change Date Into Default Value",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: false,
                })
                .then((value) => {
                    if (value) {

                        let params = {
                            pg_id: this.modal.change_date.pg_id,
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/default_date', params)
                        .then( res => {
                            if(res.data.status == 'success')
                            {
                                toastr.success(res.data.message, "Success!");
                                this.hideModal('change_date_modal')
                                this.initData(this.api.master_index)
                                this.initSummaryReport()
                                this.modal.change_date = {
                                    // pg_id: '',
                                    start_date_new: null,
                                    end_date_new: null
                                }
                            }
                            else
                            {
                                swal("Ooppss!", res.data.message, "error");
                            }
                        })

                    }
                })
            },

            hangarLineModal: function (data) {
                // console.log(this.grantAccess)
                if (!this.grantAccess) {
                    return
                }

                var pg_id = data.pg_id
                var vm = this

                if(data.hangar_id != null)
                {
                    axios.get('/api/management/hangar/' + data.hangar_id)
                    .then( res => {
                        vm.line = res.data.line
                    })
                }
                else
                {
                    vm.line = []
                }

                axios.get('/api/slot_and_capacity/planning_gate/detail_hangar/' + pg_id)
                .then(res => {
                    if (res.data.status == 'success') {
                        // vm.setLine(this.hangar[0])
                        vm.modal.hgr = res.data.data
                        $('#hangar_line_modal').show()
                    }
                })

            },

            wsModal: function (data) {

                var vm = this

                vm.modal.pg_data = data

                // Check if data is exist

                axios.get('/api/slot_and_capacity/attachment/ws/' + data.gsmart_id)
                .then(res => {
                    vm.modal.ws.files = res.data
                })

                $('#ws_modal').show()
            },

            cogsModal: function (data) {

                var vm = this

                vm.modal.pg_data = data

                // Check if data is exist
                axios.get('/api/slot_and_capacity/attachment/cogs/' + data.gsmart_id)
                .then(res => {
                    vm.modal.cogs.files = res.data
                })

                $('#cogs_modal').show()
            },

            proposalModal: function (data) {

                var vm = this

                vm.modal.pg_data = data

                // Check if data is exist
                axios.get('/api/slot_and_capacity/attachment/proposal/' + data.gsmart_id)
                .then(res => {
                    vm.modal.proposal.files = res.data
                })

                $('#proposal_modal').show()
            },

            paModal: function (data) {

                var vm = this

                vm.modal.pg_data = data

                // Check if data is exist
                axios.get('/api/slot_and_capacity/attachment/pa/' + data.gsmart_id)
                .then(res => {
                    vm.modal.pa.files = res.data
                })

                $('#pa_modal').show()
            },

            sowModal: function (data) {

                var vm = this

                vm.modal.pg_data = data
                // console.log(data)

                // Check if data is exist
                axios.get('/api/slot_and_capacity/attachment/sow/' + data.gsmart_id)
                .then(res => {
                    vm.modal.sow.files = res.data
                })

                $('#sow_modal').show()
            },

            revModal: function (data) {

                var vm = this

                vm.modal.pg_data = data

                vm.getRev()

                // $('#rev_select').select2()

                $('#rev_modal').show()
            },

            remarkModal: function (data) {
                var vm = this

                vm.modal.pg_data = data

                $('#remark_modal').show()
            },

            rescheduleModal: function (data, action) {
                var vm = this

                this.modal.reschedule.action = action

                vm.modal.pg_data = data

                $('#reschedule_modal').show()
            },

            sharepointModal: function (data) {

                // console.log(data)
                var vm = this

                vm.modal.sharepoint_doc.ac_document = data.ac_document
                vm.modal.sharepoint_doc.pg_document = data.pg_document
                vm.modal.sharepoint_doc.final_ws_document = data.final_ws_document

                vm.modal.pg_data = data

                $('#sharepoint_documents').show()
            },

            // Doc 1
            doc1Modal: function (data) {

                // console.log(data)
                var vm = this

                vm.modal.sharepoint_doc.final_ws_document = data.final_ws_document

                vm.modal.pg_data = data

                $('#doc1_modal').show()
            },

            soaModal: function (data) {
                axios.get('/api/slot_and_capacity/planning_gate/get_document_soa/' + data.pg_id)
                .then( res => {
                    this.docmultiple = res.data
                    console.log(this.docmultiple);
                    this.modal.pg_data = data;
                    this.soa_doc = "";
                    document.getElementById("view_doc").innerHTML = "";

                    for (var i = 0; i < this.docmultiple.length; i++) {

                        const anchor = document.createElement('a');
                        const list = document.getElementById('view_doc');
                        const li = document.createElement('li');
                        anchor.href = '/uploads/soa/' + this.docmultiple[i].doc_soa;
                        anchor.target = '_blank';
                        anchor.innerText = this.docmultiple[i].doc_soa;
                        li.appendChild(anchor);
                        list.appendChild(li);
                    }



                    document.getElementById("file_soa").value = "";

                    $('#soa_modal').show();
                })
                .catch(e => {
                    console.log("Error: " + e);
                })

            },
            // Doc 1

            // Doc 2
            doc2Modal: function (data) {

                // console.log(data)
                var vm = this

                vm.modal.sharepoint_doc.ac_document = data.ac_document
                vm.modal.sharepoint_doc.pg_document = data.pg_document
                vm.modal.sharepoint_doc.final_ws_document = data.final_ws_document

                vm.modal.pg_data = data

                $('#doc2_modal').show()
            },
            // Doc 2

            availableDateModal: function (data) {

                // console.log(data)
                var vm = this

                vm.modal.available_date.mrm_available_date = data.mrm_available_date
                vm.modal.available_date.trm_available_date = data.trm_available_date
                vm.modal.available_date.jobcard_available_date = data.jobcard_available_date

                vm.modal.pg_data = data

                $('#available_date_modal').show()
            },

            rejectModal: function (data) {
                var vm = this

                vm.modal.pg_data = data

                $('#reject_modal').show()
            },

            historyModal: function (data) {
                var vm = this

                vm.modal.pg_data = data

                $('#timeline_modal').show()
            },

            rescheduleProcess: function (type) {
                var vm = this

                swal({
                    title: type.toUpperCase() + " Reschedule " + this.modal.pg_data.ac_reg,
                    text: "You Are Going to " + type.toUpperCase() + " Reschedule. Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        this.loading.isLoading = true
                        this.loading.button_processing = true
                        if (type == 'reject') {

                            var data = {
                                pg_id: vm.modal.pg_data.pg_id,
                                reject_remark: vm.modal.reschedule.reject_remark,
                                status: 1,
                            }

                            if (!vm.modal.reschedule.reject_remark) {
                                swal('Reject Remark should be filled')
                                this.loading.isLoading = false
                                this.loading.button_processing = false
                            } else {
                                axios.post('/api/slot_and_capacity/planning_gate/reject_reschedule', data)
                                .then(res => {
                                    if (res.data.status == 'success') {
                                        hideModal('reschedule_modal')
                                        toastr.success(res.data.message, 'Success')
                                        this.initData(this.api.master_index)
                                        this.initSummaryReport()

                                        this.loading.isLoading = false
                                        this.loading.button_processing = false
                                    } else {
                                        toastr.error('Something went wrong', 'Oopppss!!')

                                        this.loading.isLoading = false
                                        this.loading.button_processing = false
                                    }
                                })
                            }

                        } else if (type == 'approve') {

                            var data = {
                                pg_id: vm.modal.pg_data.pg_id,
                                status: 1,
                            }

                            axios.post('/api/slot_and_capacity/planning_gate/approve_reschedule', data)
                            .then(res => {
                                if (res.data.status == 'success') {
                                    hideModal('reschedule_modal')
                                    toastr.success(res.data.message, 'Success')
                                    this.initData(this.api.master_index)
                                    this.initSummaryReport()

                                    this.loading.isLoading = false
                                    this.loading.button_processing = false
                                } else {
                                    toastr.error('Something went wrong', 'Oopppss!!')

                                    this.loading.isLoading = false
                                    this.loading.button_processing = false
                                }
                            })
                        }
                    }
                })

            },

            notificationAction: function(event, notif, pg_id) {

                this.loading.isLoading = true

                if(event) {

                    let params = {
                        user: JSON.parse(localStorage.user).id,
                        pgid: pg_id,
                        notiftype: notif.id
                    }

                    let endpoint = 'https://prod-16.southeastasia.logic.azure.com:443/workflows/675427fb74e44ba1b8aebfb7c7df87ca/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=r8cSfZTfmVhBhSdODPoJ3N4p6MaDYtX5fWuDw5ufISQ'

                    $.ajax(endpoint, {
                        data: JSON.stringify(params), //{action:'x',params:['a','b','c']}
                        type: 'POST',
                        processData: false,
                        contentType: 'application/json' //typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
                    })
                    .done( msg => {
                        toastr.success(msg, 'Success')
                        this.loading.isLoading = false
                    })
                    .fail(function( jqXHR, textStatus ) {
                        toastr.error( "Request failed: " + textStatus )
                        this.loading.isLoading = false

                    })

                }

            },

            saveRevision: function() {
                if(!this.grantAccess) return;
                this.loading.isLoading = true

                swal({
                    title: "Are You Sure Want To Update Revision Number",
                    text: "This Action will affected this project within WBS Number & SO Number. Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {

                        let data = {
                            id: this.modal.pg_data.id,
                            rev: this.modal.rev.selected.id,
                            wbs: this.modal.wbs.selected,
                            so: this.modal.so.selected
                        }

                        axios.post('/api/slot_and_capacity/planning_gate/save_revision', data)
                        .then( res => {
                            if (res.data.status == 'success')
                            {
                                this.initData(this.api.master_index)

                                this.hideModal('rev_modal')
                                this.loading.isLoading = false

                                toastr.success('Successfully Assign Revision Number', 'Success')
                            }
                        })
                    }
                })
            },

            emptyIndicator: function() {

            },

            rejectReschedule: function () {
                if(!this.grantAccess) return;
                var vm = this
            },

            hideModal: function (modal_name) {
                // deleteformhere
                this.resetModal()
                $('#' + modal_name).hide()
            },

            handlerCheckAircraftgantt: function(data) {
                if(data.ac_type == "") {
                    this.modal.pg_data = data;
                    this.ac_form.pg_id = data.pg_id;
                    toastr.warning("Aircraft type empty, please input aircraft type");
                    $("#ac_modalgantt").show();
                    return;
                }
                this.$router.push({name: 'module2.gantt_chart.detail', params: {pg_id: data.pg_id}});
            },

            handlerCheckAircraft: function(data) {
                    this.modal.pg_data = data;
                    this.ac_form.pg_id = data.pg_id;
                    toastr.warning("Aircraft type empty, please input aircraft type");
                    $("#ac_modal").show();
                    return;
            },

            saveAircraft: function() {
                if(!this.grantAccess) return;
                if(!this.handlerValidate()) return;

                this.handleButton('btn-save-aircraft', 'load').then(() => {
                    axios.post('/api/slot_and_capacity/planning_gate/save_aircraft_type', {
                        pg_id: this.ac_form.pg_id,
                        ac_type: this.ac_form.ac_type
                    })
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message)
                        }else {
                            toastr.warning(res.data.message)
                        }
                        this.handleButton('btn-save-aircraft', 'stop');
                        $("#ac_modal").hide();
                        this.initData(this.api.master_index);
                    })
                    .catch(e => {
                        console.log("Error: "+e)
                        this.handleButton('btn-save-aircraft', 'stop');
                    })



                })
            },

            saveAircraftgantt: function(savetype) {
                if(!this.handlerValidate()) return;

                this.handleButton('btn-save-aircraftgantt', 'load').then(() => {
                    axios.post('/api/slot_and_capacity/planning_gate/save_aircraft_type', {
                        pg_id: this.ac_form.pg_id,
                        ac_type: this.ac_form.ac_type
                    })
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message)
                            this.$router.push({name: 'module2.gantt_chart.detail', params: {pg_id: this.ac_form.pg_id}})
                        }else {
                            toastr.warning(res.data.message)
                        }
                        this.handleButton('btn-save-aircraftgantt', 'stop');
                    })
                    .catch(e => {
                        console.log("Error: "+e)
                        this.handleButton('btn-save-aircraftgantt', 'stop');
                    })
                })
            },

            handlerValidate: function() {
                if(this.ac_form.ac_type == "") {
                    toastr.warning("Aircraft type field is required");
                    return false;
                }

                if(/\s/.test(this.ac_form.ac_type)) {
                    toastr.warning("Aircraft type can't contain any whitespace");
                    return false;
                }

                return true;
            },

            handleButton: function(id, status, type="") {
                let element = document.getElementById(id);
                return new Promise((resolve, reject) => {
                    if(status == "load") {
                        element.className += " is-loading";
                        element.disabled = true;

                        setTimeout(() => {
                        resolve();
                        }, 500);

                    }else {
                        element.className = `button ${type}`;
                        element.disabled = false;
                        resolve();
                    }
                })
            },
            handlerModalRevision: function(data_revision, type, data) {
                this.modal.pg_data = data
                this.modal_rev.data = data_revision ?  data_revision.split(',') : [];
                this.modal_rev.type = type;

                $(`#modal-revision`).show();

            },

            handlerModalStatus: function(data) {
                this.modal.pg_data = data;

                $('#modal-status').show()
            },

            handlerStatus: function(status) {
                let tmp_status = "";
                if(status == "0") tmp_status = "Gsmart Open";
                if(status == "1") tmp_status = "Gsmart Progress";
                if(status == "2") tmp_status = "Gsmart Cancel";
                if(status == "3") tmp_status = "Gsmart Closed";
                if(status == "4") tmp_status = "Gsmart Wait";
                if(status === "REL") tmp_status = "REL (Progress)";
                if(status === "CRTD") tmp_status = "CRTD (Prepared)";
                if(status === "CLSD") tmp_status = "CLSD (Released)";

                return tmp_status;
            },

            handlerUpdateStatus: function(isReset=false, button_id, type) {
                if(!this.grantAccess) return;
                if(!isReset && (this.modal.pg_data.status_new === "" | this.modal.pg_data.status_new === null)) {
                    toastr.warning("New status can't be empty");
                    return;
                }
                swal({
                    title: "Change Project Status",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        this.handleButton(button_id, 'load', type).then(() => {
                            axios.post('/api/slot_and_capacity/planning_gate/update_status', {
                                pg_id: this.modal.pg_data.pg_id,
                                status: isReset ? null : this.modal.pg_data.status_new,
                            })
                            .then( res => {
                                if(res.data.success) {
                                    toastr.success(res.data.message);
                                    this.handlerAfterRequest();

                                    setTimeout(()=> {
                                        this.hideModal('modal-status')
                                    }, 500)
                                }
                                else {
                                    toastr.error(res.data.message);
                                }
                                this.handleButton(button_id, 'stop', type);
                            })
                            .catch((e) => {
                                this.handleButton(button_id, 'stop', type);
                                toastr.error("Failed update project status");
                                console.log(e);
                            })
                        })


                    }
                })
            },

            handlerAfterRequest: function() {
                toastr.info('Refreshing data ...');

                axios.post(this.api.master_index, this.table.serverParams)
                .then(res => {
                    this.table.rows = res.data.data
                    this.table.totalRows = res.data.total
                    toastr.remove();
                    toastr.success('Data refreshed');
                })
                .catch(e => {
                    console.log("Error: "+e);
                    toastr.remove();
                    toastr.error("Undefined error");
                })
            },

            handlerDeletePG: function(id) {
                if(!this.grantAccess) return;
                swal({
                    title: "Remove Project",
                    text: "Continue?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.get(`/api/slot_and_capacity/planning_gate/remove/${id}`)
                        .then(res => {
                            if(res.data.success) {
                                this.handlerAfterRequest();
                                toastr.success(res.data.message);
                            }else {
                                toastr.error(res.data.message);
                            }
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            toastr.error("Undefined error");
                        })
                    }
                })
            },

            addTag: function (newTag) {
                this.options_ac.push({ac_reg: newTag});
            },

            onChangeSOAFileUpload: function(){
                if(document.getElementById("file_soa").files.length !== 0 ){
                    this.soa_doc = this.$refs.file_soa.files[0];
                }
            },

            handlerUploadSOAFile: function(user_id) {
                if(!this.grantAccess) return;

                if(this.soa_doc == "") {
                    toastr.warning("SOA document can't be empty");
                    return ;
                }

                this.handleButton('btn-upload-soa', 'load', 'is-success').then(() => {
                    let formData = new FormData();
                    formData.append('pg_id', this.modal.pg_data.pg_id);
                    formData.append('user_id', user_id);
                    var today = new Date();
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" +
                    today.getSeconds();
                    var dateTime = date+' '+time;
                    formData.append('upload_date', dateTime);
                    // formData.append('file', this.soa_doc);
                    for( var i = 0; i < this.$refs.file_soa.files.length; i++ ){
                        let file_soa = this.$refs.file_soa.files[i];
                        console.log(file_soa);
                        formData.append('file[' + i + ']', file_soa);
                    }
                    // console.log(this.soa_doc);
                    axios.post('/api/slot_and_capacity/planning_gate/upload_soa', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message)
                            this.handlerAfterRequest();
                            setTimeout(()=> {
                                this.hideModal('soa_modal');
                            }, 500)

                        }else {
                            toastr.warning(res.data.message);
                        }
                        this.handleButton('btn-upload-soa', 'stop', 'is-success');
                    })
                    .catch(e => {
                        console.log("Error: "+e)
                        toastr.error("Undefined error");
                        this.handleButton('btn-upload-soa', 'stop', 'is-success');

                    })
                })
            },

            handlerOpenLink: function(link) {
                link && window.open(link, "_blank");
            },

            formatDate: function(d) {
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) 
                    month = '0' + month;
                if (day.length < 2) 
                    day = '0' + day;

                return [year, month, day].join('-');
            },

            db_filter_param: function(db_type, cust_type, unlinked) {
                let params = {
                    columnFilters: {
                            ac_reg: '',
                            ac_type: '',
                            ams_text: '',
                            main_type: '',
                            cust_code: '',
                            ams: ''
                        },
                        is_show: 'y',
                        is_xpream: 'n',
                        sort_type: '',
                        sort_field: '',
                        page: 1,
                        perPage: 10,
                        doc_type: 'all',
                        level: 'all',
                        report: 'all',
                        location: this.table.serverParams.location,
                        line: this.table.serverParams.line,
                        airframe_category: 'all',
                        customer_category: 'all',
                        project_status: 'all',
                        doc_type: 'all',

                        col_ac_reg: '',
                        col_ac_type: '',
                        col_ams: '',
                        col_level: '',
                        col_gsmart_id: '',
                        col_flag: '',
                        col_report: '',
                        col_status: '',
                        col_sapstatus: '',
                        col_rev: '',
                        col_ac_regs: [],
                        start_date: this.table.serverParams.start_date,
                        end_date: this.table.serverParams.end_date,
                        start_date2: this.table.serverParams.start_date2,
                        end_date2: this.table.serverParams.end_date2,
                        interval_logic: this.table.serverParams.interval_logic,
                        searchTerm: '',
                        col_status_parking: '',
                        crm_unlinked: '',
                        gsmart_unlinked: ''                        
                    };


                if(db_type == 'salesopen'){
                    params.customer_category = cust_type;
                    params.col_level = '1';
                    params.col_flag = 'G';
                    params.col_status = 'Sales Open';
                    params.acreg_notnull = 'y';
                    params.maintype_notnull = 'y';
                    if(unlinked=='unlinked'){
                        params.gsmart_unlinked = 'y';
                    }
                }
                else if(db_type == 'prepared'){
                    params.customer_category = cust_type;
                    params.col_flag = 'C';
                    params.col_status = 'Prepared';
                    if(unlinked=='unlinked'){
                        params.crm_unlinked = 'y';
                    }                    
                }
                else if(db_type == 'progress'){
                    params.customer_category = cust_type;
                    params.col_flag = 'C';
                    params.col_status = 'Progress';
                    params.col_report = 'y';
                    if(unlinked=='unlinked'){
                        params.crm_unlinked = 'y';
                    }                     
                }
                else if(db_type == 'parking'){
                    params.customer_category = cust_type;
                    params.col_flag = 'C';
                    params.col_status_parking = 'y';
                    if(unlinked=='unlinked'){
                        params.crm_unlinked = 'y';
                    }                     
                }
                else if(db_type == 'released'){
                    params.customer_category = cust_type;
                    params.col_flag = 'C';
                    params.col_status = 'Released';
                    if(unlinked=='unlinked'){
                        params.crm_unlinked = 'y';
                    }                     
                }
                $('.vgt-input').val('')

                this.is_filtered = true

                this.table.serverParams = params
                this.updateParams({page: 1})
                this.initData(this.api.master_index)

            },         
        }

    }

</script>

<style scoped>

    ::v-deep .vgt-table {
       /* height: 100%; */
       /* border-collapse: collapse !important; */
       border-top: none !important;
   }


   ::v-deep .vgt-table thead tr:first-child th, .vgt-table thead tr:first-child td {
       position: sticky !important;
       position: -webkit-sticky !important; /* Safari */
       top: 0 !important;
       z-index: 1 !important;
       box-shadow: inset 0 2px 0 #dcdfe6, inset 0 -1px 0 #dcdfe6 !important;
       border: none !important;
   }

   ::v-deep .vgt-table thead tr:nth-child(2) th, .vgt-table thead tr:nth-child(2) td {
       position: sticky !important;
       position: -webkit-sticky !important;
       top: 34.12px !important;
       z-index: 1 !important;
       box-shadow: inset 0 1px 0 #dcdfe6, inset 0 -2px 0 #dcdfe6 !important;
       border: none !important;

   }

    ::v-deep .pgTble td, .pgTble th {
        font-size: 11px;
        text-align: center;
    }

    ::v-deep .mini_db {
        margin-bottom: 8px;
        margin-right: 4px;
        color: black;
        background-color: #FAFAFA;
        border-color: #E0E0E0;
        border-radius: 9px;
        font-size: 11px;
        white-space: normal;
        text-align: left;
        line-height: 120%;
    }

    ::v-deep .mini_db:hover {
        background-color: #ffeb8a;
        border-color: #c29e50;
    }

    ::v-deep .salesopenbackground {
        border:1px solid #ff7592;
        cursor:pointer;
    }

    ::v-deep .salesopenbackground:hover {
        border:1px solid #ff2051;
        background-color: #ffd4de;
    }

    ::v-deep .preparedbackground {
        border:1px solid #0fa3b1;
        cursor:pointer;
    }

    ::v-deep .preparedbackground:hover {
        border:1px solid #0b7882;
        background-color: #c4e6ea;
    }

    ::v-deep .progressbackground {
        border:1px solid #fcd0a1;
        cursor:pointer;
    }

    ::v-deep .progressbackground:hover {
        border:1px solid#c77b2a;
        background-color: #ffe9d1;
    }

    ::v-deep .parkingbackground {
        border:1px solid #564d65;
        cursor:pointer;
    }

    ::v-deep .parkingbackground:hover {
        border:1px solid #3e334f;
        background-color: #ebdeff;
    }

        ::v-deep .releasedbackground {
        border:1px solid #2cda9d;
        cursor:pointer;
    }

    ::v-deep .releasedbackground:hover {
        border:1px solid #147853;
        background-color: #c9f5e6;
    }
    ::v-deep .file_list {
        max-height: 250px;
        overflow: hidden;
        overflow-y: scroll;
    }

    ::v-deep .dot_mini_db {
        border: 5px solid #ffd774;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
        background-color: #ffd774;
        color:rgb(191, 73, 23);
        font-weight: bold;
        text-align: center;
    }


    ::v-deep .dot {
    /*    height: 20px;
        width: 20px;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;*/
        font-size: 14px; 
        margin-bottom: 1em; 
        padding: 0.25em 0 0 2.5em; 
        position: relative; 
    }

    ::v-deep .dot:before {
        content: " "; 
        display: block;
        border-radius: .8em; 
        height: 0;
        width: 0;
        position: absolute; 
        left: 0.5em;
        top: 40%; 
        margin-top: -0.5em;
    }

    ::v-deep .dot.color_success:after {
        cursor: pointer;
        content: " ";
        display: block;
        width: 0.5em; 
        height: 0.8em;
        border: solid white;
        border-width: 0 0.2em 0.2em 0;
        position: absolute;
        left: 1em;
        top: 40%;
        margin-top: -0.2em;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    ::v-deep .dot.color_empty:before {
        border: solid 0.8em #bbb; 
        /*background-color: #bbb;*/
    }

    ::v-deep .dot.color_success:before {
        border: solid 0.8em#4CAF50; 
        cursor: pointer;
        /*background-color: #4CAF50;*/
    }

    ::v-deep .dot.color_warning:before {
        border: solid 0.8em #FF9800; 
        cursor: pointer;
        /*background-color: #FF9800;*/
        color: #FAFAFA
    }

    ::v-deep .dot.color_danger:before {
        border: solid 0.8em #f93232; 
        cursor: pointer;
        /*background-color: #f93232;*/
        color: #fafafa
    }

    ::v-deep.form_padding {
        padding-bottom: 18px;
    }

    /* Customize the label (the container) */
    ::v-deep .radio-button,
    .checkbox {
        position: relative;
        margin: 20px 0;
    }

    ::v-deep .checkbox {
        display: block;
    }

    ::v-deep .radio-button input,
    .checkbox input {
        position: absolute;
        margin: 5px;
        padding: 0;
        /* for mobile accessibility (iOS Label Bug) */
        visibility: hidden;
    }

    ::v-deep .radio-button .label-visible,
    .checkbox .label-visible {
        margin-left: 2em;
        margin-bottom: 0;
    }

    ::v-deep .fake-radiobutton,
    .fake-checkbox {
        position: absolute;
        display: block;
        top: 0;
        left: 3px;
        width: 20px;
        height: 20px;
        border: 1px solid slategray;
        background-color: white;
    }

    ::v-deep .fake-radiobutton:after,
    .fake-checkbox:after {
        content: "";
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        background: navy;
        transform: translateX(-50%) translateY(-50%);
    }

    ::v-deep .fake-radiobutton {
        border-radius: 50%;
    }

    ::v-deep .fake-radiobutton:after {
        border-radius: 50%;
    }

    ::v-deep input[type="radio"]:checked+span .fake-radiobutton:after,
    ::v-deep input[type="checkbox"]:checked+span .fake-checkbox:after {
        display: block;
    }

    ::v-deep .select_spesial {
        all: unset
    }

    ::v-deep .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;
    }

    ::v-deep .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    ::v-deep .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    ::v-deep .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    ::v-deep .is-col input[type='checkbox'] {
        width: 30px;
    }

    ::v-deep .wip {
        background-color: #fdf9e8;
        /* background-color:blue; color:white; */
    }

    ::v-deep .layover {
        background-color: #dff9fb;
        /* background-color:blue; color:white; */
    }

    ::v-deep .centerize {
        margin: auto;
        text-align: center
    }

    ::v-deep .is-new_date {
        border: 1px solid coral;
        background: white;
        color: black;
    }

    ::v-deep .multiselect__tags {
        min-height: 30px !important;
        padding: 0px 40px 0 8px !important;
        margin-top: 4px !important;
    }

    ::v-deep .multiselect__tag {
        margin-top: 5px !important;
        margin-bottom: 1px !important;
    }

    ::v-deep .multiselect__input {
        height: 30px !important;
        margin-top: 5px !important;
    }

    ::v-deep .multiselect__placeholder {
        font-size: 10pt !important;
        margin-top: 4px !important;
        margin-bottom: 6px !important;
        font-weight: normal !important;
    }

    ::v-deep .multiselect--active .multiselect__select {
        padding-top: 0px !important;
    }

    ::v-deep .multiselect__option {
        font-size: 10pt !important;
        font-weight: normal !important;
    }

    ::v-deep .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    ::v-deep .fade-enter, .fade-leave-to {
        opacity: 0;
    }



</style>

