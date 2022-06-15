<style scoped>
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

    ::v-deep .cmatfulstat{
        min-width:250px !important;
        max-width:250px !important;
    }

    ::v-deep .ctoggle{
        min-width:50px !important;
        max-width:50px !important;
    }

    ::v-deep .cmatnr{
        min-width:180px !important;
        max-width:180px !important;
        white-space: nowrap; 
        overflow: auto;         
    }

    ::v-deep .calternate{
        min-width:180px !important;
        max-width:180px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep .cmaktx{
        min-width:350px !important;
        max-width:350px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

    ::v-deep .cmtart{
        min-width:55px !important;
        max-width:55px !important;
    }    

    ::v-deep .caufnr{
        min-width:90px !important;
        max-width:90px !important;
    } 

    ::v-deep .cotype{
        min-width:55px !important;
        max-width:55px !important;
    } 

    ::v-deep .costat{
        min-width:95px !important;
        max-width:95px !important;
    }

    ::v-deep .creqdate{
        min-width:190px !important;
        max-width:190px !important;
    }

    ::v-deep .cmatsup{
        min-width:95px !important;
        max-width:95px !important;
    } 

    ::v-deep .cwct{
        min-width:90px !important;
        max-width:90px !important;
    }

    ::v-deep .cflag{
        min-width:60px !important;
        max-width:60px !important;
    }

    ::v-deep .cbdmng{
        min-width:90px !important;
        max-width:90px !important;
    }

    ::v-deep .cqtyall{
        min-width:90px !important;
        max-width:90px !important;
    }

    ::v-deep .cmeins{
        min-width:85px !important;
        max-width:85px !important;
    }

    ::v-deep .caddstat{
        min-width:180px !important;
        max-width:180px !important;
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

    ::v-deep .cpartloc{
        min-width:200px !important;
        max-width:200px !important;
        white-space: nowrap; 
        overflow: auto; 
    }

     ::v-deep .cqtyav{
        min-width:85px !important;
        max-width:85px !important;
    }

     ::v-deep .cshort{
        min-width:100px !important;
        max-width:100px !important;
    }

     ::v-deep .cuic{
        min-width:65px !important;
        max-width:65px !important;
    }

     ::v-deep .cpo{
        min-width:180px !important;
        max-width:180px !important;
    }

     ::v-deep .cdatepo{
        min-width:185px !important;
        max-width:185px !important;
    }

     ::v-deep .cawb{
        min-width:180px !important;
        max-width:180px !important;
    }

     ::v-deep .ceta{
        min-width:185px !important;
        max-width:185px !important;
    }

     ::v-deep .cspin{
        min-width:180px !important;
        max-width:180px !important;
    }

     ::v-deep .cdatepro{
        min-width:185px !important;
        max-width:185px !important;
    }

     ::v-deep .csto{
        min-width:180px !important;
        max-width:180px !important;
    }

     ::v-deep .cdateh4{
        min-width:185px !important;
        max-width:185px !important;
    }

     ::v-deep .cdatepl{
        min-width:185px !important;
        max-width:185px !important;
    }    

     ::v-deep .crecby{
        min-width:180px !important;
        max-width:180px !important;
    }

     ::v-deep .cdaterec{
        min-width:185px !important;
        max-width:185px !important;
    }

     ::v-deep .cqtydel{
        min-width:100px !important;
        max-width:100px !important;
    }    

     ::v-deep .cqtyins{
        min-width:100px !important;
        max-width:100px !important;
    } 

     ::v-deep .cqtyow{
        min-width:85px !important;
        max-width:85px !important;
    } 

     ::v-deep .cexmatun{
        min-width:100px !important;
        max-width:100px !important;
    } 

     ::v-deep .crws{
        min-width:85px !important;
        max-width:85px !important;
    } 

     ::v-deep .cenmng{
        min-width:100px !important;
        max-width:100px !important;
    }

    ::v-deep .mrmact {
        min-width: 75px !important;
        max-width: 75px !important;
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
        width:null;
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
        z-index: 1000 !important;
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
                <li v-if="$bulkCan('pc_shop_tracking_system_view_mdr', 'pc_shop_tracking_system_edit_mdr', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" v-on:click="$router.push({name: 'pc_shop.tracking.mdr', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mdr">MDR</li>
                <li v-if="$bulkCan('pc_shop_tracking_system_view_mrm', 'pc_shop_tracking_system_edit_mrm', 'pc_shop_tracking_system_edit', 'pc_shop_tracking_system_view')" class="tab-link active" data-tab="mrm">MRM</li>
            </ul>
            <div class="card tab-content active" id="mdr" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">MRM Tracking</h3>
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
                                <div v-show="renderedFields">
                                    <vue-good-table
                                        max-height="90vh"
                                        :fixed-header="true"
                                        ref="table-job-tracking"
                                        :columns="datatable.fields"
                                        :rows="datatable.rows"                                     
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
                                            enabled: grant_access,
                                            selectOnCheckboxOnly: true
                                        }"
                                        :line-numbers="true"
                                        @on-selected-rows-change="selectionChanged"
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
                                                    <div v-on:click="handlerExportMRM()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                        <span class="tooltiptext-x">Export Excel</span>
                                                        <i class="material-icons warning sync_order" >file_download</i>
                                                    </div>
                                                </div>                                                
                                                <div class="toolbar-item" style="margin-right: -8px;">
                                                    <select 
                                                        v-on:change="handlerFilterVisibility()" 
                                                        v-model="datatable.visibility"
                                                    >
                                                        <option value="All">All Material</option>
                                                        <option value="y">Default List</option>
                                                        <option value="n">Excluded List</option>
                                                    </select>
                                                </div>
                                                 <div class="toolbar-item" style="margin-right: -8px;">
                                                    <button :disabled="!grant_access" v-on:click="(grant_access) ? handlerModalSingleAdd() : ''" class="button is-default">
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
                                                    <button v-on:click="onRefresh" class="button">
                                                        <i class='material-icons'>
                                                            sync
                                                        </i>
                                                        Refresh
                                                    </button>                                                   
                                                </div>                                                   
                                                <div class="toolbar-item tooltip-x" style="margin-right: -10px;">
                                                    <button @click="handlerSyncData()" class="button is-danger">
                                                        <i class='material-icons'>
                                                            sync
                                                        </i>
                                                        Sync'
                                                    </button>
                                                    <span class="tooltiptext-x" style="width:200px !important;">
                                                        LAST SYNC<br>
                                                        SAP->CRM :<br>
                                                        {{lastsynccrm}}<br>
                                                        CRM->XPREAM :<br>
                                                        {{lastsyncmrm}}
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
                                            <span class="ctoggle" v-if="props.column.field == 'VISIBILITY'">
                                                <div>
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="checkbox" 
                                                        class="switch unset" 
                                                        @change="changeVisibility(props.row)" 
                                                        true-value="y" false-value="n" 
                                                        v-model="props.row.VISIBILITY"
                                                    >
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'MATNR'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>
                                             <span v-else-if="props.column.field == 'ALTERNATEPN'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-alternatepn-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'ALTERNATEPN', 'mrm-track-alternatepn-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'MAKTX'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>
                                            <span v-else-if="props.column.field == 'BDMNG'">
                                                <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</span>
                                            </span>
                                            <span v-else-if="props.column.field == 'QTYOWING'">
                                                <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</span>
                                                
                                            </span>                                            
                                            <span v-else-if="props.column.field == 'INACT'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span class="status-handler warning" v-if="props.formattedRow[props.column.field] > 0">X</span>
                                                    <span v-else>-</span>
                                                </div>
                                            </span> 

                                            <span v-else-if="props.column.field == 'ORDER_STATUS'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span class="status-handler success" v-if="props.formattedRow[props.column.field] === 'DONE'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler warning" v-else-if="props.formattedRow[props.column.field] === 'PROGRESS'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler primary" v-else-if="props.formattedRow[props.column.field] === 'OPEN'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span v-else-if="props.formattedRow[props.column.field] === null || props.formattedRow[props.column.field] === ''">{{props.formattedRow[props.column.field]}}</span>
                                                    <span class="status-handler danger" v-else>{{props.formattedRow[props.column.field]}}</span>
                                                </div>
                                            </span>                                      
                                            <span v-else-if="props.column.field == 'MATFULSTAT'">
                                                <div style="margin-top: 6px; text-align: center;">
                                                    <span style="background-color: #2ECC71;" class="status-handler" v-if="props.formattedRow[props.column.field] === 'DELIVERED TO PRODUCTION'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #2ECC71;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'CANCELLED'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #3498DB;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'PRELOAD IN HANGAR'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #3498DB;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'GAH4 1000'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #F39C12;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'SHORTAGE'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #E74C3C;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'NO SOURCE'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #E74C3C;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'HOLD SHIPMENT'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #E74C3C;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'NIL STOCK'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #8E44AD;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'NEED SOA'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #5D6D7E;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'WAITING PN CONFIRMATION'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #138D75;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'ORDERED TO WORKSHOP'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #7B241C;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'MRIR'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #1A5276;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'DLVR PARTIAL'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #7B241C;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'PROVISION IN STORE'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #B7950B;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'PART ON RECEIVING AREA'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #9C640C;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'SHIPMENT / CUSTOMS PROCESS'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #17202A;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'WAITING CUSTOMER SUPPLY'">{{props.formattedRow[props.column.field]}}</span>
                                                    <span style="background-color: #DC7633;" class="status-handler" v-else-if="props.formattedRow[props.column.field] === 'ORDERED BY PURCHASER'">{{props.formattedRow[props.column.field]}}</span>                                                                                                      
                                                    <span v-else-if="props.formattedRow[props.column.field] === null || props.formattedRow[props.column.field] === ''">N/A</span>
                                                    <span class="status-handler warning" v-else>{{props.formattedRow[props.column.field]}}</span>
                                                </div>
                                            </span>                                                                                      
                                            <span v-else-if="props.column.field == 'TOTAL_QTY_REQ'">
                                                <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</span>
                                            </span>
                                            <span v-else-if="props.column.field == 'REQUEST_DATE'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>
                                            <span v-else-if="props.column.field == 'MATERIAL_SUPPLY'">
                                                <select 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    :id="'mrm-track-material-supply-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'MATERIAL_SUPPLY', 'mrm-track-material-supply-' +props.index)"
                                                >
                                                    <option value=""></option>
                                                    <option value="CSP">CSP</option>
                                                    <option value="GMF">GMF</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'ADDITIONAL_STATUS'">
                                                <select 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" :id="'mrm-track-additional-status-' +props.index" 
                                                    v-on:change="handlerUpdateData(
                                                    props.formattedRow['ID'], 
                                                    'ADDITIONAL_STATUS', 
                                                    'mrm-track-additional-status-' +props.index)"   
                                                >
                                                    <option selected value=""></option>
                                                    <option v-for="stat in stats" :key="stat.ID" :value="stat.ID">{{stat.STAT_NAME}}</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'SHOP_REMARKS'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-shop-remarks-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SHOP_REMARKS', 'mrm-track-shop-remarks-' +props.index)" 
                                                    type="text"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'REMARKS'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>
                                            <span v-else-if="props.column.field == 'PART_LOCATION'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-part-location-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'PART_LOCATION', 'mrm-track-part-location-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'QTY_AVAILABLE'">
                                                <span v-if="props.formattedRow[props.column.field] === null">
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="number" 
                                                        min="0" 
                                                        v-model="props.formattedRow[props.column.field]" 
                                                        :id="'mrm-track-qty-available-' +props.index" 
                                                        v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTY_AVAILABLE', 'mrm-track-qty-available-' +props.index)"
                                                    >
                                                </span>
                                                <span v-else>
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="number" 
                                                        min="0" 
                                                        :value="parseFloat(props.formattedRow[props.column.field]).toFixed(2)" 
                                                        :id="'mrm-track-qty-available-' +props.index" 
                                                        v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTY_AVAILABLE', 'mrm-track-qty-available-' +props.index)"
                                                    >                                                   
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'SHORTAGE'">
                                                <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</span>
                                            </span>
                                            <span v-else-if="props.column.field == 'UIC'">
                                                <select 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    :id="'mrm-track-uic-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'UIC', 'mrm-track-uic-' +props.index)"
                                                >
                                                    <option value=""></option>
                                                    <option value="TME">TME</option>
                                                    <option value="TCD">TCD</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'PURCHASE_ORDER'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-purchase-order-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'PURCHASE_ORDER', 'mrm-track-purchase-order-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'DATEPO'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-date-po-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATEPO', 'mrm-track-date-po-' +props.index)" 
                                                    type="date"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'AWB_NUMBER'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-awb-number-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'AWB_NUMBER', 'mrm-track-awb-number-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'ETA'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-eta-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'ETA', 'mrm-track-eta-' +props.index)" 
                                                    type="date"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'SPIN'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-spin-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SPIN', 'mrm-track-spin-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'DATEPRO'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-datepro-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATEPRO', 'mrm-track-datepro-' +props.index)" 
                                                    type="date"
                                                >
                                            </span>
                                            <span class="ctoggle" v-else-if="props.column.field == 'GADCREQ' && props.formattedRow['MATFULSTAT']=='PROVISION IN STORE'">
                                                <div>
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="checkbox" 
                                                        class="switch unset" 
                                                        @change="changegadcreq(props.row)" 
                                                        true-value="y" 
                                                        false-value="" 
                                                        v-model="props.formattedRow[props.column.field]">
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'DN'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-dn-number-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DN', 'mrm-track-dn-number-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'TO'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-to-number-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'TO', 'mrm-track-to-number-' +props.index)"
                                                >
                                            </span>                                                                                        
                                            <span v-else-if="props.column.field == 'DATEATGAH4'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-dategah4-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATEATGAH4', 'mrm-track-dategah4-' +props.index)" 
                                                    type="date"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'DATEPL'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-date-preload-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATEPL', 'mrm-track-date-preload-' +props.index)" 
                                                    type="date"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'RECEIVED_BY'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-received-by-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'RECEIVED_BY', 'mrm-track-received-by-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'DATEREC'">
                                                <input 
                                                    :disabled="!grant_access" 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :id="'mrm-track-date-received-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATEREC', 'mrm-track-date-received-' +props.index)" 
                                                    type="date"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'QTYDEL'">
                                                <span v-if="props.formattedRow[props.column.field] === null">
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="number" 
                                                        min="0" 
                                                        v-model="props.formattedRow[props.column.field]" 
                                                        :id="'mrm-track-qty-delivered-' +props.index" 
                                                        v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTYDEL', 'mrm-track-qty-delivered-' +props.index)"
                                                    >
                                                </span>
                                                <span v-else>
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="number" 
                                                        min="0" 
                                                        :value="parseFloat(props.formattedRow[props.column.field]).toFixed(2)" 
                                                        :id="'mrm-track-qty-delivered-' +props.index" 
                                                        v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTYDEL', 'mrm-track-qty-delivered-' +props.index)"
                                                    >
                                                </span>
                                            </span>                                            
                                            <span v-else-if="props.column.field == 'QTYINS'">
                                                <span v-if="props.formattedRow[props.column.field] === null">
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="number" 
                                                        min="0" 
                                                        v-model="props.formattedRow[props.column.field]" 
                                                        :id="'mrm-track-qty-install-' +props.index" 
                                                        v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTYINS', 'mrm-track-qty-install-' +props.index)"
                                                    >
                                                </span>
                                                <span v-else>
                                                    <input 
                                                        :disabled="!grant_access" 
                                                        type="number" 
                                                        min="0" 
                                                        :value="parseFloat(props.formattedRow[props.column.field]).toFixed(2)" 
                                                        :id="'mrm-track-qty-install-' +props.index" 
                                                        v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTYINS', 'mrm-track-qty-install-' +props.index)"
                                                    >
                                                </span>
                                            </span> 
                                            <span v-else-if="props.column.field == 'RWS'">
                                                <input 
                                                :disabled="!grant_access" 
                                                v-model="props.formattedRow[props.column.field]" 
                                                :id="'mrm-track-rws-' +props.index" 
                                                v-on:change="handlerUpdateData(props.formattedRow['ID'], 'RWS', 'mrm-track-rws-' +props.index)"
                                            >
                                            </span>
                                            <span v-else-if="props.column.field == 'ENMNG'">
                                                <span v-if="props.formattedRow[props.column.field] === null">0</span>
                                                <span v-else>{{parseFloat(props.formattedRow[props.column.field]).toFixed(2)}}</span>
                                            </span> 
                                            <span v-else-if="props.column.field == 'ACTION'">
                                                <span v-if="props.formattedRow['STORE_STATUS'] === 'addmrm'">
                                                    <div class="action tooltip-x" style="text-align: center; width: 100%;">
                                                        <span class="tooltiptext-x">Delete Item</span>
                                                        <i v-if="grant_access" v-on:click="handlerDeleteItem(props.formattedRow['ID'])" style="font-size: 10pt; font-weight: bold;" class="material-icons danger">delete</i>
                                                    </div>
                                                </span>
                                            </span>                                             
                                            <span v-else>
                                                <div class="flex-middle-default">
                                                    {{props.formattedRow[props.column.field]}}
                                                </div>
                                            </span>
                                        </template>
                                        <div slot="selected-row-actions">
                                            <button :disabled="!grant_access" v-on:click="bulkChangeVisibility('y')" class="button"><i class='material-icons'>visibility</i> Include {{ this.datatable.selectedRows.length }} Selected</button>
                                            <button :disabled="!grant_access" v-on:click="bulkChangeVisibility('n')" class="button"><i class='material-icons'>visibility_off</i> Exclude {{ this.datatable.selectedRows.length }} Selected</button>
                                        </div>
                                    </vue-good-table>

                                </div>
                            </template>
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
                                        <button class="button is-secondary is-success" v-on:click="handlerExportMRMforupdate()">Download Template</button>
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
                                @change="handlerDateColumns"
                                >
                                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                                    <div v-for="(element, index) in datatable.fields" :key="index + 0">
                                        <div class="list-group-item" v-if="element.label !== 'ID' && element.label  !== 'is_add'">
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



                <!-- /modal import -->
                <!-- modal single add -->
                <div class="modal-box" id="modal-single-add" data-keyboard="false" data-backdrop="static">
                    <div class="modal lg">
                        <span class="close" v-on:click="hideModal('modal-single-add')"></span>
                            <div class="modal-header">
                                <h2 class="title">Add Single MRM</h2>
                            </div>
                            <div class="modal-body" style="position: relative">
                                <label>
                                    Input data <span class="is-req">*</span>
                                </label>
                                <div class="is-row">
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.order_number" value="" type="text"> 
                                        <div class="is-desc">Order Number</div>
                                    </div> 
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.part_number" value="" type="text"> 
                                        <div class="is-desc">Part Number</div>
                                    </div>
                                    <div class="form-item is-col is-30">
                                        <input v-model="form.mat_desc" value="" type="text"> 
                                        <div class="is-desc">Material Description</div>
                                    </div>
                                    <div class="form-item is-col is-10">
                                        <input v-model="form.mat_type" value="" type="text"> 
                                        <div class="is-desc">Material Type</div>
                                    </div>                                                                        
                                    <div class="form-item is-col is-10">
                                        <input v-model="form.qty_req" value="" type="number"> 
                                        <div class="is-desc">QTY Required</div>
                                    </div>
                                    <div class="form-item is-col is-10">
                                        <input v-model="form.uom" value="" type="text"> 
                                        <div class="is-desc">UOM</div>
                                    </div>                                    
                                </div>
                                <div class="is-row" style="margin-top: -10px;">
                                    <div class="form-item is-col is-10">
                                        <select v-model="form.input_by">
                                            <option value="">Option</option>
                                            <option value="PLE">PLE</option>
                                            <option value="MATREP">MATREP</option>
                                        </select>
                                        <div class="is-desc">Input By</div>
                                    </div>
                                     <div class="form-item is-col is-30">
                                        <input v-model="form.alternate_pn" value="" type="text"> 
                                        <div class="is-desc">Alternate Part Number</div>
                                    </div>
                                    <div class="form-item is-col is-30">
                                        <select v-model="form.additional_status">
                                            <option value="">Option</option>
                                            <option v-for="stat in stats" :key="stat.ID" :value="stat.ID">{{stat.STAT_NAME}}</option>
                                        </select>
                                        <div class="is-desc">Additional Status</div>
                                    </div>
                                    <div class="form-item is-col is-10">
                                        <input v-model="form.qty_available" value="" type="number"> 
                                        <div class="is-desc">QTY Available</div>
                                    </div>
                                    <div class="form-item is-col is-10">
                                        <select v-model="form.uic">
                                            <option value="">Option</option>
                                            <option value="TME">TME</option>
                                            <option value="TCD">TCD</option>
                                        </select>
                                        <div class="is-desc">UIC</div>
                                    </div>
                                    <div class="form-item is-col is-10">
                                        <select v-model="form.mat_supply">
                                            <option value="">Option</option>
                                            <option value="CSP">CSP</option>
                                            <option value="GMF">GMF</option>
                                        </select>
                                        <div class="is-desc">Material Supply</div>
                                    </div>
                                </div>
                                <div class="is-row" style="margin-top: -10px;">
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.request_date" value="" type="date"> 
                                        <div class="is-desc">Request Date</div>
                                    </div>                                                                                          
                                    <div class="form-item is-col is-80">
                                        <input v-model="form.part_location" value="" type="text"> 
                                        <div class="is-desc">Part location</div>
                                    </div>
                                </div>
                                <div class="is-row" style="margin-top: -10px;">
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.date_po" value="" type="date"> 
                                        <div class="is-desc">Date of PO</div>
                                    </div>                                
                                    <div class="form-item is-col is-80">
                                        <input v-model="form.purchase_order" value="" type="text"> 
                                        <div class="is-desc">Purchase Order</div>
                                    </div>
                                </div>
                                <div class="is-row" style="margin-top: -10px;">
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.eta" value="" type="date"> 
                                        <div class="is-desc">ETA</div>
                                    </div>                                
                                    <div class="form-item is-col is-80">
                                        <input v-model="form.awb_number" value="" type="text"> 
                                        <div class="is-desc">AWB Number</div>
                                    </div>
                                </div>
                                 <div class="is-row" style="margin-top: -10px;">
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.date_provision" value="" type="date"> 
                                        <div class="is-desc">Date of Provision</div>
                                    </div>
                                    <div class="form-item is-col is-80">
                                        <input v-model="form.spin" value="" type="text"> 
                                        <div class="is-desc">SP IN</div>
                                    </div>
                                </div>
                                <div class="is-row" style="margin-top: -10px;">
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.date_gah" value="" type="date"> 
                                        <div class="is-desc">Date at GAH4 1000</div>
                                    </div>                                  
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.date_preload" value="" type="date"> 
                                        <div class="is-desc">Date Pre-Load</div>
                                    </div>
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.date_recived" value="" type="date"> 
                                        <div class="is-desc">Date Recived (Prod.)</div>
                                    </div>                                    
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.received_by" value="" type="text"> 
                                        <div class="is-desc">Recived By</div>
                                    </div>
                                     <div class="form-item is-col is-20">
                                        <input v-model="form.qty_delivered" value="" type="number"> 
                                        <div class="is-desc">QTY Delivered</div>
                                    </div>
                                </div>
                                <div class="is-row" style="margin-top: -10px;">
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.qty_installed" value="" type="number"> 
                                        <div class="is-desc">QTY Installed</div>
                                    </div>
                                    <div class="form-item is-col is-20">
                                        <input v-model="form.rws" value="" type="text"> 
                                        <div class="is-desc">RWS</div>
                                    </div>
                                    <div class="form-item is-col is-60">
                                        <textarea v-model="form.remarks" rows="1"></textarea>
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
import FieldMRM from './datatable/FieldMRM';
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
            fields: FieldMRM,
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
            visibility: "y",
        },
        tracks: [],
        zoneareas: [],
        positions: [],
        stats: [],

        data_import: "",

        form: {
            order_number: "",
            part_number: "",
            qty_req: "",
            input_by: "",
            alternate_pn: "",
            mat_desc: "",
            mat_type: "",
            additional_status: "",
            part_location: "",
            request_date: "",
            mat_supply: "",
            uom: "",
            qty_available: "",
            uic: "",
            purchase_order: "",
            date_po: "",
            rws: "",
            eta: "",
            spin: "",
            date_provision: "",
            date_gah: "",
            date_preload: "",
            received_by: "",
            date_recived: "",
            qty_delivered: "",
            qty_installed: "",
            remarks: ""
        },
        grant_access: false,
        acreginfo: "",
        projectinfo: "",
        drag: false,
        checklastsync: false,
        lastsynccrm: "",
        lastsyncmrm: "",

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
                        'pc_shop_tracking_system_view_mrm',
                        'pc_shop_tracking_system_edit_mrm',
                        'pc_shop_tracking_system_edit',
                        'pc_shop_tracking_system_view'
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
                        this.handlerDateColumns();
                        this.initMRMStatus();
                        //this.checksync();
                        document.querySelector('.new').addEventListener('scroll', this.handleScroll);
                    });
                }
            }
        })
    },

    computed: {     
        dragOptions() {
          return {
            animation: 200,
            group: "description",
            disabled: false,
            ghostClass: "ghost"
          };
        },
    },

    methods: {
        initData:  function() {
            $( ".vgt-fixed-header, .vgt-responsive" ).wrapAll( "<div class='new' />").css("width","unset").css( "overflow-x","unset");
            $( ".vgt-fixed-header").css("position","sticky").css("position","-webkit-sticky").css("top","0");
            $( ".vgt-fixed-header table thead tr:nth-child(2) th:nth-child(1)").text(".");
            $( ".vgt-responsive thead").attr("hidden",true);
            $( ".new" ).css( "overflow-x","auto");       

            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/get_tmrm_shop', {
                revnr: this.$route.params.pg_id,
                visibility: this.datatable.visibility,
            },{ timeout: 1000 * 60 })
            .then(res => {
                if(res === undefined) {
                    toastr.error("Request time out !");
                    this.loading.isLoading = false;
                    return;
                }

                if(res.data.length < 1) {
                    toastr.warning(`Empty data, please run synchronize.`)
                }

                this.datatable.rows = res.data;
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
                    name: 'LAYOUT_MRM'
                })
                .then(res => {
                    if(res.data.length !== FieldMRM.length) {
                        this.datatable.fields = FieldMRM.map((l) => Object.assign({}, l));
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
                    name: "LAYOUT_MRM"
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
                this.handlerDateColumns();
            })  
        },

        handelerReset: function() {
            return new Promise((resolve) => {
                this.datatable.fields = FieldMRM.map((l) => Object.assign({}, l));
                resolve();
            })
        },

        checksync: function() {
            axios.post('/api/production_control_hangar/get_lastsyncmrm', {
                revnr: this.$route.params.pg_id
            })
            .then(res => {
                this.checklastsync = res.data.sync
                this.lastsynccrm = res.data.lastsynccrm
                this.lastsyncmrm = res.data.lastsyncmrm
            })
            .catch(e => {
                console.log("Error: " + e);
            })
        },

        initMRMStatus: function() {
            axios.get('/api/management/mrm_status/get_all')
            .then(res => {
                this.stats = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
            })
        },


        handlerUpdateData: function(id, column, elem) {
            if(!this.grant_access) return;
            let elm = document.getElementById(elem).value;

            axios.post('/api/production_control_hangar/update_tmrm', {
                id: id,
                column: column,
                data: elm,
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
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;

            })
        },

        onRefresh() {
            this.checksync();
            this.initData();
        },

        selectionChanged(params) {
            this.datatable.selectedRows = [];
            for(let i = 0; i < params.selectedRows.length; i++) {
                this.datatable.selectedRows.push(params.selectedRows[i].ID);
            }
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
                    axios.get('/api/production_control_hangar/sync_mrm/' + this.$route.params.pg_id)
                    .then(res => {
                        console.log(res.data);
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.initData();
                        }else {
                            toastr.error(res.data.message);
                        }
                        this.loading.isLoading = false;
                        this.checksync();
                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Undefined error");
                        this.loading.isLoading = false;

                    })
        
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
            this.checksync();
        },

        handlerDateColumns: function(e) {
            $('.vgt-fixed-header th input').attr('type','text');
            var el_1 = $('*[placeholder="Filter request date"]');
            var el_2 = $('*[placeholder="Filter date po"]');
            var el_3 = $('*[placeholder="Filter date of provision"]');
            var el_4 = $('*[placeholder="Filter deta at gah4 1000"]');
            var el_5 = $('*[placeholder="Filter date preload"]');
            var el_6 = $('*[placeholder="Filter date received by prod"]');
            var el_7 = $('*[placeholder="Filter ETA date"]');
           
            if(el_1.length){el_1[0].type = 'date';}
            if(el_2.length){el_2[0].type = 'date';}
            if(el_3.length){el_3[0].type = 'date';}
            if(el_4.length){el_4[0].type = 'date';}
            if(el_5.length){el_5[0].type = 'date';}
            if(el_6.length){el_6[0].type = 'date';}
            if(el_7.length){el_7[0].type = 'date';}    
            
            $('.vgt-checkbox-col input').attr('type','checkbox');
        },

        custLabel ({ label, status }) {
            return `[${status}] ${label}`;
        },

        handlerExportMRM: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/export_mrm/${this.$route.params.pg_id}/shop`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'MRM Tracking').then(() => {
                    this.loading.isLoading = false;
                });
            })
            .catch(e => {
                console.log("Error: " + e);
                this.loading.isLoading = false;
                toastr.error("Undefined error")
            })
        },

        handlerExportMRMforupdate: function() {
            axios.get(`/api/production_control_hangar/export_mrmforupdate/${this.$route.params.pg_id}/shop`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    return;
                }

                this.handlerExportupdate(res.data, this.stats, 'MRM Bulk Update').then(() => {
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
                XLSX.writeFile(wb, `${this.acreginfo}_MRM_TRACKING_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },

        handlerExportupdate: function(data, status, name) {
            return new Promise((resolve, reject) => {
                let note = [
                    {COLUMN:"Toggle", RULE:"y or n"},
                    {COLUMN:"Part Number", RULE:"*required"},
                    {COLUMN:"Order", RULE:"*required"},
                    {COLUMN:"Mat Supply", RULE:"CSP or GMF"},
                    {COLUMN:"Additional Status", RULE:"Input ID Number from ADDITIONAL_STATUS_ID Sheet"},
                    {COLUMN:"Date of PO", RULE:"yyyy-mm-dd"},
                    {COLUMN:"ETA", RULE:"yyyy-mm-dd"},
                    {COLUMN:"Date of Provision", RULE:"yyyy-mm-dd"},
                    {COLUMN:"Date at GAH4 1000", RULE:"yyyy-mm-dd"},
                    {COLUMN:"Date PRE-LOAD", RULE:"yyyy-mm-dd"},
                    {COLUMN:"", RULE:""},
                    {COLUMN:"input value 'NULL' to clear/delete existing data", RULE:""}
                ];
                note = XLSX.utils.json_to_sheet(note)    
                let tmp = XLSX.utils.json_to_sheet(data)
                let tmp2 = XLSX.utils.json_to_sheet(status)                 
                let wb = XLSX.utils.book_new();
                console.log(note);
                console.log(tmp2);
                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.utils.book_append_sheet(wb, note, 'NOTE')
                XLSX.utils.book_append_sheet(wb, tmp2, 'ADDITIONAL_STATUS_ID')
                XLSX.writeFile(wb, `mrm_update_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },
        changeVisibility: function (list) {
            swal({
                title: "Change Visibility Status",
                text: "You are going to change visibility status?",
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    let data_update = "";

                    if (list.VISIBILITY === true || list.VISIBILITY === 'y') {
                        data_update = "y";
                    } else if (list.VISIBILITY === false || list.VISIBILITY === 'n') {
                        data_update = "n";
                    }

                    if(data_update == "") {
                        toastr.warning("Empty visibility status");
                        this.loading.isLoading = false;
                    }

                    axios.post('/api/production_control_hangar/change_visibility', {
                        id: list.ID,
                        data_update: data_update
                    })
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            toastr.info('Refreshing data ...');
                            this.initData();
                            toastr.success('data refreshed');
                        }else {
                            toastr.error(res.data.message);
                        }
                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Failed change visibility status");
                    })
                }
                else {
                    if (list.VISIBILITY === true || list.VISIBILITY === 'y') {
                        list.VISIBILITY = "n";
                    } else if (list.VISIBILITY === false || list.VISIBILITY === 'n') {
                        list.VISIBILITY = "y";
                    }
                }
            })
        },

        changegadcreq: function(list) {
            if(!this.grant_access) return;
            
            let data_update = "";
            if (list.GADCREQ === true || list.GADCREQ === 'y') {
                data_update = "y";
            } else if (list.GADCREQ === false || list.GADCREQ === "") {
                data_update = null;
            }            

            axios.post('/api/production_control_hangar/update_tmrm', {
                id: list.ID,
                column: 'GADCREQ',
                data: data_update,
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
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;

            })
        },

        bulkChangeVisibility: function(status) {
            swal({
                title: "Change Visibility Status",
                text: `You are going to change #${this.datatable.selectedRows.length} visibility status?`,
                icon: "warning",
                buttons: true,
                dangerMode: false,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;

                    if(status == "") {
                        toastr.warning("Empty visibility status");
                        this.loading.isLoading = false;
                    }

                    axios.post('/api/production_control_hangar/bulk_change_visibility', {
                        id: this.datatable.selectedRows,
                        data_update: status
                    })
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            toastr.info('refreshing data ...');
                            this.initData();
                            toastr.success('data refreshed');
                        }else {
                            toastr.error(res.data.message);
                        }
                        this.loading.isLoading = false;
                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Failed change visibility status");
                        this.loading.isLoading = false;
                    })
                    
                }
                else {
                    toastr.info("Canceled")
                }
            })
        },

        handlerFilterVisibility: function() {
            this.initData();
        },

        handlerlayout: function() {
            $('#modal-layout').modal('show');
        },

        handlerModalImport: function() {
            this.data_import = "";
            document.getElementById("file").value = "";

            $('#modal-import-reservation').modal('show');

        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
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

        handlerImport: function() {
            if(!this.validate()) return;

            this.handleButton('btn-import-reservation', 'load').then(() => {
                let formData = new FormData();
                formData.append('revnr', this.$route.params.pg_id);
                formData.append('file', this.data_import);

                axios.post('/api/production_control_hangar/import_visibility', formData, {
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


        validate: function() {
            if(this.data_import == "") {
                toastr.warning("File import can't be empty");
                return false;
            }

            return true;
        },

        onChangeFileUpload: function(){
            if(document.getElementById("file").files.length != 0 ){
                this.data_import = this.$refs.file.files[0];
            }
        },

        handlerModalSingleAdd: function() {
            this.form.revnr = "";
            this.form.order_number = "";
            this.form.part_number = "";
            this.form.qty_req = "";
            this.form.input_by = "";
            this.form.alternate_pn = "";
            this.form.mat_desc = "";
            this.form.mat_type = "";
            this.form.additional_status = "";
            this.form.part_location = "";
            this.form.request_date = "";
            this.form.mat_supply = "";
            this.form.uom = "";
            this.form.qty_available = "";
            this.form.uic = "";
            this.form.purchase_order = "";
            this.form.date_po = "";
            this.form.rws = "";
            this.form.eta = "";
            this.form.spin = "";
            this.form.date_provision = "";
            this.form.date_gah = "";
            this.form.date_preload = "";
            this.form.received_by = "";
            this.form.date_recived = "";
            this.form.qty_delivered = "";
            this.form.qty_installed = "";
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

                axios.post('/api/production_control_hangar/add_tmrm', this.form)
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

            if(this.form.part_number == "") {
                toastr.warning("Part number field is required");
                return false;
            }

            if(this.form.qty_req == "") {
                toastr.warning("QTY Required field can't be empty");
                return false;
            }

            if(this.form.uom == "") {
                toastr.warning("UoM Required field can't be empty");
                return false;
            }
            if(this.form.mat_desc == "") {
                toastr.warning("Material Description Required field can't be empty");
                return false;
            }
            if(this.form.mat_type == "") {
                toastr.warning("Material Type Required field can't be empty");
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

        permissionHandler: function() {
            this.grant_access = false;  
                        
            this.$isReleased(this.$route.params.pg_id).then(res => {
                if(res) {
                    if(this.$bulkCan('pc_shop_tracking_system_edit', 'pc_shop_tracking_system_edit_mrm')) {
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
            axios.post('/api/production_control_hangar/get_tmrm_shop', {
                revnr: this.$route.params.pg_id,
                visibility: this.datatable.visibility,
            },{ timeout: 1000 * 60 })
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
                toastr.remove();
                toastr.error("Undefined error");
            })
        },

        handlerDeleteItem: function(id) {
            if(!this.grant_access) return false;
            swal({
                title: "Delete Item",
                text: "Are you sure that you want to delete this item?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    axios.get('/api/production_control_hangar/delete_mrm/' + id)
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.handlerAfterRequest();
                        }else {
                            toastr.error(res.data.message);
                        }
                    })
                    .catch(e => {
                        console.log("Error: " +e);
                        toastr.error("Undefined error");
                    })
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
        },

        /*handleScroll () {
            //console.log($('.new').scrollLeft());
            $(this).find('.cmatfulstat').css('position','sticky').css('left', $(this).scrollLeft());
        }*/


    }
}
</script>
