<style scoped>
    .matcard{
        background-color: #9effa8;
        position: absolute;
    }

    .flip-list-move {
      transition: transform 0.5s;
    }
    .no-move {
      transition: transform 0s;
    }
    .ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }
    .list-group {
      min-height: 20px;
    }
    .list-group-item {
      cursor: move;
    }
    .list-group-item i {
      cursor: pointer;
    }

    .list-group-item:last-child {
        margin-bottom: 0 !important;
        border-bottom-right-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
    }

    .list-group-item:first-child {
        border-top-right-radius: 0px !important;
        border-top-left-radius: 0px !important;
    }

    ::v-deep .crowdone{
        background-color: #C4F8C4;
    }

    /* ::v-deep .crowwtcon{ */
        /*background-color: #EBF8C4;*/
    /* } */

    ::v-deep .crowwteco{
        background-color: #AFD9F1;
    }

    ::v-deep .line-numbers{
        min-width:40px !important;
        max-width:40px !important;
        height:50px;
    }

    ::v-deep .vgt-checkbox-col{
        min-width:30px !important;
        max-width:30px !important;
        height:50px;
    }

    ::v-deep .cstatus{
        min-width:200px !important;
        max-width:200px !important;
    }

    ::v-deep .csysstat{
        min-width:100px !important;
        max-width:100px !important;
    }

    ::v-deep .cmhrsconf{
        min-width:50px !important;
        max-width:50px !important;
    }

    ::v-deep .cmatcons{
        min-width:50px !important;
        max-width:50px !important;
    }

    ::v-deep .cmrmstat{
        min-width:100px !important;
        max-width:100px !important;
    }

    ::v-deep .cseq{
        min-width:60px !important;
        max-width:60px !important;
    }
    
    ::v-deep .corig{
        min-width:85px !important;
        max-width:85px !important;
    }
    
    ::v-deep .caufnr{
        min-width:85px !important;
        max-width:85px !important;
    }
    
    ::v-deep .cdesc{
        min-width:400px !important;
        max-width:400px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep .cissued{
        min-width:185px !important;
        max-width:185px !important;
    }

    ::v-deep .czone{
        min-width:180px !important;
        max-width:180px !important;
    }

    ::v-deep .cskill{
        min-width:200px !important;
        max-width:200px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep .cpmhrs{
        min-width:60px !important;
        max-width:60px !important;
    }

    ::v-deep .cactmhrs{
        min-width:60px !important;
        max-width:60px !important;
    }

    ::v-deep .ccustapp{
        min-width:100px !important;
        max-width:100px !important;
    }

    ::v-deep .ctrackstat{
        min-width:200px !important;
        max-width:200px !important; 
    }

    ::v-deep .ctrackstatshop{
        min-width:200px !important;
        max-width:200px !important; 
    }

    ::v-deep .cdatedone{
        min-width:185px !important;
        max-width:185px !important; 
    }

    ::v-deep .crevpos{
        min-width:120px !important;
        max-width:120px !important; 
    }

    ::v-deep .cdatedonep{
        min-width:185px !important;
        max-width:185px !important; 
    }

    ::v-deep .cdfpstat{
        min-width:100px !important;
        max-width:100px !important; 
    }

    ::v-deep .cdfpfinding{
        min-width:180px !important;
        max-width:180px !important; 
        white-space: nowrap; 
        overflow: auto;         
    }

    ::v-deep .crmk{
        min-width:300px !important;
        max-width:300px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep .csrmk{
        min-width:300px !important;
        max-width:300px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep .custrmk{
        min-width:300px !important;
        max-width:300px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep .custref{
        min-width:150px !important;
        max-width:150px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep  .vgt-left-align {
        white-space: normal !important;
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

    ::v-deep .vgt-global-search__input .input__icon .magnifying-glass {
        margin-top: 8px !important;
        margin-left: 10px !important;
        display: block !important;
        width: 12px !important;
        height: 12px !important;
        border: 2px solid #d6dae2 !important;
        position: relative !important;
        border-radius: 50% !important;
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

    ::v-deep .flex-middle-default {
        text-align: center;
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

    ::v-deep .skill-handler {
        color: white;
        font-size: 9pt;
        border-radius: 5px;
        padding: 4px !important;
        cursor: pointer;
        margin-right: 4px;
    }

    ::v-deep .skill-handler:last-child {
        margin-right: 0px;
    }

    ::v-deep .skill-handler.active {
        background-color: #dc3545;
    }

    ::v-deep .skill-handler.nonactive {
        background-color: #aeb3b8;

    }

    ::v-deep .multiselect {
        /* width: 230px !important; */
        font-size: 0.9375em !important;
        height: 35px !important;
        min-height: unset !important;
    }

    ::v-deep .multiselect__placeholder {
        font-size: 0.9375em !important;
    }

    ::v-deep .multiselect__input {
        font-size: 0.9375em !important;
        height: 30px !important;
    }

    ::v-deep .multiselect__select {
        height: 35px !important;
        padding: 10px 8px !important;
    }

    ::v-deep .multiselect__tags {
        min-height: 35px !important;
        padding: 5px 40px 0 8px !important;
    }

    ::v-deep .multiselect__placeholder {
        margin-bottom: unset !important;
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
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li v-if="$bulkCan('pc_shop_tracking_system_view', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view_dashboard')" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: $route.params.pg_id, type: 'shop'}})" class="tab-link" data-tab="dashboard">Dashboard</li>
                <li v-if="$bulkCan('pc_shop_tracking_system_view_jobcard', 'pc_shop_tracking_system_Edit_jobcard', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" v-on:click="$router.push({name: 'pc_shop.tracking.jobcard', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="jobcard">Jobcard</li>
                <li v-if="$bulkCan('pc_shop_tracking_system_view_mdr', 'pc_shop_tracking_system_edit_mdr', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" class="tab-link active" data-tab="mdr">MDR</li>
                <li v-if="$bulkCan('pc_shop_tracking_system_view_mrm', 'pc_shop_tracking_system_edit_mrm', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" v-on:click="$router.push({name: 'pc_shop.tracking.mrm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">MRM</li>
            </ul>
            <div class="card tab-content active" id="mdr" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">MDR Tracking</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                            <h4>{{projectinfo}}&nbsp;&nbsp;&nbsp;<button class="button is-secondary is-success" style="padding:0px 15px;height:30px;">{{acreginfo}}</button></h4>
                        </div>
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
                                <div  v-show="renderedFields">
                                    <vue-good-table
                                        max-height="90vh"
                                        :fixed-header="true"                                    
                                        ref="table-job-tracking"
                                        :columns="datatable.fields"
                                        :rows="datatable.rows"
                                        :row-style-class="rowStyleClassFn"
                                        styleClass="vgt-table bordered"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill and enter to search',
                                            
                                        }"
                                        :sort-options="{
                                            enabled: true,
                                        }"
                                        :select-options="{ 
                                            enabled: false,
                                            selectOnCheckboxOnly: true
                                        }"
                                        :line-numbers="true"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'pages',
                                            perPage: datatable.serverParams.perPage,
                                            position: 'bottom',
                                            perPageDropdown:  datatable.perPageDropDown,
                                            dropdownAllowAll: true,
                                            setCurrentPage: datatable.serverParams.page,
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
                                                <div class="toolbar-item" style="margin-right: -8px;">
                                                    <div v-on:click="handlerExportMDR()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                        <span class="tooltiptext-x">Export Excel</span>
                                                        <i class="material-icons warning sync_order" >file_download</i>
                                                    </div>
                                                </div>
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button :disabled="!grant_access" v-on:click="handlerModalSingleAdd()" class="button is-default">
                                                        <i class='material-icons'>
                                                            add_circle
                                                        </i>
                                                        Add
                                                    </button>
                                                </div>
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                     <button :disabled="!grant_access" v-on:click="(grant_access) ? handlerModalImport() : ''" class="button is-default">
                                                        <i class='material-icons'>
                                                            insert_drive_file
                                                        </i>
                                                        Update
                                                    </button>
                                                </div>                                                
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button :disabled="datatable.rows < 1" id="btn-collapse-all" v-on:click="handlerToggleAll('material-list', 'btn-collapse-all', 'icon-collapse-all', 'btn-material-list')" class="button is-default">
                                                        <i id="icon-collapse-all" class='material-icons'>visibility</i>Material
                                                    </button>
                                                </div>   
                                                 <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button v-on:click="onRefresh" class="button">
                                                        <i class='material-icons'>
                                                            sync
                                                        </i>
                                                        Refresh
                                                    </button>                                                   
                                                </div>                                                                                             
                                                <div class="toolbar-item tooltip-x" style="margin-right: -10px;">
                                                    <button :disabled="!checklastsync" v-on:click="(checklastsync) ? handlerSyncData() : ''" class="button is-danger">
                                                        <i class='material-icons'>
                                                            sync
                                                        </i>
                                                        Sync
                                                    </button>
                                                    <span class="tooltiptext-x" style="width:200px !important;">
                                                        LAST SYNC<br>
                                                        SAP->CRM :<br>
                                                        {{lastsynccrm}}<br>
                                                        CRM->XPREAM :<br>
                                                        {{lastsyncmdr}}
                                                    </span>
                                                </div>
                                                <div class="toolbar-item" style="margin-right: 10px;">
                                                    <button v-on:click="handlerlayout()" class="button is-success">
                                                        <i class='material-icons'>
                                                            grid_on
                                                        </i>
                                                        Layout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <template slot="table-row" slot-scope="props">
                                           <span v-if="props.column.field == 'MRM_STATUS'">
                                                <span v-if="props.formattedRow[props.column.field] == 'COMPLETE'">
                                                    <button :id="'btn-material-list-' +props.index" statetoggle="0" class="button is-secondary is-success btn-material-list" v-on:click="handlerToggle('btn-material-list-' +props.index, 'icon-material-list-' +props.index, 'material-list-' +props.index)" style="width: 100%; height: 20px; line-height: 20px;">
                                                        {{props.formattedRow[props.column.field]}}
                                                    </button>                                                                                                  
                                                </span>
                                                <span v-else-if="props.formattedRow[props.column.field] == 'INCOMPLETE'">
                                                    <button :id="'btn-material-list-' +props.index" statetoggle="0" class="button is-secondary is-danger btn-material-list" v-on:click="handlerToggle('btn-material-list-' +props.index, 'icon-material-list-' +props.index, 'material-list-' +props.index)" style="width: 100%; height: 20px; line-height: 20px;">
                                                        {{props.formattedRow[props.column.field]}}
                                                    </button>                                           
                                                </span>
                                                    <div v-show="props.formattedRow['MATERIAL'] !== '' && props.formattedRow['MATERIAL'] !== null">
                                                        <div :id="'material-list-' +props.index" class="material-list" style="margin-top: 5px; display: none;">
                                                            <div v-html="handlerMaterialDetail(props.formattedRow['MATERIAL'])" class="card matcard">
                                                            </div>
                                                        </div>
                                                    </div>
                                            </span>

                                            <span v-else-if="props.column.field == 'DESCRIPTION'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>
                                            <span v-else-if="props.column.field == 'SKILL'">
                                                <div style="margin-top: 6px; text-align: left;">
                                                    <span v-for="(elem, index) in handlerSkill(props.formattedRow['SKILL'])" :key="index" v-on:click="handlerUpdateData(props.formattedRow['ID'], 'SKILL_ACTIVE', elem, index+1)" :class="elem == props.formattedRow['SKILL_ACTIVE'] ? 'skill-handler active' : 'skill-handler nonactive'">{{elem}}</span>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'ZONE_AREA'">
                                                <select 
                                                    v-model="props.formattedRow['ZONE_AREA_ID']" 
                                                    :disabled="!grant_access" :id="'mdr-track-zona-area-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'ZONE_AREA', 'mdr-track-zona-area-' +props.index)"
                                                >
                                                    <option value="">Select Option</option>
                                                   <option v-for="elem in zoneareas" :key="elem.AREA_CODE" :value="elem.AREA_CODE">{{elem.AREA_NAME}}</option>

                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'CUSTOMER_APPROVAL'">
                                                <select 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" :id="'mdr-track-priority-task-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'CUSTOMER_APPROVAL', 'mdr-track-priority-task-' +props.index)"
                                                >
                                                    <option  value="">Select Option</option>
                                                    <option value="YES">YES</option>
                                                    <option value="NO">NO</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'TRACK_STATUS_SHOP'">
                                                <select 
                                                    v-model="props.formattedRow['TRACK_STATUS_SHOP_ID']" 
                                                    :disabled="!grant_access" :id="'mdr-track-shop-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'TRACK_STATUS_SHOP', 'mdr-track-shop-' +props.index)"
                                                >
                                                    <option value="">Select Option</option>
                                                    <option v-for="track in tracks" :key="track.ID" :value="track.ID">{{track.TRACK_NAME}}</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'DATE_DONE'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mdr-track-date-done-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATE_DONE', 'mdr-track-date-done-' +props.index)" 
                                                    type="date"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'REVIEW_POSITION'">
                                                <select 
                                                    v-model="props.formattedRow['REVIEW_POSITION_ID']" 
                                                    :disabled="!grant_access" :id="'mdr-track-review-position-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'REVIEW_POSITION', 'mdr-track-review-position-' +props.index)"
                                                >
                                                    <option value="">Select Option</option>
                                                    <option v-for="position in positions" :key="position.ID" :value="position.ID">{{position.POSITION_NAME}}</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'SHOP_REMARK'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mdr-track-shop-remark-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SHOP_REMARK', 'mdr-track-shop-remark-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'STATUS'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span class="status-handler success" v-if="props.formattedRow[props.column.field] === 'DONE'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span v-else-if="props.formattedRow['TRACK_STATUS'] === null || props.formattedRow['TRACK_STATUS'] === ''">N/A</span>
                                                    <span class="status-handler warning" v-else-if="props.formattedRow[props.column.field] === 'PROGRESS'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler primary" v-else-if="props.formattedRow[props.column.field] === 'OPEN'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler danger" v-else>{{props.formattedRow[props.column.field]}}</span>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'SYSTEM_STATUS'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span class="status-handler success" v-if="props.formattedRow[props.column.field] === 'DONE'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler warning" v-else-if="props.formattedRow[props.column.field] === 'PROGRESS'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler primary" v-else-if="props.formattedRow[props.column.field] === 'OPEN'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span v-else-if="props.formattedRow[props.column.field] === null || props.formattedRow[props.column.field] === ''">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler danger" v-else>{{props.formattedRow[props.column.field]}}</span>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'DFPSTATUS'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span class="status-handler danger" v-if="props.formattedRow[props.column.field] === 'FINDING'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span v-else>{{props.formattedRow[props.column.field]}}</span>
                                                </div>
                                            </span>                                            
                                            <span v-else-if="props.column.field == 'MHRSCONF'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span class="status-handler success" v-if="props.formattedRow[props.column.field] === 'y'"><i class="material-icons" style="font-size: 8pt;line-height: 0;" >done</i></span>
                                                    <span v-else-if="props.formattedRow[props.column.field] === 'n' && props.formattedRow['STATUS'] === 'DONE'" class="status-handler danger tooltip-x">
                                                    <span class="tooltiptext-x" style="width:200px !important;">
                                                        {{props.formattedRow['LONGSYSSTAT']}}
                                                    </span>
                                                    <i class="material-icons" style="font-size: 8pt;line-height: 0;">close</i></span>
                                                    <span v-else-if="props.formattedRow[props.column.field] === 'n' && props.formattedRow['STATUS'] != 'DONE'" class="status-handler default"><i class="material-icons" style="font-size: 8pt;line-height: 0;">close</i></span>                                                  
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'MATCONS'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span class="status-handler success" v-if="props.formattedRow[props.column.field] === 'y'"><i class="material-icons" style="font-size: 8pt;line-height: 0;" >done</i></span>
                                                    <span v-else-if="props.formattedRow[props.column.field] === 'n' && props.formattedRow['STATUS'] === 'DONE'" class="status-handler danger"><i class="material-icons" style="font-size: 8pt;line-height: 0;">close</i></span>
                                                    <span v-else-if="props.formattedRow[props.column.field] === 'n' && props.formattedRow['STATUS'] != 'DONE'" class="status-handler default"><i class="material-icons" style="font-size: 8pt;line-height: 0;">close</i></span>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'CUST_RMK'">
                                                <span>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'CUST_REF'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'job-track-custrmk-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'CUST_REF', 'job-track-custrmk-' +props.index)"
                                                >
                                            </span> 
                                            <span v-else-if="props.column.field == 'REMARK'">
                                                {{props.formattedRow[props.column.field]}}
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
                 <!-- modal import -->
                <div class="modal-box" id="modal-import-reservation" data-keyboard="false" data-backdrop="static">
                    <div class="modal sm">
                        <span class="close" v-on:click="hideModal('modal-import-reservation')"></span>
                            <div class="modal-header">
                                <h2 class="title">Update Data</h2>
                            </div>
                            <div class="modal-body" style="position: relative">
                                <label>
                                    Update data <span class="is-req">*</span>
                                </label>
                                <div class="is-row">
                                    <div class="form-item is-col is-100">
                                        <input ref="file" id="file" style="all: unset" type="file"  v-on:change="onChangeFileUpload()"> 
                                        <div class="is-desc">Required .xlsx file</div>
                                    </div>
                                    <div class="form-item is-col is-100">
                                        <button class="button is-secondary is-success" v-on:click="handlerExportforupdate()">Download Template</button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer" style="">
                                <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-import-reservation')">Close</button>
                                <button v-on:click="handlerImport()" class="button is-success" type="submit" id="btn-import-reservation"> Save </button>

                            </div>
                        <!-- </form> -->
                    </div>
                </div>
             <!-- modal layout -->
            <div class="modal-box" id="modal-layout" data-keyboard="false" data-backdrop="static">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-layout')"></span>
                        <div class="modal-header">
                            <h2 class="title">Arrange Table Layout</h2>
                        </div>
                        <div class="modal-body" style="position: relative; height:500px; overflow-y:auto;">
                            <draggable 
                            :list="datatable.fields"
                            class="list-group"
                            ghost-class="ghost"
                            v-bind="dragOptions"
                            @start="drag = true"
                            @end="drag = false"
                            @change="handlerDateDoneJC"
                            >
                            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                                <div v-for="(element, index) in datatable.fields" :key="index + 0">
                                    <div class="list-group-item" 
                                        v-if="element.label !== 'ID' && element.label !== 'Skill Active' && element.label !== 'Skill Position' && element.label !== 'Material' && element.label !== 'LONGSYSSTAT'  && element.label !== 'DFPFINDING_RMK'" 
                                    >
                                        <i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
                                        <div class="is-row" v-if="element.hidden==false" style="font-weight:bold;">
                                            <div class="is-col is-70">
                                                {{element.label}}
                                            </div>
                                            <div class="is-col is-10">
                                                <button class="button is-100 is-secondary is-success" style="padding:0px !important;" v-on:click="element.hidden = true">HIDE</button>
                                            </div>
                                        </div>
                                        <div class="is-row" v-else>
                                            <div class="is-col is-70">
                                            {{element.label}}
                                            </div>
                                            <div class="is-col is-10">
                                                <button class="button is-100 is-default" v-on:click="element.hidden = false">SHOW</button>
                                            </div>                                               
                                        </div>
                                    </div>
                                </div>
                            </transition-group>
                            </draggable>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-layout')">Close</button>
                            <button v-on:click="handlerResetLayout()" class="button is-danger" type="button" id="btn-reset-layout"> Reset Layout </button>
                            <button v-on:click="handlerSaveArrangedLayout()" class="button is-primary" type="button" id="btn-save-layout"> Save Aranged Layout </button>
                        </div>
                    <!-- </form> -->
                </div>
            </div>



            <!-- modal single add -->
            <div class="modal-box" id="modal-single-add" data-keyboard="false" data-backdrop="static">
                <div class="modal lg">
                    <span class="close" v-on:click="hideModal('modal-single-add')"></span>
                        <div class="modal-header">
                            <h2 class="title">Add Single MDR</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <label>
                                Input data <span class="is-req">*</span>
                            </label>
                            <div class="is-row">
                                <div class="form-item is-col is-15">
                                    <input v-model="form.order_number" value="" type="text"> 
                                    <div class="is-desc">Order Number</div>
                                </div> 
                                <div class="form-item is-col is-20">
                                    <input v-model="form.originating" value="" type="text"> 
                                    <div class="is-desc">Originating Order</div>
                                </div> 
                                <div class="form-item is-col is-10">
                                    <input v-model="form.seq" value="" type="text"> 
                                    <div class="is-desc">Seq</div>
                                </div>
                                <div class="form-item is-col is-15">
                                    <select v-model="form.system_status">
                                        <option value="">Option</option>
                                        <option value="OPEN">OPEN</option>
                                        <option value="PROGRESS">PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                    <div class="is-desc">System Status</div>
                                </div>
                                <div class="form-item is-col is-40">
                                    <input v-model="form.description" value="" type="text"> 
                                    <div class="is-desc">Description</div>
                                </div>
                            </div>
                            <div class="is-row" style="margin-top: -10px;">
                                <div class="form-item is-col is-10">
                                    <input v-model="form.issue_date" type="date">
                                    <div class="is-desc">Issue Date</div>
                                </div> 
                                <div class="form-item is-col is-10">
                                    <select v-model="form.cust_approval">
                                        <option value="">Option</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <div class="is-desc">Cust. Approval</div>
                                </div> 
                                <div class="form-item is-col is-20">
                                    <select v-model="form.zone">
                                        <option value="">Option</option>
                                        <option v-for="elem in zoneareas" :key="elem.ID" :value="elem.ID">{{elem.NAME}}</option>
                                    </select>
                                    <div class="is-desc">Zone / Area</div>
                                </div>
                                <div class="form-item is-col is-25">
                                    <input v-model="form.skill" value="" type="text"> 
                                    <div class="is-desc">Skill (WCT separate by coma)</div>
                                </div>
                            </div>
                            <div class="is-row" style="margin-top: -10px;">
                                <div class="form-item is-col is-10">
                                    <input v-model="form.pmhrs" value="" type="number"> 
                                    <div class="is-desc">Pmhrs</div>
                                </div>
                                <div class="form-item is-col is-10">
                                    <input v-model="form.actmhrs" value="" type="number"> 
                                    <div class="is-desc">Act Mhrs</div>
                                </div>
                                <div class="form-item is-col is-10">
                                    <select v-model="form.mdr_track">
                                        <option value="">Option</option>
                                        <option v-for="track in tracks" :key="track.ID" :value="track.ID">{{track.TRACK_NAME}}</option>
                                    </select>
                                    <div class="is-desc">MDR Track</div>
                                </div>
                                <div class="form-item is-col is-20">
                                    <input v-model="form.date_done" value="" type="date"> 
                                    <div class="is-desc">Date Done</div>
                                </div>
                                <div class="form-item is-col is-25">
                                    <select v-model="form.review_position">
                                        <option value="">Option</option>
                                        <option v-for="position in positions" :key="position.ID" :value="position.ID">{{position.POSITION_NAME}}</option>
                                    </select>
                                    <div class="is-desc">Review Position</div>
                                </div>
                            </div>
                            <div class="is-row" style="margin-top: -10px;">
                                <div class="form-item is-col is-90">
                                    <textarea v-model="form.remarks" rows="6"></textarea>
                                    <div class="is-desc">Remarks</div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="">
                            <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-single-add')">Close</button>
                            <button v-on:click="handlerSaveSinglMDR()" class="button is-success" type="submit" id="btn-single-add"> Save </button>

                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal single add  -->
        </div>
    </div>
</template>

<script>

//vue-good
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';
import draggable from 'vuedraggable';
import FieldMDR from './datatable/FieldMDR';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import XLSX from 'xlsx';

export default {

    data: () => ({
        renderedFields: false,
        hasAccess: false,
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        datatable: {
            fields: FieldMDR,
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
                filter: {},
                revnr: "",
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        tracks: [],
        zoneareas: [],
        positions: [],

        form: {
            revnr: "",
            seq: "",
            originating: "",
            order_number: "",
            description: "",
            issue_date: "",
            skill: "",
            zone: "",
            pmhrs: "",
            actmhrs: "",
            cust_approval: "",
            mdr_track: "",
            system_status: "",
            date_done: "",
            review_position: "",
            date_done_pw: "",
            remarks: "",
        },
        grant_access: false,
        acreginfo: "",
        projectinfo: "",
        drag: false,
        checklastsync: false,
        lastsynccrm: "",
        lastsyncmdr: "",        

    }),

    components: {
        Loading, 
        draggable,
        VueGoodTable,
        'multiselect': Multiselect
    },


    mounted() {
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if(!res) {
                this.$router.push({name: 'access_denied'});
            } else {
                if(
                    !this.$bulkCan(
                        'pc_shop_tracking_system_view_mdr',
                        'pc_shop_tracking_system_edit_mdr',
                        'pc_shop_tracking_system_edit',
                        'pc_hangar_tracking_system_edit'
                    )
                ) {
                    this.$router.push({name: 'access_denied'});
                }else {
                    this.hasAccess = true;
                    this.permissionHandler();
                    this.initArangedLayout().then(() => {
                        this.renderedFields = true;
                        this.handlerArrangedStyle();
                        this.initData();
                        this.initTrack();
                        this.initZoneArea();
                        this.handlerDateDoneJC();
                        this.initPosition();
                    });
                }
            }
        });

    },

    computed: {     
        dragOptions() {
          return {
            animation: 200,
            group: "description",
            disabled: false,
            ghostClass: "ghost"
          };
        }
    },

    methods: {
        initData:  function() {
            $( ".vgt-fixed-header, .vgt-responsive" ).wrapAll( "<div class='new' />").css("width","unset").css( "overflow-x","unset");
            $( ".vgt-fixed-header").css("position","sticky").css("position","-webkit-sticky").css("top","0");
            $( ".vgt-fixed-header table thead tr:nth-child(2) th:nth-child(1)").text(".");
            $( ".vgt-responsive thead").attr("hidden",true);
            $( ".new" ).css( "overflow-x","auto");    

            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/get_tmdr_shop', {
                revnr: this.$route.params.pg_id
            }, { timeout: 1000 * 60  })
            .then(res => {
                if(res === undefined) {
                    toastr.error("Request time out !");
                    this.loading.isLoading = false;
                    return;
                }

                if(res.data.length < 1) {
                    toastr.warning(`Empty data, please run synchronize.`)
                }

                this.datatable.rows = res.data
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            });
            this.checksync();
        },

        initArangedLayout: function() {
            return new Promise((resolve) => {
                axios.post('/api/arranged_layout/get_user_layout', {
                    name: 'LAYOUT_MDR'
                })
                .then(res => {
                    if(res.data.length !== FieldMDR.length) {
                        this.datatable.fields = FieldMDR.map((l) => Object.assign({}, l));
                    }else {
                        this.datatable.fields = res.data;
                    }
                    resolve();
                })
                .catch(e => {
                    console.log("Error: " +e);
                    resolve();
                })
            })
        },

        handlerSaveArrangedLayout: function() {
            this.handleButton('btn-save-layout', 'load').then(() => {
                axios.post('/api/arranged_layout/post_layout', {
                    data: JSON.stringify(this.datatable.fields),
                    name: "LAYOUT_MDR"
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initArangedLayout().then(() => {
                            this.handlerArrangedStyle();
                        });
                        setTimeout(()=> {
                            this.hideModal('modal-layout');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-save-layout', 'stop');
                })
                .catch(e => {
                    console.log("Error: "+e)
                    toastr.error("Failed save layout change")
                    this.handleButton('btn-save-layout', 'stop');

                })
            })
        },

        handlerArrangedStyle: function() {
            if(this.datatable.fields.length > 0) {
                let card_table = document.getElementsByClassName("list-group-item");
                card_table[0].style.cssText = `
                    border-top-left-radius: 4px !important; 
                    border-top-right-radius: 4px !important
                `;
                card_table[card_table.length-1].style.cssText = `
                    border-bottom-left-radius: 4px !important; 
                    border-bottom-right-radius: 4px !important`
                ;
            }
        },

        handlerResetLayout: function() {
            this.handelerReset().then(() => {
                this.handlerDateDoneJC();
            })
        },

        handelerReset: function() {
            return new Promise((resolve) => {
                this.datatable.fields = FieldMDR.map((l) => Object.assign({}, l));
                resolve();
            })
        },

        checksync: function() {
            axios.post('/api/production_control_hangar/get_lastsyncmdr', {
                revnr: this.$route.params.pg_id
            })
            .then(res => {
                //console.log(res.data)
                this.checklastsync = res.data.sync
                this.lastsynccrm = res.data.lastsynccrm
                this.lastsyncmdr = res.data.lastsyncmdr
            })
            .catch(e => {
                console.log("Error: " + e);
            })
        },

        initTrack: function() {
            axios.get('/api/management/job_mdr_track/get/shop')
            .then(res => {
                this.tracks = res.data;
            })
        },

        initZoneArea: function() {
            axios.get('/api/management/zonearea/get_all')
            .then(res => {
                this.zoneareas = res.data;
            })
        },

        initPosition: function() {
            axios.get('/api/management/review_position/get_all_position')
            .then(res => {
                this.positions = res.data;
            })
        },

        handlerModalImport: function() {
            this.data_import = "";
            document.getElementById("file").value = "";

            $('#modal-import-reservation').modal('show');

        },

        handlerExportforupdate: function() {
            axios.get(`/api/production_control_hangar/export_mdrforupdate/${this.$route.params.pg_id}/shop`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    return;
                }

                this.handlerExportupdate(res.data, this.tracks, this.positions, 'MDR Bulk Update').then(() => {
                });
            })
            .catch(e => {
                console.log("Error: " + e);
                this.loading.isLoading = false;
                toastr.error("Undefined error")
            })
        },

        handlerExportupdate: function(data, tracks, pos, name) {
            return new Promise((resolve, reject) => {
                let note = [
                    {COLUMN:"ORDER", RULE:"*required"},
                    {COLUMN:"ACCESS", RULE:"YES or NO"},
                    {COLUMN:"PRIORITY", RULE:"YES or NO"},
                    {COLUMN:"TRACK_ID", RULE:"Input ID Number of Tracking Status from LIST_STATUS Sheet"},
                    {COLUMN:"DATE DONE", RULE:"yyyy-mm-dd"},
                    {COLUMN:"REVIEW_POSITION_ID", RULE:"Input ID Number of Position from LIST_POSITION Sheet"}
                    ]
                note = XLSX.utils.json_to_sheet(note)    
                let tmp = XLSX.utils.json_to_sheet(data)
                let tmp2 = XLSX.utils.json_to_sheet(tracks)
                let tmp3 = XLSX.utils.json_to_sheet(pos)                 
                let wb = XLSX.utils.book_new();
                //console.log(note);
                //console.log(tmp2);
                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.utils.book_append_sheet(wb, note, 'NOTE')
                XLSX.utils.book_append_sheet(wb, tmp2, 'LIST_STATUS')
                XLSX.utils.book_append_sheet(wb, tmp3, 'LIST_POSITION')
                XLSX.writeFile(wb, `mdr_update_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },

        onChangeFileUpload: function(){
            if(document.getElementById("file").files.length != 0 ){
                this.data_import = this.$refs.file.files[0];
            }
        },

        validate: function() {
            if(this.data_import == "") {
                toastr.warning("File import can't be empty");
                return false;
            }

            return true;
        },

        handlerImport: function() {
            if(!this.validate()) return;

            this.handleButton('btn-import-reservation', 'load').then(() => {
                let formData = new FormData();
                formData.append('revnr', this.$route.params.pg_id);
                formData.append('file', this.data_import);

                axios.post('/api/production_control_hangar/import_mdr', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-import-reservation');
                        }, 1000)
                    }else {
                        setTimeout(() => {
                            toastr.warning(res.data.message);
                        }, 100)
                        toastr.warning(res.data.data);
                    }
                    this.handleButton('btn-import-reservation', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    toastr.error("Undefined error");
                    this.handleButton('btn-import-reservation', 'stop');

                })
            })
        },

        handlerUpdateData: function(id, column, elem, position="") {
            if(!this.grant_access) return;
            //this.loading.isLoading = true;
            let elm = "";

            if(column == "SKILL_ACTIVE") {
                elm = elem;
            }else {
                elm = document.getElementById(elem).value;
            }

            axios.post('/api/production_control_hangar/update_tmdr', {
                revnr: this.$route.params.pg_id,
                id: id,
                column: column,
                data: elm
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    toastr.info('refreshing data ...');
                    this.handlerAfterRequest();

                }else {
                    toastr.remove();
                    toastr.error(res.data.message);
                }
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;

            })
        },

        handlerMaterialDetail: function(data) {
            if(data !== "" && data !== null) {
                return data.split('\n').join('<br>');
            }

            return "";
        },

        handlerSkill: function(data) {
            if(data !== "" && data !== null) {
                return data.split(",");  
            }

            return [];
        },

        /**
         * Datatable - Server Side
         */
        onRefresh() {
            this.checksync();
            this.initData();
        },

        updateParams(newProps) {
            this.datatable.serverParams = Object.assign({}, this.datatable.serverParams, newProps);
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage});
            this.loadItems();
        },

        onPerPageChange(params) {
            this.datatable.serverParams.page = 1;
            this.updateParams({perPage: params.currentPerPage});
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                sort: {
                    type: params[0].type,
                    field: params[0].field,
                },
            });
            this.updateParams({page: 1});
            this.loadItems();
        },
        
        onColumnFilter(params) {
            this.updateParams(params);
            this.updateParams({page: 1});
            this.loadItems();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({page: 1});
            this.loadItems();
        },

        /**
         * load items is what brings back the rows from server
         */
        loadItems() {
            this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                this.loading.isLoading = false;
                this.resetToggle('material-list', 'btn-collapse-all', 'icon-collapse-all', 'btn-material-list')
            });
            
        },

        handleDatatableChange: function(params) {
            this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {

                axios.post('/api/production_control_hangar/get_tmdr', params)
                .then(res => {
                    this.datatable.rows = res.data.data
                    this.datatable.totalRows = res.data.total
                    this.loading.isLoading = false;
                    resolve();
                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.loading.isLoading = false;
                    resolve();
                })
            })
        },

        handlerSyncData: function() {
            swal({
                title: "Synchronize the project may take a few minutes",
                text: "Are you sure that you want to sync this project?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;
                    axios.get('/api/production_control_hangar/sync_mdr/' + this.$route.params.pg_id)
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.initData();
                        }else {
                            toastr.error(res.data.message);
                        }
                        this.loading.isLoading = false;
                        this.resetToggle('material-list', 'btn-collapse-all', 'icon-collapse-all', 'btn-material-list')

                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Undefined error");
                        this.loading.isLoading = false;
                        this.resetToggle('material-list', 'btn-collapse-all', 'icon-collapse-all', 'btn-material-list')
                    })
        
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
            this.checksync();
        },

        handlerDateDoneJC: function(e) {
            $('.vgt-fixed-header th input').attr('type','text');
            var el_1 = $('*[placeholder="Filter issue date"]');
            var el_2 = $('*[placeholder="Filter date done"]');
            var el_3 = $('*[placeholder="Filter date done paper work"]');

            if(el_1.length > 0) {
                el_1[0].type = 'date';
            }

            if(el_2.length > 0) {
                el_2[0].type = 'date';
            }

            if(el_3.length > 0) {
                el_3[0].type = 'date';
            }
            $('.vgt-checkbox-col input').attr('type','checkbox');

        },

        handlerToggle: function(btn_id, icon_id, elem_id) {
            //let elm_state = $(".button is-secondary is-success btn-material-list hidedetail")
            let elm_btn = document.getElementById(btn_id);

            if(elm_btn.getAttribute('statetoggle') == "0") {
                $('#' +btn_id).attr('statetoggle','1');
                $('#' +elem_id).slideDown(150);

            }else {
                $('#' +btn_id).attr('statetoggle','0');
                $('#' +elem_id).slideUp(150);
            }
        },

        handlerToggleAll: function(class_elem, btn_id, icon_id, btn_list_class) {
            let elm_icon = document.getElementById(icon_id);
            let elm_btn = document.getElementById(btn_id);
            let elem_list_btn = document.getElementsByClassName(btn_list_class);

            if(elm_icon.innerHTML == "visibility") {
                elm_btn.innerHTML = `<i id="${icon_id}" class='material-icons'>visibility_off</i>Material`;
                
                $('.' +class_elem).slideDown(150);

            }else {
                elm_btn.innerHTML = `<i id="${icon_id}" class='material-icons'>visibility</i>Material`;
                $('.' +class_elem).slideUp(150);

            }
        },

        resetToggle: function(class_elem, btn_id, icon_id, btn_list_class) {
            let elm_icon = document.getElementById(icon_id);
            let elm_btn = document.getElementById(btn_id);
            let elem_list_btn = document.getElementsByClassName(btn_list_class);

            elm_btn.innerHTML = `<i id="${icon_id}" class='material-icons'>visibility</i>Material`;
            $('.' +class_elem).hide();

        },

        custLabel ({ label, status }) {
            return `[${status}] ${label}`;
        },

        handlerHideColumn (value) {
            if(value.label == 'All Columns') {
                if (value.hidden) {
                    for(let i = 0; i < this.columns.length; i++) {
                        if(this.columns[i].label != 'All Columns') {
                            this.datatable.fields[this.columns[i].id].hidden = false;
                        }
                        this.columns[i].status = "HIDE";
                        this.columns[i].hidden = false;
                    }
                }else {
                    for(let i = 0; i < this.columns.length; i++) {
                        if(this.columns[i].label != 'All Columns') {
                            this.datatable.fields[this.columns[i].id].hidden = true;
                        }
                        this.columns[i].status = "SHOW";
                        this.columns[i].hidden = true;
                    }
                }
            }else {
                if (value.hidden) {
                    this.datatable.fields[value.id].hidden = false;
                    value.status = "HIDE";
                    value.hidden = false;
                }else {
                    this.datatable.fields[value.id].hidden = true;
                    value.status = "SHOW";
                    value.hidden = true;
                }
            }
        },

        handlerExportMDR: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/export_mdr/${this.$route.params.pg_id}/shop`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'MDR Tracking').then(() => {
                    this.loading.isLoading = false;
                });
            })
            .catch(e => {
                console.log("Error: " + e);
                this.loading.isLoading = false;
                toastr.error("Undefined error")
            })
        },

        handlerExport: function(data, name) {
            return new Promise((resolve, reject) => {
                let tmp = XLSX.utils.json_to_sheet(data)                 
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.writeFile(wb, `${this.acreginfo}_MDR_TRACKING_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },

        handlerModalSingleAdd: function() {
            this.form.seq = "";
            this.form.originating = "";
            this.form.order_number = "";
            this.form.description = "";
            this.form.issue_date = "";
            this.form.skill = "";
            this.form.zone = "";
            this.form.pmhrs = "";
            this.form.actmhrs = "";
            this.form.cust_approval = "";
            this.form.mdr_track = "";
            this.form.system_status = "";
            this.form.date_done = "";
            this.form.review_position = "";
            this.form.date_done_pw = "";
            this.form.remarks = "";

            $('#modal-single-add').modal('show');

        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        handlerSaveSinglMDR: function() {
            if(!this.handlerValidation()) return;
            this.form.revnr = this.$route.params.pg_id;

            this.handleButton('btn-single-add', 'load').then(() => {

                axios.post('/api/production_control_hangar/add_tmdr', this.form)
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-single-add');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-single-add', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    toastr.error("Failed add item")
                    this.handleButton('btn-single-add', 'stop');

                })
            })

        },

        handlerValidation: function() {
            if(this.form.order_number == "") {
                toastr.warning("Order number field is required");
                return false;
            }
            return true;
        },

        handleButton: function(id, status) {
            let element = document.getElementById(id);
            return new Promise((resolve, reject) => {
                if(status == "load") {
                    element.className += " is-loading";
                    element.disabled = true;

                    setTimeout(() => {
                       resolve(); 
                    }, 500);

                }else {
                    element.className = "button";
                    element.disabled = false;
                    resolve();
                }
            })
        },

        handlerlayout: function() {
            $('#modal-layout').modal('show');
        },

        rowStyleClassFn(row) {
            if(row.SYSTEM_STATUS=='DONE'){
                return 'crowdone';
            }
            else if(row.STATUS=='DONE' && (row.MHRSCONF=='n' || row.MATCONS=='n')){
                return 'crowwtcon';
            }
            else if(row.MHRSCONF=='y' && row.MATCONS=='y' && row.STATUS !='DONE'){
                return 'crowwteco';
            }            
        },

        permissionHandler: function() {
            this.grant_access = false;  
                  
            this.$isReleased(this.$route.params.pg_id).then(res => {
                if(res) {
                    if(this.$bulkCan('pc_shop_tracking_system_edit', 'pc_shop_tracking_system_edit_mdr')) {
                        this.grant_access = true;
                    }
                   
                    axios.get('/api/management/job_mdr_track/linerev/'+this.$route.params.pg_id)
                    .then(res => {
                        this.acreginfo = res.data.info.ac_reg;
                        this.projectinfo = res.data.info.main_type;
                        if(res.data.info.access == 'failed'){
        
                            this.grant_access = false;
                        }
                    })            
                }
            })
        },

        handlerAfterRequest: function() {
            axios.post('/api/production_control_hangar/get_tmdr_shop', {
                revnr: this.$route.params.pg_id
            }, { timeout: 1000 * 60 })
            .then(res => {     
                if(res === undefined) {
                    toastr.error("Request time out !");
                    return;
                }
                
                this.datatable.rows = res.data
                toastr.remove();
                toastr.success('data refreshed');
            })
            .catch(e => {
                console.log("Error: "+e);
                toastr.remove();
                toastr.error("Undefined error");
            })
        }
    }
}
</script>
