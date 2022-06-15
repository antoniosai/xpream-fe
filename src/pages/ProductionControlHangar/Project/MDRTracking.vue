<style scoped>
.da-center {
    display: flex;
    align-items: center;
}
.taskreview:hover {
    color: blue;
}

.matcard {
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

::v-deep .crowdone {
    background-color: #c4f8c4;
}

/* ::v-deep .crowwtcon{ */
/*background-color: #EBF8C4;*/
/* } */

::v-deep .crowwteco {
    background-color: #afd9f1;
}

::v-deep .line-numbers {
    min-width: 40px !important;
    max-width: 40px !important;
    height: 50px;
}

::v-deep .vgt-checkbox-col {
    min-width: 30px !important;
    max-width: 30px !important;
    height: 50px;
}

::v-deep .cstatus {
    min-width: 200px !important;
    max-width: 200px !important;
}

::v-deep .csysstat {
    min-width: 100px !important;
    max-width: 100px !important;
}

::v-deep .cmhrsconf {
    min-width: 50px !important;
    max-width: 50px !important;
}

::v-deep .cmatcons {
    min-width: 50px !important;
    max-width: 50px !important;
}

::v-deep .cmrmstat {
    min-width: 100px !important;
    max-width: 100px !important;
}

::v-deep .cseq {
    min-width: 60px !important;
    max-width: 60px !important;
}

::v-deep .corig {
    min-width: 85px !important;
    max-width: 85px !important;
}

::v-deep .caufnr {
    min-width: 85px !important;
    max-width: 85px !important;
}

::v-deep .cdesc {
    min-width: 400px !important;
    max-width: 400px !important;
    white-space: nowrap;
    overflow: auto;
}

::v-deep .cissued {
    min-width: 185px !important;
    max-width: 185px !important;
}

::v-deep .czone {
    min-width: 180px !important;
    max-width: 180px !important;
}

::v-deep .cskill {
    min-width: 200px !important;
    max-width: 200px !important;
    white-space: nowrap;
    overflow: auto;
}

::v-deep .cpmhrs {
    min-width: 60px !important;
    max-width: 60px !important;
}

::v-deep .cactmhrs {
    min-width: 60px !important;
    max-width: 60px !important;
}

::v-deep .cday {
    min-width: 288px !important;
    max-width: auto !important;
}

::v-deep .ccustapp {
    min-width: 100px !important;
    max-width: 100px !important;
}

::v-deep .ctrackstat {
    min-width: 200px !important;
    max-width: 200px !important;
}

::v-deep .ctrackstatshop {
    min-width: 200px !important;
    max-width: 200px !important;
}

::v-deep .cdatedone {
    min-width: 185px !important;
    max-width: 185px !important;
}

::v-deep .crevpos {
    min-width: 180px !important;
    max-width: 180px !important;
}

::v-deep .cdatedonep {
    min-width: 185px !important;
    max-width: 185px !important;
}

::v-deep .cdfpstat {
    min-width: 100px !important;
    max-width: 100px !important;
}

::v-deep .cdfpfinding {
    min-width: 180px !important;
    max-width: 180px !important;
    white-space: nowrap;
    overflow: auto;
}

::v-deep .crmk {
    min-width: 300px !important;
    max-width: 300px !important;
    white-space: nowrap;
    overflow: auto;
}

::v-deep .csrmk {
    min-width: 300px !important;
    max-width: 300px !important;
    white-space: nowrap;
    overflow: auto;
}

::v-deep .custrmk {
    min-width: 300px !important;
    max-width: 300px !important;
    white-space: nowrap;
    overflow: auto;
}

::v-deep .custref {
    min-width: 150px !important;
    max-width: 150px !important;
    white-space: nowrap;
    overflow: auto;
}

::v-deep .vgt-left-align {
    white-space: normal !important;
}

::v-deep .table.vgt-table {
    font-size: 9px !important;
    border-collapse: collapse !important;
    background-color: #fff !important;
    width: 100% !important;
    max-width: 100% !important;
    table-layout: auto !important;
    border: 1px solid #dcdfe6 !important;
}

::v-deep .vgt-table.bordered td,
.vgt-table.bordered th {
    border: 1px solid #dcdfe6 !important;
    height: 20px !important;
    font-size: 9pt !important;
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

::v-deep .vgt-wrap__footer .footer__navigation__page-btn.disabled,
.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
    box-shadow: 0 0 black !important;
    font-size: 9pt !important;
}

::v-deep .vgt-wrap__footer .footer__navigation__info,
.vgt-wrap__footer .footer__navigation__page-info {
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

::v-deep .vgt-input,
.vgt-select {
    font-size: 9pt !important;
}

::v-deep .footer__row-count__label {
    margin-top: -7px !important;
}

::v-deep .footer__navigation {
    margin-top: -2px !important;
}

::v-deep .vgt-wrap__footer .footer__row-count__select {
    margin-top: -5px !important;
    width: 50px !important;
    padding: 0px 15px 0px 5px;
    border: 0px !important;
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
    border: 1px solid #dcdfe6 !important;
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
    color: #13ce66;
}

::v-deep .action > i.primary {
    color: #026396;
}

::v-deep .action > i.success:hover {
    background-color: #13ce66;
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
    background-color: #13ce66;
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
    height: 35px !important;
}

::v-deep .multiselect__select {
    height: 35px !important;
    padding: 10px 8px !important;
}

::v-deep .multiselect__tags {
    font-size: 10px !important;
    min-height: 30px !important;
    padding: 5px 10px 0px 5px !important;
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

::v-deep .v-select .vs__actions .vs__clear {
    background-color: transparent !important;
}

::v-deep input.vs__search {
    position: absolute !important;
    background-image: unset;
    background: transparent;
    top: 3px;
    width: 100%;
    border: none;
    height: auto;
}

::v-deep .v-select .vs__actions .vs__clear {
    background-color: transparent !important;
    fill: #ff0e0e;
    padding: 0;
    background-color: transparent !important;
    height: 100%;
    position: absolute;
    right: 14px;
    width: 30px;
}

::v-deep .v-select .vs__dropdown-toggle {
    background: white !important;
}

::v-deep .v-select .vs__open-indicator {
    fill: #6b6b6b;
    cursor: pointer;
}

::v-deep .v-select .vs__dropdown-toggle {
    height: auto !important;
    min-height: 30px !important;
}

::v-deep .test {
    border: 1px solid;
}

::v-deep .test.one {
    border-color: red;
}

::v-deep .test.two {
    border-color: blue;
}

::v-deep .test.three {
    border-color: green;
}

::v-deep #selected-row-actions .v-select.vs--single.vs--searchable {
    min-width: 250px;
    display: inline-block;
    font-size: 10px;
}

::v-deep #selected-row-actions {
    display: flex;
    align-items: center;
}

::v-deep #selected-row-actions button {
    margin: 0 5px;
}
</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_dashboard',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.dashboard_summary',
                            params: {
                                pg_id: $route.params.pg_id,
                                type: 'hangar'
                            }
                        })
                    "
                    class="tab-link"
                    data-tab="dashboard"
                >
                    Dashboard
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_highlight'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.highlight',
                            params: {
                                pg_id: $route.params.pg_id,
                                type: 'hangar'
                            }
                        })
                    "
                    class="tab-link"
                    data-tab="highlight"
                >
                    Performance
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_jc_mdr',
                            'pc_hangar_tracking_system_edit_jc_mdr',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.jobcard',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="jobcard"
                >
                    Jobcard
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_jc_mdr',
                            'pc_hangar_tracking_system_edit_jc_mdr',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    class="tab-link active"
                    data-tab="mdr"
                >
                    MDR
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_mrm',
                            'pc_hangar_tracking_system_edit_mrm',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.mrm',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="mrm"
                >
                    MRM
                </li>
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_mrm', 'pc_hangar_tracking_system_edit_mrm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" v-on:click="$router.push({name: 'pc_hangar.tracking.mcms', params: {pg_id: $route.params.pg_id}})" class="tab-link" data-tab="mrm">ZMCMS<span class="status-handler success" style="font-size:11px;margin-left:6px;">beta</span></li> -->
                <!-- <li v-if="$bulkCan('pc_hangar_tracking_system_view_prm', 'pc_hangar_tracking_system_edit_prm', 'pc_hangar_tracking_system_edit', 'pc_hangar_tracking_system_view')" class="tab-link" data-tab="prm">PRM</li> -->
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_csp',
                            'pc_hangar_tracking_system_edit_csp',
                            'pc_hangar_tracking_system_edit',
                            'pc_hangar_tracking_system_view',
                            'pc_hangar_tracking_system_customer_edit'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.csp',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="csp"
                >
                    CSP
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_crm',
                            'pc_hangar_tracking_system_edit_crm'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.crm',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="csp"
                >
                    CRM
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_project_charter'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.project_charter',
                            params: { pg_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="project-charter"
                >
                    Project Team & Charter
                </li>
                <li
                    v-if="
                        $bulkCan(
                            'pc_hangar_tracking_system_view_gantt_chart'
                        )
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.gantt_chart',
                            params: { pd_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link"
                    data-tab="gantt-chart"
                >
                    Gantt Chart
                </li>

                <li
                    v-if="
                        $bulkCan('pc_hangar_tracking_system_discuss')
                    "
                    v-on:click="
                        $router.push({
                            name: 'pc_hangar.tracking.discuss',
                            params: { pd_id: $route.params.pg_id }
                        })
                    "
                    class="tab-link" 
                    data-tab="discuss"
                >
                    Discuss
                </li>


            </ul>
            <div
                class="card tab-content active"
                id="mdr"
                style="border-radius: 0px 8px 8px 8px;"
            >
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">MDR Tracking</h3>
                    </div>
                    <div class="option-box ">
                        <div v-if="dfp_access" class="option-item">
                            <button
                                :disabled="!dfp_access"
                                v-on:click="
                                    dfp_access ? handlerModaldfplink() : ''
                                "
                                :class="
                                    dfpfolder == '' || dfpfolder == null
                                        ? 'button is-default'
                                        : 'button is-success'
                                "
                            >
                                <i class="material-icons">
                                    insert_drive_file
                                </i>
                                Set DFP Folder
                            </button>
                        </div>
                        <div class="option-item">
                            <select
                                @change="filterscanneddfp()"
                                v-model="multiselectfilteroption"
                                style="width:100px;"
                            >
                                <option
                                    :disabled="!dfp_url.length > 0"
                                    style="white-space: nowrap"
                                    value=""
                                    >Filter DFP</option
                                >
                                <option
                                    :disabled="!dfp_url.length > 0"
                                    style="white-space: nowrap"
                                    value="scan"
                                    ><b>available scanned files</b></option
                                >
                                <option
                                    :disabled="!dfp_url.length > 0"
                                    style="white-space: nowrap"
                                    value="unscan"
                                    ><b>unavailable scanned files</b></option
                                >
                            </select>
                            <multiselect
                                :close-on-select="false"
                                v-model="datatable.serverParams.filter.order"
                                tag-placeholder="Add this as new tag"
                                placeholder="Multiple Select Order No"
                                :options="options_order"
                                :multiple="true"
                                :taggable="true"
                                label="AUFNR"
                                track-by="AUFNR"
                                @tag="addTag"
                                @open="initfilterOrder"
                                :limit="6"
                                style="min-width: 250px; max-width: 400px; padding-left: 5px; max-height:350px;"
                            >
                            </multiselect>
                            <button
                                class="button is-secondary is-default"
                                style="width:15px;font-size:11px;"
                                v-on:click="clearfilterorder()"
                            >
                                <i class="material-icons" style="margin:0px;"
                                    >close</i
                                ></button
                            >&nbsp;&nbsp;
                            <button v-on:click="loadItems()">
                                <i class="material-icons">filter_list</i>
                                Filter
                            </button>
                        </div>
                        <div class="option-item">
                            <h4>
                                {{ projectinfo }}&nbsp;&nbsp;&nbsp;<button
                                    class="button is-secondary is-success"
                                    style="padding:0px 15px;height:30px;"
                                >
                                    {{ acreginfo }}
                                </button>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div
                        style="box-sizing: border-box; position: relative; min-height: 20px;"
                    >
                        <div>
                            <loading
                                style="margin-top: 50px;"
                                :active.sync="loading.isLoading"
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType"
                            >
                            </loading>
                            <template>
                                <div v-show="renderedFields">
                                    <vue-good-table
                                        max-height="90vh"
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
                                            placeholder:
                                                'Fill and enter to search'
                                        }"
                                        :sort-options="{
                                            enabled: true
                                        }"
                                        :select-options="{
                                            enabled: grant_access
                                                ? true
                                                : dfp_access,
                                            selectOnCheckboxOnly: true
                                        }"
                                        :line-numbers="true"
                                        @on-search="onColumnSearch"
                                        @on-page-change="onPageChange"
                                        @on-sort-change="onSortChange"
                                        @on-column-filter="onColumnFilter"
                                        @on-per-page-change="onPerPageChange"
                                        @on-selected-rows-change="
                                            selectionChanged
                                        "
                                        @on-select-all="selectAll"
                                        @on-row-click="toggleSelectRow"
                                        :totalRows="datatable.totalRows"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'pages',
                                            perPage:
                                                datatable.serverParams.perPage,
                                            position: 'bottom',
                                            perPageDropdown:
                                                datatable.perPageDropDown,
                                            dropdownAllowAll: true,
                                            setCurrentPage:
                                                datatable.serverParams.page,
                                            nextLabel: 'Next',
                                            prevLabel: 'Prev',
                                            rowsPerPageLabel: 'Rows per page',
                                            ofLabel: 'of',
                                            pageLabel: 'page',
                                            allLabel: 'All'
                                        }"
                                    >
                                        <div slot="table-actions">
                                            <div
                                                class="toolbar toolbar-default "
                                            >
                                                <div
                                                    class="toolbar-item toolbar-dropdown"
                                                ></div>
                                                <div
                                                    class="toolbar-item"
                                                    style="margin-right: -8px;"
                                                >
                                                    <div
                                                        v-on:click="
                                                            handlerExportMDR()
                                                        "
                                                        class="single-button synchronize display-flex align-items-center justify-center tooltip-x"
                                                        style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;"
                                                        tabindex="0"
                                                    >
                                                        <span
                                                            class="tooltiptext-x"
                                                            >Export Excel</span
                                                        >
                                                        <i
                                                            class="material-icons warning sync_order"
                                                            >file_download</i
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="toolbar-item"
                                                    style="margin-right: -10px;"
                                                >
                                                    <button
                                                        :disabled="
                                                            !grant_access
                                                        "
                                                        v-on:click="
                                                            handlerModalSingleAdd()
                                                        "
                                                        class="button is-default"
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
                                                            add_circle
                                                        </i>
                                                        Add
                                                    </button>
                                                </div>
                                                <div
                                                    class="toolbar-item"
                                                    style="margin-right: -10px;"
                                                >
                                                    <button
                                                        :disabled="
                                                            !grant_access
                                                        "
                                                        v-on:click="
                                                            grant_access
                                                                ? handlerModalImport()
                                                                : ''
                                                        "
                                                        class="button is-default"
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
                                                            insert_drive_file
                                                        </i>
                                                        Update
                                                    </button>
                                                </div>
                                                <div
                                                    class="toolbar-item"
                                                    style="margin-right: -10px;"
                                                >
                                                    <button
                                                        :disabled="
                                                            datatable.rows < 1
                                                        "
                                                        id="btn-collapse-all"
                                                        v-on:click="
                                                            handlerToggleAll(
                                                                'material-list',
                                                                'btn-collapse-all',
                                                                'icon-collapse-all',
                                                                'btn-material-list'
                                                            )
                                                        "
                                                        class="button is-default"
                                                    >
                                                        <i
                                                            id="icon-collapse-all"
                                                            class="material-icons"
                                                            >visibility</i
                                                        >Material
                                                    </button>
                                                </div>
                                                <div
                                                    class="toolbar-item"
                                                    style="margin-right: -10px;"
                                                >
                                                    <button
                                                        v-on:click="onRefresh"
                                                        class="button"
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
                                                            sync
                                                        </i>
                                                        Refresh
                                                    </button>
                                                </div>
                                                <div
                                                    class="toolbar-item tooltip-x"
                                                    style="margin-right: -10px;"
                                                >
                                                    <button
                                                        :disabled="
                                                            !checklastsync
                                                        "
                                                        v-on:click="
                                                            checklastsync
                                                                ? handlerSyncData()
                                                                : ''
                                                        "
                                                        class="button is-danger"
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
                                                            sync
                                                        </i>
                                                        Sync
                                                    </button>
                                                    <span
                                                        class="tooltiptext-x"
                                                        style="width:200px !important;"
                                                    >
                                                        LAST SYNC<br />
                                                        SAP->CRM :<br />
                                                        {{ lastsynccrm }}<br />
                                                        CRM->XPREAM :<br />
                                                        {{ lastsyncmdr }}
                                                    </span>
                                                </div>
                                                <div
                                                    class="toolbar-item"
                                                    style="margin-right: 10px;"
                                                >
                                                    <button
                                                        v-on:click="
                                                            handlerlayout()
                                                        "
                                                        class="button is-success"
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
                                                            grid_on
                                                        </i>
                                                        Layout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <template
                                            slot="table-row"
                                            slot-scope="props"
                                        >
                                            <span
                                                v-if="
                                                    props.column.field ==
                                                        'MRM_STATUS'
                                                "
                                            >
                                                <span
                                                    v-if="
                                                        props.formattedRow[
                                                            props.column.field
                                                        ] == 'COMPLETE'
                                                    "
                                                >
                                                    <button
                                                        :id="
                                                            'btn-material-list-' +
                                                                props.index
                                                        "
                                                        statetoggle="0"
                                                        class="button is-secondary is-success btn-material-list  "
                                                        v-on:click="
                                                            handlerToggle(
                                                                'btn-material-list-' +
                                                                    props.index,
                                                                'icon-material-list-' +
                                                                    props.index,
                                                                'material-list-' +
                                                                    props.index
                                                            )
                                                        "
                                                        style="width: 100%; height: 20px; line-height: 20px;"
                                                    >
                                                        {{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}
                                                    </button>
                                                </span>
                                                <span
                                                    v-else-if="
                                                        props.formattedRow[
                                                            props.column.field
                                                        ] == 'INCOMPLETE'
                                                    "
                                                >
                                                    <button
                                                        :id="
                                                            'btn-material-list-' +
                                                                props.index
                                                        "
                                                        statetoggle="0"
                                                        class="button is-secondary is-danger btn-material-list"
                                                        v-on:click="
                                                            handlerToggle(
                                                                'btn-material-list-' +
                                                                    props.index,
                                                                'icon-material-list-' +
                                                                    props.index,
                                                                'material-list-' +
                                                                    props.index
                                                            )
                                                        "
                                                        style="width: 100%; height: 20px; line-height: 20px;"
                                                    >
                                                        {{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}
                                                    </button>
                                                </span>
                                                <div
                                                    v-show="
                                                        props.formattedRow[
                                                            'MATERIAL'
                                                        ].length > 0
                                                    "
                                                >
                                                    <div
                                                        :id="
                                                            'material-list-' +
                                                                props.index
                                                        "
                                                        class="material-list"
                                                        style="margin-top: 5px; display: none;"
                                                    >
                                                        <div
                                                            class="card matcard"
                                                        >
                                                            <ul>
                                                                <li
                                                                    v-for="(mat,
                                                                    index) in props
                                                                        .formattedRow[
                                                                        'MATERIAL'
                                                                    ]"
                                                                    :key="index"
                                                                >
                                                                    {{ mat }}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'DESCRIPTION'
                                                "
                                            >
                                                <div
                                                    class="is-row"
                                                    style="margin-bottom: 0px;"
                                                >
                                                    <div class="is-col is-90">
                                                        {{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}
                                                    </div>
                                                    <div class="is-col is-10">
                                                        <i
                                                            v-on:click="
                                                                modaltaskreview(
                                                                    props
                                                                        .formattedRow[
                                                                        'AUFNR'
                                                                    ]
                                                                )
                                                            "
                                                            class="material-icons taskreview"
                                                            style="font-size: 16pt;line-height: 0; padding-top:10px; cursor:pointer;"
                                                            >chat</i
                                                        >
                                                    </div>
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'SKILL'
                                                "
                                            >
                                                <div
                                                    style="margin-top: 6px; text-align: left;"
                                                >
                                                    <span
                                                        v-for="(elem,
                                                        index) in props
                                                            .formattedRow[
                                                            'SKILL'
                                                        ]"
                                                        :key="index"
                                                        v-on:click="
                                                            handlerUpdateData(
                                                                props
                                                                    .formattedRow[
                                                                    'ID'
                                                                ],
                                                                'SKILL_ACTIVE',
                                                                elem,
                                                                index + 1
                                                            )
                                                        "
                                                        :class="
                                                            elem ==
                                                            props.formattedRow[
                                                                'SKILL_ACTIVE'
                                                            ]
                                                                ? 'skill-handler active'
                                                                : 'skill-handler nonactive'
                                                        "
                                                        >{{ elem }}</span
                                                    >
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'ZONE_AREA'
                                                "
                                            >
                                                <select
                                                    v-model="
                                                        datatable.rows[
                                                            props.index
                                                        ].ZONE_AREA_ID
                                                    "
                                                    :disabled="!grant_access"
                                                    :id="
                                                        'mdr-track-zona-area-' +
                                                            props.index
                                                    "
                                                    v-on:change="
                                                        handlerUpdateData(
                                                            props.formattedRow[
                                                                'ID'
                                                            ],
                                                            'ZONE_AREA',
                                                            'mdr-track-zona-area-' +
                                                                props.index
                                                        )
                                                    "
                                                >
                                                    <option value=""
                                                        >Select Option</option
                                                    >
                                                    <option
                                                        v-for="elem in zoneareas"
                                                        :key="elem.AREA_CODE"
                                                        :value="elem.AREA_CODE"
                                                        >{{
                                                            elem.AREA_NAME
                                                        }}</option
                                                    >
                                                </select>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'CUSTOMER_APPROVAL'
                                                "
                                            >
                                                <select
                                                    v-model="
                                                        datatable.rows[
                                                            props.index
                                                        ].CUSTOMER_APPROVAL
                                                    "
                                                    :disabled="!grant_access"
                                                    :id="
                                                        'mdr-track-priority-task-' +
                                                            props.index
                                                    "
                                                    v-on:change="
                                                        handlerUpdateData(
                                                            props.formattedRow[
                                                                'ID'
                                                            ],
                                                            'CUSTOMER_APPROVAL',
                                                            'mdr-track-priority-task-' +
                                                                props.index
                                                        )
                                                    "
                                                >
                                                    <option value=""
                                                        >Select Option</option
                                                    >
                                                    <option value="YES"
                                                        >YES</option
                                                    >
                                                    <option value="NO"
                                                        >NO</option
                                                    >
                                                </select>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'TRACK_STATUS'
                                                "
                                            >
                                                <select
                                                    v-model="
                                                        datatable.rows[
                                                            props.index
                                                        ].TRACK_STATUS_ID
                                                    "
                                                    :disabled="!grant_access"
                                                    :id="
                                                        'mdr-track-' +
                                                            props.index
                                                    "
                                                    v-on:change="
                                                        handlerUpdateData(
                                                            props.formattedRow[
                                                                'ID'
                                                            ],
                                                            'TRACK_STATUS',
                                                            'mdr-track-' +
                                                                props.index
                                                        )
                                                    "
                                                >
                                                    <option value=""
                                                        >Select Option</option
                                                    >
                                                    <option
                                                        v-for="track in tracks"
                                                        :key="track.ID"
                                                        :value="track.ID"
                                                        >{{
                                                            track.TRACK_NAME
                                                        }}</option
                                                    >
                                                </select>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field == 'DAY'
                                                "
                                            >
                                                <!-- <input :disabled="!grant_access" :value="props.formattedRow[props.column.field]" :id="'mdr-track-day-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['ID'], 'DAY', 'mdr-track-day-' +props.index)" type="text"> -->

                                                <v-select
                                                    label="label"
                                                    :options="optionsDay"
                                                    v-model="
                                                        datatable.rows[
                                                            props.index
                                                        ].DAY
                                                    "
                                                    @input="
                                                        onChangeDays(
                                                            datatable.rows[
                                                                props.index
                                                            ].DAY,
                                                            props.row,
                                                            props.index,
                                                            props.formattedRow
                                                        )
                                                    "
                                                ></v-select>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'DATE_DONE'
                                                "
                                            >
                                                <input
                                                    :disabled="!grant_access"
                                                    :value="
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    "
                                                    :id="
                                                        'mdr-track-date-done-' +
                                                            props.index
                                                    "
                                                    v-on:change="
                                                        handlerUpdateData(
                                                            props.formattedRow[
                                                                'ID'
                                                            ],
                                                            'DATE_DONE',
                                                            'mdr-track-date-done-' +
                                                                props.index
                                                        )
                                                    "
                                                    type="date"
                                                />
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'REVIEW_POSITION'
                                                "
                                            >
                                                <select
                                                    v-model="
                                                        datatable.rows[
                                                            props.index
                                                        ].REVIEW_POSITION_ID
                                                    "
                                                    :disabled="!grant_access"
                                                    :id="
                                                        'mdr-track-review-position-' +
                                                            props.index
                                                    "
                                                    v-on:change="
                                                        handlerUpdateData(
                                                            props.formattedRow[
                                                                'ID'
                                                            ],
                                                            'REVIEW_POSITION',
                                                            'mdr-track-review-position-' +
                                                                props.index
                                                        )
                                                    "
                                                >
                                                    <option value=""
                                                        >Select Option</option
                                                    >
                                                    <option
                                                        :disabled="
                                                            position.is_show ==
                                                            2
                                                                ? true
                                                                : false
                                                        "
                                                        v-for="position in positions"
                                                        :key="position.ID"
                                                        :value="position.ID"
                                                        >{{
                                                            position.POSITION_NAME
                                                        }}</option
                                                    >
                                                </select>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'REMARK'
                                                "
                                            >
                                                <input
                                                    :disabled="!grant_access"
                                                    :value="
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    "
                                                    :id="
                                                        'mdr-track-remark-' +
                                                            props.index
                                                    "
                                                    v-on:change="
                                                        handlerUpdateData(
                                                            props.formattedRow[
                                                                'ID'
                                                            ],
                                                            'REMARK',
                                                            'mdr-track-remark-' +
                                                                props.index
                                                        )
                                                    "
                                                />
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'STATUS'
                                                "
                                            >
                                                <div
                                                    style="margin-top: 6px; text-align: center; cursor: pointer;"
                                                    v-on:click="
                                                        handlerModalTimeline(
                                                            props.formattedRow[
                                                                'ID'
                                                            ]
                                                        )
                                                    "
                                                >
                                                    <span
                                                        class="status-handler success"
                                                        v-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'DONE'
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            props.formattedRow[
                                                                'TRACK_STATUS'
                                                            ] === null ||
                                                                props
                                                                    .formattedRow[
                                                                    'TRACK_STATUS'
                                                                ] === ''
                                                        "
                                                        >N/A</span
                                                    >
                                                    <span
                                                        class="status-handler warning"
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'PROGRESS'
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span
                                                        class="status-handler primary"
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'OPEN'
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span
                                                        class="status-handler danger"
                                                        v-else
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'SYSTEM_STATUS'
                                                "
                                            >
                                                <div
                                                    style="margin-top: 6px; text-align: center;"
                                                >
                                                    <span
                                                        class="status-handler success"
                                                        v-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'DONE'
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span
                                                        class="status-handler warning"
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'PROGRESS'
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span
                                                        class="status-handler primary"
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'OPEN'
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === null ||
                                                                props
                                                                    .formattedRow[
                                                                    props.column
                                                                        .field
                                                                ] === ''
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span
                                                        class="status-handler danger"
                                                        v-else
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'DFPSTATUS'
                                                "
                                            >
                                                <div
                                                    style="margin-top: 6px; text-align: center;"
                                                >
                                                    <span
                                                        class="status-handler danger"
                                                        v-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'FINDING'
                                                        "
                                                        >{{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}</span
                                                    >
                                                    <span v-else>{{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}</span>
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'MHRSCONF'
                                                "
                                            >
                                                <div
                                                    style="margin-top: 6px; text-align: center;"
                                                >
                                                    <span
                                                        class="status-handler success"
                                                        v-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'y'
                                                        "
                                                        ><i
                                                            class="material-icons"
                                                            style="font-size: 8pt;line-height: 0;"
                                                            >done</i
                                                        ></span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'n' &&
                                                                props
                                                                    .formattedRow[
                                                                    'STATUS'
                                                                ] === 'DONE'
                                                        "
                                                        class="status-handler danger tooltip-x"
                                                    >
                                                        <span
                                                            class="tooltiptext-x"
                                                            style="width:200px !important;"
                                                        >
                                                            {{
                                                                props
                                                                    .formattedRow[
                                                                    "LONGSYSSTAT"
                                                                ]
                                                            }}
                                                        </span>
                                                        <i
                                                            class="material-icons"
                                                            style="font-size: 8pt;line-height: 0;"
                                                            >close</i
                                                        ></span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'n' &&
                                                                props
                                                                    .formattedRow[
                                                                    'STATUS'
                                                                ] != 'DONE'
                                                        "
                                                        class="status-handler default"
                                                        ><i
                                                            class="material-icons"
                                                            style="font-size: 8pt;line-height: 0;"
                                                            >close</i
                                                        ></span
                                                    >
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'MATCONS'
                                                "
                                            >
                                                <div
                                                    style="margin-top: 6px; text-align: center;"
                                                >
                                                    <span
                                                        class="status-handler success"
                                                        v-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'y'
                                                        "
                                                        ><i
                                                            class="material-icons"
                                                            style="font-size: 8pt;line-height: 0;"
                                                            >done</i
                                                        ></span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'n' &&
                                                                props
                                                                    .formattedRow[
                                                                    'STATUS'
                                                                ] === 'DONE'
                                                        "
                                                        class="status-handler danger"
                                                        ><i
                                                            class="material-icons"
                                                            style="font-size: 8pt;line-height: 0;"
                                                            >close</i
                                                        ></span
                                                    >
                                                    <span
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] === 'n' &&
                                                                props
                                                                    .formattedRow[
                                                                    'STATUS'
                                                                ] != 'DONE'
                                                        "
                                                        class="status-handler default"
                                                        ><i
                                                            class="material-icons"
                                                            style="font-size: 8pt;line-height: 0;"
                                                            >close</i
                                                        ></span
                                                    >
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'CUST_RMK'
                                                "
                                            >
                                                <span
                                                    v-if="cust_access == true"
                                                >
                                                    <input
                                                        :disabled="!cust_access"
                                                        :value="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        "
                                                        :id="
                                                            'mdr-track-custrmk-' +
                                                                props.index
                                                        "
                                                        v-on:change="
                                                            handlerUpdateCustomerNote(
                                                                props
                                                                    .formattedRow[
                                                                    'ID'
                                                                ],
                                                                'CUST_RMK',
                                                                'mdr-track-custrmk-' +
                                                                    props.index
                                                            )
                                                        "
                                                    />
                                                </span>
                                                <span v-else>
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </span>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'CUST_REF'
                                                "
                                            >
                                                <input
                                                    :disabled="
                                                        cust_access ||
                                                        grant_access
                                                            ? false
                                                            : true
                                                    "
                                                    :value="
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    "
                                                    :id="
                                                        'job-track-custrmk-' +
                                                            props.index
                                                    "
                                                    v-on:change="
                                                        handlerUpdateCustomerNote(
                                                            props.formattedRow[
                                                                'ID'
                                                            ],
                                                            'CUST_REF',
                                                            'job-track-custrmk-' +
                                                                props.index
                                                        )
                                                    "
                                                />
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'SHOP_REMARK'
                                                "
                                            >
                                                {{
                                                    props.formattedRow[
                                                        props.column.field
                                                    ]
                                                }}
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'AUFNR'
                                                "
                                            >
                                                <span>
                                                    <a
                                                        :id="
                                                            'dfp-link-button-' +
                                                                props.index
                                                        "
                                                        target="_blank"
                                                    >
                                                        {{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}
                                                    </a>
                                                </span>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'PMHRS'
                                                "
                                            >
                                                <span v-if="is_cust"> </span>
                                                <span v-else>
                                                    <div
                                                        class="flex-middle-default"
                                                    >
                                                        {{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}
                                                    </div>
                                                </span>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'ACTMHRS'
                                                "
                                            >
                                                <span v-if="is_cust"> </span>
                                                <span v-else>
                                                    <div
                                                        class="flex-middle-default"
                                                    >
                                                        {{
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        }}
                                                    </div>
                                                </span>
                                            </span>
                                            <span v-else>
                                                <div
                                                    class="flex-middle-default"
                                                >
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </div>
                                            </span>
                                        </template>
                                        <div
                                            slot="selected-row-actions"
                                            id="selected-row-actions"
                                        >
                                            <button
                                                v-on:click="
                                                    handlerModalPrintSlip()
                                                "
                                                class="button is-secondary is-success"
                                                style="line-height: 0px; padding-right:10px;"
                                            >
                                                <center class="da-center">
                                                    <i class="material-icons"
                                                        >print</i
                                                    >
                                                    Material Slip
                                                </center>
                                            </button>

                                            <v-select
                                                label="label"
                                                :options="optionsDay"
                                                v-model="daysAll"
                                                @input="onChangeDaysAll"
                                                style=""
                                            ></v-select>
                                            <button
                                                class="button is-primary"
                                                type="button"
                                                :disabled="
                                                    daysAll ? false : true
                                                "
                                                @click="onSetDays"
                                            >
                                                Set Days
                                            </button>

                                            <select
                                                v-model="track_status"
                                                :disabled="
                                                    !grant_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                            >
                                                <option value=""
                                                    >Update Jobcard
                                                    Status</option
                                                >
                                                <option
                                                    v-for="track in tracks"
                                                    :key="track.ID"
                                                    :value="track.ID"
                                                    >{{
                                                        track.TRACK_NAME
                                                    }}</option
                                                >
                                            </select>
                                            <button
                                                v-on:click="
                                                    handleUpdateStatus()
                                                "
                                                class="button is-default"
                                                type="button"
                                                id="update-status"
                                                :disabled="
                                                    !grant_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                            >
                                                Set Status
                                            </button>

                                            <select
                                                v-model="update_positions"
                                                :disabled="
                                                    !grant_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                            >
                                                <option value=""
                                                    >Update Positions</option
                                                >
                                                <option
                                                    :disabled="
                                                        position.is_show == 2
                                                            ? true
                                                            : false
                                                    "
                                                    v-for="position in positions"
                                                    :key="position.ID"
                                                    :value="position.ID"
                                                    >{{
                                                        position.POSITION_NAME
                                                    }}</option
                                                >
                                            </select>
                                            <button
                                                v-on:click="
                                                    handleUpdatePosition()
                                                "
                                                class="button is-default"
                                                type="button"
                                                id="update-position"
                                                :disabled="
                                                    !grant_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                            >
                                                Set Position
                                            </button>

                                            <select
                                                v-if="dfp_access"
                                                v-model="update_dfp"
                                                :disabled="
                                                    !dfp_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                            >
                                                <option value=""
                                                    >Update DFP</option
                                                >
                                                <option
                                                    v-for="dfpstat in dfpstats"
                                                    :key="dfpstat"
                                                    :value="dfpstat"
                                                    >{{ dfpstat }}</option
                                                >
                                            </select>
                                            <input
                                                v-if="
                                                    update_dfp != '' &&
                                                        dfp_access
                                                "
                                                v-model="dfpremark"
                                                :disabled="
                                                    !dfp_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                                placeholder="remarks"
                                            />
                                            <button
                                                v-if="dfp_access"
                                                v-on:click="handleUpdateDFP()"
                                                class="button is-default"
                                                type="button"
                                                id="update-dfp"
                                                :disabled="
                                                    !dfp_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                            >
                                                Set DFP
                                            </button>

                                            <span
                                                v-if="
                                                    update_dfp == 'FINDING' &&
                                                        dfp_access
                                                "
                                                :disabled="
                                                    !dfp_access ||
                                                        datatable.selectedRows
                                                            .length < 1
                                                "
                                            >
                                                <!--input type="checkbox" id="jack" value="Jack" v-model="findingcateg">
                                                <label for="jack">Jack</label>
                                                <input type="checkbox" id="john" value="John" v-model="findingcateg">
                                                <label for="john">John</label>
                                                <input type="checkbox" id="mike" value="Mike" v-model="findingcateg">
                                                <label for="mike">Mike</label-->
                                                <multiselect
                                                    :close-on-select="false"
                                                    v-model="findingcateg"
                                                    tag-placeholder=""
                                                    placeholder="Type and enter"
                                                    :options="options_finding"
                                                    :multiple="true"
                                                    :taggable="true"
                                                    @tag="addTagf"
                                                    style="width:100%;"
                                                >
                                                </multiselect>
                                            </span>
                                        </div>
                                    </vue-good-table>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <!-- modal import -->
            <div
                class="modal-box"
                id="modal-import-reservation"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-import-reservation')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Update Data</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Update data <span class="is-req">*</span>
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-100">
                                <input
                                    ref="file"
                                    id="file"
                                    style="all: unset"
                                    type="file"
                                    v-on:change="onChangeFileUpload()"
                                />
                                <div class="is-desc">Required .xlsx file</div>
                            </div>
                            <div class="form-item is-col is-100">
                                <button
                                    class="button is-secondary is-success"
                                    v-on:click="handlerExportforupdate()"
                                >
                                    Download Template
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-import-reservation')"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerImport()"
                            class="button is-success"
                            type="submit"
                            id="btn-import-reservation"
                        >
                            Save
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>

            <!--modal print slip-->
            <div
                class="modal-box"
                id="modal-print-slip"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal" style="width:90%;">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-print-slip')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Goods Issue Slip</h2>
                    </div>
                    <div
                        v-for="(dataplansliporder,
                        index) in dataplanslip.material"
                        :key="index"
                        :id="'printthisslip' + index"
                        class="modal-body"
                        style="position: relative"
                    >
                        <table>
                            <tr>
                                <td width="15%">Revision</td>
                                <td width="25%">
                                    : {{ $route.params.pg_id }}
                                    <!--
                                    : {{ dataplanslip.printdate }} /
                                    {{ user.name }} -->
                                </td>
                                <td width="20%"></td>
                                <td width="15%">Work Order</td>
                                <td width="25%">
                                    : {{ dataplansliporder.AUFNR }}
                                </td>
                            </tr>
                            <tr>
                                <td width="15%">Project Desc</td>
                                <td width="25%">: {{ projectinfo }}</td>
                                <td width="20%"></td>
                                <td width="15%">Order Type</td>
                                <td width="25%">
                                    : {{ dataplanslip.ordertype }}
                                </td>
                            </tr>
                            <tr>
                                <td width="15%">A/C Reg</td>
                                <td width="25%">: {{ acreginfo }}</td>
                                <td width="20%"></td>
                                <td width="15%">Sequence</td>
                                <td width="25%">
                                    : {{ dataplanslip.selectedsequence[index] }}
                                </td>
                            </tr>
                            <tr>
                                <td width="15%">A/C Type</td>
                                <td width="25%">
                                    : {{ actypeinfo }}
                                </td>
                                <td width="20%"></td>
                                <td width="15%">Plant</td>
                                <td width="25%">
                                    : {{ hangarinfo }}
                                </td>
                            </tr>
                            <tr>
                                <td width="15%"></td>
                                <td width="25%">
                                </td>
                                <td width="20%"></td>
                                <td width="15%">S/Loc</td>
                                <td width="25%">
                                    :
                                    {{ sloc }}
                                </td>
                            </tr>
                        </table>

                        <table>
                            <thead>
                                <th>Material</th>
                                <!--th>Alternate</th-->
                                <th>Description</th>
                                <th>Qty</th>
                                <th>UoM</th>
                                <th>Batch No</th>
                                <th>Batch Manufacture</th>
                                <th>Taken By</th>
                                <th>Date Taken</th>
                                <th>Action</th>
                                <!--th>Status</th>
                                <th>Remark</th-->
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(slip,
                                    index2) in dataplansliporder.MRM"
                                    :key="index2"
                                >
                                    <td>{{ slip.MATNR }}</td>
                                    <!--td>{{ slip.ALTERNATEPN }}</td-->
                                    <td>{{ slip.MAKTX }}</td>
                                    <td v-if="slip.BDMNG === null"></td>
                                    <td v-else>
                                        {{ parseFloat(slip.BDMNG).toFixed(2) }}
                                    </td>
                                    <td>{{ slip.MEINS }}</td>
                                    <td>
                                        <input
                                            style="border: none;border-bottom: 2px solid grey;"
                                            placeholder=""
                                            v-model="
                                                dataplanslip.batch[slip.ID]
                                            "
                                        />
                                    </td>
                                    <td>
                                        <input
                                            style="border: none;border-bottom: 2px solid grey;"
                                            placeholder=""
                                            v-model="
                                                dataplanslip.remark[slip.ID]
                                            "
                                        />
                                    </td>
                                    <!--td
                                        v-if="
                                            slip.RECEIVED_BY == '' ||
                                                slip.RECEIVED_BY == null
                                        "
                                    -->
                                    <td>
                                        <input
                                            style="border: none; border-bottom: 2px solid grey;"
                                            v-model="dataplanslip.recby[index]"
                                        />
                                    </td>
                                    <!--td v-else>{{ slip.RECEIVED_BY }}</td-->
                                    <!--td
                                        v-if="
                                            slip.DATEREC == '' ||
                                                slip.DATEREC == null
                                        "
                                    -->
                                    <td>
                                        <input
                                            type="date"
                                            style="border: none; border-bottom: 2px solid grey;"
                                            v-model="
                                                dataplanslip.recdate[index]
                                            "
                                        />
                                    </td>
                                    <!--td v-else>{{ slip.DATEREC }}</td-->
                                    <!--td>{{ slip.MATFULSTAT }}</td>
                                    <td>
                                    </td-->
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <div width="100%" style="text-align:right;">
                            <VueBarcode
                                :value="dataplansliporder.AUFNR"
                                height="50"
                                textPosition="top"
                                :text="'Work Order: ' + dataplansliporder.AUFNR"
                            >
                                Show this if the rendering fails.
                            </VueBarcode>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        *the data that you change/update in the underlined field
                        input here will not be saved, this editable feature is
                        only for replace handwriting for printing purpose
                        <br><br>
                        insert a page-break for each work order
                        <input type="checkbox" v-model="pagebreak">
                        <button
                            v-on:click="slip_printout"
                            class="button is-success"
                        >
                            Print
                        </button>
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-print-slip')"
                        >
                            Close
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>

            <div class="modal-box" data-keyboard="false" data-backdrop="static">
                <div
                    id="outputprintslip"
                    class="modal-body"
                    style="position: relative; font-size: 9px;"
                >
                    <div
                        v-for="(dataplansliporder,
                        index) in dataplanslip.material"
                        :key="index"
                        :id="'printthisslip' + index"
                        class="modal-body detectpagebreak"
                        style="position: relative"
                    >
                        <table width="100%">
                            <tr>
                                <td width="30%">
                                    <img src="/assets/img/logo-black.png" />
                                </td>
                                <td width="40%" style="text-align:center;">
                                    <h3>Goods Issue Slip</h3>
                                </td>
                                <td width="30%"></td>
                            </tr>
                        </table>

                        <table width="100%">
                            <tr>
                                <td width="10%">Revision</td>
                                <td width="55%">
                                    : {{ $route.params.pg_id }}
                                    <!--
                                    : {{ dataplanslip.printdate }} /
                                    {{ user.name }} -->
                                </td>
                                <td width="10%"></td>
                                <td width="10%">Work Order</td>
                                <td width="15%">
                                    : {{ dataplansliporder.AUFNR }}
                                </td>
                            </tr>
                            <tr>
                                <td width="10%">Project Desc</td>
                                <td width="55%">: {{ projectinfo }}</td>
                                <td width="10%"></td>
                                <td width="10%">Order Type</td>
                                <td width="15%">
                                    : {{ dataplanslip.ordertype }}
                                </td>
                            </tr>
                            <tr>
                                <td width="10%">A/C Reg</td>
                                <td width="55%">: {{ acreginfo }}</td>
                                <td width="10%"></td>
                                <td width="10%">Sequence</td>
                                <td width="15%">
                                    : {{ dataplanslip.selectedsequence[index] }}
                                </td>
                            </tr>
                            <tr>
                                <td width="10%">A/C Type</td>
                                <td width="55%">
                                    : {{ actypeinfo }}
                                </td>
                                <td width="10%"></td>
                                <td width="10%">Plant</td>
                                <td width="15%">
                                    : {{ hangarinfo }}
                                </td>
                            </tr>
                            <tr>
                                <td width="10%"></td>
                                <td width="55%">
                                </td>
                                <td width="10%"></td>
                                <td width="10%">S/Loc</td>
                                <td width="15%">
                                    :
                                    {{ sloc }}
                                </td>
                            </tr>
                        </table>

                        <table
                            class="materialitem"
                            style="border-collapse: collapse;"
                            width="100%"
                        >
                            <thead>
                                <th>Material</th>
                                <!--th>Alternate</th-->
                                <th>Description</th>
                                <th>Qty</th>
                                <th>UoM</th>
                                <th>Batch No</th>
                                <th>Batch Manufacture</th>
                                <th>Taken By</th>
                                <th>Date Taken</th>
                                <!--th>Status</th>
                                <th>Remark</th-->
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(slip,
                                    index2) in dataplansliporder.MRM"
                                    :key="index2"
                                >
                                    <td>{{ slip.MATNR }}</td>
                                    <!--td>{{ slip.ALTERNATEPN }}</td-->
                                    <td>{{ slip.MAKTX }}</td>
                                    <td v-if="slip.BDMNG === null"></td>
                                    <td v-else>
                                        {{ parseFloat(slip.BDMNG).toFixed(2) }}
                                    </td>
                                    <td>{{ slip.MEINS }}</td>
                                    <td>
                                        <span
                                            style="border: none; border-bottom: 2px solid grey;"
                                            >{{
                                                dataplanslip.batch[slip.ID]
                                            }}</span
                                        >
                                    </td>
                                    <td>
                                        <span
                                            style="border: none; border-bottom: 2px solid grey;"
                                            >{{
                                                dataplanslip.remark[slip.ID]
                                            }}</span
                                        >
                                    </td>
                                    <!--td
                                        v-if="
                                            slip.RECEIVED_BY == '' ||
                                                slip.RECEIVED_BY == null
                                        "
                                    -->
                                    <td>
                                        <span
                                            style="border: none; border-bottom: 2px solid grey;"
                                            >{{
                                                dataplanslip.recby[index]
                                            }}</span
                                        >
                                    </td>
                                    <!--td v-else>{{ slip.RECEIVED_BY }}</td-->
                                    <!--td
                                        v-if="
                                            slip.DATEREC == '' ||
                                                slip.DATEREC == null
                                        "
                                    -->
                                    <td>
                                        <span
                                            style="border: none; border-bottom: 2px solid grey;"
                                            >{{
                                                dataplanslip.recdate[index]
                                            }}</span
                                        >
                                    </td>
                                    <!--td v-else>{{ slip.DATEREC }}</td-->
                                    <!--td>{{ slip.MATFULSTAT }}</td>
                                    <td>
                                        <span
                                            style="border: none; border-bottom: 2px solid grey;"
                                            >{{
                                                dataplanslip.remark[slip.ID]
                                            }}</span
                                        >
                                    </td-->
                                </tr>
                            </tbody>
                        </table><br>
                        Form No : GMF/B-051
                        <hr />
                        <br />
                        <div width="100%" style="text-align:right;">
                            <VueBarcode
                                :value="dataplansliporder.AUFNR"
                                height="50"
                                textPosition="top"
                                :text="'Work Order: ' + dataplansliporder.AUFNR"
                            >
                                Show this if the rendering fails.
                            </VueBarcode>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>

            <!-- modal timeline -->
            <div
                class="modal-box"
                id="modal-timeline"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-timeline')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Log Timeline</h2>
                    </div>
                    <div class="modal-body">
                        <div
                            style="font-size: 12pt; font-weight: bold; margin-bottom: 25px; color: #f98930"
                        >
                            {{ timelines.length ? timelines[0].revnr : "" }}
                        </div>
                        <div
                            style="position: relative; height:450px; overflow-y:auto; margin-left: 10px; margin-right: 10px;"
                        >
                            <TimelineJCMDR
                                v-for="(timeline, index) in timelines"
                                :key="index"
                                :data="timeline"
                                :index="index"
                            />
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-timeline')"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
            <!-- /modal timeline -->

            <!-- modal dfplink -->
            <div
                class="modal-box"
                id="modal-dfplink"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal lg">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-dfplink')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Set Sharepoint Maintenance Record Project Folder
                        </h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            <hr />
                            Example : <br /><br />
                            /sites/NarrowBodyBaseMaintenance/TJP/TJP-4/01.
                            Aircraft Maintenance Record/2020/(Narrow) B737
                            SERIES/A4O-BD/MDR/
                            <br />
                            <hr />
                        </label>
                        <div class="is-row">
                            <div class="is-col is-80">
                                <input
                                    :value="dfpfolder"
                                    id="inputdfpfolder"
                                    v-on:keyup.enter="
                                        handlerUpdateDFPfolder('inputdfpfolder')
                                    "
                                />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-dfplink')"
                        >
                            Close
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- modal layout -->
            <div
                class="modal-box"
                id="modal-layout"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-layout')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Arrange Table Layout</h2>
                    </div>
                    <div
                        class="modal-body"
                        style="position: relative; height:500px; overflow-y:auto;"
                    >
                        <draggable
                            :list="datatable.fields"
                            class="list-group"
                            ghost-class="ghost"
                            v-bind="dragOptions"
                            @start="drag = true"
                            @end="drag = false"
                            @change="handlerDateDoneJC"
                        >
                            <transition-group
                                type="transition"
                                :name="!drag ? 'flip-list' : null"
                            >
                                <div
                                    v-for="(element, index) in datatable.fields"
                                    :key="index + 0"
                                >
                                    <div
                                        class="list-group-item"
                                        v-if="
                                            element.label !== 'ID' &&
                                                element.label !==
                                                    'Skill Active' &&
                                                element.label !==
                                                    'Skill Position' &&
                                                element.label !== 'Material' &&
                                                element.label !==
                                                    'LONGSYSSTAT' &&
                                                element.label !==
                                                    'DFPFINDING_RMK'
                                        "
                                    >
                                        <i
                                            :class="
                                                element.fixed
                                                    ? 'fa fa-anchor'
                                                    : 'glyphicon glyphicon-pushpin'
                                            "
                                            @click="
                                                element.fixed = !element.fixed
                                            "
                                            aria-hidden="true"
                                        ></i>
                                        <div
                                            class="is-row"
                                            v-if="element.hidden == false"
                                            style="font-weight:bold;"
                                        >
                                            <div class="is-col is-70">
                                                {{ element.label }}
                                            </div>
                                            <div class="is-col is-10">
                                                <button
                                                    class="button is-100 is-secondary is-success"
                                                    style="padding:0px !important;"
                                                    v-on:click="
                                                        element.hidden = true
                                                    "
                                                >
                                                    HIDE
                                                </button>
                                            </div>
                                        </div>
                                        <div class="is-row" v-else>
                                            <div class="is-col is-70">
                                                {{ element.label }}
                                            </div>
                                            <div class="is-col is-10">
                                                <button
                                                    class="button is-100 is-default"
                                                    v-on:click="
                                                        element.hidden = false
                                                    "
                                                >
                                                    SHOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition-group>
                        </draggable>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-layout')"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerResetLayout()"
                            class="button is-danger"
                            type="button"
                            id="btn-reset-layout"
                        >
                            Reset Layout
                        </button>
                        <button
                            v-on:click="handlerSaveArrangedLayout()"
                            class="button is-primary"
                            type="button"
                            id="btn-save-layout"
                        >
                            Save Aranged Layout
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>

            <!-- modal list backup -->
            <div
                class="modal-box"
                id="modal-download-backup"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-download-backup')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Download Data Jobcard</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <button class="button" v-on:click="getdataexport('')">
                            today
                        </button>
                        <hr />
                        <span
                            v-for="(listdownload, index) in listdatabackup"
                            :key="index"
                        >
                            <button
                                class="button is-success"
                                v-on:click="
                                    getdataexport(listdownload.time_stamp)
                                "
                            >
                                Backup {{ listdownload.time_stamp }} ({{
                                    listdownload.rows
                                }}
                                rows)
                            </button>
                            <hr />
                        </span>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-download-backup')"
                        >
                            Close
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>

            <!-- modal single add -->
            <div
                class="modal-box"
                id="modal-single-add"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal lg">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-single-add')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Add Single MDR</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Input data <span class="is-req">*</span>
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-15">
                                <input
                                    v-model="form.order_number"
                                    value=""
                                    type="text"
                                />
                                <div class="is-desc">Order Number</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input
                                    v-model="form.originating"
                                    value=""
                                    type="text"
                                />
                                <div class="is-desc">Originating Order</div>
                            </div>
                            <div class="form-item is-col is-10">
                                <input
                                    v-model="form.seq"
                                    value=""
                                    type="text"
                                />
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
                                <input
                                    v-model="form.description"
                                    value=""
                                    type="text"
                                />
                                <div class="is-desc">Description</div>
                            </div>
                        </div>
                        <div class="is-row" style="margin-top: -10px;">
                            <div class="form-item is-col is-10">
                                <input v-model="form.issue_date" type="date" />
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
                                    <option
                                        v-for="elem in zoneareas"
                                        :key="elem.ID"
                                        :value="elem.ID"
                                        >{{ elem.NAME }}</option
                                    >
                                </select>
                                <div class="is-desc">Zone / Area</div>
                            </div>
                            <div class="form-item is-col is-25">
                                <input
                                    v-model="form.skill"
                                    value=""
                                    type="text"
                                />
                                <div class="is-desc">
                                    Skill (WCT separate by coma)
                                </div>
                            </div>
                        </div>
                        <div class="is-row" style="margin-top: -10px;">
                            <div class="form-item is-col is-10">
                                <input
                                    v-model="form.pmhrs"
                                    value=""
                                    type="number"
                                />
                                <div class="is-desc">Pmhrs</div>
                            </div>
                            <div class="form-item is-col is-10">
                                <input
                                    v-model="form.actmhrs"
                                    value=""
                                    type="number"
                                />
                                <div class="is-desc">Act Mhrs</div>
                            </div>
                            <div class="form-item is-col is-10">
                                <select v-model="form.mdr_track">
                                    <option value="">Option</option>
                                    <option
                                        v-for="track in tracks"
                                        :key="track.ID"
                                        :value="track.ID"
                                        >{{ track.TRACK_NAME }}</option
                                    >
                                </select>
                                <div class="is-desc">MDR Track</div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input
                                    v-model="form.date_done"
                                    value=""
                                    type="date"
                                />
                                <div class="is-desc">Date Done</div>
                            </div>
                            <div class="form-item is-col is-25">
                                <select v-model="form.review_position">
                                    <option value="">Option</option>
                                    <option
                                        :disabled="
                                            position.is_show == 2 ? true : false
                                        "
                                        v-for="position in positions"
                                        :key="position.ID"
                                        :value="position.ID"
                                        >{{ position.POSITION_NAME }}</option
                                    >
                                </select>
                                <div class="is-desc">Review Position</div>
                            </div>
                        </div>
                        <div class="is-row" style="margin-top: -10px;">
                            <div class="form-item is-col is-90">
                                <textarea
                                    v-model="form.remarks"
                                    rows="6"
                                ></textarea>
                                <div class="is-desc">Remarks</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-single-add')"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerSaveSinglMDR()"
                            class="button is-success"
                            type="submit"
                            id="btn-single-add"
                        >
                            Save
                        </button>
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
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import Loading from "vue-loading-overlay";
import axios from "axios";
import "vue-loading-overlay/dist/vue-loading.css";
import draggable from "vuedraggable";
import FieldMDR from "./datatable/FieldMDR";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import XLSX from "xlsx";
import TimelineJCMDR from "./components/TimelineJCMDR";
import VueBarcode from "vue-barcode";
import vSelect from "vue-select";
import moment from "moment";

export default {
    data: () => ({
        pagebreak: true,
        renderedFields: false,
        hasAccess: false,
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: "dots",
            color: "#0065ff"
        },
        multiselectfilteroption: "",
        datatable: {
            fields: FieldMDR,
            rows: [],
            totalRows: "",
            serverParams: {
                columnFilters: {},
                sort: {
                    type: "",
                    field: ""
                },
                page: 1,
                perPage: 10,
                searchTerm: "",
                filter: {
                    order: []
                },
                revnr: ""
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        tracks: [],
        zoneareas: [],
        positions: [],
        dfpstats: ["NEED REVIEW", "FINDING", "NEED SCAN", "SCANNED", "ORDNER"],
        findingcateg: [],

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
            remarks: ""
        },
        grant_access: false,
        cust_access: false,
        dfp_access: false,
        acreginfo: "",
        projectinfo: "",
        hangarinfo: "",
        actypeinfo: "",
        sloc: "2100",
        drag: false,
        checklastsync: false,
        lastsynccrm: "",
        lastsyncmdr: "",
        options_order: [],
        options_finding: [
            "STAMP",
            "SIGN",
            "BON TOOL",
            "DATE",
            "RE-SCAN",
            "ARC",
            "MEASUREMENT VALUE"
        ],
        track_status: "",

        update_positions: "",
        update_dfp: "",
        dfpremark: "",
        dfpfolder: "",
        dfp_url: [],
        timelines: [],
        listdatabackup: [],
        dataplanslip: {
            selectedorder: [],
            selectedsequence: [],
            printdate: "",
            ordertype: "GA02",
            material: [],
            recdate: [],
            recby: [],
            remark: [],
            batch: []
        },
        is_cust: false,
        optionsDay: [],
        daysAll: ""
    }),

    components: {
        Loading,
        draggable,
        VueGoodTable,
        VueBarcode,
        TimelineJCMDR,
        multiselect: Multiselect,
        "v-select": vSelect
    },

    watch: {
        clonedItems: function(newVal, oldVal) {
            // console.log(newVal);
            // console.log("---------------old---------------");
            // console.log(oldVal);
        },
        daysAll: (af, bef) => {
            // console.log(af, bef);
        }
    },

    mounted() {
        this.$cekCustomerProject(this.$route.params.pg_id).then(res => {
            if (!res) {
                this.$router.push({
                    name: "access_denied"
                });
            } else {
                if (
                    !this.$bulkCan(
                        "pc_hangar_tracking_system_view_jc_mdr",
                        "pc_hangar_tracking_system_edit_jc_mdr",
                        "pc_hangar_tracking_system_edit",
                        "pc_hangar_tracking_system_view",
                        "pc_hangar_tracking_system_customer_edit"
                    )
                ) {
                    this.$router.push({
                        name: "access_denied"
                    });
                } else {
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
                        //this.initfilterOrder();
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
        },

        user: function() {
            return JSON.parse(localStorage.getItem("user"));
        },

        clonedItems: function() {
            if (this.datatable.rows.length) {
                return JSON.parse(JSON.stringify(this.datatable.rows));
            }
        }
    },

    methods: {
        onChangeDaysAll: async function(val) {
            try {
                if (val) {
                    let obj = val;

                    const { date_plan, type, shift } = obj.value;

                    const params = JSON.parse(
                        JSON.stringify({
                            days_label: obj.label,
                            days: `${date_plan}, ${type}, ${shift}`
                        })
                    );
                } else {
                    this.daysAll = "";

                    // for (const [i, v] of this.datatable.rows.entries()) {
                    //     if (v.vgtSelected) {
                    //         this.$set(
                    //             this.datatable.rows[i],
                    //             "vgtSelected",
                    //             false
                    //         )
                    //     }
                    // }
                }
            } catch (e) {
                console.error(e);
                toastr.error(e);
            }
        },

        onSetDays: async function(e) {
            try {

                this.loading.isLoading = true;

                let rows = [];
                let params = {};

                const { label, value } = this.daysAll;
                const { date_plan, type, shift } = value;

                for (const [i, v] of this.datatable.rows.entries()) { 
                    if (v.vgtSelected) {
                        params = JSON.parse(
                            JSON.stringify({
                                days_label: label,
                                days: `${date_plan}, ${type}, ${shift}`
                            })
                        );
                        rows.push(this.datatable.rows[i]);
                    }
                }

                const data = await (
                    await axios.post(
                        "/api/booking_and_submission/add_daily_menu_by_multi_selection",
                        {
                            params: params,
                            rows: rows
                        }
                    )
                ).data;

                const { status, message } = data;

                if (message === "Cant create daily menu due to expired date") {
                    toastr.warning(message);
                    this.loading.isLoading = false;
                    return ;
                } else {
                    if (!status) {
                        toastr.warning(message);
                        this.loading.isLoading = false;
                        return ;
                    } else {
                        toastr.success(message);
                        this.datatable.serverParams.searchTerm = "";
                        this.datatable.serverParams.revnr = this.$route.params.pg_id;
                        axios
                            .post(
                                "/api/production_control_hangar/get_tmdr",
                                this.datatable.serverParams
                            )
                            .then(res => {
                                this.datatable.rows = res.data.data;
                                this.datatable.totalRows = res.data.total;
                                // toastr.remove();
                                // toastr.success("data refreshed");

                                this.loading.isLoading = false;
                            })
                            .catch(e => {
                                console.log("Error: " + e);
                                // toastr.remove();
                                // toastr.error("Undefined error");
                            });
                    }
                }
            } catch (e) {
                console.error(e);
            }
        },

        selectAll: function(selectRows) {
            try {
                const { selected, selectedRows } = selectRows;

                if (selectedRows.length) {
                    for (const [i, v] of selectedRows.entries()) {
                        this.$set(
                            this.datatable.rows[i],
                            "vgtSelected",
                            selected
                        );
                        //console.log(i, v)
                    }
                } else {
                    for (const [i, v] of this.datatable.rows.entries()) {
                        this.$set(
                            this.datatable.rows[i],
                            "vgtSelected",
                            selected
                        );
                        //console.log(i, v)
                    }
                }
            } catch (e) {
                console.error(e);
            }
        },

        toggleSelectRow: function(params) {
            //console.log(params);
            const { pageIndex, selected } = params;
            this.$set(this.datatable.rows[pageIndex], "vgtSelected", selected);

            const isExistSelected = this.datatable.rows.filter(
                row => row.vgtSelected
            ).length;
            if (!isExistSelected) {
                this.daysAll = "";
            }
        },

        selectRow: () => {
            for (const [i, v] of this.datatable.rows.entries()) {
                if (v.vgtSelected) {
                    this.$set(this.datatable.rows[i], "DAY", this.daysAll);
                    //console.log(i, v, this.actionDays)
                } else {
                }
            }
        },

        onChangeDays: async function(val, row, i, rowFormatted = null) {
            try {
                if (val == null) {
                    // this.initData();
                    return;
                }

                const { date_plan, type, shift } = val.value;

                const params = {
                    row: row,
                    days_label: val.label,
                    days: `${date_plan}, ${type}, ${shift}`
                };

                const data = await (
                    await axios.post(
                        "/api/booking_and_submission/add_daily_menu_by_single_selection",
                        params
                    )
                ).data;

                const { status, message } = data;

                if (!status) {
                    return toastr.warning(message);
                }

                toastr.success(message);
                this.datatable.serverParams.searchTerm = "";
                this.datatable.serverParams.revnr = this.$route.params.pg_id;
                axios
                    .post(
                        "/api/production_control_hangar/get_tmdr",
                        this.datatable.serverParams
                    )
                    .then(res => {
                        this.datatable.rows = res.data.data;
                        this.datatable.totalRows = res.data.total;
                        // toastr.remove();
                        toastr.success("data refreshed");
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        // toastr.remove();
                        toastr.error("Undefined error");
                    });
            } catch (e) {
                console.error(e);
                // toastr.error(e);
            }
        },

        handlerModalPrintSlip: function(param) {
            this.getdataplanslip().then(() => {
                $("#modal-print-slip").modal("show");
            });
        },

        slip_printout: function() {
            var divToPrint = document.getElementById("outputprintslip");
            var newWin = window.open("", "Print-Window");
            newWin.document.open();
            if (this.pagebreak) {
                var style = "<style>@media print{.detectpagebreak {page-break-after:always}"
                style += "tr {page-break-inside:avoid; page-break-after:auto} td { page-break-inside:avoid; page-break-after:auto } thead { display:table-header-group } tfoot { display:table-footer-group }}"
                style += "@page { size: auto;  margin-bottom: 5mm; } body{-moz-transform: scale(0.7, 0.7);zoom: 0.7;zoom: 70%;} .materialitem table, .materialitem td, .materialitem th{ border: 1px solid black;}</style>"
            } else {
                var style = "<style>@media print{.detectpagebreak {page-break-after:auto;  page-break-inside:avoid;}"
                style += "tr {page-break-inside:avoid; page-break-after:auto} td { page-break-inside:avoid; page-break-after:auto } thead { display:table-header-group } tfoot { display:table-footer-group }}"
                style += "@page { size: auto;  margin-bottom: 5mm; } body{-moz-transform: scale(0.7, 0.7);zoom: 0.7;zoom: 70%;} .materialitem table, .materialitem td, .materialitem th{ border: 1px solid black;}</style>"
            }
            // oncontextmenu='return false' onload='window.print()'
            newWin.document.write(
                style +
                "<html><body oncontextmenu='return false' onload='window.print()'>" +
                    divToPrint.innerHTML +
                "</body></html>"
            );
            newWin.document.close();
            setTimeout(function() {
                newWin.close();
            }, 1000);
        },

        getdataplanslip: function() {
            return new Promise((resolve, reject) => {
                this.loading.isLoading = true;
                this.dataplanslip.printdate = "";
                this.dataplanslip.material = [];
                this.dataplanslip.recby = [];
                this.dataplanslip.recdate = [];
                this.dataplanslip.remark = [];
                this.dataplanslip.batch = [];

                axios
                    .post("/api/production_control_hangar/print_slip", {
                        aufnr: this.dataplanslip.selectedorder,
                        revnr: this.$route.params.pg_id
                    })
                    .then(res => {
                        this.dataplanslip.material = res.data.data;
                        this.dataplanslip.printdate = new Date(
                            new Date().setTime(
                                new Date().getTime() +
                                    /*GMT*/
                                    7 * 60 * 60 * 1000
                            )
                        )
                            .toISOString()
                            .replace(/T|Z/g, " ");
                        this.hangarinfo = res.data.hangar;
                        this.loading.isLoading = false;
                        resolve();
                    })
                    .catch(e => {
                        toastr.error("Failed get data");
                        this.loading.isLoading = false;
                        reject();
                    });
            });
        },

        initData: function() {
            $(".vgt-fixed-header, .vgt-responsive")
                .wrapAll("<div class='new' />")
                .css("width", "unset")
                .css("overflow-x", "unset");
            $(".vgt-fixed-header")
                .css("position", "sticky")
                .css("position", "-webkit-sticky")
                .css("top", "0");
            $(
                ".vgt-fixed-header table thead tr:nth-child(2) th:nth-child(1)"
            ).text(".");
            $(".vgt-responsive thead").attr("hidden", true);
            $(".new").css("overflow-x", "auto");
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;
            this.daysAll = "";
            axios
                .post(
                    "/api/production_control_hangar/get_tmdr",
                    this.datatable.serverParams
                )
                .then(res => {
                    if (res.data.data.length < 1) {
                        toastr.warning(`Empty data, please run synchronize.`);
                    }

                    this.datatable.rows = res.data.data;
                    this.datatable.totalRows = res.data.total;
                    this.loading.isLoading = false;
                    //console.log(res.data.data);
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                });
            this.checksync();
        },

        initArangedLayout: function() {
            return new Promise(resolve => {
                axios
                    .post("/api/arranged_layout/get_user_layout", {
                        name: "LAYOUT_MDR"
                    })
                    .then(res => {
                        if (res.data.length !== FieldMDR.length) {
                            if (this.is_cust) {
                                this.datatable.fields = FieldMDR.map(l =>
                                    Object.assign({}, l)
                                ).filter(d => 
                                    d.label !== 'System Status' && 
                                    d.label !== 'MH' &&
                                    d.label !== 'MAT' &&
                                    d.label !== 'Pmhrs' &&
                                    d.label !== 'Act Mhrs' &&
                                    d.label !== 'Day' &&
                                    d.label !== 'Paper Work Need Review' &&
                                    d.label !== 'Finding Paper Work' &&
                                    d.label !== 'Paper Work Need Scan' &&
                                    d.label !== 'MDR Track (Shop)' &&
                                    d.label !== 'Shop Remark'
                                )
                                resolve()
                            } else {
                                this.datatable.fields = FieldMDR.map(l =>
                                    Object.assign({}, l)
                                )
                                resolve()
                            }
                        } else {
                            if (this.is_cust) {
                                this.datatable.fields = res.data.filter(d => 
                                    d.label !== 'System Status' && 
                                    d.label !== 'MH' &&
                                    d.label !== 'MAT' &&
                                    d.label !== 'Pmhrs' &&
                                    d.label !== 'Act Mhrs' &&
                                    d.label !== 'Day' &&
                                    d.label !== 'Paper Work Need Review' &&
                                    d.label !== 'Finding Paper Work' &&
                                    d.label !== 'Paper Work Need Scan' &&
                                    d.label !== 'MDR Track (Shop)' &&
                                    d.label !== 'Shop Remark'
                                )
                                resolve()
                            } else {
                                this.datatable.fields = res.data
                                resolve()
                            }
                        }
                        resolve();
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        resolve();
                    });
            });
        },

        handlerSaveArrangedLayout: function() {
            this.handleButton("btn-save-layout", "load").then(() => {
                axios
                    .post("/api/arranged_layout/post_layout", {
                        data: JSON.stringify(this.datatable.fields),
                        name: "LAYOUT_MDR"
                    })
                    .then(res => {
                        if (res.data.success) {
                            toastr.success(res.data.message, "Success");
                            this.initArangedLayout().then(() => {
                                this.handlerArrangedStyle();
                            });
                            setTimeout(() => {
                                this.hideModal("modal-layout");
                            }, 1000);
                        } else {
                            toastr.warning(res.data.message);
                        }
                        this.handleButton("btn-save-layout", "stop");
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        toastr.error("Failed save layout change");
                        this.handleButton("btn-save-layout", "stop");
                    });
            });
        },

        handlerArrangedStyle: function() {
            if (this.datatable.fields.length > 0) {
                let card_table = document.getElementsByClassName(
                    "list-group-item"
                );
                card_table[0].style.cssText = `
                    border-top-left-radius: 4px !important;
                    border-top-right-radius: 4px !important
                `;
                card_table[card_table.length - 1].style.cssText = `
                    border-bottom-left-radius: 4px !important;
                    border-bottom-right-radius: 4px !important`;
            }
        },

        handlerResetLayout: function() {
            this.handelerReset().then(() => {
                this.handlerDateDoneJC();
            });
        },

        handelerReset: function() {
            return new Promise(resolve => {
                if (this.is_cust) {
                    this.datatable.fields = FieldMDR.map(l => Object.assign({}, l)).filter(d => 
                        d.label !== 'System Status' && 
                        d.label !== 'MH' &&
                        d.label !== 'MAT' &&
                        d.label !== 'Pmhrs' &&
                        d.label !== 'Act Mhrs' &&
                        d.label !== 'Day' &&
                        d.label !== 'Paper Work Need Review' &&
                        d.label !== 'Finding Paper Work' &&
                        d.label !== 'Paper Work Need Scan' &&
                        d.label !== 'MDR Track (Shop)' &&
                        d.label !== 'Shop Remark'
                    )
                    resolve()
                } else {
                    this.datatable.fields = FieldMDR.map(l => Object.assign({}, l))
                    resolve()
                }
            });
        },

        checksync: function() {
            axios
                .post("/api/production_control_hangar/get_lastsyncmdr", {
                    revnr: this.$route.params.pg_id
                })
                .then(res => {
                    //console.log(res.data)
                    this.checklastsync = res.data.sync;
                    this.lastsynccrm = res.data.lastsynccrm;
                    this.lastsyncmdr = res.data.lastsyncmdr;
                })
                .catch(e => {
                    console.log("Error: " + e);
                });
        },

        initTrack: function() {
            axios.get("/api/management/job_mdr_track/get/hangar").then(res => {
                this.tracks = res.data.filter(d => d.TRACK_NAME !== 'NOT APPLICABLE');
            });
        },

        initZoneArea: function() {
            axios.get("/api/management/zonearea/get_all").then(res => {
                this.zoneareas = res.data;
            });
        },

        initPosition: function() {
            axios
                .get("/api/management/review_position/get_all_position")
                .then(res => {
                    this.positions = res.data;
                });
        },

        handlerModalImport: function() {
            this.data_import = "";
            document.getElementById("file").value = "";

            $("#modal-import-reservation").modal("show");
        },

        handlerModaldfplink: function() {
            $("#modal-dfplink").modal("show");
        },

        handlerExportforupdate: function() {
            axios
                .get(
                    `/api/production_control_hangar/export_mdrforupdate/${this.$route.params.pg_id}/hangar`
                )
                .then(res => {
                    if (res.data.length < 1) {
                        toastr.warning("Data not available");
                        return;
                    }

                    this.handlerExportupdate(
                        res.data,
                        this.tracks,
                        this.positions,
                        "MDR Bulk Update"
                    ).then(() => {});
                })
                .catch(e => {
                    console.log("Error: " + e);
                    this.loading.isLoading = false;
                    toastr.error("Undefined error");
                });
        },

        handlerExportupdate: function(data, tracks, pos, name) {
            return new Promise((resolve, reject) => {
                let note = [
                    {
                        COLUMN: "ORDER",
                        RULE: "*required"
                    },
                    {
                        COLUMN: "ACCESS",
                        RULE: "YES or NO"
                    },
                    {
                        COLUMN: "PRIORITY",
                        RULE: "YES or NO"
                    },
                    {
                        COLUMN: "TRACK_ID",
                        RULE:
                            "Input ID Number of Tracking Status from LIST_STATUS Sheet"
                    },
                    {
                        COLUMN: "DATE DONE",
                        RULE: "yyyy-mm-dd"
                    },
                    {
                        COLUMN: "REVIEW_POSITION_ID",
                        RULE:
                            "Input ID Number of Position from LIST_POSITION Sheet"
                    }
                ];
                note = XLSX.utils.json_to_sheet(note);
                let tmp = XLSX.utils.json_to_sheet(data);
                let tmp2 = XLSX.utils.json_to_sheet(tracks);
                let tmp3 = XLSX.utils.json_to_sheet(pos);
                let wb = XLSX.utils.book_new();
                //console.log(note);
                //console.log(tmp2);
                XLSX.utils.book_append_sheet(wb, tmp, name);
                XLSX.utils.book_append_sheet(wb, note, "NOTE");
                XLSX.utils.book_append_sheet(wb, tmp2, "LIST_STATUS");
                XLSX.utils.book_append_sheet(wb, tmp3, "LIST_POSITION");
                XLSX.writeFile(
                    wb,
                    `mdr_update_${this.$route.params.pg_id}.xlsx`
                );

                resolve();
            });
        },

        onChangeFileUpload: function() {
            if (document.getElementById("file").files.length != 0) {
                this.data_import = this.$refs.file.files[0];
            }
        },

        validate: function() {
            if (this.data_import == "") {
                toastr.warning("File import can't be empty");
                return false;
            }

            return true;
        },

        handlerImport: function() {
            if (!this.validate()) return;

            this.handleButton("btn-import-reservation", "load").then(() => {
                let formData = new FormData();
                formData.append("revnr", this.$route.params.pg_id);
                formData.append("file", this.data_import);

                axios
                    .post(
                        "/api/production_control_hangar/import_mdr",
                        formData,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        }
                    )
                    .then(res => {
                        if (res.data.success) {
                            toastr.success(res.data.message, "Success");
                            this.initData();
                            setTimeout(() => {
                                this.hideModal("modal-import-reservation");
                            }, 1000);
                        } else {
                            setTimeout(() => {
                                toastr.warning(res.data.message);
                            }, 100);
                            toastr.warning(res.data.data);
                        }
                        this.handleButton("btn-import-reservation", "stop");
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        toastr.error("Undefined error");
                        this.handleButton("btn-import-reservation", "stop");
                    });
            });
        },

        handlerUpdateDFPfolder: function(elem) {
            if (!this.dfp_access) return;
            let elm = "";
            elm = document.getElementById(elem).value;
            /*if(elm!==null && elm!== ""){
                elm = encodeURIComponent(elm);
            }*/

            axios
                .post("/api/production_control_hangar/update_dfpfolder", {
                    revnr: this.$route.params.pg_id,
                    data: elm,
                    col: "dfpfoldermdr"
                })
                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                        this.hideModal("modal-dfplink");
                        this.permissionHandler();
                        //this.onRefresh();
                    } else {
                        toastr.remove();
                        toastr.error(res.data.message);
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                });
        },

        handlerUpdateData: function(id, column, elem, position = "") {
            if (!this.grant_access) return;
            //this.loading.isLoading = true;
            let elm = "";

            if (column == "SKILL_ACTIVE") {
                elm = elem;
            } else {
                elm = document.getElementById(elem).value;
            }

            axios
                .post("/api/production_control_hangar/update_tmdr", {
                    revnr: this.$route.params.pg_id,
                    id: id,
                    column: column,
                    data: elm
                })
                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                        toastr.info("refreshing data ...");
                        //this.datatable.serverParams.perPage = "";
                        this.datatable.serverParams.searchTerm = "";
                        this.datatable.serverParams.revnr = this.$route.params.pg_id;
                        axios
                            .post(
                                "/api/production_control_hangar/get_tmdr",
                                this.datatable.serverParams
                            )
                            .then(res => {
                                this.datatable.rows = res.data.data;
                                this.datatable.totalRows = res.data.total;
                                toastr.remove();
                                toastr.success("data refreshed");
                            })
                            .catch(e => {
                                console.log("Error: " + e);
                                toastr.remove();
                                toastr.error("Undefined error");
                            });
                    } else {
                        toastr.remove();
                        toastr.error(res.data.message);
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                });
        },

        handlerUpdateCustomerNote: function(id, column, elem) {
            if (
                !this.cust_access &&
                (!this.grant_access || column != "CUST_REF")
            )
                return;
            let elm = "";
            let route = "";
            elm = document.getElementById(elem).value;
            if (this.cust_access) {
                route = "/api/production_control_hangar/custupdate_tjobcard";
            } else if (this.grant_access) {
                route = "/api/production_control_hangar/update_tmdr";
            }

            axios
                .post(route, {
                    revnr: this.$route.params.pg_id,
                    id: id,
                    column: column,
                    data: elm
                })
                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                        toastr.info("refreshing data ...");
                        this.datatable.serverParams.perPage = "";
                        this.datatable.serverParams.searchTerm = "";
                        this.datatable.serverParams.revnr = this.$route.params.pg_id;
                        axios
                            .post(
                                "/api/production_control_hangar/get_tmdr",
                                this.datatable.serverParams
                            )
                            .then(res => {
                                this.datatable.rows = res.data.data;
                                this.datatable.totalRows = res.data.total;
                                toastr.remove();
                                toastr.success("data refreshed");
                            })
                            .catch(e => {
                                console.log("Error: " + e);
                                toastr.remove();
                                toastr.error("Undefined error");
                            });
                    } else {
                        toastr.remove();
                        toastr.error(res.data.message);
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.error("Undefined error");
                    this.loading.isLoading = false;
                });
        },
        /**
         * Datatable - Server Side
         */
        onRefresh() {
            //this.datatable.serverParams.page
            this.permissionHandler();
            this.updateParams({
                page: this.datatable.serverParams.page
            });
            this.checksync();
            this.loadItems();
        },

        updateParams(newProps) {
            this.datatable.serverParams = Object.assign(
                {},
                this.datatable.serverParams,
                newProps
            );
        },

        onPageChange(params) {
            this.updateParams({
                page: params.currentPage
            });
            this.loadItems();
        },

        onPerPageChange(params) {
            this.datatable.serverParams.page = 1;
            this.updateParams({
                perPage: params.currentPerPage
            });
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                sort: {
                    type: params[0].type,
                    field: params[0].field
                }
            });
            this.updateParams({
                page: 1
            });
            this.loadItems();
        },

        onColumnFilter(params) {
            this.updateParams(params);
            this.updateParams({
                page: 1
            });
            this.loadItems();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({
                page: 1
            });
            this.loadItems();
        },

        /**
         * load items is what brings back the rows from server
         *
         * This stil has a bug, base on report from line ppc.
         * When do action on specific column, it always refresh but, the data came to all data.
         * loadItems() methods on onSearch() methods should be re-code.
         */
        loadItems() {
            this.handleDatatableChange(this.datatable.serverParams).then(() => {
                this.loading.isLoading = false;
                this.resetToggle(
                    "material-list",
                    "btn-collapse-all",
                    "icon-collapse-all",
                    "btn-material-list"
                );
                this.datatable.rows.forEach(this.matchindexdfp);
            });
        },

        handleDatatableChange: function(params) {
            this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {
                axios
                    .post("/api/production_control_hangar/get_tmdr", params)
                    .then(res => {
                        this.datatable.rows = res.data.data;
                        this.datatable.totalRows = res.data.total;
                        this.loading.isLoading = false;

                        resolve();
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        this.loading.isLoading = false;
                        resolve();
                    });
            });
        },

        handlerSyncData: function() {
            swal({
                title: "Synchronize the project may take a few minutes",
                text: "Are you sure that you want to sync this project?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(value => {
                if (value) {
                    this.loading.isLoading = true;
                    axios
                        .get(
                            "/api/production_control_hangar/sync_mdr/" +
                                this.$route.params.pg_id
                        )
                        .then(res => {
                            if (res.data.success) {
                                toastr.success(res.data.message);
                                this.initData();
                            } else {
                                toastr.error(res.data.message);
                            }
                            this.loading.isLoading = false;
                            this.resetToggle(
                                "material-list",
                                "btn-collapse-all",
                                "icon-collapse-all",
                                "btn-material-list"
                            );
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            toastr.error("Undefined error");
                            this.loading.isLoading = false;
                            this.resetToggle(
                                "material-list",
                                "btn-collapse-all",
                                "icon-collapse-all",
                                "btn-material-list"
                            );
                        });
                } else {
                    toastr.info("Canceled");
                    return;
                }
            });
            this.checksync();
        },

        handlerDateDoneJC: function(e) {
            $(".vgt-fixed-header th input").attr("type", "text");
            var el = $('*[placeholder="Date done jc"]');

            if (el.length > 0) {
                el[0].type = "date";
            }
            $(".vgt-checkbox-col input").attr("type", "checkbox");
        },

        handlerToggle: function(btn_id, icon_id, elem_id) {
            //let elm_state = $(".button is-secondary is-success btn-material-list hidedetail")
            let elm_btn = document.getElementById(btn_id);

            if (elm_btn.getAttribute("statetoggle") == "0") {
                $("#" + btn_id).attr("statetoggle", "1");
                $("#" + elem_id).slideDown(150);
            } else {
                $("#" + btn_id).attr("statetoggle", "0");
                $("#" + elem_id).slideUp(150);
            }
        },

        handlerToggleAll: function(
            class_elem,
            btn_id,
            icon_id,
            btn_list_class
        ) {
            let elm_icon = document.getElementById(icon_id);
            let elm_btn = document.getElementById(btn_id);
            let elem_list_btn = document.getElementsByClassName(btn_list_class);

            if (elm_icon.innerHTML == "visibility") {
                elm_btn.innerHTML = `<i id="${icon_id}" class='material-icons'>visibility_off</i>Material`;

                $("." + class_elem).slideDown(150);
            } else {
                elm_btn.innerHTML = `<i id="${icon_id}" class='material-icons'>visibility</i>Material`;
                $("." + class_elem).slideUp(150);
            }
        },

        resetToggle: function(class_elem, btn_id, icon_id, btn_list_class) {
            let elm_icon = document.getElementById(icon_id);
            let elm_btn = document.getElementById(btn_id);
            let elem_list_btn = document.getElementsByClassName(btn_list_class);

            elm_btn.innerHTML = `<i id="${icon_id}" class='material-icons'>visibility</i>Material`;
            $("." + class_elem).hide();
        },

        custLabel({ label, status }) {
            return `[${status}] ${label}`;
        },

        handlerHideColumn(value) {
            if (value.label == "All Columns") {
                if (value.hidden) {
                    for (let i = 0; i < this.columns.length; i++) {
                        if (this.columns[i].label != "All Columns") {
                            this.datatable.fields[
                                this.columns[i].id
                            ].hidden = false;
                        }
                        this.columns[i].status = "HIDE";
                        this.columns[i].hidden = false;
                    }
                } else {
                    for (let i = 0; i < this.columns.length; i++) {
                        if (this.columns[i].label != "All Columns") {
                            this.datatable.fields[
                                this.columns[i].id
                            ].hidden = true;
                        }
                        this.columns[i].status = "SHOW";
                        this.columns[i].hidden = true;
                    }
                }
            } else {
                if (value.hidden) {
                    this.datatable.fields[value.id].hidden = false;
                    value.status = "HIDE";
                    value.hidden = false;
                } else {
                    this.datatable.fields[value.id].hidden = true;
                    value.status = "SHOW";
                    value.hidden = true;
                }
            }
        },

        getdatabackuplist: function() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `/api/production_control_hangar/getbackuplist_mdr/${this.$route.params.pg_id}`
                    )
                    .then(res => {
                        if (res.data.length < 1) {
                            toastr.warning("Data not available");
                            resolve();
                        } else {
                            this.listdatabackup = res.data.data;
                            resolve();
                        }
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        toastr.error("Undefined error");
                        reject();
                    });
            });
        },

        handlerExportMDR: function() {
            if (this.grant_access) {
                this.getdatabackuplist().then(() => {
                    $("#modal-download-backup").modal("show");
                });
            } else {
                this.getdataexport("");
            }
        },

        getdataexport: function(param) {
            let url = "";
            if (param == "") {
                url = `/api/production_control_hangar/export_mdr/${this.$route.params.pg_id}/hangar`;
            } else {
                url =
                    `/api/production_control_hangar/export_mdrbackup/${this.$route.params.pg_id}/hangar/` +
                    param;
            }
            this.loading.isLoading = true;
            axios
                .get(url)
                .then(res => {
                    if (res.data.length < 1) {
                        toastr.warning("Data not available");
                        this.loading.isLoading = false;
                        return;
                    }

                    this.handlerExport(res.data, "MDR Tracking " + param).then(
                        () => {
                            this.loading.isLoading = false;
                        }
                    );
                })
                .catch(e => {
                    console.log("Error: " + e);
                    this.loading.isLoading = false;
                    toastr.error("Undefined error");
                });
        },

        handlerExport: function(data, name) {
            return new Promise((resolve, reject) => {
                if (name == "MDR Tracking ") {
                    data.forEach(this.matchindexdfp_forexport);
                    //console.log(data);
                }

                let tmp = XLSX.utils.json_to_sheet(data);
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, name);
                XLSX.writeFile(
                    wb,
                    `${this.acreginfo}_MDR_TRACKING_${this.$route.params.pg_id}.xlsx`
                );

                resolve();
            });
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

            $("#modal-single-add").modal("show");
        },

        hideModal: function(modal_name) {
            $("#" + modal_name).modal("hide");
        },

        handlerSaveSinglMDR: function() {
            if (!this.handlerValidation()) return;
            this.form.revnr = this.$route.params.pg_id;

            this.handleButton("btn-single-add", "load").then(() => {
                axios
                    .post("/api/production_control_hangar/add_tmdr", this.form)
                    .then(res => {
                        if (res.data.success) {
                            toastr.success(res.data.message, "Success");
                            this.initData();
                            setTimeout(() => {
                                this.hideModal("modal-single-add");
                            }, 1000);
                        } else {
                            toastr.warning(res.data.message);
                        }
                        this.handleButton("btn-single-add", "stop");
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        toastr.error("Failed add item");
                        this.handleButton("btn-single-add", "stop");
                    });
            });
        },

        handlerValidation: function() {
            if (this.form.order_number == "") {
                toastr.warning("Order number field is required");
                return false;
            }
            return true;
        },

        handleButton: function(id, status) {
            let element = document.getElementById(id);
            return new Promise((resolve, reject) => {
                if (status == "load") {
                    element.className += " is-loading";
                    element.disabled = true;

                    setTimeout(() => {
                        resolve();
                    }, 500);
                } else {
                    element.className = "button";
                    element.disabled = false;
                    resolve();
                }
            });
        },

        handlerlayout: function() {
            $("#modal-layout").modal("show");
        },

        rowStyleClassFn(row) {
            if (row.SYSTEM_STATUS == "DONE") {
                return "crowdone";
            } else if (
                row.STATUS == "DONE" &&
                (row.MHRSCONF == "n" || row.MATCONS == "n")
            ) {
                return "crowwtcon";
            } else if (
                row.MHRSCONF == "y" &&
                row.MATCONS == "y" &&
                row.STATUS != "DONE"
            ) {
                return "crowwteco";
            }
        },

        permissionHandler: function() {
            this.grant_access = false;
            this.cust_access = false;
            this.dfp_access = false;

            this.$isReleased(this.$route.params.pg_id).then(res => {
                if (res) {
                    if (
                        this.$bulkCan(
                            "pc_hangar_tracking_system_edit",
                            "pc_hangar_tracking_system_edit_jc_mdr"
                        )
                    ) {
                        this.grant_access = true;
                    }
                    if (this.$can("pc_hangar_tracking_system_customer_edit")) {
                        this.cust_access = true;
                    }
                    if (this.$can("pc_hangar_tracking_system_edit_dfp")) {
                        this.dfp_access = true;
                    }
                    axios
                        .get(
                            "/api/management/job_mdr_track/linerev/" +
                                this.$route.params.pg_id
                        )
                        .then(res => {
                            const { info } = res.data;

                            const getStartEndDate = obj => {
                                let objNew = Object.assign(
                                    {},
                                    {
                                        start_date: obj.start_date,
                                        end_date: obj.end_date
                                    }
                                );

                                if (obj.end_date_new) {
                                    return Object.assign({}, objNew, {
                                        ...objNew,
                                        end_date: obj.end_date_new
                                    });
                                } else {
                                    return objNew;
                                }
                            };

                            const { start_date, end_date } = getStartEndDate(
                                info
                            );

                            function getDates(startDate, stopDate) {
                                var dateArray = [];
                                var currentDate = moment(startDate);
                                var stopDate = moment(stopDate);
                                while (currentDate <= stopDate) {
                                    dateArray.push(
                                        moment(currentDate).format("YYYY-MM-DD")
                                    );
                                    currentDate = moment(currentDate).add(
                                        1,
                                        "days"
                                    );
                                }
                                return dateArray;
                            }

                            const arrDay = [];

                            let objForDayColumn = {
                                date_plan: getDates(start_date, end_date),
                                shift: [1, 2],
                                type: ["Cabin", "System", "Structure"]
                            };

                            const permForDayColumn = [
                                {
                                    type: "Cabin",
                                    permission:
                                        "gantt_chart_view_edit_manpowercabin"
                                },
                                {
                                    type: "System",
                                    permission:
                                        "gantt_chart_view_edit_manpowersystem"
                                },
                                {
                                    type: "Structure",
                                    permission:
                                        "gantt_chart_view_edit_manpowerstructure"
                                }
                            ];

                            for (const i of permForDayColumn) {
                                if (!this.$can(i.permission)) {
                                    const idx = objForDayColumn.type.indexOf(
                                        i.type
                                    );
                                    objForDayColumn.type.splice(idx, 1);
                                }
                            }

                            objForDayColumn.date_plan.forEach((a, iii) => {
                                objForDayColumn.type.forEach((b, i) => {
                                    objForDayColumn.shift.forEach((c, ii) => {
                                        arrDay.push(
                                            JSON.parse(
                                                JSON.stringify({
                                                    label: `Day : ${iii +
                                                        1}, Type : ${b}, Shift : ${c}`,
                                                    value: {
                                                        date_plan: a,
                                                        shift: c,
                                                        type: b
                                                    }
                                                })
                                            )
                                        );
                                    });
                                });
                            });

                            arrDay.sort(function(a, b) {
                                b.value.type - a.value.type;
                            });

                            this.optionsDay = arrDay;

                            this.acreginfo = res.data.info.ac_reg;
                            this.projectinfo = res.data.info.main_type;
                            this.actypeinfo = res.data.info.ac_type;
                            this.lineinfo = res.data.info.line_id;
                            if (
                                this.lineinfo == '1' || 
                                this.lineinfo == '4' ||
                                this.lineinfo == '12' ||
                                this.lineinfo == '41'
                            ) {
                                this.sloc = '2010'
                            } else if (
                                this.lineinfo == '2' || 
                                this.lineinfo == '5' ||
                                this.lineinfo == '13'
                            ) {
                                this.sloc = '2020'
                            } else if (
                                this.lineinfo == '6' ||
                                this.lineinfo == '14'
                            ) {
                                this.sloc = '2030'
                            } else if (
                                this.lineinfo == '7' ||
                                this.lineinfo == '15'
                            ) {
                                this.sloc = '2040'
                            } else if (
                                this.lineinfo == '8' ||
                                this.lineinfo == '16'
                            ) {
                                this.sloc = '2050'
                            } else if (
                                this.lineinfo == '9' ||
                                this.lineinfo == '17'
                            ) {
                                this.sloc = '2060'
                            } else if (
                                this.lineinfo == '10' ||
                                this.lineinfo == '18'
                            ) {
                                this.sloc = '2070'
                            } else if (this.lineinfo == '19') { this.sloc = '2080' }
                            else if (this.lineinfo == '20') { this.sloc = '2090' }
                            else if (this.lineinfo == '21') { this.sloc = '2100' }
                            else if (this.lineinfo == '22') { this.sloc = '2110' }
                            else if (this.lineinfo == '23') { this.sloc = '2120' }
                            else if (this.lineinfo == '24') { this.sloc = '2130' }
                            else if (this.lineinfo == '25') { this.sloc = '2140' }
                            else if (this.lineinfo == '26') { this.sloc = '2150' }
                            this.dfpfolder = res.data.info.dfpfoldermdr;
                            //console.log(this.dfpfolder);
                            this.handlergetdfp(this.dfpfolder);
                            if (res.data.info.access == "failed") {
                                this.grant_access = false;
                            }
                        });
                }
            });

            if (this.user.role.is_customer === "y") {
                this.is_cust = true;
            }
        },

        addTag: function(newTag) {
            this.options_order.push({
                AUFNR: newTag
            });
        },

        addTagf: function(newTag) {
            this.options_finding.push({
                AUFNR: newTag
            });
        },

        clearfilterorder: function() {
            this.datatable.serverParams.filter.order = [];
        },

        initfilterOrder: function() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `/api/production_control_hangar/get_list_active_order_mdr/${this.$route.params.pg_id}`
                    )
                    .then(res => {
                        this.options_order = res.data;
                        resolve();
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        reject();
                    });
            });
        },

        filterscanneddfp: function() {
            this.clearfilterorder();
            if (this.multiselectfilteroption == "scan") {
                if (!this.options_order.length > 0) {
                    this.initfilterOrder().then(() => {
                        this.options_order.forEach(
                            this.matchindexdfp_add_to_orderfilter
                        );
                    });
                } else {
                    this.options_order.forEach(
                        this.matchindexdfp_add_to_orderfilter
                    );
                }
            } else if (this.multiselectfilteroption == "unscan") {
                if (!this.options_order.length > 0) {
                    this.initfilterOrder().then(() => {
                        this.options_order.forEach(
                            this.excindexdfp_add_to_orderfilter
                        );
                    });
                } else {
                    this.options_order.forEach(
                        this.excindexdfp_add_to_orderfilter
                    );
                }
            } else {
                this.loadItems();
            }
        },

        selectionChanged(params) {
            this.datatable.selectedRows = [];
            this.dataplanslip.selectedorder = [];
            this.dataplanslip.selectedsequence = [];
            for (let i = 0; i < params.selectedRows.length; i++) {
                this.datatable.selectedRows.push(params.selectedRows[i].ID);
                this.dataplanslip.selectedorder.push(
                    params.selectedRows[i].AUFNR
                );
                this.dataplanslip.selectedsequence.push(
                    params.selectedRows[i].SEQ_SWIFT == "" ||
                        params.selectedRows[i].SEQ_SWIFT == null
                        ? params.selectedRows[i].SEQ
                        : params.selectedRows[i].SEQ_SWIFT
                );
            }
        },

        handleUpdateStatus: function() {
            if (this.datatable.selectedRows.length < 1 || !this.grant_access)
                return;
            if (this.track_status === "") {
                toastr.warning("Please select status !");
                return;
            }

            toastr.info("Updating data ...");
            axios
                .post("/api/production_control_hangar/bulk_update_status", {
                    data: this.datatable.selectedRows,
                    status: this.track_status,
                    type: "MDR"
                })
                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                        this.track_status = "";
                        this.handlerAfterUpdate();
                    } else {
                        toastr.remove();
                        toastr.error(res.data.message);
                    }
                })
                .catch(e => {});
        },

        handleUpdatePosition: function() {
            if (this.datatable.selectedRows.length < 1 || !this.grant_access)
                return;
            if (this.update_positions === "") {
                toastr.warning("Please select position !");
                return;
            }

            toastr.info("Updating data ...");
            axios
                .post("/api/production_control_hangar/bulk_update_position", {
                    data: this.datatable.selectedRows,
                    status: this.update_positions,
                    type: "MDR"
                })
                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                        this.update_positions = "";
                        this.handlerAfterUpdate();
                    } else {
                        toastr.remove();
                        toastr.error(res.data.message);
                    }
                })
                .catch(e => {});
        },

        handleUpdateDFP: function() {
            if (this.datatable.selectedRows.length < 1 || !this.dfp_access)
                return;
            if (this.update_dfp === "") {
                toastr.warning("Please select DFP Status !");
                return;
            }
            if (this.update_dfp == "FINDING" && this.findingcateg.length == 0) {
                toastr.warning("Choose category of finding first !");
                return;
            }

            toastr.info("Updating data ...");
            axios
                .post("/api/production_control_hangar/bulk_update_dfp", {
                    data: this.datatable.selectedRows,
                    status: this.update_dfp,
                    finding: this.findingcateg,
                    dfpremark: this.dfpremark,
                    type: "MDR"
                })
                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                        this.update_dfp = "";
                        this.findingcateg = [];
                        this.dfpremark = "";
                        this.handlerAfterUpdate();
                    } else {
                        toastr.remove();
                        toastr.error(res.data.message);
                    }
                })
                .catch(e => {});
        },

        handlerAfterUpdate: function() {
            toastr.info("refreshing data ...");
            this.datatable.serverParams.searchTerm = "";
            this.datatable.serverParams.revnr = this.$route.params.pg_id;

            axios
                .post(
                    "/api/production_control_hangar/get_tmdr",
                    this.datatable.serverParams
                )
                .then(res => {
                    this.datatable.rows = res.data.data;
                    this.datatable.totalRows = res.data.total;
                    toastr.remove();
                    toastr.success("data refreshed");
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.remove();
                    toastr.error("Undefined error");
                });
        },

        handlerModalTimeline: function(data_id) {
            this.handlerTimeline(data_id).then(() => {
                $("#modal-timeline").modal("show");
            });
        },

        handlerTimeline: function(data_id) {
            return new Promise((resolve, reject) => {
                this.timelines = [];
                axios
                    .get(
                        `/api/tracking_log/get_timeline_jcmdr/${data_id}/` +
                            this.$route.params.pg_id
                    )
                    .then(res => {
                        this.timelines = res.data;
                        resolve();
                    })
                    .catch(e => {
                        toastr.error("Failed get timeline data");
                        reject();
                    });
            });
        },

        handlergetdfp: function(url) {
            if (this.dfpfolder == "" || this.dfpfolder == null) {
                this.dfp_url = [];
                //this.datatable.rows.forEach(this.matchindexdfp);
                return;
            }
            toastr.info("Connecting to Sharepoint DFP folder ...");
            axios
                .post("/api/production_control_hangar/connectdfp", {
                    urlfolder: url
                })
                .then(res => {
                    this.dfp_url = res.data.data;
                    this.datatable.rows.forEach(this.matchindexdfp);
                    toastr.remove();
                    toastr.success("DFP folder connected");
                    //console.log(res.data.data);
                    //this.datatable.rows[0].AUFNR = 'XXXXXXXX';
                    //this.datatable.rows.map(({'AUFNR'}) => ({'AUFNR'}));
                    //var el = this.dfp_url.find(a =>a.includes(this.datatable.rows[0].AUFNR));
                    //console.log(el);
                    //console.log(this.datatable.rows.map(({AUFNR}) => ({AUFNR})));
                    // = FieldJobcard.map((l) => Object.assign({}, l));
                })
                .catch(e => {
                    console.log("Error: " + e);
                    toastr.remove();
                    toastr.error("Undefined error");
                });
        },

        matchindexdfp: function(item, index) {
            $("#dfp-link-button-" + index)
                .removeAttr("href")
                .removeAttr("class");
            let url = this.dfp_url.find(a =>
                a.includes("(" + item.AUFNR + ")")
            );
            //console.log(this.dfp_url.find(a =>a.includes('('+item.AUFNR+')')));
            if (url != null) {
                $("#dfp-link-button-" + index)
                    .attr("href", url)
                    .addClass("status-handler success");
            }
            //$('#dfp-link-button-'+index).attr('href',url);

            //this.datatable.rows[index].DFPURL = this.dfp_url.find(a =>a.includes('('+item.AUFNR+')'));
            //console.log(index);
        },

        matchindexdfp_add_to_orderfilter: function(item, index, array) {
            let url = this.dfp_url.find(a =>
                a.includes("(" + item.AUFNR + ")")
            );
            if (url != null) {
                this.datatable.serverParams.filter.order.push(item);
            }
            if (index == array.length - 1) {
                this.loadItems();
            }
        },

        excindexdfp_add_to_orderfilter: function(item, index, array) {
            let url = this.dfp_url.find(a =>
                a.includes("(" + item.AUFNR + ")")
            );
            if (url == null) {
                this.datatable.serverParams.filter.order.push(item);
            }
            if (index == array.length - 1) {
                this.loadItems();
            }
        },

        matchindexdfp_forexport: function(item) {
            let url = this.dfp_url.find(a =>
                a.includes("(" + item["Order No"] + ")")
            );
            //let url = this.dfp_url.find(a =>a.includes('('+item.AUFNR+')'));
            if (url != null) {
                item.DFP_URL = url;
            } else {
                item.DFP_URL = null;
            }
        }
    }
};
</script>
