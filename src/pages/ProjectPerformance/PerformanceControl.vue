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

    ::v-deep .crowdone{
        background-color: #C4F8C4;
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

    ::v-deep .cdel{
        min-width:50px !important;
        max-width:50px !important;
    }

    ::v-deep .crevnr{
        min-width:90px !important;
        max-width:90px !important;
    }

    ::v-deep .cwbs{
        min-width:70px !important;
        max-width:70px !important;
    }

    ::v-deep .cactype{
        min-width:80px !important;
        max-width:80px !important;
    }

    ::v-deep .cacreg{
        min-width:100px !important;
        max-width:100px !important;
    }

    ::v-deep .cmaintype{
        text-align: left;
        min-width:250px !important;
        max-width:250px !important;    
    }

    ::v-deep .crevtyp{
        min-width:120px !important;
        max-width:120px !important;
    }

    ::v-deep .cseq{
        min-width:80px !important;
        max-width:80px !important;
    }
    
    
    ::v-deep .ccust{
        min-width:150px !important;
        max-width:150px !important;
    }
    
    ::v-deep .cline{
        min-width:100px !important;
        max-width:100px !important;
    }

    ::v-deep .cacc{
        min-width:100px !important;
        max-width:100px !important;
    }

    ::v-deep .cdate{
        min-width:185px !important;
        max-width:185px !important;
    }

    ::v-deep .cmon{
        min-width:80px !important;
        max-width:80px !important;
    }

    ::v-deep .cstat{
        min-width:120px !important;
        max-width:120px !important;
    }

    ::v-deep .cactmhrs{
        min-width:60px !important;
        max-width:60px !important;
    }

    ::v-deep .cday{
        min-width:60px !important;
        max-width:60px !important;
    }

    ::v-deep .ctrackstat{
        min-width:300px !important;
        max-width:300px !important; 
    }

    ::v-deep .creason{
        min-width:150px !important;
        max-width:150px !important; 
    }

    ::v-deep .cbadelay{
        min-width:185px !important;
        max-width:185px !important; 
    }

    ::v-deep .cpark{
        min-width:60px !important;
        max-width:60px !important; 
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
        background-color: #13CE66;
    }

    ::v-deep .skill-handler.nonactive {
        background-color: #aeb3b8;

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
                <li class="tab-link active" data-tab="perf">Project Performance</li>
            </ul>
            <div class="card tab-content active" id="perf" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                            <h3 class="title">Project Performance</h3>                       
                    </div>
                    <div class="option-box">
                        <div class="option-item">
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
                                        max-height="400px"
                                        :fixed-header="true"                                    
                                        ref="table-job-tracking"
                                        :columns="datatable.fields"
                                        :rows="datatable.rows"
                                        :row-style-class="rowStyleClassFn"
                                        styleClass="vgt-table bordered"
                                        mode="remote"
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
                                        @on-search="onColumnSearch"
                                        @on-page-change="onPageChange"
                                        @on-sort-change="onSortChange"
                                        @on-column-filter="onColumnFilter"
                                        @on-per-page-change="onPerPageChange"
                                        :totalRows="datatable.totalRows"
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
                                                    <div class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
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
                                                <!--div class="toolbar-item" style="margin-right: -10px;">
                                                     <button :disabled="!grant_access" v-on:click="(grant_access) ? handlerModalImport() : ''" class="button is-default">
                                                        <i class='material-icons'>
                                                            insert_drive_file
                                                        </i>
                                                        Update
                                                    </button>
                                                </div-->                                                
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button v-on:click="onRefresh" class="button">
                                                        <i class='material-icons'>
                                                            sync
                                                        </i>
                                                        Refresh
                                                    </button>                                                   
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
                                            <span v-if="props.column.field == 'ac_type'">
                                                <span v-if="props.formattedRow[props.column.field]==='' || props.formattedRow[props.column.field]===null">
                                                    <button class="button is-danger" style="padding-top:0px;padding-bottom:0px;height:20px;" v-on:click="handlerCheckAircraft(props.formattedRow['REVNR'])">n/a</button>
                                                </span>
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>

                                            </span>
                                            <span v-if="props.column.field == 'REVNR'">
                                                <button class="button is-success is-secondary" style="padding-top:0px;padding-bottom:0px;padding-left:5px;padding-right:5px;height:20px;" v-on:click="handlerOpenTracking(props.formattedRow[props.column.field])">{{props.formattedRow[props.column.field]}}</button>
                                            </span>                                            
                                            <span v-else-if="props.column.field == 'rev_type'">
                                                <select v-model="datatable.rows[props.index].rev_type" :disabled="!grant_access" :id="'rev_type-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'MAINTYPE', 'rev_type-' +props.index)">
                                                    <option value="">[reset defaut]</option>
                                                    <option value="Daily Check">Daily Check</option>
                                                    <option value="Service Check">Service Check</option>
                                                    <option value="Weekly Check">Weekly Check</option>
                                                    <option value="A Check">A Check</option>
                                                    <option value="C Check">C Check</option>
                                                    <option value="D Check">D Check</option>
                                                    <option value="SR Check">SR Check</option>
                                                    <option value="SR Painting">SR Painting</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'is_painting'">
                                                <select v-model="datatable.rows[props.index].is_painting" :disabled="!grant_access" :id="'is_painting-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'IS_PAINTING', 'is_painting-' +props.index)">
                                                    <option value="">[reset defaut]</option>
                                                    <option value="y">yes</option>
                                                    <option value="n">no</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'planstart'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'planstart-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'plan_start', 'planstart-' +props.index)" type="date">
                                            </span>
                                            <span v-else-if="props.column.field == 'planend'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'planstart-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'plan_start', 'planstart-' +props.index)" type="date">
                                            </span>
                                            <span v-else-if="props.column.field == 'cust_agreed'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'cust_agreed-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'CUST_AGREED', 'cust_agreed-' +props.index)" type="date">
                                            </span>
                                            <span v-else-if="props.column.field == 'status_new'">
                                                <select v-model="datatable.rows[props.index].status_new" :disabled="!grant_access" :id="'mainstatus-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'status_new', 'mainstatus-' +props.index)">
                                                    <option value="">[reset defaut]</option>
                                                    <option 
                                                        v-for="(stat, index) in status" 
                                                        :key="index" 
                                                        :value="stat.ID"
                                                    >
                                                        {{stat.NAME}}
                                                    </option>
                                                </select>
                                            </span> 
                                            <span v-else-if="props.column.field == 'startparking'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'startparking-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'STARTPARKING', 'startparking-' +props.index)" type="date">
                                            </span>
                                            <span v-else-if="props.column.field == 'endparking'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'endparking-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'ENDPARKING', 'endparking-' +props.index)" type="date">
                                            </span>
                                            <span v-else-if="props.column.field == 'reason'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'reason-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'REASON', 'reason-' +props.index)" type="text">
                                            </span>
                                            <span v-else-if="props.column.field == 'reason_ctg'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'reason_ctg-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'REASON_CTG', 'reason_ctg-' +props.index)" type="text">
                                            </span>                                            
                                            <span v-else-if="props.column.field == 'planacttat' && props.formattedRow[props.column.field] !== null">
                                                {{props.formattedRow[props.column.field]}} %
                                            </span>
                                            <span v-else-if="props.column.field == 'agreedacttat' && props.formattedRow[props.column.field] !== null">
                                                {{props.formattedRow[props.column.field]}} %
                                            </span>
                                            <span v-else-if="props.column.field == 'ba_delay'">
                                                <div class="is-row">
                                                    <div class="is-col is-50">
                                                        <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'ba_delay-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'BA_DELAY','ba_delay-' +props.index)" type="text">
                                                    </div>
                                                    <div class="is-col is-50" v-if="props.formattedRow[props.column.field] !== null">
                                                        <span class="button is-small is-primary" style="height:20px;" v-if="props.formattedRow[props.column.field].startsWith('http')" v-on:click="handlerOpenLink(props.formattedRow[props.column.field])">
                                                        Open
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'doc'">
                                                <div class="is-row">
                                                    <div class="is-col is-50">
                                                        <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'doc-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['REVNR'], 'DOC','doc-' +props.index)" type="text">
                                                    </div>
                                                    <div class="is-col is-50" v-if="props.formattedRow[props.column.field] !== null">
                                                        <span class="button is-small is-primary" style="height:20px;" v-if="props.formattedRow[props.column.field].startsWith('http')" v-on:click="handlerOpenLink(props.formattedRow[props.column.field])">
                                                        Open
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'wbs'">
                                                <button
                                                    v-if="props.formattedRow['wbs']" 
                                                    class="button is-success is-secondary" 
                                                    style="padding-top:0px;padding-bottom:0px;padding-left:5px;padding-right:5px;height:20px;" 
                                                    v-on:click="handlerModalRevision(props.formattedRow['wbs'], 'wbs', props.formattedRow['REVNR'])"
                                                >
                                                    SHOW
                                                </button>
                                                <button
                                                    v-else
                                                    class="button is-default is-secondary" 
                                                    style="padding-top:0px;padding-bottom:0px;padding-left:5px;padding-right:5px;height:20px;" 

                                                >
                                                    EMPTY
                                                </button>
                                            </span> 
                                            <span v-else-if="props.column.field == 'so'">
                                                <button 
                                                    v-if="props.formattedRow['so']" 
                                                    class="button is-success is-secondary" 
                                                    style="padding-top:0px;padding-bottom:0px;padding-left:5px;padding-right:5px;height:20px;" 
                                                    v-on:click="handlerModalRevision(props.formattedRow['so'], 'so', props.formattedRow['REVNR'])"
                                                >
                                                    SHOW
                                                </button>
                                                <button
                                                    v-else
                                                    class="button is-default is-secondary" 
                                                    style="padding-top:0px;padding-bottom:0px;padding-left:5px;padding-right:5px;height:20px;" 

                                                >
                                                    EMPTY
                                                </button>
                                            </span> 
                                            <span v-else-if="props.column.field == 'action'">
                                                <div class="action tooltip-x" style="text-align: center; width: 100%;">
                                                    <span class="tooltiptext-x">Delete Item</span>
                                                    <i v-if="!grant_access" style="font-size: 10pt; font-weight: bold;" class="material-icons default">delete</i>
                                                    <i v-else v-on:click="handlerDeleteItem(props.formattedRow['REVNR'])" style="font-size: 10pt; font-weight: bold;" class="material-icons danger">delete</i>
                                                </div>
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
                            @change="handlerDate"
                            >
                                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                                    <div v-for="(element, index) in datatable.fields" :key="index + 0">
                                        <div v-if="element.isShow" class="list-group-item" >
                                            <i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
                                            <div class="is-row" v-if="!element.hidden" style="font-weight:bold;">
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
                            <h2 class="title">Add Project to the List</h2>
                        </div>
                        <div class="modal-body" style="position: relative">
                            <label>
                                Input Revision Number <span class="is-req">*</span>
                            </label>
                            <div class="is-row">
                                <div class="form-item is-col is-25">
                                    <input v-model="form.rev_number" value="" type="number"> 
                                    <div class="is-desc">Revision Number</div>
                                </div>
                            </div>
                            <div class="is-row" style="margin-top: -10px;">
                                <div class="form-item is-col is-10">
                                    <select v-model="form.done_access">
                                        <option value="">Option</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <div class="is-desc">Done Access</div>
                                </div> 
                                <div class="form-item is-col is-10">
                                    <select v-model="form.priority_task">
                                        <option value="">Option</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <div class="is-desc">Priority Task</div>
                                </div>
                                <div class="form-item is-col is-10">
                                    <select v-model="form.rii">
                                        <option value="">Option</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <div class="is-desc">RII</div>
                                </div> 
                                <div class="form-item is-col is-10">
                                    <input v-model="form.task_code" value="" type="text"> 
                                    <div class="is-desc">Task Code</div>
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
                                    <input v-model="form.day" value="" type="number"> 
                                    <div class="is-desc">Day</div>
                                </div>
                                <div class="form-item is-col is-10">
                                    <select v-model="form.jc_track">
                                        <option value="">Option</option>
                                        <option v-for="track in tracks" :key="track.ID" :value="track.ID">{{track.TRACK_NAME}}</option>
                                    </select>
                                    <div class="is-desc">JC Track</div>
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
                            <button v-on:click="handlerSaveSinglJc()" class="button is-success" type="submit" id="btn-single-add"> Save </button>

                        </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal single add  -->
            
            <!-- modal wbs -->
            <div class="modal-box" id="modal-revision" data-keyboard="false" data-backdrop="static">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-revision')"></span>
                    <div class="modal-header">
                        <h2 class="title">{{modal.type.toUpperCase()}} #{{modal.revnr}}</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <span v-if="modal.data.length < 1">There is no {{modal.type.toUpperCase()}} for selected revision.</span>
                        <span v-else>
                            <span v-for="(data, index) in modal.data" :key="index" style="padding: 3px">
                                <span class="button is-small is-primary" style="height:20px; width: 105px;" >
                                    {{data}}
                                </span>
                            </span>
                        </span>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-revision')">Close</button>

                    </div>
                </div>
            </div>
            <!-- /modal wbs -->
        </div>
    </div>
</template>

<script>

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';
import draggable from 'vuedraggable';
import FieldPerformance from './datatable/FieldPerformance';
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
            fields: FieldPerformance,
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
            revnr: '',
            ac_type: ''
        },
        grant_access: false,
        cust_access: false,
        acreginfo: "",
        projectinfo: "",
        drag: false,
        lastsynccrm: "",
        lastsyncjc: "",
        checklastsync: false,       
        modal: {
            revnr: "",
            type: "wbs",
            data: [],
        },
        status: [],

    }),

    components: {
        Loading,
        draggable,
        VueGoodTable,
        'multiselect': Multiselect
    },

    mounted() {
        this.hasAccess = true;
        this.permissionHandler();
        this.initArangedLayout().then(() => {
            this.renderedFields = true;
            this.initStatus();
            this.handlerArrangedStyle();
            this.initData();
            this.handlerDate();
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
        },
    },

    methods: {
        initData:  function() {

            $( ".vgt-fixed-header, .vgt-responsive" ).wrapAll( "<div class='new' />").css("width","unset").css( "overflow-x","unset");
            $( ".vgt-fixed-header").css("position","sticky").css("position","-webkit-sticky").css("top","0");
            $( ".vgt-fixed-header table thead tr:nth-child(2) th:nth-child(1)").text(".");
            $( ".vgt-responsive thead").attr("hidden",true);
            $( "th").removeAttr("style");
            $( ".new" ).css( "overflow-x","auto");        
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            this.loading.isLoading = true;

            axios.post('/api/performance/get_tperformance', this.datatable.serverParams)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data, please run synchronize.`)
                }

                this.datatable.rows = res.data.data
                this.datatable.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            });
        },

        initStatus: function() {
            axios.get('/api/project_status/get_status')
            .then( res => {
                this.status = res.data
            })
        },

        handlerOpenLink: function(link) {
            window.open(link);
        },

        handlerOpenTracking: function(revnr) {
            window.open('/production_control_hangar/tracking/'+revnr+'/dashboard');
        },

        initArangedLayout: function() {
            return new Promise((resolve) => {
                axios.post('/api/arranged_layout/get_user_layout', {
                    name: 'LAYOUT_PERFORMANCE'
                })
                .then(res => {
                    if(res.data.length !== FieldPerformance.length) {
                        this.datatable.fields = FieldPerformance;
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
                    name: "LAYOUT_JOBCARD"
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
            this.datatable.fields = FieldPerformance;
        },

        handlerCheckAircraft: function(datarevnr) {
            swal({
                title: 'Edit Aircraft Type',
                text: 'Input Aircraft Type Data',
                content: "input",
                button: {
                    text: "Add",
                    closeModal: true,
                },
            })
            .then(actyp => {
                if(!actyp) throw null;

                if(actyp == "") {
                    toastr.warning("Aircraft type field is required");
                    return false;
                }

                if(/\s/.test(actyp)) {
                    toastr.warning("Aircraft type can't contain any whitespace");
                    return false;
                }

                axios.post('/api/slot_and_capacity/planning_gate/save_aircraft_type', {
                    pg_id: datarevnr,
                    ac_type: actyp
                })
                .then( res => {
                    if(res.data.success=='1'){
                        swal("Success!", res.data.message, "success");
                        this.onRefresh();
                    }
                    else{
                        swal("Failed!", res.data.message, "error");
                    }
                })
            })
            .catch(err => {
                if (err) {
                    swal("request failed!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });

            

        },


        handlerModalImport: function() {
            this.data_import = "";
            document.getElementById("file").value = "";

            $('#modal-import-reservation').modal('show');

        },

        handlerExportforupdate: function() {
            axios.get(`/api/production_control_hangar/export_jcforupdate/${this.$route.params.pg_id}`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    return;
                }

                this.handlerExportupdate(res.data, this.tracks, this.positions, 'JC Bulk Update').then(() => {
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
                XLSX.utils.book_append_sheet(wb, tmp, name)
                XLSX.utils.book_append_sheet(wb, note, 'NOTE')
                XLSX.utils.book_append_sheet(wb, tmp2, 'LIST_STATUS')
                XLSX.utils.book_append_sheet(wb, tmp3, 'LIST_POSITION')
                XLSX.writeFile(wb, `jobcard_update_${this.$route.params.pg_id}.xlsx`)

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

                axios.post('/api/production_control_hangar/import_jc', formData, {
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
                        toastr.warning(res.data.message)
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

       handlerUpdateData: function(revnr, column, elem) {
            if(!this.grant_access) return;
            let elm = "";
            elm = document.getElementById(elem).value;

            axios.post('/api/performance/update_tperformance', {
                revnr: revnr,
                column: column,
                data: elm
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    toastr.info('refreshing data ...');
                    //this.datatable.serverParams.perPage = "";
                    this.datatable.serverParams.searchTerm = "";                   
                    axios.post('/api/performance/get_tperformance', this.datatable.serverParams)
                    .then(res => {                    
                        this.datatable.rows = res.data.data
                        this.datatable.totalRows = res.data.total
                        toastr.remove();
                        toastr.success('data refreshed');
                    })
                    .catch(e => {
                        console.log("Error: "+e);
                        toastr.remove();
                        toastr.error("Undefined error");
                    })    
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

        handlerDeleteItem: function(revnr) {
            swal({
                title: "Delete Item",
                text: "Are you sure that you want to delete this item?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;
                    axios.get('/api/performance/delete/' + revnr)
                    .then(res => {
                        if(res.data.success) {
                            toastr.success(res.data.message);
                            this.initData();
                        }else {
                            toastr.error(res.data.message);
                        }
                        this.loading.isLoading = false;

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
        },

        handlerUpdateCustomerNote: function(aufnr, column, elem) {
            if(!this.cust_access && (!this.grant_access || column!='CUST_REF')) return;
            let elm = "";
            let route = "";
            elm = document.getElementById(elem).value;
            if(this.cust_access){
                route = '/api/production_control_hangar/custupdate_tjobcard';
            }
            else if(this.grant_access){
                route = '/api/production_control_hangar/update_tjobcard';
            }

            axios.post(route, {
                revnr: this.$route.params.pg_id,
                aufnr: aufnr,
                column: column,
                data: elm
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    toastr.info('refreshing data ...');
                    this.datatable.serverParams.perPage = "";
                    this.datatable.serverParams.searchTerm = "";
                    this.datatable.serverParams.revnr = this.$route.params.pg_id;                    
                    axios.post('/api/performance/get_tperformance', this.datatable.serverParams)
                    .then(res => {                    
                        this.datatable.rows = res.data.data
                        this.datatable.totalRows = res.data.total
                        toastr.remove();
                        toastr.success('data refreshed');
                    })
                    .catch(e => {
                        console.log("Error: "+e);
                        toastr.remove();
                        toastr.error("Undefined error");
                    })    
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

        /**
         * Datatable - Server Side
         */
        onRefresh() {
            //this.datatable.serverParams.page
            this.updateParams({page: this.datatable.serverParams.page});
            this.loadItems();
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

                axios.post('/api/performance/get_tperformance', params)
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
                    axios.get('/api/production_control_hangar/sync_jobcard/' + this.$route.params.pg_id)
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
        },

        handlerDate: function(e) {
            $('.vgt-fixed-header th input').attr('type','text');
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
        },

        resetToggle: function(class_elem, btn_id, icon_id, btn_list_class) {

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

        handlerExportJob: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/export_jobcard/${this.$route.params.pg_id}`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'Jobcard Tracking').then(() => {
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
                XLSX.writeFile(wb, `jc_tracking_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },

        handlerModalSingleAdd: function() {
            swal({
                title: 'Add Project to The List',
                text: 'Input by Revision Number',
                content: "input",
                button: {
                    text: "Add",
                    closeModal: true,
                },
            })
            .then(revnr => {
                if (!revnr) throw null;

                axios.post('/api/performance/add_tperformance', {revnr: revnr})
                .then( res => {
                    if(res.data.success=='1'){
                        swal("Success!", res.data.message, "success");
                    }
                    else{
                        swal("Failed!", res.data.message, "error");
                    }
                    this.resetForm();
                })
            })
            .catch(err => {
                if (err) {
                    swal("request failed!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });

        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        handlerSaveSinglJc: function() {
            if(!this.handlerValidation()) return;
            this.form.revnr = this.$route.params.pg_id;

            this.handleButton('btn-single-add', 'load').then(() => {

                axios.post('/api/production_control_hangar/add_tjc', this.form)
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
            //console.log(row);
        },

        permissionHandler: function() {
            this.grant_access = false;
            this.cust_access = false;                  
            if(this.$can('project_performance_edit')) {
                this.grant_access = true;
            }
        },

        handlerModalRevision: function(data_revision, type, revnr) {
            this.modal.revnr = revnr;
            this.modal.data = data_revision ?  data_revision.split(',') : [];
            this.modal.type = type;

            $(`#modal-revision`).modal('show');
            
        }
    }
}
</script>
