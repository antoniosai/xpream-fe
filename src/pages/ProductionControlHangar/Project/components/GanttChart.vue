<style scoped>
::v-deep .resourceGrid_cell {
    display: none;
}
::v-deep .resourceTimeline_cell {
    display: none;
}
::v-deep .vgt-left-align {
    white-space: nowrap !important;
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

::v-deep label {
    font-size: 12px !important;
}

::v-deep .gantt_grid_scale .gantt_grid_head_cell {
    color: rgb(75, 75, 75) !important;
    font-weight: bold !important;
    border-right: 1px solid #cecece !important;
}

::v-deep .gantt_scale_cell {
    color: rgb(75, 75, 75) !important;
    font-weight: bold !important;
    border-right: 1px solid #cecece !important;
}

::v-deep .status_line {
    color: white !important;
    font-weight: bold !important;
    background-color: red !important;
    opacity: 1 !important;
}

::v-deep .level_1 {
    background-color: rgb(218, 119, 119) !important;
    border: 2px solid rgb(218, 119, 119) !important;
    color: rgb(218, 119, 119) !important;
}

::v-deep .level_1 .gantt_task_progress {
    background-color: #ff0018 !important;
}

::v-deep .level_2 {
    background-color: #3aac5d !important;
    border: 2px solid #3aac5d !important;
    color: #3aac5d !important;
}

::v-deep .level_2 .gantt_task_progress {
    background-color: #008026 !important;
}

::v-deep .level_3 {
    background-color: #2cbad0 !important;
    border: 2px solid #2cbad0 !important;
    color: #2cbad0 !important;
}

::v-deep .level_3 .gantt_task_progress {
    background-color: #149cb0 !important;
}

::v-deep .table-suggestion th {
    background-color: #7fbb3d;
    color: white;
    text-align: center;
    padding: 7px;
    width: 500px;
}

::v-deep .table-suggestion td {
    padding: 5px 15px 5px 15px;
}

::v-deep .modal-production-planning {
    font-size: 10pt;
}

::v-deep .card-order {
    padding-top: 10px;
}

::v-deep .table-order-child tr,
td {
    border: none;
    padding-top: 0px;
    padding-bottom: 0px !important;
}
::v-deep .box-all-order {
    max-height: 22vh;
    /* min-height: 25vh; */
    overflow-y: scroll;
    padding-right: 10px;
}

::v-deep .box-suggestion {
    max-height: 22vh;
    /* min-height: 25vh; */
    overflow-y: scroll;
    padding-right: 10px;
    padding-top: 0px;
}

::v-deep .box-suggestion::-webkit-scrollbar {
    width: 2em !important;
}

::v-deep .box-suggestion::-webkit-scrollbar-button {
    background: #ccc !important;
}

::v-deep .box-suggestion::-webkit-scrollbar-thumb {
    background: #eee !important;
}

::v-deep .box-suggestion::-webkit-scrollbar-track-piece {
    background: #888 !important;
}

::v-deep .box-all-order::-webkit-scrollbar {
    width: 2em !important;
}

::v-deep .box-all-order::-webkit-scrollbar-button {
    background: #ccc !important;
}

::v-deep .box-all-order::-webkit-scrollbar-thumb {
    background: #eee !important;
}

::v-deep .box-all-order::-webkit-scrollbar-track-piece {
    background: #888 !important;
}

::v-deep .box-ressume {
    max-height: 69.3vh;
    overflow-y: scroll;
    padding-right: 10px;
}

::v-deep .box-ressume::-webkit-scrollbar {
    width: 2em !important;
}

::v-deep .box-ressume::-webkit-scrollbar-button {
    background: #ccc !important;
}

::v-deep .box-ressume::-webkit-scrollbar-thumb {
    background: #eee !important;
}

::v-deep .box-ressume::-webkit-scrollbar-track-piece {
    background: #888 !important;
}

::v-deep .card-box {
    /* background-color: #84bd00; */
    color: white;
    padding-bottom: 0px !important;
}

::v-deep .card-box-resume {
    /* background-color: #026396; */
    color: white;
    padding-bottom: 0px !important;
}

::v-deep .card-power-box {
    padding-bottom: 5px;
    font-size: 9pt;
    padding-right: 10px;
}

::v-deep .card-power {
    padding: 5px !important;
    color: white;
}

::v-deep .card-power-box .in {
    background-color: #ff6951;
}

::v-deep .card-power-box .out {
    background-color: rgba(17, 17, 19, 0.4);
}

::v-deep .main-box-card-power {
    max-height: 76.5vh;
    overflow-y: auto;
    padding-right: 5px;
}

::v-deep .main-box-card-power::-webkit-scrollbar {
    width: 2em !important;
}

::v-deep .main-box-card-power::-webkit-scrollbar-button {
    background: #ccc !important;
}

::v-deep .main-box-card-power::-webkit-scrollbar-thumb {
    background: #eee !important;
}

::v-deep .main-box-card-power::-webkit-scrollbar-track-piece {
    background: #888 !important;
}

::v-deep .card-power-selected {
    padding: 5px !important;
    /* background-color: #026396; */
    color: white;
}

::v-deep .card-power-box-selected {
    padding-bottom: 5px;
    font-size: 9pt;
}

::v-deep .box-material-required {
    padding-bottom: 0px !important;
    max-height: 100px;
    overflow-y: auto;
    overflow-x: auto;
}

::v-deep .material-required {
    background-color: #026396;
    color: white;
}

::v-deep .action-2 > i.primary {
    color: #026396;
}

::v-deep .action-2 > i.success {
    color: #13ce66;
}

::v-deep .action-2 > i.disabled {
    color: white;
    background-color: rgba(14, 27, 49, 0.5);
    cursor: unset !important;
}

::v-deep .action-2 > i.primary:hover {
    background-color: #026396;
    color: white;
}

::v-deep .action-2 > i.success:hover {
    background-color: #13ce66;
    color: white;
}

::v-deep .action-2 > i.danger {
    color: #ee2455 !important;
}

::v-deep .action-2 > i.danger:hover {
    background-color: #ee2455 !important;
    color: white !important;
}

::v-deep .action-2 > i {
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    cursor: pointer;
}

::v-deep .action-report > i {
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
}

::v-deep .action-report > i.primary {
    color: #026396;
}

::v-deep .action-report > i.danger {
    color: #ee2455;
}

::v-deep .action-report > i.danger:hover {
    color: white;
    background-color: #ee2455;
    cursor: pointer;
}

::v-deep .action-report > i.additional {
    color: #28a745;
}

::v-deep .action-report > i.additional:hover {
    color: white;
    background-color: #28a745;
    cursor: pointer;
}

::v-deep .action-report > i.barcode {
    color: #ffc107;
}

::v-deep .box-card-manpower {
    max-height: 180px;
    overflow-y: auto;
}

::v-deep .box-card-manpower::-webkit-scrollbar {
    width: 2em !important;
}

::v-deep .box-card-manpower::-webkit-scrollbar-button {
    background: #ccc !important;
}

::v-deep .box-card-manpower::-webkit-scrollbar-thumb {
    background: #eee !important;
}

::v-deep .box-card-manpower::-webkit-scrollbar-track-piece {
    background: #888 !important;
}

::v-deep .box-mdr {
    background-color: #ffc107 !important;
    color: rgb(90, 90, 90) !important;
    border-left: 6px solid #026396 !important;
}

::v-deep .box-job {
    background-color: white !important;
    color: rgb(90, 90, 90) !important;
    border-left: 6px solid #026396 !important;
}

::v-deep .box-default {
    background-color: #7fbb3d !important;
    color: rgb(90, 90, 90) !important;
    border-left: 6px solid #026396 !important;
}

::v-deep .list-suggestion {
    cursor: pointer !important;
}

::v-deep .list-all-order {
    cursor: pointer !important;
}

::v-deep .list-resume {
    cursor: pointer !important;
}

::v-deep .list-power {
    cursor: pointer !important;
}

::v-deep .list-group {
    cursor: pointer !important;
}

::v-deep .skill-a1 {
    color: #7fbb3d !important;
}

::v-deep .skill-a2 {
    color: #99bb3d !important;
}

::v-deep .skill-e1 {
    color: #bb993d !important;
}

::v-deep .skill-e2 {
    color: #bb7a3d !important;
}

::v-deep .skill-s {
    color: #3d82bb !important;
}

::v-deep .skill-c {
    color: #bb3da6 !important;
}

::v-deep .skill-is {
    color: #bb3d4e !important;
}

::v-deep .skill-q {
    color: #3db3bb !important;
}

::v-deep .skill-default {
    color: #536878 !important;
}

::v-deep .skill-resume {
    padding: 4px;
    background: #fff;
    border-radius: 5px;
    font-size: 10px;
    border: 1px solid #eaeaea;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);
    color: white !important;
    font-weight: bold !important;
    text-align: center !important;
    width: 25px !important;
    height: 25px !important;
    padding: 3px 4px 2px 4px;
    margin: 0 auto !important;
    margin-bottom: 2px !important;
}

::v-deep .skill-a1-resume {
    background-color: #7fbb3d !important;
}

::v-deep .skill-a2-resume {
    background-color: #99bb3d !important;
}

::v-deep .skill-e1-resume {
    background-color: #bb993d !important;
}

::v-deep .skill-e2-resume {
    background-color: #bb7a3d !important;
}

::v-deep .skill-s-resume {
    background-color: #3d82bb !important;
}

::v-deep .skill-c-resume {
    background-color: #bb3da6 !important;
}

::v-deep .skill-is-resume {
    background-color: #bb3d4e !important;
}

::v-deep .skill-q-resume {
    background-color: #3db3bb !important;
}

::v-deep .skill-default-resume {
    background-color: #536878 !important;
}

::v-deep .panel-toggle {
    cursor: pointer;
}

::v-deep .panel-collapse-enter-active,
.panel-collapse-leave-active {
    transition: 200ms ease-out;
    overflow: hidden;
}

::v-deep .panel-collapse-enter,
.panel-collapse-leave-to {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}

::v-deep .btn-panel-toggle {
    cursor: pointer !important;
}

::v-deep .card-coba {
    background-color: #bb3d3d;
}

::v-deep .radio-status:after {
    width: 21px !important;
    height: 21px !important;
    border-radius: 50% !important;
    top: -2px !important;
    left: -1px;
    position: relative !important;
    background-color: #d1d3d1 !important;
    content: "" !important;
    display: inline-block !important;
    visibility: visible !important;
    border: 3px solid white !important;
    cursor: pointer;
}

::v-deep .radio-status:checked:after {
    width: 21px !important;
    height: 21px !important;
    border-radius: 50% !important;
    top: -2px !important;
    left: -1px;
    position: relative !important;
    background-color: #13ce66 !important;
    content: "" !important;
    display: inline-block !important;
    visibility: visible !important;
    border: 3px solid white !important;
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
    bottom: 0% !important;
    left: 0% !important;
    margin-left: 30px !important;
    white-space: nowrap !important;
}

::v-deep .tooltip-x:hover .tooltiptext-x {
    visibility: visible !important;
}
/*
::v-deep .box-gantt-chart {
    max-height: 97vh;
    overflow-y: scroll;
    padding-right: 15px;
}

::v-deep .box-gantt-chart::-webkit-scrollbar {
    width: 2em !important;
}

::v-deep .box-gantt-chart::-webkit-scrollbar-button {
    background: #ccc !important;
}

::v-deep .box-gantt-chart::-webkit-scrollbar-thumb {
    background: #eee !important;
}

::v-deep .box-gantt-chart::-webkit-scrollbar-track-piece {
    background: #888 !important;

}
*/

/* #7fbb3d #99bb3d #bb993d #bb7a3d #3d82bb #bb3da6 #bb3d4e*/
</style>

<template>
    <div>
        <div class="content-header"></div>
        <div class="content-body">
            <div class="card">
                <div class="card-header no-border">
                    <div class="title-area">
                        <h3 class="title">
                            Gantt Chart {{ pg.ac_reg }} Version
                            {{ $props.version }}
                        </h3>
                        <span class="subtitle total-project"
                            >A/C Type : <strong>{{ pg.ac_type }}</strong>
                            <span v-if="pg.hangar && pg.line"
                                >| Hangar-Line :
                                <strong>{{
                                    pg.hangar.name + "-" + pg.line.line_name
                                }}</strong>
                            </span>
                            | Revision : <strong>{{ $props.pg_id }}</strong> |
                            Maintenance Type :
                            <strong>{{ pg.main_type }}</strong></span
                        >
                    </div>
                    <div class="option-box" style="display:none">
                        <div class="option-item">
                            <!--button class="button is-success" v-if="founded && loading.isLoading == false" v-on:click="exportGantt('exportarea')">
                                <i class='material-icons'>
                                    insert_drive_file
                                </i>
                                PDF
                            </button-->
                            &nbsp;
                            <button
                                style="background-color: rgb(251, 192, 45); color: white;"
                                class="button"
                                v-if="founded && loading.isLoading == false"
                                v-on:click="
                                    $router.push({
                                        name: 'module2.gantt_chart.edit',
                                        params: {
                                            pg_id: $props.pg_id,
                                            version: $props.version
                                        }
                                    })
                                "
                            >
                                <i class="material-icons">
                                    edit
                                </i>
                                Edit Gantt
                            </button>
                            &nbsp;
                            <button
                                style="background-color: #dc3545; color: white;"
                                class="button"
                                v-if="founded && loading.isLoading == false"
                                v-on:click="syncGanttDate()"
                            >
                                <i class="material-icons">
                                    date_range
                                </i>
                                Sync Date
                            </button>
                        </div>

                        <div class="option-item">
                            <button
                                class="button"
                                v-if="founded && loading.isLoading == false"
                                v-on:click="$router.go(-1)"
                            >
                                <i class="material-icons">
                                    settings_backup_restore
                                </i>
                                Back
                            </button>
                            <!-- &nbsp;
                            <button  class="button" v-if="founded && loading.isLoading == false" v-on:click="handlerFullScreen()">
                                <i class='material-icons'>
                                    fullscreen
                                </i>
                                Fullscreen
                            </button> -->
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <loading
                        :active.sync="loading.isLoading"
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType"
                    >
                    </loading>
                    <loading
                        :active.sync="loading.isLoadingSyncDate"
                        :can-cancel="false"
                        :is-full-page="false"
                        :color="loading.color"
                        :loader="loading.loaderType"
                    >
                    </loading>

                    <div v-if="!loading.isLoading">
                        <div v-if="!founded">
                            <div class="alert is-focus">
                                Gantt chart data not found on this version !
                                <div style="margin-top: 10px;">
                                    <button
                                        v-on:click="$router.go(-1)"
                                        style="color:#fafafa; background-color: #f93232;"
                                        class="button is-small is-destructive"
                                    >
                                        Turn me back
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div v-else class="">
                            <template>
                                <div
                                    id="gantt_area"
                                    style="display: none;"
                                ></div>
                                <div class="box-gantt-chart" id="exportarea">
                                    <gantt
                                        v-if="founded && !loading.isLoading"
                                        style="style='width:100%; height: auto;"
                                        class="left-container zoom-normal"
                                        :columns="gantt.columns"
                                        :tasks="gantt.tasks"
                                        :pg="$route.params.pg_id"
                                        :daily="gantt.daily"
                                        callfrom="'tracking'"
                                    >
                                    </gantt>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <!-- modal menu -->
            <div
                style="margin-top: -50px;"
                data-keyboard="false"
                data-backdrop="static"
                class="modal-box"
                id="modal-production-planning"
            >
                <div class="modal lgw">
                    <span
                        class="close"
                        v-on:click="handlerCloseDailyMenu()"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Daily Menu <span id="daily-menu-title"></span>
                        </h2>
                    </div>
                    <div
                        class="modal-body modal-production-planning"
                        style="position: relative; background-color: #F3F7FB;"
                    >
                        <div style="min-height: 100vh;">
                            <loading
                                :active.sync="loading.isLoadingJob"
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType"
                            >
                            </loading>

                            <input
                                v-model="pg_data.f_pg_id"
                                type="hidden"
                                id="daily-menu-pg-id"
                            />
                            <input
                                v-model="pg_data.f_date"
                                type="hidden"
                                id="daily-menu-date"
                            />
                            <input
                                v-model="pg_data.f_shift"
                                type="hidden"
                                id="daily-menu-shift"
                            />
                            <input
                                v-model="pg_data.f_index"
                                type="hidden"
                                id="daily-menu-index"
                            />
                            <input
                                v-model="pg_data.f_type"
                                type="hidden"
                                id="daily-menu-type"
                            />
                            <input
                                v-model="pg_data.f_status"
                                type="hidden"
                                id="daily-menu-status"
                            />
                            <div class="is-row" style="margin-bottom: 0px;">
                                <div
                                    v-if="container.order"
                                    class="is-col is-20"
                                >
                                    <div style="min-height: 97vh" class="card">
                                        <div class="card-header">
                                            <b>Container Order</b>
                                        </div>
                                        <div class="card-content">
                                            <div
                                                class=""
                                                id="suggestion-area"
                                                style="padding-bottom: 10px;"
                                            >
                                                <div>
                                                    <div
                                                        style="padding-bottom: 10px;"
                                                    >
                                                        <div class="card">
                                                            <input
                                                                v-model="filter"
                                                                v-on:change="
                                                                    handlerFilterJob()
                                                                "
                                                                placeholder="Order Number"
                                                                type="text"
                                                                name=""
                                                                id=""
                                                            />
                                                            <table
                                                                class="is-bordered table-suggestion"
                                                            >
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            Phase
                                                                        </th>
                                                                        <th>
                                                                            Task
                                                                        </th>
                                                                        <th>
                                                                            Area
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                            </table>
                                                            <div
                                                                style="max-height: 50px; overflow: auto;"
                                                            >
                                                                <table>
                                                                    <tr
                                                                        v-for="(suggest,
                                                                        index) in detail_suggest"
                                                                        :key="
                                                                            index
                                                                        "
                                                                    >
                                                                        <td
                                                                            align="center"
                                                                        >
                                                                            {{
                                                                                suggest.phase
                                                                            }}
                                                                        </td>
                                                                        <td
                                                                            align="center"
                                                                        >
                                                                            {{
                                                                                suggest.task
                                                                            }}
                                                                        </td>
                                                                        <td
                                                                            align="center"
                                                                        >
                                                                            {{
                                                                                suggest.area
                                                                            }}
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="card"
                                                        v-if="!is_search"
                                                    >
                                                        <div
                                                            style="padding-bottom: 5px;"
                                                        >
                                                            <b>Suggestion</b>
                                                        </div>
                                                        <div
                                                            class="box-suggestion"
                                                        >
                                                            <draggable
                                                                style="min-height: 100px; min-width: 100%;"
                                                                class="list-suggestion"
                                                                :list="
                                                                    suggestion_order
                                                                "
                                                                group="order"
                                                                @end="
                                                                    handlerPutResume
                                                                "
                                                                :move="
                                                                    handlerMoveJobSuggestion
                                                                "
                                                            >
                                                                <div
                                                                    v-for="(element,
                                                                    index) in suggestion_order"
                                                                    :key="index"
                                                                    class="card-order"
                                                                >
                                                                    <div
                                                                        :class="
                                                                            'card card-box ' +
                                                                                handlerClassJob(
                                                                                    element.order_type
                                                                                )
                                                                        "
                                                                    >
                                                                        <div
                                                                            class="is-table-container"
                                                                        >
                                                                            <table
                                                                                class="table-order-child"
                                                                            >
                                                                                <tr>
                                                                                    <td>
                                                                                        Order
                                                                                        No
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.order_no
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Desc
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.order_desc
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Type
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.order_activity_type
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Skill
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                        v-html="
                                                                                            handlerSkillColorOrder(
                                                                                                element.skill_set
                                                                                            )
                                                                                        "
                                                                                    ></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        Plan
                                                                                        Mhrs
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.plan_mhrs
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        Seq
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.seq
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                            </table>

                                                                            <br />
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
                                                    :active.sync="
                                                        loading.isLoadingAllJob
                                                    "
                                                    :can-cancel="false"
                                                    :is-full-page="false"
                                                    :color="loading.color"
                                                    :loader="loading.loaderType"
                                                >
                                                </loading>
                                                <b>All Order</b>
                                                <div class="box-all-order">
                                                    <draggable
                                                        style="min-height: 100px; min-width: 100%;"
                                                        class="list-all-order"
                                                        :list="all_order"
                                                        group="order"
                                                        @end="handlerPutResume"
                                                        :move="
                                                            handlerMoveJobAll
                                                        "
                                                    >
                                                        <div
                                                            v-for="(element,
                                                            index) in all_order"
                                                            :key="index"
                                                            class="card-order"
                                                        >
                                                            <div
                                                                :class="
                                                                    'card card-box ' +
                                                                        handlerClassJob(
                                                                            element.order_type
                                                                        )
                                                                "
                                                            >
                                                                <div
                                                                    class="is-table-container"
                                                                >
                                                                    <table
                                                                        class="table-order-child"
                                                                    >
                                                                        <tr>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                Order
                                                                            </td>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                :
                                                                            </td>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                {{
                                                                                    element.order_no
                                                                                }}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                Desc
                                                                            </td>
                                                                            <td>
                                                                                :
                                                                            </td>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                {{
                                                                                    element.order_desc
                                                                                }}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                Type
                                                                            </td>
                                                                            <td>
                                                                                :
                                                                            </td>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                {{
                                                                                    element.order_activity_type
                                                                                }}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                Skill
                                                                            </td>
                                                                            <td>
                                                                                :
                                                                            </td>
                                                                            <td
                                                                                nowrap
                                                                                v-html="
                                                                                    handlerSkillColorOrder(
                                                                                        element.skill_set
                                                                                    )
                                                                                "
                                                                            ></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                Pmhrs
                                                                            </td>
                                                                            <td>
                                                                                :
                                                                            </td>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                {{
                                                                                    element.plan_mhrs
                                                                                }}
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                Seq
                                                                            </td>
                                                                            <td>
                                                                                :
                                                                            </td>
                                                                            <td
                                                                                nowrap
                                                                            >
                                                                                {{
                                                                                    element.seq
                                                                                }}
                                                                            </td>
                                                                        </tr>
                                                                    </table>

                                                                    <br />
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
                                                    <button
                                                        class="button is-success"
                                                        v-if="
                                                            founded &&
                                                                loading.isLoading ==
                                                                    false
                                                        "
                                                        v-on:click="
                                                            handlerPrintDailyMenu()
                                                        "
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
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
                                                    <div
                                                        style="text-align: center;"
                                                        class="is-col is-25"
                                                    >
                                                        <div>Job</div>
                                                    </div>
                                                    <div class="is-col is-5">
                                                        <div
                                                            style="text-align: center;"
                                                        >
                                                            Skill
                                                        </div>
                                                    </div>
                                                    <div class="is-col is-10">
                                                        <div
                                                            style="text-align: center;"
                                                        >
                                                            Pmhrs
                                                        </div>
                                                    </div>
                                                    <div
                                                        style="text-align: center;"
                                                        class="is-col is-20"
                                                    >
                                                        <div>Material</div>
                                                    </div>
                                                    <div
                                                        style="text-align: center;"
                                                        class="is-col is-15"
                                                    >
                                                        <div>Tools</div>
                                                    </div>
                                                    <div
                                                        style="text-align: center;"
                                                        class="is-col is-25"
                                                    >
                                                        <div>
                                                            Manpower Assigned
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="box-ressume">
                                                <draggable
                                                    style="min-height: 150px; min-width: 100%;"
                                                    class="list-resume"
                                                    :list="resume"
                                                    group="order"
                                                    :move="prepareMoveResume"
                                                    @end="handlerMoveResume"
                                                >
                                                    <div
                                                        v-for="(element,
                                                        index) in resume"
                                                        :key="index"
                                                        class="is-row"
                                                    >
                                                        <div
                                                            class="is-col is-25"
                                                        >
                                                            <div>
                                                                <div class="">
                                                                    <div
                                                                        :class="
                                                                            'card card-box-resume ' +
                                                                                handlerClassJob(
                                                                                    element.order_type
                                                                                )
                                                                        "
                                                                    >
                                                                        <div
                                                                            class="is-table-container"
                                                                        >
                                                                            <table
                                                                                class="table-order-child"
                                                                            >
                                                                                <tr>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        Order
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.order_no
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Desc
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.order_desc
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Type
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.order_activity_type
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        Seq
                                                                                    </td>
                                                                                    <td>
                                                                                        :
                                                                                    </td>
                                                                                    <td
                                                                                        nowrap
                                                                                    >
                                                                                        {{
                                                                                            element.seq
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                            </table>

                                                                            <br />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            style="text-align: center;"
                                                            class="is-col is-5"
                                                        >
                                                            <div
                                                                v-if="
                                                                    element.skill_set !==
                                                                        null
                                                                "
                                                                v-html="
                                                                    handlerSkillColorResume(
                                                                        element.skill_set
                                                                    )
                                                                "
                                                            ></div>
                                                        </div>
                                                        <div
                                                            style="text-align: center;"
                                                            class="is-col is-10"
                                                        >
                                                            {{
                                                                element.plan_mhrs
                                                            }}
                                                        </div>
                                                        <div
                                                            style="text-align: center"
                                                            class="is-col is-20"
                                                        >
                                                            <div
                                                                class="action-2"
                                                            >
                                                                <i
                                                                    v-on:click="
                                                                        handlerModalMaterial(
                                                                            pg_data.f_pg_id,
                                                                            element.order_no,
                                                                            index
                                                                        )
                                                                    "
                                                                    class="material-icons primary add-row"
                                                                    tabindex="0"
                                                                    >widgets</i
                                                                >
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="is-col is-15"
                                                        >
                                                            <div
                                                                style="text-align: center"
                                                                class="action-2"
                                                            >
                                                                <i
                                                                    v-on:click="
                                                                        handlerModalTools(
                                                                            pg_data.f_pg_id,
                                                                            element.order_no,
                                                                            index
                                                                        )
                                                                    "
                                                                    class="material-icons primary add-row"
                                                                    tabindex="0"
                                                                    >add_circle</i
                                                                >
                                                            </div>
                                                        </div>
                                                        <div
                                                            style="text-align: center;"
                                                            class="is-col is-25"
                                                        >
                                                            <draggable
                                                                style="min-height: 40px; min-width: 100%;"
                                                                :class="
                                                                    'list-power-' +
                                                                        index
                                                                "
                                                                :list="
                                                                    element.power
                                                                "
                                                                :group="{
                                                                    name:
                                                                        'people',
                                                                    pull: true,
                                                                    put: true
                                                                }"
                                                            >
                                                                <div
                                                                    class="card-power-box-selected"
                                                                    v-for="(power,
                                                                    indexpower) in element.power"
                                                                    :key="
                                                                        indexpower
                                                                    "
                                                                >
                                                                    <div
                                                                        :class="
                                                                            'card card-power-selected ' +
                                                                                handlerColorManpower(
                                                                                    power.SKILLCATEG
                                                                                )
                                                                        "
                                                                    >
                                                                        {{
                                                                            handlerManpowerName(
                                                                                power.NAMA
                                                                            )
                                                                        }}
                                                                        ({{
                                                                            power.SKILLCATEG
                                                                        }})
                                                                    </div>
                                                                </div>
                                                            </draggable>
                                                        </div>
                                                    </div>
                                                </draggable>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style="padding-top: 10px; text-align: center;"
                                    >
                                        <div class="is-row">
                                            <div class="is-col">
                                                Skill Need :
                                                <b>
                                                    <span
                                                        v-if="
                                                            skill_need.length <
                                                                1
                                                        "
                                                        >-</span
                                                    >
                                                    <span v-else>
                                                        <span
                                                            v-for="(skill,
                                                            index) in skill_need"
                                                            :key="index"
                                                        >
                                                            <span
                                                                v-if="
                                                                    index ==
                                                                        skill_need.length -
                                                                            1
                                                                "
                                                                >{{
                                                                    skill
                                                                }}</span
                                                            >
                                                            <span v-else
                                                                >{{
                                                                    skill
                                                                }},</span
                                                            >
                                                        </span>
                                                    </span>
                                                </b>
                                            </div>
                                            <div class="is-col">
                                                Total Pmhrs:
                                                <b
                                                    >{{
                                                        total_mhrs.toFixed(2)
                                                    }}
                                                    mhrs</b
                                                >
                                            </div>
                                            <div class="is-col">
                                                Manpower Assigned :
                                                <b>{{ total_manpower }}</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-if="container.manpower"
                                    class="is-col is-20"
                                >
                                    <div style="min-height: 97vh" class="card">
                                        <loading
                                            :active.sync="
                                                loading.isLoadingManpower
                                            "
                                            :can-cancel="false"
                                            :is-full-page="false"
                                            :color="loading.color"
                                            :loader="loading.loaderType"
                                        >
                                        </loading>
                                        <div class="card-header">
                                            <b>Manpower</b>
                                        </div>
                                        <div class="card-content">
                                            <div style="padding-bottom: 10px;">
                                                <input
                                                    v-on:change="
                                                        handlerFilterManPower()
                                                    "
                                                    v-model="filter_manpower"
                                                    type="text"
                                                    placeholder="Search"
                                                />
                                            </div>
                                            <div style="padding-bottom: 10px;">
                                                <button
                                                    v-on:click="
                                                        handlerInitManpower()
                                                    "
                                                    style="width: 100%;"
                                                    class="button is-success"
                                                    type="button"
                                                >
                                                    Show All
                                                </button>
                                            </div>
                                            <div class="main-box-card-power">
                                                <div
                                                    v-for="(element,
                                                    index) in manpower"
                                                    :key="index"
                                                >
                                                    <div
                                                        style="padding-bottom: 10px !important;"
                                                    >
                                                        <div
                                                            class="card"
                                                            style="padding-bottom: 3px !important"
                                                        >
                                                            <div
                                                                class="card-header no-border"
                                                            >
                                                                <div
                                                                    class="btn-panel-toggle"
                                                                    v-on:click="
                                                                        handlerCollapse(
                                                                            element.type ==
                                                                                'DWS On' ||
                                                                                element.type ==
                                                                                    'Search Result'
                                                                                ? 'btn-panel-dws-on'
                                                                                : 'btn-panel-dws-off',
                                                                            element.type ==
                                                                                'DWS On' ||
                                                                                element.type ==
                                                                                    'Search Result'
                                                                                ? 'dws_on'
                                                                                : 'dws_off'
                                                                        )
                                                                    "
                                                                >
                                                                    <i
                                                                        :id="
                                                                            element.type ==
                                                                                'DWS On' ||
                                                                            element.type ==
                                                                                'Search Result'
                                                                                ? 'btn-panel-dws-on'
                                                                                : 'btn-panel-dws-off'
                                                                        "
                                                                        class="material-icons"
                                                                    >
                                                                        {{
                                                                            element.type ==
                                                                                "DWS On" ||
                                                                            element.type ==
                                                                                "Search Result"
                                                                                ? "keyboard_arrow_down"
                                                                                : "keyboard_arrow_right"
                                                                        }}
                                                                    </i>
                                                                    <div
                                                                        style="margin-top: -26px; margin-left: 23px;  "
                                                                    >
                                                                        <b>{{
                                                                            element.type
                                                                        }}</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <transition
                                                                v-show="
                                                                    panel[
                                                                        element.type ==
                                                                            'DWS On' ||
                                                                        element.type ==
                                                                            'Search Result'
                                                                            ? 'dws_on'
                                                                            : 'dws_off'
                                                                    ]
                                                                "
                                                                name="panel-collapse"
                                                            >
                                                                <div
                                                                    v-show="
                                                                        panel[
                                                                            element.type ==
                                                                                'DWS On' ||
                                                                            element.type ==
                                                                                'Search Result'
                                                                                ? 'dws_on'
                                                                                : 'dws_off'
                                                                        ]
                                                                    "
                                                                    class="card-content"
                                                                >
                                                                    <div
                                                                        v-for="(elm,
                                                                        idx) in element.data"
                                                                        :key="
                                                                            idx
                                                                        "
                                                                        style="padding-bottom: 10px;"
                                                                    >
                                                                        <div
                                                                            :class="
                                                                                'card ' +
                                                                                    handlerColorManpower(
                                                                                        elm.skill
                                                                                    )
                                                                            "
                                                                            style="padding-bottom: 3px !important; color: white;"
                                                                        >
                                                                            <div
                                                                                class="card-header no-border"
                                                                            >
                                                                                <div
                                                                                    class="btn-panel-toggle"
                                                                                    v-on:click="
                                                                                        handlerCollapse(
                                                                                            element.type ==
                                                                                                'DWS On' ||
                                                                                                element.type ==
                                                                                                    'Search Result'
                                                                                                ? 'btn-panel-dws-on-' +
                                                                                                      elm.skill
                                                                                                : 'btn-panel-dws-off-' +
                                                                                                      elm.skill,
                                                                                            element.type ==
                                                                                                'DWS On' ||
                                                                                                element.type ==
                                                                                                    'Search Result'
                                                                                                ? 'dws_on_' +
                                                                                                      elm.skill
                                                                                                : 'dws_off_' +
                                                                                                      elm.skill
                                                                                        )
                                                                                    "
                                                                                >
                                                                                    <i
                                                                                        :id="
                                                                                            element.type ==
                                                                                                'DWS On' ||
                                                                                            element.type ==
                                                                                                'Search Result'
                                                                                                ? 'btn-panel-dws-on-' +
                                                                                                  elm.skill
                                                                                                : 'btn-panel-dws-off-' +
                                                                                                  elm.skill
                                                                                        "
                                                                                        class="material-icons"
                                                                                    >
                                                                                        keyboard_arrow_right
                                                                                    </i>
                                                                                    <div
                                                                                        style="margin-top: -26px; margin-left: 23px;  "
                                                                                    >
                                                                                        <b
                                                                                            >{{
                                                                                                handlerSkill(
                                                                                                    elm.skill
                                                                                                )
                                                                                            }}</b
                                                                                        >
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <transition
                                                                                v-show="
                                                                                    panel[
                                                                                        element.type ==
                                                                                            'DWS On' ||
                                                                                        element.type ==
                                                                                            'Search Result'
                                                                                            ? 'dws_on_' +
                                                                                              elm.skill
                                                                                            : 'dws_off_' +
                                                                                              elm.skill
                                                                                    ]
                                                                                "
                                                                                name="panel-collapse"
                                                                            >
                                                                                <div
                                                                                    v-show="
                                                                                        panel[
                                                                                            element.type ==
                                                                                                'DWS On' ||
                                                                                            element.type ==
                                                                                                'Search Result'
                                                                                                ? 'dws_on_' +
                                                                                                  elm.skill
                                                                                                : 'dws_off_' +
                                                                                                  elm.skill
                                                                                        ]
                                                                                    "
                                                                                    class="card-content"
                                                                                >
                                                                                    <div
                                                                                        class="box-card-manpower"
                                                                                    >
                                                                                        <draggable
                                                                                            class="list-group"
                                                                                            :list="
                                                                                                elm.power
                                                                                            "
                                                                                            :group="{
                                                                                                name:
                                                                                                    'people',
                                                                                                pull:
                                                                                                    'clone',
                                                                                                put: true
                                                                                            }"
                                                                                            @end="
                                                                                                handlerPullPower
                                                                                            "
                                                                                            @change="
                                                                                                handlerChangeManpower
                                                                                            "
                                                                                        >
                                                                                            <div
                                                                                                class="card-power-box"
                                                                                                v-for="(power,
                                                                                                idxpower) in elm.power"
                                                                                                :key="
                                                                                                    idxpower
                                                                                                "
                                                                                            >
                                                                                                <div
                                                                                                    :class="
                                                                                                        'card card-power ' +
                                                                                                            handlerClock(
                                                                                                                power.CLOCK
                                                                                                            )
                                                                                                    "
                                                                                                >
                                                                                                    <i
                                                                                                        style="font-size: 12pt !important;"
                                                                                                        class="material-icons"
                                                                                                    >
                                                                                                        {{
                                                                                                            handlerClock(
                                                                                                                power.CLOCK
                                                                                                            ) ==
                                                                                                            "in"
                                                                                                                ? "alarm_on"
                                                                                                                : "alarm_off"
                                                                                                        }}
                                                                                                    </i>
                                                                                                    <div
                                                                                                        style="margin-top: -20px; margin-left: 20px;"
                                                                                                    >
                                                                                                        {{
                                                                                                            handlerManpowerName(
                                                                                                                power.NAMA
                                                                                                            )
                                                                                                        }}
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
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="handlerCloseDailyMenu()"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerSaveDailyMenu()"
                            class="button is-success"
                            type="submit"
                            id="btn-save-data"
                        >
                            Save
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- modal menu -->

            <!-- modal material -->
            <div class="modal-box" id="modal-detail-material">
                <div class="modal md">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-detail-material')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Material Required
                            <span id="modal-order-number"></span>
                        </h2>
                    </div>
                    <div class="modal-body" style="position: relative;">
                        <loading
                            :active.sync="loading.isLoadingGanttMaterial"
                            :can-cancel="true"
                            :is-full-page="false"
                            :color="loading.color"
                            :loader="loading.loaderType"
                        >
                        </loading>
                        <template>
                            <div>
                                <vue-good-table
                                    :columns="material.field"
                                    :rows="material.rows"
                                    styleClass="vgt-table bordered striped"
                                    :search-options="{
                                        enabled: true,
                                        trigger: 'keyup',
                                        skipDiacritics: true,
                                        placeholder: 'Fill to search'
                                    }"
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
                                        allLabel: 'All'
                                    }"
                                >
                                </vue-good-table>
                            </div>
                        </template>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-detail-material')"
                        >
                            Close
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal material -->

            <!-- modal tools -->
            <div
                style="margin-top: -50px"
                data-keyboard="false"
                data-backdrop="static"
                class="modal-box"
                id="modal-detail-tools"
            >
                <div class="modal xl">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-detail-tools')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Tools Required
                            <span id="modal-tools-required"></span>
                        </h2>
                    </div>
                    <div class="modal-body" style="position: relative;">
                        <div style="min-height: 100vh">
                            <loading
                                :active.sync="loading.isLoadingGanttTools"
                                :can-cancel="true"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType"
                            >
                            </loading>

                            <template>
                                <div>
                                    <vue-good-table
                                        ref="tableMasterTools"
                                        :columns="m_tools.fields"
                                        :rows="m_tools.rows"
                                        styleClass="vgt-table bordered striped"
                                        mode="remote"
                                        max-height="20vh"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder:
                                                'Fill and enter to search'
                                        }"
                                        :sort-options="{
                                            enabled: true,
                                            initialSortBy: {
                                                field: '',
                                                type: ''
                                            }
                                        }"
                                        @on-search="onColumnSearch"
                                        @on-page-change="onPageChange"
                                        @on-sort-change="onSortChange"
                                        @on-column-filter="onColumnFilter"
                                        @on-per-page-change="onPerPageChange"
                                        :totalRows="m_tools.totalRows"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'pages',
                                            perPage:
                                                m_tools.serverParams.perPage,
                                            position: 'bottom',
                                            perPageDropdown:
                                                m_tools.perPageDropDown,
                                            dropdownAllowAll: true,
                                            setCurrentPage:
                                                m_tools.serverParams.page,
                                            nextLabel: 'Next',
                                            prevLabel: 'Prev',
                                            rowsPerPageLabel: 'Rows per page',
                                            ofLabel: 'of',
                                            pageLabel: 'page', // for 'pages' mode
                                            allLabel: 'All'
                                        }"
                                    >
                                        <div slot="table-actions">
                                            <div
                                                class="toolbar toolbar-default"
                                            >
                                                <div
                                                    class="toolbar-item"
                                                    style="padding-right: 12px;"
                                                >
                                                    <button
                                                        disabled
                                                        class="button is-success"
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
                                                            format_list_numbered
                                                        </i>
                                                        List Tools
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
                                                        'action'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                    class="action-2"
                                                >
                                                    <i
                                                        v-if="
                                                            !is_daily_menu_expired
                                                        "
                                                        v-on:click="
                                                            handlerAddTools(
                                                                props.formattedRow
                                                            )
                                                        "
                                                        class="material-icons primary add-row"
                                                        tabindex="0"
                                                        >add_circle</i
                                                    >
                                                    <i
                                                        v-else
                                                        class="material-icons disabled add-row"
                                                        tabindex="0"
                                                        >add_circle</i
                                                    >
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'location'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'nm_store'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'manufacture'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'status'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    <span
                                                        style="background: #28a745"
                                                        v-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] !== null &&
                                                                props.formattedRow[
                                                                    props.column
                                                                        .field
                                                                ].toLowerCase() ==
                                                                    'available'
                                                        "
                                                        class="label"
                                                        >{{
                                                            capitalizeFLetter(
                                                                props
                                                                    .formattedRow[
                                                                    props.column
                                                                        .field
                                                                ]
                                                            )
                                                        }}</span
                                                    >
                                                    <span
                                                        style="background: #ffc107"
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] !== null &&
                                                                props.formattedRow[
                                                                    props.column
                                                                        .field
                                                                ].toLowerCase() ==
                                                                    'calibration'
                                                        "
                                                        class="label is-success"
                                                        >{{
                                                            capitalizeFLetter(
                                                                props
                                                                    .formattedRow[
                                                                    props.column
                                                                        .field
                                                                ]
                                                            )
                                                        }}</span
                                                    >
                                                    <span
                                                        style="background: #6c757d"
                                                        v-else
                                                        class="label"
                                                        >{{
                                                            capitalizeFLetter(
                                                                props
                                                                    .formattedRow[
                                                                    props.column
                                                                        .field
                                                                ]
                                                            )
                                                        }}</span
                                                    >
                                                </div>
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
                                    </vue-good-table>
                                </div>
                            </template>
                            <!--template>
                                <div>
                                    <vue-good-table
                                        :columns="tools.field"
                                        :rows="tools.rows"
                                        styleClass="vgt-table bordered striped"
                                        max-height="60vh"
                                        :search-options="{
                                            enabled: true,
                                            trigger: 'keyup',
                                            skipDiacritics: true,
                                            placeholder: 'Fill to search'
                                        }"
                                        :pagination-options="{
                                            enabled: true,
                                            mode: 'records',
                                            perPage: -1,
                                            position: 'bottom',
                                            perPageDropdown: datatable.perPage,
                                            dropdownAllowAll: true,
                                            setCurrentPage: 1,
                                            nextLabel: 'Next',
                                            prevLabel: 'Prev',
                                            rowsPerPageLabel: 'Rows per page',
                                            ofLabel: 'of',
                                            pageLabel: 'page', // for 'pages' mode
                                            allLabel: 'All'
                                        }"
                                    >
                                        <div slot="table-actions">
                                            <div
                                                class="toolbar toolbar-default"
                                            >
                                                <div
                                                    class="toolbar-item"
                                                    style="padding-right: 12px;"
                                                >
                                                    <button
                                                        disabled
                                                        class="button is-success"
                                                    >
                                                        <i
                                                            class="material-icons"
                                                        >
                                                            playlist_add_check
                                                        </i>
                                                        Tools Added
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
                                                        'action'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                    class="action-2"
                                                >
                                                    <i
                                                        v-if="
                                                            !is_daily_menu_expired
                                                        "
                                                        v-on:click="
                                                            handlerRemoveTools(
                                                                props.index
                                                            )
                                                        "
                                                        class="material-icons danger add-row"
                                                        tabindex="0"
                                                        >delete</i
                                                    >
                                                    <i
                                                        v-else
                                                        class="material-icons disabled add-row"
                                                        tabindex="0"
                                                        >delete</i
                                                    >
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'location'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'nm_store'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'manufacture'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    {{
                                                        props.formattedRow[
                                                            props.column.field
                                                        ]
                                                    }}
                                                </div>
                                            </span>
                                            <span
                                                v-else-if="
                                                    props.column.field ==
                                                        'status'
                                                "
                                            >
                                                <div
                                                    style="text-align: center;"
                                                >
                                                    <span
                                                        style="background: #28a745"
                                                        v-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] !== null &&
                                                                props.formattedRow[
                                                                    props.column
                                                                        .field
                                                                ].toLowerCase() ==
                                                                    'available'
                                                        "
                                                        class="label"
                                                        >{{
                                                            capitalizeFLetter(
                                                                props
                                                                    .formattedRow[
                                                                    props.column
                                                                        .field
                                                                ]
                                                            )
                                                        }}</span
                                                    >
                                                    <span
                                                        style="background: #ffc107"
                                                        v-else-if="
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ] !== null &&
                                                                props.formattedRow[
                                                                    props.column
                                                                        .field
                                                                ].toLowerCase() ==
                                                                    'calibration'
                                                        "
                                                        class="label is-success"
                                                        >{{
                                                            capitalizeFLetter(
                                                                props
                                                                    .formattedRow[
                                                                    props.column
                                                                        .field
                                                                ]
                                                            )
                                                        }}</span
                                                    >
                                                    <span
                                                        style="background: #6c757d"
                                                        v-else
                                                        class="label"
                                                        >{{
                                                            capitalizeFLetter(
                                                                props
                                                                    .formattedRow[
                                                                    props.column
                                                                        .field
                                                                ]
                                                            )
                                                        }}</span
                                                    >
                                                </div>
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
                                    </vue-good-table>
                                </div>
                            </template-->
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-detail-tools')"
                        >
                            Close
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>

            <!-- modal daily report -->
            <div
                style="margin-top: -50px;"
                data-keyboard="false"
                data-backdrop="static"
                class="modal-box"
                id="modal-daily-report"
            >
                <div class="modal lgw">
                    <span
                        class="close"
                        v-on:click="handlerCloseDailyReport()"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Hand Over <span id="daily-report-title"></span>
                        </h2>
                    </div>
                    <div
                        class="modal-body"
                        style="position: relative; background-color: #F3F7FB;"
                    >
                        <div style="min-height: 100vh">
                            <loading
                                :active.sync="loading.isLoadingGanttDailyReport"
                                :can-cancel="false"
                                :is-full-page="false"
                                :color="loading.color"
                                :loader="loading.loaderType"
                            >
                            </loading>

                            <input
                                v-model="daily_report.f_pg_id"
                                type="hidden"
                                id="daily-report-pg-id"
                            />
                            <input
                                v-model="daily_report.f_date"
                                type="hidden"
                                id="daily-report-date"
                            />
                            <input
                                v-model="daily_report.f_shift"
                                type="hidden"
                                id="daily-report-shift"
                            />
                            <input
                                v-model="daily_report.f_index"
                                type="hidden"
                                id="daily-report-index"
                            />
                            <input
                                v-model="daily_report.f_type"
                                type="hidden"
                                id="daily-report-type"
                            />
                            <input
                                v-model="daily_report.f_status"
                                type="hidden"
                                id="daily-report-status"
                            />

                            <div class="is-row">
                                <div class="is-col">
                                    <div class="card">
                                        <div class="card-header no border">
                                            <div class="title-area">
                                                <button
                                                    class="button is-success"
                                                    v-if="
                                                        founded &&
                                                            loading.isLoading ==
                                                                false
                                                    "
                                                    v-on:click="
                                                        handlerModalPrintReport()
                                                    "
                                                >
                                                    <i class="material-icons">
                                                        insert_drive_file
                                                    </i>
                                                    PDF
                                                </button>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            <div class="is-table-container">
                                                <table
                                                    class="is-bordered is-striped"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                rowspan="2"
                                                                style="text-align: center"
                                                                width="5%"
                                                            >
                                                                <div
                                                                    style="text-align: center;"
                                                                    class="action-2"
                                                                >
                                                                    <i
                                                                        v-on:click="
                                                                            handlerModalAddReport()
                                                                        "
                                                                        class="material-icons success add-row"
                                                                        tabindex="0"
                                                                        >add_circle</i
                                                                    >
                                                                </div>
                                                            </th>
                                                            <th
                                                                style="text-align: center;"
                                                                rowspan="2"
                                                                width="8%"
                                                            >
                                                                Order
                                                            </th>
                                                            <th
                                                                style="text-align: center;"
                                                                rowspan="2"
                                                                width="8%"
                                                            >
                                                                Description
                                                            </th>
                                                            <th
                                                                style="text-align: center;"
                                                                rowspan="2"
                                                                width="4%"
                                                            >
                                                                Type
                                                            </th>
                                                            <th
                                                                style="text-align: center"
                                                                rowspan="2"
                                                                width="4%"
                                                            >
                                                                Skill
                                                            </th>
                                                            <th
                                                                style="text-align: center"
                                                                rowspan="2"
                                                                width="10%"
                                                            >
                                                                Manpower Plan
                                                            </th>
                                                            <th
                                                                style="text-align: center;"
                                                                rowspan="2"
                                                                width="4%"
                                                            >
                                                                Tools
                                                            </th>
                                                            <th
                                                                style="text-align: center"
                                                                rowspan="2"
                                                                width="4%"
                                                            >
                                                                Pmhrs
                                                            </th>
                                                            <th
                                                                rowspan="2"
                                                                style="text-align: center"
                                                                width="5%"
                                                            >
                                                                Act Mhrs
                                                            </th>
                                                            <th
                                                                style="text-align: center"
                                                                rowspan="2"
                                                                width="14%"
                                                            >
                                                                Manpower Act
                                                            </th>
                                                            <th
                                                                rowspan="2"
                                                                style="text-align: center"
                                                                width="5%"
                                                            >
                                                                Barcode Status
                                                            </th>
                                                            <th
                                                                style="text-align: center;"
                                                                colspan="3"
                                                                width="10%"
                                                            >
                                                                Actual Status
                                                            </th>
                                                            <th
                                                                style="text-align: center"
                                                                rowspan="2"
                                                                width="8%"
                                                            >
                                                                Mhrs Status
                                                            </th>
                                                            <th
                                                                style="text-align: center"
                                                                rowspan="2"
                                                                width="11%"
                                                            >
                                                                Remarks
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th
                                                                style="text-align: center;"
                                                            >
                                                                O
                                                            </th>
                                                            <th
                                                                style="text-align: center;"
                                                            >
                                                                P
                                                            </th>
                                                            <th
                                                                style="text-align: center;"
                                                            >
                                                                C
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr
                                                            v-for="(row,
                                                            index) in d_reports"
                                                            :key="index"
                                                        >
                                                            <td
                                                                style="text-align: center;"
                                                            >
                                                                <div
                                                                    class="action-report tooltip-x"
                                                                >
                                                                    <span
                                                                        v-if="
                                                                            row.is_daily ===
                                                                                'Y'
                                                                        "
                                                                        class="tooltiptext-x"
                                                                        >From
                                                                        Daily
                                                                        Menu</span
                                                                    >
                                                                    <span
                                                                        v-else-if="
                                                                            row.is_daily ===
                                                                                'B'
                                                                        "
                                                                        class="tooltiptext-x"
                                                                        >From
                                                                        Barcode</span
                                                                    >
                                                                    <span
                                                                        v-else
                                                                        class="tooltiptext-x"
                                                                        >From
                                                                        Manual
                                                                        Add</span
                                                                    >
                                                                    <i
                                                                        v-if="
                                                                            row.is_daily ===
                                                                                'Y'
                                                                        "
                                                                        class="material-icons primary add-row"
                                                                        tabindex="0"
                                                                    >
                                                                        event_note
                                                                    </i>
                                                                    <i
                                                                        v-else-if="
                                                                            row.is_daily ===
                                                                                'B'
                                                                        "
                                                                        class="material-icons barcode add-row"
                                                                        tabindex="0"
                                                                    >
                                                                        event_available
                                                                    </i>
                                                                    <i
                                                                        v-else-if="
                                                                            row.is_daily ===
                                                                                'A'
                                                                        "
                                                                        v-on:click="
                                                                            handlerRemoveAdditional(
                                                                                row.order_no,
                                                                                index
                                                                            )
                                                                        "
                                                                        class="material-icons additional add-row"
                                                                        tabindex="0"
                                                                    >
                                                                        event_busy
                                                                    </i>
                                                                    <i
                                                                        v-on:click="
                                                                            removeOrderReport(
                                                                                index
                                                                            )
                                                                        "
                                                                        v-else
                                                                        class="material-icons danger add-row"
                                                                        tabindex="0"
                                                                    >
                                                                        delete
                                                                    </i>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {{
                                                                    row.order_no
                                                                }}
                                                            </td>
                                                            <td>
                                                                <div
                                                                    style="padding: 5px 0px 5px 0px;"
                                                                >
                                                                    <button
                                                                        v-on:click="
                                                                            handlerModalOrderDesc(
                                                                                row.order_desc,
                                                                                row.order_no,
                                                                                row.desc,
                                                                                row.is_daily,
                                                                                index
                                                                            )
                                                                        "
                                                                        style="min-width:120px;height: 28px;line-height:28px;color:#465368;width:100%;background-color: #ffffff;border: 1px solid #7ecc80;"
                                                                        class="remarksS remarksS-803356826"
                                                                        remarkss=""
                                                                        tabindex="0"
                                                                    >
                                                                        Input
                                                                        Details
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {{
                                                                    row.order_type
                                                                }}
                                                            </td>
                                                            <td>
                                                                <div
                                                                    style="margin-left: 6px; padding: 5px 0px 5px 0px;"
                                                                >
                                                                    <div
                                                                        v-if="
                                                                            row.skill_set !==
                                                                                null
                                                                        "
                                                                        v-html="
                                                                            handlerSkillColorResume(
                                                                                row.skill_set
                                                                            )
                                                                        "
                                                                    ></div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div
                                                                    style="padding: 5px 0px 5px 0px;"
                                                                >
                                                                    <div
                                                                        v-for="(power,
                                                                        index) in row.power"
                                                                        :key="
                                                                            index
                                                                        "
                                                                    >
                                                                        <div
                                                                            style="font-size: 9pt; text-align: center;"
                                                                            :class="
                                                                                'card card-power-selected ' +
                                                                                    handlerColorManpower(
                                                                                        power.SKILLCATEG
                                                                                    )
                                                                            "
                                                                        >
                                                                            {{
                                                                                handlerManpowerName(
                                                                                    power.NAMA
                                                                                )
                                                                            }}
                                                                            ({{
                                                                                power.SKILLCATEG
                                                                            }})
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- {{row.manpower_plan}} -->
                                                            </td>
                                                            <td
                                                                style="text-align: center;"
                                                            >
                                                                <!-- {{row.tools}} -->
                                                                <div
                                                                    class="action-2"
                                                                >
                                                                    <i
                                                                        v-on:click="
                                                                            handlerModalToolsReport(
                                                                                row.order_no
                                                                            )
                                                                        "
                                                                        class="material-icons primary add-row"
                                                                        tabindex="0"
                                                                        >widgets</i
                                                                    >
                                                                </div>
                                                            </td>
                                                            <td
                                                                style="text-align: center;"
                                                            >
                                                                {{
                                                                    row.plan_mhrs
                                                                }}
                                                            </td>
                                                            <td
                                                                style="text-align: center;"
                                                            >
                                                                <div
                                                                    style="padding: 5px 0px 5px 0px;"
                                                                >
                                                                    <div
                                                                        v-for="(power,
                                                                        indexactmp) in row.act_manpower"
                                                                        :key="
                                                                            indexactmp
                                                                        "
                                                                    >
                                                                        {{
                                                                            power.ACT_MHRS
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div
                                                                    style="padding: 5px 0px 5px 0px;"
                                                                >
                                                                    <div
                                                                        v-for="(power,
                                                                        indexactmp) in row.act_manpower"
                                                                        :key="
                                                                            indexactmp
                                                                        "
                                                                    >
                                                                        <div
                                                                            style="font-size: 9pt; text-align: center;"
                                                                            :class="
                                                                                'card card-power-selected ' +
                                                                                    handlerColorManpower(
                                                                                        power.SKILLCATEG
                                                                                    )
                                                                            "
                                                                        >
                                                                            {{
                                                                                handlerManpowerName(
                                                                                    power.NAMA
                                                                                )
                                                                            }}
                                                                            ({{
                                                                                power.SKILLCATEG
                                                                            }})
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td
                                                                style="text-align: center;"
                                                            >
                                                                <div
                                                                    style="padding: 3px 0px 3px 0px;"
                                                                    v-for="(power,
                                                                    indexactmp) in row.act_manpower"
                                                                    :key="
                                                                        indexactmp
                                                                    "
                                                                >
                                                                    <span
                                                                        style="background-color: #13CE66; font-size: 9pt; width: 72px;"
                                                                        v-if="
                                                                            power.BARCODE_STATUS ===
                                                                                'START'
                                                                        "
                                                                        class="label is-success"
                                                                        >RUNNING</span
                                                                    >
                                                                    <span
                                                                        style="background-color: #6c757d; font-size: 9pt; width: 72px;"
                                                                        v-else-if="
                                                                            power.BARCODE_STATUS !==
                                                                                null &&
                                                                                power.BARCODE_STATUS !==
                                                                                    'START'
                                                                        "
                                                                        class="label is-success"
                                                                        >STOP</span
                                                                    >
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <input
                                                                    v-on:click="
                                                                        handlerChangeActStatus(
                                                                            row.order_no,
                                                                            'O'
                                                                        )
                                                                    "
                                                                    class="radio-status"
                                                                    value="O"
                                                                    :checked="
                                                                        (row.act_status ===
                                                                            'O' ||
                                                                            row
                                                                                .act_manpower
                                                                                .length <
                                                                                1) &&
                                                                            row.is_daily !==
                                                                                'D'
                                                                    "
                                                                    type="radio"
                                                                    :name="
                                                                        row.order_no +
                                                                            '_' +
                                                                            index
                                                                    "
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    v-on:click="
                                                                        handlerChangeActStatus(
                                                                            row.order_no,
                                                                            'P'
                                                                        )
                                                                    "
                                                                    class="radio-status"
                                                                    value="P"
                                                                    :checked="
                                                                        row.act_status ===
                                                                            'P' ||
                                                                            row
                                                                                .act_manpower
                                                                                .length >
                                                                                0
                                                                    "
                                                                    type="radio"
                                                                    :name="
                                                                        row.order_no +
                                                                            '_' +
                                                                            index
                                                                    "
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    v-on:click="
                                                                        handlerChangeActStatus(
                                                                            row.order_no,
                                                                            'C'
                                                                        )
                                                                    "
                                                                    class="radio-status"
                                                                    value="C"
                                                                    :checked="
                                                                        row.act_status ===
                                                                            'C'
                                                                    "
                                                                    type="radio"
                                                                    :name="
                                                                        row.order_no +
                                                                            '_' +
                                                                            index
                                                                    "
                                                                />
                                                            </td>
                                                            <td>
                                                                <div
                                                                    v-html="
                                                                        mhrsstatus(
                                                                            row.act_manpower,
                                                                            row.plan_mhrs
                                                                        )
                                                                    "
                                                                    style="padding: 5px 0px 5px 0px;"
                                                                ></div>
                                                            </td>
                                                            <td>
                                                                <div
                                                                    style="padding: 5px 0px 5px 0px;"
                                                                >
                                                                    <button
                                                                        v-on:click="
                                                                            handlerModalOrderRemarks(
                                                                                row.remarks,
                                                                                row.order_no,
                                                                                row.is_daily,
                                                                                index
                                                                            )
                                                                        "
                                                                        style="min-width:120px;height: 28px;line-height:28px;color:#465368;width:100%;background-color: #ffffff;border: 1px solid #7ecc80;"
                                                                        class="remarksS remarksS-803356826"
                                                                        remarkss=""
                                                                        tabindex="0"
                                                                    >
                                                                        Input
                                                                        Details
                                                                    </button>
                                                                </div>
                                                                <!-- {{row.remarks}} -->
                                                            </td>
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
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="handlerCloseDailyReport()"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerSaveDailyReport()"
                            class="button is-success"
                            type="submit"
                            id="btn-save-daily-report"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <!-- /modal daily report -->

            <!-- modal desc -->
            <div class="modal-box" id="modal-order-desc">
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-order-desc')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Order #<span id="title-order-desc"></span>
                        </h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label id="label-order-desc">Description</label>
                        <input type="hidden" id="idx-report-o" />
                        <textarea
                            tabindex="-1"
                            rows="10"
                            style="width: 100%;"
                            class="remarks"
                            id="det-order-desc"
                        ></textarea>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-order-desc')"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerSaveDescription()"
                            class="button is-success"
                            type="submit"
                            id="btn-save-report-desc"
                        >
                            Save
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal desc -->

            <!-- modal remarks -->
            <div class="modal-box" id="modal-order-remarks">
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-order-remarks')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Order #<span id="title-order-remarks"></span>
                        </h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>Remarks</label>
                        <textarea
                            tabindex="-1"
                            rows="10"
                            style="width: 100%;"
                            class="remarks"
                            id="det-order-remarks"
                        ></textarea>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-order-remarks')"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerSaveRemarks()"
                            class="button  is-success"
                            type="submit"
                            id="btn-save-report-remarks"
                        >
                            Save
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal remarks -->

            <!-- modal add report -->
            <div class="modal-box" id="modal-add-report">
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-add-report')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Add Order</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>Select Order</label>
                        <multiselect
                            v-model="m_order.selected"
                            placeholder="Type at least 4 characters to find order"
                            open-direction="bottom"
                            :options="m_order.items"
                            :multiple="true"
                            :custom-label="orderLabel"
                            label="order_no"
                            track-by="order_no"
                            :searchable="true"
                            :loading="m_order.loading"
                            :internal-search="false"
                            :clear-on-select="true"
                            :close-on-select="true"
                            :options-limit="300"
                            :limit="5"
                            :limit-text="limitText"
                            :max-height="600"
                            :show-no-results="false"
                            :hide-selected="true"
                            @search-change="handelrFindOrder($event)"
                        >
                        </multiselect>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-add-report')"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerAddReport()"
                            class="button is-success"
                            type="submit"
                            id="btn-add-report-order"
                        >
                            Add
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal add report -->

            <!-- modal tools report -->
            <div class="modal-box" id="modal-tools-report">
                <div class="modal lg">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-tools-report')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">
                            Order #<span id="title-order-tools"></span>
                        </h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <loading
                            :active.sync="loading.isLoadingGanttReportTools"
                            :can-cancel="true"
                            :is-full-page="false"
                            :color="loading.color"
                            :loader="loading.loaderType"
                        >
                        </loading>
                        <template>
                            <div>
                                <vue-good-table
                                    :columns="t_reports.field"
                                    :rows="t_reports.rows"
                                    styleClass="vgt-table bordered striped"
                                    :search-options="{
                                        enabled: true,
                                        trigger: 'keyup',
                                        skipDiacritics: true,
                                        placeholder: 'Fill to search'
                                    }"
                                    :pagination-options="{
                                        enabled: true,
                                        mode: 'records',
                                        perPage: -1,
                                        position: 'bottom',
                                        perPageDropdown: datatable.perPage,
                                        dropdownAllowAll: true,
                                        setCurrentPage: 1,
                                        nextLabel: 'Next',
                                        prevLabel: 'Prev',
                                        rowsPerPageLabel: 'Rows per page',
                                        ofLabel: 'of',
                                        pageLabel: 'page', // for 'pages' mode
                                        allLabel: 'All'
                                    }"
                                >
                                    <template
                                        slot="table-row"
                                        slot-scope="props"
                                    >
                                        <span
                                            v-if="
                                                props.column.field == 'status'
                                            "
                                        >
                                            <div style="text-align: center;">
                                                <span
                                                    style="background: #28a745"
                                                    v-if="
                                                        props.formattedRow[
                                                            props.column.field
                                                        ] !== null &&
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ].toLowerCase() ==
                                                                'available'
                                                    "
                                                    class="label"
                                                    >{{
                                                        capitalizeFLetter(
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        )
                                                    }}</span
                                                >
                                                <span
                                                    style="background: #ffc107"
                                                    v-else-if="
                                                        props.formattedRow[
                                                            props.column.field
                                                        ] !== null &&
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ].toLowerCase() ==
                                                                'calibration'
                                                    "
                                                    class="label is-success"
                                                    >{{
                                                        capitalizeFLetter(
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        )
                                                    }}</span
                                                >
                                                <span
                                                    style="background: #6c757d"
                                                    v-else
                                                    class="label"
                                                    >{{
                                                        capitalizeFLetter(
                                                            props.formattedRow[
                                                                props.column
                                                                    .field
                                                            ]
                                                        )
                                                    }}</span
                                                >
                                            </div>
                                        </span>
                                        <span v-else>
                                            <div class="flex-middle-default">
                                                {{
                                                    props.formattedRow[
                                                        props.column.field
                                                    ]
                                                }}
                                            </div>
                                        </span>
                                    </template>
                                </vue-good-table>
                            </div>
                        </template>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-tools-report')"
                        >
                            Close
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- /modal tools report -->
            <div
                class="modal-box"
                id="modal-export-report"
                data-keyboard="false"
                data-backdrop="static"
            >
                <div class="modal sm">
                    <span
                        class="close"
                        v-on:click="hideModal('modal-export-report')"
                    ></span>
                    <div class="modal-header">
                        <h2 class="title">Export Hand Over</h2>
                    </div>
                    <div class="modal-body" style="position: relative">
                        <label>
                            Export data <span class="is-req">*</span>
                        </label>
                        <div class="is-row">
                            <div class="form-item is-col is-50">
                                <select v-model="exp_data.out_crew">
                                    <option value="">Select Unit</option>
                                    <option
                                        v-for="(elem, index) in unit.unit"
                                        :key="index"
                                        :value="elem"
                                        >{{ elem }}</option
                                    >
                                </select>
                                <div class="is-desc">Outgoing Crew</div>
                            </div>
                            <div class="form-item is-col is-50">
                                <select v-model="exp_data.in_crew">
                                    <option value="">Select Unit</option>
                                    <option
                                        v-for="(elem, index) in unit.unit"
                                        :key="index"
                                        :value="elem"
                                        >{{ elem }}</option
                                    >
                                </select>
                                <div class="is-desc">Incoming Crew</div>
                            </div>
                        </div>
                        <div class="is-row">
                            <div class="form-item is-col is-50">
                                <select v-model="exp_data.out_manager">
                                    <option value="">Select Manager</option>
                                    <option
                                        v-for="(emp, index) in unit.employee"
                                        :key="index"
                                        :value="emp.nopeg"
                                        >{{
                                            emp.nama + " (" + emp.nopeg + ")"
                                        }}</option
                                    >
                                </select>
                                <div class="is-desc">Outgoing Manager</div>
                            </div>
                            <div class="form-item is-col is-50">
                                <select v-model="exp_data.in_manager">
                                    <option value="">Select Manager</option>
                                    <option
                                        v-for="(emp, index) in unit.employee"
                                        :key="index"
                                        :value="emp.nopeg"
                                        >{{
                                            emp.nama + " (" + emp.nopeg + ")"
                                        }}</option
                                    >
                                </select>
                                <div class="is-desc">Incoming Manager</div>
                            </div>
                        </div>
                        <div class="is-row">
                            <div class="form-item is-col is-90">
                                <multiselect
                                    v-model="m_emp.selected"
                                    placeholder="Search by nopeg or name (min 3 chars)"
                                    open-direction="bottom"
                                    :options="m_emp.items"
                                    :multiple="false"
                                    :custom-label="empLabel"
                                    label="nopeg"
                                    track-by="nopeg"
                                    :searchable="true"
                                    :loading="m_emp.loading"
                                    :internal-search="false"
                                    :clear-on-select="true"
                                    :close-on-select="true"
                                    :options-limit="300"
                                    :limit="5"
                                    :limit-text="limitText"
                                    :max-height="600"
                                    :show-no-results="false"
                                    :hide-selected="true"
                                    @search-change="handlerFindEmp($event)"
                                >
                                </multiselect>
                                <div class="is-desc">Outgoing Supervisior</div>
                            </div>
                            <div class="form-item is-col is-90">
                                <multiselect
                                    v-model="m_emp_in.selected"
                                    placeholder="Search by nopeg or name (min 3 chars)"
                                    open-direction="bottom"
                                    :options="m_emp_in.items"
                                    :multiple="false"
                                    :custom-label="empLabel"
                                    label="nopeg"
                                    track-by="nopeg"
                                    :searchable="true"
                                    :loading="m_emp_in.loading"
                                    :internal-search="false"
                                    :clear-on-select="true"
                                    :close-on-select="true"
                                    :options-limit="300"
                                    :limit="5"
                                    :limit-text="limitText"
                                    :max-height="600"
                                    :show-no-results="false"
                                    :hide-selected="true"
                                    @search-change="handlerFindEmpIn($event)"
                                >
                                </multiselect>
                                <div class="is-desc">Incoming Supervisior</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="">
                        <button
                            class="button is-primary is-default cancel"
                            v-on:click="hideModal('modal-export-report')"
                        >
                            Close
                        </button>
                        <button
                            v-on:click="handlerPrintDailyReport()"
                            class="button is-success"
                            type="submit"
                            id="btn-export-daily-report"
                        >
                            Export
                        </button>
                    </div>
                    <!-- </form> -->
                </div>
            </div>
            <!-- modal export -->
        </div>
    </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import draggable from "vuedraggable";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import FieldMaterial from "../../../module2/Gantt/datatable/FieldMaterial";
import FieldTools from "../../../module2/Gantt/datatable/FieldTools";
import FieldMasterTools from "../../../module2/Gantt/datatable/FieldMasterTools";
import FieldReportTools from "../../../module2/Gantt/datatable/FieldReportTools";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
// import '../../module2/Gantt/datatable/gantt';

import Gantt from "../../../module2/Gantt/GanttCopy.vue";

export default {
    name: "GanttChart",
    components: {
        Loading,
        Gantt,
        draggable,
        VueGoodTable,
        multiselect: Multiselect
    },

    props: {
        pg_id: null,
        version: null
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem("user"));
        }
    },

    data: () => ({
        founded: true,
        filter: "",
        filter_manpower: "",
        is_search: false,
        loading: {
            isLoading: true,
            isLoadingJob: false,
            isLoadingAllJob: false,
            isLoadingGanttMaterial: false,
            isLoadingGanttTools: false,
            isLoadingGanttMasterTools: false,
            isLoadingGanttDailyReport: false,
            isLoadingGanttReportTools: false,
            isLoadingSyncDate: false,
            btnMaterial: false,
            isLoadingManpower: false,
            fullPage: false,
            loaderType: "dots",
            color: "#0065ff"
        },
        material: {
            rows: [],
            field: FieldMaterial
        },

        tools: {
            rows: [],
            field: FieldTools
        },

        m_tools: {
            fields: FieldMasterTools,
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
                filter: {}
            },
            perPageDropDown: [10, 50, 100],
            selectedRows: []
        },

        datatable: {
            perPage: [10, 50, 100]
        },

        pg_data: {
            f_pg_id: "",
            f_date: "",
            f_shift: "",
            f_index: "",
            f_type: "",
            f_status: ""
        },

        daily_report: {
            f_pg_id: "",
            f_date: "",
            f_shift: "",
            f_index: "",
            f_type: "",
            f_status: ""
        },

        pg: {},
        gantt: {
            tasks: {
                data: []
            },
            columns: [
                {
                    name: "text",
                    width: "150",
                    align: "left",
                    label: "Task Name",
                    resize: true,
                    tree: true
                },
                {
                    name: "start_date",
                    width: "90",
                    align: "center",
                    label: "Start Time"
                },
                {
                    name: "duration",
                    width: "60",
                    align: "center",
                    label: "Duration"
                }
            ],
            daily: {
                data: []
            }
        },

        all_order: [],
        temp_all_order: [],
        suggestion_order: [],
        resume: [],
        detail_suggest: [],
        manpower: [],
        temp_manpower: [],
        manpower_container: [],
        total_mhrs: 0,
        total_manpower: 0,
        skill_need: [],

        data_tools: [],
        active_order: "",
        active_changed: false,
        dummy: [
            {
                pn: "pnxxxxxx123",
                sn: "dummy",
                keynumber: "dummy",
                description: "dummy",
                model: "dummy",
                manufacture: "dummy",
                nm_store: "dummy",
                location: "dummy",
                status: "dummy",
                barcode: "dummy"
            },
            {
                pn: "pnxxxxxx456",
                sn: "dummy",
                keynumber: "dummy",
                description: "dummy",
                model: "dummy",
                manufacture: "dummy",
                nm_store: "dummy",
                location: "dummy",
                status: "dummy",
                barcode: "dummy"
            }
        ],
        inited_order: [],
        is_daily_menu_expired: false,
        inited_modal_add_tools: false,

        panel: {
            description: false,
            dws_on: true,
            dws_off: false,

            dws_on_A1: false,
            dws_on_A2: false,
            dws_on_E1: false,
            dws_on_E2: false,
            dws_on_S: false,
            dws_on_C: false,
            dws_on_IS: false,
            dws_on_NA: false,

            dws_off_A1: false,
            dws_off_A2: false,
            dws_off_E1: false,
            dws_off_E2: false,
            dws_off_S: false,
            dws_off_C: false,
            dws_off_IS: false,
            dws_off_NA: false
        },

        d_reports: [],

        t_reports: {
            rows: [],
            field: FieldReportTools
        },

        d_report: [
            {
                daily_menu: "Y",
                order: "3213213",
                desc: "Dummy description",
                type: "GA01",
                skill: "A1,A2",
                manpower_plan: [
                    {
                        nopeg: "121232",
                        nama: "Dummy",
                        skillcateg: "A1"
                    },
                    {
                        nopeg: "121232",
                        nama: "Dummy",
                        skillcateg: "A2"
                    }
                ],
                pmhrs: "15",
                act_mhrs: "6",
                manpower_act: [
                    {
                        nopeg: "121232",
                        nama: "Dummy",
                        skillcateg: "A1"
                    },
                    {
                        nopeg: "121232",
                        nama: "Dummy",
                        skillcateg: "E1"
                    },
                    {
                        nopeg: "121232",
                        nama: "Dummy",
                        skillcateg: "C"
                    }
                ],
                barcode_status: "START",
                actual_status: "O",
                remarks: "Dummy"
            }
        ],

        m_order: {
            selected: [],
            items: [],
            loading: false
        },
        active_order_report: "",
        report_active_changed: false,
        pg_position: {},
        unit: {},
        unitcbn: {},
        unitstr: {},
        m_emp: {
            selected: [],
            items: [],
            loading: false
        },

        m_emp_in: {
            selected: [],
            items: [],
            loading: false
        },

        exp_data: {
            out_crew: "",
            in_crew: "",
            out_manager: "",
            in_manager: ""
        },

        container: {
            order: true,
            manpower: false
        },
        gantt_id: ""
    }),

    mounted() {
        this.getProject().then(() => {
            this.initUnit();
        });
        this.forceRerender();
    },

    watch: {
        "pg_data.f_index": function() {
            this.initData();
        },

        "daily_report.f_index": function() {
            this.initReport();
        },

        resume: {
            handler: function() {
                this.initTotalResume();
            },
            deep: true
        }
    },

    methods: {
        forceRerender: function() {
            this.founded = false;
            this.$nextTick(() => {
                this.initGantt();
            });
        },
        mhrsstatus(act_manpower, plnmhrs) {
            var count = Object.keys(act_manpower).length;
            var sum = 0;
            for (var i = 0; i < count; i++) {
                sum += parseFloat(act_manpower[i].ACT_MHRS);
            }

            if (plnmhrs < 5) {
                var thdActual = parseFloat(plnmhrs) * 3;
            } else if (plnmhrs > 5) {
                var thdActual = parseFloat(plnmhrs) * 2;
            }

            if (sum > thdActual) {
                return "<button style='min-width:120px;height: 28px;line-height:28px;color:#FF0000;width:100%;background-color: #ffffff;border: 1px solid #FF0000;margin-bottom:2px;' class='remarksS remarksS-803356826'>Abnormal</button>";
            } else {
                return "<button style='min-width:120px;height: 28px;line-height:28px;color:#7ecc80;width:100%;background-color: #ffffff;border: 1px solid #7ecc80;margin-bottom:2px;' class='remarksS remarksS-803356826'>Normal</button>";
            }
        },
        getProject: function() {
            // return new Promise((resolve, reject) => {
            //     axios.get('/api/slot_and_capacity/planning_gate/show/' + this.$props.pg_id)
            //     .then( res => {
            //         if (res.data.status == 'success') {
            //             this.pg = res.data.data;
            //             this.pg_position = res.data.position;
            //             this.gantt.tasks.data[0].duration = this.pg.TAT;
            //             this.gantt.tasks.data[0].start_date = this.pg.start_date+" 00:00:00.000";
            //             resolve();
            //         }
            //     })
            // });

            return new Promise((resolve, reject) => {
                axios
                    .get(
                        "/api/slot_and_capacity/planning_gate/showforgantt/" +
                            this.$props.pg_id
                    )
                    .then(res => {
                        if (res.data.status == "success") {
                            this.pg = res.data.data;
                            // this.pg_position = res.data.position;
                            resolve();
                        }
                    });
            });
        },
        // render awal
        initGantt: function() {
            axios
                .get(
                    "/api/booking_and_submission/show_gantt/" +
                        this.$props.pg_id +
                        "/" +
                        this.$props.version
                )
                .then(res => {
                    if (res.data.success) {
                        if (res.data.data.data.length < 1) {
                            toastr.warning(
                                "No gantt data found on this version"
                            );
                        }
                        this.gantt.tasks = res.data.data;
                        this.gantt_id = res.data.data.gantt_id;
                        this.initDaily(
                            this.$props.pg_id,
                            this.$props.version
                        ).then(() => {
                            this.founded = true;
                            this.loading.isLoading = false;
                        });
                    } else {
                        this.founded = false;
                        this.loading.isLoading = false;
                    }
                })
                .catch(e => {
                    console.log("Error :" + e);
                    this.loading.isLoading = false;
                });
        },

        initGanttJob: function() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        "/api/booking_and_submission/get_gantt_job/" +
                            this.pg_data.f_pg_id +
                            "/" +
                            this.pg.hangar.name
                    )
                    .then(res => {
                        this.all_order = res.data;
                        this.temp_all_order = JSON.parse(
                            JSON.stringify(res.data)
                        );
                        resolve();
                    });
            });
        },

        initGanttSuggest: function() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        "/api/booking_and_submission/get_gantt_suggest_job/" +
                            this.pg_data.f_pg_id +
                            "/" +
                            this.$props.version +
                            "/" +
                            this.pg_data.f_date +
                            "/" +
                            this.pg.hangar.name
                    )
                    .then(res => {
                        this.suggestion_order = res.data.suggest;
                        this.detail_suggest = res.data.detail_suggest;
                        resolve();
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        toastr.error("Failed get manpower data");
                        resolve();
                    });
            });
        },

        initPowerFirstShift: function() {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        "/api/booking_and_submission/get_gantt_manpower_first_shift",
                        {
                            date: this.pg_data.f_date,
                            line: this.unit.unit,
                            cabin: this.unit.cabin,
                            structure: this.unit.structure,
                            type: this.pg_data.f_type.toUpperCase()
                        }
                    )
                    .then(res => {
                        this.manpower = res.data;
                        this.temp_manpower = JSON.parse(
                            JSON.stringify(res.data)
                        );
                        resolve();
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        toastr.error("Failed get manpower data");
                        resolve();
                    });
            });
        },

        initPowerSecondShift: function() {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        "/api/booking_and_submission/get_gantt_manpower_second_shift",
                        {
                            date: this.pg_data.f_date,
                            line: this.unit.unit,
                            cabin: this.unit.cabin,
                            structure: this.unit.structure,
                            type: this.pg_data.f_type.toUpperCase()
                        }
                    )
                    .then(res => {
                        this.manpower = res.data;
                        this.temp_manpower = JSON.parse(
                            JSON.stringify(res.data)
                        );
                        resolve();
                    });
            });
        },

        handlerInitManpower: function() {
            this.loading.isLoadingManpower = true;
            if (this.pg_data.f_shift === "shift-1") {
                this.initPowerFirstShift().then(() => {
                    this.loading.isLoadingManpower = false;
                });
            } else {
                this.initPowerSecondShift().then(() => {
                    this.loading.isLoadingManpower = false;
                });
            }
        },

        initResume: function() {
            let shift = "1";
            if (this.pg_data.f_shift === "shift-2") {
                shift = "2";
            }
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        "/api/booking_and_submission/get_gantt_list/" +
                            this.pg_data.f_pg_id +
                            "/" +
                            this.pg_data.f_date +
                            "/" +
                            shift +
                            "/" +
                            this.pg.hangar.name +
                            "/" +
                            this.pg_data.f_type.toUpperCase()
                    )
                    .then(res => {
                        this.resume = res.data;
                        resolve();
                    });
            });
        },

        initTotalResume: function() {
            this.total_mhrs = 0;
            this.skill_need = [];
            this.total_manpower = 0;

            for (let i = 0; i < this.resume.length; i++) {
                if (this.resume[i].plan_mhrs !== null) {
                    this.total_mhrs += parseFloat(this.resume[i].plan_mhrs);
                }

                let temp_skill = [];
                if (this.resume[i].skill_set !== null) {
                    temp_skill = this.resume[i].skill_set.split(",");
                }
                // this.total_manpower += this.resume[i].power.length;

                let temp_nopeg = [];
                for (let k = 0; k < this.resume[i].power.length; k++) {
                    if (!temp_nopeg.includes(this.resume[i].power[k].NOPEG)) {
                        temp_nopeg.push(this.resume[i].power[k].NOPEG);
                        this.total_manpower += 1;
                    }
                }

                for (let j = 0; j < temp_skill.length; j++) {
                    if (!this.skill_need.includes(temp_skill[j])) {
                        this.skill_need.push(temp_skill[j]);
                    }
                }
            }
        },

        initData: function() {
            this.all_order = [];
            this.resume = [];
            this.suggestion_order = [];
            this.manpower = [];
            this.loading.isLoadingJob = true;
            this.filter = "";
            this.detail_suggest = [];
            this.active_changed = false;
            this.data_tools = [];
            this.inited_order = [];
            this.handlerResetPanel();

            let title = `#${this.pg_data.f_pg_id}/${this.pg_data.f_date}/${
                this.pg_data.f_shift === "shift-1" ? 1 : 2
            }/${this.pg_data.f_type.toUpperCase()}`;
            document.getElementById("daily-menu-title").innerHTML = title;

            let now = new Date();
            now.setHours(0, 0, 0, 0);
            let plan_date = new Date(this.pg_data.f_date);
            plan_date.setHours(0, 0, 0, 0);

            if (plan_date < now) {
                this.container.order = false;
                this.container.manpower = false;
                document.getElementById("btn-save-data").disabled = true;
                this.is_daily_menu_expired = true;
                this.initResume().then(() => {
                    this.loading.isLoadingJob = false;
                });
            } else {
                document.getElementById("btn-save-data").disabled = false;
                this.is_daily_menu_expired = false;

                if (this.pg_data.f_status === "daily") {
                    this.container.order = true;
                    this.container.manpower = false;
                    this.loading.isLoadingAllJob = true;
                    this.initResume().then(() => {
                        this.loading.isLoadingJob = false;

                        this.initGanttJob().then(() => {
                            this.initGanttSuggest().then(() => {
                                this.loading.isLoadingAllJob = false;
                            });
                        });
                    });
                } else if (this.pg_data.f_status === "manpower") {
                    this.container.order = false;
                    this.container.manpower = true;
                    this.initResume().then(() => {
                        this.loading.isLoadingJob = false;
                    });
                }
            }
        },

        initReport: function() {
            let title = `#${this.daily_report.f_pg_id}/${
                this.daily_report.f_date
            }/${
                this.daily_report.f_shift === "shift-1" ? 1 : 2
            }/${this.daily_report.f_type.toUpperCase()}`;
            document.getElementById("daily-report-title").innerHTML = title;
            this.d_reports = [];
            this.loading.isLoadingGanttDailyReport = true;

            // init data report
            this.initDataReport()
                .then(() => {
                    this.loading.isLoadingGanttDailyReport = false;

                    // init data report additional
                    this.initDataReportAdditional()
                        .then(res => {
                            if (res.length > 0) {
                                this.handlerPushDailyReport(res);
                            }
                            // init data report from barcode
                            this.initDataReportBarcode()
                                .then(res => {
                                    if (res.length > 0) {
                                        this.handlerPushDailyReport(res);
                                    }
                                })
                                .catch(e => {
                                    console.log("Error: " + e);
                                    toastr.error(
                                        "Failed get daily report from jobcard recording"
                                    );
                                    this.loading.isLoadingGanttDailyReport = false;
                                });
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            toastr.error(
                                "Failed get daily report additional data"
                            );
                            this.loading.isLoadingGanttDailyReport = false;
                        });
                })
                .catch(e => {
                    this.loading.isLoadingGanttDailyReport = false;
                    console.log("Error: " + e);
                    toastr.error("Failed get daily report data");
                });
        },

        initDataReport: function() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `/api/booking_and_submission/get_gantt_daily_report/${
                            this.daily_report.f_pg_id
                        }/${this.daily_report.f_date}/${
                            this.daily_report.f_shift === "shift-1" ? 1 : 2
                        }/${
                            this.pg.hangar.name
                        }/${this.daily_report.f_type.toUpperCase()}`
                    )
                    .then(res => {
                        this.d_reports = res.data;
                        // this.d_reports = res.data;
                        // this.jumlah = this.d_reports.act_manpower.reduce((sum, curr) => sum + curr.ACT_MHRS, 0);
                        console.log(res.data.data);
                        resolve();
                    })
                    .catch(e => {
                        reject(e);
                    });
            });
        },

        initDataReportBarcode: function() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `/api/booking_and_submission/get_gantt_daily_report_barcode/${
                            this.daily_report.f_pg_id
                        }/${this.daily_report.f_date}/${
                            this.daily_report.f_shift === "shift-1" ? 1 : 2
                        }/${
                            this.pg.hangar.name
                        }/${this.daily_report.f_type.toUpperCase()}`
                    )
                    .then(res => {
                        resolve(res.data);
                    })
                    .catch(e => {
                        reject(e);
                    });
            });
        },

        initDataReportAdditional: function() {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `/api/booking_and_submission/get_gantt_daily_report_additional/${
                            this.daily_report.f_pg_id
                        }/${this.daily_report.f_date}/${
                            this.daily_report.f_shift === "shift-1" ? 1 : 2
                        }/${
                            this.pg.hangar.name
                        }/${this.daily_report.f_type.toUpperCase()}`
                    )
                    .then(res => {
                        resolve(res.data);
                    })
                    .catch(e => {
                        reject(e);
                    });
            });
        },
        // render awal - 2
        initDaily: function(pgid, version) {
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        "/api/booking_and_submission/get_gantt_daily_menu/" +
                            pgid +
                            "/" +
                            version
                    )
                    .then(res => {
                        this.gantt.daily = res.data;
                        resolve();
                    });
            });
        },

        initUnit: function() {
            axios
                .get(
                    `/api/booking_and_submission/get_pm_unit/${this.pg.line.id}/production-manager`
                )
                .then(res => {
                    this.unit = res.data;
                    console.log(res.data);
                });
        },

        hideModal: function(modal_name) {
            $("#" + modal_name).modal("hide");
        },

        handlerGanttMaterial: function(rev_no, order_no, index) {
            this.loading.isLoadingGanttMaterial = true;
            return new Promise((resolve, reject) => {
                axios
                    .get(
                        `/api/booking_and_submission/get_gantt_material/${rev_no}/${order_no}/${this.pg.hangar.name}`
                    )
                    .then(res => {
                        this.material.rows = res.data;
                        resolve();
                    });
            });
        },

        handlerFilterJob: function() {
            this.loading.isLoadingAllJob = true;

            setTimeout(() => {
                if (this.filter == "") {
                    this.is_search = false;
                    this.all_order = this.temp_all_order;
                } else {
                    this.is_search = true;
                    let temp_order = this.temp_all_order.filter(
                        d => d.order_no === this.filter
                    );
                    this.all_order = temp_order;
                }
            }, 1000);

            setTimeout(() => {
                this.loading.isLoadingAllJob = false;
            }, 1000);
        },

        handlerModalMaterial: function(rev_no, order_no, index) {
            document.getElementById("modal-order-number").innerHTML =
                order_no === undefined ? "" : "#" + order_no;
            $("#modal-detail-material").modal("show");

            this.material.rows = [];
            this.handlerGanttMaterial(rev_no, order_no, index).then(() => {
                this.loading.isLoadingGanttMaterial = false;
            });
        },

        handlerModalTools: function(rev_no, order_no, index) {
            document.getElementById("modal-tools-required").innerHTML =
                order_no === undefined ? "" : "#" + order_no;
            this.tools.rows = [];
            this.active_order = order_no;
            this.m_tools.serverParams.searchTerm = "";

            // let has_active = document.getElementById("btn-save-data");

            // if(has_active.disabled) {
            //     document.getElementById("add-tools-modal").disabled = true;
            // }else {
            //     document.getElementById("add-tools-modal").disabled = false;
            // }

            $("#modal-detail-tools").modal("show");

            this.loading.isLoadingGanttTools = true;

            this.handlerInitDataTools(order_no).then(() => {
                // this.handlerInitTools(order_no);
                this.loading.isLoadingGanttTools = false;
            });
        },

        // handlerModalMasterTools: function() {
        //     this.inited_modal_add_tools = true;
        //     this.m_tools.serverParams.searchTerm = "";
        //     $("#modal-detail-master-tools").modal('show');
        //     this.$refs['tableMasterTools'].reset();
        // },

        handlerCheckMaterial: function(rev_no, order_no, index) {
            axios
                .get(
                    `/api/booking_and_submission/get_gantt_material/${rev_no}/${order_no}/${this.pg.hangar.name}`
                )
                .then(res => {
                    if (res.data.length > 0) {
                        document.getElementById(
                            "elem-material-found-" + index
                        ).style.display = "block";
                        document.getElementById(
                            "elem-material-notfound-" + index
                        ).style.display = "none";
                    } else {
                        document.getElementById(
                            "elem-material-found-" + index
                        ).style.display = "none";
                        document.getElementById(
                            "elem-material-notfound-" + index
                        ).style.display = "block";
                    }
                });
        },

        handlerFilterManPower: function() {
            this.handlerResetPanel();
            this.loading.isLoadingManpower = true;
            if (this.filter_manpower == "") {
                this.manpower = this.temp_manpower;

                setTimeout(() => {
                    this.loading.isLoadingManpower = false;
                }, 1000);
            } else {
                let shift = "1";
                if (this.pg_data.f_shift === "shift-2") {
                    shift = "2";
                }

                axios
                    .get(
                        "/api/booking_and_submission/get_gantt_manpower_by/" +
                            this.pg_data.f_date +
                            "/" +
                            this.filter_manpower +
                            "/" +
                            shift
                    )
                    .then(res => {
                        this.manpower = res.data;
                        this.loading.isLoadingManpower = false;
                    });
            }
        },

        handlerSaveDailyMenu: function() {
            if (!this.validation()) return;
            swal({
                title: "Continue update this item ?",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(value => {
                if (value) {
                    this.loading.isLoadingJob = true;
                    this.handleButton("btn-save-data", "load").then(() => {
                        axios
                            .post(
                                "/api/booking_and_submission/add_daily_menu",
                                {
                                    pg_id: this.pg_data.f_pg_id,
                                    plan_date: this.pg_data.f_date,
                                    data: this.resume,
                                    shift: this.pg_data.f_shift,
                                    tools: this.data_tools,
                                    inited_order: this.inited_order,
                                    type: this.pg_data.f_type.toUpperCase()
                                }
                            )
                            .then(res => {
                                if (res.data.success) {
                                    toastr.success(res.data.message);
                                    this.active_changed = false;
                                    this.inited_order = [];
                                    this.forceRerender();
                                } else {
                                    toastr.error(res.data.message);
                                }
                                this.handleButton("btn-save-data", "stop");
                                this.loading.isLoadingJob = false;
                            })
                            .catch(e => {
                                console.log("Error: " + e);
                                toastr.error(res.data.message);
                                this.loading.isLoadingJob = false;
                                this.handleButton("btn-save-data", "stop");
                            });
                    });
                } else {
                    toastr.info("Canceled");
                }
            });
        },

        validation: function() {
            if (this.resume.length < 1) {
                toastr.warning("Resume can't be empty");
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
                    element.className = "button is-success";
                    element.disabled = false;
                    resolve();
                }
            });
        },

        handlerClock: function(clock) {
            let styles = "";

            if (clock === undefined) {
                styles = "in";
            } else {
                if (!clock.hasOwnProperty("1") && !clock.hasOwnProperty("4")) {
                    styles = "out";
                } else {
                    if (
                        clock.hasOwnProperty("1") &&
                        !clock.hasOwnProperty("4")
                    ) {
                        styles = "in";
                    } else if (
                        !clock.hasOwnProperty("1") &&
                        clock.hasOwnProperty("4")
                    ) {
                        styles = "out";
                    } else if (
                        clock.hasOwnProperty("1") &&
                        clock.hasOwnProperty("4")
                    ) {
                        let clock_in = new Date(
                            this.pg_data.f_date +
                                " " +
                                clock[1][clock[1].length - 1]
                        );
                        let clock_out = new Date(
                            this.pg_data.f_date +
                                " " +
                                clock[4][clock[4].length - 1]
                        );
                        let clock_now = new Date();

                        if (clock_in < clock_out) {
                            if (clock_out < clock_now) {
                                styles = "out";
                            } else {
                                styles = "in";
                            }
                        } else {
                            if (clock_out < clock_now) {
                                styles = "in";
                            } else {
                                styles = "out";
                            }
                        }
                    } else {
                        styles = "out";
                    }
                }
            }
            return styles;
        },

        log: function(evt) {
            window.console.log(evt);
        },

        handlerChangeManpower: function() {
            let temp_power = JSON.parse(JSON.stringify(this.temp_manpower));
            this.manpower = temp_power;
        },

        handlerChangeResume: function() {
            // console.log(this.resume);
        },

        handlerMoveJobAll: function(evt) {
            if (
                evt.to.className.toString() !== "list-resume" &&
                evt.to.className.toString() !== "list-all-order"
            ) {
                return false;
                // if(this.resume.length > 0) {
                //     let order_no = evt.draggedContext.element.order_no;
                //     let temp_order = this.resume.filter(d => d.order_no === order_no);

                //     if(temp_order.length > 0) {
                //         return false
                //     }
                // }
            }
        },

        handlerMoveJobSuggestion: function(evt) {
            if (
                evt.to.className.toString() !== "list-resume" &&
                evt.to.className.toString() !== "list-suggestion"
            ) {
                return false;
            }
        },

        handlerPutResume: function(evt) {
            if (evt.to.className.toString() === "list-resume") {
                if (this.resume.length > 0) {
                    let order_no = this.resume[evt.newIndex].order_no;
                    let temp_order = this.resume.filter(
                        d => d.order_no === order_no
                    );

                    if (temp_order.length > 1) {
                        toastr.warning("Job already exists");
                        this.resume.splice(evt.newIndex, 1);
                    } else {
                        this.active_changed = true;
                    }
                }
            }
        },

        handlerMoveResume: function(evt) {
            if (evt.to.className.toString() === "list-suggestion") {
                if (this.suggestion_order.length > 0) {
                    let order_no = this.suggestion_order[evt.newIndex].order_no;
                    let temp_order = this.suggestion_order.filter(
                        d => d.order_no === order_no
                    );

                    if (temp_order.length > 1) {
                        this.suggestion_order.splice(evt.newIndex, 1);
                    } else {
                        this.suggestion_order[evt.newIndex].power = [];
                    }
                } else {
                    this.suggestion_order[evt.newIndex].power = [];
                }
            } else if (evt.to.className.toString() === "list-all-order") {
                if (this.all_order.length > 0) {
                    let order_no = this.all_order[evt.newIndex].order_no;
                    let temp_order = this.all_order.filter(
                        d => d.order_no === order_no
                    );

                    if (temp_order.length > 1) {
                        this.all_order.splice(evt.newIndex, 1);
                    } else {
                        this.all_order[evt.newIndex].power = [];
                    }
                } else {
                    this.all_order[evt.newIndex].power = [];
                }
            }

            this.active_changed = true;
        },

        prepareMoveResume: function(evt) {
            if (
                evt.to.className.toString() !== "list-suggestion" &&
                evt.to.className.toString() !== "list-all-order" &&
                evt.to.className.toString() !== "list-resume"
            ) {
                return false;
            }
        },

        handlerPullPower: function(evt) {
            // console.log(evt);
            let id = evt.to.className.toString().split("-");
            let class_name = "list-power-" + id[id.length - 1];

            if (evt.to.className.toString() === class_name) {
                if (this.resume[id[id.length - 1]].power.length > 0) {
                    let nopeg = this.resume[id[id.length - 1]].power[
                        evt.newIndex
                    ].NOPEG;
                    let temp_power = this.resume[
                        id[id.length - 1]
                    ].power.filter(d => d.NOPEG === nopeg);

                    if (temp_power.length > 1) {
                        toastr.warning(
                            "Manpower already exists for selected job"
                        );
                        this.resume[id[id.length - 1]].power.splice(
                            evt.newIndex,
                            1
                        );
                    }
                }
            }
        },

        handlerSkill: function(skill) {
            let result = "";
            switch (skill) {
                case "A2":
                    result = "I Stamp AP";
                    break;
                case "A1":
                    result = "M Stamp AP";
                    break;
                case "E2":
                    result = "I Stamp EA";
                    break;
                case "E1":
                    result = "M Stamp EA";
                    break;
                case "S":
                    result = "Structure";
                    break;
                case "C":
                    result = "Cabin";
                    break;
                case "IS":
                    result = "I Stamp Workshop";
                    break;
                default:
                    result = skill;
                    break;
            }

            return result;
        },

        /**
         * Datatable - Server Side
         */
        updateParams(newProps) {
            this.m_tools.serverParams = Object.assign(
                {},
                this.m_tools.serverParams,
                newProps
            );
        },

        onPageChange(params) {
            this.updateParams({ page: params.currentPage });
            this.loadItems();
        },

        onPerPageChange(params) {
            this.updateParams({ perPage: params.currentPerPage });
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                sort: {
                    type: params[0].type,
                    field: params[0].field
                }
            });
            this.updateParams({ page: 1 });
            this.loadItems();
        },

        onColumnFilter(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });
            this.loadItems();
        },

        onColumnSearch(params) {
            this.updateParams(params);
            this.updateParams({ page: 1 });
            this.loadItems();
        },

        /**
         * load items is what brings back the rows from server
         */
        loadItems() {
            this.handleDatatableChange(this.m_tools.serverParams).then(() => {
                this.loading.isLoadingGanttMasterTools = false;
            });
        },

        handleDatatableChange: function(params) {
            // this.loading.isLoadingGanttMasterTools = true;
            this.loading.isLoadingGanttTools = true;

            return new Promise((resolve, reject) => {
                // this.m_tools.rows = this.dummy;
                // this.m_tools.totalRows = res.dummy.length;

                axios
                    .post("/api/tool/get_tool", params)
                    .then(res => {
                        this.m_tools.rows = res.data.data;
                        this.m_tools.totalRows = res.data.total;
                        this.loading.isLoadingGanttTools = false;
                        resolve();
                    })
                    .catch(e => {
                        console.log("Error: " + e);
                        resolve();
                    });
            });
        },

        capitalizeFLetter: function(data) {
            let result = "";
            if (data !== null) {
                result = data.charAt(0).toUpperCase() + data.slice(1);
            }
            return result;
        },

        handlerAddTools: function(data) {
            for (let i = 0; i < this.data_tools.length; i++) {
                if (this.data_tools[i]["order_no"] === this.active_order) {
                    let tmp_tools = this.data_tools[i]["data"].filter(
                        d => d.barcode === data["barcode"]
                    );
                    if (tmp_tools.length > 0) {
                        toastr.warning("Tools already exists on selected job");
                        return;
                    }

                    this.data_tools[i]["data"].push(data);
                    this.tools.rows = this.data_tools[i]["data"];
                    let is_added = this.data_tools[i]["data"].filter(
                        d => d.barcode === data["barcode"]
                    );

                    if (is_added.length > 0) {
                        toastr.success("Success add tools");
                        this.active_changed = true;
                    } else {
                        toastr.warning("Failed add tools");
                    }

                    i = this.data_tools.length;
                    return;
                }
            }
        },

        handlerInitTools: function(order_number) {
            let temp_tools = this.data_tools.filter(
                d => d.order_no === order_number
            );
            if (temp_tools.length > 0) {
                this.tools.rows = temp_tools[0].data;
            } else {
                this.data_tools.push({
                    order_no: order_number,
                    data: []
                });

                this.tools.rows = [];
            }
        },

        handlerRemoveTools: function(index) {
            for (let i = 0; i < this.data_tools.length; i++) {
                if (this.data_tools[i]["order_no"] === this.active_order) {
                    this.data_tools[i].data.splice(index, 1);
                    this.tools.rows = this.data_tools[i].data;
                    this.active_changed = true;

                    i = this.data_tools.length;
                    return;
                }
            }
        },

        handlerCloseDailyMenu: function() {
            let is_edit_daily = document.getElementById("btn-save-data");
            if (!is_edit_daily.disabled && this.active_changed) {
                swal({
                    title: "There are unsaved changes.",
                    text: "Are you sure that you want to close this form?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                }).then(value => {
                    if (value) {
                        toastr.info("Canceled");
                        $("#modal-production-planning").modal("hide");
                    } else {
                        return;
                    }
                });
            } else {
                $("#modal-production-planning").modal("hide");
            }
        },

        handlerCloseDailyReport: function() {
            let is_edit_report = document.getElementById(
                "btn-save-daily-report"
            );
            if (!is_edit_report.disabled && this.report_active_changed) {
                swal({
                    title: "There are unsaved changes.",
                    text: "Are you sure that you want to close this form?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                }).then(value => {
                    if (value) {
                        toastr.info("Canceled");
                        $("#modal-daily-report").modal("hide");
                    } else {
                        return;
                    }
                });
            } else {
                $("#modal-daily-report").modal("hide");
            }
        },

        handlerInitDataTools: function(order_no) {
            return new Promise((resolve, reject) => {
                if (this.inited_order.includes(order_no)) {
                    for (let i = 0; i < this.data_tools.length; i++) {
                        if (this.data_tools[i]["order_no"] === order_no) {
                            this.tools.rows = this.data_tools[i]["data"];

                            i = this.data_tools.length;
                            resolve();
                        }
                    }
                } else {
                    axios
                        .post(
                            "/api/booking_and_submission/get_gantt_daily_menu_tools",
                            {
                                pg_id: this.pg.pg_id,
                                no_order: order_no,
                                plan_date: this.pg_data.f_date,
                                shift:
                                    this.pg_data.f_shift === "shift-1" ? 1 : 2,
                                type: this.pg_data.f_type.toUpperCase()
                            }
                        )
                        .then(res => {
                            if (res.data.hasOwnProperty("order_no")) {
                                this.inited_order.push(res.data.order_no);

                                if (this.data_tools.length < 1) {
                                    this.data_tools.push(res.data);
                                    this.tools.rows = res.data.data;
                                    resolve();
                                } else {
                                    for (
                                        let i = 0;
                                        i < this.data_tools.length;
                                        i++
                                    ) {
                                        if (
                                            this.data_tools[i]["order_no"] ===
                                            res.data.order_no
                                        ) {
                                            if (
                                                this.data_tools[i]["data"]
                                                    .length < 1
                                            ) {
                                                this.data_tools[i]["data"] =
                                                    res.data.data;
                                                this.tools.rows = this.data_tools[
                                                    i
                                                ]["data"];
                                                i = this.data_tools.length;

                                                resolve();
                                            } else {
                                                for (
                                                    let j = 0;
                                                    j < res.data.data.length;
                                                    j++
                                                ) {
                                                    let has_tool = this.data_tools[
                                                        i
                                                    ]["data"].filter(
                                                        d =>
                                                            d.barcode ===
                                                            res.data.data[j]
                                                                .barcode
                                                    );

                                                    if (has_tool.length < 1) {
                                                        this.data_tools[i][
                                                            "data"
                                                        ].push(
                                                            res.data.data[j]
                                                        );
                                                    }
                                                }
                                                this.tools.rows = this.data_tools[
                                                    i
                                                ]["data"];
                                                i = this.data_tools.length;

                                                resolve();
                                            }
                                        } else {
                                            if (
                                                i ==
                                                this.data_tools.length - 1
                                            ) {
                                                this.data_tools.push(res.data);
                                                this.tools.rows = res.data.data;
                                                resolve();
                                            }
                                        }
                                    }
                                }
                            } else {
                                resolve();
                            }
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            resolve();
                        });
                }
            });
        },

        handlerClassJob: function(data) {
            let class_name = "";
            if (data == "GA01") {
                class_name = "box-job";
            } else if (data == "GA02") {
                class_name = "box-mdr";
            } else {
                class_name = "box-default";
            }

            return class_name;
        },

        handlerSkillColorOrder: function(data_skill) {
            let result = "";

            if (data_skill !== null) {
                let fix_skill = data_skill.split(" ").join("");
                let arr_skill = fix_skill.split(",");

                for (let i = 0; i < arr_skill.length; i++) {
                    let temp_skill = "";
                    switch (arr_skill[i]) {
                        case "A1":
                            temp_skill = `<span class='skill-a1'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "A2":
                            temp_skill = `<span class='skill-a2'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "E1":
                            temp_skill = `<span class='skill-e1'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "E2":
                            temp_skill = `<span class='skill-e2'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "S":
                            temp_skill = `<span class='skill-s'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "S1":
                            temp_skill = `<span class='skill-s'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "S2":
                            temp_skill = `<span class='skill-s'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "C":
                            temp_skill = `<span class='skill-c'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "C1":
                            temp_skill = `<span class='skill-c'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "C2":
                            temp_skill = `<span class='skill-c'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "IS":
                            temp_skill = `<span class='skill-is'><b>${arr_skill[i]}</b></span>`;
                            break;
                        case "Q":
                            temp_skill = `<span class='skill-q'><b>${arr_skill[i]}</b></span>`;
                            break;
                        default:
                            temp_skill = `<span class='skill-default'><b>${arr_skill[i]}</b></span>`;
                            break;
                    }

                    if (result == "") {
                        result += temp_skill;
                    } else {
                        result += ", " + temp_skill;
                    }
                }
            }

            return result;
        },

        handlerSkillColorResume: function(data_skill) {
            let result = "";

            if (data_skill !== null) {
                let fix_skill = data_skill.split(" ").join("");

                let arr_skill = fix_skill.split(",");

                for (let i = 0; i < arr_skill.length; i++) {
                    let temp_skill = "";
                    switch (arr_skill[i]) {
                        case "A1":
                            temp_skill = `<div class='skill-resume skill-a1-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "A2":
                            temp_skill = `<div class='skill-resume skill-a2-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "E1":
                            temp_skill = `<div class='skill-resume skill-e1-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "E2":
                            temp_skill = `<div class='skill-resume skill-e2-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "S":
                            temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "S1":
                            temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "S2":
                            temp_skill = `<div class='skill-resume skill-s-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "C":
                            temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "C1":
                            temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "C2":
                            temp_skill = `<div class='skill-resume skill-c-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "IS":
                            temp_skill = `<div class='skill-resume skill-is-resume'>${arr_skill[i]}</div>`;
                            break;
                        case "Q":
                            temp_skill = `<div class='skill-resume skill-q-resume'>${arr_skill[i]}</div>`;
                            break;
                        default:
                            temp_skill = `<div class='skill-resume skill-default-resume'>${arr_skill[i]}</div>`;
                            break;
                    }

                    result += temp_skill;
                }
            }

            return result;
        },

        handlerColorManpower: function(skill) {
            let result = "";
            switch (skill) {
                case "A1":
                    result = "skill-a1-resume";
                    break;
                case "A2":
                    result = "skill-a2-resume";
                    break;
                case "E1":
                    result = "skill-e1-resume";
                    break;
                case "E2":
                    result = "skill-e2-resume";
                    break;
                case "S":
                    result = "skill-s-resume";
                    break;
                case "C":
                    result = "skill-c-resume";
                    break;
                case "IS":
                    result = "skill-is-resume";
                    break;
                default:
                    result = "skill-default-resume";
                    break;
            }

            return result;
        },

        handlerManpowerName: function(manpower) {
            let arr_manpower = manpower.split(" ");
            let result = "";

            for (let i = 0; i < arr_manpower.length; i++) {
                if (i <= 1) {
                    result += arr_manpower[i] + " ";
                } else {
                    result +=
                        " " + arr_manpower[i].charAt(0).toUpperCase() + ".";
                }
            }

            return result;
        },

        handlerCollapse: function(elem, name) {
            let toogle = ["keyboard_arrow_right", "keyboard_arrow_down"];
            this.panel[name] = !this.panel[name];

            if (this.panel[name]) {
                document.getElementById(elem).innerHTML = toogle[1];
            } else {
                document.getElementById(elem).innerHTML = toogle[0];
            }
        },

        handlerResetPanel: function() {
            this.panel.dws_on = true;
            this.panel.dws_off = false;

            this.panel.dws_on_A1 = false;
            this.panel.dws_on_A2 = false;
            this.panel.dws_on_E1 = false;
            this.panel.dws_on_E2 = false;
            this.panel.dws_on_S = false;
            this.panel.dws_on_C = false;
            this.panel.dws_on_IS = false;
            this.panel.dws_on_NA = false;

            this.panel.dws_off_A1 = false;
            this.panel.dws_off_A2 = false;
            this.panel.dws_off_E1 = false;
            this.panel.dws_off_E2 = false;
            this.panel.dws_off_S = false;
            this.panel.dws_off_C = false;
            this.panel.dws_off_IS = false;
            this.panel.dws_off_NA = false;
        },

        handlerModalOrderDesc: function(data, order_no, desc, status, index) {
            this.active_order_report = index;
            document.getElementById("label-order-desc").innerHTML = data;
            document.getElementById("det-order-desc").value = desc;
            document.getElementById("title-order-desc").innerHTML = order_no;

            if (status === "D") {
                document.getElementById("det-order-desc").disabled = true;
            } else {
                document.getElementById("det-order-desc").disabled = false;
            }

            $("#modal-order-desc").modal("show");
        },

        handlerModalOrderRemarks: function(data, order_no, status, index) {
            this.active_order_report = index;
            document.getElementById("det-order-remarks").value = data;
            document.getElementById("title-order-remarks").innerHTML = order_no;

            if (status === "D") {
                document.getElementById("det-order-remarks").disabled = true;
            } else {
                document.getElementById("det-order-remarks").disabled = false;
            }

            $("#modal-order-remarks").modal("show");
        },

        handlerModalToolsReport: function(order_no) {
            document.getElementById("title-order-tools").innerHTML = order_no;
            this.loading.isLoadingGanttReportTools = true;

            this.handlerToolsReport(order_no)
                .then(() => {
                    this.loading.isLoadingGanttReportTools = false;
                })
                .catch(e => {
                    toastr.error("Failed get tools data");
                    console.log("Error: " + e);
                    this.loading.isLoadingGanttReportTools = falase;
                });

            $("#modal-tools-report").modal("show");
        },

        handlerToolsReport: function(order_no) {
            console.log(order_no);
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        "/api/booking_and_submission/get_gantt_daily_menu_tools",
                        {
                            pg_id: this.pg.pg_id,
                            no_order: order_no,
                            plan_date: this.daily_report.f_date,
                            shift:
                                this.daily_report.f_shift === "shift-1" ? 1 : 2
                        }
                    )
                    .then(res => {
                        this.t_reports.rows = res.data.data;
                        resolve();
                    })
                    .catch(e => {
                        reject(e);
                    });
            });
        },

        handlerModalAddReport: function() {
            this.m_order.selected = [];
            $("#modal-add-report").modal("show");
        },

        handlerAddReport: function() {
            if (this.m_order.selected.length < 1) {
                toastr.warning("No order has been selected");
                return;
            }

            for (let i = 0; i < this.m_order.selected.length; i++) {
                let temp_order = this.d_reports.filter(
                    d => d.order_no === this.m_order.selected[i].order_no
                );

                if (temp_order.length > 0) {
                    toastr.warning(
                        `Order ${this.m_order.selected[i].order_no} already exists`
                    );
                } else {
                    this.report_active_changed = true;
                    let order = this.m_order.selected[i];
                    order.is_daily = "D";
                    order.power = [];
                    order.act_manpower = [];
                    order.act_status = [];
                    order.remarks = [];
                    order.desc = [];
                    this.d_reports.push(order);
                }
            }
            toastr.success(`Success add order, please save your change`);
        },

        handelrFindOrder: function(query, order) {
            if (query.length >= 4) {
                this.m_order.loading = true;
                this.m_order.items = [];
                axios
                    .get(
                        `/api/booking_and_submission/get_gantt_job_by/${this.daily_report.f_pg_id}/${query}/${this.pg.hangar.name}`
                    )
                    .then(res => {
                        this.m_order.items = res.data;
                        this.m_order.loading = false;
                    });
            }
        },

        orderLabel({ order_no, order_type, skill_set }) {
            return `${order_no} | ${order_type} — [${skill_set}]`;
        },

        empLabel({ nama, nopeg }) {
            return `${nama} (${nopeg})`;
        },

        limitText: function(count) {
            return `and ${count} other orders`;
        },

        removeOrderReport: function(index) {
            this.d_reports.splice(index, 1);
        },

        handlerSaveDailyReport: function() {
            //console.log(this.d_reports);
            axios
                .post("/api/booking_and_submission/save_gantt_daily_report", {
                    pg_id: this.daily_report.f_pg_id,
                    date_plan: this.daily_report.f_date,
                    shift: this.daily_report.f_shift === "shift-1" ? 1 : 2,
                    data: this.d_reports,
                    type: this.daily_report.f_type.toUpperCase()
                })

                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                        this.report_active_changed = false;
                        setTimeout(() => {
                            this.initReport();
                        }, 1000);
                    } else {
                        toastr.warning(res.data.message);
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                });
        },

        handlerPushDailyReport: function(data) {
            for (let i = 0; i < data.length; i++) {
                this.d_reports.push(data[i]);
            }
        },

        handlerRemoveAdditional: function(order_no, index) {
            swal({
                title: "Continue remove this item ?",
                text: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(value => {
                if (value) {
                    this.loading.isLoadingGanttDailyReport = true;
                    axios
                        .post(
                            "/api/booking_and_submission/remove_gantt_daily_report",
                            {
                                pg_id: this.daily_report.f_pg_id,
                                plan_date: this.daily_report.f_date,
                                shift:
                                    this.daily_report.f_shift === "shift-1"
                                        ? 1
                                        : 2,
                                order_no: order_no,
                                type: this.daily_report.f_type.toUpperCase()
                            }
                        )
                        .then(res => {
                            if (res.data.success) {
                                this.d_reports.splice(index, 1);
                                toastr.success(res.data.message);
                            } else {
                                toastr.error(res.data.message);
                                setTimeout(() => {
                                    this.initReport();
                                }, 1000);
                            }
                            this.loading.isLoadingGanttDailyReport = false;
                        })
                        .catch(e => {
                            console.log("Error: " + e);
                            this.loading.isLoadingGanttDailyReport = true;
                        });
                } else {
                    toastr.info("Canceled");
                }
            });
        },

        handlerChangeActStatus: function(order_no, status) {
            axios
                .post(
                    "/api/booking_and_submission/update_gantt_daily_report_status",
                    {
                        pg_id: this.daily_report.f_pg_id,
                        plan_date: this.daily_report.f_date,
                        shift: this.daily_report.f_shift === "shift-1" ? 1 : 2,
                        order_no: order_no,
                        status: status
                    }
                )
                .then(res => {
                    if (res.data.success) {
                        toastr.success(res.data.message);
                    } else {
                        toastr.error(res.data.message);
                        setTimeout(() => {
                            this.initReport();
                        }, 1000);
                    }
                })
                .catch(e => {
                    toastr.error("Undefined error");
                    console.log("Error: " + e);
                });
        },

        handlerSaveDescription: function() {
            let desc = document.getElementById("det-order-desc").value;
            if (desc == "") {
                toastr.warning("Description field cant't be empty");
                return;
            }

            this.handleButton("btn-save-report-desc", "load").then(() => {
                axios
                    .post(
                        "/api/booking_and_submission/update_gantt_daily_report_desc",
                        {
                            pg_id: this.daily_report.f_pg_id,
                            plan_date: this.daily_report.f_date,
                            shift:
                                this.daily_report.f_shift === "shift-1" ? 1 : 2,
                            order_no: this.d_reports[this.active_order_report]
                                .order_no,
                            desc: desc
                        }
                    )
                    .then(res => {
                        if (res.data.success) {
                            toastr.success(res.data.message);
                            this.d_reports[
                                this.active_order_report
                            ].desc = desc;
                            setTimeout(() => {
                                this.hideModal("modal-order-desc");
                            }, 1000);
                        } else {
                            toastr.error(res.data.message);
                        }

                        this.handleButton("btn-save-report-desc", "stop");
                    })
                    .catch(e => {
                        toastr.error("Undefined error");
                        console.log("Error: " + e);
                        this.handleButton("btn-save-report-desc", "stop");
                    });
            });
        },

        handlerSaveRemarks: function() {
            let remarks = document.getElementById("det-order-remarks").value;
            if (remarks == "") {
                toastr.warning("Remarks field cant't be empty");
                return;
            }

            this.handleButton("btn-save-report-remarks", "load").then(() => {
                axios
                    .post(
                        "/api/booking_and_submission/update_gantt_daily_report_remarks",
                        {
                            pg_id: this.daily_report.f_pg_id,
                            plan_date: this.daily_report.f_date,
                            shift:
                                this.daily_report.f_shift === "shift-1" ? 1 : 2,
                            order_no: this.d_reports[this.active_order_report]
                                .order_no,
                            remarks: remarks
                        }
                    )
                    .then(res => {
                        if (res.data.success) {
                            toastr.success(res.data.message);
                            this.d_reports[
                                this.active_order_report
                            ].remarks = remarks;
                            setTimeout(() => {
                                this.hideModal("modal-order-remarks");
                            }, 1000);
                        } else {
                            toastr.error(res.data.message);
                        }

                        this.handleButton("btn-save-report-remarks", "stop");
                    })
                    .catch(e => {
                        toastr.error("Undefined error");
                        console.log("Error: " + e);
                        this.handleButton("btn-save-report-remarks", "stop");
                    });
            });
        },

        exportGantt: function(divName) {
            var monthScaleTemplate = function(date) {
                var dateToStr = gantt.date.date_to_str("%M");
                return dateToStr(date);
            };

            var weekScaleTemplate = function(date) {
                var dateToStr = gantt.date.date_to_str("%d");
                return dateToStr(date);
            };

            gantt.config.show_markers = false;

            gantt.config.subscales = [
                {
                    unit: "month",
                    step: 1,
                    template: monthScaleTemplate
                },
                {
                    unit: "day",
                    step: 7,
                    template: weekScaleTemplate
                }
            ];

            gantt.config.layout = {
                css: "gantt_container",
                rows: [
                    {
                        cols: [
                            {
                                view: "grid",
                                group: "grids",
                                scrollY: "scrollVer"
                            },
                            {
                                resizer: true,
                                width: 1
                            },
                            {
                                view: "timeline",
                                scrollX: "scrollHor",
                                scrollY: "scrollVer"
                            },
                            {
                                view: "scrollbar",
                                id: "scrollVer",
                                group: "vertical"
                            }
                        ]
                    }
                ]
            };
            gantt.config.open_tree_initially = true;
            gantt.init("gantt_area");
            gantt.parse(this.gantt.tasks);

            gantt.exportToPDF({
                name: `gantt_chart_${this.pg.pg_id}.pdf`,
                header: `
                    <link rel="stylesheet" href="/css/gantt.css" type="text/css">
                    <style>
                        .gantt_grid_scale .gantt_grid_head_cell {
                            color: rgb(75, 75, 75) !important;
                            font-weight: bold !important;
                            border-right: 1px solid #cecece !important;
                        }

                        .gantt_scale_cell {
                            color: rgb(75, 75, 75) !important;
                            font-weight: bold !important;
                            border-right: 1px solid #cecece !important;
                        }

                        .level_1 {
                            background-color: rgb(218, 119, 119) !important;
                            border: 2px solid rgb(218, 119, 119) !important;
                            color: rgb(218, 119, 119) !important;
                        }

                        .level_1 .gantt_task_progress {
                            background-color: #FF0018 !important;
                        }

                        .level_2 {
                            background-color: #3aac5d !important;
                            border: 2px solid #3aac5d !important;
                            color: #3aac5d !important;

                        }

                        .level_2 .gantt_task_progress {
                            background-color: #008026 !important;
                        }

                        .level_3 {
                            background-color: #2CBAD0 !important;
                            border: 2px solid #2CBAD0 !important;
                            color: #2CBAD0 !important;

                        }

                        .level_3 .gantt_task_progress {
                            background-color: #149CB0 !important;
                        }
                    </style>

                    ${this.handlerHeader(
                        this.$props.version,
                        this.pg.ac_reg !== null ? this.pg.ac_reg : "-",
                        this.pg.ac_type !== null ? this.pg.ac_type : "-",
                        this.pg.main_type !== null ? this.pg.main_type : "-",
                        this.pg.cust_code !== null ? this.pg.cust_code : "-",
                        this.pg.pg_id !== null ? this.pg.pg_id : "-",
                        this.pg.start_date !== null ? this.pg.start_date : "-",
                        this.pg.end_date !== null ? this.pg.end_date : "-"
                    )}
                `,
                footer: `${this.handlerFooter(
                    (this.pg_position.project_owner.name = null), // !== null ? this.pg_position.project_owner.name : "&emsp;&emsp;&emsp;",
                    (this.pg_position.project_sponsor.name = null) // !== null ? this.pg_position.project_sponsor.name : "&emsp;&emsp;&emsp;"
                )}`,
                locale: "en",
                skin: "terrace",
                raw: true
            });
            gantt.config.show_markers = true;

            this.forceRerender();
        },

        handlerHeader: function(
            version,
            ac_reg,
            ac_type,
            main_type,
            customer,
            rev_no,
            start_date,
            end_date
        ) {
            let result = `
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #cecece; color: #575656; ">
                    <tr>
                        <td style="border: 1px solid #cecece; width: 270px">
                            <div style="padding: 10px;">
                                <img style="width: 260px; height: 70px;" src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e2/GMF_AeroAsia_logo.svg/1280px-GMF_AeroAsia_logo.svg.png" alt="">
                            </div>
                        </td>
                        <td style="text-align: center; background-color: #E1EFDC; border: 1px solid #cecece; font-family: Arial, Helvetica, sans-serif;">
                            <div style="padding: 10px 0px 0px 0px;">
                                <p style="line-height: 5px; font-size: 13pt;">
                                    <b>AIRCRAFT MAINTENANCE PROJECT GANTT CHART</b>
                                </p>
                                <p style="line-height: 5px; font-size: 11pt;">
                                    <b>${ac_reg} / ${ac_type} / ${main_type} / ${customer}</b>
                                </p>
                                <p style="line-height: 5px; font-size: 11pt;">
                                    <b>${rev_no} / (${start_date} - ${end_date})</b>
                                </p>
                            </div>
                            <div style="text-align: right; padding-right: 30px; font-size: 11pt;">
                                <b>Gantt Chart Revision No. : (${version})</b>
                            </div>
                        </td>
                    </tr>
                </table>
            `;

            return result;
        },

        handlerFooter: function(project_owner, project_sponsor) {
            let result = `
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #cecece; color: #575656;">
                    <tr>
                        <td style="border: 1px solid #cecece; text-align: center; width: 50%">
                            <div style="font-family: Arial, Helvetica, sans-serif; padding: 3px 0px 3px 0px;">
                                <p style="line-height: 8px; font-size: 9pt;"><b>Prepared By,</b></p>
                                <p style="line-height: 8px; font-size: 9pt;"><b>Project Owner</b> </p>
                                <br>

                                <p style="line-height: 8px; font-size: 8pt;">(${project_owner})</p>
                            </div>
                        </td>
                        <td style="border: 1px solid #cecece; text-align: center; width: 50%">
                            <div style="font-family: Arial, Helvetica, sans-serif; padding: 3px 0px 3px 0px;">
                                <p style="line-height: 8px; font-size: 9pt;"><b>Approved By,</b></p>
                                <p style="line-height: 8px; font-size: 9pt;"><b>GM Base Maintenance Production Hangar</b> </p>
                                <br>

                                <p style="line-height: 8px; font-size: 8pt;">(${project_sponsor})</p>
                            </div>
                        </td>
                    </tr>
                </table>
                <div style="padding: 0px 0px 0px 10px;">
                    <p style="font-size: 10pt; color: #575656">Form No.: GMF/Q-462</p>
                </div>
            `;

            return result;
        },

        handlerPrintDailyMenu: function() {
            axios
                .get(
                    `/api/booking_and_submission/print_daily_menu/${
                        this.pg_data.f_pg_id
                    }/${this.pg_data.f_date}/${
                        this.pg_data.f_shift === "shift-1" ? 1 : 2
                    }/${
                        this.pg.hangar.name
                    }/${this.pg_data.f_type.toUpperCase()}`
                )
                .then(res => {
                    if (res.data.success) {
                        window.open(res.data.data);
                    } else {
                        toastr.error(res.data.message);
                    }
                })
                .catch(e => {
                    console.log("Error: " + e);
                });
        },

        handlerPrintDailyReport: function() {
            if (!this.validateExport()) return;

            this.handleButton("btn-export-daily-report", "load").then(() => {
                let mng_out = this.unit.employee.filter(
                    d => d.nopeg === this.exp_data.out_manager
                );
                let mng_in = this.unit.employee.filter(
                    d => d.nopeg === this.exp_data.in_manager
                );

                axios
                    .post(`/api/booking_and_submission/print_daily_report`, {
                        pg_id: this.daily_report.f_pg_id,
                        plan_date: this.daily_report.f_date,
                        shift: this.daily_report.f_shift === "shift-1" ? 1 : 2,
                        hangar: this.pg.hangar.name,
                        out_crew: this.exp_data.out_crew,
                        in_crew: this.exp_data.in_crew,
                        out_manager: {
                            name: mng_out[0].nama,
                            nopeg: mng_out[0].nopeg
                        },
                        in_manager: {
                            name: mng_in[0].nama,
                            nopeg: mng_in[0].nopeg
                        },
                        out_supervisior: {
                            name: this.m_emp.selected.nama,
                            nopeg: this.m_emp.selected.nopeg
                        },
                        in_supervisior: {
                            name: this.m_emp_in.selected.nama,
                            nopeg: this.m_emp_in.selected.nopeg
                        },
                        type: this.daily_report.f_type.toUpperCase()
                    })
                    .then(res => {
                        if (res.data.success) {
                            window.open(res.data.data);

                            setTimeout(() => {
                                this.hideModal("modal-export-report");
                            }, 1000);
                        } else {
                            toastr.error(res.data.message);
                        }
                        this.handleButton("btn-export-daily-report", "stop");
                    })
                    .catch(e => {
                        toastr.error("Undefined error");
                        console.log("Error: " + e);
                        this.handleButton("btn-export-daily-report", "stop");
                    });
            });
        },

        validateExport: function() {
            if (this.exp_data.out_crew === "") {
                toastr.warning("Outgoing crew field can't be empty");
                return false;
            }

            if (this.exp_data.in_crew === "") {
                toastr.warning("Incoming crew field can't be empty");
                return false;
            }

            if (this.exp_data.out_manager === "") {
                toastr.warning("Outgoing manager field can't be empty");
                return false;
            }

            if (this.exp_data.in_manager === "") {
                toastr.warning("Incoming manager field can't be empty");
                return false;
            }

            if (!this.m_emp.selected.hasOwnProperty("nopeg")) {
                toastr.warning("Outgoing supervisior field can't be empty");
                return false;
            }

            if (!this.m_emp_in.selected.hasOwnProperty("nopeg")) {
                toastr.warning("Incoming supervisior field can't be empty");
                return false;
            }

            return true;
        },

        handlerModalPrintReport: function() {
            this.exp_data.out_crew = "";
            this.exp_data.in_crew = "";
            this.exp_data.out_manager = "";
            this.exp_data.in_manager = "";
            this.m_emp.selected = [];
            this.m_emp_in.selected = [];
            $("#modal-export-report").modal("show");
        },

        handlerFindEmp: function(query) {
            this.m_emp.items = [];
            if (query.length >= 3) {
                this.m_emp.loading = true;
                axios
                    .post(`/api/booking_and_submission/get_emp_unit`, {
                        unit: this.unit.unit,
                        exclude_position: this.unit.dynamic_query,
                        keyword: query
                    })
                    .then(res => {
                        this.m_emp.items = res.data;
                        this.m_emp.loading = false;
                    });
            }
        },

        handlerFindEmpIn: function(query) {
            this.m_emp_in.items = [];
            if (query.length >= 3) {
                this.m_emp_in.loading = true;
                axios
                    .post(`/api/booking_and_submission/get_emp_unit`, {
                        unit: this.unit.unit,
                        exclude_position: this.unit.dynamic_query,
                        keyword: query
                    })
                    .then(res => {
                        this.m_emp_in.items = res.data;
                        this.m_emp_in.loading = false;
                    });
            }
        },

        syncGanttDate: function() {
            swal({
                title: "Synchronize Gantt Date",
                text: "This action will cause data loss. Continue?",
                icon: "warning",
                buttons: true,
                dangerMode: false
            }).then(value => {
                if (value) {
                    this.loading.isLoadingSyncDate = true;
                    axios
                        .get(
                            `/api/booking_and_submission/adjust_gantt_date/${this.gantt_id}/${this.$props.pg_id}`
                        )
                        .then(res => {
                            if (res.data.success) {
                                toastr.success(res.data.message);
                                setTimeout(() => {
                                    this.loading.isLoading = true;
                                    this.forceRerender();
                                }, 500);
                            } else {
                                toastr.error(res.data.message);
                            }
                            this.loading.isLoadingSyncDate = false;
                        })
                        .catch(e => {
                            this.loading.isLoadingSyncDate = false;
                            toastr.error("Undefined error");
                            console.log("Error: " + e);
                        });
                } else {
                    toastr.info("Action cancelled.");
                }
            });
        }

        // handlerFullScreen: function() {
        //     if (!gantt.getState().fullscreen) {
        //         gantt.expand();
        //     }
        //     else {
        //         gantt.collapse();
        //     }
        // }
    }
};
</script>
