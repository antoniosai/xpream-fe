<style scoped>

    ::v-deep .rowcomplete {
        background-color: #C4F8C4;
    }

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


    ::v-deep .rad input {
    display: none;
    }
    ::v-deep .rad label {
    width: 150px;
    margin-right: 15px;
    display: inline-block;
    cursor: pointer;
    }
    ::v-deep .rad .fix {
    width: auto;
    }
    ::v-deep .rad1 span {
    /*min-height: 50px;*/
    display: block;
    padding: 5px 10px 5px 25px;
    border: 2px solid #ddd;
    border-radius: 5px;
    position: relative;
    transition: all 0.25s linear;
    }
    ::v-deep .rad1 span:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 50%;
    -webkit-transform: translatey(-50%);
            transform: translatey(-50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ddd;
    transition: all 0.25s linear;
    }
    ::v-deep .rad1 input:checked + span {
    background-color: #fff;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    }
    ::v-deep .rad1 .red input:checked + span {
    color: red;
    border-color: red;
    }
    ::v-deep .rad1 .red input:checked + span:before {
    background-color: red;
    }
    ::v-deep .rad1 .blue input:checked + span {
    color: #4b84cf;
    border-color: #4b84cf;
    }
    ::v-deep .rad1 .blue input:checked + span:before {
    background-color: #4b84cf;
    }
    ::v-deep .rad1 .green input:checked + span {
    color: #45a872;
    border-color: #45a872;
    }
    ::v-deep .rad1 .green input:checked + span:before {
    background-color: #45a872;
    }
    ::v-deep .rad1 .black input:checked + span {
    color: #000000;
    border-color: #000000;
    }
    ::v-deep .rad1 .black input:checked + span:before {
    background-color: #000000;
    }
</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li class="tab-link active" data-tab="tempstore">Sky Store Transaction</li>
                <li v-on:click="$router.push({name: 'pc_hangar.chemical_store'})" class="tab-link" data-tab="chemicalstore">Inventory</li>
                <li v-on:click="$router.push({name: 'pc_hangar.sky_store_dashboard'})" class="tab-link" data-tab="tempstoredash">Material Availability</li>
            </ul>
            <div class="card tab-content active" id="tempstore" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Material IN/OUT Transaction</h3>
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
                                            enabled: grant_access,
                                            selectOnCheckboxOnly: true
                                        }"                  
                                        :line-numbers="true"
                                        @on-search="onColumnSearch"
                                        @on-page-change="onPageChange"
                                        @on-sort-change="onSortChange"
                                        @on-column-filter="onColumnFilter"
                                        @on-per-page-change="onPerPageChange"
                                        @on-selected-rows-change="selectionChanged"
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
                                                    <div v-on:click="handlerExportTempstore()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                        <span class="tooltiptext-x">Export Excel<br>(Transit stock)</span>
                                                        <i class="material-icons warning sync_order" >file_download</i>
                                                    </div>
                                                </div>
                                                <div class="toolbar-item" style="margin-right: -8px;">
                                                    <div v-on:click="handlerExportTempstoreDaily()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#0065FF; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                        <span class="tooltiptext-x">Export Excel<br>(Daily transaction)</span>
                                                        <i class="material-icons warning sync_order" >file_download</i>
                                                    </div>
                                                </div>
                                                <div class="toolbar-item" style="margin-right: -8px;">
                                                    <button :disabled="!grant_access" v-on:click="(grant_access) ? handlerModalBulkAdd() : ''" class="button is-default">
                                                        <i class='material-icons'>
                                                            add_circle
                                                        </i>
                                                        Bulk Insert
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
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button :disabled="!grant_access" v-on:click="handlerModalSingleAdd()" class="button is-danger">
                                                        <i class='material-icons'>
                                                            add_circle
                                                        </i>
                                                        Single Add
                                                    </button>
                                                </div>
                                                <!--
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                     <button :disabled="!grant_access" v-on:click="handlerModalImport()" class="button is-success">
                                                        <i class='material-icons'>
                                                            insert_drive_file
                                                        </i>
                                                        Import from Excel
                                                    </button>
                                                </div>
                                                -->
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
                                            <span v-if="props.column.field == 't_pn'">
                                                <input :disabled="!grant_access" style="min-width: 175px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-part-number-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_pn','crm-track-part-number-' +props.index)">
                                            </span>
                                             <span v-else-if="props.column.field == 't_to'">
                                                <input :disabled="!grant_access" style="min-width: 125px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-to-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_to','crm-track-to-' +props.index)">
                                            </span>                                           
                                            <span v-else-if="props.column.field == 't_batch'">
                                                <input :disabled="!grant_access" style="min-width: 95px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-batch-number-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_batch','crm-track-batch-number-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 't_aufnr'">
                                                <span v-if="props.formattedRow[props.column.field] != null || props.formattedRow[props.column.field] != ''">
                                                </span>
                                                <input :disabled="!grant_access" style="min-width: 100px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-order-number-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_order','crm-track-order-number-' +props.index)">                                              
                                            </span>
                                            <span v-else-if="props.column.field == 't_revnr'">
                                                {{props.formattedRow[props.column.field]}}
                                             </span>
                                            <span v-else-if="props.column.field == 'r_acreg'">
                                                <span class="flex-middle-default" v-if="props.formattedRow['t_aufnr'] != null && props.formattedRow['t_aufnr'] !=''">
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                                <span v-else>
                                                    <input :disabled="!grant_access" style="min-width: 100px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-acreg-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_reg','crm-track-acreg-' +props.index)">
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'o_systatus'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>                                                                                                                                    
                                            <span v-else-if="props.column.field == 't_rmk'">
                                                <input :disabled="!grant_access" style="min-width: 180px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-remark-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_rmk','crm-track-remark-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 't_qty'">
                                                <input :disabled="!grant_access" style="min-width: 40px;" type="number" :value="props.formattedRow[props.column.field]" :id="'crm-track-qty-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_qty','crm-track-qty-' +props.index)">
                                            </span>
                                            <span v-else-if="props.column.field == 't_tag'">
                                                <input :disabled="!grant_access" style="min-width: 115px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-tag-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_tag','crm-track-tag-' +props.index)">
                                            </span> 
                                            <span v-else-if="props.column.field == 't_empid'">
                                                <input :disabled="!grant_access" style="min-width: 80px;" :value="props.formattedRow[props.column.field]" :id="'crm-track-empid-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_empid','crm-track-empid-' +props.index)">
                                            </span>                                                                                                                                  
                                            <span v-else-if="props.column.field == 't_inout'">
                                                <select :disabled="!grant_access" style="min-width: 70px;" :id="'crm-track-inout-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_inout','crm-track-inout-' +props.index)">
                                                    <option :selected="props.formattedRow[props.column.field] == 'IN'" value="IN">IN</option>
                                                    <option disabled style="color:red;" :selected="props.formattedRow[props.column.field] == 'OUT'" value="OUT">OUT</option>
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 't_outin'">
                                                <select :disabled="!grant_access" style="min-width: 70px;" :id="'crm-track-outin-' +props.index" v-on:change="handlerEditOut(props.formattedRow['track_id'],'crm-track-outin-' +props.index, props.formattedRow['t_pn'], props.formattedRow['t_aufnr'], props.formattedRow['t_qty'])">
                                                    <option value=""></option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'OUT'" value="OUT">OUT</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'RWS'" value="OUT">RWS</option>
                                                </select>
                                            </span>                                            
                                            <span v-else-if="props.column.field == 't_location'">
                                                <select v-model="props.row.t_location" :disabled="!grant_access" style="min-width: 220px;" :id="'crm-track-location-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['track_id'], 't_location','crm-track-location-' +props.index)">
                                                    <option :disabled="op.disabled" v-for="(op,idx) in option_location.filter((d) => hangar_id.includes(d.hangar_id))" :key="idx" :value="op.name">
                                                        {{ op.name }}
                                                    </option>
                                                    <!--option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L01'" value="BANGKA ROOM L01">BANGKA ROOM L01</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L02'" value="BANGKA ROOM L02">BANGKA ROOM L02</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L03'" value="BANGKA ROOM L03">BANGKA ROOM L03</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L04'" value="BANGKA ROOM L04">BANGKA ROOM L04</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L05'" value="BANGKA ROOM L05">BANGKA ROOM L05</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L06'" value="BANGKA ROOM L06">BANGKA ROOM L06</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L07'" value="BANGKA ROOM L07">BANGKA ROOM L07</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L08'" value="BANGKA ROOM L08">BANGKA ROOM L08</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L09'" value="BANGKA ROOM L09">BANGKA ROOM L09</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L10'" value="BANGKA ROOM L10">BANGKA ROOM L10</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L11'" value="BANGKA ROOM L11">BANGKA ROOM L11</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L12'" value="BANGKA ROOM L12">BANGKA ROOM L12</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L13'" value="BANGKA ROOM L13">BANGKA ROOM L13</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L14'" value="BANGKA ROOM L14">BANGKA ROOM L14</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM L15'" value="BANGKA ROOM L15">BANGKA ROOM L15</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM INVENTORY'" value="BANGKA ROOM INVENTORY">BANGKA ROOM INVENTORY</option>
                                                    <option :selected="props.formattedRow[props.column.field] == 'BANGKA ROOM FLOOR AREA'" value="BANGKA ROOM FLOOR AREA">BANGKA ROOM FLOOR AREA</option-->                                                                                                                                                           
                                                                                                                                                           
                                                </select>
                                            </span>
                                            <span v-else-if="props.column.field == 't_timestamp'">
                                                <input :disabled="!grant_access" style="width: 120px;" :value="props.formattedRow[props.column.field] == null ? '' :  props.formattedRow[props.column.field].substring(0, 10)" type="date" :id="'crm-track-date-t_timestamp' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'date','t_timestamp')">
                                                <input :disabled="!grant_access" style="width: 100px;" type="time" :value="props.formattedRow[props.column.field] == null ? '' : props.formattedRow[props.column.field].substring(11, 16)" :id="'crm-track-time-t_timestamp' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'time','t_timestamp')">
                                            </span>
                                            <span v-else-if="props.column.field == 't_dateout'">
                                                <input :disabled="!grant_access" style="width: 120px;" :value="props.formattedRow[props.column.field] == null ? '' :  props.formattedRow[props.column.field].substring(0, 10)" type="date" :id="'crm-track-date-t_dateout' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'date','t_dateout')">
                                                <input :disabled="!grant_access" style="width: 100px;" type="time" :value="props.formattedRow[props.column.field] == null ? '' : props.formattedRow[props.column.field].substring(11, 16)" :id="'crm-track-time-t_dateout' +props.index" v-on:change="handlerUpdateDataDate(props.formattedRow['track_id'], props.index, 'time','t_dateout')">
                                            </span>                                            
                                            <span v-else-if="props.column.field == 't_user'">
                                                {{props.formattedRow[props.column.field]}}
                                            </span>                                                                                        
                                            <span v-else-if="props.column.field == 'action'">
                                                <div class="action tooltip-x" style="text-align: center; width: 100%;">
                                                    <span class="tooltiptext-x">Delete Item</span>
                                                    <i v-if="!grant_access" style="font-size: 10pt; font-weight: bold;" class="material-icons default">delete</i>
                                                    <i v-else v-on:click="handlerDeleteItem(props.formattedRow['track_id'])" style="font-size: 10pt; font-weight: bold;" class="material-icons danger">delete</i>
                                                </div>
                                            </span>
                                            <span v-else-if="props.column.field == 'mrm_isupdated'">
                                                <span v-if="props.formattedRow[props.column.field] == 1">
                                                    updated
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
         <!-- modal import 
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
                
            </div>
        </div>-->
        <!-- /modal import -->
        <!-- modal single add -->
        <div class="modal-box" id="modal-single-add" data-keyboard="false" data-backdrop="static">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('modal-single-add')"></span>
                    <div class="modal-header">
                        <h2 class="title">Incoming Material Transaction</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Input data
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-20">
                                <input v-model="form.to_number" value="" type="text"> 
                                <div class="is-desc">TO Number <!--<span class="is-req">*</span>--></div>
                            </div>                            
                            <div class="form-item is-col is-20">
                                <input v-model="form.part_number" value="" type="text"> 
                                <div class="is-desc">Part Number </div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.batch_number" value="" type="text"> 
                                <div class="is-desc">Batch Number </div>
                            </div> 
                            <div class="form-item is-col is-20">
                                <input v-model="form.tag" value="" type="text"> 
                                <div class="is-desc">Tag Number</div>
                            </div>
                        </div>
                        <div class="is-row">                                                       
                            <div class="form-item is-col is-20">
                                <input v-model="form.order_number" @keyup="handlercheckorder" value="" type="text" id="modal_add_form_order_no"> 
                                <div class="is-desc">Order Number </div>
                            </div>
                            <div class="form-item is-col is-10">
                                <input :hidden="checkorder" v-model="form.ac_reg" value="" type="text" class="modal_add_acreg"> 
                                <div :hidden="checkorder" class="is-desc modal_add_acreg">A/C Reg </div>
                            </div>                            
                            <div class="form-item is-col is-10">
                                <input v-model="form.qty" value="" type="number"> 
                                <div class="is-desc">Qty</div>
                            </div>                            
                            <!-- div class="form-item is-col is-20">
                                <input readonly v-model="form.empid" value="" type="text"> 
                                <div readonly class="is-desc">Received By</div>
                            </div--> 
                            <div class="form-item is-col is-40">
                                <textarea v-model="form.remark" rows="2"></textarea>
                                <div class="is-desc">Remark</div>
                            </div>
                        </div>
                        <div class="is-row">                                                                                                
                            <div class="form-item is-col is-80 rad rad1">         
                                <label class="radio black" v-for="(op,idx) in option_location.filter((d) => hangar_id.includes(d.hangar_id) && d.disabled !== true)" :key="idx">
                                    <input v-model="form.location" :value="op.name" :id="'rloc'+idx+1" type="radio" >
                                    <span >{{ op.name }}</span>
                                </label>
                                <!--label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L02" id="rloc2" type="radio">
                                    <span>L02</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L03" id="rloc3" type="radio">
                                    <span>L03</span>
                                </label>   
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L04" id="rloc4" type="radio">
                                    <span>L04</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L05" id="rloc5" type="radio">
                                    <span>L05</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L06" id="rloc6" type="radio">
                                    <span>L06</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L07" id="rloc7" type="radio">
                                    <span>L07</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L08" id="rloc8" type="radio">
                                    <span>L08</span>
                                </label><br>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L09" id="rloc9" type="radio">
                                    <span>L09</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L10" id="rloc10" type="radio">
                                    <span>L10</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L11" id="rloc11" type="radio">
                                    <span>L11</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L12" id="rloc12" type="radio">
                                    <span>L12</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L13" id="rloc13" type="radio">
                                    <span>L13</span>
                                </label>
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L14" id="rloc14" type="radio">
                                    <span>L14</span>
                                </label>   
                                <label class="radio black">
                                    <input v-model="form.location" value="H4- Local Store L15" id="rloc15" type="radio">
                                    <span>L15</span>
                                </label>
                                <label class="radio black fix">
                                    <input v-model="form.location" value="H4- Local Store INVENTORY" id="rloc16" type="radio">
                                    <span>INVENTORY</span>
                                </label>
                                <label class="radio black fix">
                                    <input v-model="form.location" value="H4- Local Store FLOOR AREA" id="rloc17" type="radio">
                                    <span>FLOOR AREA</span>
                                </label-->                                                              
                                <div class="is-desc">Location</div>                                
                            </div>                             
                            <div class="form-item is-col is-20">
                                <input style="width: 128px;" v-model="form.date" value="" type="date"> 
                                <input style="width: 70px;" v-model="form.time" value="" type="time"> 
                                <div class="is-desc">Datetime</div>
                            </div> 
                             <div hidden class="form-item is-col is-20">
                                    <input hidden v-model="form.inout" value="IN" id="rinout1" type="text">
                                    <div class="is-desc">IN/OUT</div>
                             </div>
                            <div class="form-item is-col is-20" hidden>
                                <input v-model="form.usr" value="">
                                <div class="is-desc">User</div>
                            </div> 
                            
                                                                                 
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-single-add')">Close</button>
                        <button v-on:click="handlerSaveSingleCRM()" class="button is-success" type="submit" id="btn-single-add"> Save </button>
                    </div>
                
            </div>
        </div>

        <div class="modal-box" id="modal-bulk-add" data-keyboard="false" data-backdrop="static">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-bulk-add')"></span>
                <div class="modal-header">
                    <h2 class="title">Bulk Add Data</h2>
                </div>
                <div class="modal-body" style="position: relative">
                    <label>
                        Add data <span class="is-req">*</span>
                    </label>
                    <div class="is-row">
                        <div class="form-item is-col is-100">
                            <input ref="file_bulk_add" id="file_bulk_add" style="all: unset" type="file"  v-on:change="onChangeBulkFileUpload()"> 
                            <div class="is-desc">Required .xlsx file</div>
                        </div>
                        <div class="form-item is-col is-100">
                            <i style="font-size: 11pt;" class='material-icons'>
                                attach_file
                            </i>
                            <a href="/export/template_localstore.xlsx">Download Template</a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="">
                    <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-bulk-add')">Close</button>
                    <button v-on:click="handlerBulkAdd()" class="button is-success" type="submit" id="btn-bulk-add"> Save </button>
                </div>
            </div>
        </div>

        <!-- /modal single add -->
        <!--modal edit OUT-->
        <div class="modal-box" id="modal-edit-out" data-keyboard="false" data-backdrop="static">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-edit-out')"></span>
                    <div class="modal-header">
                        <h2 class="title">Outgoing Material <span id="title-modal-out"></span></h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <div class="is-row">
                             <div class="form-item is-col is-20">
                                <input v-model="outmodal.t_empid" value="" type="text"> 
                                <div class="is-desc">Received By</div>
                            </div> 
                            <div class="form-item is-col is-20">
                                <textarea v-model="outmodal.t_rmk" rows="2"></textarea>
                                <div class="is-desc">Remark</div>
                            </div>                                                                                                                           

                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-edit-out')">Close</button>
                        <button v-on:click="handlerUpdateDataOut" class="button is-success" type="submit" id="btn-update-out"> Save </button>
                    </div>    
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
import FieldTempstore from './Project/datatable/FieldTempstore';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import XLSX from 'xlsx';

export default {
    data: () => ({
        loading: {
            isLoading: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        outid: "",
        outaufnr: "",
        outmatnr: "",
        outqty: "",
        outmodal: {            
            t_outin: "",
            t_empid: "",
            t_rmk: "",
            t_dateout: ""
        },
        datatable: {
            fields: FieldTempstore,
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
                hangarid: [],
                filter: {},
                //revnr: "",
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },
        data_import: {
            file: ""
        },

        stats: [],

        form: {
            to_number: "",
            part_number: "",
            batch_number: "",
            order_number: "",
            remark: "",
            qty: "",
            tag: "",
            empid: "",
            inout: "",
            location: "",
            date: "",
            time: "",
            datetime: "",
            usr: "",
            
        },
        columns: [
            {
                id: 19,
                label: 'All Columns',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 0,
                label: 'In',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 1,
                label: 'Out',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 2,
                label: 'A/C Reg',
                status: 'HIDE',
                hidden: false,
            },            
            {
                id: 3,
                label: 'Part Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 4,
                label: 'Part Desc',
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
                label: 'Received By',
                status: 'HIDE',
                hidden: false,
            }, 
            {
                id: 7,
                label: 'TO Number',
                status: 'HIDE',
                hidden: false,
            },                                
            {
                id: 8,
                label: 'Batch Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 9,
                label: 'Order Number',
                status: 'HIDE',
                hidden: false,
            },           
            {
                id: 10,
                label: 'Rev Number',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 11,
                label: 'Sys Status',
                status: 'HIDE',
                hidden: false,
            },
            {
                id: 12,
                label: 'Remark',
                status: 'HIDE',
                hidden: false,
            },
             {
                id: 13,
                label: 'Qty',
                status: 'HIDE',
                hidden: false,
            },   
             {
                id: 14,
                label: 'Tag',
                status: 'HIDE',
                hidden: false,
            }, 
             {
                id: 15,
                label: 'Date In',
                status: 'HIDE',
                hidden: false,
            }, 
             {
                id: 16,
                label: 'Date Out',
                status: 'HIDE',
                hidden: false,
            },  
             {
                id: 17,
                label: 'Action',
                status: 'HIDE',
                hidden: false,
            },             
             {
                id: 18,
                label: 'Last Modified By',
                status: 'HIDE',
                hidden: false,
            },             
        ],
        grant_access: false,
        checkorder: false,
        data_bulk_add: "",
        hangar_id: [],
        option_location: [
            {hangar_id: '1', name: 'H1- FLC Room', disabled: false},
            {hangar_id: '1', name: 'H1- GAH1 1000', disabled: false},
            {hangar_id: '1', name: 'H1- Transit Area', disabled: false},
            {hangar_id: '1', name: 'H1- Segregasi Line 1', disabled: false},
            {hangar_id: '1', name: 'H1- Segregasi Line 2', disabled: false},
            {hangar_id: '1', name: 'H1- Chemical Store', disabled: false},
            {hangar_id: '2', name: 'H3- FLC Room', disabled: false},
            {hangar_id: '2', name: 'H3- GAH3 1000', disabled: false},
            {hangar_id: '2', name: 'H3- Holding Room Line 1', disabled: false},
            {hangar_id: '2', name: 'H3- Holding Room Line 2', disabled: false},
            {hangar_id: '2', name: 'H3- Holding Room Line 3', disabled: false},
            {hangar_id: '2', name: 'H3- Layout Area Line 1', disabled: false},
            {hangar_id: '2', name: 'H3- Layout Area Line 2', disabled: false},
            {hangar_id: '2', name: 'H3- Layout Area Line 3', disabled: false},
            {hangar_id: '2', name: 'H3- Segregasi', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L01', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L02', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L03', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L04', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L05', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L06', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L07', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L08', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L09', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L10', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L11', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L12', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L13', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L14', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store L15', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store Inventory', disabled: false},
            {hangar_id: '3', name: 'H4- Local Store Floor Area', disabled: false},
            {hangar_id: '3', name: 'BANGKA ROOM L01', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L02', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L03', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L04', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L05', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L06', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L07', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L08', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L09', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L10', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L11', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L12', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L13', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L14', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM L15', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM INVENTORY', disabled: true},
            {hangar_id: '3', name: 'BANGKA ROOM FLOOR AREA', disabled: true},
        ]
    }),

    components: {
        Loading, 
        VueGoodTable,
        'multiselect': Multiselect,
    },

    mounted() {
        this.permissionHandler();
        this.initData();
        this.handlerDateColumns();
        this.handlercheckorder();
    },

    methods: {
        handlerModalBulkAdd: function() {
            this.data_bulk_add = "";
            document.getElementById("file_bulk_add").value = "";

            $('#modal-bulk-add').modal('show');

        },
        onChangeBulkFileUpload: function(){
            if(document.getElementById("file_bulk_add").files.length != 0 ){
                this.data_bulk_add = this.$refs.file_bulk_add.files[0];
            }
        },
        handlerBulkAdd: function() {
            if(!this.grant_access) return;
            if(this.data_bulk_add == "") {
                toastr.warning("File import can't be empty");
                return ;
            }

            this.handleButton('btn-bulk-add', 'load').then(() => {
                let formData = new FormData();
                formData.append('user', JSON.parse(localStorage.getItem('user')).name);
                formData.append('file', this.data_bulk_add);

                axios.post('/api/production_control_hangar/crm/bulk_add_skystore', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                .then(res => {
                    if(res.data.success) {
                        let tmp = XLSX.utils.json_to_sheet(res.data.data)                 
                        let wb = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(wb, tmp, 'Insert Log')
                        XLSX.writeFile(wb, `temp_store_log.xlsx`)

                        toastr.success(res.data.message, 'Success')
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-bulk-add');
                        }, 1000)
                    }else {
                        setTimeout(() => {
                            toastr.warning(res.data.message);
                        }, 100)
                        toastr.warning(res.data.data);
                    }
                    this.handleButton('btn-bulk-add', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    toastr.error("Undefined error");
                    this.handleButton('btn-bulk-add', 'stop');

                })
            })
        },
        initData:  function() {
            this.hangar_id = Object.values(JSON.parse(localStorage.getItem('user')).hangar_id);
            
            // console.log(this.option_location.filter((d) => this.hangar_id.includes(d.hangar_id)))
            this.datatable.serverParams.hangarid = this.hangar_id;
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            //this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/crm/get_ttempstore', this.datatable.serverParams)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data`)
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
        selectionChanged(params) {
            this.datatable.selectedRows = [];
            for(let i = 0; i < params.selectedRows.length; i++) {
                this.datatable.selectedRows.push(params.selectedRows[i].ID);
            }
        },
        /**
         * load items is what brings back the rows from server
         */
        loadItems() {
            this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                this.loading.isLoading = false;
            });
            
        },
        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },
        

        handleDatatableChange: function(params) {
            //this.datatable.serverParams.revnr = this.$route.params.pg_id;
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {

                axios.post('/api/production_control_hangar/crm/get_ttempstore', params)
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
/*
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
/*
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
*/
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

        handlerEditOut: function(id, elem, opn, oaufnr, oqty) {
            this.outid = "";
            this.outmodal.t_outin = "";
            this.outmodal.t_dateout = "";

            let elm = document.getElementById(elem).value;
            if(elm != ''){
                this.outmatnr = opn;
                this.outaufnr = oaufnr;
                this.outqty = oqty;

                this.outid = id;
                this.outmodal.t_outin = elm;
                var now = new Date();
                var todayhour   = now.getHours();
                var todayminute = now.getMinutes();
                var todaysecond = now.getSeconds();
                var todaydate = now.getDate();
                var todaymonth = now.getMonth()+1;
                var todayyear = now.getFullYear();
                if (todaydate < 10) { todaydate = "0" + todaydate; }
                if (todaymonth < 10) { todaymonth = "0" + todaymonth; }
                if (todayhour < 10) { todayhour = "0" + todayhour; }
                if (todayminute < 10) { todayminute = "0" + todayminute; }              
                this.outmodal.t_dateout =  todayyear+'-'+todaymonth+'-'+todaydate+' '+todayhour+':'+todayminute; 
                $('#modal-edit-out').modal('show');
            }
            else{
                this.handlerUpdateData(id, 't_outin', elem);
            }
        },

        handlerUpdateDataOut: function(id) {
            if(!this.grant_access) return;
            this.loading.isLoading = true;
            axios.post('/api/production_control_hangar/crm/update_ttempstoreout', {
                id: this.outid,
                t_outin: this.outmodal.t_outin,
                t_empid: this.outmodal.t_empid,
                t_rmk: this.outmodal.t_rmk,
                t_dateout: this.outmodal.t_dateout,
                usrupdate: JSON.parse(localStorage.getItem('user')).name
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                        this.loading.isLoading = false;
                    });
                }else {
                    toastr.error(res.data.message);
                }
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: " + e);
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            });
            axios.post('/api/production_control_hangar/validate_tmrm_tempstoreout', {
                aufnr : this.outaufnr,
                matnr : this.outmatnr,
                daterec : this.outmodal.t_dateout,
                received_by : this.outmodal.t_empid,
                qtyins : this.outqty,
                //matfulstat : 10
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message, 'Success')
                }else {
                    toastr.warning(res.data.message)
                }
            })
            .catch(e => {
                console.log("Error: "+e)
            })            

            this.hideModal('modal-edit-out');
        },


        handlerUpdateData: function(id, column, elem) {
            if(!this.grant_access) return;
            this.loading.isLoading = true;
            let elm = document.getElementById(elem).value;

            axios.post('/api/production_control_hangar/crm/update_ttempstore', {
                id: id,
                column: column,
                data: elm,
                usrupdate: JSON.parse(localStorage.getItem('user')).name
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                        this.loading.isLoading = false;
                    });
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
            if (todayhour < 10) { todayhour = "0" + todayhour; }
            if (todayminute < 10) { todayminute = "0" + todayminute; }
            this.form.to_number = "";
            this.form.part_number = "";
            this.form.batch_number = "";
            this.form.order_number = "";
            this.form.qty = "";
            this.form.ac_reg = "";
            this.form.tag = "";
            this.form.empid = "";
            this.form.inout = "IN";
            this.form.location = "";
            this.form.date = todayyear+'-'+todaymonth+'-'+todaydate;
            this.form.time = todayhour+':'+todayminute;
            this.form.datetime = "";
            this.form.remark = "";
            this.form.usr = JSON.parse(localStorage.getItem('user')).name;

            this.checkorder = false;
            $('#modal-single-add').modal('show');

        },

        handlerSaveSingleCRM: function() {
            if(!this.validateAddCRM()) return;

            if(this.form.date != "") {
                this.form.datetime = this.form.date + " " + this.form.time;
            }

             this.handleButton('btn-single-add', 'load').then(() => {

                axios.post('/api/production_control_hangar/crm/add_ttempstore', this.form)
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        // this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-single-add');
                        }, 1000)
                        this.updateMRMafterAdd(res.data.data)
                    }else {
                        toastr.warning(res.data.message)
                    }
                    this.handleButton('btn-single-add', 'stop');

                })
                .catch(e => {
                    console.log("Error: "+e)
                    this.handleButton('btn-single-add', 'stop');

                })
            });
        },

        updateMRMafterAdd: function(id) {
            axios.post('/api/production_control_hangar/validate_tmrm_tempstore', {
                aufnr : this.form.order_number,
                matnr : this.form.part_number,
                datepl : this.form.datetime,
                //matfulstat : 11,
                qtydel : this.form.qty,
                part_location : this.form.location,
                skystoreid : id
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message, 'Success')
                    this.initData();
                }else {
                    toastr.warning(res.data.message)
                    this.initData();
                }
            })
            .catch(e => {
                console.log("Error: "+e)
                this.initData();
            })
        },   

        validateAddCRM: function() {
            if(this.form.location === ""){
                toastr.warning("Location field can't be empty");
                return false;
            }

            if(this.form.inout === ""){
                toastr.warning("IN/OUT field can't be empty");
                return false;
            }

            if(this.form.part_number === ""){
                toastr.warning("Part number field can't be empty");
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
        handlerExportTempstoreDaily: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/crm/export_tempstore_daily`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'Daily Transaction').then(() => {
                    this.loading.isLoading = false;
                });
            })
            .catch(e => {
                console.log("Error: " + e);
                this.loading.isLoading = false;
                toastr.error("Undefined error")
            })
        },

        handlerExportTempstore: function() {
            this.loading.isLoading = true;
            axios.get(`/api/production_control_hangar/crm/export_tempstore`)
            .then(res => {
                if(res.data.length < 1) {
                    toastr.warning("Data not available");
                    this.loading.isLoading = false;
                    return;
                }

                this.handlerExport(res.data, 'Transit Stock').then(() => {
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
                XLSX.writeFile(wb, `temp_store.xlsx`)

                resolve();
            })
        },

        handlerUpdateDataDate: function(id, index, type, col) {
            let elem_date = document.getElementById('crm-track-date-'+col+index).value;
            let elem_time = document.getElementById('crm-track-time-'+col+index).value;
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
                column: col,
                data: datetime,
            })
            .then(res => {
                if(res.data.success) {
                    toastr.success(res.data.message);
                    this.handleDatatableChange(this.datatable.serverParams).then(()=> {
                    this.loading.isLoading = false;
                    });
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
                    axios.get('/api/production_control_hangar/crm/deletetempstore/' + id)
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
        handlercheckorder: function(){
            if(this.form.order_number != ''){
                this.checkorder = true;
            }
            else{
              this.checkorder = false;
            }
        },
        rowStyleClassFn(row) {
            //return 'rowcomplete';
            //return console.log(row.t_outin);
            if(row.t_outin !== null && row.t_outin !==''){
                return 'rowcomplete';
            }
        },


        permissionHandler: function() {
            this.grant_access = false;

            if(this.$can('pc_hangar_temporary_store')) {
                this.grant_access = true;
            }
        },

        handlerDateColumns: function() {
            var el_1 = $('*[placeholder="Date In"]');
            var el_2 = $('*[placeholder="Date Out"]');
            el_1[0].type = 'date';
            el_2[0].type = 'date';
        },

    }
}
</script>

