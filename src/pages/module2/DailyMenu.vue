<style scoped>
    ::v-deep .box-order {
        width: 100%;
        border: 1px solid #eee;
        border-radius: 8px;
        margin-bottom: 10px;
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
        color: #13CE66;
    }

    ::v-deep .action > i.primary {
        color: #026396;
    }

    ::v-deep .action > i.success:hover {
        background-color: #13CE66;
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

    ::v-deep .tooltip-x:hover .tooltiptext-x {
        visibility: visible !important;
    }


    ::v-deep .status-handler {
        color: white;
        font-size: 9pt;
        border-radius: 5px;
    }

    ::v-deep .status-handler.success {
        background-color: #13CE66;
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

    ::v-deep .status-handler.warning {
        background-color: #ffc107;
        padding: 4px !important;

    }

    ::v-deep .link-handler {
        color: #1b69b6;
        cursor: pointer;
    }

    ::v-deep .link-handler:hover {
        text-decoration: underline;
    }

    ::v-deep .outer-x {
        display: table;
        top: 0;
        height: 100%;
        width: 100%;
    }

    ::v-deep .inner-x {
        display: table-cell;
        vertical-align: middle;
    }

</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header ">
                    <div class="title-area">
                        <h3 class="title">
                            List Project
                        </h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box">

                         <div class="option-item">
                            <span style="white-space: nowrap">Location</span>
                            <select v-on:change="handlerFilterLine()" v-model="filter.location">
                                <option value="">All Location</option>
                                <option v-for="hangar in hangars" :key="hangar.ID"  :value="hangar.id" >{{hangar.name + ' - ' + hangar.description}}</option>
                            </select>
                        </div>
                        <div class="option-item">
                            <span style="white-space: nowrap">Line</span>
                            <select v-on:change="handlerFilter()"  v-model="filter.line">
                                <option  value="" selected>All Line</option>
                                <option v-for="line in lines" :key="line.id"  :value="line.id" >{{line.line_name + ' ' + line.description}}</option>
                            </select>
                        </div>
                        <div class="option-item">
                            <span style="white-space: nowrap">Status</span>
                            <select v-on:change="handlerFilter()" v-model="filter.status">
                                <option value="">All Status</option>
                                <option value="0">Open</option>
                                <option value="1">Progress</option>
                                <option value="2">Cancel</option>
                                <option value="CLSD">Closed</option>
                                <option value="4">Wait</option>
                                <option value="REL">Release</option>
                                <option value="CRTD">Created</option>
                            </select>
                        </div>
                        <div class="option-item">
                             Search
                             <input v-on:keyup.enter="handlerFilter()" v-model="filter.search" type="text" placeholder="Type and enter">
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div style="box-sizing: border-box; position: relative; min-height: 40px;">
                        <div>
                            <loading
                                :active.sync="loading.isLoading"
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                        </div>

                        <div>
                            <loading
                                :active.sync="loading.isLoadingPaginate"
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType">
                            </loading>
                        </div>

                        <div v-for="(pg, index) in data_pg" :key="index" class="box-order">
                            <div class="is-row" style="padding: 20px 20px 10px 20px;">
                                <div class="is-col is-40">
                                    <div >
                                        <div>
                                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                                flight
                                            </i>
                                            <div style="font-size: 12pt; font-weight: bold; margin: -24px 0px 0px 20px;">
                                                {{pg.main_type}}
                                            </div>
                                        </div>
                                        <div style="margin-top: 4px;">
                                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                                linear_scale
                                            </i>
                                            <div style="font-size: 11pt; margin: -23px 0px 0px 20px;">
                                                <span v-on:click="handlerOpenProject(pg.pg_id)" class="link-handler">{{pg.pg_id}}</span> . {{pg.cust_name}} . {{pg.ac_reg}}
                                            </div>
                                        </div>
                                        <div style="margin-top: 5px;">
                                            <i style="font-size: 12pt; font-weight: bold;" class='material-icons'>
                                                timeline
                                            </i>
                                            <div style="font-size: 11pt; margin: -23px 0px 0px 20px;">
                                                <span class="status-handler success" v-if="pg.status == 'REL'">RELEASED</span>
                                                <span class="status-handler warning" v-if="pg.status == 'CRTD'">CREATED</span>


                                                <span class="status-handler primary tooltip-x">
                                                    <span class="tooltiptext-x">Last Sync</span>
                                                    {{handlerDateSync(pg.last_sync)}}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <button v-on:click="handlerSelectTracking(pg.pg_id, 'select-tracking-'+index)">Daily Menu</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <table>
                                                <tr>
                                                    <td width="50%" style="border: unset; padding: unset; text-align: right;">Start Date</td>
                                                    <td width="5%" style="border: unset; padding: unset; text-align: center;">:</td>
                                                    <td style="border: unset; padding: unset;"><b>{{handlerDate(pg.start_date,pg.start_date_new)}}</b></td>
                                                </tr>
                                                <tr>
                                                    <td width="50%" style="border: unset; padding: unset; text-align: right;">End Date</td>
                                                    <td width="5%" style="border: unset; padding: unset; text-align: center;">:</td>
                                                    <td style="border: unset; padding: unset;"><b>{{handlerDate(pg.end_date,pg.end_date_new)}}</b></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <table>
                                                <tr>
                                                    <td width="50%" style="border: unset; padding: unset; text-align: right;">Location</td>
                                                    <td width="5%" style="border: unset; padding: unset; text-align: center;"> :
                                                    </td>
                                                    <td style="border: unset; padding: unset;"><b>{{pg.linedesc}}</b></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <!--<table>
                                                <tr>
                                                    <td style="border: unset; padding: unset; text-align: center;">JC (<b>{{pg.total_jc_done}}%</b> of <b>{{pg.total_jc}}</b> )</td>
                                                </tr>
                                                <tr>
                                                    <td style="border: unset; padding: unset; text-align: center;">MDR (<b>{{pg.total_mdr_done}}%</b> of <b>{{pg.total_mdr}}</b>)</td>
                                                </tr>
                                            </table>-->
                                        </div>
                                    </div>
                                </div>
                                <div class="is-col" style="text-align: right;">
                                    <div class="outer-x">
                                        <div class="inner-x" >
                                            <div style="text-align: center;" class="action tooltip-x">
                                                <span  class="tooltiptext-x">Synchronize</span>
                                                <i v-on:click="handlerSync(pg.pg_id)" class="material-icons warning" tabindex="0">sync</i>
                                            </div>&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="!loading.isLoading" class="is-row">
                            <div style="text-align: center;" class="is-col is-100">
                                  <paginate
                                    :page-count="paginate.total"
                                    :container-class="'pagination'"
                                    :prev-text="'Prev'"
                                    :next-text="'Next'"
                                    :click-handler="handlerPaginate">
                                </paginate>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- modal menu -->
            <div style="margin-top: -50px;" data-keyboard="false" data-backdrop="static"  class="modal-box" id="modal-production-planning">
                <div class="modal lgw">
                    <span class="close" v-on:click="handlerCloseDailyMenu()"></span>
                        <div class="modal-header">
                            <h2 class="title">Daily Menu <span id="daily-menu-title"></span></h2>
                        </div>
                        <div class="modal-body modal-production-planning" style="position: relative; background-color: #F3F7FB;">

                            <div style="min-height: 100vh;">
                                <loading
                                    :active.sync="loading.isLoadingJob"
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>

                                <input v-model="pg_data.f_pg_id" type="hidden" id="daily-menu-pg-id">
                                <input v-model="pg_data.f_date" type="hidden" id="daily-menu-date">
                                <input v-model="pg_data.f_shift" type="hidden" id="daily-menu-shift">
                                <input v-model="pg_data.f_index" type="hidden" id="daily-menu-index">
                                <input v-model="pg_data.f_type" type="hidden" id="daily-menu-type">
                                <input v-model="pg_data.f_status" type="hidden" id="daily-menu-status">
                                <div class="is-row" style="margin-bottom: 0px;">
                                    <div v-if="container.order" class="is-col is-20">
                                        <div style="min-height: 97vh" class="card">
                                            <div class="card-header"><b>Container Order</b></div>
                                            <div class="card-content">
                                                <div class="" id="suggestion-area" style="padding-bottom: 10px;">
                                                    <div>
                                                        <div style="padding-bottom: 10px;" >
                                                            <div class="card" >
                                                                <input v-model="filter" v-on:change="handlerFilterJob()" placeholder="Order Number" type="text" name="" id="">
                                                                <table class="is-bordered table-suggestion">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Phase</th>
                                                                            <th>Task</th>
                                                                            <th>Area</th>
                                                                        </tr>
                                                                    </thead>
                                                                </table>
                                                                <div style="max-height: 50px; overflow: auto;">
                                                                    <table>
                                                                        <tr v-for="(suggest, index) in detail_suggest" :key="index">
                                                                            <td align="center">{{suggest.phase}}</td>
                                                                            <td align="center">{{suggest.task}}</td>
                                                                            <td align="center">{{suggest.area}}</td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card" v-if="!is_search">
                                                            <div style="padding-bottom: 5px;">
                                                                <b>Suggestion</b>
                                                            </div>
                                                            <div  class="box-suggestion">
                                                                <draggable style="min-height: 100px; min-width: 100%;" class="list-suggestion" :list="suggestion_order" group="order" @end="handlerPutResume" :move="handlerMoveJobSuggestion">
                                                                    <div v-for="(element, index) in suggestion_order" :key="index" class="card-order">
                                                                        <div :class="'card card-box ' + handlerClassJob(element.order_type)">
                                                                            <div class="is-table-container">
                                                                                <table class="table-order-child">
                                                                                    <tr>
                                                                                        <td>Order No</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.order_no}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Desc</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.order_desc}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Type</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.order_activity_type}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Skill</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap v-html="handlerSkillColorOrder(element.skill_set)"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td nowrap>Plan Mhrs</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.plan_mhrs}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td nowrap>Seq</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.seq}}</td>
                                                                                    </tr>
                                                                                </table>
                                                                                <br>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </draggable>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="all-order card">
                                                    <loading
                                                        :active.sync="loading.isLoadingAllJob"
                                                        :can-cancel="false"
                                                        :is-full-page="false"
                                                        :color="loading.color"
                                                        :loader="loading.loaderType">
                                                    </loading>
                                                    <b>All Order</b>
                                                    <div class="box-all-order">
                                                        <draggable style="min-height: 100px; min-width: 100%;" class="list-all-order" :list="all_order " group="order" @end="handlerPutResume" :move="handlerMoveJobAll">
                                                            <div v-for="(element, index) in all_order" :key="index" class="card-order">
                                                                <div :class="'card card-box ' + handlerClassJob(element.order_type)">
                                                                    <div class="is-table-container">
                                                                        <table class="table-order-child">
                                                                            <tr>
                                                                                <td nowrap>Order</td>
                                                                                <td nowrap>:</td>
                                                                                <td nowrap>{{element.order_no}}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Desc</td>
                                                                                <td>:</td>
                                                                                <td nowrap>{{element.order_desc}}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Type</td>
                                                                                <td>:</td>
                                                                                <td nowrap>{{element.order_activity_type}}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Skill</td>
                                                                                <td>:</td>
                                                                                <td nowrap v-html="handlerSkillColorOrder(element.skill_set)"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td nowrap>Pmhrs</td>
                                                                                <td>:</td>
                                                                                <td nowrap>{{element.plan_mhrs}}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td nowrap>Seq</td>
                                                                                <td>:</td>
                                                                                <td nowrap>{{element.seq}}</td>
                                                                            </tr>
                                                                        </table>
                                                                        <br>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </draggable>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="is-col is-80">
                                        <div style="min-height: 97vh" class="card">
                                            <div class="card-header">
                                                <div class="title-area">
                                                    <b>Resume</b>
                                                </div>
                                                <div class="option-box">
                                                    <div class="option-item">
                                                        <button class="button is-success" v-if="founded && loading.isLoading == false" v-on:click="handlerPrintDailyMenu()">
                                                            <i class='material-icons'>
                                                                insert_drive_file
                                                            </i>
                                                            PDF
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-content">
                                                <div style="padding-right: 2rem;">
                                                    <div class="is-row">
                                                        <div style="text-align: center;" class="is-col is-25">
                                                            <div>Job</div>
                                                        </div>
                                                        <div class="is-col is-5">
                                                            <div style="text-align: center;">Skill</div>
                                                        </div>
                                                        <div class="is-col is-10">
                                                            <div style="text-align: center;">Pmhrs</div>
                                                        </div>
                                                        <div style="text-align: center;" class="is-col is-20">
                                                            <div >Material</div>
                                                        </div>
                                                        <div style="text-align: center;" class="is-col is-15">
                                                            <div>Tools</div>
                                                        </div>
                                                        <div style="text-align: center;" class="is-col is-25">
                                                            <div>Manpower Assigned</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="box-ressume">

                                                    <draggable style="min-height: 150px; min-width: 100%;" class="list-resume" :list="resume" group="order" :move="prepareMoveResume" @end="handlerMoveResume">
                                                        <div v-for="(element, index) in resume" :key="index" class="is-row">
                                                            <div class="is-col is-25">
                                                                <div>
                                                                    <div class="">
                                                                        <div :class="'card card-box-resume ' + handlerClassJob(element.order_type)">
                                                                            <div class="is-table-container">
                                                                                <table class="table-order-child">
                                                                                    <tr>
                                                                                        <td nowrap>Order</td>
                                                                                        <td nowrap>:</td>
                                                                                        <td nowrap>{{element.order_no}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Desc</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.order_desc}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Type</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.order_activity_type}}</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Seq</td>
                                                                                        <td>:</td>
                                                                                        <td nowrap>{{element.seq}}</td>
                                                                                    </tr>
                                                                                </table>
                                                                                <br>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style="text-align: center;" class="is-col is-5">
                                                                <div v-if="element.skill_set !== null" v-html="handlerSkillColorResume(element.skill_set)"></div>
                                                            </div>
                                                            <div style="text-align: center;" class="is-col is-10">
                                                                {{element.plan_mhrs}}
                                                            </div>
                                                            <div style="text-align: center" class="is-col is-20">
                                                                <div class="action-2">
                                                                    <i v-on:click="handlerModalMaterial(pg_data.f_pg_id, element.order_no, index)" class="material-icons primary add-row" tabindex="0">widgets</i>
                                                                </div>
                                                            </div>
                                                            <div class="is-col is-15">
                                                                <div style="text-align: center" class="action-2">
                                                                    <i v-on:click="handlerModalTools(pg_data.f_pg_id, element.order_no, index)" class="material-icons primary add-row" tabindex="0">add_circle</i>
                                                                </div>
                                                            </div>
                                                            <div style="text-align: center;" class="is-col is-25">
                                                                <draggable style="min-height: 40px; min-width: 100%;" :class="'list-power-' + index" :list="element.power" :group="{ name: 'people', pull: true, put: true }">
                                                                    <div class="card-power-box-selected" v-for="(power, indexpower) in element.power" :key="indexpower">
                                                                        <div :class="'card card-power-selected ' + handlerColorManpower(power.SKILLCATEG)">
                                                                            {{handlerManpowerName(power.NAMA)}} ({{power.SKILLCATEG}})
                                                                        </div>
                                                                    </div>
                                                                </draggable>
                                                            </div>
                                                        </div>
                                                    </draggable>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="padding-top: 10px; text-align: center;">
                                            <div class="is-row">
                                                <div class="is-col">
                                                    Skill Need :
                                                    <b>
                                                    <span v-if="skill_need.length < 1">-</span>
                                                    <span v-else>
                                                        <span v-for="(skill, index) in skill_need" :key="index">
                                                            <span v-if="index == skill_need.length-1">{{skill}}</span>
                                                            <span v-else>{{skill}},</span>
                                                        </span>
                                                    </span>
                                                    </b>
                                                </div>
                                                <div class="is-col">
                                                    Total Pmhrs: <b>{{total_mhrs.toFixed(2)}} mhrs</b>
                                                </div>
                                                <div class="is-col">
                                                    Manpower Assigned : <b>{{total_manpower}}</b>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div v-if="container.manpower" class="is-col is-20">
                                        <div style="min-height: 97vh" class="card">
                                            <loading
                                                :active.sync="loading.isLoadingManpower"
                                                :can-cancel="false"
                                                :is-full-page="false"
                                                :color="loading.color"
                                                :loader="loading.loaderType">
                                            </loading>
                                            <div class="card-header"><b>Manpower</b></div>
                                            <div class="card-content">
                                                <div style="padding-bottom: 10px;">
                                                    <input v-on:change="handlerFilterManPower()" v-model="filter_manpower" type="text" placeholder="Search">
                                                </div>
                                                <div class="main-box-card-power">
                                                    <div v-for="(element, index) in manpower" :key="index">
                                                        <div style="padding-bottom: 10px !important;">
                                                            <div class="card" style="padding-bottom: 3px !important">
                                                                <div class="card-header no-border">
                                                                    <div class="btn-panel-toggle" v-on:click="handlerCollapse(element.type == 'DWS On' || element.type == 'Search Result' ? 'btn-panel-dws-on' : 'btn-panel-dws-off', element.type == 'DWS On' || element.type == 'Search Result' ? 'dws_on' : 'dws_off')">
                                                                        <i :id="element.type == 'DWS On' || element.type == 'Search Result' ? 'btn-panel-dws-on' : 'btn-panel-dws-off'" class='material-icons'>
                                                                            {{element.type == 'DWS On' || element.type == 'Search Result' ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}}
                                                                        </i>
                                                                        <div style="margin-top: -26px; margin-left: 23px;  "> <b>{{element.type}}</b> </div>
                                                                    </div>
                                                                </div>
                                                                <transition v-show="panel[element.type == 'DWS On' || element.type == 'Search Result' ? 'dws_on' : 'dws_off']" name="panel-collapse">
                                                                    <div v-show="panel[element.type == 'DWS On' || element.type == 'Search Result' ? 'dws_on' : 'dws_off']" class="card-content">
                                                                        <div v-for="(elm, idx) in element.data" :key="idx" style="padding-bottom: 10px;">
                                                                            <div :class="'card ' + handlerColorManpower(elm.skill)" style="padding-bottom: 3px !important; color: white;">
                                                                                <div class="card-header no-border">
                                                                                    <div class="btn-panel-toggle" v-on:click="handlerCollapse(element.type == 'DWS On' || element.type == 'Search Result' ? 'btn-panel-dws-on-' +elm.skill : 'btn-panel-dws-off-' +elm.skill, element.type == 'DWS On' || element.type == 'Search Result' ? 'dws_on_' + elm.skill : 'dws_off_' +elm.skill)">
                                                                                        <i :id="element.type == 'DWS On' || element.type == 'Search Result' ? 'btn-panel-dws-on-' + elm.skill : 'btn-panel-dws-off-' + elm.skill" class='material-icons'>
                                                                                            keyboard_arrow_right
                                                                                        </i>
                                                                                        <div style="margin-top: -26px; margin-left: 23px;  "> <b>{{handlerSkill(elm.skill)}}</b> </div>
                                                                                    </div>
                                                                                </div>

                                                                                <transition v-show="panel[element.type == 'DWS On' || element.type == 'Search Result' ? 'dws_on_' + elm.skill : 'dws_off_' + elm.skill]" name="panel-collapse">
                                                                                    <div v-show="panel[element.type == 'DWS On' || element.type == 'Search Result' ? 'dws_on_' + elm.skill : 'dws_off_' + elm.skill]" class="card-content">
                                                                                        <div class="box-card-manpower">
                                                                                            <draggable class="list-group" :list="elm.power" :group="{ name: 'people', pull: 'clone', put: true }" @end="handlerPullPower"  @change="handlerChangeManpower">
                                                                                                <div class="card-power-box" v-for="(power, idxpower) in elm.power" :key="idxpower">
                                                                                                    <div :class="'card card-power ' +handlerClock(power.CLOCK)">
                                                                                                        <i style="font-size: 12pt !important;" class='material-icons'>
                                                                                                            {{handlerClock(power.CLOCK) == 'in' ? 'alarm_on' : 'alarm_off'}}
                                                                                                        </i>
                                                                                                        <div style="margin-top: -20px; margin-left: 20px;">
                                                                                                            {{handlerManpowerName(power.NAMA)}}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </draggable>
                                                                                        </div>
                                                                                    </div>
                                                                                </transition>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </transition>
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
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="handlerCloseDailyMenu()">Close</button>
                            <button v-on:click="handlerSaveDailyMenu()" class="button is-success" type="submit" id="btn-save-data"> Save </button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>




        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Paginate from 'vuejs-paginate';
export default {
    components: {
        Loading,
        'paginate': Paginate
    },

    computed: {

    },

    data: () => ({
        loading: {
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        tracking: "",
        data_pg: [],
        filter: {
            location: "",
            status: "",
            line: "",
            search: "",
            page: 1,
        },
        lines: [],
        hangars: [],
        paginate: {
            last: 0,
            total: 0,
        },
    }),

    mounted() {
        this.initHangar();
        this.initData();
    },

    watch: {},

    methods: {
        initData: function() {
            this.loading.isLoading = true;
            this.filter.page = 1;
            axios.post('/api/production_control_hangar/get_list_active_job', this.filter)
            .then(res => {
                this.data_pg = res.data.data;
                this.paginate.total = res.data.last_page;
                this.loading.isLoading = false;

            })
            .catch(e => {
                console.log("Error: " + e);
            })
        },

        handlerDate: function(date1, date2) {
            const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let result = date1;
            if(date2 !== null) {
                const d = new Date(date2);
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()}`;
            }
            else{
                const d = new Date(date1);
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()}`;
            }
            return result;
        },

        handlerDateSync: function(date) {
            const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let result = date;
            if(date !== null) {
                const d = new Date(date);
                let hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
                let minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
                let seconds = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
                result = `${d.getDate()} ${month_names[d.getMonth()]} ${d.getFullYear()} ${hours}:${minutes}:${seconds}`;
            }
            return result;
        },

        initHangar: function() {
            axios.get('/api/booking_and_submission/show_hangar')
            .then( res => {
                this.hangars = res.data
            })
        },

        handlerFilterLine: function() {
        axios.get('/api/management/hangar/' + this.filter.location)
            .then( res => {
                this.lines = res.data.line;
                this.handlerFilter();
            })
        },

        handlerFilter: function() {
            this.loading.isLoading = true;
            this.filter.page = 1;
            axios.post('/api/production_control_hangar/get_list_active_job', this.filter)
            .then(res => {
                this.data_pg = res.data.data;
                this.paginate.total = res.data.last_page;
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
            })
        },

        handlerPaginate: function(page) {
            this.loading.isLoadingPaginate = true;
            this.filter.page = page;

            axios.post('/api/production_control_hangar/get_list_active_job', this.filter)
            .then(res => {
                this.data_pg = res.data.data;
                this.paginate.total = res.data.last_page;
                this.loading.isLoadingPaginate = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                this.loading.isLoadingPaginate = false;

            })
        },

        handlerSync: function(pg_id) {
            swal({
                title: "Synchronize Project",
                text: "Are you sure that you want sync this project? \n This action will take a few minutes.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoadingPaginate = true;
                    this.handlerSyncJC(pg_id).then(() => {
                        this.handlerSyncJMDR(pg_id).then(() => {
                            this.handlerSyncJMRM(pg_id).then(() => {
                                this.loading.isLoadingPaginate = false;
                                this.handlerPaginate(this.filter.page);
                            })
                        })
                    })
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
        },

        handlerOpenProject: function(pg_id) {
            // window.open(`${this.$route.path}/${pg_id}/dashboard`, '_self');
            this.$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: pg_id}})
        },

        handlerSyncJC: function(revnr) {
            return new Promise((resolve, reject) => {
                axios.get('/api/production_control_hangar/sync_jobcard/' + revnr)
                .then(res => {
                    if(res.data.success) {
                        toastr.success("Success sync Jobcard data");
                    }else {
                        toastr.warning(res.data.message);
                    }
                    resolve();
                })
            })
        },

        handlerSyncJMDR: function(revnr) {
            return new Promise((resolve, reject) => {
                axios.get('/api/production_control_hangar/sync_mdr/' + revnr)
                .then(res => {
                    if(res.data.success) {
                        toastr.success("Success sync MDR data");
                    }else {
                        toastr.warning(res.data.message);
                    }
                    resolve();
                })
            })
        },

        handlerSyncJMRM: function(revnr) {
            return new Promise((resolve, reject) => {
                axios.get('/api/production_control_hangar/sync_mrm/' + revnr)
                .then(res => {
                    if(res.data.success) {
                        toastr.success("Success sync MRM data");
                    }else {
                        toastr.warning(res.data.message);
                    }
                    resolve();
                })
            })
        },

        handlerSelectTracking: function(pg_id) {
            let routeData = this.$router.resolve({name: `pc_hangar.tracking.dashboard_summary`, params: {pg_id: pg_id}});
            window.open(routeData.href, '_blank');
        }


    }
}
</script>
