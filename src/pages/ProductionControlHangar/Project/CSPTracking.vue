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
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mcms', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">ZMCMS<span class="status-handler success" style="font-size:11px;margin-left:6px;">beta</span></li> -->
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li> -->
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_csp', 'pc_hangar_tracking_system_edit_csp', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view', 'pc_hangar_tracking_system_customer_edit')" class="tab-link active" data-tab="csp">CSP</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_crm', 'pc_hangar_tracking_system_edit_crm')" v-on:click="$router.push({name: 'pc_hangar.tracking.crm', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="csp">CRM</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_project_charter')" v-on:click="$router.push({name: 'pc_hangar.tracking.project_charter', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="project-charter">Project Team & Charter</li>
                <li v-if="$bulkCan('pc_hangar_tracking_system_view_gantt_chart')" v-on:click="$router.push({name: 'pc_hangar.tracking.gantt_chart', params:{pd_id:$route.params.pg_id}})" class="tab-link" data-tab="gantt-chart">Gantt Chart</li>
                <li v-if=" $bulkCan('pc_hangar_tracking_system_discuss') " v-on:click=" $router.push({ name: 'pc_hangar.tracking.discuss', params: { pd_id: $route.params.pg_id } }) " data-tab="discuss"  class="tab-link" > Discuss </li>
            </ul>
            <div class="card tab-content active" id="csp" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">CSP Tracking</h3>
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
                                        :line-numbers="true"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill and enter to search',
                                            
                                        }"
                                        :select-options="{ 
                                            enabled: false,
                                            selectOnCheckboxOnly: true
                                        }"
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
                                                    <div v-on:click="handlerExportCSP()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
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
                                                 <div class="toolbar-item" style="margin-right: -10px;">
                                                     <button :disabled="!grant_access" v-on:click="handlerModalImport()" class="button is-success">
                                                        <i class='material-icons'>
                                                            insert_drive_file
                                                        </i>
                                                        Import from Excel
                                                    </button>
                                                </div>
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
                                            <span v-if="props.column.field == 'PART_NUMBER'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]"
                                                    :disabled="!grant_access" style="min-width: 200px;" 
                                                    :id="'csp-track-part-number-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'PART_NUMBER','csp-track-part-number-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'SERIAL_NUMBER'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" style="min-width: 200px;" 
                                                    :id="'csp-track-serial-number-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'SERIAL_NUMBER','csp-track-serial-number-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'REMARKS'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    style="min-width: 300px;" 
                                                    :id="'csp-track-remark-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'REMARKS','csp-track-remark-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'DESCRIPTION'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    style="min-width: 300px;" 
                                                    :id="'csp-track-description-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DESCRIPTION','csp-track-description-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'QTY'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    type="number" style="min-width: 50px;" 
                                                    :id="'csp-track-qty-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'QTY','csp-track-qty-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'NO_AWB'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    style="min-width: 150px;" 
                                                    :id="'csp-track-awb-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'NO_AWB','csp-track-awb-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'NO_INB'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    style="min-width: 130px;" 
                                                    :id="'csp-track-no-inb-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'NO_INB','csp-track-no-inb-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'DATE_ISSUE'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    type="date" 
                                                    :id="'csp-track-date-issue-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATE_ISSUE','csp-track-date-issue-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'NDSP'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    style="min-width: 130px;" 
                                                    :id="'csp-track-ndsp-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'NDSP','csp-track-ndsp-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'DATEIN'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    type="date" 
                                                    :id="'csp-track-datein-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DATEIN','csp-track-datein-' +props.index)"
                                                >
                                            </span>
                                            <span v-else-if="props.column.field == 'REF_NO_ORDER'">
                                                <input 
                                                    v-model="props.formattedRow[props.column.field]" 
                                                    :disabled="!grant_access" 
                                                    style="min-width: 130px;" 
                                                    :id="'csp-track-ref-no-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['ID'], 'REF_NO_ORDER','csp-track-ref-no-' +props.index)"
                                                >
                                            </span>

                                            <span v-else-if="props.column.field == 'STATUS'">
                                                <select 
                                                    v-model="props.formattedRow[props.column.field]"
                                                    :disabled="!grant_access" 
                                                    v-bind:class="handlerClassStatus(props.formattedRow[props.column.field])" 
                                                    :id="'csp-track-status-' +props.index" 
                                                    v-on:change="handlerUpdateData(
                                                    props.formattedRow['ID'], 
                                                    'STATUS', 
                                                    'csp-track-status-' +props.index)"
                                                    style="min-width: 180px; color: white; font-size: unset;  padding: 0px 10px 0px 10px  !important;"
                                                >
                                                    <option value="">Select Option</option>
                                                    <option  v-for="stat in stats" :key="stat.ID" :value="stat.STAT_NAME">{{stat.STAT_NAME}}</option>
                                                </select>
                                            </span>

                                            <span v-else-if="props.column.field == 'CUST_RMK'">
                                                <span v-if="cust_access == true">
                                                    <input 
                                                        v-model="props.formattedRow[props.column.field]" 
                                                        :disabled="!cust_access" 
                                                        :id="'job-track-custrmk-' +props.index" 
                                                        v-on:change="handlerUpdateCustomerNote(props.formattedRow['ID'], 'CUST_RMK', 'job-track-custrmk-' +props.index)"
                                                    >
                                                </span>
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
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
         <!-- modal import -->
        <div class="modal-box" id="modal-import-csp" data-keyboard="false" data-backdrop="static">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-import-csp')"></span>
                    <div class="modal-header">
                        <h2 class="title">Import CSP</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Import data <span class="is-req">*</span>
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-50">
                                <input id="frm-no-po-inb" v-model="data_import.no_po_inb" value="" type="text"> 
                                <div class="is-desc">NO PO INB</div>
                            </div> 
                            <div class="form-item is-col is-50">
                                <input id="frm-no-po-outb" v-model="data_import.no_po_outb" value="" type="text"> 
                                <div class="is-desc">NO PO OUTB</div>
                            </div>
                            <div class="form-item is-col is-100">
                                <input ref="file" id="file" style="all: unset" type="file"  v-on:change="onChangeFileUpload()"> 
                                <div class="is-desc">Required .xlsx file</div>
                            </div>
                            <div class="form-item is-col is-100">
                                <i style="font-size: 11pt;" class='material-icons'>
                                    attach_file
                                </i>
                                <a href="/export/template_csp.xlsx">Download Template</a>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-import-csp')">Close</button>
                        <button v-on:click="handlerImport()" class="button is-success" type="submit" id="btn-import-csp"> Save </button>

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
                        <h2 class="title">Add Single CSP</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Input data <span class="is-req">*</span>
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-40">
                                <input id="frm-add-no-po-inb" v-model="form.no_po_inb" value="" type="text"> 
                                <div class="is-desc">NO PO INB</div>
                            </div> 
                            <div class="form-item is-col is-40">
                                <input id="frm-add-no-po-outb" v-model="form.no_po_outb" value="" type="text"> 
                                <div class="is-desc">NO PO OUTB</div>
                            </div>
                        </div>
                        <div class="is-row">
                            <div class="form-item is-col is-20">
                                <input v-model="form.part_number" value="" type="text"> 
                                <div class="is-desc">Part Number</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input  v-model="form.serial_number" value="" type="text"> 
                                <div class="is-desc">Serial Number</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.no_awb" value="" type="text"> 
                                <div class="is-desc">No AWB</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.no_inbound" value="" type="text"> 
                                <div class="is-desc">No Inbound</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.qty" value="" type="number"> 
                                <div class="is-desc">Qty</div>
                            </div>
                        </div>

                        <div class="is-row">
                            <div class="form-item is-col is-20">
                                <input v-model="form.date_issue" value="" type="date"> 
                                <div class="is-desc">Date Issue</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <select v-model="form.status">
                                    <option value="">Select Option</option>
                                    <option  v-for="stat in stats" :key="stat.ID" :value="stat.STAT_NAME">{{stat.STAT_NAME}}</option>
                                </select>
                                <div class="is-desc">Status</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.ndsp" value="" type="text"> 
                                <div class="is-desc">No DN / SP</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input  v-model="form.datein" value="" type="date"> 
                                <div class="is-desc">Date In</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.ref" value="" type="text"> 
                                <div class="is-desc">Ref No Order</div>
                            </div>
                            
                        </div>
                        <div class="is-row">
                            <div class="form-item is-col is-50">
                                <textarea v-model="form.desc" name="" id="" cols="30" rows="5"></textarea>
                                <div class="is-desc">Description</div>
                            </div>
                            <div class="form-item is-col is-50">
                                <textarea v-model="form.remarks" name="" id="" cols="30" rows="5"></textarea>
                                <div class="is-desc">Remarks</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-single-add')">Close</button>
                        <button v-on:click="handlerSaveSingleCSP()" class="button is-success" type="submit" id="btn-single-add"> Save </button>

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
import FieldCSP from './datatable/FieldCSP';
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
            fields: FieldCSP,
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
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        data_import: {
            no_po_inb: "",
            no_po_outb: "",
            file: ""
        },

        stats: [],
        acreginfo: "",
        form: {
            revnr: "",
            no_po_inb: "",
            no_po_outb: "",
            part_number: "",
            serial_number: "",
            no_awb: "",
            no_inbound: "",
            qty: "",
            date_issue: "",
            status: "",
            ndsp: "",
            datein: "",
            ref: "",
            desc: "",
            remarks: ""
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
                label: 'Description',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 3,
                label: 'QTY',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 4,
                label: 'No AWB',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 5,
                label: 'No Inbound',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 6,
                label: 'Date Issue',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 7,
                label: 'Status',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 8,
                label: 'No DN / SP',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 9,
                label: 'Date In',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 10,
                label: 'Ref No Order',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 11,
                label: 'Remarks',
                status: 'HIDE',
                hidden: false,
            },
        ],

        grant_access: false,
        cust_access: false,

    }),

    components: {
        Loading, 
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
                        'pc_hangar_tracking_system_view_csp', 
                        'pc_hangar_tracking_system_edit_csp', 
                        'pc_hangar_tracking_system_edit', 
                        'pc_hangar_tracking_system_view', 
                        'pc_hangar_tracking_system_customer_edit'
                    )
                ) {
                    this.$router.push({name: 'access_denied'});
                }else {
                    this.hasAccess = true;
                    this.permissionHandler();
                    this.initData();
                    this.initCSPStatus();
                    this.handlerDateDoneJC();
                }
            }
        });


    },

    methods: {
        initData:  function() {
            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/get_tcsp', {
                revnr: this.$route.params.pg_id
            })
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning(`Empty data, please import CSP.`)
                }

                this.datatable.rows = res.data
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            })
        },

        initCSPStatus: function() {
            axios.get('/api/management/csp_status/get_all')
            .then(res => {
                this.stats = res.data;
            })
            .catch(e => {
                console.log("Error: " + e);
            })
        },


        // handlerSyncData: function() {
        //     swal({
        //         title: "Synchronize Project",
        //         text: "Are you sure that you want to sync this project?",
        //         icon: "warning",
        //         buttons: true,
        //         dangerMode: true,
        //     })
        //     .then((value) => {
        //         if (value) {
        //             this.loading.isLoading = true;
        //             axios.get('/api/production_control_hangar/sync_mdr/' + this.$route.params.pg_id)
        //             .then(res => {
        //                 if(res.data.success) {
        //                     toastr.success(res.data.message);
        //                     this.initData();
        //                 }else {
        //                     toastr.error(res.data.message);
        //                 }
        //                 this.loading.isLoading = false;
        //             })
        //             .catch(e => {
        //                 console.log("Error: " +e);
        //                 toastr.error("Undefined error");
        //                 this.loading.isLoading = false;

        //             })
        
        //         } else {
        //             toastr.info("Canceled");
        //             return;
        //         }
        //     });
        // },

        handlerDateDoneJC: function() {
            var el_1 = $('*[placeholder="Filter date issue"]');
            var el_2 = $('*[placeholder="Filter date in"]');
            el_1[0].type = 'date';
            el_2[0].type = 'date';
        },

        handlerDownloadTemplate: function() {
            window.location.href = '/export/template_csp.xlsx';
        },

        handlerModalImport: function() {
            let inb = document.getElementById('frm-no-po-inb');
            let outb = document.getElementById('frm-no-po-outb');

            this.data_import.file = "";
            document.getElementById("file").value = "";
            if(this.datatable.rows.length > 0) {
                this.data_import.no_po_inb = this.datatable.rows[0].NO_PO_INB;
                this.data_import.no_po_outb = this.datatable.rows[0].NO_PO_OUTB;
                inb.disabled = true;
                outb.disabled = true;
            }else {
                this.data_import.no_po_inb = "";
                this.data_import.no_po_outb = "";
                inb.disabled = false;
                outb.disabled = false;
            }

            $('#modal-import-csp').modal('show');

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

            this.handleButton('btn-import-csp', 'load').then(() => {
                let formData = new FormData();
                formData.append('revnr', this.$route.params.pg_id);
                formData.append('no_po_inb', this.data_import.no_po_inb);
                formData.append('no_po_outb', this.data_import.no_po_outb);
                formData.append('file', this.data_import.file);

                axios.post('/api/production_control_hangar/import_csp', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-import-csp');
                        }, 1000)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-import-csp', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-import-csp', 'stop');

                })
            })
        },


        validate: function() {
            if(this.data_import.no_po_inb == "") {
                toastr.warning("Number PO Inbound can't be empty");
                return false;
            }

            if(this.data_import.no_po_outb == "") {
                toastr.warning("Number PO Outbound can't be empty");
                return false;
            }

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
            // this.loading.isLoading = true;
            let elm = document.getElementById(elem).value;
            if(column === "STATUS") {
                document.getElementById(elem).className = this.handlerClassStatus(elm);
            }
            toastr.info("Updating data...");

            axios.post('/api/production_control_hangar/update_tcsp', {
                id: id,
                column: column,
                data: elm,
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                }else {
                    toastr.error(res.data.message);
                    this.initData();
                }
                // this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
                // this.loading.isLoading = false;
            }) 
        },

        handlerUpdateCustomerNote: function(id, column, elem) {
            if(!this.cust_access) return;
            let elm = "";
            let route = "";
            elm = document.getElementById(elem).value;
            if(this.cust_access){
                route = '/api/production_control_hangar/custupdate_tcsp';
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
                }else {
                    toastr.error(res.data.message);
                    this.initData();
                }
                // this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
                // this.loading.isLoading = false;
            })
        }, 

        handlerClassStatus: function(data) {
            let class_name = "";
            if(data === "PRELOAD IN HANGAR") class_name = "status-handler success";
            else if(data === "SHIPMENT / CUSTOM") class_name = "status-handler warning";
            else if(data === "RIC") class_name = "status-handler primary";
            else if(data === "MRIR") class_name = "status-handler danger";
            else class_name = "";

            return class_name;
            
        },

        handlerModalSingleAdd: function() {
            this.form.revnr = this.$route.params.pg_id;
            this.form.part_number = "";
            this.form.serial_number = "";
            this.form.no_awb = "";
            this.form.no_inbound = "";
            this.form.qty = "";
            this.form.date_issue = "";
            this.form.status = "";
            this.form.ndsp = "";
            this.form.datein = "";
            this.form.ref = "";
            this.form.desc = "";
            this.form.remarks = "";

            let inb = document.getElementById('frm-add-no-po-inb');
            let outb = document.getElementById('frm-add-no-po-outb');

            if(this.datatable.rows.length > 0) {
                this.form.no_po_inb = this.datatable.rows[0].NO_PO_INB;
                this.form.no_po_outb = this.datatable.rows[0].NO_PO_OUTB;
                inb.disabled = true;
                outb.disabled = true;
            }else {
                this.form.no_po_inb = "";
                this.form.no_po_outb = "";
                inb.disabled = false;
                outb.disabled = false;
            }

            $('#modal-single-add').modal('show');

        },

        handlerSaveSingleCSP: function() {
            if(!this.validateAddCSP()) return;

             this.handleButton('btn-single-add', 'load').then(() => {

                axios.post('/api/production_control_hangar/add_tcsp', this.form)
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

        validateAddCSP: function() {
            if(this.form.part_number === ""){
                toastr.warning("Part number field can't be empty");
                return false;
            }

            if(this.form.serial_number === ""){
                toastr.warning("Serial number field can't be empty");
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

        handlerExportCSP: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/export_csp/${this.$route.params.pg_id}`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'CSP Tracking').then(() => {
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
                XLSX.writeFile(wb, `${this.acreginfo}_CSP_TRACKING_${this.$route.params.pg_id}.xlsx`)

                resolve();
            })
        },

        permissionHandler: function() {
            this.grant_access = false;
            this.cust_access = false;  
            
            this.$isReleased(this.$route.params.pg_id).then(res => {
                if(res) { 
                    if(this.$bulkCan('pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_edit_csp')) {
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

        }
    }
}
</script>
