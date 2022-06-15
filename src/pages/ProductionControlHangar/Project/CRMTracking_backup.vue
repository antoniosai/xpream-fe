<style scoped>

    ::v-deep  .vgt-left-align {
        white-space: nowrap !important;
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

    ::v-deep .action-handler {
        color: white;
        font-size: 9pt;
        border-radius: 3px;
        padding: 5px 5px 5px 5px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    }

    ::v-deep .action-handler.primary {
        background-color: #026396;
        cursor: pointer;
    }

    ::v-deep .action-handler.success {
        background-color: #13CE66;
        cursor: pointer;
    }

    ::v-deep .action-handler.default {
        background-color: #aeb3b8;
        cursor: unset;
    }
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_dashboard', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.dashboard_summary', params: {pg_id: $route.params.pg_id, type: 'hangar'}})" class="tab-link" data-tab="dashboard">Dashboard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_highlight')" v-on:click="$router.push({name: 'pc_hangar.tracking.highlight', params: {pg_id: $route.params.pg_id, type: 'hangar'}})" class="tab-link" data-tab="highlight">Performance</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.jobcard', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="jobcard">Jobcard</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_jc_mdr', 'pc_hangar_tracking_system_edit_jc_mdr', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.mdr', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mdr">MDR</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mrm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">MRM</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_csp', 'pc_hangar_tracking_system_edit_csp', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" v-on:click="$router.push({name: 'pc_hangar.tracking.csp', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="csp">CSP</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_crm', 'pc_hangar_tracking_system_edit_crm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link active" data-tab="crm">CRM</li>
            </ul>
            <div class="card tab-content active" id="crm" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">CRM Tracking</h3>
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
                                <div>
                                    <vue-good-table
                                        ref="table-job-tracking"
                                        :columns="datatable.fields"
                                        :rows="datatable.rows"  
                                        styleClass="vgt-table bordered striped"
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
                                                    <div v-on:click="handlerExportCRM()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                        <span class="tooltiptext-x">Export Excel</span>
                                                        <i class="material-icons warning sync_order" >file_download</i>
                                                    </div>
                                                </div>
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button :disabled="!grant_access" v-on:click="handlerModalSingleAdd()" class="button is-danger">
                                                        <i class='material-icons'>
                                                            add_circle
                                                        </i>
                                                        Single Add
                                                    </button>
                                                </div>
                                                <!--<div class="toolbar-item" style="margin-right: -10px;">
                                                     <button :disabled="!grant_access" v-on:click="handlerModalImport()" class="button is-success">
                                                        <i class='material-icons'>
                                                            insert_drive_file
                                                        </i>
                                                        Import from Excel
                                                    </button>
                                                </div>-->
                                                <div class="toolbar-item" style="padding-right: 5px;">
                                                    <multiselect 
                                                        placeholder="Visibility Column" 
                                                        :options="columns" 
                                                        :searchable="true" 
                                                        :reset-after="false" 
                                                        :custom-label="custLabel"
                                                        :select-label="''"
                                                        @select="handlerHideColumn"
                                                    ></multiselect>
                                                </div>
                                            </div>
                                        </div>

                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'PN_ON'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'pnon-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'PN_ON','pnon-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 'PN_OFF'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'pnoff-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'PN_OFF','pnoff-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 'SN_ON'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'snon-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SN_ON','snon-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 'SN_OFF'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'snoff-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SN_OFF','snoff-' +props.index)">
                                            </span>                                           
                                            <span v-else-if="props.column.field == 'INOUT'">
                                                <select v-model="datatable.rows[props.index].INOUT" :disabled="!grant_access" :id="'inout-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'INOUT', 'inout-' +props.index)">
                                                    <option value=""></option>
                                                    <option value="IN">IN</option>
                                                    <option value="OUT">OUT</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 'DATEIN'">
                                                <input :disabled="!grant_access" :value="props.formattedRow[props.column.field] == null ? '' :  props.formattedRow[props.column.field].substring(0, 10)" type="date" :id="'datein-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATEIN', 'datein-' +props.index)">
                                                
                                            </span>                                            
                                            <span v-else-if="props.column.field == 'AUFNR'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'aufnr-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'AUFNR','aufnr-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 'REASON'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'reason-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'REASON','reason-' +props.index)">
                                            </span>                                            
                                            <span v-else-if="props.column.field == 'QTY'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'qty-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTY','qty-' +props.index)" type="number">
                                            </span>
                                            <span v-else-if="props.column.field == 'POSITION'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'position-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'POSITION','position-' +props.index)">
                                            </span>                                                                      <span v-else-if="props.column.field == 'REMARK'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'remark-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'REMARK','remark-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 'DESC'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'desc-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DESC','desc-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 'SEQ'">
                                                <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'seq-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SEQ','seq-' +props.index)">
                                            </span>                                                                                                    
                                            <span v-else-if="props.column.field == 'DN'">
                                                <div class="is-row">
                                                    <div class="is-col is-70">
                                                        <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'dn-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DN','dn-' +props.index)">
                                                    </div>
                                                    <div class="is-col is-30" v-if="props.formattedRow[props.column.field] !== null">
                                                        <span class="button is-small is-primary" style="height:20px;" v-if="props.formattedRow[props.column.field].startsWith('http')" v-on:click="handlerOpenLink(props.formattedRow[props.column.field])">
                                                        Open
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'TAG'">
                                                <div class="is-row">
                                                    <div class="is-col is-70">
                                                        <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'tag-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'TAG','tag-' +props.index)">
                                                    </div>
                                                    <div class="is-col is-30" v-if="props.formattedRow[props.column.field] !== null">
                                                        <span class="button is-small is-primary" style="height:20px;" v-if="props.formattedRow[props.column.field].startsWith('http')" v-on:click="handlerOpenLink(props.formattedRow[props.column.field])">
                                                        Open
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'SO'">
                                                <div class="is-row">
                                                    <div class="is-col is-70">
                                                        <input :disabled="!grant_access" style="min-width: 200px;" :value="props.formattedRow[props.column.field]" :id="'so-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SO','so-' +props.index)">
                                                    </div>
                                                    <div class="is-col is-30" v-if="props.formattedRow[props.column.field] !== null">
                                                        <span class="button is-small is-primary" style="height:20px;" v-if="props.formattedRow[props.column.field].startsWith('http')" v-on:click="handlerOpenLink(props.formattedRow[props.column.field])">
                                                        Open
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'CUST_RMK'">
                                                <span v-if="cust_access == true">
                                                    <input :disabled="!cust_access" :value="props.formattedRow[props.column.field]" :id="'job-track-custrmk-' +props.index" v-on:change="handlerUpdateCustomerNote(props.formattedRow['ID'], 'CUST_RMK', 'job-track-custrmk-' +props.index)">
                                                </span>
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>                                                                                       
                                            <span v-else-if="props.column.field == 'action'">
                                                <span v-if="props.formattedRow['is_sap'] == null">
                                                    <div class="action tooltip-x" style="text-align: center; width: 100%;">
                                                        <span class="tooltiptext-x">Delete Item</span>
                                                        <i v-if="!grant_access" style="font-size: 10pt; font-weight: bold;" class="material-icons default">delete</i>
                                                        <i v-else v-on:click="handlerDeleteItem(props.formattedRow['ID'])" style="font-size: 10pt; font-weight: bold;" class="material-icons danger">delete</i>
                                                    </div>
                                                </span>
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
         <!-- modal import -->
        <div class="modal-box" id="modal-import-crm" data-keyboard="false" data-backdrop="static">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-import-crm')"></span>
                    <div class="modal-header">
                        <h2 class="title">Import CRM</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Import data <span class="is-req">*</span>
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-100">
                                <input ref="file" id="file" style="all: unset" type="file"  v-on:change="onChangeFileUpload()"> 
                                <div class="is-desc">Required .xlsx file</div>
                            </div>
                            <div class="form-item is-col is-100">
                                <i style="font-size: 11pt;" class='material-icons'>
                                    attach_file
                                </i>
                                <a href="/export/template_crm.xlsx">Download Template</a>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-import-crm')">Close</button>
                        <button v-on:click="handlerImport()" class="button is-success" type="submit" id="btn-import-crm"> Save </button>

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
                        <h2 class="title">Add Single CRM</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Input data
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-20">
                                <input v-model="form.desc" value="" type="text"> 
                                <div class="is-desc">Description</div>
                            </div>                        
                            <div class="form-item is-col is-20">
                                <input v-model="form.pn_on" value="" type="text"> 
                                <div class="is-desc">PN ON</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.sn_on" value="" type="text"> 
                                <div class="is-desc">SN ON</div>
                            </div>                                             
                            <div class="form-item is-col is-20">
                                <input v-model="form.pn_off" value="" type="text"> 
                                <div class="is-desc">PN OFF</div>
                            </div>                       
                            <div class="form-item is-col is-20">
                                <input v-model="form.sn_off" value="" type="text"> 
                                <div class="is-desc">SN OFF</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.position" value="" type="text"> 
                                <div class="is-desc">Position</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.aufnr" value="" type="number"> 
                                <div class="is-desc">Order No</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.tag" value="" type="text"> 
                                <div class="is-desc">Tag</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.dn" value="" type="text"> 
                                <div class="is-desc">DN</div>
                            </div>                                                                                       <div class="form-item is-col is-20">
                                <input v-model="form.so" value="" type="text"> 
                                <div class="is-desc">SO</div>
                            </div>                                                 
                            <div class="form-item is-col is-20">
                                <select v-model="form.inout">
                                    <option value="">Option</option>
                                    <option value="IN">IN</option>
                                    <option value="OUT">OUT</option>
                                </select>
                                <div class="is-desc">In / Out</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.qty" value="" type="number"> 
                                <div class="is-desc">Qty</div>
                            </div>                            
                            <div class="form-item is-col is-30">
                                <input v-model="form.reason" value="" type="text"> 
                                <div class="is-desc">Reason Removal</div>
                            </div>
                            <div class="form-item is-col is-30">
                                <input v-model="form.remark" value="" type="text"> 
                                <div class="is-desc">Remark</div>
                            </div>                            
                        </div>

                        <div class="is-row">
                            <div class="form-item is-col is-20">
                                <input v-model="form.date" value="" type="date"> 
                                <div class="is-desc">Date</div>
                            </div>                            
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-single-add')">Close</button>
                        <button v-on:click="handlerSaveSingleCRM()" class="button is-success" type="submit" id="btn-single-add"> Save </button>

                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- /modal single add -->
        
    </div>
</template>

<script>

//vue-good
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import 'vue-loading-overlay/dist/vue-loading.css';
import FieldCRM from './datatable/FieldCRM';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import XLSX from 'xlsx';

export default {

    data: () => ({
        hasAccess: false,
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },

        datatable: {
            fields: FieldCRM,
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
        data_import: {
            file: ""
        },

        stats: [],
        acreginfo: "",
        form: {
            revnr: "",
            desc: "",
            pn_on: "",
            pn_off: "",
            sn_on: "",
            sn_off: "",
            position: "",
            inout: "",
            qty: "",
            date: "",
            remark: "",
            reason: "",
            dn: "",
            tag: "",
            so: "",
            aufnr: "",
            qty: "",
        },
        columns: [
            {
                id: 12,
                label: 'All Columns',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 0,
                label: 'Part Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 1,
                label: 'Serial Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 2,
                label: 'Order Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 3,
                label: 'Reason Removal',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 4,
                label: 'In/Out',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 5,
                label: 'Location',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 6,
                label: 'Date',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 7,
                label: 'DN',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 8,
                label: 'Removal Tag',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 9,
                label: 'SO',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 10,
                label: 'Remark',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 11,
                label: 'Action',
                status: 'HIDE',
                hidden: false,
            },
             {
                id: 12,
                label: 'Qty',
                status: 'HIDE',
                hidden: false,
            },           
        ],

        form_link: {
            id: "",
            link: "",
            column: ""
        },

        grant_access: false,
        cust_access: false,

    }),

    components: {
        Loading, 
        VueGoodTable,
        'multiselect': Multiselect,
    },

    mounted() {
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if(!res) {
                this.$router.push({name: 'access_denied'});
            } else {
                if(
                    !this.$bulkCan(
                        'pc_hangar_tracking_system_view_crm', 
                        'pc_hangar_tracking_system_edit_crm', 
                        'pc_hangar_tracking_system_edit', 
                        'pc_hangar_tracking_system_view'
                    )
                ) {
                    this.$router.push({name: 'access_denied'});
                }else {
                    this.hasAccess = true;
                    this.permissionHandler();
                    this.initData();
                }
            }
        });
    },

    methods: {

        initData:  function() {
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/crm/get_tcrm', this.datatable.serverParams)
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
            })
        },

        /**
         * Datatable - Server Side
         */
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
            });
            
        },

        handleDatatableChange: function(params) {
            this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {

                axios.post('/api/production_control_hangar/crm/get_tcrm', params)
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
                title: "Synchronize Project",
                text: "Are you sure that you want to sync this project?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((value) => {
                if (value) {
                    this.loading.isLoading = true;
                    axios.get('/api/production_control_hangar/crm/sync_crm/' + this.$route.params.pg_id)
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

        handlerModalImport: function() {
            this.data_import.file = "";
            document.getElementById("file").value = "";

            $('#modal-import-crm').modal('show');

        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        onChangeFileUpload: function(){
            if(document.getElementById("file").files.length != 0 ){
                this.data_import.file = this.$refs.file.files[0];
            }
        },

        handlerImport: function() {
            if(!this.validate()) return;

            this.handleButton('btn-import-crm', 'load').then(() => {
                let formData = new FormData();
                formData.append('revnr', this.$route.params.pg_id);
                formData.append('file', this.data_import.file);

                axios.post('/api/production_control_hangar/crm/import_crm', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-import-crm');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-import-crm', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-import-crm', 'stop');

                })
            })
        },


        validate: function() {
            if(this.data_import.file == "") {
                toastr.warning("File import can't be empty");
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

        handlerUpdateData: function(id, column, elem) {
            if(!this.grant_access) return;
            this.loading.isLoading = true;
            let elm = document.getElementById(elem).value;

            axios.post('/api/production_control_hangar/crm/update_tcrm', {
                id: id,
                column: column,
                data: elm,
            })
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
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;

            }) 
        },

        handlerUpdateCustomerNote: function(id, column, elem) {
            if(!this.cust_access) return;
            let elm = "";
            let route = "";
            elm = document.getElementById(elem).value;
            if(this.cust_access){
                route = '/api/production_control_hangar/crm/custupdate_tcrm';
            }
            axios.post(route, {
                revnr: this.$route.params.pg_id,
                id: id,
                column: column,
                data: elm
            })
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
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;

            })
        },

        handlerModalSingleAdd: function() {
            var now = new Date();
            var todayhour   = now.getHours();
            var todayminute = now.getMinutes();
            var todaysecond = now.getSeconds();
            var todaydate = now.getDate();
            var todaymonth = now.getMonth()+1;
            var todayyear = now.getFullYear();
            if (todaydate < 10) { todaydate = "0" + todaydate; }
            if (todaymonth < 10) { todaymonth = "0" + todaymonth; }          
            this.form.revnr = this.$route.params.pg_id;
            this.form.pn_on = "";
            this.form.pn_off = "";
            this.form.sn_on = "";
            this.form.sn_off = "";
            this.form.reason = "";
            this.form.inout = "";
            this.form.date = todayyear+'-'+todaymonth+'-'+todaydate;
            this.form.datetime = "";
            this.form.dn = "";
            this.form.tag ="";
            this.form.so = "";
            this.form.remark = "";
            this.form.qty = "";
            this.form.position = "";
            this.form.desc = "";
            this.form.so = "";
            this.form.aufnr = "";


            $('#modal-single-add').modal('show');

        },

        handlerSaveSingleCRM: function() {
            if(!this.validateAddCRM()) return;

            if(this.form.date != "") {
                this.form.datetime = this.form.date;
            }

             this.handleButton('btn-single-add', 'load').then(() => {

                axios.post('/api/production_control_hangar/crm/add_tcrm', this.form)
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
                    this.handleButton('btn-single-add', 'stop');

                })
            })
        },

        validateAddCRM: function() {
            if(this.form.aufnr === ""){
                toastr.warning("Order number field can't be empty");
                return false;
            }

            return true;
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

        handlerExportCRM: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/crm/export_crm/${this.$route.params.pg_id}`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'CRM Tracking').then(() => {
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
                XLSX.writeFile(wb, `${this.acreginfo}_CRM_TRACKING_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },

        handlerUpdateDataDate: function(id, index, type) {
            let elem_date = document.getElementById('crm-track-date-'+index).value;
            let elem_time = document.getElementById('crm-track-time-'+index).value;
            let datetime = "";

            if(type == "date") {
                if(elem_time == "") return;
            }else if(type == "time") {
                if(elem_date == "") return;
            }

            datetime = elem_date + " " + elem_time;

            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/crm/update_tcrm', {
                id: id,
                column: "t_timestamp",
                data: datetime,
            })
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
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;

            })   
        },

        handlerOpenLink: function(link) {
            window.open(link);
        },

        handlerOpenModalLink: function(id, column, link) {
            this.form_link.id = id;
            this.form_link.column = column;
            this.form_link.link = link;

            if(this.form_link.column == 't_dn') {
                document.getElementById('title-modal-link').innerHTML = 'DN';
            }else if(this.form_link.column == 't_remove') {
                document.getElementById('title-modal-link').innerHTML = 'Removal Tag';
            }else if(this.form_link.column == 't_so') {
                document.getElementById('title-modal-link').innerHTML = 'SO';
            }

            $("#modal-edit-link").modal('show');
        },

        handlerUpdateLink: function() {
            // if(!this.validateLink()) return;

            this.handleButton('btn-update-link', 'load').then(() => {

                axios.post('/api/production_control_hangar/crm/update_tcrm', {
                    id: this.form_link.id,
                    column: this.form_link.column,
                    data: this.form_link.link,
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-edit-link');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-update-link', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-update-link', 'stop');
                    toastr.error("Failed update item");

                })
            })
        },

        validateLink: function() {
            if(this.form_link.link == "" || this.form_link.link == null) {
                toastr.warning("Link field can't be empty")
                return false;
            }

            return true;
        },

        handlerDeleteItem: function(id) {
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
                    axios.get('/api/production_control_hangar/crm/delete/' + id)
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

        permissionHandler: function() {
            this.grant_access = false;
            this.cust_access = false; 

            this.$isReleased(this.$route.params.pg_id).then(res => {
                if(res) { 
                    if(this.$bulkCan('pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_edit_crm')) {
                        this.grant_access = true;
                    }
                    if(this.$can('pc_hangar_tracking_system_customer_edit')) {
                        this.cust_access = true;
                    }     
                    
                    axios.get('/api/management/job_mdr_track/linerev/'+this.$route.params.pg_id)
                    .then(res => {
                        this.acreginfo = res.data.info.ac_reg;
                        if(res.data.info.access == 'failed'){
                            this.grant_access = false;
                        }
                    })
                }
            })
        },

    }
}
</script>

