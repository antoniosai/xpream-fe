<style scoped>
    /* table */
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

    ::v-deep .rad input {
        display: none;
    }

    ::v-deep .rad label {
        width: 65px;
        margin-right: 15px;
        display: inline-block;
        cursor: pointer;
    }

    ::v-deep .rad .fix {
        width: auto;
    }

    ::v-deep .rad1 span {
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

    ::v-deep .qty-default {
        color: unset;
    }

    ::v-deep .qty-danger {
        color: red;
    }

    ::v-deep .qty-success {
        color: green;
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
    <div>
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li v-on:click="$router.push({name: 'pc_hangar.sky_store'})" class="tab-link" data-tab="tempstore">Sky Store Transaction</li>
                <li class="tab-link active" data-tab="chemicalstore">Inventory</li>
                <li v-on:click="$router.push({name: 'pc_hangar.sky_store_dashboard'})" class="tab-link" data-tab="tempstoredash">Material Availability</li>
            </ul>
            <div class="card tab-content active" id="tempstore" style="border-radius: 0px 8px 8px 8px;">
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Master Data Stock</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                        </div>
                    </div>
                </div>

                <div class="card-content">
                    <div style="box-sizing: border-box; position: relative; min-height: 20px;">
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
                                        ref="table-chemical-store"
                                        :columns="datatable.fields"
                                        :rows="datatable.rows"
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
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button v-on:click="initData()" class="button">
                                                        <i class='material-icons'>
                                                            sync
                                                        </i>
                                                        Refresh
                                                    </button>                                                   
                                                </div> 
                                                 <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button v-on:click="handlerModalIncomingPart()" class="button is-success">
                                                        <i class='material-icons'>
                                                            vertical_align_bottom
                                                        </i>
                                                        IN
                                                    </button>                                                   
                                                </div>                                                 
                                                <!--div class="toolbar-item" style="margin-right: 10px;">
                                                    <button v-on:click="handlerModalOutgoingPart()" :disabled="!grant_access"  class="button is-warning">
                                                        <i class='material-icons'>
                                                            vertical_align_top
                                                        </i>
                                                        OUT
                                                    </button>
                                                </div-->
                                            </div>
                                        </div>

                                        <template slot="table-row" slot-scope="props">
                                            <span v-if="props.column.field == 'part_number'">
                                                <input v-if="hasAccess" :value="props.formattedRow[props.column.field]" :id="'inventory-part-number-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['id'], 'part_number', 'inventory-part-number-' +props.index)" type="text">
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'qty'">
                                                <input v-if="hasAccess" :value="props.formattedRow[props.column.field]" :id="'inventory-qty-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['id'], 'qty', 'inventory-qty-' +props.index)" type="text">
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'url_attachment'">
                                                <input style="width: 300px;" :disabled="!hasAccess" :value="props.formattedRow[props.column.field]" :id="'inventory-url-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['id'], 'url_attachment', 'inventory-url-' +props.index)" type="text">
                                                <button v-on:click="handlerOpenLink(props.formattedRow[props.column.field])" style="height: 27px;" class="button is-default">
                                                    <i class='material-icons'>
                                                        insert_link
                                                    </i> Open
                                                </button>
                                            </span>
                                            <span v-else-if="props.column.field == 'location_name'">
                                                <select 
                                                    v-if="hasAccess" 
                                                    v-model="datatable.rows[props.index].id_location" 
                                                    :id="'inventory-location-' +props.index" 
                                                    v-on:change="handlerUpdateData(props.formattedRow['id'], 'id_location', 'inventory-location-' +props.index)"
                                                >
                                                    <option value="">Select Option</option>
                                                    <option v-for="location in locations" :key="location.id" :value="location.id">{{location.location_name}}</option>
                                                </select>
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'min'">
                                                <input v-if="hasAccess" :value="props.formattedRow[props.column.field]" :id="'inventory-min-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['id'], 'min', 'inventory-min-' +props.index)" type="number">
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'max'">
                                                <input v-if="hasAccess" :value="props.formattedRow[props.column.field]" :id="'inventory-max-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['id'], 'max', 'inventory-max-' +props.index)" type="number">
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'batch'">
                                                <input v-if="hasAccess" :value="props.formattedRow[props.column.field]" :id="'inventory-batch-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['id'], 'batch', 'inventory-batch-' +props.index)" type="number">
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'expired'">
                                                <input v-if="hasAccess" :value="props.formattedRow[props.column.field]" :id="'inventory-expired-' +props.index" v-on:change="handlerUpdateData(props.formattedRow['id'], 'expired', 'inventory-expired-' +props.index)" type="date">
                                                <span v-else>
                                                    {{props.formattedRow[props.column.field]}}
                                                </span>
                                            </span>
                                            <span v-else-if="props.column.field == 'action'">
                                                <!--button v-if="!grant_access"  class="button is-default" style="padding-top:0px; padding-bottom:0px; line-height:0px;"></button>
                                                <button v-else v-on:click="handlerModalIncomingPart(props.formattedRow['part_number'],props.formattedRow['id_location'])" class="button is-success is-secondary" style="padding-top:0px; padding-bottom:0px; line-height:0px;">IN</button-->

                                                <button v-if="!grant_access || props.formattedRow['qty']==0" class="button is-default" style="padding-top:0px; padding-bottom:0px; line-height:0px;"></button>
                                                <button v-else v-on:click="handlerModalOutgoingPart(props.formattedRow['part_number'],props.formattedRow['batch'],props.formattedRow['id_location'])" class="button is-warning is-secondary" style="padding-top:0px; padding-bottom:0px; line-height:0px;">OUT</button>

                                                <button class="button is-default" style="padding-top:0px; padding-bottom:0px; line-height:0px;"></button>
                                                <button v-if="grant_access" v-on:click="handlerDeleteItem(props.formattedRow['id'])" class="button is-danger is-secondary" style="padding-top:0px; padding-bottom:0px; line-height:0px;"><i class="material-icons">clear</i></button>
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
                <br><br>         
                <div class="card-header">
                    <div class="title-area">
                        <h3 class="title">Inventory Transaction</h3>
                    </div>
                    <div class="option-box">
                        <div class="option-item">
                        </div>
                    </div>
                </div>

                <div class="card-content">

                    <div style="box-sizing: border-box; position: relative; min-height: 20px;">
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
                                        ref="table-chemical-master"
                                        :columns="datatable2.fields"
                                        :rows="datatable2.rows"
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
                                        @on-selected-rows-change="selectionChanged"
                                        :totalRows="datatable2.totalRows"
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
                                            <!--div class="toolbar toolbar-default">
                                                <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button v-on:click="initData()" class="button">
                                                        <i class='material-icons'>
                                                            sync
                                                        </i>
                                                        Refresh
                                                    </button>                                                   
                                                </div> 
                                                 <div class="toolbar-item" style="margin-right: -10px;">
                                                    <button v-on:click="handlerModalIncomingPart()" class="button is-success">
                                                        <i class='material-icons'>
                                                            vertical_align_bottom
                                                        </i>
                                                        IN
                                                    </button>                                                   
                                                </div>                                                 
                                                <div class="toolbar-item" style="margin-right: 10px;">
                                                    <button v-on:click="handlerModalOutgoingPart()" :disabled="!grant_access"  class="button is-danger">
                                                        <i class='material-icons'>
                                                            vertical_align_top
                                                        </i>
                                                        OUT
                                                    </button>
                                                </div>
                                            </div-->
                                        </div>
                                    </vue-good-table>

                                </div>
                            </template>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>
        <!-- modal incoming part -->
        <div class="modal-box" id="modal-incoming-part" data-keyboard="false" data-backdrop="static">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('modal-incoming-part')"></span>
                    <div class="modal-header">
                        <h2 class="title">Incoming Part</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Input data
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-25">
                                <input v-model="form.to_number" value="" type="text"> 
                                <div class="is-desc">TO Number</div>
                            </div>                            
                            <div class="form-item is-col is-25">
                                <input v-model="form.part_number" value="" type="text"> 
                                <div class="is-desc">Part Number <span class="is-req">*</span></div>
                            </div>
                            <div class="form-item is-col is-20">
                                <input v-model="form.batch_number" value="" type="text"> 
                                <div class="is-desc">Batch Number </div>
                            </div> 
                            <div class="form-item is-col is-30">
                                <input v-model="form.tag" value="" type="text"> 
                                <div class="is-desc">Tag Number</div>
                            </div>
                        </div>
                        <div class="is-row">                                                       
                            <!--div class="form-item is-col is-25">
                                <input v-model="form.order_number" @keyup="handlercheckorder" value="" type="text" id="modal_add_form_order_no"> 
                                <div class="is-desc">Order Number </div>
                            </div>
                            <div class="form-item is-col is-25">
                                <input :hidden="checkorder" v-model="form.ac_reg" value="" type="text" class="modal_add_acreg"> 
                                <div :hidden="checkorder" class="is-desc modal_add_acreg">A/C Reg </div>
                            </div-->                            
                            <div class="form-item is-col is-20">
                                <input v-model="form.qty" value="" type="number"> 
                                <div class="is-desc">Qty <span class="is-req">*</span></div>
                            </div>                            
                            <div class="form-item is-col is-30">
                                <input style="width: 140px;" v-model="form.date" value="" type="date"> 
                                <input style="width: 100px;" v-model="form.time" value="" type="time"> 
                                <div class="is-desc">Datetime</div>                                
                            </div>
                            <div class="form-item is-col is-50">
                                <textarea v-model="form.remark" rows="1"></textarea>
                                <div class="is-desc">Remark</div>
                            </div>
                        </div>
                        <div class="is-row">                                                                                                
                            <div class="form-item is-col is-95">
                                <div class="rad rad1">
                                    <label v-for="(loc, index) in locations" :key="index" :class="loc.slug.length > 3 ? 'radio black fix' : 'radio black '">
                                        <input v-model="form.location" :value="loc.id" :id="'rloc' +index" type="radio">
                                        <span>{{loc.slug}}</span>
                                    </label>      
                                </div>         
                                <div class="is-desc">Location <span class="is-req">*</span> </div>                                
                            </div>  
                        </div>
                        <div class="is-row">
                            <div class="form-item is-col is-95">
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
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-incoming-part')">Close</button>
                        <button v-on:click="handlerIncomingPart()" class="button is-success" type="button" id="btn-incoming-part"> Save </button>
                    </div>
            </div>
        </div>
        <!-- /modal incoming part -->
        <!-- modal outgoing part -->
        <div class="modal-box" id="modal-outgoing-part" data-keyboard="false" data-backdrop="static">
            <div class="modal lg">
                <span class="close" v-on:click="hideModal('modal-outgoing-part')"></span>
                    <div class="modal-header">
                        <h2 class="title">Outgoing Part</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Input data
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-25">
                                <input v-on:click="handlerModalSelect()" v-model="form.part_number" value="" type="text" :readonly="true"> 
                                <div class="is-desc">Part Number <span class="is-req">*</span></div>
                            </div>                        
                            <div class="form-item is-col is-25">
                                <input v-model="form.to_number" value="" type="text"> 
                                <div class="is-desc">TO Number</div>
                            </div>                            
                            <div class="form-item is-col is-20">
                                <input v-model="form.batch_number" value="" type="text" :readonly="true"> 
                                <div class="is-desc">Batch Number </div>
                            </div> 
                            <div class="form-item is-col is-30">
                                <input v-model="form.tag" value="" type="text"> 
                                <div class="is-desc">Tag Number</div>
                            </div>
                        </div>
                        <div class="is-row">                                                       
                            <div class="form-item is-col is-25">
                                <input v-model="form.order_number" @keyup="handlercheckorder" value="" type="text" id="modal_add_form_order_no"> 
                                <div class="is-desc">Order Number </div>
                            </div>
                            <div class="form-item is-col is-25">
                                <input :hidden="checkorder" v-model="form.ac_reg" value="" type="text" class="modal_add_acreg"> 
                                <div :hidden="checkorder" class="is-desc modal_add_acreg">A/C Reg </div>
                            </div>                                                       
                            <div class="form-item is-col is-25">
                                <div class="is-append">
                                    <input v-on:change="handlerChangeRestQTY('input', 0)" v-model="form.qty" value="" type="number"> 
                                    <!--span :class="qty_class">{{qty_rest}}</span-->
                                </div>
                                <div class="is-desc">Qty <span class="is-req">*</span></div>
                            </div>
                            <div class="form-item is-col is-25">
                                <input v-model="form.empid" value="" type="text"> 
                                <div class="is-desc">Received By <span class="is-req">*</span></div>
                            </div> 
                        </div>  
                        <div class="is-row">
                            <div class="form-item is-col is-70">
                                <textarea v-model="form.remark" rows="3"></textarea>
                                <div class="is-desc">Remark</div>
                            </div>                                                                                
                            <div class="form-item is-col is-30">
                                <input style="width: 140px;" v-model="form.date" value="" type="date"> 
                                <input style="width: 100px;" v-model="form.time" value="" type="time"> 
                                <div class="is-desc">Datetime <span class="is-req">*</span></div>
                            </div>
                        </div>

                        <div class="is-row">                                                                                                
                            <div class="form-item is-col is-95">
                                <loading style="margin-top: 50px;"
                                    :active.sync="loading.isLoadingLocation" 
                                    :can-cancel="false"
                                    :is-full-page="false"
                                    :color="loading.color"
                                    :loader="loading.loaderType">
                                </loading>

                                <div v-if="locations_part.length < 1">
                                    <small>No location available for selected part number ! </small>
                                </div>
                                <div v-else>
                                    <div class="rad rad1">
                                        <label v-for="(loc, index) in locations_part" :key="index" :class="'radio black fix'">
                                            <input v-model="form.location" :value="loc.id" v-on:click="handlerChangeRestQTY('select', loc.qty)" :id="'rloc' +index" type="radio">
                                            <span>{{`${loc.slug} [${loc.qty}]`}}</span>
                                        </label>      
                                    </div>         
                                </div>
                                <div class="is-desc">Location <span class="is-req">*</span> </div>                                
                            </div>  
                        </div>
                        <div class="is-row">
                            <div class="form-item is-col is-95">
                                <div hidden class="form-item is-col is-20">
                                    <input hidden v-model="form.inout" value="IN" id="rinout2" type="text">
                                    <div class="is-desc">IN/OUT</div>
                                </div>
                                <div class="form-item is-col is-20" hidden>
                                    <input v-model="form.usr" value="">
                                    <div class="is-desc">User</div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-outgoing-part')">Close</button>
                        <button v-on:click="handlerOutgoingPart()" class="button is-success" type="button" id="btn-outgoing-part"> Save </button>
                    </div>
            </div>
        </div>
        <!-- modal outgoing part -->

        <!-- modal select -->
        <div class="modal-box" id="modal-select-data">
            <div class="modal sm">
                <span class="close" v-on:click="hideModal('modal-select-data')"></span>
                    <div class="modal-header">
                        <h2 class="title">Add Part</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>Select part</label>
                        <multiselect 
                            v-model="m_select.selected" 
                            :label="m_select.label"
                            :track-by="m_select.label"
                            placeholder="Type at least 1 characters to find data" 
                            open-direction="bottom" 
                            :options="m_select.items"

                            :multiple="false"
                            :searchable="true" 
                            :loading="m_select.loading" 
                            :internal-search="false" 
                            :clear-on-select="true" 
                            :close-on-select="true" 
                            :options-limit="300" 
                            :limit="5" 
                            :limit-text="limitText" 
                            :max-height="600" 
                            :show-no-results="false" 
                            :hide-selected="true" 
                            @search-change="handelrSelectData($event)"
                            >
                        </multiselect>
                    </div>
                    <div class="modal-footer" style="">
                        <button class="button is-primary is-default cancel" v-on:click="hideModal('modal-select-data')">Close</button>
                        <button v-on:click="handlerAddSelect()" class="button is-success" type="submit" id="btn-add-data"> Add </button>
                    </div>
                <!-- </form> -->
            </div>
        </div>
        <!-- / modal select -->

    </div>
</template>

<script>

import { VueGoodTable } from 'vue-good-table';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import Multiselect from 'vue-multiselect';

import FieldChemstore from './Project/datatable/FieldChemstore';
import FieldChemtransact from './Project/datatable/FieldChemtransact';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import 'vue-good-table/dist/vue-good-table.css';

export default {
    data: () => ({
        grant_access: false,
        hasAccess: false,
        loading: {
            isLoading: false,
            isLoadingLocation: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        datatable: {
            fields: FieldChemstore,
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

        datatable2: {
            fields: FieldChemtransact,
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

        form: {
            to_number: "",
            part_number: "",
            batch_number: "",
            order_number: "",
            remark: "",
            qty: "",
            tag: "",
            inout: "",
            location: "",
            date: "",
            time: "",
            datetime: "",
            usr: "",
            empid: "",
        },

        checkorder: false,
        locations: [],
        locations_part: [],
        m_select: {
            selected: [],
            items: [],
            loading: false,
            label: "part_number",
        },
        qty_rest: 0,
        selected_qty: 0,
        qty_class: "qty-default",
        active_modal: "",

    }),

    components: {
        Loading, 
        VueGoodTable,
        'multiselect': Multiselect,
    },

    watch: {
        'form.part_number': function() {
            if(this.active_modal == "OUTGOING" ) {
                this.initPartLocation();
            }
        },

        'form.qty': function() {
            this.handlerChangeRestQTY('input', 0);
        },

        
    },

    mounted() {
        this.permissionHandler();
        this.initData();
        this.initLocation();
    },

    methods: {

        initData:  function() {
            this.datatable.serverParams.page = "";
            this.datatable.serverParams.perPage = "";
            this.datatable.serverParams.searchTerm = "";
            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/chemstore/get_data', this.datatable.serverParams)
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

            this.datatable2.serverParams.page = "";
            this.datatable2.serverParams.perPage = "";
            this.datatable2.serverParams.searchTerm = "";
            this.loading.isLoading = true;

            axios.post('/api/production_control_hangar/crm/get_inventory_trx', this.datatable2.serverParams)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data`)
                }

                this.datatable2.rows = res.data.data
                this.datatable2.totalRows = res.data.total
                this.loading.isLoading = false;
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
            })

        },

        initLocation: function() {
            axios.get('/api/management/location/get_all_location')
            .then(res => {
                this.locations = res.data;
            })
            .catch(e => {
                console.log("Error: " +e);
            })
        },

        hideModal: function(modal_name) {
            if(modal_name == 'modal-outgoing-part' || modal_name == 'modal-incoming-part'){
                this.form.part_number = "";
            }
            $('#' + modal_name).modal('hide');
        },

        handlerModalIncomingPart: function(pn, loc) {
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
            if(pn){
                this.form.part_number = pn;
            }
            this.form.batch_number = "";
            this.form.order_number = "";
            this.form.qty = "";
            this.form.ac_reg = "";
            this.form.tag = "";
            this.form.inout = "IN";
            this.form.location = "";
            if(loc){
                this.form.location = loc;
            }            
            this.form.date = todayyear+'-'+todaymonth+'-'+todaydate;
            this.form.time = todayhour+':'+todayminute;
            this.form.datetime = "";
            this.form.remark = "";
            this.form.usr = JSON.parse(localStorage.getItem('user')).name;
            this.active_modal = "INCOMING";

            this.checkorder = false;
            $('#modal-incoming-part').modal('show');

        },

        handlerModalOutgoingPart: function(pn,btch,loc) {
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
            if(pn){
                this.form.part_number = pn;
            }            
            if(btch){
                this.form.batch_number = btch;
            }             
            this.form.order_number = "";
            this.form.qty = "";
            this.form.ac_reg = "";
            this.form.tag = "";
            this.form.inout = "OUT";
            this.form.location = "";
            if(loc){
                this.form.location = loc;
            }     
            this.form.date = todayyear+'-'+todaymonth+'-'+todaydate;
            this.form.time = todayhour+':'+todayminute;
            this.form.datetime = "";
            this.form.remark = "";
            this.form.usr = JSON.parse(localStorage.getItem('user')).name;
            this.locations_part = [];
            this.m_select.selected = [];
            this.m_select.items = [];
            this.m_select.loading = false;
            this.qty_rest = 0;
            this.selected_qty = 0;
            this.qty_class = "qty-default";
            this.active_modal = "OUTGOING";


            this.checkorder = false;
            $('#modal-outgoing-part').modal('show');

        },

        handlercheckorder: function(){
            if(this.form.order_number != ''){
                this.checkorder = true;
            }
            else{
              this.checkorder = false;
            }
        },

        handlerIncomingPart: function() {
            if(!this.validation()) return;
            if(!this.grant_access) return;

            this.handleButton('btn-incoming-part', 'load').then(() => {
                 // Insert data incoming part
                this.handlerAddIncomingPart('exists').then(res => {

                    if(res === 1) {
                        // Response if success
                        toastr.success("Success add incoming part");
                        this.handleButton('btn-incoming-part', 'stop');                                        
                        this.initData();
                        setTimeout(()=> {
                            this.hideModal('modal-incoming-part');
                        }, 500)                        
                    }else if(res === 2) {
                        // Add master data if p/n doesnt exists
                        this.handlerAddMaster().then( data => {
                            if(data) {
                                // Add incoming part after success insert to master
                                this.handlerAddIncomingPart('not exists').then(res_in => {
                                    if(res_in === 1) {
                                        toastr.success("Success add incoming part");
                                        this.initData();
                                        setTimeout(()=> {
                                            this.hideModal('modal-incoming-part');
                                        }, 500)
                                        
                                    }else {
                                        toastr.error("Failed add incoming part");
                                    }
                                    this.handleButton('btn-incoming-part', 'stop');
                                })
                            }else {
                                this.handleButton('btn-incoming-part', 'stop');
                                toastr.error("Failed add master data");
                            }
                        })
                    }else {
                        this.handleButton('btn-incoming-part', 'stop');
                        toastr.error("Failed add incoming part");
                    }
                })
            })            
        },

        handlerAddIncomingPart: function(type) {
            this.form.datetime = `${this.form.date} ${this.form.time}`;
            return new Promise((resolve) => {
                axios.post('/api/production_control_hangar/crm/incoming_part', { type: type, ...this.form})
                .then(res => {
                    resolve(res.data.success);
                })
                .catch(e => {
                    resolve(0);
                    console.log("Error: " + e);
                })
            })
        },

        handlerAddMaster: function() {
            return new Promise((resolve) => {
                swal({
                    title: `Data master for #${this.form.part_number} doesnt exists`,
                    text: "Are you sure that you want to add?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((value) => {
                    if (value) {
                        axios.post('/api/management/m_store/add_data', {
                            part_number: this.form.part_number,
                            batch_number: this.form.batch_number,
                            qty: this.form.qty,
                            type: this.form.type,
                            id_location: this.form.location,
                        })
                        .then(res => {
                            resolve(res.data.success);
                        })
                        .catch(e => {
                            resolve(0);
                            console.log("Error: " + e);
                        })
                    } else {
                        toastr.info("Canceled");
                        resolve(0);
                    }
                });
            })
        },

        handlerOutgoingPart: function() {
            if(!this.validation("outgoing")) return;
            if(!this.grant_access) return;

            this.handleButton('btn-outgoing-part', 'load').then(() => {
                this.handlerCheckQTY().then((res) => {
                    if(res == 1) {
                        this.handlerAddOutgoingPart().then(res_out => {
                            if(res_out) {
                                toastr.success("Success add outgoing part");
                                this.initData();
                                setTimeout(()=> {
                                    this.hideModal('modal-outgoing-part');
                                }, 500)
                            }else {
                                toastr.error("Failed add outgoing part");
                            }
                            this.handleButton('btn-outgoing-part', 'stop');
                        })
                    }else if(res == 2) {
                        toastr.error("Data part doesnt exists");
                        this.handleButton('btn-outgoing-part', 'stop');
                    }else {
                        toastr.error("Insufficient quantity");
                        this.handleButton('btn-outgoing-part', 'stop');
                    }
                })
            })
        },

        handlerCheckQTY: function() {
            return new Promise((resolve) => {
                axios.get(`/api/production_control_hangar/crm/cek_qty/${this.form.part_number}/${this.form.qty}/${this.form.location}`)
                .then(res => {
                    resolve(res.data.success);
                })
                .catch(e => {
                    console.log("Error: " + e);
                    resolve(0);
                })
            })
        },

        handlerAddOutgoingPart: function(type) {
            this.form.datetime = `${this.form.date} ${this.form.time}`;
            return new Promise((resolve) => {
                axios.post('/api/production_control_hangar/crm/outgoing_part', this.form)
                .then(res => {
                    resolve(res.data.success);
                })
                .catch(e => {
                    resolve(0);
                    console.log("Error: " + e);
                })
            })
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
                    element.className = "button is-success";
                    element.disabled = false;
                    resolve();
                }
            })
        },

        validation: function(type="") {
            if(this.form.part_number == "") {
                toastr.warning("Part number field is required");
                return false;
            }

            if(this.form.qty == "") {
                toastr.warning("QTY field is required");
                return false;
            }

            if(this.form.qty < 1) {
                toastr.warning("QTY field is required");
                return false;
            }

            if(this.form.location == "") {
                toastr.warning("Location field is required");
                return false;
            }

            if(type == "outgoing") {
                if(this.form.date == "" || this.form.time == "") {
                    toastr.warning("Datetime field is required");
                    return false;
                }

                if(this.form.empid == "") {
                    toastr.warning("Received by field is required");
                    return false;
                } 
            }

            return true;
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
                    axios.get('/api/production_control_hangar/chemstore/delete_masterinventorypart/' + id)
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

        permissionHandler: function() {
            this.grant_access = false;
            this.hasAccess = false;


            if(this.$can('pc_hangar_temporary_store_edit')) {
                this.hasAccess = true;
            }

            if(this.$can('pc_hangar_temporary_store')) {
                this.grant_access = true;
            }
        },

        limitText: function (count) {
            return `and ${count} other orders`
        },

        handelrSelectData: function(query) {
            if(query.length >= 1) {
                this.m_select.loading = true;
                axios.get(`/api/production_control_hangar/chemstore/get_list_data/${query}`)
                .then(res => {
                    this.m_select.items = res.data;
                    this.m_select.loading = false;
                })
            }
        },

        handlerModalSelect: function() {
            this.m_select.items = [];
            this.m_select.selected = "";
            $('#modal-select-data').modal('show');
        },

        handlerAddSelect: function() {
            if(this.m_select.selected.part_number === undefined) {
                toastr.warning("Please select part number");
                return;
            }
            this.form.part_number = this.m_select.selected.part_number;
            this.hideModal("modal-select-data");
        },

        initPartLocation: function() {
            if(this.form.part_number === "") return;

            this.loading.isLoadingLocation = true;
            axios.get(`/api/management/location/get_part_location/${this.form.part_number}/${this.form.batch_number}`)
            .then(res => {
                this.locations_part = res.data;
                this.loading.isLoadingLocation = false;
            })
            .catch(e => {
                this.locations_part = [];
                this.loading.isLoadingLocation = false;
                alert("Failed get part location");
            })
        },

        handlerChangeRestQTY: function(type, qty) {

            if(type === "select") {
                this.selected_qty = qty;
                if(this.form.qty === "") {
                    this.qty_rest = qty;
                }else {
                    this.qty_rest = parseInt(qty) - parseInt(this.form.qty); 
                }
            }else if(type === "input") {
                if(this.form.qty == "") {
                    this.qty_rest = this.selected_qty;
                    return;
                }
                if(this.selected_qty == 0) {
                    this.qty_rest = 0;
                }else {
                    this.qty_rest = parseInt(this.selected_qty) - parseInt(this.form.qty)
                }
            }

            if(this.qty_rest < 0) {
                this.qty_class = "qty-danger";
            }else {
                this.qty_class = "qty-success";
            }
        },

        /**
         * Datatable - Server Side
         */
        onRefresh() {
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

        handleDatatableChange: function(params) {
            this.loading.isLoading = true;

            return new Promise((resolve, reject) => {

                axios.post('/api/production_control_hangar/chemstore/get_data', params)
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

        handlerUpdateData: function(id, column, elem) {
            if(!this.hasAccess) return;
            let elm = document.getElementById(elem).value;
            
            axios.post('/api/production_control_hangar/chemstore/update_data', {
                id: id,
                column: column,
                data: elm
            })
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
        },

        handlerAfterRequest: function() {
            toastr.info('Refreshing data ...');

            axios.post('/api/production_control_hangar/chemstore/get_data', this.datatable.serverParams)
            .then(res => {
                this.datatable.rows = res.data.data;
                this.datatable.totalRows = res.data.total;
                toastr.remove();
                toastr.success('Data refreshed');
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.remove();
                toastr.error("Undefined error");
            })
        },

        handlerOpenLink: function(link) {
            link && window.open(link, "_blank");
        }
    }
}
</script>

