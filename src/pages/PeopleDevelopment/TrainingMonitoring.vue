<style scoped>
    ::v-deep .skillBarContainer {
        width: 100%;
        background: #e6eae3;
        background: rgb(8,102,220);
        background: rgba(8,102,220,.2);
        overflow: hidden;
        border-radius:5px;
    }

    ::v-deep .skillBarValue {
        color:white;
        padding-top:4px;
        padding-left:4px;
        height: 25px;
        float: left;
        background:#0866dc;
        background: rgb(8,102,220);
        background: rgba(8,102,220,.75);
    }

    ::v-deep th:first-child, td:first-child {
            padding-left: 20px;
    }
     ::v-deep th:last-child, td:last-child {
            padding-right: 20px;
    }   
    ::v-deep .wrap{
        display: block;
        position: relative;
        width: 100%;
    }
    ::v-deep .filter-th:nth-of-type(3) {
        left: 140px;
        z-index: 99999;
        position: sticky;
    }
    ::v-deep .filter-th:nth-of-type(4) {
        left: 220px;
        z-index: 99999;
        position: sticky;
    }
    ::v-deep .filter-th:nth-of-type(2) {
        left: 40px;
        z-index: 99999;
        position: sticky;
    }
    ::v-deep .mandatory{
        /*left: -0.50rem;
        right: -0.50rem;
        top: -0.60rem;
        bottom: -1.7rem;
        padding: 0.75rem; */
        background: rgb(255, 254, 215);
        color: rgb(0, 0, 0);
        position: absolute;
    }

    ::v-deep .competencies{
        background: rgb(192, 243, 255);
        color: rgb(0, 0, 0);
        position: absolute;
    }

    ::v-deep .license{
        min-width: 80px !important;
        max-width: 80px !important;
        width: 5em;
        background: rgb(248, 228, 252);
        color: rgb(0, 0, 0);
        position: relative;
    }

    ::v-deep .licensedate{
        min-width: 150px !important;
        max-width: 150px !important;
        width: 5em;
        background: rgb(248, 228, 252);
        color: rgb(0, 0, 0);
        position: relative;
    }

    ::v-deep .line-numbers{
        min-width:40px !important;
        max-width:40px !important;
        height:50px;
        width: 5em;
        left: 0;
        top: auto;
        z-index: 999;
        position: sticky;
        background-color: #fff;
    }
    ::v-deep .perf {
        min-width: 100px !important;
        max-width: 100px !important;
        white-space: normal; 
        overflow: auto; 
        width: 5em;
        left: 40px;
        top: auto;
        z-index: 999;
        position: sticky;
        background-color: #fff;
    }

    ::v-deep .nopeg {
        min-width: 80px !important;
        max-width: 80px !important;
        white-space: nowrap; 
        overflow: auto; 
        width: 5em;
        left: 140px;
        top: auto;
        z-index: 999;
        position: sticky;
        background-color: #fff;
    }

    ::v-deep .nama {
        min-width: 200px !important;
        max-width: 200px !important;
        white-space: normal; 
        overflow: auto; 
        width: 5em;
        left: 220px;
        top: auto;
        z-index: 999;
        position: sticky;
        background-color: #fff;
    }

    ::v-deep .jabatan {
        min-width: 250px !important;
        max-width: 250px !important;
        white-space: normal; 
        width: 5em;
        /*left: 320px;
        top: auto;
        z-index: 999;
        position: sticky;*/
        background-color: #fff;
    }

    ::v-deep .group {
        min-width: 80px !important;
        max-width: 80px !important;
        width: 5em;
        /*left: 0;
        top: auto;
        z-index: 999;*/
    }

    ::v-deep .unit {
        min-width: 80px !important;
        max-width: 80px !important;
        width: 5em;
        /*left: 570px;
        top: auto;
        z-index: 999;
        position: sticky;*/
        background-color: #fff;
    }

    ::v-deep .training {
        min-width: 150px !important;
        max-width: 150px !important;
    }

    ::v-deep  .vgt-left-align {
        white-space: normal !important;
    }

    ::v-deep .table.vgt-table{
        font-size: 9px !important; 
        border-collapse: separate !important;
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
        height: 50px !important;
        border: 1px solid #dcdfe6 !important;
        background: #ffffff !important;
    }


    ::v-deep .vgt-wrap__footer .footer__row-count__label {
        font-size: 9pt !important;
        color: #909399 !important;
    }

    ::v-deep .vgt-wrap__footer .footer__navigation__page-btn.disabled, .vgt-wrap__footer .footer__navigation__page-btn:hover {
        opacity: .5 !important;
        cursor: not-allowed !important;
        box-shadow: 0 0 black !important;
        font-size: 9pt !important;
        background-color: unset !important;
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
        /*background: #ffffff !important;*/
        width:null;
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
        color: white !important;
        font-size: 9pt;
        border-radius: 5px;
        padding: 1px 15px 1px 10px !important;
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

    /* Layout */
    ::v-deep .flip-list-move {
      transition: transform 0.5s;
    }
    ::v-deep .no-move {
      transition: transform 0s;
    }
    ::v-deep .ghost {
      opacity: 0.5;
      background: #c8ebfb;
    }
    ::v-deep .list-group {
      min-height: 20px;
    }
    ::v-deep .list-group-item {
      cursor: move;
    }
    ::v-deep .list-group-item i {
      cursor: pointer;
    }

    ::v-deep .list-group-item:last-child {
        margin-bottom: 0 !important;
        border-bottom-right-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
    }

    ::v-deep .list-group-item:first-child {
        border-top-right-radius: 0px !important;
        border-top-left-radius: 0px !important;
    }
    /* / Layout */


</style>

<template>
    <div v-show="hasAccess">
        <div class="content-header"></div>
        <div class="content-body" style="padding-top:40px;">
            <ul class="tab-menu">
                <li
                    class="tab-link active"
                >
                    Training & License
                </li>
                <!--li
                    v-on:click="
                        $router.push({
                            name: 'p_dev.training_monitoring.license',
                            params: {
                                data: datatable.rows
                            }
                        })
                    "
                    class="tab-link"
                >
                    Stamp & License
                </li-->
            </ul>

            <div class="card tab-content active">
                <div class="card-header ">
                    <div class="title-area">
                        <h3 class="title">{{ $route.meta.title }}</h3>
                        <span class="subtitle total-project">{{ $route.meta.sub_title }}</span>
                    </div>

                    <div class="option-box"></div>
                </div>
                <div class="card-content">
                    <div class="is-row">
                        <div class="is-col is-100">
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
                                        <div class="card">
                                            <vue-good-table
                                                ref="tm_detail"
                                                theme="polar-bear"
                                                :columns="datatable.fields"
                                                :rows="datatable.rows"
                                                styleClass="vgt-table bordered striped condensed"
                                                :search-options="{
                                                    enabled: true,
                                                    trigger: 'keyup',
                                                    skipDiacritics: true,
                                                    placeholder: 'Fill to search'
                                                }"
                                                :fixed-header="true"
                                                :line-numbers="true"
                                                max-height="350px"
                                                :pagination-options="{
                                                    enabled: true,
                                                    mode: 'records',
                                                    perPage: 10,
                                                    position: 'bottom',
                                                    perPageDropdown: datatable.perPage,
                                                    dropdownAllowAll: true,
                                                    setCurrentPage: 1,
                                                    nextLabel: 'Next',
                                                    prevLabel: 'Prev',
                                                    rowsPerPageLabel: 'Rows per page',
                                                    ofLabel: 'of',
                                                    pageLabel: 'page', // for 'pages' mode
                                                    allLabel: 'All',
                                                }"
                                            >
                                                <template slot="table-row" slot-scope="props">
                                                    <span v-if="props.column.field == 'action'">
                                                    </span>
                                                    <span class="wrap" v-else-if="trainingmatrix.filter(d => 't'+d.id_training_keyword === props.column.field && 'p'+d.id_jobtitle === props.formattedRow['a4_titlepcm']).length>0">
                                                        <span v-for="(data, idx) in trainingmatrix.filter(d => 't'+d.id_training_keyword === props.column.field && 'p'+d.id_jobtitle === props.formattedRow['a4_titlepcm'])" :key="idx">
                                                            <span style="width:100%;" :class="data.is_mandatory === 'mandatory' ? 'mandatory' : 'competencies'">
                                                                <!--span v-if="data.need_reccurent>0">
                                                                    <span :class="checkExpClass(props.formattedRow[props.column.field])" style="float: left;">{{checkExpBadge(props.formattedRow[props.column.field])}}</span>
                                                                    <span style="float: right;">{{ datetimeConverter_Exp(props.formattedRow[props.column.field]) }} </span>
                                                                </span>
                                                                <span v-else>
                                                                    <span :class="props.formattedRow[props.column.field] === null ? 'status-handler primary':'status-handler success'" style="float: left;">{{ props.formattedRow[props.column.field] === null ? 'A' : 'D'}}</span>
                                                                    <span style="float: right;">{{ datetimeConverter(props.formattedRow[props.column.field]) }} </span>
                                                                </span-->
                                                                <span v-html="checkExpClass(props.formattedRow[props.column.field], data)" style="float: left;"></span>
                                                                <span style="float: right;">{{ datetimeConverter(props.formattedRow[props.column.field].slice(props.formattedRow[props.column.field].length - 10)) }}</span>
                                                            </span>
                                                        </span>                                                        
                                                    </span>
                                                    <span v-else-if="props.column.field == '_perf'">
                                                        <div class="skillBarContainer" :style="'background-color:' + percentageColorTransparent(Number(props.formattedRow[props.column.field]))">
                                                            <div class="skillBarValue" :style="'width:' + Number(props.formattedRow[props.column.field])*100 + '%; background-color:' + percentageColor(Number(props.formattedRow[props.column.field]))">
                                                                {{ (Number(props.formattedRow[props.column.field])*100).toFixed(1) + '%' }}
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <span v-else-if="props.column.field == 'a2_nama'">
                                                        {{props.formattedRow[props.column.field]}}
                                                    </span>
                                                    <span v-else-if="props.column.field == 'a1_nopeg'">
                                                        {{props.formattedRow[props.column.field]}}
                                                    </span>
                                                    <span v-else-if="props.column.field == 'a3_jabatan'">
                                                        {{props.formattedRow[props.column.field]}}
                                                    </span> 
                                                    <span v-else-if="props.column.field == 'a5_unit'">
                                                        {{props.formattedRow[props.column.field]}}
                                                    </span>
                                                    <span v-else-if="props.column.field == '_genlic'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            {{props.formattedRow[props.column.field]}}
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == '_category'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            {{props.formattedRow[props.column.field]}}
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == '_stamp'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            {{props.formattedRow[props.column.field]}}
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == '_amel'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            {{props.formattedRow[props.column.field]}}
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == '_cs'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            {{props.formattedRow[props.column.field]}}
                                                        </span>
                                                    </span>   
                                                    <span v-else-if="props.column.field == '_stampvalid'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            <span style="float: left;" v-html="checkExpClass(props.formattedRow[props.column.field])">
                                                                
                                                            </span>
                                                            <span style="float: right;">{{ datetimeConverter(props.formattedRow[props.column.field].slice(props.formattedRow[props.column.field].length - 10)) }}</span>
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == '_amelvalid'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            <span style="float: left;" v-html="checkExpClass(props.formattedRow[props.column.field])">
                                                                
                                                            </span>
                                                            <span style="float: right;">{{ datetimeConverter(props.formattedRow[props.column.field].slice(props.formattedRow[props.column.field].length - 10)) }}</span>
                                                        </span>
                                                    </span>
                                                    <span v-else-if="props.column.field == '_csvalid'">
                                                        <loading
                                                            :active="loading.isLoadingSummaryLicense"
                                                            :can-cancel="false"
                                                            :is-full-page="false"
                                                            :color="loading.color"
                                                            :loader="'dots'">
                                                        </loading>
                                                        <span style="width:100%;">
                                                            <span style="float: left;" v-html="checkExpClass(props.formattedRow[props.column.field])">
                                                                
                                                            </span>
                                                            <span style="float: right;">{{ datetimeConverter(props.formattedRow[props.column.field].slice(props.formattedRow[props.column.field].length - 10)) }}</span>
                                                        </span>
                                                    </span>                                           
                                                    <span v-else>
                                                        <span style="float: right;">{{datetimeConverter(props.formattedRow[props.column.field])}}</span>
                                                    </span>
                                                </template>
                                                
                                                <div slot="table-actions">
                                                    <div class="toolbar toolbar-default">
                                                        <div v-show="!(loading.isLoading || loading.isLoadingSummary || loading.isLoadingSummaryLicense)" class="toolbar-item" style="margin-right: -10px;">
                                                            <div v-on:click="handlerExportData()" class="single-button synchronize display-flex align-items-center justify-center tooltip-x" style="background:#ffc107; margin-right: -2px; margin-left: -3px; padding-top: 6px;" tabindex="0">
                                                                <span class="tooltiptext-x">Export Excel</span>
                                                                <i class="material-icons warning sync_order" >file_download</i>
                                                            </div>
                                                        </div>                                                
                                                        <div class="toolbar-item" style="margin-right: -10px;">
                                                            <button v-on:click="initData()" class="button is-primary">
                                                                <i class='material-icons'>
                                                                    sync
                                                                </i>
                                                                Refresh
                                                            </button>
                                                        </div>                                                
                                                        <div class="toolbar-item" style="margin-right: -10px;">
                                                            <button v-on:click="handlerlayout()" class="button is-success">
                                                                <i class='material-icons'>
                                                                    grid_on
                                                                </i>
                                                                Layout
                                                            </button>
                                                        </div> 
                                                        <div class="toolbar-item" style="margin-right: 10px;">
                                                            <select :disabled="!grant_view_all ? grant_view_all.all_unit : false" v-model="selected_unit">
                                                                <option v-for="(unt, idx) in allunit" :value="unt" :key="idx">{{ unt}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div slot="table-actions-bottom">
                                                    <span class='status-handler primary'>A: Untrained</span>
                                                    <span class='status-handler danger' >B: Expired</span>
                                                    <span class='status-handler warning'>C: Will Expire in 3 months</span>
                                                    <span class='status-handler success'>D: Valid</span>
                                                    <span class='status-handler mandatory' style="position:unset;color:black !important;">Basic mandatory training</span>
                                                    <span class='status-handler competencies' style="position:unset;color:black !important;">Basic compentencies training</span>
                                                    <span class='status-handler license' style="position:unset;color:black !important;">Stamp & license</span>
                                                </div>
                                            </vue-good-table>
                                        </div>
                                    </template>  

                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="is-row">
                        <ul class="tab-menu" style="position:unset;">
                            <li
                                :class="tabmode == 'ts' ? 'tab-link active' : 'tab-link'"
                                @click="tabmode='ts'"
                            >
                                Training Summary
                            </li>
                            <li
                                :class="tabmode == 'ls' ? 'tab-link active' : 'tab-link'"
                                @click="tabmode='ls'"
                            >
                                License Summary
                            </li>
                        </ul>
                        <div :class="'is-col is-100 ' + (tabmode == 'ts' ? 'tab-content active' : 'tab-content')">
                            <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                                <div>
                                </div>
                                <div class="card">
                                    <div class="card-header ">
                                        <div class="title-area">
                                            <h3> Training Summary </h3>
                                            <!--span class='status-handler primary'>A: Untrained</span>
                                            <span class='status-handler danger' >B: Expired</span>
                                            <span class='status-handler warning'>C: Will Expire</span>
                                            <span class='status-handler success'>D: Valid</span>
                                            <span class='status-handler mandatory' style="position:unset;color:black !important;">Basic mandatory</span>
                                            <span class='status-handler competencies' style="position:unset;color:black !important;">Basic compentencies</span-->
                                        </div>
                                    </div>
                                    <div class="card-content" style="height:500px; overflow:auto;position:relative;">
                                    <loading
                                        :active.sync="loading.isLoadingSummary" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="'dots'">
                                    </loading>
                                        <table>
                                            
                                            <thead>
                                                <tr>
                                                    <td style="font-weight:bold;border-right: 1px solid #c3c3c3 !important;">Training Group</td>
                                                    <td><span class='status-handler primary'>A: Untrained</span></td>
                                                    <td><span class='status-handler danger' >B: Expired</span></td>
                                                    <td><span class='status-handler warning'>C: Will Expire</span></td>
                                                    <td><span class='status-handler success'>D: Valid</span></td>
                                                </tr>
                                            </thead>
                                            <tbody  style="position: relative;">
                                                <tr v-for="(t, idx) in trainingname_dashboard" :key="idx">
                                                    <td style="border-right: 1px solid #c3c3c3 !important;">{{ t.training_name_mapping }}</td>
                                                    <td style="color:#026396;font-weight:bold;">{{ datatable.rows.filter(d => d['t'+t.id] ? d['t'+t.id].startsWith('A') : false).length }}</td>
                                                    <td style="color:#dc3545;font-weight:bold;">{{ datatable.rows.filter(d => d['t'+t.id] ? d['t'+t.id].startsWith('B') : false).length }}</td>
                                                    <td style="color:#ffc107;font-weight:bold;">{{ datatable.rows.filter(d => d['t'+t.id] ? d['t'+t.id].startsWith('C') : false).length }}</td>
                                                    <td style="color:#13CE66;font-weight:bold;">{{ datatable.rows.filter(d => d['t'+t.id] ? d['t'+t.id].startsWith('D') : false).length }}</td>
                                                </tr>                                       
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> 
                        </div>

                        <div :class="'is-col is-100 ' + (tabmode == 'ls' ? 'tab-content active' : 'tab-content')">
                            <div  style="box-sizing: border-box; position: relative; min-height: 20px;">
                                <div>
                                </div>
                                <div class="card">
                                    <div class="card-header ">
                                        <div class="title-area">
                                            <h3> License Summary </h3>
                                            <!--span class='status-handler primary'>A: Untrained</span>
                                            <span class='status-handler danger' >B: Expired</span>
                                            <span class='status-handler warning'>C: Will Expire</span>
                                            <span class='status-handler success'>D: Valid</span>
                                            <span class='status-handler mandatory' style="position:unset;color:black !important;">Basic mandatory</span>
                                            <span class='status-handler competencies' style="position:unset;color:black !important;">Basic compentencies</span-->
                                        </div>
                                    </div>
                                    <div class="card-content" style="height:250px; overflow:auto;position:relative;">
                                    <loading
                                        :active.sync="loading.isLoadingSummaryLicense" 
                                        :can-cancel="false"
                                        :is-full-page="false"
                                        :color="loading.color"
                                        :loader="'dots'">
                                    </loading>
                                        <table class="table">
                                            
                                            <thead>
                                                <tr>
                                                    <td rowspan="2" style="font-weight:bold;border-right: 1px solid #c3c3c3 !important;">License</td>
                                                    <td colspan="4" style="font-weight:bold;text-align:center !important; border-right:1px solid #c3c3c3 !important;"><span>Direct Employee</span></td>
                                                    <td colspan="3" style="font-weight:bold;text-align:center !important;"><span>Indirect Employee</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span class='status-handler primary'>A: No license</span></td>
                                                    <td><span class='status-handler danger' >B: Expired</span></td>
                                                    <td><span class='status-handler warning'>C: Will Expire</span></td>
                                                    <td style="border-right: 1px solid #c3c3c3 !important;"><span class='status-handler success'>D: Valid</span></td>
                                                    <td><span class='status-handler danger' >B: Expired</span></td>
                                                    <td><span class='status-handler warning'>C: Will Expire</span></td>
                                                    <td><span class='status-handler success'>D: Valid</span></td>
                                                </tr>
                                            </thead>
                                            <tbody  style="position: relative;">
                                                <tr>
                                                    <td style="border-right: 1px solid #c3c3c3 !important;">Stamp</td>
                                                    <td style="color:#026396;font-weight:bold;">{{ datatable.rows.filter(d => d._stampvalid ? (d._stampvalid.startsWith('A') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#dc3545;font-weight:bold;">{{ datatable.rows.filter(d => d._stampvalid ? (d._stampvalid.startsWith('B') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#ffc107;font-weight:bold;">{{ datatable.rows.filter(d => d._stampvalid ? (d._stampvalid.startsWith('C') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#13CE66;font-weight:bold;border-right: 1px solid #c3c3c3 !important;">{{ datatable.rows.filter(d => d._stampvalid ? (d._stampvalid.startsWith('D') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#dc3545;font-weight:bold;">{{ datatable.rows.filter(d => d._stampvalid ? (d._stampvalid.startsWith('B') && d._category === 'INDIRECT') : false).length }}</td>
                                                    <td style="color:#ffc107;font-weight:bold;">{{ datatable.rows.filter(d => d._stampvalid ? (d._stampvalid.startsWith('C') && d._category === 'INDIRECT') : false).length }}</td>
                                                    <td style="color:#13CE66;font-weight:bold;border-right: 1px solid #c3c3c3 !important;">{{ datatable.rows.filter(d => d._stampvalid ? (d._stampvalid.startsWith('D') && d._category === 'INDIRECT') : false).length }}</td>
                                                </tr> 
                                                <tr>
                                                    <td style="border-right: 1px solid #c3c3c3 !important;">AMEL</td>
                                                    <td style="color:#026396;font-weight:bold;">{{ datatable.rows.filter(d => d._amelvalid ? (d._amelvalid.startsWith('A') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#dc3545;font-weight:bold;">{{ datatable.rows.filter(d => d._amelvalid ? (d._amelvalid.startsWith('B') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#ffc107;font-weight:bold;">{{ datatable.rows.filter(d => d._amelvalid ? (d._amelvalid.startsWith('C') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#13CE66;font-weight:bold;border-right: 1px solid #c3c3c3 !important;">{{ datatable.rows.filter(d => d._amelvalid ? (d._amelvalid.startsWith('D') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#dc3545;font-weight:bold;">{{ datatable.rows.filter(d => d._amelvalid ? (d._amelvalid.startsWith('B') && d._category === 'INDIRECT') : false).length }}</td>
                                                    <td style="color:#ffc107;font-weight:bold;">{{ datatable.rows.filter(d => d._amelvalid ? (d._amelvalid.startsWith('C') && d._category === 'INDIRECT') : false).length }}</td>
                                                    <td style="color:#13CE66;font-weight:bold;border-right: 1px solid #c3c3c3 !important;">{{ datatable.rows.filter(d => d._amelvalid ? (d._amelvalid.startsWith('D') && d._category === 'INDIRECT') : false).length }}</td>
                                                </tr>
                                                <tr>
                                                    <td style="border-right: 1px solid #c3c3c3 !important;">Certifying Staff</td>
                                                    <td style="color:#026396;font-weight:bold;">{{ datatable.rows.filter(d => d._csvalid ? (d._csvalid.startsWith('A') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#dc3545;font-weight:bold;">{{ datatable.rows.filter(d => d._csvalid ? (d._csvalid.startsWith('B') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#ffc107;font-weight:bold;">{{ datatable.rows.filter(d => d._csvalid ? (d._csvalid.startsWith('C') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#13CE66;font-weight:bold;border-right: 1px solid #c3c3c3 !important;">{{ datatable.rows.filter(d => d._csvalid ? (d._csvalid.startsWith('D') && d._category === 'DIRECT') : false).length }}</td>
                                                    <td style="color:#dc3545;font-weight:bold;">{{ datatable.rows.filter(d => d._csvalid ? (d._csvalid.startsWith('B') && d._category === 'INDIRECT') : false).length }}</td>
                                                    <td style="color:#ffc107;font-weight:bold;">{{ datatable.rows.filter(d => d._csvalid ? (d._csvalid.startsWith('C') && d._category === 'INDIRECT') : false).length }}</td>
                                                    <td style="color:#13CE66;font-weight:bold;border-right: 1px solid #c3c3c3 !important;">{{ datatable.rows.filter(d => d._csvalid ? (d._csvalid.startsWith('D') && d._category === 'INDIRECT') : false).length }}</td>
                                                </tr>                             
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>


                </div>
            
            </div>

            <div class="modal-box" id="modal-layout" data-keyboard="false" data-backdrop="static">
                <div class="modal sm">
                    <span class="close" v-on:click="hideModal('modal-layout')"></span>
                        <div class="modal-header">
                            <h2 class="title">Arrange Table Layout</h2>
                        </div>
                        <div class="modal-body" style="position: relative; height:500px; overflow-y:auto;">
                            <draggable 
                                draggable=".draggable"
                                :list="datatable.fields"
                                class="list-group"
                                ghost-class="ghost"
                                v-bind="dragOptions"
                                @start="drag = true"
                                @end="drag = false"
                                @change="handlerDateColumns"
                            >
                            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                                <div v-for="(element, index) in datatable.fields" :key="index + 0" :class="element.freeze ? '':'draggable'">
                                    <div v-if="element.field!='a4_titlepcm'" class="list-group-item">
                                        <i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click="element.fixed = !element.fixed" aria-hidden="true"></i>
                                        <div class="is-row" v-if="element.hidden==false" style="font-weight:bold;">
                                            <div class="is-col is-70">
                                                {{element.label}}
                                            </div>                                          
                                            <div class="is-col is-10">
                                                <button v-if="!element.freeze" class="button is-100 is-secondary is-success" style="padding:0px !important;" v-on:click="element.hidden = true">Hide</button>
                                            </div>
                                        </div>
                                        <div class="is-row" v-else>
                                            <div class="is-col is-70">
                                            {{element.label}}
                                            </div>
                                            <div class="is-col is-10">
                                                <button v-if="!element.freeze" class="button is-100 is-default" v-on:click="element.hidden = false">Show</button>
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
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import { VueGoodTable } from 'vue-good-table';
import XLSX from 'xlsx';
import draggable from 'vuedraggable';
//import field from './datatable/FieldTraining.js';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue-good-table/dist/vue-good-table.css';
import _ from 'lodash'

export default {
    components: {
        Loading, 
        draggable,
        VueGoodTable 
    },

    computed: {
        user: function () {
            return JSON.parse(localStorage.getItem('user'));
        },
        
        grant_view_all: function() {
            let val = false;
            this.user.role.permission.forEach(function(el){
                if(el.slug=="traininglcu" || el.slug=="trainingcenter"){
                    val = {is_lcu: true, all_unit: false};
                    if(el.slug=="trainingcenter"){
                        val = {is_lcu: true, all_unit: true};
                    }
                }
            })
            return val;
        },

        dragOptions() {
          return {
            animation: 200,
            group: "description",
            disabled: false,
            ghostClass: "ghost"
          };
        },
    },

    data: () => ({
        tabmode: 'ts',
        datatable: {
            fields: [
                {
                    label: 'Name',
                    field: 'nama',     
                    hidden: false,
                    filterable: true,
                    sortable: true,
                    filterOptions: {
                        enabled: true,
                        placeholder: "",
                    }
                },  
            ],
            rows: [],
            serverParams: {
                unit: "",
            },
            perPage: [10, 50, 100],
            selectedRows: []
        }, 
        datatable2: {
            fields: [
                {
                    label: 'Name',
                    field: 'nama',     
                    hidden: false,
                    filterable: true,
                    sortable: true,
                    filterOptions: {
                        enabled: true,
                        placeholder: "",
                    }
                },  
            ],
            rows: [],
            serverParams: {
                unit: "",
            },
            perPage: [10, 50, 100],
            selectedRows: []
        },               
        loading: {
            test: true,
            isLoadingSummary: false,
            isLoadingSummaryLicense: false,
            isLoading: false,
            isLoadingPaginate: false,
            fullPage: false,
            loaderType: 'dots',
            color: '#0065ff',
        },
        cellSelectionOption: {
          enable: false,
        },
        drag: false,
        renderedFields: false,
        hasAccess: false,
        selected_unit: JSON.parse(localStorage.getItem('user')).unit ? 
            JSON.parse(localStorage.getItem('user')).unit.substr(0, 5) === 'JKTTL' || JSON.parse(localStorage.getItem('user')).unit.substr(3) === '-MM' ?
                'JKTTL' 
            : JSON.parse(localStorage.getItem('user')).unit.substr(0, 5)
        : '',
        jpbtitle: [],
        trainingname: [],
        trainingmatrix: [],
        trainingname_dashboard: [],
        license: [],
        allunit: ['JKTTA','JKTTB','JKTTC','JKTTD','JKTTE','JKTTF','JKTTG','JKTTH','JKTTI','JKTTJ','JKTTL','JKTTM','JKTTN','JKTTP','JKTTQ','JKTTR','JKTTS','JKTTU','JKTTV','JKTTW','JKTTB','JKTTX','JKTTB','JKTTY','JKTTZ'
        /*,'AMQ-MM', 'BDJ-MM', 'BDO-MM', 'BTH-MM', 'BTJ-MM', 'DJB-MM', 'DJJ-MM', 'JED-MM', 'JOG-MM', 'KOE-MM', 'LOP-MM', 'MDC-MM', 'PDG-MM', 'PKU-MM', 'PLM-MM', 'SIN-MM', 'SOQ-MM', 'SRG-MM', 'TIM-MM', 'TKG-MM'*/
        ]
    }),

    watch: {
        selected_unit(val) {
            this.initMaster().then(() => {
                this.initData().then(() => {
                    this.loading.isLoading = true
                    this.initArangedLayout().then((res) => {
                        if (res === 'default') {
                            this.generateColumns()
                        } else {
                            this.datatable.fields = res
                        }
                        this.loading.isLoading = false
                    })
                })
            })
        }
    },

    mounted() {

        if(!this.$can('p_dev_training_monitoring')) {
            this.$router.push({name: 'access_denied'});
        }else {
            this.hasAccess = true;
            //this.initArangedLayout().then(() => {
                //this.renderedFields = true;
                //this.handlerArrangedStyle();
            this.initMaster().then(() => {
                // this.initLicense().then(() => {
                    this.initData().then(() => {
                        this.loading.isLoading = true
                        this.initArangedLayout().then((res) => {
                            // console.log(res)
                            if (res === 'default') {
                                console.log(res)
                                this.generateColumns()
                            } else {
                                console.log(res)
                                this.datatable.fields = res
                            }
                            this.loading.isLoading = false
                        })
                    })
                // })
            })
            //});
        }
    },

    methods: { 
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
        handlerResetLayout: function() {
            this.generateColumns()
        },
        handlerSaveArrangedLayout: function() {
            this.handleButton('btn-save-layout', 'load').then(() => {
                axios.post('/api/arranged_layout/post_layout', {
                    data: JSON.stringify(this.datatable.fields),
                    name: "LAYOUT_TRAINING"
                })
                .then(res => {
                    if(res.data.success) {
                        toastr.success(res.data.message, 'Success')
                        this.loading.isLoading = true
                        this.initArangedLayout().then((res) => {
                            this.datatable.fields = res
                            this.loading.isLoading = false
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
        initArangedLayout: function() {
            return new Promise((resolve) => {
                axios.post('/api/arranged_layout/get_user_layout', {
                    name: 'LAYOUT_TRAINING'
                })
                .then(res => {
                    if(res.data.length === 0) {
                        resolve('default')
                    }else {
                        resolve(res.data)
                    }
                    
                })
                .catch(e => {
                    console.log("Error: " +e);
                    resolve();
                })
            })
        }, 
        percentageColor(val) {
            if (val >= 1) {
                return 'rgba(19, 206, 102, .8)'
            } else if (val < 1 && val > 0.5) {
                return 'rgba(205, 156, 1, .8)'
            } else {
                return 'rgba(220, 53, 69, .8)'
            }
        },

        percentageColorTransparent(val) {
            if (val >= 1) {
                return 'rgba(19, 206, 102, .2)'
            } else if (val < 1 && val > 0.5) {
                return 'rgba(205, 156, 1, .2)'
            } else {
                return 'rgba(220, 53, 69, .2)'
            }
        },

        handlerExportData() {

            let namedate = new Date().toISOString().split('T')[0]
            return new Promise((resolve, reject) => {
                let clonedeep = _.cloneDeep(this.datatable.rows.map(d => {

                    let temp = {}
                    for (var key in d) {
                        if (d.hasOwnProperty(key)) {
                            // console.log(key)
                            this.datatable.fields.forEach(f => {


                                // console.log(key, f.field)
                                if (key === f.field) {
                                    let check = this.trainingmatrix.filter(x => 't'+x.id_training_keyword === f.field && 'p'+x.id_jobtitle === d.a4_titlepcm)
                                    if(check.length > 0) {
                                        // console.log(check[0])
                                        if (check[0].is_mandatory) {
                                            temp[f.label] = _.cloneDeep(d[key] + ' ('+check[0].is_mandatory+')')
                                        } else {
                                            temp[f.label] = _.cloneDeep(d[key])
                                        }
                                        
                                        // console.log(check)
                                    } else {
                                        if (key === '_perf') {
                                            temp[f.label] = _.cloneDeep((d._perf*100).toFixed(2) + '%')
                                        } else {
                                            temp[f.label] = _.cloneDeep(d[key])
                                        }
                                    }
                                }
                            })
                        }
                    }
                    //console.log(temp)
                    return temp
                }))

                let tmp = XLSX.utils.json_to_sheet(clonedeep);
                let wb = XLSX.utils.book_new();

                XLSX.utils.book_append_sheet(wb, tmp, namedate);
                XLSX.writeFile(
                    wb,
                    `XPREAM_traininglicense.xlsx`
                );

                resolve()
            });
        },
        checkExpClass: function(dt, type) {
            if(dt == null) {
                return ""
            }
            if(dt.startsWith('A')) {
                return "<span class='status-handler primary' style=''>A</span>"
            }
            
            if (dt.startsWith('B')) {
                return "<span class='status-handler danger' >B</span>"
            }

            if (dt.startsWith('C')) {
                return "<span class='status-handler warning'>C</span>"
            }

            if (dt.startsWith('D')) {
                return "<span class='status-handler success'>D</span>"
            }

            return
        },

        AddTwoYear(date) {
            if (date === null) {
                return ''
            }
            var a = new Date(date)
            var DateAddTwoYear = a.setFullYear(a.getFullYear() + 2)
            // console.log(DateAddTwoYear.toISOString())
            return new Date(DateAddTwoYear).toISOString().split('T')[0]
        },

        checkExpBadge: function(dt) {
            if(dt == null) {
                return 'A'
            }

            var a = new Date(dt)
            var DateAddTwoYear = new Date(a.setFullYear(a.getFullYear() + 2))

            var dateNow = new Date()

            if (DateAddTwoYear < dateNow) {
                return 'B'
            }

            else if (DateAddTwoYear < new Date(dateNow.setMonth(dateNow.getMonth()+3))) {
                return 'C'
            }

            else {
                return 'D'
            }
        },

        checkExpBadgeLic: function(dt, categ) {
            if(dt == null && categ === 'DIRECT') {
                return 'A'
            }

            var a = new Date(dt)
            var DateAddTwoYear = a

            var dateNow = new Date()
            if(dt == null) {
                return ''
            }

            if (DateAddTwoYear < dateNow) {
                return 'B'
            }

            else if (DateAddTwoYear < new Date(dateNow.setMonth(dateNow.getMonth()+3))) {
                return 'C'
            }

            else {
                // console.log(DateAddTwoYear.toISOString(), new Date(dateNow.setMonth(dateNow.getMonth()-3)).toISOString())
                return 'D'
            }
        },

        datetimeConverter_Exp: function(dt) {
            var a = new Date(dt)
            var DateAddTwoYear = a.setFullYear(a.getFullYear() + 2)
            return this.datetimeConverter(DateAddTwoYear)
        },

        datetimeConverter: function(dt) {
            if(dt == null) {
                return null
            }
            if(dt == '0000-00-00') {
                return null
            }
            var a = new Date(dt)
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            var year = a.getFullYear()
            var month = months[a.getMonth()]
            var date = a.getDate()
            // var hour = a.getHours()
            // var min = a.getMinutes()
            if (date < 10) {
                date = '0' + date
            }
            /*
            if (min < 10) {
                min = '0' + min
            }*/
            // var sec = a.getSeconds()
            if (!isNaN(year)) {
                var time = date + ' ' + month + ' ' + year
                return time
            } else {
                return null
            }
        },

        refresh: function(){

        },

        handlerlayout: function() {
            $('#modal-layout').modal('show');
        },

        hideModal: function(modal_name) {
            $('#' + modal_name).modal('hide');
        },

        handlerDateColumns: function(e) {                  
        },

        initDirectIndirect(nopeg) {
            return new Promise((resolve) => {
                axios.post('/api/management/indirect', {
                    unit : this.selected_unit,
                    nopeg : nopeg
                })
                .then(res => {
                    resolve(res.data.data)
                })
            })
        },

        initLicense(nopeg) {
            this.loading.isLoadingSummaryLicense = true
            return new Promise((resolve) => {
                this.initDirectIndirect(nopeg).then((resindirect) => {
                    axios.post('/api/management/license', {
                        unit : this.selected_unit,
                        nopeg : nopeg
                    })
                    .then(res => {
                        // this.license = res.data
                        if (res.data.data.length > 0 ) {
                            this.datatable.rows = this.datatable.rows.map(d => {
                                let tmp = d
                                let maplic = res.data.data.filter(l => l.PERNR === d.a1_nopeg)
                                let mapindirect = resindirect.filter(i => i.nopeg === d.a1_nopeg)
                                tmp._category = mapindirect.length > 0 ? mapindirect[0].category : ''
                                tmp._genlic = maplic.length > 0 ? maplic[0].GENLIC : ''
                                tmp._amel = maplic.length > 0 ? maplic[0].lic_no : ''
                                tmp._cs = maplic.length > 0 ? maplic[0].CS : ''
                                tmp._stamp = maplic.length > 0 ? maplic[0].stamp_no : ''
                                tmp._amelvalid = maplic.length > 0 ? this.checkExpBadgeLic(maplic[0].amelvalid, tmp._category) + ' ' + maplic[0].amelvalid  : ''
                                tmp._csvalid = maplic.length > 0 ? this.checkExpBadgeLic(maplic[0].csvalid, tmp._category) + ' ' + maplic[0].csvalid  : ''
                                tmp._stampvalid = maplic.length > 0 ? this.checkExpBadgeLic(maplic[0].stmpvalid, tmp._category) + ' ' + maplic[0].stmpvalid : ''
                                return tmp
                            })
                            // console.log(this.datatable.rows)
                            this.loading.isLoadingSummaryLicense = false
                            resolve();
                        } else {
                        resolve(); 
                        }
                    })
                })
            })
        },

        initMaster: function(){
            return new Promise((resolve) => {
                this.loading.isLoadingSummary = true
                this.initJobTitle();
                this.initMatrix();
                this.initTraining().then(()=>{
                     resolve();
                });
            })
        },

        initJobTitle: function() {
            axios.get('/api/management/masterjobtitle/'+this.selected_unit)
            .then(res => {
                this.jobtitle = res.data.data;
                //console.log
            })
        },

        initTraining: function() {
            return new Promise((resolve) => {
            axios.get('/api/management/mastertraining/a/'+this.selected_unit)
            .then(res => {
                this.trainingname = res.data.data
                this.trainingname_dashboard = res.data.data.filter(d => d.id_relation === null || d.id_relation === '')
                this.loading.isLoadingSummary = false
                // console.log(this.trainingname_dashboard)
                resolve()
            })
            })
        },

        initMatrix: function() {
            axios.get('/api/management/mastermatrix/'+this.selected_unit)
            .then(res => {
                this.trainingmatrix = res.data.data;
            })
        },

        initData:  function() {
            toastr.remove()
            return new Promise((resolve) => {
            $( ".vgt-fixed-header, .vgt-responsive" ).wrapAll( "<div class='new' />").css("width","unset").css( "overflow-x","unset");
            $( ".vgt-fixed-header").css("position","sticky").css("position","-webkit-sticky").css("top","0").css("z-index","1000");
            $( ".vgt-fixed-header table thead tr:nth-child(2) th:nth-child(1)").text(".").addClass('line-numbers');
            $( ".vgt-responsive thead").attr("hidden",true);
            $( "th").removeAttr("style");
            $( ".new" ).css( "overflow-x","auto"); 

            this.loading.isLoading = true;
            this.datatable.serverParams.unit = this.selected_unit
            axios.post('/api/people_development/training/get_datatable', this.datatable.serverParams)
            .then(res => {
                if(res.data.data.length < 1) {
                    toastr.warning(`Empty data`)
                    this.loading.isLoading = false
                    resolve();
                } else {
                    // this.initLicense(res.data.data.map(d => d.nopeg)).then(lic => {
                        let temp = res.data.data
                        // console.log(this.trainingmatrix)
                        temp.map(d => {
                            let tempperf = []
                            for (var key in d) {
                                if (d.hasOwnProperty(key)) {
                                    // console.log(d, key, d[key])
                                    // console.log(this.trainingmatrix)
                                    let check = this.trainingmatrix.filter( e => 
                                        't'+e.id_training_keyword === key &&
                                        'p'+e.id_jobtitle === d.a4_titlepcm
                                    )
                                    // console.log(check)
                                    if (check.length > 0) {
                                        if (check[0].need_reccurent > 0){
                                            // console.log(check, d[key])
                                            tempperf.push(this.checkExpBadge(d[key]))
                                            d[key] = this.checkExpBadge(d[key]) + ' ' + this.AddTwoYear(d[key])
                                        } else {
                                            if (d[key] === null) {
                                                tempperf.push('A')
                                                d[key] = 'A'
                                            } else {
                                                tempperf.push('D')
                                                d[key] = 'D' + ' ' + this.AddTwoYear(d[key])
                                            }
                                        }
                                    }
                                }
                            }
                            if (tempperf.length == 0) {
                                d._perf = '1'
                            } else {
                                d._perf = ((tempperf.reduce((n, x) => n + (x === 'D' || x === 'C'), 0))/tempperf.length).toString()
                            }
                            
                            // d._genlic = 'x'
                        })
                        // console.log(temp);
                        this.datatable.rows = temp;
                        this.initLicense(res.data.data.map(d => d.a1_nopeg))
                        this.loading.isLoading = false;
                        resolve();

                    // })
                }
            })
            .catch(e => {
                console.log("Error: "+e)
                toastr.error("Undefined error");
                this.loading.isLoading = false;
                resolve();
            })
            })
        },

        generateColumns: function() {
            return new Promise((resolve) => {
                let col_left = [
                    {
                        label: 'Group',
                        thClass: 'group',
                        tdClass: 'group',                        
                        field: 'a4_titlepcm',     
                        hidden: true,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: true
                    },    
                    {
                        label: 'Training Achivement',
                        thClass: 'perf',
                        tdClass: 'perf',
                        field: '_perf',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'perf',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: true
                    },              
                    {
                        label: 'Emp ID',
                        thClass: 'nopeg',
                        tdClass: 'nopeg',
                        field: 'a1_nopeg',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'nopeg',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: true
                    },                      
                    {
                        label: 'Name',
                        thClass: 'nama',
                        tdClass: 'nama',                        
                        field: 'a2_nama',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'nama',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: true
                    },  
                    {
                        label: 'Job Title',
                        thClass: 'jabatan',
                        tdClass: 'jabatan',                        
                        field: 'a3_jabatan',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'jabatan',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    },                       
                    {
                        label: 'Unit',
                        thClass: 'unit',
                        tdClass: 'unit',                        
                        field: 'a5_unit',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    }
                ]
                let col_right = [
                    {
                        label: 'Employee Category',
                        thClass: 'unit',
                        tdClass: 'license',                        
                        field: '_category',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                            filterDropdownItems: ['DIRECT', 'INDIRECT']
                        },
                        freeze: false
                    }, 
                    {
                        label: 'General Lic.',
                        thClass: 'unit',
                        tdClass: 'license',                        
                        field: '_genlic',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    }, 
                    {
                        label: 'Stamp No',
                        thClass: 'unit',
                        tdClass: 'license',                        
                        field: '_stamp',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    },
                    {
                        label: 'Stamp Validity',
                        thClass: 'training',
                        tdClass: 'licensedate',                        
                        field: '_stampvalid',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    }, 
                    {
                        label: 'AMEL No',
                        thClass: 'unit',
                        tdClass: 'license',                        
                        field: '_amel',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    }, 
                    {
                        label: 'AMEL Validity',
                        thClass: 'training',
                        tdClass: 'licensedate',                        
                        field: '_amelvalid',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    },  
                    {
                        label: 'CS No',
                        thClass: 'unit',
                        tdClass: 'license',                        
                        field: '_cs',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    }, 
                    {
                        label: 'CS Validity',
                        thClass: 'training',
                        tdClass: 'licensedate',                        
                        field: '_csvalid',     
                        hidden: false,
                        filterable: true,
                        sortable: true,
                        filterOptions: {
                            styleClass: 'unit',
                            enabled: true,
                            placeholder: "",
                        },
                        freeze: false
                    },                                   
                ]                
                let idx = 0;
                let count_static_col = col_left.length;
                // console.log(this.datatable.rows)
                // console.log(this.trainingname)
                for(let key in this.datatable.rows[0]){
                    //idx++
                    // console.log(key)
                    if(idx>=count_static_col-1 && !key.startsWith('_')) {
                        //this.params.columnWidth.push({column: idx-1, width: 100})
                        let temp_trainingname = this.trainingname.filter(d => d.id === key.substring(1))[0]
                        let temp_trainingcol = {
                            label: temp_trainingname.training_name_mapping,
                            field: key, 
                            thClass: 'training',
                            tdClass: 'training',                                  
                            hidden: false,
                            filterable: true,
                            sortable: true,
                            filterOptions: {
                                enabled: true,
                                placeholder: "D 2022-01-01",
                            },
                            freeze: false                           
                        }
                        //let col = {field: key, key: key, title: key, align: "center",width:"300px"}
                        col_left.push(temp_trainingcol)
                        //console.log(idx+'|'+key+'|'+temp_trainingname)
                    }
                    idx++
                }
                this.datatable.fields = col_left.concat(col_right);
                // console.log(this.datatable)
                
                resolve()
            })
            
        },

        /* handlerfreeze: function(freeze,index){
            let leftpos = 40
            for(let el=0;el<=this.datatable.fields.length;el++){
                let colwidth = $("."+this.datatable.fields[el].tdClass).css('max-width')
                if (typeof(colwidth) != "undefined"){
                    this.reformatColumn(this.datatable.fields[el],el,index,leftpos)
                    leftpos = leftpos + parseInt(colwidth,10)
                }
                console.log(this.datatable.fields[el])
                console.log(leftpos)
                
            }

            //this.datatable.fields.forEach((el,idx) => this.reformatColumn(el,idx,index))
        },

        reformatColumn: function(el,idx,index,leftpos){
            if(idx<=index){
                $("."+el.tdClass).css('background-color','white')
                $("."+el.tdClass).css('position','sticky')
                $("."+el.tdClass).css('left',leftpos+'px')
                el.freeze = true
            }
            else{
                $("."+el.tdClass).css('background-color','unset')
                $("."+el.tdClass).css('position','unset')
                $("."+el.tdClass).css('left','0')
                el.freeze = false
            }
        }*/



    }
}
</script>